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
- **Participação em eventos** (fotos por evento, lightbox), gerada do vault por `tools/eventos.py`.
- **Currículo** (6 idiomas), **Lattes** e **Contato**.
- Topbar com relógio (UTC−3), idioma e tema como no quartz-site, modo leitura (`r`) e conquistas discretas (`n/8`).

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

Grava com Playwright (screencast CDP a 1,5x, cursor visível, rolagem suave) e gera `assets/media/<slug>/tour.webm` (VP9, 1280 px) e `poster.webp`. Os passos de cada tour estão documentados no topo de `tools/record_demos.js`.

Origem dos dados de cada tour (nunca dados reais):

- **Apps web:** instância local com o modo demo do próprio app (Finanças `/demo`, Sistema Acadêmico `/demo`, Projeto Profissional `/demo/start`) ou cópia do repositório no scratch com banco temporário e seed fictício (Caixas, Avaliações e variantes, usuário `demo@exemplo.com`). Desligar o que foi ligado para gravar.
- **Sites e repositórios públicos:** a página pública (Cálculo Numérico, phrandrade.com, GitHub).
- **LaTeX:** `pdf:` renderiza páginas escolhidas de um PDF compilado.
- **Repositórios privados sem UI web:** `readme:` renderiza o README localmente.

Antes de publicar, conferir uma folha de contato dos vídeos (ex.: `ffmpeg -i tour.webm -vf "fps=1/2.5,scale=400:-2,tile=4x2" -frames:v 1 folha.png`).

## Eventos

```bash
python3 tools/eventos.py   # relê 03-midia/ do vault e regenera src/eventos.json e assets/media/eventos/
python3 tools/build.py
```

## Quartz-site

`tools/gen_quartz.py` está **obsoleto** desde 05/10/2026: as páginas de projeto do
quartz-site vêm do vault hardcore-life (`99-meta/scripts/sync-to-quartz.py` e
`sitesync-map.yaml`). O script só roda com `--legado` e não deve ser usado.

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
