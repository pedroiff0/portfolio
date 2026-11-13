---
publish: false
title: Portfólio (conteúdo em pt-BR)
type: esboco
created: '2026-11-03T15:28:39-03:00'
modified: 2026-11-13T10:44:29-03:00
published: '2026-11-03T15:28:39-03:00'
tags:
  - esboco
  - projeto
  - portfolio
cssclasses:
  - page-layout
sitesync: false
resource-sync: false
traduzir: false
---

# Portfólio: conteúdo (pt-BR)

> [!info] Como editar
> Escreva só em português. Ao terminar, marque **traduzir** (propriedade acima) e salve: o watcher traduz por IA só os trechos que mudaram (en, es, fr, it, zh), valida a página, faz commit e push no repositório `~/Repositorios/profissional/portfolio` e desmarca a propriedade. Acompanhe em `/tmp/portfolio-traduzir.log`; se a validação falhar nada é publicado.
> Esta nota controla: perfil, projetos, bolsas, contatos, **Página** (ordem e visibilidade das seções e do menu) e **Interface** (todos os textos fixos: menu, títulos e subtítulos de seção, botões, rótulos, banner do QR). Eventos vêm das notas de `03-midia`; layout, CSS e vídeos ficam no repositório.
> Chaves `chave: valor` ficam no início de cada bloco; o texto vem depois, em parágrafos. Projetos são `### Nome`. Callouts como este são ignorados pelo build.

## Metadados
full_name: Pedro Henrique Rocha de Andrade
orcid: 0009-0003-6724-4640
instagram: ra.pedroh
featured: Sistema Acadêmico, Researcher Hub, Rumo, ReLaTeX
research: Anomaly Detection Viewer

## Perfil
eyebrow: Engenharia de Computação · Instituto Federal Fluminense
tagline: Engenharia de Computação no IFF · bolsista PIBIC/CNPq · astrofísica computacional
location: Bom Jesus do Itabapoana, RJ

### Frase
Construo software para a academia e uso computação para entender o cosmos. Estudante de Engenharia de Computação, bolsista de Iniciação Científica (PIBIC/CNPq), na interseção entre métodos computacionais e astrofísica.

### Chips
- PIBIC / CNPq
- IAAC 2024 & 2025
- CCNA · CyberOps · IoT
- Linux & Servidores
- Astrofísica Computacional
- Machine Learning
- Gaia · GALAH
- ORCID · Scholar

### Sobre
Sou estudante de **Engenharia de Computação** no **Instituto Federal Fluminense (IFF)**, campus Bom Jesus do Itabapoana — RJ, e bolsista de Iniciação Científica (**PIBIC/CNPq**). Minha pesquisa fica na fronteira entre computação e astronomia: arqueologia galáctica, populações estelares e estrutura da Via Láctea, com aprendizado de máquina aplicado a dados do *Gaia* e de surveys complementares.

Do lado de engenharia, domino **Python** e **C**, redes de computadores (certificações **Cisco CCNA, CyberOps e IoT**), administração de servidores Linux e desenvolvimento de software full-stack. Participo da **International Astronomy and Astrophysics Competition** (IAAC 2024 e 2025) e apresentei trabalhos em eventos como FEBRACE, Mostratec, CONFICT e na Feira Brasileira de Iniciação Científica.

Sou Técnico em Informática pelo IFF (2020–2022) e um dos organizadores da Semana de Computação, Engenharia e Gestão do IFF.

## Projetos

### E-lixo
status: camp
slug: elixo
stack: Eletrônica, Ciência do Ambiente, LaTeX
tags: E-waste, Sustainability, Outreach
resumo: Campanha sobre o descarte de baterias e e-lixo em Bom Jesus do Itabapoana.
cat: academico
visibility: elaboracao
icon: document
image: assets/media/elixo/poster.webp

Pra onde vai a bateria que morreu? Projeto integrador de Filosofia da Ciência e Tecnologia (IFF, 2026/2), em grupo, sobre lixo eletrônico com foco em baterias de carro, bicicleta elétrica e celular. Mapeia o descarte inadequado em Bom Jesus do Itabapoana, a distância entre o que a lei manda (PNRS) e os pontos de coleta que a cidade oferece, e propõe trazer o Circuito Verde do IFF para o campus BJI. Eixo técnico em Eletrônica Analógica e Digital, Ciência do Ambiente e Ciência dos Materiais; relatório e defesa em novembro de 2026. Tem bateria velha ou celular quebrado na gaveta? Não vai no lixo comum: leve a um ponto de coleta e ajude a fechar esse ciclo.

### Middle-Earth-Compiler
status: dev
slug: middle-earth-compiler
repo: https://github.com/pedroiff0/middle-earth-compiler
stack: Java, Maven, ANTLR 4, Arduino C++
tags: Compilers, ANTLR, Arduino
resumo: Compilador da linguagem Quenya 1.0 para Arduino Mega 2560, com ANTLR 4 e Java.
cat: academico
visibility: privado
icon: function

Compilador da linguagem Quenya 1.0 para Arduino C++ (Mega 2560), trabalho prático da disciplina de Compiladores (IFF, 6º período, 2026), construído em sete etapas cumulativas. O front-end usa ANTLR 4 para a análise léxica e sintática, seguido de AST, análise semântica com tabela de símbolos, representação para geração de código, gerador e integração. A etapa 1 (analisador léxico) está integrada e a etapa 2 (analisador sintático) está em andamento; erros léxicos e sintáticos são reportados com linha e coluna.

