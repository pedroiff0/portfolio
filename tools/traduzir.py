#!/usr/bin/env python3
"""
traduzir.py — traduz por IA só os trechos pt-BR que mudaram desde a última tradução.

Fluxo: o Pedro edita a nota do vault (PORTFOLIO_FONTE) em pt-BR e marca `traduzir: true`.
Este script sincroniza a nota para src/conteudo.md, acha os blocos cujo hash pt mudou,
pede en/es/fr ao Claude Code em modo não interativo (`claude -p`), grava src/traducoes.json,
desmarca `traduzir` na nota, regera assets/js/projects.js e PUBLICA: roda eventos.py, valida (make lint),
commita e dá push neste repo (autorizado pelo Pedro em 05/11/2026 só para o repo do portfólio; com --sem-push não commita).
Marcar `traduzir: true` na nota = "traduzir o que mudou e publicar a página".

Uso:
  python3 tools/traduzir.py               # traduz o que estiver pendente
  python3 tools/traduzir.py --se-marcado  # só age se a nota tiver traduzir: true (watcher/make)
  python3 tools/traduzir.py --dry-run     # lista os pendentes, sem chamar a IA
  python3 tools/traduzir.py --sem-push    # traduz e gera o JS, mas não commita nem dá push
"""
import json, os, re, subprocess, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import fonte

MARCA = re.compile(r"^traduzir:\s*true\s*$", re.M)
GLOSSARIO = """Regras:
- Traduza do português do Brasil para os idiomas pedidos, em tom profissional e direto: inglês (en), espanhol (es), francês (fr), italiano (it) e chinês simplificado (zh, Mandarim, caracteres simplificados).
- Não traduza nomes próprios de projetos, ferramentas, instituições e siglas: IFF, CNPq, PIBIC, LNCC, SAB, FEBIC, IAAC, Gaia, GALAH, APOGEE, ReLaTeX, Overleaf, Quartz, Obsidian, Docker, Node.js, MongoDB e similares.
- Preserve marcação Markdown (**negrito**, *itálico*), URLs, números, datas e quebras de linha (cada linha de entrada vira uma linha de saída).
- "Iniciação Científica" = "Scientific Initiation" (en), "Iniciación Científica" (es), "Initiation Scientifique" (fr), "Iniziazione Scientifica" (it), "科研启蒙计划" (zh).
- Em zh, mantenha em alfabeto latino nomes próprios, siglas, nomes de projetos e tecnologias.
- Responda SOMENTE com um objeto JSON: {"<id>": {"<idioma>": "...", ...}, ...} com exatamente os idiomas pedidos, sem texto antes ou depois."""


def nota_marcada():
    if not os.path.exists(fonte.VAULT_FONTE):
        return False
    with open(fonte.VAULT_FONTE, encoding="utf-8") as f:
        topo = f.read().split("\n---", 1)[0]
    return bool(MARCA.search(topo))


def desmarcar():
    with open(fonte.VAULT_FONTE, encoding="utf-8") as f:
        texto = f.read()
    fim = texto.find("\n---", 3)
    novo = MARCA.sub("traduzir: false", texto[:fim], count=1) + texto[fim:]
    if novo != texto:
        with open(fonte.VAULT_FONTE, "w", encoding="utf-8") as f:
            f.write(novo)
        fonte.sincronizar_do_vault()


def pedir_ia(lote, langs):
    prompt = GLOSSARIO + f"\n\nIdiomas pedidos: {', '.join(langs)}.\nTrechos (JSON id -> texto pt-BR):\n" + json.dumps(lote, ensure_ascii=False, indent=1)
    r = subprocess.run(["claude", "-p", "--model", os.environ.get("PORTFOLIO_MODELO", "sonnet"), prompt],
                       capture_output=True, text=True, timeout=600)
    if r.returncode != 0:
        sys.exit(f"claude -p falhou: {r.stderr.strip()[-400:]}")
    m = re.search(r"\{.*\}", r.stdout, re.S)
    if not m:
        sys.exit(f"resposta sem JSON: {r.stdout[:400]}")
    return json.loads(m.group(0))


