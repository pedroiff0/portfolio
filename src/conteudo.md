---
publish: false
title: Portfólio (conteúdo em pt-BR)
type: esboco
created: '2026-11-03T15:28:39-03:00'
modified: 2026-11-03T15:28:39-03:00
published: '2026-11-03T15:28:39-03:00'
tags:
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
> Escreva só em português. Ao terminar, marque **traduzir** (propriedade acima) e salve: o watcher roda `tools/traduzir.py` no repositório `~/Repositorios/profissional/portfolio`, que traduz por IA apenas os trechos que mudaram para en/es/fr e desmarca a propriedade. Publicar (commit e push) continua manual.
> Chaves `chave: valor` ficam no início de cada bloco; o texto vem depois, em parágrafos. Projetos são `### Nome`. Callouts como este são ignorados pelo build.

## Metadados
full_name: Pedro Henrique Rocha de Andrade
orcid: 0009-0003-6724-4640
instagram: ra.pedroh
featured: ReLaTeX, Sistema Acadêmico, Projeto Profissional (template), awesome-skills, meu-setup

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

Sou Técnico em Informática pelo IFF (2020–2022), membro do Centro de Representação Estudantil e um dos organizadores da Semana de Computação, Engenharia e Gestão do IFF.

## Projetos

### Finanças App
slug: financas
repo: https://github.com/pedroiff0/financas-app
stack: Node.js 20, Express, MongoDB, Mongoose, EJS, JWT, Zod, Jest, Docker, Helmet
tags: Finanças, Full-stack, Web App, Orçamento, Investimentos
cat: software
visibility: privado
icon: cash
image: assets/media/financas/poster.webp
video: assets/media/financas/tour.webm

Aplicação web de controle financeiro pessoal com três módulos independentes (ligados/desligados por flag): Finanças (contas, categorias, lançamentos, recorrências, orçamentos por envelope, metas), Investimentos (carteira multi-corretora, preço médio ponderado, proventos, resultado realizado/não realizado) e Moto (manutenções, abastecimentos com km/l, gastos, custo por km, alertas de revisão). Backend Node/Express + MongoDB, frontend EJS SSR, autenticação JWT, validação Zod e boas práticas de segurança (Helmet, rate-limit, CSP). Deploy via Docker Compose.

### Sistema Acadêmico
repo: https://github.com/pedroiff0/sistema-academico
stack: Node.js, Express, MongoDB, Mongoose, EJS, JWT, Docker, vis-network
tags: Full-stack, Web App, Academia, CR/Boletim, Multi-curso, API Bot
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
tags: EdTech, LaTeX, Provas, Multi-variantes
cat: software
visibility: privado
icon: quiz

Plataforma base de provas/listas/trabalhos em PDF a partir de um banco de questões reutilizável, com geração real em LaTeX e múltiplas variantes (seleção/ordem aleatórias). Núcleo professor+admin.

### Avaliações Professores
repo: https://github.com/pedroiff0/avaliacoes-professores
stack: Node.js, Express, MongoDB, LaTeX
tags: EdTech, Banco de Questões, Colaborativo
cat: software
visibility: privado
icon: teacher

Fork do Sistema de Avaliações com banco pessoal + banco global compartilhado (fork de questões entre professores), PDF por pool com peso e gabarito opcional.

### Avaliações Concurseiro
repo: https://github.com/pedroiff0/avaliacoes-concurseiro
stack: Node.js, Express, MongoDB, Expo, LaTeX
tags: Concursos, Gamificação, Mobile, Simulados
cat: software
visibility: privado
icon: exam

Fork focado em concurseiros: banco de MCQ, trilhas por edital, cronograma maleável, Pomodoro, simulados em PDF e app mobile Expo com paridade total de funcionalidades.

### Portal Acadêmico IFF (academicoWeb)
slug: academicoweb
repo: https://github.com/pedroiff0/academicoWeb
stack: Python, Flask, Jinja2, Scraping
tags: Web App, IFF, Scraping, Arquivado
cat: software
visibility: privado
icon: web

Sistema web que acessava os dados acadêmicos do IFF com as credenciais oficiais — dashboard, diário, material de aula, boletim e histórico escolar — via scraping. Arquivado: a migração do IFF para o SUAP torna a abordagem original obsoleta, e o Sistema Acadêmico o sucede. A técnica de scraping fica registrada como referência técnica (possível tema de TCC).

### ReLaTeX
repo: https://github.com/pedroiff0/relatex
stack: Docker, Node.js, MongoDB, Redis, Pug, LaTeX
tags: Overleaf Fork, Self-hosted, IFF, LaTeX
cat: software
visibility: privado
icon: latex
image: assets/media/relatex/poster.webp
video: assets/media/relatex/tour.webm
open: https://relatex.phrandrade.com