### Zênite
status: dev
slug: financas
repo: https://github.com/pedroiff0/financas-app
stack: Node.js 20, Express, MongoDB, Mongoose, EJS, JWT, Zod, Jest, Docker, Helmet
tags: Finance, Full-stack, Investments
resumo: Finanças pessoais, investimentos e gestão de veículos em três módulos independentes.
cat: software
visibility: privado
icon: cash
image: assets/media/financas/poster.webp
video: assets/media/financas/tour.webm

Zênite (antes Finanças App), em desenvolvimento: aplicação web de controle financeiro pessoal com três módulos independentes (ligados/desligados por flag): Finanças (contas, categorias, lançamentos, recorrências, orçamentos por envelope, metas), Investimentos (carteira multi-corretora, preço médio ponderado, proventos, resultado realizado/não realizado) e Moto (manutenções, abastecimentos com km/l, gastos, custo por km, alertas de revisão). Backend Node/Express + MongoDB, frontend EJS SSR, autenticação JWT, validação Zod e boas práticas de segurança (Helmet, rate-limit, CSP). Deploy via Docker Compose.

### Sistema Acadêmico
repo: https://github.com/pedroiff0/sistema-academico
stack: Node.js, Express, MongoDB, Mongoose, EJS, JWT, Docker, vis-network
tags: Full-stack, Education, IFF
resumo: Diário, notas, frequência, boletim/CR e planejamento para alunos do IFF, em vários cursos.
cat: software
visibility: privado
icon: academic
image: assets/media/sistema-academico/poster.webp
video: assets/media/sistema-academico/tour.webm
open: https://academico.phrandrade.com

Web exclusivo para alunos do IFF acompanharem grade curricular (PPC), diário, notas, frequência, boletim/CR e planejamento. Multi-curso: Engenharia de Computação (Bom Jesus do Itabapoana) e Sistemas de Informação (Itaperuna). Fork do padrão de avaliações, com diário, ementário, grafo de dependências e API de ingestão por bot (Telegram). Deploy via Docker Compose + systemd.

### Sistema de Avaliações
slug: avaliacoes
repo: https://github.com/pedroiff0/avaliacoes
stack: Node.js, Express, MongoDB, LaTeX, EJS
tags: EdTech, LaTeX, Exams
resumo: Provas, listas e trabalhos em PDF (LaTeX) a partir de um banco de questões reutilizável.
cat: software
visibility: privado
icon: quiz
image: assets/media/avaliacoes/poster.webp
video: assets/media/avaliacoes/tour.webm
status: beta

Plataforma base de provas/listas/trabalhos em PDF a partir de um banco de questões reutilizável, com geração real em LaTeX e múltiplas variantes (seleção/ordem aleatórias). Núcleo professor+admin.

### Avaliações Professores
repo: https://github.com/pedroiff0/avaliacoes-professores
stack: Node.js, Express, MongoDB, LaTeX
tags: EdTech, Question Bank, Collaborative
resumo: Versão para professores, com banco pessoal e global e compartilhamento de questões.
cat: software
visibility: privado
icon: teacher
image: assets/media/avaliacoes-professores/poster.webp
video: assets/media/avaliacoes-professores/tour.webm

Fork do Sistema de Avaliações com banco pessoal + banco global compartilhado (fork de questões entre professores), PDF por pool com peso e gabarito opcional.

### Avaliações Concurseiro
repo: https://github.com/pedroiff0/avaliacoes-concurseiro
stack: Node.js, Express, MongoDB, Expo, LaTeX
tags: EdTech, Mobile, Gamification
resumo: Versão para concursos: trilhas por edital, simulados, Pomodoro e app mobile.
cat: software
visibility: privado
icon: exam
image: assets/media/avaliacoes-concurseiro/poster.webp
video: assets/media/avaliacoes-concurseiro/tour.webm

Fork focado em concurseiros: banco de MCQ, trilhas por edital, cronograma maleável, Pomodoro, simulados em PDF e app mobile Expo com paridade total de funcionalidades.

### Portal Acadêmico IFF (academicoWeb)
slug: academicoweb
repo: https://github.com/pedroiff0/academico-web
stack: Python, Flask, Jinja2, Scraping
tags: Web App, IFF, Scraping
resumo: Portal que lia os dados do IFF por scraping; arquivado e sucedido pelo Sistema Acadêmico.
cat: software
visibility: privado
icon: web
image: assets/media/academicoweb/poster.webp
video: assets/media/academicoweb/tour.webm

Sistema web que acessava os dados acadêmicos do IFF com as credenciais oficiais — dashboard, diário, material de aula, boletim e histórico escolar — via scraping. Arquivado: a migração do IFF para o SUAP torna a abordagem original obsoleta, e o Sistema Acadêmico o sucede. A técnica de scraping fica registrada como referência técnica (possível tema de TCC).

### ReLaTeX
status: ext
repo: https://github.com/pedroiff0/relatex
stack: Docker, Node.js, MongoDB, Redis, Pug, LaTeX
tags: LaTeX, Self-hosted, IFF
resumo: Overleaf self-hosted com as classes oficiais do IFF; projeto de extensão para a comunidade acadêmica.
cat: software
visibility: privado
icon: latex
image: assets/media/relatex/poster.webp
video: assets/media/relatex/tour.webm
open: https://relatex.phrandrade.com

Fork do Overleaf Community Edition com identidade do IFF: classes oficiais embutidas (ifftese/iffposter), tema azul, landing própria e 10 botões extras no editor. Self-hosted via Docker (web+mongo+redis). É também um projeto de extensão: leva à comunidade do IFF um ambiente LaTeX pronto, com as classes institucionais (ifftese, iffartigo, iffposter, iffslides) que automatizam as normas da ABNT e do IBGE, apresentado no CONEPE 2026 (XIII Congresso de Ensino, Pesquisa e Extensão).

