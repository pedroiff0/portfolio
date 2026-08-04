# Portfolio — Pedro Rocha

Página de portfólio estática (GitHub Pages) — tema astronomia, design profissional,
animações e conteúdo em uma única página com navegação por *anchors* e seções
reveláveis (conteúdo "invisível" que aparece ao clicar).

## Conteúdo

- **Sobre mim** — trajetória, formação (Eng. de Computação / IFF) e atuação (PIBIC/CNPq).
- **Projetos** (cartões clicáveis): ReLaTeX, Sistema Acadêmico, Sistema de Avaliações e Currículo (LaTeX).
- **Pesquisa** (accordion): arqueologia galáctica, anomaly_detection (GAIA×GALAH), simulações de aglomerados e SpectraViewer.
- **Currículo**, **Lattes** e **Contato**.

## Estrutura

```
index.html              # página única (single-page, anchors)
assets/css/style.css    # tema deep-space, glassmorphism, animações
assets/js/projects.js   # dados dos projetos e da pesquisa
assets/js/main.js       # starfield canvas, scroll reveal, accordions, nav
```

## Como editar

- Conteúdo dos cartões e da pesquisa: `assets/js/projects.js` (`PROJECTS`, `RESEARCH`).
- Textos fixos (Sobre, Lattes, Contato): `index.html`.
- Cores/tipografia/animções: `--accent`, `--grad`, etc. em `assets/css/style.css`.

## Rodar localmente

```bash
cd portfolio
python3 -m http.server 8000
# abra http://localhost:8000
```

## Publicar no GitHub Pages

1. Faça push deste repositório para `pedroiff0/portfolio`.
2. Em **Settings → Pages**, escolha a branch `master` (ou `main`) e a pasta `/ (root)`.
3. O site ficará em `https://pedroiff0.github.io/portfolio/`.

Não depende de build: é HTML/CSS/JS puro, servido diretamente.