def sh(cmd, **kw):
    return subprocess.run(cmd, cwd=fonte.ROOT, text=True, capture_output=True, **kw)


def publicar():
    """eventos.py + build + lint; se tudo passar, commit e push (um commit só, se houver mudança)."""
    py = sys.executable
    r = sh([py, "tools/eventos.py"])
    print("eventos:", (r.stdout or r.stderr).strip().splitlines()[-1:] or "ok")
    r = sh([py, "tools/build.py"])
    if r.returncode:
        sys.exit(f"build falhou, nada publicado:\n{r.stderr[-600:]}")
    r = sh(["make", "lint"])
    if r.returncode:
        sys.exit(f"lint falhou, nada publicado:\n{(r.stdout + r.stderr)[-600:]}")
    if "--sem-push" in sys.argv:
        print("build ok (--sem-push: sem commit)")
        return
    if not sh(["git", "status", "--porcelain"]).stdout.strip():
        print("sem mudanças para publicar")
        return
    sh(["git", "add", "-A"])
    r = sh(["git", "commit", "-m", "chore(auto): conteúdo do portfólio atualizado a partir do vault"])
    if r.returncode:
        sys.exit(f"commit falhou:\n{(r.stdout + r.stderr)[-600:]}")
    r = sh(["git", "push"])
    if r.returncode:
        sys.exit(f"push falhou (commit local feito):\n{r.stderr[-600:]}")
    print("publicado:", sh(["git", "log", "--oneline", "-1"]).stdout.strip())


def main():
    dry = "--dry-run" in sys.argv
    if "--se-marcado" in sys.argv and not nota_marcada():
        return
    if not dry:
        import fcntl
        global _LOCK
        _LOCK = open("/tmp/portfolio-traduzir.lock", "w")
        try:
            fcntl.flock(_LOCK, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except OSError:
            print("outra execução em andamento")
            return
    fonte.sincronizar_do_vault()
    F = fonte.ler_fonte()
    B = fonte.blocos(F)
    T = fonte.ler_traducoes()
    pend = fonte.pendentes(B, T)
    orfaos = [k for k in T if k not in B]
    if not pend:
        print("nada para traduzir")
    else:
        print(f"{len(pend)} trecho(s) pendente(s):")
        for k in pend:
            antes = T.get(k, {}).get("pt")
            print(f"  {k}\n    pt: {B[k][:140]}" + (f"\n    antes: {antes[:140]}" if antes else "  (novo)"))
    if dry or not pend:
        if orfaos and dry:
            print(f"órfãos em traducoes.json (trecho removido da fonte): {', '.join(orfaos)}")
        elif orfaos:
            for k in orfaos:
                T.pop(k, None)
            fonte.gravar_traducoes(T)
            print(f"removidos {len(orfaos)} órfão(s) de traducoes.json")
        if not dry:
            desmarcar()
            publicar()
        return
    grupos = {}
    for k in pend:
        grupos.setdefault(tuple(fonte.faltando(k, B[k], T)), []).append(k)
    for langs, ks in grupos.items():
        for i in range(0, len(ks), 15):
            lote = {k: B[k] for k in ks[i:i + 15]}
            resp = pedir_ia(lote, list(langs))
            for k, pt in lote.items():
                t = resp.get(k) or {}
                if not all(t.get(l) for l in langs):
                    print(f"  aviso: tradução incompleta para {k}; fica pendente")
                    continue
                base = T.get(k, {}) if fonte.h(pt) == T.get(k, {}).get("pt_hash") else {}
                T[k] = {**base, "pt_hash": fonte.h(pt), "pt": pt, **{l: t[l].strip() for l in langs}}
                print(f"  ok {k} [{', '.join(langs)}]")
            fonte.gravar_traducoes(T)
    for k in orfaos:
        T.pop(k, None)
    fonte.gravar_traducoes(T)
    desmarcar()
    publicar()


if __name__ == "__main__":
    main()