### Verdementa
repo: https://github.com/pedroiff0/verdementa
stack: Meta-repo, Python, PowerShell
tags: Business, ERP
resumo: Suíte de ferramentas comerciais: caixa, estoque e planilhas.
cat: software
visibility: privado
icon: leaf
image: assets/media/verdementa/poster.webp
video: assets/media/verdementa/tour.webm

Meta-repositório que agrupa Caixas, ControleEstoque, LevantamentoEstoque e Planilhador — suíte de ferramentas comerciais.

### Caixas
repo: https://github.com/pedroiff0/caixas
stack: Python, Flask, SQLAlchemy, Alembic, Jinja2, AdminLTE
tags: Cash Flow, Reports
resumo: Fechamentos diários de caixa, relatórios e histórico imprimível.
cat: software
visibility: privado
icon: cash
image: assets/media/caixas/poster.webp
video: assets/media/caixas/tour.webm

Aplicação web para registrar fechamentos diários de caixa (vendas, depósitos, vales, total contado na gaveta), gerar relatórios e manter histórico imprimível. Flask + SQLAlchemy + Alembic, com endpoints REST auxiliares e migrations versionadas em CI.

### ControleEstoque
repo: https://github.com/pedroiff0/controle-estoque
stack: Python, CI, CSV/PDF
tags: Inventory, Reports
resumo: Contagem rápida de inventário com relatórios em CSV e PDF.
cat: software
visibility: privado
icon: box
image: assets/media/controle-estoque/poster.webp
video: assets/media/controle-estoque/tour.webm

Aplicação para contagem rápida de inventário, com persistência de sessão, consolidação de contagens e geração de relatórios em CSV/PDF.

### LevantamentoEstoque
repo: https://github.com/pedroiff0/levantamento-estoque
stack: Python, CI, PDF
tags: Inventory, PDF
resumo: Levantamento de estoque por cor e tamanho, com extração de dados de PDF.
cat: software
visibility: privado
icon: box
image: assets/media/levantamento-estoque/poster.webp
video: assets/media/levantamento-estoque/tour.webm

Sistema de levantamento de estoque por cor/tamanho, com persistência de sessão, extração de dados de PDF e geração de relatórios — voltado a itens de compra repetida.

### Planilhador
repo: https://github.com/pedroiff0/planilhador
stack: Python, CI, XML/NFCe
tags: NFC-e, Spreadsheets
resumo: Processa XMLs de NFC-e e gera planilhas e relatórios automáticos.
cat: software
visibility: privado
icon: table
image: assets/media/planilhador/poster.webp
video: assets/media/planilhador/tour.webm

Ferramentas para processar XMLs de NFCe e gerar relatórios/planilhas automatizados.

### Projeto Profissional (template)
slug: projeto-profissional
repo: https://github.com/pedroiff0/projeto-profissional
stack: Node.js 20, Express, MongoDB, Mongoose, EJS, JWT, Zod, Jest, Docker
tags: Template, Security, Open Source
resumo: Template Node/Express + MongoDB com autenticação, papéis e segurança desde o primeiro commit.
cat: software
visibility: público
icon: web
image: assets/media/projeto-profissional/poster.webp
video: assets/media/projeto-profissional/tour.webm

Template base endurecido para iniciar qualquer aplicação web Node: autenticação JWT, papéis admin/user, registro controlado pelo admin (sem autocadastro), CSP sem inline, rate limit, CSRF guard, validação Zod e suíte Jest+Supertest desde o primeiro commit. Docker Compose com app não-root e filesystem read-only.

### awesome-skills
repo: https://github.com/pedroiff0/awesome-skills
stack: Markdown, YAML, Python, Hermes Agent
tags: AI, Agents, Open Source
resumo: Biblioteca de skills, agentes e plugins reutilizáveis para agentes de IA.
cat: software
visibility: público
icon: book
image: assets/media/awesome-skills/poster.webp
video: assets/media/awesome-skills/tour.webm

Coleção pessoal de skills (memória procedural) para o agente Hermes — 102 skills em 32 categorias, cada uma com SKILL.md (frontmatter YAML + instruções) e, opcionalmente, references/, scripts/ e templates/. Índice do README gerado por script; cobre de manutenção de sites Quartz e i18n a MLOps, LaTeX e automação de desktop.

### meu-setup
repo: https://github.com/pedroiff0/meu-setup
stack: Python, YAML, Bash, PowerShell, apt/dnf/pacman/zypper, winget, Homebrew
tags: Dotfiles, Linux, Open Source
resumo: Mapa dos programas que uso e instalador automático para repopular a máquina.
cat: software
visibility: público
icon: box
image: assets/media/meu-setup/poster.webp
video: assets/media/meu-setup/tour.webm

Mapa de todos os programas que uso (Linux, Windows e macOS) com instaladores automáticos e uma única fonte de verdade: packages.yaml. O instalador Linux detecta a distro (apt/dnf/pacman/zypper), é idempotente e tem cadeia de fallback (nativo → flatpak → snap → script oficial). Um gerador produz install.ps1, install.sh e o inventário; o bootstrap repopula a máquina do zero com um comando.

### anomaly-detection
image: assets/media/anomalyviewer/poster.webp
video: assets/media/anomalyviewer/tour.webm
repo: https://github.com/pedroiff0/anomaly-detection
stack: Python, Astropy, NumPy, Pandas, ML, Jupyter
tags: PIBIC/CNPq, Gaia, Machine Learning
resumo: Aprendizado de máquina para achar estrelas anômalas no GALAH DR4 + Gaia DR3 (PIBIC/CNPq).
cat: pesquisa
visibility: privado
icon: star

