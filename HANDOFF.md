# HANDOFF — Portfolio

## 1. Contexto Rápido
- **Repositório:** `pedroiff0/portfolio` (`~/Repositorios/profissional/portfolio`).
- **Função Principal:** Website de portfólio profissional e acadêmico de Pedro Iff, hospedado no GitHub Pages com domínio customizado via `CNAME`.
- **Destaques:** v2 clean (03/11/2026): página única minimalista com o visual do phrandrade.com, claro/escuro, PT/EN/ES/FR. A v1 sci-fi está em `pedroiff0/portfolio-v1-scifi`.

## 2. Arquitetura & Stack
- **Frontend:** HTML5, CSS3 moderno, Vanilla JavaScript modular em `src/` e `assets/`.
- **Testes:** `npm test` roda `tests/smoke.js` (Playwright, sobe o próprio servidor).
- **Histórico:** Documento de handoff detalhado arquivado em `docs/HANDOFF_HISTORICO.md`.

## 3. Estado Atual & Diretrizes Operacionais
- **Governança:** AGENTS.md, DESIGN.md, Makefile e templates do GitHub ativos.
- **Comandos Principais:**
  - `make help`: Lista os comandos disponíveis.
  - `make dev`: Sobe servidor web local simples (Python http.server).
  - `make test`: smoke test Playwright.
  - `make lint`: `node --check` do `main.js` e `build.py --check`.
- **Próximos Passos:**
  - Manter catálogo de projetos sincronizado com os lançamentos mais recentes de `sistema-academico`, `financas-app` e pesquisas.
