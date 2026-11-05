#!/usr/bin/env python3
"""
eventos.py — gera a seção "Participação em eventos" a partir do vault hardcore-life.

Lê as notas 03-midia/<ano>/<evento>.md (publish: true; ignora -en e midia-<ano>) e as fotos de
04-recursos/03-midia/<ano>/<evento>[-<ano>]/. Escreve:
  assets/media/eventos/<ano>-<evento>/NN.webp    (lado maior 1200 px, sem EXIF/GPS)
  assets/media/eventos/<ano>-<evento>/NN-t.webp  (miniatura 480 px)
  src/eventos.json                               (ano, título, link do relato, fotos)
Idempotente: só reprocessa fotos novas. Uso: python3 tools/eventos.py
"""
import json, os, re, sys
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
VAULT = Path(os.environ.get("HARDCORE_LIFE", "/home/pedro/hardcore-life"))
NOTAS = VAULT / "03-midia"
FOTOS = VAULT / "04-recursos" / "03-midia"
OUT = ROOT / "assets" / "media" / "eventos"
JSON = ROOT / "src" / "eventos.json"
SITE = "https://www.phrandrade.com/pt-br/media"
QUARTZ_MEDIA = Path(os.environ.get("QUARTZ_SITE", Path.home() / "Repositorios/pessoal/quartz-site")) / "content/pt-br/media"
EXT = {".jpg", ".jpeg", ".png", ".webp"}


def frontmatter(texto):
    if not texto.startswith("---"):
        return {}
    fim = texto.find("\n---", 3)
    fm = {}
    for linha in texto[3:fim].splitlines():
        m = re.match(r"^([A-Za-z_]+):\s*(.*)$", linha)
        if m:
            fm[m.group(1)] = m.group(2).strip().strip("'\"")
    return fm


def pasta_fotos(ano, stem):
    for nome in (f"{stem}-{ano}", stem):
        d = FOTOS / ano / nome
        if d.is_dir():
            return d
    return None


def salvar(src, dst, lado):
    if dst.exists() and dst.stat().st_mtime >= src.stat().st_mtime:
        return
    im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    im.thumbnail((lado, lado), Image.LANCZOS)
    im.save(dst, "WEBP", quality=74 if lado > 600 else 70)  # sem exif=..., metadados não são copiados


def main():
    if not NOTAS.is_dir():
        sys.exit(f"vault não encontrado em {VAULT}")
    eventos = []
    for nota in sorted(NOTAS.glob("*/*.md")):
        ano, stem = nota.parent.name, nota.stem
        if not ano.isdigit() or stem.endswith("-en") or stem.startswith("midia-"):
            continue
        fm = frontmatter(nota.read_text(encoding="utf-8"))
        if fm.get("publish") != "true":
            continue
        ev = {"id": f"{ano}-{stem}", "year": int(ano), "title": fm.get("title", stem), "url": f"{SITE}/{ano}/{stem}", "photos": []}
        d = pasta_fotos(ano, stem)
        if d:
            fotos = sorted(f for f in d.iterdir() if f.suffix.lower() in EXT)
            destino = OUT / ev["id"]
            destino.mkdir(parents=True, exist_ok=True)
            for i, f in enumerate(fotos, 1):
                nome = f"{i:02d}"
                salvar(f, destino / f"{nome}.webp", 1200)
                salvar(f, destino / f"{nome}-t.webp", 480)
                ev["photos"].append(f"assets/media/eventos/{ev['id']}/{nome}")
        eventos.append(ev)
    # eventos que o site oficial publica mas cuja nota do vault não tem publish: true (ex.: SAB 2026)
    ids = {e["id"] for e in eventos}
    if QUARTZ_MEDIA.is_dir():
        for ad in sorted(QUARTZ_MEDIA.iterdir()):
            if not (ad.is_dir() and ad.name.isdigit()):
                continue
            for pg in sorted(ad.iterdir()):
                arq = pg / "index.md" if pg.is_dir() else pg
                stem = pg.name if pg.is_dir() else pg.stem
                if stem == "index" or stem.endswith("-en") or arq.suffix != ".md" or not arq.is_file():
                    continue
                fm = frontmatter(arq.read_text(encoding="utf-8"))
                eid = f"{ad.name}-{stem}"
                if fm.get("publish") != "true" or eid in ids:
                    continue
                eventos.append({"id": eid, "year": int(ad.name), "title": fm.get("title", stem),
                                "url": f"{SITE}/{ad.name}/{stem}", "photos": []})
    eventos.sort(key=lambda e: (-e["year"], e["title"]))
    JSON.write_text(json.dumps(eventos, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    n = sum(len(e["photos"]) for e in eventos)
    print(f"{len(eventos)} eventos, {n} fotos -> {JSON.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
