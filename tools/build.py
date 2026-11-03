#!/usr/bin/env python3
"""
build.py — Reconstrói assets/js/projects.js a partir de src/portfolio.md.

Formato da fonte (Markdown LIMPO, fácil de editar no Obsidian):

  # Portfolio — fonte editável
  (nota opcional)

  ## Metadados
  full_name: ...
  orcid: ...
  instagram: ...
  featured: ReLaTeX, Sistema Acadêmico, ...

  ## Projetos
  ### Nome do Projeto
  repo: https://...
  stack: Node.js, Express, MongoDB
  tags: Full-stack, Web App
  cat: software
  visibility: privado
  icon: cash
  image: assets/media/<slug>/poster.webp   (opcional)
  video: assets/media/<slug>/tour.webm     (opcional)
  live: https://... (opcional; precisa aceitar iframe)
  open: https://... (opcional; abre em nova aba)

  🇧🇷 texto em português
  🇺🇸 english text
  🇪🇸 texto en español
  🇫🇷 texte en français
  (faltando um idioma, herda o 🇧🇷)

  ## Bolsas
  ### Título da Bolsa
  icon: darkmatter
  kind: 🇧🇷 IC Júnior · CNPq | 🇺🇸 Junior SI · CNPq | ...
  period: Set. 2022 — Mar. 2023
  orient: Dra. Ana Cecília Soja
  🇧🇷 desc pt | 🇺🇸 desc en | 🇪🇸 desc es | 🇫🇷 desc fr
  (title e kind também aceitam bandeiras; sem bandeira = pt)

  ## Contatos
  - icon: mail | labelKey: email | value: pedroiff0@gmail.com | href: mailto:...
  - icon: github | labelKey: github | value: @pedroiff0 | href: https://github.com/pedroiff0

  ## Interface (i18n)
  <bloco YAML puro: nav/hero/sections/about/contactLabels/vis/cat/bolsas/footer>
  (raramente editado — copiado do site atual)

O site (index.html + main.js) lê window.PORTFOLIO_DATA de projects.js e monta
o DOM. Este script gera ESSE MESMO objeto a partir do MD, garantindo render
idêntico (não tocamos em index.html/style.css/main.js). A validação real é
tools/verify.js (deep-equal contra projects.js.orig).

Uso:
  python3 tools/build.py            # gera a partir de src/portfolio.md
  python3 tools/build.py --check    # gera + valida deep-equal (pre-commit)
"""
import sys, os, re, ast
import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MD = os.path.join(ROOT, "src", "portfolio.md")
I18N = os.path.join(ROOT, "src", "interface.yaml")
OUT = os.path.join(ROOT, "assets", "js", "projects.js")
ORIG = os.path.join(ROOT, "assets", "js", "projects.js.orig")

LANGS = ["pt", "en", "es", "fr"]
FLAG = {"🇧🇷": "pt", "🇺🇸": "en", "🇪🇸": "es", "🇫🇷": "fr"}


def load():
    """Lê o MD editável E o interface.yaml (texto de menu/navegação, que quase não se mexe)."""
    with open(MD, encoding="utf-8") as f:
        md = f.read()
    i18n = {}
    if os.path.exists(I18N):
        with open(I18N, encoding="utf-8") as f:
            i18n = yaml.safe_load(f) or {}
    elif os.path.exists(ORIG):
        # fallback: extrai I18N do .orig para não quebrar
        src = open(ORIG, encoding="utf-8").read()
        m = re.search(r"const I18N = (\{.*?\});", src, re.S)
        if m:
            try:
                i18n = ast.literal_eval(m.group(1))
            except Exception:
                i18n = {}
    return md, i18n


# ---------- serializador JS (válido e legível) ----------
def jstr(s: str) -> str:
    s = s.replace("\\", "\\\\").replace('"', '\\"')
    s = s.replace("\r", "").replace("\n", "\\n").replace("\t", "\\t")
    return '"' + s + '"'


def is_plain_scalar(v) -> bool:
    return isinstance(v, (str, int, float, bool)) or v is None


def py_to_js(v, indent=0):
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
        entries = []
        for k, val in v.items():
            key = k if re.match(r"^[A-Za-z_][A-Za-z0-9_]*$", str(k)) else jstr(str(k))
            entries.append((key, val))
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


# ---------- parser do MD limpo ----------
def split_sections(text):
    """Retorna dict {nome_secao: corpo} para seções ## ."""
    parts = re.split(r'^##\s+(.+)$', text, flags=re.M)
    # parts: [pre, nome1, corpo1, nome2, corpo2, ...]
    secs = {}
    for i in range(1, len(parts), 2):
        secs[parts[i].strip()] = parts[i + 1]
    return secs


