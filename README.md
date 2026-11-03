# Portfolio — Pedro Rocha

Página de portfólio estática (GitHub Pages, `portfolio.phrandrade.com`), v2 clean:
uma página só, minimalista, com o mesmo visual do site oficial (phrandrade.com),
tema claro e escuro e quatro idiomas (PT/EN/ES/FR).

A v1 sci-fi (HUD, Three.js, canvas, quests) está arquivada no repositório privado
`pedroiff0/portfolio-v1-scifi` e na tag `v1-scifi` deste repositório.

## Conteúdo

- **Sobre mim** — trajetória, formação (Eng. de Computação / IFF) e atuação (PIBIC/CNPq).
- **Destaques** e **Trabalhos** (todos os repositórios, com filtro por categoria e busca); detalhes em `<details>`.
- **Pesquisa** e **Bolsas** (linha do tempo).
- **Currículo**, **Lattes** e **Contato**.

## Estrutura

```
index.html              # esqueleto semântico, uma <section> por área
assets/css/style.css    # tokens do quartz-site, claro/escuro
assets/js/projects.js   # dados (gerado por tools/build.py, não editar)
assets/js/main.js       # render, idioma, tema, filtro/busca, nav
tests/smoke.js          # teste Playwright (npm test)
```

## Como editar

**A fonte é uma nota do vault hardcore-life, em pt-BR:**
`01-projetos/pessoal/portfolio/esboco-portfolio-conteudo.md` (caminho em `PORTFOLIO_FONTE`).

1. Edite só em português no Obsidian (perfil, frase, chips, sobre, projetos, bolsas, contatos, além do código).
2. Marque a propriedade `traduzir` e salve. O watcher do vault (`watch-vault.py`, depois de 3 min sem mudança) roda `tools/traduzir.py`, que traduz por IA (`claude -p`) apenas os trechos que mudaram para en/es/fr, grava `src/traducoes.json`, desmarca `traduzir` e regera `assets/js/projects.js`.
3. Revise e publique (commit e push), que continua manual.

Sem o watcher: `make traduzir` ou `make publicar-local` (traduz se marcado, gera e testa).

- `src/conteudo.md` é o espelho da nota no repositório (copiado a cada build; não edite).
- `src/traducoes.json` guarda, por trecho, o hash do pt e as traduções. Trecho sem tradução atual aparece em pt nos outros idiomas e o build avisa.
- Rótulos de interface (menu, títulos de seção): `src/interface.yaml`.
- `src/portfolio-legado-v2.1.md` é o formato antigo (bandeiras por idioma), mantido só como referência.

### Formato de um projeto (na nota do vault)

```
### Nome do Projeto
repo: https://github.com/pedroiff0/foo     (opcional — sem ele, o cartão
slug: foo                                   mostra "sem repositório público")
stack: Node.js, Express, MongoDB
tags: Full-stack, Web App
cat: software | academico | pesquisa | pessoal
visibility: público | privado | planejamento | elaboracao
icon: cash
image: assets/media/foo/poster.webp   (opcional)
video: assets/media/foo/tour.webm     (opcional, botão "Ver tour")
live: https://...                     (opcional, iframe; o site precisa permitir embed)
open: https://...                     (opcional, link em nova aba)

Texto do projeto em português, em parágrafo(s).
```

com a nota já existente no quartz-site (ver abaixo); sem ele, o slug é
derivado do nome.

## Gravar os tours dos projetos

```bash
node tools/record_demos.js              # todos os tours de tools/demos/tours.json
node tools/record_demos.js financas     # só um
```

Grava com Playwright as instâncias locais (sempre com banco demo, nunca dados reais), fecha banners de cookie e gera `assets/media/<slug>/tour.webm` e `poster.webp`.

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

## Rodar localmente e testar

```bash
make dev        # http://localhost:8080
npm test        # smoke test Playwright (SHOTS_DIR=<pasta> salva screenshots)
make lint
```

## Publicar no GitHub Pages

1. Faça push deste repositório para `pedroiff0/portfolio`.
2. Em **Settings → Pages**, escolha a branch `master` (ou `main`) e a pasta `/ (root)`.
3. O site ficará em `https://pedroiff0.github.io/portfolio/`.

Não depende de build: é HTML/CSS/JS puro, servido diretamente.
