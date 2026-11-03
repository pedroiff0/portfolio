"""
fonte.py — lê a fonte única em pt-BR (src/conteudo.md, espelho da nota do vault) e
junta com as traduções (src/traducoes.json).

Cada trecho traduzível vira um "bloco" com id estável:
  perfil:eyebrow, perfil:tagline, perfil:frase, perfil:chips, perfil:sobre:N,
  projeto:<nome>, bolsa:N:titulo|tipo|desc, alem:hobby, alem:galeria:<arquivo>

traducoes.json guarda, por id: {"pt_hash", "pt", "en", "es", "fr"}. Um bloco cujo
pt_hash não bate com o texto atual está "pendente": o build usa o pt nos outros
idiomas e tools/traduzir.py gera as traduções novas.
"""
import hashlib, json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTEUDO = os.path.join(ROOT, "src", "conteudo.md")
TRADUCOES = os.path.join(ROOT, "src", "traducoes.json")
VAULT_FONTE = os.environ.get(
    "PORTFOLIO_FONTE",
    "/home/pedro/hardcore-life/01-projetos/pessoal/portfolio/esboco-portfolio-conteudo.md",
)
OUTROS = ["en", "es", "fr"]
MEDIA_KEYS = ("image", "video", "live", "open")
KV = re.compile(r'^\s*([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(.*)$')
CHAVES = {"full_name", "orcid", "instagram", "featured", "eyebrow", "tagline", "location", "slug", "repo", "stack",
          "tags", "cat", "visibility", "icon", "kind", "period", "orient", "desc", "nickname", "hobby", "grade", *MEDIA_KEYS}


def h(texto):
    return hashlib.sha1(texto.strip().encode("utf-8")).hexdigest()[:12]


def corpo(texto):
    """Remove frontmatter e callouts/comentários de instrução."""
    if texto.startswith("---"):
        fim = texto.find("\n---", 3)
        texto = texto[fim + 4:] if fim >= 0 else texto
    linhas = [l for l in texto.splitlines() if not l.lstrip().startswith(">") and not l.lstrip().startswith("%%")]
    return "\n".join(linhas)


def secoes(texto, nivel=2):
    marca = "#" * nivel
    partes = re.split(rf'^{marca}\s+(.+)$', texto, flags=re.M)
    return {partes[i].strip(): partes[i + 1] for i in range(1, len(partes), 2)}


def itens(texto):
    partes = re.split(r'^###\s+(.+)$', texto, flags=re.M)
    return [(partes[i].strip(), partes[i + 1]) for i in range(1, len(partes), 2)]


def kv_e_paragrafos(bloco):
    kv, paras, atual = {}, [], []
    for linha in bloco.splitlines():
        m = KV.match(linha)
        if m and not atual and m.group(1) in CHAVES:
            kv[m.group(1)] = m.group(2).strip()
            continue
        if linha.strip():
            atual.append(linha.strip())
        elif atual:
            paras.append(" ".join(atual)); atual = []
    if atual:
        paras.append(" ".join(atual))
    return kv, paras


def lista(bloco):
    return [l.strip()[2:].strip() for l in bloco.splitlines() if l.strip().startswith("- ")]


