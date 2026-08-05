#!/usr/bin/env python3
"""
build.py — Reconstrói assets/js/projects.js a partir de src/portfolio.md.

O site (index.html + assets/js/main.js) lê `window.PORTFOLIO_DATA` de projects.js
e monta o DOM. Este script gera ESSE MESMO objeto JS a partir do Markdown/YAML,
garantindo render idêntico ao HTML atual (não tocamos em index.html/style.css/main.js).

O arquivo gerado NÃO precisa ser byte-a-byte igual ao original: basta que o
objeto `window.PORTFOLIO_DATA` seja semanticamente igual. A validação real é
feita por tools/verify.js (deep-equal contra projects.js.orig).

Uso:
  python3 tools/build.py            # gera a partir de src/portfolio.md
  python3 tools/build.py --check    # gera + valida deep-equal (usa no pre-commit)
"""
import sys, os, re
import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MD = os.path.join(ROOT, "src", "portfolio.md")
OUT = os.path.join(ROOT, "assets", "js", "projects.js")
ORIG = os.path.join(ROOT, "assets", "js", "projects.js.orig")

LANGS = ["pt", "en", "es", "fr"]


def load():
    with open(MD, encoding="utf-8") as f:
        text = f.read()
    m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    if not m:
        raise SystemExit("Erro: frontmatter YAML não encontrado em src/portfolio.md")
    return yaml.safe_load(m.group(1))


# ---------- serializador JS (válido e legível) ----------
def jstr(s: str) -> str:
    s = s.replace("\\", "\\\\").replace('"', '\\"')
    s = s.replace("\r", "").replace("\n", "\\n").replace("\t", "\\t")
    return '"' + s + '"'


def is_plain_scalar(v) -> bool:
    return isinstance(v, (str, int, float, bool)) or v is None


def py_to_js(v, indent=0):
    """Serializa um valor Python para um literal JS válido (multiline quando preciso)."""
    pad = "  " * indent
    pad1 = "  " * (indent + 1)
    if isinstance(v, bool):
        return "true" if v else "false"
    if v is None:
        return "null"
    if isinstance(v, (int, float)):
        return str(v)
    if isinstance(v, str):
        return jstr(v)
    if isinstance(v, list):
        if not v:
            return "[]"
        items = [py_to_js(x, indent + 1) for x in v]
        single = "[ " + ", ".join(items) + " ]"
        if all(is_plain_scalar(x) for x in v) and len(single) <= 90:
            return single
        body = ",\n".join(pad1 + it for it in items)
        return "[\n" + body + "\n" + pad + "]"
    if isinstance(v, dict):
        if not v:
            return "{}"
        # ordena para estabilidade (mantém inserção; dicts do yaml já preservam)
        entries = []
        for k, val in v.items():
            key = k if re.match(r"^[A-Za-z_][A-Za-z0-9_]*$", str(k)) else jstr(str(k))
            entries.append((key, val))
        # tenta single-line se simples e curto
        simple = all(is_plain_scalar(val) for _, val in entries)
        if simple:
            single = "{ " + ", ".join(f"{k}: {py_to_js(val)}" for k, val in entries) + " }"
            if len(single) <= 90:
                return single
        lines = []
        for k, val in entries:
            lines.append(f"{pad1}{k}: {py_to_js(val, indent + 1)}")
        return "{\n" + ",\n".join(lines) + "\n" + pad + "}"
    raise TypeError(f"Tipo não suportado: {type(v)}")


# ---------- normalização dos dados (espelha projects.js.orig) ----------
def norm_repo(r: dict) -> dict:
    brief = r.get("brief", {}) or {}
    obj = {
        "name": r.get("name", ""),
        "cat": r.get("cat", ""),
        "visibility": r.get("visibility", "privado"),
        "icon": r.get("icon", "star"),
        "repo": r.get("repo", ""),
        "stack": r.get("stack", []) or [],
        "tags": r.get("tags", []) or [],
        "brief": brief.get("pt", ""),
    }
    i18n = {l: brief[l] for l in LANGS if l in brief and l != "pt" and brief[l]}
    if i18n:
        obj["i18n"] = i18n
    return obj


