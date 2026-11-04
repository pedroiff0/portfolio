#!/usr/bin/env python3
"""
cv_previews.py — prévias da 1ª página dos currículos públicos, por idioma.

Baixa cv-{academico|profissional}-{pt,en,es,fr,it,zh}.pdf de phrandrade.com, renderiza a página 1 com pdftoppm e
grava assets/media/cv/{tipo}-{lang}.webp (720 px de largura) e {tipo}-{lang}-t.webp (360 px).
Rodar de novo quando o CV mudar:  python3 tools/cv_previews.py   (ou make cv)
"""
import os, subprocess, sys, tempfile, urllib.request
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "media" / "cv"
BASE = "https://www.phrandrade.com/resource/areas/profissional/curriculo"
TIPOS = ["academico", "profissional"]
LANGS = ["pt", "en", "es", "fr", "it", "zh"]


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    falhas = 0
    with tempfile.TemporaryDirectory() as tmp:
        for tipo in TIPOS:
            for lang in LANGS:
                nome = f"cv-{tipo}-{lang}"
                pdf = Path(tmp) / f"{nome}.pdf"
                try:
                    req = urllib.request.Request(f"{BASE}/{nome}.pdf", headers={"User-Agent": "portfolio-cv-previews"})
                    with urllib.request.urlopen(req, timeout=60) as r:
                        pdf.write_bytes(r.read())
                    subprocess.run(["pdftoppm", "-png", "-r", "110", "-f", "1", "-l", "1", "-singlefile", str(pdf), str(Path(tmp) / nome)], check=True)
                except Exception as e:
                    print(f"{nome}: FALHOU {e}")
                    falhas += 1
                    continue
                im = Image.open(Path(tmp) / f"{nome}.png").convert("RGB")
                for lado, suf, q in ((720, "", 80), (360, "-t", 74)):
                    c = im.copy()
                    c.thumbnail((lado, lado * 2), Image.LANCZOS)
                    c.save(OUT / f"{tipo}-{lang}{suf}.webp", "WEBP", quality=q)
                print(f"{nome}: ok")
    sys.exit(1 if falhas else 0)


if __name__ == "__main__":
    main()