def ler_fonte(caminho=CONTEUDO):
    with open(caminho, encoding="utf-8") as f:
        texto = corpo(f.read())
    S = secoes(texto)
    meta = {k: v for k, v in (KV.match(l).groups() for l in S.get("Metadados", "").splitlines() if KV.match(l))}

    perfil_kv, _ = kv_e_paragrafos(S.get("Perfil", "").split("###")[0])
    P = secoes(S.get("Perfil", ""), 3)
    _, frase = kv_e_paragrafos(P.get("Frase", ""))
    _, sobre = kv_e_paragrafos(P.get("Sobre", ""))
    perfil = {
        "eyebrow": perfil_kv.get("eyebrow", ""), "tagline": perfil_kv.get("tagline", ""),
        "location": perfil_kv.get("location", ""), "frase": " ".join(frase),
        "chips": lista(P.get("Chips", "")), "sobre": sobre,
    }

    projetos = []
    for nome, bloco in itens(S.get("Projetos", "")):
        kv, paras = kv_e_paragrafos(bloco)
        p = {"name": nome, "cat": kv.get("cat", "software"), "visibility": kv.get("visibility", "privado"),
             "icon": kv.get("icon", "star"), "repo": kv.get("repo", ""),
             "stack": [s.strip() for s in kv.get("stack", "").split(",") if s.strip()],
             "tags": [s.strip() for s in kv.get("tags", "").split(",") if s.strip()],
             "texto": " ".join(paras)}
        if kv.get("slug"):
            p["slug"] = kv["slug"]
        for k in MEDIA_KEYS:
            if kv.get(k):
                p[k] = kv[k]
        projetos.append(p)

    bolsas = []
    for titulo, bloco in itens(S.get("Bolsas", "")):
        kv, paras = kv_e_paragrafos(bloco)
        bolsas.append({"titulo": titulo, "icon": kv.get("icon", "star"), "tipo": kv.get("kind", ""),
                       "period": kv.get("period", ""), "orient": kv.get("orient", ""),
                       "desc": kv.get("desc", "") or " ".join(paras)})

    contatos = []
    for item in lista(S.get("Contatos", "")):
        d = {}
        for parte in re.split(r'\s*\|\s*', item):
            m = re.match(r'([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(.*)', parte.strip())
            if m:
                d[m.group(1)] = m.group(2).strip()
        contatos.append({"icon": d.get("icon", "mail"), "labelKey": d.get("labelKey", ""),
                         "value": d.get("value", ""), "href": d.get("href") or None})

    A = S.get("Além do código", "")
    alem_kv, _ = kv_e_paragrafos(A.split("###")[0])
    galeria = []
    for item in lista(secoes(A, 3).get("Galeria", "")):
        arq, _, legenda = item.partition(":")
        galeria.append({"file": arq.strip(), "caption": legenda.strip()})

    return {"meta": meta, "perfil": perfil, "projetos": projetos, "bolsas": bolsas,
            "contatos": contatos, "alem": alem_kv, "galeria": galeria}


def blocos(F):
    """Todos os trechos traduzíveis: {id: texto_pt}."""
    B = {}
    p = F["perfil"]
    for k in ("eyebrow", "tagline", "frase"):
        if p[k]:
            B[f"perfil:{k}"] = p[k]
    if p["chips"]:
        B["perfil:chips"] = "\n".join(p["chips"])
    for i, par in enumerate(p["sobre"]):
        B[f"perfil:sobre:{i}"] = par
    for pr in F["projetos"]:
        if pr["texto"]:
            B[f"projeto:{pr['name']}"] = pr["texto"]
    for i, b in enumerate(F["bolsas"]):
        B[f"bolsa:{i}:titulo"] = b["titulo"]
        if b["tipo"]:
            B[f"bolsa:{i}:tipo"] = b["tipo"]
        if b["desc"]:
            B[f"bolsa:{i}:desc"] = b["desc"]
    if F["alem"].get("hobby"):
        B["alem:hobby"] = F["alem"]["hobby"]
    for g in F["galeria"]:
        B[f"alem:galeria:{g['file']}"] = g["caption"]
    return B


def ler_traducoes():
    if not os.path.exists(TRADUCOES):
        return {}
    with open(TRADUCOES, encoding="utf-8") as f:
        return json.load(f)


def gravar_traducoes(T):
    with open(TRADUCOES, "w", encoding="utf-8") as f:
        json.dump(dict(sorted(T.items())), f, ensure_ascii=False, indent=1)
        f.write("\n")


def pendentes(B, T):
    return [k for k, v in B.items() if T.get(k, {}).get("pt_hash") != h(v)]


def traduzido(id_, pt, T, lang):
    """Texto no idioma `lang`; cai no pt se a tradução não existe ou está desatualizada."""
    t = T.get(id_)
    if lang == "pt" or not t or t.get("pt_hash") != h(pt) or not t.get(lang):
        return pt
    return t[lang]


def sincronizar_do_vault():
    """Copia a nota do vault para src/conteudo.md quando ela existe e mudou. Retorna True se copiou."""
    if not os.path.exists(VAULT_FONTE):
        return False
    with open(VAULT_FONTE, encoding="utf-8") as f:
        novo = f.read()
    atual = open(CONTEUDO, encoding="utf-8").read() if os.path.exists(CONTEUDO) else None
    if novo == atual:
        return False
    with open(CONTEUDO, "w", encoding="utf-8") as f:
        f.write(novo)
    return True