Análise das propriedades estelares e composição química das estrelas próximas do GCNS observadas pelo GALAH DR4 (Gaia DR3 + GALAH DR4). Bolsa PIBIC/CNPq; co-autoria PUC Chile (Dra. M. L. L. Dantas, Dra. A. C. Soja).

### Anomaly Detection Viewer
slug: anomalyviewer
stack: Python, Streamlit, Plotly, t-SNE, UMAP, HDBSCAN
tags: Gaia, Data Viz, Machine Learning
resumo: Painel público do mapa t-SNE dos espectros GALAH DR4, com clusters e flags.
cat: pesquisa
visibility: público
icon: star
live: https://anomaly.phrandrade.com/?embed=true
open: https://anomaly.phrandrade.com
image: assets/media/anomalyviewer/poster.webp
video: assets/media/anomalyviewer/tour.webm

Visualizador público dos resultados da pesquisa de detecção de anomalias em estrelas da vizinhança solar (GCNS + GALAH DR4, até 100 pc). Mostra o mapa t-SNE do espectro inteiro, pixel a pixel, com as cores dos parâmetros do catálogo, as flags de emissão e binárias espectroscópicas e os clusters HDBSCAN, além das análises do SAB 2025. Tudo pré-calculado; acompanha o banner do SAB 2026.

### SpectraViewer
repo: https://github.com/pedroiff0/spectraviewer
stack: Python, FITS, Matplotlib
tags: Spectroscopy, GALAH, Open Source
resumo: Visualizador interativo de espectros GALAH DR4 com linhas de referência.
cat: pesquisa
visibility: público
icon: spectrum
live: https://spectraviewer.streamlit.app/?embed=true
open: https://spectraviewer.streamlit.app
image: assets/media/spectraviewer/poster.webp
video: assets/media/spectraviewer/tour.webm
status: ajustes

Viewer interativo de espectros GALAH DR4 (4 bandas, linhas de referência CNO/Alpha/Iron-peak, leitura de FITS, metadados Teff/log(g)/[Fe/H]).

### Researcher Hub
repo: https://github.com/pedroiff0/research
stack: Node.js, Express, MongoDB, EJS, arXiv API, Docker
tags: arXiv, Literature, Automation
resumo: Acompanha o arXiv: revisão diária, busca, autores monitorados e biblioteca pessoal.
cat: pesquisa
visibility: privado
icon: book
image: assets/media/research/poster.webp
video: assets/media/research/tour.webm
open: https://research.phrandrade.com

Plataforma web para acompanhar a literatura científica no arXiv (research.phrandrade.com): revisão diária pública por categoria, busca por palavra-chave e autor, monitoramento de autores, biblioteca pessoal e exportação de citações em BibTeX/LaTeX e PDF. Nasceu como o arXiv Searcher, um buscador automático de artigos por assunto, e virou uma aplicação completa.

### Currículo (CV)
repo: https://github.com/pedroiff0/cv
stack: LaTeX, altacv, Makefile, biblatex
tags: LaTeX, Multilingual, Open Source
resumo: Currículo em LaTeX (altacv), em PT, EN, ES e FR.
cat: academico
visibility: público
icon: document
image: assets/media/cv/poster.webp
video: assets/media/cv/tour.webm

CV em LaTeX (classe altacv), multilíngue (PT/EN/ES/FR) compilado via Makefile. Inclui ORCID, Google Scholar e publicações em congressos (CONFICT, SAB, SBPC).

### Cálculo Numérico
repo: https://github.com/pedroiff0/calculo-numerico
stack: Python, CI, Docs, NumPy
tags: Numerical Methods, Python, Open Source
resumo: Códigos e documentação da disciplina de Cálculo Numérico 2025.2.
cat: academico
visibility: público
icon: function
live: https://pedroiff0.github.io/calculo-numerico/
open: https://pedroiff0.github.io/calculo-numerico/
image: assets/media/calculo/poster.webp
video: assets/media/calculo/tour.webm

Repositório de códigos da disciplina Cálculo Numérico 2025.2, com CI e documentação.

### Formulários
repo: https://github.com/pedroiff0/formularios
stack: LaTeX, siunitx
tags: LaTeX, Study Notes, Open Source
resumo: Folhas de fórmulas e resumos em LaTeX por disciplina.
cat: academico
visibility: público
icon: formula
image: assets/media/formularios/poster.webp
video: assets/media/formularios/tour.webm

Coleção de folhas de fórmulas e resumos em LaTeX organizados por disciplina.

### Modelos LaTeX
repo: https://github.com/pedroiff0/modelos
stack: LaTeX
tags: LaTeX, Templates
resumo: Modelos LaTeX de uso geral, reaproveitados nos trabalhos acadêmicos.
cat: academico
visibility: privado
icon: latex
image: assets/media/modelos/poster.webp
video: assets/media/modelos/tour.webm

Coleção de modelos LaTeX de uso geral, reaproveitados como base nos trabalhos acadêmicos.

### page (Quartz)
slug: page
repo: https://github.com/pedroiff0/quartz-site
stack: Quartz, Obsidian, Markdown, TypeScript, GitHub Actions
tags: Obsidian, Quartz, Multilingual
resumo: Site oficial: pesquisa, notas de aula, mídia e blog, em Quartz a partir do Obsidian.
cat: pessoal
visibility: público
icon: globe
live: https://www.phrandrade.com/pt-br/
open: https://www.phrandrade.com/pt-br/
image: assets/media/page/poster.webp
video: assets/media/page/tour.webm

Site pessoal/acadêmico oficial, multilíngue (PT completo; EN/ES/FR parciais), em Quartz a partir do vault Obsidian. Publicado em www.phrandrade.com. É o consolidado: pesquisa, notas de disciplinas, mídia e blog. Este portfólio é a página de boas-vindas dele.