Fork do Overleaf Community Edition com identidade do IFF: classes oficiais embutidas (ifftese/iffposter), tema azul, landing própria e 10 botões extras no editor. Self-hosted via Docker (web+mongo+redis).

### Verdementa
repo: https://github.com/pedroiff0/verdementa
stack: Meta-repo, Python, PowerShell
tags: Suíte Comercial, ERP
cat: software
visibility: privado
icon: leaf

Meta-repositório que agrupa Caixas, ControleEstoque, LevantamentoEstoque e Planilhador — suíte de ferramentas comerciais.

### Caixas
repo: https://github.com/pedroiff0/caixas
stack: Python, Flask, SQLAlchemy, Alembic, Jinja2, AdminLTE
tags: Controle de Caixa, Relatórios
cat: software
visibility: privado
icon: cash

Aplicação web para registrar fechamentos diários de caixa (vendas, depósitos, vales, total contado na gaveta), gerar relatórios e manter histórico imprimível. Flask + SQLAlchemy + Alembic, com endpoints REST auxiliares e migrations versionadas em CI.

### ControleEstoque
repo: https://github.com/pedroiff0/controle-estoque
stack: Python, CI, CSV/PDF
tags: Inventário, Estoque
cat: software
visibility: privado
icon: box

Aplicação para contagem rápida de inventário, com persistência de sessão, consolidação de contagens e geração de relatórios em CSV/PDF.

### LevantamentoEstoque
repo: https://github.com/pedroiff0/levantamento-estoque
stack: Python, CI, PDF
tags: Estoque, Compras
cat: software
visibility: privado
icon: box

Sistema de levantamento de estoque por cor/tamanho, com persistência de sessão, extração de dados de PDF e geração de relatórios — voltado a itens de compra repetida.

### Planilhador
repo: https://github.com/pedroiff0/planilhador
stack: Python, CI, XML/NFCe
tags: NFCe, Planilhas
cat: software
visibility: privado
icon: table

Ferramentas para processar XMLs de NFCe e gerar relatórios/planilhas automatizados.

### Projeto Profissional (template)
slug: projeto-profissional
repo: https://github.com/pedroiff0/projeto-profissional
stack: Node.js 20, Express, MongoDB, Mongoose, EJS, JWT, Zod, Jest, Docker
tags: Template, Boilerplate, Segurança, Auth, Open Source
cat: software
visibility: público
icon: web

Template base endurecido para iniciar qualquer aplicação web Node: autenticação JWT, papéis admin/user, registro controlado pelo admin (sem autocadastro), CSP sem inline, rate limit, CSRF guard, validação Zod e suíte Jest+Supertest desde o primeiro commit. Docker Compose com app não-root e filesystem read-only.

### awesome-skills
repo: https://github.com/pedroiff0/awesome-skills
stack: Markdown, YAML, Python, Hermes Agent
tags: IA, Agentes, Automação, Open Source, Memória Procedural
cat: software
visibility: público
icon: book

Coleção pessoal de skills (memória procedural) para o agente Hermes — 102 skills em 32 categorias, cada uma com SKILL.md (frontmatter YAML + instruções) e, opcionalmente, references/, scripts/ e templates/. Índice do README gerado por script; cobre de manutenção de sites Quartz e i18n a MLOps, LaTeX e automação de desktop.

### meu-setup
repo: https://github.com/pedroiff0/meu-setup
stack: Python, YAML, Bash, PowerShell, apt/dnf/pacman/zypper, winget, Homebrew
tags: Dotfiles, Provisionamento, Multi-distro, Open Source, Idempotente
cat: software
visibility: público
icon: box

Mapa de todos os programas que uso (Linux, Windows e macOS) com instaladores automáticos e uma única fonte de verdade: packages.yaml. O instalador Linux detecta a distro (apt/dnf/pacman/zypper), é idempotente e tem cadeia de fallback (nativo → flatpak → snap → script oficial). Um gerador produz install.ps1, install.sh e o inventário; o bootstrap repopula a máquina do zero com um comando.

### anomaly_detection
repo: https://github.com/pedroiff0/anomaly_detection
stack: Python, Astropy, NumPy, Pandas, ML, Jupyter
tags: PIBIC/CNPq, Gaia, GALAH, Astroquímica
cat: pesquisa
visibility: privado
icon: star

Análise das propriedades estelares e composição química das estrelas próximas do GCNS observadas pelo GALAH DR4 (Gaia DR3 + GALAH DR4). Bolsa PIBIC/CNPq; co-autoria PUC Chile (Dra. M. L. L. Dantas, Dra. A. C. Soja).