def parse_kv(block):
    """Linhas 'chave: valor' (1 linha). Retorna dict."""
    out = {}
    for line in block.splitlines():
        m = re.match(r'^\s*([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(.*)$', line)
        if m:
            out[m.group(1)] = m.group(2).strip()
    return out


def split_flagged(paras):
    """
    Recebe lista de parágrafos (texto). Retorna dict lang->texto para os que
    começam com bandeira, e 'pt' para o primeiro parágrafo sem bandeira (fallback).
    Parágrafos vazios ignorados.
    """
    out = {}
    for p in paras:
        p = p.strip()
        if not p:
            continue
        hit = None
        for fl, lg in FLAG.items():
            if p.startswith(fl):
                hit = (lg, p[len(fl):].strip())
                break
        if hit:
            out[hit[0]] = hit[1]
        else:
            if "pt" not in out:
                out["pt"] = p
    return out


def split_field_flagged(text):
    """
    Campo de 1 linha que pode ter bandeiras: '🇧🇷 pt | 🇺🇸 en | 🇪🇸 es'.
    Retorna dict lang->valor (sem bandeira, assume pt).
    """
    out = {}
    for part in re.split(r'\s*\|\s*', text):
        part = part.strip()
        if not part:
            continue
        hit = None
        for fl, lg in FLAG.items():
            if part.startswith(fl):
                hit = (lg, part[len(fl):].strip())
                break
        if hit:
            out[hit[0]] = hit[1]
        else:
            out["pt"] = part
    return out


MEDIA_KEYS = ("image", "video", "live", "open")


def parse_projetos(block):
    parts = re.split(r'^###\s+(.+)$', block, flags=re.M)
    repos = []
    for i in range(1, len(parts), 2):
        name = parts[i].strip()
        body = parts[i + 1]
        # separa linhas-chave de parágrafos
        kv_lines = []
        paras = []
        for line in body.splitlines():
            if re.match(r'^\s*[A-Za-z_][A-Za-z0-9_]*\s*:', line):
                kv_lines.append(line)
            else:
                if line.strip():
                    paras.append(line)
        kv = parse_kv("\n".join(kv_lines))
        brief = split_flagged(paras)
        # herda pt se faltar outro idioma
        for l in LANGS:
            if l != "pt" and l not in brief and "pt" in brief:
                brief[l] = brief["pt"]
        repo = {
            "name": name,
            "cat": kv.get("cat", "software"),
            "visibility": kv.get("visibility", "privado"),
            "icon": kv.get("icon", "star"),
            "repo": kv.get("repo", ""),
            "stack": [s.strip() for s in kv.get("stack", "").split(",") if s.strip()],
            "tags": [s.strip() for s in kv.get("tags", "").split(",") if s.strip()],
            "brief": brief,
        }
        # slug opcional: usado por tools/gen_quartz.py para casar com a nota
        # já existente no quartz-site. Não vai para o JS do site.
        if kv.get("slug"):
            repo["slug"] = kv["slug"].strip()
        # mídia opcional (v2.1): poster, tour em vídeo, iframe ao vivo e link aberto
        for k in MEDIA_KEYS:
            if kv.get(k):
                repo[k] = kv[k].strip()
        repos.append(repo)
    return repos


def parse_bolsas(block):
    parts = re.split(r'^###\s+(.+)$', block, flags=re.M)
    bolsas = []
    for i in range(1, len(parts), 2):
        name_line = parts[i].strip()
        body = parts[i + 1]
        kv = parse_kv(body)
        title = split_field_flagged(name_line) if any(f in name_line for f in FLAG) else {"pt": name_line}
        kind = split_field_flagged(kv.get("kind", ""))
        desc = split_field_flagged(kv.get("desc", ""))
        for l in LANGS:
            if l != "pt" and l not in desc and "pt" in desc:
                desc[l] = desc["pt"]
            if l != "pt" and l not in title and "pt" in title:
                title[l] = title["pt"]
        bolsas.append({
            "title": title, "icon": kv.get("icon", "star"), "kind": kind,
            "period": kv.get("period", ""), "orient": kv.get("orient", ""), "desc": desc,
        })
    return bolsas


def parse_contatos(block):
    contacts = []
    for line in block.splitlines():
        line = line.strip()
        if not line.startswith("-"):
            continue
        item = line.lstrip("- ").strip()
        d = {}
        for part in re.split(r'\s*\|\s*', item):
            m = re.match(r'([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(.*)', part.strip())
            if m:
                d[m.group(1)] = m.group(2).strip()
        contacts.append({
            "icon": d.get("icon", "mail"),
            "labelKey": d.get("labelKey", ""),
            "value": d.get("value", ""),
            "href": d.get("href") or None,
        })
    return contacts


def parse_i18n(block):
    block = block.strip()
    if not block:
        return {}
    return yaml.safe_load(block) or {}