### Livro-Texto de Cálculo
slug: livrocalculo
stack: LaTeX, Python, Sphinx
tags: LaTeX, Teaching, Calculus
resumo: Livro-texto próprio de Cálculo em LaTeX, em elaboração.
cat: academico
visibility: elaboracao
icon: function
image: assets/media/livrocalculo/poster.webp
video: assets/media/livrocalculo/tour.webm

Material didático próprio de Cálculo, em elaboração, escrito em LaTeX — dos fundamentos a sistemas lineares. Cobre revisão de Python/Cálculo I, sistemas de bases numéricas (binária, octal, decimal, hexadecimal) e sistemas lineares (eliminação de Gauss e fatoração LU, com e sem pivotamento). Cada capítulo traz apêndice próprio de algoritmos em versão simplificada, além de exemplos autorais que complementam o livro-texto padrão. Layout já ajustado; revisão de formatação (padrão Sphinx) e dos quadros de algoritmos em andamento.

### Arquivo de Apostilas
slug: apostilas
stack: LaTeX
tags: LaTeX, Teaching, Engineering
resumo: Plano de apostilas próprias para toda a grade de Engenharia de Computação.
cat: academico
visibility: planejamento
icon: formula

Plano, em planejamento, de escrever apostilas próprias cobrindo toda a grade de Engenharia de Computação — com teoria, exercícios e experimentos comentados. Abrange Cálculos I–IV e Cálculo Numérico, Física I–IV (com espaço para Quântica e de Partículas), Álgebra Linear, Algoritmos e Estruturas de Dados, Equações Diferenciais, Mecânica dos Sólidos e Fluidos, Eletricidade e Eletrônica, Banco de Dados, Engenharia de Software, Compiladores, Programação, Redes, Arquitetura de Computadores, Sistemas Operacionais e Embarcados, Metodologia Científica e Astrofísica. Complementa as notas de disciplinas já publicadas no site oficial.


### hardcore-life
repo: https://github.com/pedroiff0/hardcore-life
stack: Obsidian, PARA, Markdown
tags: Obsidian, PARA, Productivity
resumo: Vault Obsidian (PARA) que concentra projetos, áreas, notas e diário.
cat: pessoal
visibility: privado
icon: life

Vault Obsidian de gestão de vida pelo método PARA (projetos, áreas, recursos, arquivos), com mais de 4000 arquivos — a base de conhecimento pessoal de onde saem notas, planejamento e diário.

### HardCoreLife (plataforma)
slug: hardcorelife
stack: Node.js, Express, MongoDB, Docker
tags: Life OS, Modular
resumo: Plataforma modular de vida (finanças, tarefas, família), em planejamento.
cat: pessoal
visibility: planejamento
icon: dashboard

Plataforma pessoal modular, em planejamento, para reunir num só sistema o que hoje vive espalhado em planilhas e apps soltos. Um núcleo, vários módulos integrados: Controle Financeiro, Investimentos, Automotivo, Tarefas, Streamings (assinaturas) e Compartilhamento Familiar com acesso restrito por convite. Acesso pensado em duas camadas: web (aberta ou restrita conforme o módulo) e área privada.

### dashboard-life
repo: https://github.com/pedroiff0/dashboard-life
stack: Node.js, Express, MongoDB, Docker
tags: Life OS, Habits, Metrics
resumo: Painel de hábitos e métricas de vida, primeiro passo da plataforma HardCoreLife.
cat: pessoal
visibility: privado
icon: dashboard

Dashboard pessoal de hábitos e métricas de vida, derivado do vault hardcore-life e primeiro passo concreto rumo à plataforma HardCoreLife. Node + Express + MongoDB, deploy via Docker. Em desenvolvimento.

### tg-agent-bridge
slug: tgagentbridge
repo: https://github.com/pedroiff0/tg-agent-bridge
stack: Python 3.12, python-telegram-bot, httpx, faster-whisper, SQLite, tmux
tags: Telegram, AI, Automation
resumo: Bot do Telegram que liga o celular ao vault e aos agentes de IA.
cat: pessoal
visibility: privado
icon: profile

Bot do Telegram que liga o celular ao vault hardcore-life e aos agentes de IA (Claude Code e AGY): brief diário, lembretes, check-ins de rotina com botões, consultas somente leitura ao vault e aos repositórios, controle de sessões tmux, transcrição de áudio com Whisper e integração com o ReLaTeX. Regras de segurança bloqueiam arquivos sensíveis e notas protegidas.

### Baton
slug: baton
repo: https://github.com/pedroiff0/baton
stack: Python 3, Swift/AppKit, pdf.js, Tailscale, PWA
tags: Presentations, macOS, Open Source
resumo: Celular como passador de slides via Tailscale, com laser, caneta e cronômetro.
cat: pessoal
visibility: público
icon: document

Controle remoto de apresentações pelo iPhone, via Tailscale, no estilo do clicker Logitech Spotlight, sem instalar nada no celular. Funciona com qualquer aplicativo (PowerPoint, Keynote, leitores de PDF) ou abre o PDF no navegador com transições, notas do apresentador, passos dentro do slide e prévia do próximo slide. Laser, foco com desfoque ajustável, caneta, marca-texto, zoom, cronômetro e "Ir para" por número. Licença MIT.

### devops-guide
slug: guiagithub
repo: https://github.com/pedroiff0/devops-guide
stack: Docs, TypeScript, GitHub Actions
tags: DevOps, Git, Open Source
resumo: Segundo cérebro de DevOps e Git, com templates e exemplos de Actions.
cat: pessoal
visibility: público
icon: github
image: assets/media/guiagithub/poster.webp
video: assets/media/guiagithub/tour.webm

