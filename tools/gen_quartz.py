#!/usr/bin/env python3
"""
gen_quartz.py — Gera/atualiza as notas de projetos do quartz-site a partir de
src/portfolio.md, que passa a ser a FONTE ÚNICA dos projetos.

Por que existe
--------------
Antes, portfolio.md e content/<lang>/projects/*.md eram mantidos à mão, em
paralelo. Divergiam: o Quartz listava projetos que não existiam no portfólio
(apostilas, livrocalculo, searcher), ignorava os apps Node, e não tinha
en/projects (o LanguageToggle caía em 404 nessa seção).

O que faz
---------
Para cada projeto do portfolio.md, em cada idioma (pt-br, en, es, fr):

  - cria a nota se ela não existir, com frontmatter + resumo + link do repo;
  - se já existir, atualiza APENAS:
      * os campos de frontmatter que este script gerencia
        (title, tags, repo, status) — os demais (publish, created,
        modified, password, ...) são preservados como estão;
      * o bloco entre os marcadores GEN_START / GEN_END.

Tudo que estiver FORA do bloco gerenciado é conteúdo escrito à mão e nunca é
tocado. As notas do Quartz têm corpo muito mais rico que o brief do portfólio;
o objetivo é sincronizar metadados e resumo, não achatar o conteúdo.

Uso
---
  python3 tools/gen_quartz.py --dry-run   # mostra o que mudaria (padrão)
  python3 tools/gen_quartz.py --write     # aplica
  python3 tools/gen_quartz.py --check     # exit 1 se algo estiver dessincronizado

Pitfall conhecido: content/ do quartz-site é um vault Obsidian sincronizado por
Syncthing e vive sujo no git. Este script NUNCA faz commit — rode git status e
separe as mudanças à mão.
"""
import argparse
import os
import re
import sys
import unicodedata

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import build as pb  # reaproveita o parser de src/portfolio.md

QUARTZ = os.environ.get(
    "QUARTZ_SITE", "/home/pedro/Repositorios/pessoal/quartz-site"
)
CONTENT = os.path.join(QUARTZ, "content")

# pt-br é o diretório real do idioma padrão; os demais espelham o slug
LANG_DIR = {"pt": "pt-br", "en": "en", "es": "es", "fr": "fr"}

GEN_START = "<!-- gerado por portfolio/tools/gen_quartz.py — não editar à mão -->"
GEN_END = "<!-- fim do bloco gerado -->"

# campos de frontmatter que ESTE script controla; o resto é preservado
MANAGED_KEYS = ("title", "tags", "repo", "status")

STATUS_LABEL = {
    "pt": {
        "público": "público",
        "privado": "privado",
        "planejamento": "em planejamento",
        "elaboracao": "em elaboração",
    },
    "en": {
        "público": "public",
        "privado": "private",
        "planejamento": "planned",
        "elaboracao": "in progress",
    },
    "es": {
        "público": "público",
        "privado": "privado",
        "planejamento": "en planificación",
        "elaboracao": "en elaboración",
    },
    "fr": {
        "público": "public",
        "privado": "privé",
        "planejamento": "en projet",
        "elaboracao": "en cours",
    },
}

CALLOUT = {"pt": "Em uma frase", "en": "In one sentence",
           "es": "En una frase", "fr": "En une phrase"}

REPO_LABEL = {
    "pt": "Repositório",
    "en": "Repository",
    "es": "Repositorio",
    "fr": "Dépôt",
}

NO_REPO = {
    "pt": "Sem repositório público ainda.",
    "en": "No public repository yet.",
    "es": "Sin repositorio público todavía.",
    "fr": "Pas encore de dépôt public.",
}


def slugify(name: str) -> str:
    """Nome do projeto -> slug de arquivo, estável entre idiomas."""
    s = unicodedata.normalize("NFKD", name)
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = s.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")


def slug_of(proj) -> str:
    """Slug da nota. `slug:` no portfolio.md manda; senão, deriva do nome.

    O campo explícito existe porque as notas do Quartz nasceram antes deste
    script, com nomes curtos (financas.md, guiagithub.md) que não batem com o
    slugify do título ("Finanças App" -> financas-app). Declarar o slug na
    fonte evita renomear arquivo e quebrar link publicado.
    """
    return proj.get("slug") or slugify(proj["name"])


def split_frontmatter(text: str):
    """Devolve (dict_ordenado_como_linhas, corpo). Preserva a ordem original."""
    if not text.startswith("---"):
        return [], text
    m = re.match(r"^---\n(.*?)\n---\n?(.*)$", text, flags=re.S)
    if not m:
        return [], text
    lines = m.group(1).split("\n")
    return lines, m.group(2)


def fm_get(lines, key):
    for ln in lines:
        if ln.startswith(key + ":"):
            return ln.split(":", 1)[1].strip()
    return None


