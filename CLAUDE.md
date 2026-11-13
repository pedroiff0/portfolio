# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Pedro Rocha's static portfolio site (GitHub Pages, custom domain via `CNAME`) — v2 "clean": one minimalist page
with the same visual tokens as the quartz-site (phrandrade.com), light/dark theme, 4 languages. No build step
for the site itself: plain HTML/CSS/JS served directly. The previous sci-fi v1 (HUD, Three.js, canvases, quests)
is archived in the private repo `pedroiff0/portfolio-v1-scifi` (tag `v1-scifi` here) — do not bring it back.

## Critical rule: the vault note is the source, JS is compiled

Content lives in a pt-BR-only note in the hardcore-life vault (`01-projetos/pessoal/portfolio/portfolio-conteudo.md`,
overridable with `PORTFOLIO_FONTE`). `tools/build.py` copies it to `src/conteudo.md`, merges `src/traducoes.json`
(per-block `{pt_hash, pt, en, es, fr}`, ids from `tools/fonte.py:blocos`) and writes `assets/js/projects.js`.
**Never hand-edit `projects.js`, `src/conteudo.md` or `src/traducoes.json`.** Edit the vault note; translations are
produced by `tools/traduzir.py` (only changed blocks, via `claude -p`), triggered when the note has `traduzir: true`.
UI labels stay in `src/interface.yaml`. `src/portfolio-legado-v2.1.md` is the old flag-based format, reference only.

## Commands

```bash
# Rebuild assets/js/projects.js from src/portfolio.md (also run automatically by pre-commit)
python3 tools/build.py

# Validate the generated projects.js is semantically equal to the .orig baseline (deep-equal on
# PORTFOLIO_DATA: FULL_NAME, ORCID, REPOS, FEATURED, RESEARCH, BOLSAS, CONTACTS, EXTRA, I18N)
node tools/verify.js

# tools/gen_quartz.py is OBSOLETE (since 2026-10-05): quartz-site project pages now come from the hardcore-life
# vault (99-meta/scripts/sync-to-quartz.py + sitesync-map.yaml). It refuses to run without --legado; do not use.

# Serve locally
python3 -m http.server 8000   # http://localhost:8000

# Smoke test (Playwright): starts its own server, checks console errors, card counts, 4 languages,
# filter/search, theme toggle and no horizontal scroll at 375px. SHOTS_DIR=<dir> also saves screenshots.
npm test
make lint                      # node --check main.js + build.py --check
```

## Architecture

- Layout: sticky topbar (mobile menu via `<details>`), sticky left sidebar (photo, tagline, location, contact links
  from `CONTACTS` with icons from `assets/icons.svg`), content column, footer with social icons and link columns.
- `index.html` — semantic skeleton, one `<section id>` per area (sobre, projetos, trabalhos, pesquisa, bolsas,
  curriculo, lattes, contato); content is filled by JS.
- `assets/css/style.css` — design tokens on `:root` copied from `quartz-site/quartz.config.yaml` (Schibsted
  Grotesk / Source Sans 3 / IBM Plex Mono; purple accent), dark mode via `prefers-color-scheme` and `data-theme`.
- `assets/js/main.js` (~250 lines, one IIFE) — renders every section from `window.PORTFOLIO_DATA`, language
  switch (saved in localStorage, default from `navigator.language`), theme toggle, category filter + search,
  scroll-spy on the nav. Emojis from the data are stripped at render time; the data is left untouched.
  A few strings not present in `interface.yaml` (CV/Lattes text) live in the `UI` dict in `main.js`.

- `assets/js/sky.js` (hero starfield) and `assets/js/spectrum.js` (`window.Spectrum.mount`, stellar spectrum widget) are the only
  canvases allowed. Media per project comes from optional `image`/`video`/`live`/`open` fields in `src/portfolio.md`;
  videos and iframes load only on click (`playTour`, `openLive` in `main.js`).
- Demo tours are recorded with `node tools/record_demos.js [slug]` from `tools/demos/tours.json`, only against local
  instances with fake/demo data, public pages, rendered PDFs (`pdf:`) or rendered READMEs (`readme:`) — never real
  personal data; output goes to `assets/media/<slug>/`. Step vocabulary is documented at the top of the script.
  Review a contact sheet of the videos before publishing. dashboard-life, hardcore-life and anomaly_detection stay
  without video.
- Events section: `tools/eventos.py` reads published `03-midia/<year>/` notes from the vault and writes
  `src/eventos.json` + stripped WebP photos in `assets/media/eventos/`; `build.py` embeds them as `EVENTS`.
- `assets/js/conquistas.js` (`window.Conquistas.hit(id)`): 8 discreet achievements, localStorage only.
- Reader mode: `html[reader-mode="on"]`, key `r`, stored in localStorage key `reader`.
- Languages: pt, en, es, fr, it, zh (`LANGS` in `build.py`/`main.js`, `OUTROS` in `fonte.py`). `traduzir.py` asks the AI only for
  the languages missing per block (`fonte.faltando`). Interface strings live in `src/interface.yaml` (nav, sections, labels,
  cat, vis, bolsas, contactLabels) and in the `UI`/`UI_MORE`/`UI_V25` dicts in `main.js`.
- Search: `assets/js/busca.js` (`window.Busca.setDocs/open/onGo`); docs are built by `searchDocs()` in `main.js` and targets
  carry `data-sid` (`p:`, `r:`, `b:`, `e:`, `s:`). Tour dialog: `openTour()` + `#tour`. CV previews: `tools/cv_previews.py`.

Keep it minimal: no 3D, no sound, no intro, no HUD; gamification only in the discreet form above.

`assets/js/projects.js` (generated) sets `window.PORTFOLIO_DATA`, which `main.js` reads to render project
cards, research cards, the bolsas timeline, contacts, and the `I18N` dictionary. I18N keys used only by v1
(`hud`, `sectorNav`, `hub`, `kickers`, `cmdPalette`, `cmdSecrets`, `quests`) are ignored. `assets/js/projects.js.orig` is
the frozen baseline `tools/verify.js` diffs against — don't delete it.

### Content pipeline (`tools/`)

`src/portfolio.md` (Markdown, Obsidian-editable frontmatter-per-section) + `src/interface.yaml` (rarely-changed
UI strings) → `tools/build.py` → `assets/js/projects.js` (valid JS literal assigning `window.PORTFOLIO_DATA`).
`tools/seed.js` / `tools/seed_md.js` were one-time scripts used to originally generate `portfolio.md` from the
pre-existing `projects.js` — not part of the regular workflow.

### i18n

Four languages throughout: `pt` (default/fallback), `en`, `es`, `fr`, keyed by flag emoji in the Markdown
source and by language code in `I18N`/`interface.yaml`. `applyI18n()`/`applyLang()` in `main.js` handle runtime
switching is `render()` in `main.js`, which re-renders everything for the selected language.