Segundo cérebro de documentações reexplicadas e hub DevOps (devops.phrandrade.com): guia próprio de Git e boas práticas de versionamento, prático e sem ser mais um manual genérico de comandos. Reúne templates, exemplos de Actions, Projects, Issues e estratégias de branching, com módulos sobre dockerização, versionamento em arquiteturas de microsserviços e padrões de documentação de repositório.

### Perfil GitHub
repo: https://github.com/pedroiff0/pedroiff0
stack: Profile, Markdown
tags: GitHub, Markdown
resumo: README do perfil do GitHub com projetos e linha do tempo de bolsas.
cat: pessoal
visibility: público
icon: profile
image: assets/media/perfil/poster.webp
video: assets/media/perfil/tour.webm

README de perfil do GitHub: bio, links, Tech & Tools, constelação de projetos em destaque (repositórios públicos, com os privados apenas citados) e linha do tempo de bolsas.

### Custos App
slug: custosapp
repo: https://github.com/pedroiff0/custos-app
stack: Node.js, Express, MongoDB, Mongoose, EJS, Zod, Jest, Docker
tags: FinOps, SaaS, Cloud Costs
resumo: SaaS de FinOps: custos de servidores e assinaturas, rateio por cliente e margem de lucro.
cat: software
visibility: privado
icon: cash
image: assets/media/custosapp/poster.webp
video: assets/media/custosapp/tour.webm

Zenith FinOps & Custos: aplicação SaaS para gestão de custos de infraestrutura cloud (VPS, Hetzner, AWS, DigitalOcean) e de assinaturas de deploy (Vercel, Supabase, Cloudflare). Inventário de servidores com câmbio automático, amortização de planos anuais, rateio de custos por cliente, DRE e margem de lucro por cliente com alertas, e simulador de precificação (infraestrutura, horas de trabalho, margem-alvo e impostos). Tem API REST com chaves para integrar ao Zênite, plano Pro com período de teste e central de avisos. Node/Express, MongoDB, telas em EJS, validação Zod e testes com Jest.

### Rumo
status: dev
slug: viagemapp
repo: https://github.com/pedroiff0/viagem-app
stack: Node.js, Express, MongoDB
tags: Travel, Collaborative, Full-stack
resumo: Viagens em grupo: roteiro compartilhado, reservas e divisão de despesas.
cat: software
visibility: privado
icon: globe
image: assets/media/viagemapp/poster.webp
video: assets/media/viagemapp/tour.webm

Rumo, em desenvolvimento: planejamento de viagens em grupo que resolve os dois pontos em que viagem em grupo trava, ninguém saber o roteiro combinado e ninguém saber quem pagou o quê. Roteiro compartilhado, reservas reunidas num só lugar e divisão de despesas entre os viajantes, com interface bilíngue (PT/EN). Node.js, Express e MongoDB.

### Manga Reader
slug: mangareader
repo: https://github.com/pedroiff0/manga-reader
stack: Docker, Suwayomi, Caddy, Tailscale
tags: Self-hosted, Tailscale, Media
resumo: Servidor pessoal de mangás (Suwayomi), acessível só pela tailnet.
cat: pessoal
visibility: privado
icon: document
image: assets/media/mangareader/poster.webp
video: assets/media/mangareader/tour.webm

Servidor pessoal de mangás baseado no Suwayomi-Server, em Docker, acessível apenas pela minha rede Tailscale (celular e iPad) e instalável como PWA. Um proxy Caddy fica na frente do servidor, com login próprio para cada amigo e biblioteca e progresso compartilhados. Não é exposto à internet.

### Portfólio v1 (sci-fi)
slug: portfolio-v1
repo: https://github.com/pedroiff0/portfolio-v1-scifi
stack: JavaScript, Three.js, Canvas
tags: Three.js, Portfolio
resumo: Primeira versão do portfólio, com visual sci-fi, preservada.
cat: pessoal
visibility: privado
icon: globe
image: assets/media/portfolio-v1/poster.webp
video: assets/media/portfolio-v1/tour.webm

Primeira versão do portfólio, com visual sci-fi (HUD, Three.js e canvas), preservada antes da refatoração para a versão clean atual.

### Portfólio (este site)
slug: portfolio
repo: https://github.com/pedroiff0/portfolio
stack: HTML, CSS, JavaScript, Python, Playwright, GitHub Pages
tags: Portfolio, Multilingual, Static Site
resumo: Esta página: portfólio único e multilíngue, gerado a partir de Markdown.
cat: pessoal
visibility: público
icon: globe
image: assets/media/portfolio/poster.webp
video: assets/media/portfolio/tour.webm

Este portfólio: página única e minimalista, multilíngue (PT/EN/ES/FR), sem framework e com o visual do site oficial (tema claro e escuro, cartões com detalhes, filtro e busca de projetos). O conteúdo não vive no HTML: é escrito em português numa nota do vault Obsidian, traduzida por IA para EN/ES/FR e compilada por um script Python para JS, com verificação automática no pre-commit. Serve de página de boas-vindas para o site oficial, onde está o conteúdo completo.

## Bolsas

### Entendendo a Matéria Escura a partir de Choques ExtraGalácticos
icon: darkmatter
kind: IC Júnior · CNPq
period: Set. 2022 — Mar. 2023
orient: Dra. Ana Cecília Soja
desc: Iniciação Científica Júnior sobre matéria escura e choques extragalácticos.

### MobFog no IFFMaker
icon: fog
kind: IC · IFF
period: Ago. 2023 — Fev. 2024
orient: Dra. Ana Cecília Soja
desc: Projeto de Iniciação Científica do IFF (computação em névoa / edge).