def norm_bolsa(b: dict) -> dict:
    title = b.get("title", {}) or {}
    kind = b.get("kind", {}) or {}
    desc = b.get("desc", {}) or {}
    # original: i18n = { en: {title, kind, desc}, es: {...}, fr: {...} }
    i18n = {}
    for l in LANGS:
        if l == "pt":
            continue
        t = title.get(l)
        k = kind.get(l)
        d = desc.get(l)
        if t or k or d:
            entry = {}
            if t:
                entry["title"] = t
            if k:
                entry["kind"] = k
            if d:
                entry["desc"] = d
            i18n[l] = entry
    obj = {
        "title": title.get("pt", ""),
        "icon": b.get("icon", "star"),
        "kind": kind.get("pt", ""),
        "period": b.get("period", ""),
        "orient": b.get("orient", ""),
        "desc": desc.get("pt", ""),
    }
    if i18n:
        obj["i18n"] = i18n
    return obj


def norm_contact(c: dict) -> dict:
    return {
        "icon": c.get("icon", "mail"),
        "labelKey": c.get("labelKey", ""),
        "value": c.get("value", ""),
        "href": c.get("href"),
    }


def i18n_from_md(data: dict) -> dict:
    i18n_md = data.get("i18n", {}) or {}
    I = {l: {} for l in LANGS}
    for section, perlang in i18n_md.items():
        for l in LANGS:
            if l in perlang:
                I[l][section] = perlang[l]
    return I


def build(data: dict) -> str:
    FULL_NAME = data.get("full_name", "")
    ORCID = data.get("orcid", "")

    repos = [norm_repo(r) for r in data.get("repos", [])]
    featured_names = data.get("featured", []) or []
    by_name = {r["name"]: r for r in repos}
    featured = [by_name[n] for n in featured_names if n in by_name]

    bolsas = [norm_bolsa(b) for b in data.get("bolsas", [])]
    contacts = [norm_contact(c) for c in data.get("contacts", [])]
    extra = data.get("extra", {}) or {}
    I18N = i18n_from_md(data)

    out = []
    out.append("// Dados do portfólio — Pedro Henrique Rocha de Andrade (pedroiff0)")
    out.append("// Gerado a partir de src/portfolio.md (não editar à mão).")
    out.append("")
    out.append(f"const FULL_NAME = {py_to_js(FULL_NAME)};")
    out.append(f"const ORCID = {py_to_js(ORCID)};")
    out.append("")
    out.append("const REPOS = " + py_to_js(repos, 0) + ";")
    out.append("")
    out.append("const FEATURED = [")
    for i, f in enumerate(featured):
        expr = f'  REPOS.find(r => r.name === {py_to_js(f["name"])})'
        comma = "," if i < len(featured) - 1 else ""
        out.append(expr + comma)
    out.append("];")
    out.append("")
    out.append("const RESEARCH = REPOS.filter(r => r.cat === \"pesquisa\").map(r => ({\n"
               "  title: r.name, icon: r.icon, badge: r.visibility === \"público\" ? \"Público\" : \"Privado\",\n"
               "  summary: r.brief, details: r.brief + \"  Repositório: \" + r.repo,\n"
               "  i18n: r.i18n\n"
               "}));")
    out.append("")
    out.append("const BOLSAS = " + py_to_js(bolsas, 0) + ";")
    out.append("")
    out.append("const CONTACTS = " + py_to_js(contacts, 0) + ";")
    out.append("")
    out.append("const EXTRA = " + py_to_js(extra, 0) + ";")
    out.append("")
    out.append("// Dicionário de interface (PT-BR padrão).")
    out.append("const I18N = " + py_to_js(I18N, 0) + ";")
    out.append("")
    out.append("window.PORTFOLIO_DATA = { FULL_NAME, ORCID, REPOS, FEATURED, RESEARCH, BOLSAS, CONTACTS, EXTRA, I18N };")
    return "\n".join(out) + "\n"


def main():
    check = "--check" in sys.argv
    data = load()
    generated = build(data)
    if check:
        with open(OUT, "w", encoding="utf-8") as f:
            f.write(generated)
        # valida deep-equal contra o original via node
        r = os.system(f"node {os.path.join(ROOT, 'tools', 'verify.js')}")
        sys.exit(r)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(generated)
    print(f"Gerado: {OUT} ({len(generated)} bytes)")


if "__main__" == "__main__":
    main()