def parse_extra(block):
    kv = parse_kv(block)
    extra = {}
    for k in ("instagram", "hobby", "grade", "nickname"):
        if k in kv and kv[k] != "":
            extra[k] = kv[k]
    return extra


def parse_source(text, i18n=None):
    secs = split_sections(text)
    meta = parse_kv(secs.get("Metadados", ""))
    repos = parse_projetos(secs.get("Projetos", ""))
    bolsas = parse_bolsas(secs.get("Bolsas", ""))
    contatos = parse_contatos(secs.get("Contatos", ""))
    extra = parse_extra(secs.get("Extra", ""))
    # i18n vem do interface.yaml; se não houver, tenta ler do MD (compatibilidade)
    if i18n is None:
        i18n = parse_i18n(secs.get("Interface (i18n)", ""))
    featured = [s.strip() for s in meta.get("featured", "").split(",") if s.strip()]
    return {
        "full_name": meta.get("full_name", ""),
        "orcid": meta.get("orcid", ""),
        "instagram": meta.get("instagram", ""),
        "featured": featured,
        "repos": repos,
        "bolsas": bolsas,
        "contatos": contatos,
        "extra": extra,
        "i18n": i18n,
    }


# ---------- normalização p/ JS (espelha projects.js.orig) ----------
def norm_repo(r):
    brief = r.get("brief", {}) or {}
    obj = {
        "name": r.get("name", ""),
        "cat": r.get("cat", "software"),
        "visibility": r.get("visibility", "privado"),
        "icon": r.get("icon", "star"),
        "repo": r.get("repo", ""),
        "stack": r.get("stack", []) or [],
        "tags": r.get("tags", []) or [],
        "brief": brief.get("pt", ""),
    }
    for k in MEDIA_KEYS:
        if r.get(k):
            obj[k] = r[k]
    i18n = {}
    for l in LANGS:
        if l == "pt":
            continue
        if l in brief and brief[l] and brief[l] != brief.get("pt", ""):
            i18n[l] = brief[l]
    if i18n:
        obj["i18n"] = i18n
    return obj


def norm_bolsa(b):
    title = b.get("title", {}) or {}
    kind = b.get("kind", {}) or {}
    desc = b.get("desc", {}) or {}
    i18n = {}
    for l in LANGS:
        if l == "pt":
            continue
        t = title.get(l); k = kind.get(l); d = desc.get(l)
        if t or k or d:
            e = {}
            if t: e["title"] = t
            if k: e["kind"] = k
            if d: e["desc"] = d
            i18n[l] = e
    return {
        "title": title.get("pt", ""),
        "icon": b.get("icon", "star"),
        "kind": kind.get("pt", ""),
        "period": b.get("period", ""),
        "orient": b.get("orient", ""),
        "desc": desc.get("pt", ""),
        **({"i18n": i18n} if i18n else {}),
    }


def norm_contact(c):
    return {"icon": c.get("icon", "mail"), "labelKey": c.get("labelKey", ""),
            "value": c.get("value", ""), "href": c.get("href")}


def i18n_transpose(i18n_md):
    I = {l: {} for l in LANGS}
    for section, perlang in i18n_md.items():
        for l in LANGS:
            if l in perlang:
                I[l][section] = perlang[l]
    return I


def build(data):
    FULL_NAME = data.get("full_name", "")
    ORCID = data.get("orcid", "")
    repos = [norm_repo(r) for r in data.get("repos", [])]
    featured_names = data.get("featured", []) or []
    by_name = {r["name"]: r for r in repos}
    featured = [by_name[n] for n in featured_names if n in by_name]
    bolsas = [norm_bolsa(b) for b in data.get("bolsas", [])]
    contacts = [norm_contact(c) for c in data.get("contatos", [])]
    extra = data.get("extra", {}) or {}
    I18N = i18n_transpose(data.get("i18n", {}) or {})

    out = []
    out.append("// Dados do portfólio — Pedro Henrique Rocha de Andrade (pedroiff0)")
    out.append("// Gerado por tools/build.py a partir de src/conteudo.md + src/traducoes.json (não editar à mão).")
    out.append("")
    out.append(f"const FULL_NAME = {py_to_js(FULL_NAME)};")
    out.append(f"const ORCID = {py_to_js(ORCID)};")
    out.append("")
    out.append("const REPOS = " + py_to_js(repos, 0) + ";")
    out.append("")
    out.append("const FEATURED = [")
    for i, f in enumerate(featured):
        expr = f'  REPOS.find(r => r.name === {py_to_js(f["name"])})'
        out.append(expr + ("," if i < len(featured) - 1 else ""))
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


