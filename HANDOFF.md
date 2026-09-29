# HANDOFF — Portfolio

## 1. Contexto Rápido
- **Repositório:** `pedroiff0/portfolio` (`~/Repositorios/profissional/portfolio`).
- **Função Principal:** Website de portfólio profissional e acadêmico de Pedro Iff, hospedado no GitHub Pages com domínio customizado via `CNAME`.
- **Destaques:** Interface imersiva com HUD cibernético, renderizador de partículas em HTML5 Canvas e vitrine de projetos.

## 2. Arquitetura & Stack
- **Frontend:** HTML5, CSS3 moderno, Vanilla JavaScript modular em `src/` e `assets/`.
- **Testes:** Playwright em `tests/` para testes de regressão visual e interação de HUD.
- **Histórico:** Documento de handoff detalhado arquivado em `docs/HANDOFF_HISTORICO.md`.

## 3. Estado Atual & Diretrizes Operacionais
- **Governança:** AGENTS.md, DESIGN.md, Makefile e templates do GitHub ativos.
- **Comandos Principais:**
  - `make help`: Lista os comandos disponíveis.
  - `make dev`: Sobe servidor web local simples (Python http.server).
  - `make test`: Executa testes de interface com Playwright.
  - `make lint`: Verifica existência de arquivos chave.
- **Próximos Passos:**
  - Manter catálogo de projetos sincronizado com os lançamentos mais recentes de `sistema-academico`, `financas-app` e pesquisas.
