# Changelog

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [Unreleased]

### Changed
- Versão enxuta: Projetos com 4 destaques (Sistema Acadêmico, Researcher Hub, Rumo, ReLaTeX); a lista completa (inclui E-lixo e Middle-Earth-Compiler) virou o bloco recolhido "Ver todos os projetos" dentro de Projetos; Pesquisa só com o Anomaly Detection Viewer; Eventos limitados a 8 (chave `eventos` em `## Página`).
- `tools/fonte.py` aponta para `portfolio-conteudo.md` (nome atual da nota); `tools/build.py` aceita `research:` em Metadados e `eventos:` em Página.

## [2.6.0] - 2026-11-03
### Changed
- Destaques (seção 02) só com os projetos principais: Researcher Hub, Sistema Acadêmico, ReLaTeX, Sistema de Avaliações (em beta), SpectraViewer (precisa de ajustes) e Anomaly Detection Viewer. awesome-skills, meu-setup e Projeto Profissional seguem na lista completa.
- Número de repositórios conta só os projetos com repositório.
- Texto da seção Sobre ocupa a largura toda da coluna (justificado, com hifenização).

### Added
- Campo `status` por projeto (`beta`, `ajustes`) com badge traduzido nos 6 idiomas.
- Anomaly Detection Viewer (anomaly.phrandrade.com, ao vivo e com tour da página pública) e tg-agent-bridge (sem vídeo: dados pessoais).

## [2.5.0] - 2026-11-03
### Added
- Italiano e mandarim (chinês simplificado): 6 idiomas na página. Conteúdo traduzido por `tools/traduzir.py`, que agora pede só os idiomas que faltam em cada trecho; interface em `src/interface.yaml`, `main.js` e `conquistas.js`. Bandeiras `flag-it.svg` e `flag-cn.svg`; fontes CJK do sistema.
- Busca no estilo do quartz-site (`assets/js/busca.js`): Ctrl/⌘+K ou `/`, prefixo sem acento, título > tags > conteúdo, `#` para tags, CJK por caractere, destaque, prévia ao lado, ↑/↓/Tab e Enter leva ao item e abre os detalhes.
- Tour em zoom: o poster do cartão e "Ver tour" abrem um diálogo grande com painel mínimo (play/pausa, barra de progresso, tempo, links, tela cheia, fechar); atalhos espaço, ←/→ e Esc; o vídeo é descarregado ao fechar.
- Prévia da 1ª página dos currículos acadêmico e profissional no idioma da página (`tools/cv_previews.py`, `make cv`).

### Changed
- O idioma inicial segue a lista de idiomas do navegador (`navigator.languages`), inclusive `it-*` e `zh-*`.
- Abaixo de 1366 px o seletor de idioma mostra só a bandeira ativa e abre as demais ao passar o mouse ou focar.

## [2.4.0] - 2026-11-03
### Changed
- Topbar mostra as seções a partir de 1024 px (antes só a partir de 1561 px); idioma vira só bandeiras e o relógio some em telas menores para caber.
- Rolagem por seção no desktop: cada giro da roda leva à seção seguinte ou anterior; seções mais altas que a tela rolam normalmente até o fim antes de mudar de seção. Desligada abaixo de 900 px e com diálogos abertos; respeita `prefers-reduced-motion`.
- Sidebar mais estreita (240 px), com tamanhos ajustados à altura da janela e sem barra de rolagem visível; em telas baixas os contatos viram uma linha de ícones.
- Rodapé no padrão do Researcher Hub: uma barra com a frase (café, código e cometa), ícones sociais em caixinha, data de atualização e "voltar ao topo".

## [2.3.0] - 2026-11-03
### Added
- Seção **Participação em eventos** (substitui "Além do código"): linha do tempo por ano com as fotos de cada evento e lightbox (setas, Esc). `tools/eventos.py` lê as notas `03-midia/<ano>/` publicadas do vault, gera WebP sem EXIF (1200 px e miniatura de 480 px) e `src/eventos.json`.
- Controles iguais aos do quartz-site: pílulas de idioma com bandeira, botão sol/lua do plugin darkmode (MIT) e relógio em tempo real (UTC−3).
- Modo leitura (botão na topbar, atalho `r`, botão flutuante para sair): recolhe a sidebar e centraliza o conteúdo; estado salvo no navegador.
- Conquistas discretas (`assets/js/conquistas.js`): 8 marcos de exploração, contador `n/8` com popover e aviso de 3 s, sem XP, ranks ou som.
- Currículo em 6 idiomas (acadêmico e profissional, PDFs do phrandrade.com) no lugar dos botões únicos.
- Bolsa "Detecção de Anomalias em Estrelas da Via Láctea (Fase II)", PIBIC/CNPq, 2026 — presente.
- Tour em vídeo para 26 dos 31 projetos. Ficam sem vídeo: dashboard-life e hardcore-life (dados pessoais), anomaly_detection (projeto protegido) e HardCoreLife (plataforma) e Arquivo de Apostilas (ainda sem artefato).

### Changed
- `tools/record_demos.js` reescrito: screencast CDP em 1440x900 a 1,5x (JPEG q90) montado com ffmpeg em VP9 1280 px, cursor visível com destaque no clique, rolagem suave, corte do início em branco e poster escolhido no roteiro. Novos passos: `click`, `hover`, `type`, `press`, `scrollTo`, `waitFor`, `poster`; fontes `pdf:` (páginas renderizadas com pdftoppm) e `readme:` (README de repositório privado renderizado localmente); `routes` para servir recursos ausentes da instância local a partir de um CDN.
- "arXiv Searcher" e "research" unificados em **Researcher Hub**.
- Estética: contador de seção no título, elevação leve nos cartões, badges de visibilidade coloridos; a topbar ocupa a largura toda quando o menu completo aparece.

### Deprecated
- `tools/gen_quartz.py`: as páginas de projeto do quartz-site vêm do vault desde 05/10/2026; o script só roda com `--legado` e saiu do pre-commit.


## [2.2.0] - 2026-11-03
### Added
- Topbar com menu móvel, sidebar fixa de perfil e contato (foto, tagline, local, links com ícone e texto, botão de CV) e rodapé com ícones sociais, colunas de links e data de atualização. Sprite `assets/icons.svg` (Simple Icons, CC0, mais ícones próprios).
- Fonte única em pt-BR numa nota do vault hardcore-life + `src/traducoes.json`; `tools/traduzir.py` traduz por IA só os trechos alterados (marcação `traduzir: true`, disparada pelo watcher do vault). `tools/fonte.py` e `tools/migrar_fonte.py` (migração única, sem perda de traduções).

### Changed
- Largura útil de 1320px, grade de cartões em 3 colunas em telas largas; seção Contato em cartões com ícone.
- `tools/build.py` e `tools/gen_quartz.py` leem a fonte nova; `src/portfolio.md` virou `src/portfolio-legado-v2.1.md`.

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
