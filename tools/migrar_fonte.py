#!/usr/bin/env python3
"""
migrar_fonte.py — migração única (v2.2): converte src/portfolio.md (4 idiomas por bandeira) +
src/interface.yaml (hero/sobre) na fonte pt-BR da nota do vault + src/traducoes.json, sem perder
nenhuma tradução existente. Não chama IA.

Uso: python3 tools/migrar_fonte.py [--escrever]
"""
import os, sys, datetime
import yaml

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import build as legado  # parser antigo (bandeiras)
import fonte

import re
EMOJI = re.compile("[\U0001F000-\U0001FAFF\u2600-\u27BF\uFE0F\u200D]")


def limpa(t):
    """Tira emoji e troca <strong>/<em> por Markdown (mais fácil de editar no Obsidian)."""
    t = EMOJI.sub("", t)
    t = re.sub(r"</?strong>", "**", t)
    t = re.sub(r"</?em>", "*", t)
    return re.sub(r"\s{2,}", " ", t).strip()


AGORA = datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%S-03:00")

# Textos que viviam no main.js (v2.1) e passam a viver na fonte.
TAGLINE = {"pt": "Engenharia de Computação no IFF · bolsista PIBIC/CNPq · astrofísica computacional",
           "en": "Computer Engineering at IFF · PIBIC/CNPq scholar · computational astrophysics",
           "es": "Ingeniería Informática en el IFF · becario PIBIC/CNPq · astrofísica computacional",
           "fr": "Génie informatique à l'IFF · boursier PIBIC/CNPq · astrophysique computationnelle"}
LOCAL = "Bom Jesus do Itabapoana, RJ"
HOBBY = {"pt": "Animações e simulações científicas para divulgação em física e astronomia.",
         "en": "Scientific animations and simulations for physics and astronomy outreach.",
         "es": "Animaciones y simulaciones científicas para divulgación en física y astronomía.",
         "fr": "Animations et simulations scientifiques pour la vulgarisation en physique et en astronomie."}
GALERIA = [
    ("sab-2025-poster", {"pt": "SAB 2025: pôster sobre estrelas próximas do Gaia observadas pelo GALAH DR4", "en": "SAB 2025: poster on nearby Gaia stars observed by GALAH DR4", "es": "SAB 2025: póster sobre estrellas cercanas de Gaia observadas por GALAH DR4", "fr": "SAB 2025 : poster sur les étoiles proches de Gaia observées par GALAH DR4"}),
    ("sab-2025", {"pt": "XLVIII Reunião Anual da SAB, Caxambu (MG)", "en": "48th Annual Meeting of the Brazilian Astronomical Society, Caxambu (MG)", "es": "XLVIII Reunión Anual de la SAB, Caxambu (MG)", "fr": "48e réunion annuelle de la SAB, Caxambu (MG)"}),
    ("febic-2024-estande", {"pt": "IX FEBIC: estande sobre o impacto de satélites em observações astronômicas", "en": "IX FEBIC: booth on the impact of satellites on astronomical observations", "es": "IX FEBIC: stand sobre el impacto de los satélites en las observaciones astronómicas", "fr": "IX FEBIC : stand sur l'impact des satellites sur les observations astronomiques"}),
    ("febic-2024", {"pt": "IX FEBIC, 2024", "en": "IX FEBIC, 2024", "es": "IX FEBIC, 2024", "fr": "IX FEBIC, 2024"}),
    ("lncc-2022-supercomputador", {"pt": "Supercomputador do LNCC, 2022", "en": "LNCC supercomputer, 2022", "es": "Supercomputador del LNCC, 2022", "fr": "Supercalculateur du LNCC, 2022"}),
    ("lncc-2022", {"pt": "Visita ao LNCC, Petrópolis (RJ), 2022", "en": "Visit to LNCC, Petrópolis (RJ), 2022", "es": "Visita al LNCC, Petrópolis (RJ), 2022", "fr": "Visite au LNCC, Petrópolis (RJ), 2022"}),
]

CABECALHO = f"""---
publish: false
title: Portfólio (conteúdo em pt-BR)
type: esboco
created: '{AGORA}'
modified: {AGORA}
published: '{AGORA}'
tags:
  - projeto
  - portfolio
cssclasses:
  - page-layout
sitesync: false
resource-sync: false
traduzir: false
---

# Portfólio: conteúdo (pt-BR)

> [!info] Como editar
> Escreva só em português. Ao terminar, marque **traduzir** (propriedade acima) e salve: o watcher roda `tools/traduzir.py` no repositório `~/Repositorios/profissional/portfolio`, que traduz por IA apenas os trechos que mudaram para en/es/fr e desmarca a propriedade. Publicar (commit e push) continua manual.
> Chaves `chave: valor` ficam no início de cada bloco; o texto vem depois, em parágrafos. Projetos são `### Nome`. Callouts como este são ignorados pelo build.
"""