### Simulando o Impacto de Satélites em Observações Astronômicas
icon: satellite
kind: Voluntário · CNPq
period: Ago. 2023 — Set. 2023
orient: Dra. Ana Cecília Soja
desc: Simulação do impacto de rastros de satélites em imagens astronômicas.

### Detecção de Anomalias em Estrelas da Via Láctea (Gaia + Surveys + ML)
icon: star
kind: IC · CNPq (PIBIC)
period: Out. 2025 — Set. 2026
orient: Dra. Ana Cecília Soja e Dra. Maria Luiza Linhares Dantas
desc: Bolsa PIBIC/CNPq: aprendizado de máquina sobre Gaia DR3 + GALAH DR4 + GCNS para arqueologia galáctica e populações estelares. Co-autoria PUC Chile.

### Detecção de Anomalias em Estrelas da Via Láctea (Fase II)
icon: star
kind: IC · CNPq (PIBIC)
period: Out. 2026 — Set. 2027
orient: Dra. Ana Cecília Soja e Dra. Maria Luiza Linhares Dantas
desc: Continuação do projeto PIBIC/CNPq: aprendizado de máquina sobre Gaia DR3 + GALAH DR4 + GCNS para arqueologia galáctica e populações estelares. Co-autoria PUC Chile.

## Contatos
- icon: mail | labelKey: email | value: pedroiff0@gmail.com | href: mailto:pedroiff0@gmail.com
- icon: github | labelKey: github | value: @pedroiff0 | href: https://github.com/pedroiff0
- icon: linkedin | labelKey: linkedin | value: pedroiff0 | href: https://www.linkedin.com/in/pedroiff0/
- icon: scholar | labelKey: scholar | value: Pedro H. R. de Andrade | href: https://scholar.google.com.br/citations?user=qG9tHGEAAAAJ&hl=pt-BR
- icon: orcid | labelKey: orcid | value: 0009-0003-6724-4640 | href: https://orcid.org/0009-0003-6724-4640
- icon: lattes | labelKey: lattes | value: 6818168089966785 | href: http://lattes.cnpq.br/6818168089966785
- icon: instagram | labelKey: instagram | value: @ra.pedroh | href: https://instagram.com/ra.pedroh
- icon: globe | labelKey: site | value: www.phrandrade.com | href: https://www.phrandrade.com/pt-br/
- icon: pin | labelKey: location | value: Bom Jesus do Itabapoana, RJ — Brasil

## Além do código
> Eventos (fotos e relatos) vêm sozinhos das notas de 03-midia (publish: true) via tools/eventos.py; não é preciso listar aqui.
grade: 90 disciplinas mapeadas no Sistema Acadêmico (grade IFF Eng. de Computação, 1º→10º período).

## Página

> Ordem e visibilidade das seções e do menu (ids: sobre, projetos, pesquisa, bolsas, eventos, curriculo, lattes, contato). Seção fora de `secoes` fica oculta; `nav` define os links do topo. A lista completa de repositórios fica recolhida dentro de `projetos` ("Ver todos os projetos"). `eventos` lista os ids (`<ano>-<nota>`) dos eventos exibidos; sem a chave, todos aparecem. Em Metadados, `featured` define os cartões de Projetos e `research` os de Pesquisa.
secoes: sobre, projetos, pesquisa, bolsas, eventos, curriculo, lattes, contato
nav: sobre, projetos, pesquisa, eventos, curriculo, lattes, contato
eventos: 2026-sbpc, 2026-escolainverno, 2026-sab, 2025-sab, 2025-mctia, 2024-febic, 2023-febrace, 2023-mostratec

## Interface

> Textos fixos da página (menu, títulos e subtítulos de seção, rótulos, botões, banner do QR code). Escreva em português; o `traduzir` gera os outros 5 idiomas. Formato `- chave: texto`. `ui.*` vem do main.js e `i.*` do interface.yaml; use o texto com `%`/HTML apenas como está.

### Textos gerais (ui.*)

