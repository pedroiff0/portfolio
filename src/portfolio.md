# Portfolio — fonte editável (Markdown)


## COMO EDITAR (pode apagar este bloco depois)
Copie um card abaixo, cole e troque os textos. Regras:
  - Cada projeto = um bloco "### Nome do Projeto" (a linha com ### é o título).
  - Campos de 1 linha: repo:, stack:, tags:, cat:, visibility:, icon:
      stack e tags: separem por vírgula.
  - Texto: 🇧🇷 é OBRIGATÓRIO. 🇺🇸 🇪🇸 🇫🇷 são opcionais (se faltar, o site usa o 🇧🇷).
  - cat: software | pesquisa | academico | pessoal
  - visibility: público | privado
  - icon: cash | academic | quiz | web | latex | star | globe | github | teacher | exam | leaf | box | table | function | formula | life | dashboard | profile  (ou outro nome de ícone existente em assets/js/main.js)
  - NÃO mexa em index.html / assets/css/style.css / assets/js/main.js.
  - Depois de editar: python3 tools/build.py  (ou só commitar — o pre-commit já gera).

### Nome do Projeto (MODELO — copie daqui p/ baixo)
repo: https://github.com/pedroiff0/SEU-REPO
stack: Node.js, Express, MongoDB
tags: Tag1, Tag2, Tag3
cat: software
visibility: privado
icon: star

🇧🇷 Descreva o projeto em português aqui.
🇺🇸 Describe the project in English here.
🇪🇸 Describe el proyecto en español aquí.
🇫🇷 Décrivez le projet en français ici.

## Metadados
full_name: Pedro Henrique Rocha de Andrade
orcid: 0009-0003-6724-4640
instagram: fckpeeh
featured: ReLaTeX, Sistema Acadêmico, Sistema de Avaliações, Currículo (CV)

## Projetos

### Finanças App
repo: https://github.com/pedroiff0/financas-app
stack: Node.js, Express, MongoDB, Mongoose, EJS, JWT, Zod, Docker, Helmet
tags: Finanças, Full-stack, Web App, Orçamento, Investimentos
cat: software
visibility: privado
icon: cash

🇧🇷 Aplicação web pessoal de finanças: contas, transações, categorias, orçamentos e metas, com módulo de investimentos (ativos, trades, corretoras) e relatórios. Backend Node/Express + MongoDB, frontend EJS SSR, autenticação JWT, validação Zod e boas práticas de segurança (Helmet, rate-limit, CSP). Deploy via Docker Compose.
🇺🇸 Personal finance web app: accounts, transactions, categories, budgets and goals, with an investments module (assets, trades, brokers) and reports. Node/Express + MongoDB backend, EJS SSR frontend, JWT auth, Zod validation and security hardening (Helmet, rate-limit, CSP). Deployed via Docker Compose.
🇪🇸 Aplicación web personal de finanzas: cuentas, transacciones, categorías, presupuestos y metas, con módulo de inversiones (activos, trades, corredoras) e informes. Backend Node/Express + MongoDB, frontend EJS SSR, autenticación JWT, validación Zod y endurecimiento de seguridad (Helmet, rate-limit, CSP). Despliegue vía Docker Compose.
🇫🇷 Application web personnelle de finances : comptes, transactions, catégories, budgets et objectifs, avec un module d'investissement (actifs, trades, courtiers) et rapports. Backend Node/Express + MongoDB, frontend EJS SSR, auth JWT, validation Zod et durcissement sécurité (Helmet, rate-limit, CSP). Déploiement via Docker Compose.

### Sistema Acadêmico
repo: https://github.com/pedroiff0/sistema-academico
stack: Node.js, Express, MongoDB, Mongoose, EJS, JWT, Docker, vis-network
tags: Full-stack, Web App, Academia, CR/Boletim, API Bot
cat: software
visibility: privado
icon: academic

🇧🇷 Web exclusivo para alunos de Eng. de Computação do IFF acompanharem grade, diário, notas, frequência, boletim/CR e planejamento. Fork do padrão de avaliações, com diário, ementário, grafo de dependências e API de ingestão por bot (Telegram). Deploy via Docker Compose + systemd.
🇺🇸 Exclusive web app for Computer Engineering students at IFF to track curriculum, diary, grades, attendance, GPA/report card and planning. Fork of the evaluations standard, with diary, ementa, dependency graph and a Telegram-bot ingestion API. Deployed via Docker Compose + systemd.
🇪🇸 Aplicación web exclusiva para alumnos de Ingeniería Informática del IFF para seguir malla, diario, notas, asistencia, CR/boletín y planificación. Fork del estándar de evaluaciones, con diario, ementario, grafo de dependencias y API de ingesta por bot de Telegram. Despliegue vía Docker Compose + systemd.
🇫🇷 Application web exclusive pour les étudiants en génie informatique de l'IFF afin de suivre le programme, le journal, les notes, la fréquentation, la moyenne/bulletin et la planification. Fork de la norme d'évaluations, avec journal, ementa, graphe de dépendances et API d'ingestion par bot Telegram. Déploiement via Docker Compose + systemd.

### Sistema de Avaliações
repo: https://github.com/pedroiff0/avaliacoes
stack: Node.js, Express, MongoDB, LaTeX, EJS
tags: EdTech, LaTeX, Provas, Multi-variantes
cat: software
visibility: privado
icon: quiz

🇧🇷 Plataforma base de provas/listas/trabalhos em PDF a partir de um banco de questões reutilizável, com geração real em LaTeX e múltiplas variantes (seleção/ordem aleatórias). Núcleo professor+admin.
🇺🇸 Base platform for exams/lists/assignments in PDF from a reusable question bank, with real LaTeX generation and multiple variants (random selection/order). Professor+admin core.
🇪🇸 Plataforma base de exámenes/listas/trabajos en PDF a partir de un banco de preguntas reutilizable, con generación real en LaTeX y múltiples variantes (selección/orden aleatorios). Núcleo profesor+admin.
🇫🇷 Plateforme de base pour examens/listes/devoirs en PDF à partir d'un banc de questions réutilisable, avec génération réelle en LaTeX et plusieurs variantes (sélection/ordre aléatoires). Cœur professeur+admin.

### Avaliações Professores
repo: https://github.com/pedroiff0/avaliacoes-professores
stack: Node.js, Express, MongoDB, LaTeX
tags: EdTech, Banco de Questões, Colaborativo
cat: software
visibility: privado
icon: teacher

🇧🇷 Fork do Sistema de Avaliações com banco pessoal + banco global compartilhado (fork de questões entre professores), PDF por pool com peso e gabarito opcional.

### Avaliações Concurseiro
repo: https://github.com/pedroiff0/avaliacoes-concurseiro
stack: Node.js, Express, MongoDB, Expo, LaTeX
tags: Concursos, Gamificação, Mobile, Simulados
cat: software
visibility: privado
icon: exam

🇧🇷 Fork focado em concurseiros: banco de MCQ, trilhas por edital, cronograma maleável, Pomodoro, simulados em PDF e app mobile Expo com paridade total de funcionalidades.

### Portal Acadêmico IFF (academicoWeb)
repo: https://github.com/pedroiff0/academicoWeb
stack: Web, Node.js, Scraping
tags: Web App, IFF, Dashboard
cat: software
visibility: privado
icon: web

🇧🇷 Sistema web que acessa os dados acadêmicos do IFF com as credenciais oficiais: dashboard, diário, material de aula, boletim e histórico escolar.

### ReLaTeX
repo: https://github.com/pedroiff0/relatex
stack: Docker, Node.js, MongoDB, Redis, Pug, LaTeX
tags: Overleaf Fork, Self-hosted, IFF, LaTeX
cat: software
visibility: privado
icon: latex

🇧🇷 Fork do Overleaf Community Edition com identidade do IFF: classes oficiais embutidas (ifftese/iffposter), tema azul, landing própria e 10 botões extras no editor. Self-hosted via Docker (web+mongo+redis).
🇺🇸 Fork of Overleaf Community Edition with IFF identity: official document classes (ifftese/iffposter), blue theme, custom landing page and 10 extra editor buttons. Self-hosted via Docker (web+mongo+redis).
🇪🇸 Fork de Overleaf Community Edition con identidad del IFF: clases oficiales (ifftese/iffposter), tema azul, página de inicio propia y 10 botones extra en el editor. Self-hosted vía Docker (web+mongo+redis).
🇫🇷 Fork d'Overleaf Community Edition avec l'identité de l'IFF : classes officielles (ifftese/iffposter), thème bleu, page d'accueil propre et 10 boutons supplémentaires à l'éditeur. Auto-hébergé via Docker (web+mongo+redis).

### Verdementa
repo: https://github.com/pedroiff0/verdementa
stack: Meta-repo, Node.js
tags: Suíte Comercial, ERP
cat: software
visibility: privado
icon: leaf

🇧🇷 Meta-repositório que agrupa Caixas, ControleEstoque, LevantamentoEstoque e Planilhador — suíte de ferramentas comerciais.

### Caixas
repo: https://github.com/pedroiff0/Caixas
stack: Node.js, CI
tags: Controle de Caixa, Relatórios
cat: software
visibility: privado
icon: cash

🇧🇷 Sistema para lançamento de controles de caixa com menus, relatórios e funcionalidades extras.

### ControleEstoque
repo: https://github.com/pedroiff0/ControleEstoque
stack: Node.js, CI
tags: Inventário, Estoque
cat: software
visibility: privado
icon: box

🇧🇷 Sistema de controle/contagem de inventário de estoque.

### LevantamentoEstoque
repo: https://github.com/pedroiff0/LevantamentoEstoque
stack: Node.js, CI
tags: Estoque, Compras
cat: software
visibility: privado
icon: box

🇧🇷 Levantamento de itens que são alvo de compras repetidas.

### Planilhador
repo: https://github.com/pedroiff0/Planilhador
stack: Node.js, CI
tags: NFCe, Planilhas
cat: software
visibility: privado
icon: table

🇧🇷 Ferramentas NFCe / planilhamento.

### anomaly_detection
repo: https://github.com/pedroiff0/anomaly_detection
stack: Python, Astropy, NumPy, Pandas, ML, Jupyter
tags: PIBIC/CNPq, Gaia, GALAH, Astroquímica
cat: pesquisa
visibility: privado
icon: star

🇧🇷 Análise das propriedades estelares e composição química das estrelas próximas do GCNS observadas pelo GALAH DR4 (Gaia DR3 + GALAH DR4). Bolsa PIBIC/CNPq; co-autoria PUC Chile (Dra. M. L. L. Dantas, Dra. A. C. Soja).
🇺🇸 Analysis of stellar properties and chemical composition of nearby stars from GCNS observed by GALAH DR4 (Gaia DR3 + GALAH DR4). PIBIC/CNPq scholarship; co-authorship PUC Chile (Dr. M. L. L. Dantas, Dr. A. C. Soja).
🇪🇸 Análisis de las propiedades estelares y composición química de estrellas cercanas del GCNS observadas por GALAH DR4 (Gaia DR3 + GALAH DR4). Beca PIBIC/CNPq; coautoría PUC Chile (Dra. M. L. L. Dantas, Dra. A. C. Soja).
🇫🇷 Analyse des propriétés stellaires et de la composition chimique des étoiles proches du GCNS observées par GALAH DR4 (Gaia DR3 + GALAH DR4). Bourse PIBIC/CNPq ; co-autoria PUC Chile (Mme M. L. L. Dantas, Mme A. C. Soja).

### SpectraViewer
repo: https://github.com/pedroiff0/spectraviewer
stack: Python, FITS, Matplotlib
tags: Espectroscopia, GALAH DR4, Open Source
cat: pesquisa
visibility: público
icon: spectrum

🇧🇷 Viewer interativo de espectros GALAH DR4 (4 bandas, linhas de referência CNO/Alpha/Iron-peak, leitura de FITS, metadados Teff/log(g)/[Fe/H]).
🇺🇸 Interactive viewer for GALAH DR4 spectra (4 bands, CNO/Alpha/Iron-peak reference lines, FITS reading, Teff/log(g)/[Fe/H] metadata).
🇪🇸 Visor interactivo de espectros GALAH DR4 (4 bandas, líneas de referencia CNO/Alpha/Iron-peak, lectura de FITS, metadatos Teff/log(g)/[Fe/H]).
🇫🇷 Visionneuse interactive des spectres GALAH DR4 (4 bandes, lignes de référence CNO/Alpha/Iron-peak, lecture FITS, métadonnées Teff/log(g)/[Fe/H]).

### research
repo: https://github.com/pedroiff0/research
stack: Python, arXiv
tags: Literatura, arXiv
cat: pesquisa
visibility: privado
icon: book

🇧🇷 Anexos de pesquisa: busca de artigos no arXiv por assunto/keyword para compor leituras.
🇺🇸 Research attachments: arXiv article search by subject/keyword to compose readings.
🇪🇸 Anexos de investigación: búsqueda de artículos en arXiv por tema/palabra clave para componer lecturas.
🇫🇷 Annexes de recherche : recherche d'articles arXiv par sujet/mot-clé pour composer des lectures.

### Currículo (CV)
repo: https://github.com/pedroiff0/cv
stack: LaTeX, altacv, Makefile, biblatex
tags: Multilíngue, PT/EN/ES/FR
cat: academico
visibility: privado
icon: document

🇧🇷 CV em LaTeX (classe altacv), multilíngue (PT/EN/ES/FR) compilado via Makefile. Inclui ORCID, Google Scholar e publicações em congressos (CONFICT, SAB, SBPC).
🇺🇸 CV in LaTeX (altacv class), multilingual (PT/EN/ES/FR) compiled via Makefile. Includes ORCID, Google Scholar and conference publications (CONFICT, SAB, SBPC).
🇪🇸 CV en LaTeX (clase altacv), multilingüe (PT/EN/ES/FR) compilado vía Makefile. Incluye ORCID, Google Scholar y publicaciones en congresos (CONFICT, SAB, SBPC).
🇫🇷 CV en LaTeX (classe altacv), multilingue (PT/EN/ES/FR) compilé via Makefile. Inclut ORCID, Google Scholar et publications en conférence (CONFICT, SAB, SBPC).

### Cálculo Numérico
repo: https://github.com/pedroiff0/CalculoNumerico
stack: Python, CI, Docs, NumPy
tags: Disciplina, Métodos Numéricos
cat: academico
visibility: público
icon: function

🇧🇷 Repositório de códigos da disciplina Cálculo Numérico 2025.2, com CI e documentação.

### Formulários
repo: https://github.com/pedroiff0/formularios
stack: LaTeX, siunitx
tags: Resumos, Fórmulas
cat: academico
visibility: público
icon: formula

🇧🇷 Coleção de folhas de fórmulas e resumos em LaTeX organizados por disciplina.

### Modelos LaTeX
repo: https://github.com/pedroiff0/modelos
stack: LaTeX
tags: Templates
cat: academico
visibility: privado
icon: latex

🇧🇷 Modelos LaTeX para uso geral.

### page (Quartz)
repo: https://github.com/pedroiff0/page
stack: Quartz, Obsidian, MDX
tags: Site Oficial, Obsidian, Multilíngue
cat: pessoal
visibility: público
icon: globe

🇧🇷 Site pessoal/acadêmico oficial, multilíngue (PT completo; EN/ES/FR parciais), em Quartz a partir do vault Obsidian. Publicado em github.io/page (migrando p/ www.phrandrade.com).

### hardcore-life
repo: https://github.com/pedroiff0/hardcore-life
stack: Obsidian, PARA
tags: Produtividade, Second Brain
cat: pessoal
visibility: privado
icon: life

🇧🇷 Vault Obsidian de gestão de vida (PARA: projetos, áreas, recursos, arquivos) — 4000+ arquivos.

### dashboard-life
repo: https://github.com/pedroiff0/dashboard-life
stack: Dashboard
tags: Life OS
cat: pessoal
visibility: privado
icon: dashboard

🇧🇷 Dashboard de vida (derivado do hardcore-life).

### guia-github
repo: https://github.com/pedroiff0/guia-github
stack: Docs, Actions
tags: Boas Práticas, Templates
cat: pessoal
visibility: público
icon: github

🇧🇷 Boas práticas, templates e exemplos de uso profissional do GitHub (Actions, Projects, Issues, Branching) para projetos Python.

### Perfil GitHub
repo: https://github.com/pedroiff0/pedroiff0
stack: Profile, Markdown
tags: README
cat: pessoal
visibility: público
icon: profile

🇧🇷 README de perfil do GitHub (bio, Tech & Tools, featured projects).

## Bolsas

### 🇧🇷 Entendendo a Matéria Escura a partir de Choques ExtraGalácticos | 🇺🇸 Understanding Dark Matter from ExtraGalactic Shocks | 🇪🇸 Entendiendo la Materia Oscura a partir de Choques ExtraGalácticos | 🇫🇷 Comprendre la Matière Noire à partir de Chocs ExtraGalactiques
icon: darkmatter
kind: 🇧🇷 IC Júnior · CNPq | 🇺🇸 Junior SI · CNPq | 🇪🇸 IC Júnior · CNPq | 🇫🇷 SI Junior · CNPq
period: Set. 2022 — Mar. 2023
orient: Dra. Ana Cecília Soja
desc: 🇧🇷 Iniciação Científica Júnior sobre matéria escura e choques extragalácticos. | 🇺🇸 Junior Scientific Initiation on dark matter and extragalactic shocks. | 🇪🇸 Iniciación Científica Júnior sobre materia oscura y choques extragalácticos. | 🇫🇷 Initiation Scientifique Junior sur la matière noire et les chocs extragalactiques.

### 🇧🇷 MobFog no IFFMaker | 🇺🇸 MobFog at IFFMaker | 🇪🇸 MobFog en IFFMaker | 🇫🇷 MobFog à l'IFFMaker
icon: fog
kind: 🇧🇷 IC · IFF | 🇺🇸 SI · IFF | 🇪🇸 IC · IFF | 🇫🇷 SI · IFF
period: Ago. 2023 — Fev. 2024
orient: Dra. Ana Cecília Soja
desc: 🇧🇷 Projeto de Iniciação Científica do IFF (computação em névoa / edge). | 🇺🇸 IFF Scientific Initiation project (fog/edge computing). | 🇪🇸 Proyecto de Iniciación Científica del IFF (computación en niebla/edge). | 🇫🇷 Projet d'Initiation Scientifique de l'IFF (informatique en brouillard/edge).

### 🇧🇷 Simulando o Impacto de Satélites em Observações Astronômicas | 🇺🇸 Simulating the Impact of Satellites on Astronomical Observations | 🇪🇸 Simulando el Impacto de Satélites en Observaciones Astronómicas | 🇫🇷 Simuler l'Impact des Satellites sur les Observations Astronomiques
icon: satellite
kind: 🇧🇷 Voluntário · CNPq | 🇺🇸 Volunteer · CNPq | 🇪🇸 Voluntario · CNPq | 🇫🇷 Bénévole · CNPq
period: Ago. 2023 — Set. 2023
orient: Dra. Ana Cecília Soja
desc: 🇧🇷 Simulação do impacto de rastros de satélites em imagens astronômicas. | 🇺🇸 Simulation of satellite-trail impact on astronomical images. | 🇪🇸 Simulación del impacto de rastros de satélites en imágenes astronómicas. | 🇫🇷 Simulation de l'impact des traînées de satellites sur les images astronomiques.

### 🇧🇷 Detecção de Anomalias em Estrelas da Via Láctea (Gaia + Surveys + ML) | 🇺🇸 Anomaly Detection in Stars of the Milky Way (Gaia + Surveys + ML) | 🇪🇸 Detección de Anomalias en Estrellas de la Vía Láctea (Gaia + Surveys + ML) | 🇫🇷 Détection d'Anomalies chez les Étoiles de la Voie Lactée (Gaia + Surveys + ML)
icon: star
kind: 🇧🇷 IC · CNPq (PIBIC) | 🇺🇸 SI · CNPq (PIBIC) | 🇪🇸 IC · CNPq (PIBIC) | 🇫🇷 SI · CNPq (PIBIC)
period: Out. 2025 — presente
orient: Dra. Ana Cecília Soja e Dra. Maria Luiza Linhares Dantas
desc: 🇧🇷 Bolsa PIBIC/CNPq: aprendizado de máquina sobre Gaia DR3 + GALAH DR4 + GCNS para arqueologia galáctica e populações estelares. Co-autoria PUC Chile. | 🇺🇸 PIBIC/CNPq scholarship: machine learning on Gaia DR3 + GALAH DR4 + GCNS for galactic archaeology and stellar populations. Co-authorship PUC Chile. | 🇪🇸 Beca PIBIC/CNPq: aprendizaje de máquina sobre Gaia DR3 + GALAH DR4 + GCNS para arqueología galáctica y poblaciones estelares. Coautoría PUC Chile. | 🇫🇷 Bourse PIBIC/CNPq : apprentissage automatique sur Gaia DR3 + GALAH DR4 + GCNS pour l'archéologie galactique et les populations stellaires. Co-autoria PUC Chile.

## Contatos
- icon: mail | labelKey: email | value: pedroiff0@gmail.com | href: mailto:pedroiff0@gmail.com
- icon: github | labelKey: github | value: @pedroiff0 | href: https://github.com/pedroiff0
- icon: linkedin | labelKey: linkedin | value: pedroiff0 | href: https://www.linkedin.com/in/pedroiff0/
- icon: scholar | labelKey: scholar | value: Pedro H. R. de Andrade | href: https://scholar.google.com.br/citations?user=qG9tHGEAAAAJ&hl=pt-BR
- icon: orcid | labelKey: orcid | value: 0009-0003-6724-4640 | href: https://orcid.org/0009-0003-6724-4640
- icon: lattes | labelKey: lattes | value: 6818168089966785 | href: http://lattes.cnpq.br/6818168089966785
- icon: instagram | labelKey: instagram | value: @fckpeeh | href: https://instagram.com/fckpeeh
- icon: globe | labelKey: site | value: www.phrandrade.com | href: https://www.phrandrade.com/pt-br/
- icon: pin | labelKey: location | value: Bom Jesus do Itabapoana, RJ — Brasil

## Extra
instagram: fckpeeh
hobby: Animações e simulações científicas (divulgação científica em física/astronomia).
grade: 74 disciplinas mapeadas no Sistema Acadêmico (grade IFF Eng. de Computação, 1º→10º período).
nickname: cinzento
