# Pipeline: Markdown → site estático (render idêntico)

O site é HTML/CSS/JS estático. Todo o CONTEÚDO editável vive em
`assets/js/projects.js` via `window.PORTFOLIO_DATA`, que o `main.js` consome
para montar o DOM. Para editar em Markdown (Obsidian) sem mexer no HTML/CSS,
`src/portfolio.md` é a FONTE e `tools/build.py` recompila o `projects.js`.

## Fluxo diário
1. Edite `src/portfolio.md` no Obsidian (frontmatter YAML).
2. `python3 tools/build.py`  (gera `assets/js/projects.js`)
   - ou `python3 tools/build.py --check` (gera + valida deep-equal vs `.orig`)
3. `git add -A && git commit -m "..."`  → o pre-commit re-gera o JS sozinho.
4. `git push`  → site publicado em portfolio.phrandrade.com.

## Arquivos
- `src/portfolio.md` — fonte editável (lang PT/EN/ES/FR por campo).
- `tools/build.py`  — MD → `assets/js/projects.js` (serializador JS válido).
- `tools/verify.js` — deep-equal semântico vs `assets/js/projects.js.orig`.
- `tools/seed.js`   — (1x) gera o `portfolio.md` a partir do `projects.js` atual.
- `assets/js/projects.js.orig` — snapshot do conteúdo original (baseline de verify).
- `.git/hooks/pre-commit` — roda build.py no commit.

## Regras
- NÃO edite `assets/js/projects.js` à mão (é gerado).
- NÃO mexa em `index.html` / `assets/css/style.css` / `assets/js/main.js`.
- O render é idêntico porque o `main.js` continua lendo o mesmo `PORTFOLIO_DATA`.