- ui.cvText: Currículo mantido em LaTeX (classe altacv), com versões sincronizadas em seis idiomas: português, inglês, espanhol, francês, italiano e mandarim.
- ui.cvRepo: Repositório do CV
- ui.lattesText: Estudante de Engenharia de Computação no IFF (Bom Jesus do Itabapoana, RJ), bolsista de Iniciação Científica (PIBIC/CNPq), com pesquisa em arqueologia galáctica, populações estelares e estrutura da Via Láctea.
- ui.lattesOpen: Abrir currículo Lattes
- ui.empty: Nenhum projeto encontrado.
- ui.skip: Pular para o conteúdo
- ui.theme: Alternar tema
- ui.cvDownload: Baixar CV
- ui.footTag: — computação e astrofísica, feito com
- ui.footAnd: e
- ui.footBy: por
- ui.toTop: Voltar ao topo ↑
- ui.icoCafe: café
- ui.icoCodigo: código
- ui.icoCometa: cometas
- ui.updated: Atualizado em
- ui.menu: Menu
- ui.nav: Eventos
- ui.alemTitle: Participação em eventos
- ui.alemLead: Feiras, congressos e visitas técnicas em que apresentei trabalhos ou aprendi algo, com fotos de cada um.
- ui.nickname: Apelido
- ui.base: Base
- ui.baseText: Bom Jesus do Itabapoana, RJ
- ui.photos: fotos
- ui.report: Ler relato
- ui.noPhotos: Relato sem fotos
- ui.prev: Anterior
- ui.next: Próxima
- ui.reader: Modo leitura
- ui.readerExit: Sair do modo leitura
- ui.sideCollapse: Recolher barra lateral
- ui.sideExpand: Expandir barra lateral
- ui.cvAcad: Acadêmico
- ui.cvProf: Profissional
- ui.cvLangsTitle: Currículo em 6 idiomas (PDF)
- ui.tour: Ver tour
- ui.live: Explorar ao vivo
- ui.openNew: Abrir em nova aba
- ui.close: Fechar
- ui.spectrumHint: Arraste para percorrer o espectro de uma estrela e encontrar as linhas de absorção que uso no GALAH DR4.
- ui.continuum: contínuo estelar
- ui.sliderLabel: Comprimento de onda em ångströms
- ui.play: Reproduzir
- ui.pause: Pausar
- ui.fullscreen: Tela cheia
- ui.repo: Repositório
- ui.seek: Posição do vídeo
- ui.search: Buscar
- ui.searchPh: Buscar projetos, pesquisa, eventos… (# para tags)
- ui.searchEmpty: Nada encontrado para
- ui.cvPreview: Prévia no idioma da página
- ui.cvOpen: Abrir PDF

### ui.stats

- ui.stats.0: repositórios
- ui.stats.1: projetos de iniciação científica
- ui.stats.2: participações na IAAC (2024 e 2025)
- ui.stats.3: disciplinas mapeadas no Sistema Acadêmico

### ui.el

- ui.el.h: hidrogênio (Balmer)
- ui.el.ca2: cálcio ionizado
- ui.el.mg: magnésio neutro
- ui.el.fe: ferro neutro
- ui.el.na: sódio neutro

### ui.kinds

- ui.kinds.projeto: Projeto
- ui.kinds.pesquisa: Pesquisa
- ui.kinds.bolsa: Bolsa
- ui.kinds.evento: Evento
- ui.kinds.secao: Seção

### ui.status

- ui.status.dev: em desenvolvimento
- ui.status.ext: extensão
- ui.status.camp: campanha
- ui.status.beta: em beta
- ui.status.ajustes: precisa de ajustes

### Banner do QR code (ui.qr*)

- ui.qrKicker: SAB 2026 · Natal, RN · 25/10 a 30/10/2026
- ui.qrTitle: Veio pelo QR code do banner? Comece por aqui.
- ui.qrSab: SAB 2026: o evento e o que apresentei
- ui.qrSabSub: O evento e o meu pôster
- ui.qrPesq: Pesquisa: detecção de anomalias
- ui.qrPesqSub: A pesquisa por trás do pôster, 2025 a 2026
- ui.qrPainel: Painel interativo do mapa t-SNE
- ui.qrPainelSub: Deixe seu nome na lista de quem passou pelo pôster
- ui.qrSobre: Sobre mim
- ui.qrSobreSub: Quem sou e o que faço
- ui.qrJardim: Jardim digital
- ui.qrJardimSub: Notas, projetos e eventos no site completo
- ui.qrNote: O painel interativo é temporário e será desativado após a SAB. Dúvidas: pedroiff0@gmail.com.

### i.nav

- i.nav.0: Sobre
- i.nav.1: Projetos
- i.nav.2: Trabalhos
- i.nav.3: Pesquisa
- i.nav.4: Currículo
- i.nav.5: Lattes
- i.nav.6: Contato

### i.sections

- i.sections.sobre.title: Trajetória entre código e estrelas
- i.sections.projetos.title: O que eu construo
- i.sections.projetos.lead: Clique em qualquer cartão para revelar os detalhes técnicos.
- i.sections.trabalhos.title: Tudo o que eu faço no GitHub
- i.sections.trabalhos.more: Ver todos os projetos
- i.sections.trabalhos.lead: Lista completa dos meus repositórios, públicos e privados. Cada cartão traz um resumo; abra "Detalhes" para ver o texto completo, a stack e o link.
- i.sections.pesquisa.title: Astronomia computacional
- i.sections.pesquisa.lead: Projetos de pesquisa em astrofísica computacional. Clique para expandir.
- i.sections.bolsas.title: Iniciação Científica & Pesquisa
- i.sections.bolsas.lead: Projetos de bolsa e voluntariado em astrofísica computacional (extraídos do meu CV).
- i.sections.curriculo.title: Currículo & Material
- i.sections.lattes.title: Plataforma Lattes (CNPq)
- i.sections.contato.title: Vamos nos conectar
- i.sections.contato.lead: Fale comigo pelo canal que preferir.
- i.sections.contatoHero.title: Horizonte de Eventos · Onde o Código Transcende o Espaço-Tempo

### i.cat

- i.cat.all: Todos
- i.cat.software: Software
- i.cat.pesquisa: Pesquisa
- i.cat.academico: Acadêmico
- i.cat.pessoal: Pessoal
- i.cat.searchPlaceholder: Filtrar por nome, tecnologia ou tag...
- i.cat.searchAria: Buscar projetos

### i.vis

- i.vis.público: Público
- i.vis.privado: Privado
- i.vis.planejamento: Em planejamento
- i.vis.elaboracao: Em elaboração

### i.labels

- i.labels.details: Detalhes
- i.labels.viewRepo: ↗ Ver repositório no GitHub
- i.labels.noRepo: Sem repositório público ainda

### i.bolsas

- i.bolsas.orientLabel: Orientação
- i.bolsas.periodLabel: Período

### i.contactLabels

- i.contactLabels.email: Email
- i.contactLabels.github: GitHub
- i.contactLabels.linkedin: LinkedIn
- i.contactLabels.scholar: Google Scholar
- i.contactLabels.orcid: ORCID
- i.contactLabels.lattes: Lattes
- i.contactLabels.instagram: Instagram
- i.contactLabels.site: Site oficial
- i.contactLabels.location: Localização

### i.footer

- i.footer: feito com café, código e um céu estrelado.
