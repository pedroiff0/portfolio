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

**A fonte é o Markdown, não o JS.** Nunca edite `assets/js/projects.js` à mão:
ele é compilado e sobrescrito pelo pre-commit.

- Projetos, bolsas e contatos: `src/portfolio.md`
- Textos de interface (nav, hero, rótulos, i18n): `src/interface.yaml`
- Cores/tipografia/animações: `assets/css/style.css`

Depois de editar:

```bash
python3 tools/build.py     # regenera assets/js/projects.js
node tools/verify.js       # confere contra o snapshot .orig
```

O hook `pre-commit` já roda o build e faz `git add` do JS gerado.

### Formato de um projeto

```
### Nome do Projeto
repo: https://github.com/pedroiff0/foo     (opcional — sem ele, o cartão
slug: foo                                   mostra "sem repositório público")
stack: Node.js, Express, MongoDB
tags: Full-stack, Web App
cat: software | academico | pesquisa | pessoal
visibility: público | privado | planejamento | elaboracao
icon: cash

🇧🇷 texto em português
🇺🇸 english text
🇪🇸 texto en español
🇫🇷 texte en français
```

Idioma faltando herda o 🇧🇷. O campo `slug:` é opcional e só serve para casar
com a nota já existente no quartz-site (ver abaixo); sem ele, o slug é
derivado do nome.

## Sincronizar com o quartz-site

`src/portfolio.md` é a **fonte única** dos projetos: as notas de
`content/<lang>/projects/` do quartz-site são geradas a partir dele.

```bash
python3 tools/gen_quartz.py            # dry-run: mostra o que mudaria
python3 tools/gen_quartz.py --write    # aplica
python3 tools/gen_quartz.py --check    # exit 1 se dessincronizado
```

O script gera as quatro línguas (`pt-br`, `en`, `es`, `fr`) e só controla:

- os campos de frontmatter `title`, `tags`, `repo`, `status`;
- o bloco entre `<!-- gerado por ... -->` e `<!-- fim do bloco gerado -->`.

O resumo, o rótulo de repositório e o status saem traduzidos por idioma. O
`title` e as `tags` ficam no original de propósito: o título é nome próprio do
projeto, e as tags são usadas pelo Quartz para agrupar notas — traduzi-las
fragmentaria cada grupo em quatro.

Todo o resto — `publish`, `created`, `password`, e principalmente o corpo
escrito à mão — é preservado. Em notas que já têm texto humano o bloco entra
em modo reduzido (só stack e repositório), para não duplicar o resumo.

O caminho do site vem de `$QUARTZ_SITE` (padrão:
`/home/pedro/Repositorios/pessoal/quartz-site`).

**Atenção:** o `content/` do quartz-site é um vault Obsidian sincronizado por
Syncthing e vive sujo no git. O script nunca commita — rode `git status` lá e
separe as mudanças à mão.

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