def migrar():
    md, i18n = legado.load()
    old = legado.parse_source(md, i18n)
    T = {}

    def reg(id_, por_lang):
        por_lang = {l: limpa(v) if isinstance(v, str) else v for l, v in por_lang.items()}
        pt = por_lang["pt"]
        e = {"pt_hash": fonte.h(pt), "pt": pt}
        for l in fonte.OUTROS:
            e[l] = por_lang.get(l) or pt
        T[id_] = e

    hero = {l: (i18n.get("hero", {}) or {}).get(l, {}) for l in legado.LANGS}
    about = i18n.get("about", {}) or {}
    L = [CABECALHO, "## Metadados"]
    L += [f"full_name: {old['full_name']}", f"orcid: {old['orcid']}", f"instagram: {old['instagram']}",
          f"featured: {', '.join(old['featured'])}", ""]

    L += ["## Perfil", f"eyebrow: {hero['pt']['eyebrow']}", f"tagline: {TAGLINE['pt']}", f"location: {LOCAL}", ""]
    reg("perfil:eyebrow", {l: hero[l].get("eyebrow", "") for l in legado.LANGS})
    reg("perfil:tagline", TAGLINE)
    L += ["### Frase", hero["pt"]["sub"], ""]
    reg("perfil:frase", {l: hero[l].get("sub", "") for l in legado.LANGS})
    L += ["### Chips"] + [f"- {limpa(b)}" for b in hero["pt"]["badges"]] + [""]
    chips = {l: "\n".join(limpa(b) for b in hero[l].get("badges", [])) for l in legado.LANGS}
    T["perfil:chips"] = {"pt_hash": fonte.h(chips["pt"]), **chips}
    L += ["### Sobre"]
    for i, par in enumerate(about["pt"]):
        L += [limpa(par), ""]
        reg(f"perfil:sobre:{i}", {l: about[l][i] for l in legado.LANGS if l in about and i < len(about[l])})

    L += ["## Projetos", ""]
    for r in old["repos"]:
        L.append(f"### {r['name']}")
        for k in ("slug", "repo"):
            if r.get(k):
                L.append(f"{k}: {r[k]}")
        L += [f"stack: {', '.join(r['stack'])}", f"tags: {', '.join(r['tags'])}", f"cat: {r['cat']}",
              f"visibility: {r['visibility']}", f"icon: {r['icon']}"]
        L += [f"{k}: {r[k]}" for k in fonte.MEDIA_KEYS if r.get(k)]
        L += ["", r["brief"]["pt"], ""]
        reg(f"projeto:{r['name']}", r["brief"])

    L += ["## Bolsas", ""]
    for i, b in enumerate(old["bolsas"]):
        L += [f"### {b['title']['pt']}", f"icon: {b['icon']}", f"kind: {b['kind'].get('pt', '')}",
              f"period: {b['period']}", f"orient: {b['orient']}", f"desc: {b['desc'].get('pt', '')}", ""]
        reg(f"bolsa:{i}:titulo", b["title"])
        if b["kind"].get("pt"):
            reg(f"bolsa:{i}:tipo", b["kind"])
        if b["desc"].get("pt"):
            reg(f"bolsa:{i}:desc", b["desc"])

    L += ["## Contatos"]
    for c in old["contatos"]:
        partes = [f"icon: {c['icon']}", f"labelKey: {c['labelKey']}", f"value: {c['value']}"]
        if c.get("href"):
            partes.append(f"href: {c['href']}")
        L.append("- " + " | ".join(partes))
    L.append("")

    ex = old["extra"]
    L += ["## Além do código", f"nickname: {ex.get('nickname', '')}", f"hobby: {HOBBY['pt']}", f"grade: {ex.get('grade', '')}", ""]
    reg("alem:hobby", HOBBY)
    L += ["### Galeria"] + [f"- {arq}: {leg['pt']}" for arq, leg in GALERIA] + [""]
    for arq, leg in GALERIA:
        reg(f"alem:galeria:{arq}", leg)
    return "\n".join(L), T


if __name__ == "__main__":
    texto, T = migrar()
    if "--escrever" not in sys.argv:
        print(texto[:1500]); print(f"... {len(T)} blocos"); sys.exit(0)
    os.makedirs(os.path.dirname(fonte.VAULT_FONTE), exist_ok=True)
    if os.path.exists(fonte.VAULT_FONTE):
        sys.exit(f"já existe: {fonte.VAULT_FONTE} (migração é única)")
    for caminho in (fonte.VAULT_FONTE, fonte.CONTEUDO):
        with open(caminho, "w", encoding="utf-8") as f:
            f.write(texto)
    fonte.gravar_traducoes(T)
    F = fonte.ler_fonte()
    B = fonte.blocos(F)
    print(f"fonte: {fonte.VAULT_FONTE}\nblocos: {len(B)}, pendentes após migração: {fonte.pendentes(B, T)}")