def fm_set(lines, key, value):
    """Atualiza a chave preservando posição; se não existir, acrescenta ao fim."""
    out = []
    found = False
    for ln in lines:
        if ln.startswith(key + ":"):
            out.append(f"{key}: {value}")
            found = True
        else:
            out.append(ln)
    if not found:
        out.append(f"{key}: {value}")
    return out


def managed_block(proj, lang, minimal=False):
    """O trecho que este script controla dentro da nota.

    minimal=True gera só a linha de metadados (stack + repo + status), sem o
    callout de resumo. Usado quando a nota já tem corpo escrito à mão — nesse
    caso o resumo do portfólio duplicaria o texto humano, que é melhor.
    """
    brief = proj["brief"].get(lang) or proj["brief"].get("pt", "")
    status = STATUS_LABEL[lang].get(
        proj["visibility"], proj["visibility"]
    )
    stack = ", ".join(proj["stack"])

    out = [GEN_START, ""]
    if not minimal:
        out.append(f"> [!note] {CALLOUT[lang]}")
        out.append(f"> {brief}")
        out.append("")
    if stack:
        out.append(f"**Stack:** {stack}")
        out.append("")
    if proj["repo"]:
        out.append(f"**{REPO_LABEL[lang]}:** [{proj['repo']}]({proj['repo']}) · {status}")
    else:
        out.append(f"{NO_REPO[lang]} · {status}")
    out.append("")
    out.append(GEN_END)
    return "\n".join(out)


def render_new(proj, lang):
    """Nota completa, para projetos que ainda não têm arquivo."""
    title = proj["name"]
    tags = ", ".join(proj["tags"]) if proj["tags"] else ""
    fm = ["publish: false", f"title: {title}"]
    if tags:
        fm.append(f"tags: [{tags}]")
    if proj["repo"]:
        fm.append(f"repo: {proj['repo']}")
    fm.append(f"status: {proj['visibility']}")
    return "---\n" + "\n".join(fm) + "\n---\n\n" + managed_block(proj, lang) + "\n"


def apply_to_existing(text, proj, lang):
    """Atualiza frontmatter gerenciado + bloco gerado, preservando o resto."""
    fm_lines, body = split_frontmatter(text)

    fm_lines = fm_set(fm_lines, "title", proj["name"])
    if proj["tags"]:
        fm_lines = fm_set(fm_lines, "tags", "[" + ", ".join(proj["tags"]) + "]")
    if proj["repo"]:
        fm_lines = fm_set(fm_lines, "repo", proj["repo"])
    fm_lines = fm_set(fm_lines, "status", proj["visibility"])

    if GEN_START in body and GEN_END in body:
        # já gerenciada: descobre se há conteúdo humano fora do bloco
        outside = re.sub(
            re.escape(GEN_START) + r".*?" + re.escape(GEN_END), "", body, flags=re.S
        ).strip()
        block = managed_block(proj, lang, minimal=bool(outside))
        body = re.sub(
            re.escape(GEN_START) + r".*?" + re.escape(GEN_END),
            lambda _m: block,
            body,
            flags=re.S,
        )
    else:
        # nunca teve bloco: se já há texto humano, entra em modo minimal e o
        # bloco vai para o TOPO como faixa de metadados
        human = body.strip()
        block = managed_block(proj, lang, minimal=bool(human))
        body = block + "\n\n" + body.lstrip("\n")

    return "---\n" + "\n".join(fm_lines) + "\n---\n\n" + body.lstrip("\n")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--write", action="store_true", help="aplica as mudanças")
    ap.add_argument("--check", action="store_true", help="exit 1 se dessincronizado")
    args = ap.parse_args()

    md, i18n = pb.load()
    data = pb.parse_source(md, i18n)
    projects = data["repos"]

    changed, created = [], []

    for proj in projects:
        slug = slug_of(proj)
        for lang, d in LANG_DIR.items():
            path = os.path.join(CONTENT, d, "projects", f"{slug}.md")
            if os.path.exists(path):
                old = open(path, encoding="utf-8").read()
                new = apply_to_existing(old, proj, lang)
                if new != old:
                    changed.append(path)
                    if args.write:
                        open(path, "w", encoding="utf-8").write(new)
            else:
                created.append(path)
                if args.write:
                    os.makedirs(os.path.dirname(path), exist_ok=True)
                    open(path, "w", encoding="utf-8").write(render_new(proj, lang))

    verb = "escrito" if args.write else "seria alterado"
    for p in created:
        print(f"  novo      {os.path.relpath(p, CONTENT)}")
    for p in changed:
        print(f"  atualizado {os.path.relpath(p, CONTENT)}")
    print(f"\n{len(projects)} projetos · {len(created)} novos · {len(changed)} {verb}")

    if not args.write:
        print("\n(dry-run — use --write para aplicar)")
    if args.check and (created or changed):
        print("\nERRO: notas do Quartz dessincronizadas do portfolio.md", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