def md_inline(t):
    """**negrito** e *itálico* da fonte viram <strong>/<em> (o site renderiza o Sobre como HTML)."""
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    return re.sub(r"(?<!\*)\*(?!\s)(.+?)(?<!\s)\*(?!\*)", r"<em>\1</em>", t)


def data_v22():
    """Fonte pt-BR (src/conteudo.md, espelho do vault) + src/traducoes.json -> mesmo dict de parse_source()."""
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import fonte
    F = fonte.ler_fonte()
    T = fonte.ler_traducoes()
    B = fonte.blocos(F)
    pend = fonte.pendentes(B, T)
    tr = lambda id_, pt: {l: fonte.traduzido(id_, pt, T, l) for l in LANGS}

    with open(I18N, encoding="utf-8") as f:
        i18n = yaml.safe_load(f) or {}
    P = F["perfil"]
    eyebrow, frase = tr("perfil:eyebrow", P["eyebrow"]), tr("perfil:frase", P["frase"])
    chips = tr("perfil:chips", "\n".join(P["chips"]))
    hero = i18n.setdefault("hero", {})
    for l in LANGS:
        hero.setdefault(l, {})
        hero[l].update({"eyebrow": eyebrow[l], "sub": frase[l], "badges": [c for c in chips[l].split("\n") if c.strip()]})
    i18n["about"] = {l: [md_inline(tr(f"perfil:sobre:{i}", par)[l]) for i, par in enumerate(P["sobre"])] for l in LANGS}

    repos = []
    for pr in F["projetos"]:
        r = {k: v for k, v in pr.items() if k != "texto"}
        r["brief"] = tr(f"projeto:{pr['name']}", pr["texto"])
        repos.append(r)
    bolsas = []
    for i, b in enumerate(F["bolsas"]):
        bolsas.append({"title": tr(f"bolsa:{i}:titulo", b["titulo"]), "icon": b["icon"],
                       "kind": tr(f"bolsa:{i}:tipo", b["tipo"]), "period": b["period"], "orient": b["orient"],
                       "desc": tr(f"bolsa:{i}:desc", b["desc"])})
    A = F["alem"]
    extra = {k: A[k] for k in ("nickname", "grade") if A.get(k)}
    extra["instagram"] = F["meta"].get("instagram", "")
    extra["location"] = P["location"]
    tag, hob = tr("perfil:tagline", P["tagline"]), tr("alem:hobby", A.get("hobby", ""))
    extra["tagline"], extra["hobby"] = tag["pt"], hob["pt"]
    extra["i18n"] = {l: {"tagline": tag[l], "hobby": hob[l]} for l in LANGS if l != "pt"}
    gallery = []
    for g in F["galeria"]:
        c = tr(f"alem:galeria:{g['file']}", g["caption"])
        gallery.append({"file": g["file"], "caption": c["pt"], "i18n": {l: c[l] for l in LANGS if l != "pt"}})
    data = {"full_name": F["meta"].get("full_name", ""), "orcid": F["meta"].get("orcid", ""),
            "instagram": F["meta"].get("instagram", ""),
            "featured": [s.strip() for s in F["meta"].get("featured", "").split(",") if s.strip()],
            "repos": repos, "bolsas": bolsas, "contatos": F["contatos"], "extra": extra, "i18n": i18n,
            "gallery": gallery}
    return data, pend


def main():
    check = "--check" in sys.argv
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import fonte, datetime
    if fonte.sincronizar_do_vault():
        print(f"fonte atualizada a partir do vault: {fonte.VAULT_FONTE}")
    if os.path.exists(fonte.CONTEUDO):
        data, pend = data_v22()
        if pend:
            print(f"aviso: {len(pend)} trecho(s) sem tradução atual (usando pt): " + ", ".join(pend[:8]) + (" ..." if len(pend) > 8 else ""))
    else:
        md, i18n = load()
        data = parse_source(md, i18n)
        data["gallery"] = []
    generated = build(data).replace(
        "window.PORTFOLIO_DATA = { FULL_NAME, ORCID, REPOS, FEATURED, RESEARCH, BOLSAS, CONTACTS, EXTRA, I18N };",
        "const GALLERY = " + py_to_js(data.get("gallery", []), 0) + ";\n"
        + f"const UPDATED = {py_to_js(datetime.date.today().isoformat())};\n\n"
        + "window.PORTFOLIO_DATA = { FULL_NAME, ORCID, REPOS, FEATURED, RESEARCH, BOLSAS, CONTACTS, EXTRA, I18N, GALLERY, UPDATED };")
    if check:
        with open(OUT, "w", encoding="utf-8") as f:
            f.write(generated)
        r = os.system(f"node {os.path.join(ROOT, 'tools', 'verify.js')}")
        sys.exit(r)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(generated)
    print(f"Gerado: {OUT} ({len(generated)} bytes)")


if __name__ == "__main__":
    main()