### SpectraViewer
repo: https://github.com/pedroiff0/spectraviewer
stack: Python, FITS, Matplotlib
tags: Espectroscopia, GALAH DR4, Open Source
cat: pesquisa
visibility: público
icon: spectrum
live: https://spectraviewer.streamlit.app/?embed=true
open: https://spectraviewer.streamlit.app

Viewer interativo de espectros GALAH DR4 (4 bandas, linhas de referência CNO/Alpha/Iron-peak, leitura de FITS, metadados Teff/log(g)/[Fe/H]).

### research
repo: https://github.com/pedroiff0/research
stack: Python, arXiv API, Pandas, Matplotlib, PyPDF2, python-docx
tags: Literatura, arXiv
cat: pesquisa
visibility: privado
icon: book
image: assets/media/research/poster.webp
video: assets/media/research/tour.webm

Anexos de pesquisa: busca de artigos no arXiv por assunto/keyword para compor leituras.

### Currículo (CV)
repo: https://github.com/pedroiff0/cv
stack: LaTeX, altacv, Makefile, biblatex
tags: Multilíngue, PT/EN/ES/FR
cat: academico
visibility: público
icon: document

CV em LaTeX (classe altacv), multilíngue (PT/EN/ES/FR) compilado via Makefile. Inclui ORCID, Google Scholar e publicações em congressos (CONFICT, SAB, SBPC).

### Cálculo Numérico
repo: https://github.com/pedroiff0/CalculoNumerico
stack: Python, CI, Docs, NumPy
tags: Disciplina, Métodos Numéricos
cat: academico
visibility: público
icon: function
live: https://pedroiff0.github.io/calculo-numerico/
open: https://pedroiff0.github.io/calculo-numerico/

Repositório de códigos da disciplina Cálculo Numérico 2025.2, com CI e documentação.

### Formulários
repo: https://github.com/pedroiff0/formularios
stack: LaTeX, siunitx
tags: Resumos, Fórmulas
cat: academico
visibility: público
icon: formula

Coleção de folhas de fórmulas e resumos em LaTeX organizados por disciplina.

### Modelos LaTeX
repo: https://github.com/pedroiff0/modelos
stack: LaTeX
tags: Templates
cat: academico
visibility: privado
icon: latex

Modelos LaTeX para uso geral.

### page (Quartz)
slug: page
repo: https://github.com/pedroiff0/quartz-site
stack: Quartz, Obsidian, Markdown, TypeScript, GitHub Actions
tags: Site Oficial, Obsidian, Multilíngue
cat: pessoal
visibility: público
icon: globe
live: https://www.phrandrade.com/pt-br/
open: https://www.phrandrade.com/pt-br/

Site pessoal/acadêmico oficial, multilíngue (PT completo; EN/ES/FR parciais), em Quartz a partir do vault Obsidian. Publicado em www.phrandrade.com. É o consolidado: pesquisa, notas de disciplinas, mídia e blog. Este portfólio é a página de boas-vindas dele.

### Livro-Texto de Cálculo
slug: livrocalculo
stack: LaTeX, Python, Sphinx
tags: Material Didático, Cálculo, Algoritmos, Autoral
cat: academico
visibility: elaboracao
icon: function

Material didático próprio de Cálculo, em elaboração, escrito em LaTeX — dos fundamentos a sistemas lineares. Cobre revisão de Python/Cálculo I, sistemas de bases numéricas (binária, octal, decimal, hexadecimal) e sistemas lineares (eliminação de Gauss e fatoração LU, com e sem pivotamento). Cada capítulo traz apêndice próprio de algoritmos em versão simplificada, além de exemplos autorais que complementam o livro-texto padrão. Layout já ajustado; revisão de formatação (padrão Sphinx) e dos quadros de algoritmos em andamento.

### Arquivo de Apostilas
slug: apostilas
stack: LaTeX
tags: Material Didático, Engenharia de Computação, Autoral
cat: academico
visibility: planejamento
icon: formula

Plano, em planejamento, de escrever apostilas próprias cobrindo toda a grade de Engenharia de Computação — com teoria, exercícios e experimentos comentados. Abrange Cálculos I–IV e Cálculo Numérico, Física I–IV (com espaço para Quântica e de Partículas), Álgebra Linear, Algoritmos e Estruturas de Dados, Equações Diferenciais, Mecânica dos Sólidos e Fluidos, Eletricidade e Eletrônica, Banco de Dados, Engenharia de Software, Compiladores, Programação, Redes, Arquitetura de Computadores, Sistemas Operacionais e Embarcados, Metodologia Científica e Astrofísica. Complementa as notas de disciplinas já publicadas no site oficial.

### arXiv Searcher
slug: searcher
stack: Python, arXiv API, Docker, LaTeX, Markdown
tags: Automação, Pesquisa, Daemon, BibTeX
cat: pesquisa
visibility: planejamento
icon: star

