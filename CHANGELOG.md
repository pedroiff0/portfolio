# Changelog

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [Unreleased]

## [2.1.0] - 2026-11-03
### Added
- Hero com foto e céu estrelado discreto (`assets/js/sky.js`, pausa fora da tela, com aba oculta e com `prefers-reduced-motion`).
- Faixa de números, seção "Além do código" (apelido, hobby, galeria de 6 fotos de eventos sem EXIF) e widget de espectro estelar portado da v1 (`assets/js/spectrum.js`).
- Campos opcionais por projeto em `src/portfolio.md`: `image`, `video`, `live` e `open`. Tours em vídeo (WebM) e posters para Finanças, Sistema Acadêmico, research e ReLaTeX; demo ao vivo em `<dialog>` com iframe carregado só no clique (SpectraViewer, Cálculo Numérico, site oficial).
- `tools/record_demos.js` e `tools/demos/tours.json`: gravação reprodutível dos tours a partir das instâncias locais com dados fictícios.

## [2.0.0] - 2026-11-03
### Changed
- Refatoração clean: página única minimalista com os tokens visuais do quartz-site (phrandrade.com), tema claro e escuro, mesmos dados e quatro idiomas.
- `main.js` reescrito (cerca de 250 linhas); `style.css` reescrito com tokens no `:root`.

### Removed
- HUD, intro, warp, canvases, Three.js e texturas de planetas, paleta de comandos, quests e easter eggs. A v1 está arquivada em `pedroiff0/portfolio-v1-scifi` (tag `v1-scifi`).
- Scripts avulsos `fix_hud.js`, `fix_canvases.js`, `main_diff.patch` e os testes ad hoc `tests/pw_*.js`.

### Added
- `tests/smoke.js` (`npm test`): erros de console, contagem de cartões, idiomas, filtro, busca, tema e rolagem horizontal em 375px.
### Added
- Governança padronizada com CONTRIBUTING.md, SECURITY.md, DESIGN.md, Makefile e templates do GitHub.
- Automação de CI com limite rígido de timeout para controle de minutos de execução.

## [1.0.0] - 2026-08-08
### Added
- Website oficial do portfólio de Pedro Iff com animações interativas em canvas, tema dark futurista e exibição de projetos.
- Testes automatizados de UI via Playwright.