Ferramenta, em planejamento, para buscar e organizar automaticamente artigos do arXiv por assunto ou palavra-chave. Pensada para rodar como daemon (possivelmente dockerizado), consultando a API do arXiv periodicamente e gerando saída diária em Markdown (tabela com data, título, primeiro autor, área e link) e citações prontas em LaTeX, na mesma estrutura de referência dos meus artigos. Configuração via planilha CSV, com área de busca padrão e opção de busca avulsa por palavra-chave sem alterar essa configuração.

### hardcore-life
repo: https://github.com/pedroiff0/hardcore-life
stack: Obsidian, PARA, Markdown
tags: Produtividade, Second Brain, PARA
cat: pessoal
visibility: privado
icon: life

Vault Obsidian de gestão de vida pelo método PARA (projetos, áreas, recursos, arquivos), com mais de 4000 arquivos — a base de conhecimento pessoal de onde saem notas, planejamento e diário.

### HardCoreLife (plataforma)
slug: hardcorelife
stack: Node.js, Express, MongoDB, Docker
tags: Life OS, Modular, Multi-módulo, Família
cat: pessoal
visibility: planejamento
icon: dashboard

Plataforma pessoal modular, em planejamento, para reunir num só sistema o que hoje vive espalhado em planilhas e apps soltos. Um núcleo, vários módulos integrados: Controle Financeiro, Investimentos, Automotivo, Tarefas, Streamings (assinaturas) e Compartilhamento Familiar com acesso restrito por convite. Acesso pensado em duas camadas: web (aberta ou restrita conforme o módulo) e área privada.

### dashboard-life
repo: https://github.com/pedroiff0/dashboard-life
stack: Node.js, Express, MongoDB, Docker
tags: Life OS, Hábitos, Métricas
cat: pessoal
visibility: privado
icon: dashboard

Dashboard pessoal de hábitos e métricas de vida, derivado do vault hardcore-life e primeiro passo concreto rumo à plataforma HardCoreLife. Node + Express + MongoDB, deploy via Docker. Em desenvolvimento.

### guia-github
slug: guiagithub
repo: https://github.com/pedroiff0/guia-github
stack: Docs, GitHub Actions, Shell
tags: Boas Práticas, Templates, Versionamento
cat: pessoal
visibility: público
icon: github

Guia próprio de Git e boas práticas de versionamento — prático, não mais um manual genérico de comandos. Reúne templates, exemplos de Actions, Projects, Issues e estratégias de branching, com módulos sobre dockerização, versionamento em arquiteturas de microsserviços e padrões de documentação de repositório.

### Perfil GitHub
repo: https://github.com/pedroiff0/pedroiff0
stack: Profile, Markdown
tags: README
cat: pessoal
visibility: público
icon: profile

README de perfil do GitHub (bio, Tech & Tools, projetos em destaque).

### Portfólio (este site)
slug: portfolio
repo: https://github.com/pedroiff0/portfolio
stack: HTML, CSS, JavaScript, Python, Playwright, GitHub Pages
tags: Portfólio, Página Única, Multilíngue, Minimalista
cat: pessoal
visibility: público
icon: globe

Este portfólio: página única e minimalista, multilíngue (PT/EN/ES/FR), sem framework e com o visual do site oficial (tema claro e escuro, cartões com detalhes, filtro e busca de projetos). O conteúdo não vive no HTML: é escrito em Markdown (src/portfolio.md) e compilado por um script Python para JS, com verificação automática no pre-commit. Serve de página de boas-vindas para o site oficial, onde está o conteúdo completo.

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
period: Out. 2025 — presente
orient: Dra. Ana Cecília Soja e Dra. Maria Luiza Linhares Dantas
desc: Bolsa PIBIC/CNPq: aprendizado de máquina sobre Gaia DR3 + GALAH DR4 + GCNS para arqueologia galáctica e populações estelares. Co-autoria PUC Chile.

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
nickname: cinzento
hobby: Animações e simulações científicas para divulgação em física e astronomia.
grade: 90 disciplinas mapeadas no Sistema Acadêmico (grade IFF Eng. de Computação, 1º→10º período).

### Galeria
- sab-2025-poster: SAB 2025: pôster sobre estrelas próximas do Gaia observadas pelo GALAH DR4
- sab-2025: XLVIII Reunião Anual da SAB, Caxambu (MG)
- febic-2024-estande: IX FEBIC: estande sobre o impacto de satélites em observações astronômicas
- febic-2024: IX FEBIC, 2024
- lncc-2022-supercomputador: Supercomputador do LNCC, 2022
- lncc-2022: Visita ao LNCC, Petrópolis (RJ), 2022
