// Dados do portfólio — Pedro Henrique Rocha de Andrade (pedroiff0)
// Gerado a partir de src/portfolio.md (não editar à mão).

const FULL_NAME = "Pedro Henrique Rocha de Andrade";
const ORCID = "0009-0003-6724-4640";

const REPOS = [
  {
    name: "Finanças App",
    cat: "software",
    visibility: "privado",
    icon: "cash",
    repo: "https://github.com/pedroiff0/financas-app",
    stack: [
      "Node.js 20",
      "Express",
      "MongoDB",
      "Mongoose",
      "EJS",
      "JWT",
      "Zod",
      "Jest",
      "Docker",
      "Helmet"
    ],
    tags: [ "Finanças", "Full-stack", "Web App", "Orçamento", "Investimentos" ],
    brief: "Aplicação web de controle financeiro pessoal com três módulos independentes (ligados/desligados por flag): Finanças (contas, categorias, lançamentos, recorrências, orçamentos por envelope, metas), Investimentos (carteira multi-corretora, preço médio ponderado, proventos, resultado realizado/não realizado) e Moto (manutenções, abastecimentos com km/l, gastos, custo por km, alertas de revisão). Backend Node/Express + MongoDB, frontend EJS SSR, autenticação JWT, validação Zod e boas práticas de segurança (Helmet, rate-limit, CSP). Deploy via Docker Compose.",
    i18n: {
      en: "Personal finance web app with three independent, flag-toggled modules: Finances (accounts, categories, entries, recurrences, envelope budgets, goals), Investments (multi-broker portfolio, weighted average price, dividends, realized/unrealized results) and Motorcycle (maintenance, refuels with km/l, expenses, cost per km, service alerts). Node/Express + MongoDB backend, EJS SSR frontend, JWT auth, Zod validation and security hardening (Helmet, rate-limit, CSP). Deployed via Docker Compose.",
      es: "Aplicación web de control financiero personal con tres módulos independientes (activables por flag): Finanzas (cuentas, categorías, movimientos, recurrencias, presupuestos por sobre, metas), Inversiones (cartera multicorredora, precio medio ponderado, dividendos, resultado realizado/no realizado) y Moto (mantenimientos, repostajes con km/l, gastos, costo por km, alertas de revisión). Backend Node/Express + MongoDB, frontend EJS SSR, autenticación JWT, validación Zod y endurecimiento de seguridad (Helmet, rate-limit, CSP). Despliegue vía Docker Compose.",
      fr: "Application web de gestion financière personnelle avec trois modules indépendants (activables par flag) : Finances (comptes, catégories, écritures, récurrences, budgets par enveloppe, objectifs), Investissements (portefeuille multi-courtiers, prix moyen pondéré, dividendes, résultat réalisé/latent) et Moto (entretiens, pleins avec km/l, dépenses, coût au km, alertes de révision). Backend Node/Express + MongoDB, frontend EJS SSR, auth JWT, validation Zod et durcissement sécurité (Helmet, rate-limit, CSP). Déploiement via Docker Compose."
    }
  },
  {
    name: "Sistema Acadêmico",
    cat: "software",
    visibility: "privado",
    icon: "academic",
    repo: "https://github.com/pedroiff0/sistema-academico",
    stack: [ "Node.js", "Express", "MongoDB", "Mongoose", "EJS", "JWT", "Docker", "vis-network" ],
    tags: [ "Full-stack", "Web App", "Academia", "CR/Boletim", "Multi-curso", "API Bot" ],
    brief: "Web exclusivo para alunos do IFF acompanharem grade curricular (PPC), diário, notas, frequência, boletim/CR e planejamento. Multi-curso: Engenharia de Computação (Bom Jesus do Itabapoana) e Sistemas de Informação (Itaperuna). Fork do padrão de avaliações, com diário, ementário, grafo de dependências e API de ingestão por bot (Telegram). Deploy via Docker Compose + systemd.",
    i18n: {
      en: "Exclusive web app for IFF students to track the curriculum (PPC), diary, grades, attendance, GPA/report card and planning. Multi-course: Computer Engineering (Bom Jesus do Itabapoana) and Information Systems (Itaperuna). Fork of the evaluations standard, with diary, ementa, dependency graph and a Telegram-bot ingestion API. Deployed via Docker Compose + systemd.",
      es: "Aplicación web exclusiva para alumnos del IFF para seguir la malla (PPC), diario, notas, asistencia, CR/boletín y planificación. Multicurso: Ingeniería Informática (Bom Jesus do Itabapoana) y Sistemas de Información (Itaperuna). Fork del estándar de evaluaciones, con diario, ementario, grafo de dependencias y API de ingesta por bot de Telegram. Despliegue vía Docker Compose + systemd.",
      fr: "Application web exclusive pour les étudiants de l'IFF afin de suivre le programme (PPC), le journal, les notes, la fréquentation, la moyenne/bulletin et la planification. Multi-filière : génie informatique (Bom Jesus do Itabapoana) et systèmes d'information (Itaperuna). Fork de la norme d'évaluations, avec journal, ementa, graphe de dépendances et API d'ingestion par bot Telegram. Déploiement via Docker Compose + systemd."
    }
  },
  {
    name: "Sistema de Avaliações",
    cat: "software",
    visibility: "privado",
    icon: "quiz",
    repo: "https://github.com/pedroiff0/avaliacoes",
    stack: [ "Node.js", "Express", "MongoDB", "LaTeX", "EJS" ],
    tags: [ "EdTech", "LaTeX", "Provas", "Multi-variantes" ],
    brief: "Plataforma base de provas/listas/trabalhos em PDF a partir de um banco de questões reutilizável, com geração real em LaTeX e múltiplas variantes (seleção/ordem aleatórias). Núcleo professor+admin.",
    i18n: {
      en: "Base platform for exams/lists/assignments in PDF from a reusable question bank, with real LaTeX generation and multiple variants (random selection/order). Professor+admin core.",
      es: "Plataforma base de exámenes/listas/trabajos en PDF a partir de un banco de preguntas reutilizable, con generación real en LaTeX y múltiples variantes (selección/orden aleatorios). Núcleo profesor+admin.",
      fr: "Plateforme de base pour examens/listes/devoirs en PDF à partir d'un banc de questions réutilisable, avec génération réelle en LaTeX et plusieurs variantes (sélection/ordre aléatoires). Cœur professeur+admin."
    }
  },
  {
    name: "Avaliações Professores",
    cat: "software",
    visibility: "privado",
    icon: "teacher",
    repo: "https://github.com/pedroiff0/avaliacoes-professores",
    stack: [ "Node.js", "Express", "MongoDB", "LaTeX" ],
    tags: [ "EdTech", "Banco de Questões", "Colaborativo" ],
    brief: "Fork do Sistema de Avaliações com banco pessoal + banco global compartilhado (fork de questões entre professores), PDF por pool com peso e gabarito opcional.",
    i18n: {
      en: "Fork of the Evaluations System with a personal bank plus a shared global bank (questions forked between teachers), pool-based PDF generation with weighting and optional answer key.",
      es: "Fork del Sistema de Evaluaciones con banco personal más banco global compartido (preguntas bifurcadas entre profesores), generación de PDF por pool con peso y solucionario opcional.",
      fr: "Fork du Système d'Évaluations avec une banque personnelle et une banque globale partagée (questions forkées entre enseignants), génération de PDF par pool avec pondération et corrigé optionnel."
    }
  },
  {
    name: "Avaliações Concurseiro",
    cat: "software",
    visibility: "privado",
    icon: "exam",
    repo: "https://github.com/pedroiff0/avaliacoes-concurseiro",
    stack: [ "Node.js", "Express", "MongoDB", "Expo", "LaTeX" ],
    tags: [ "Concursos", "Gamificação", "Mobile", "Simulados" ],
    brief: "Fork focado em concurseiros: banco de MCQ, trilhas por edital, cronograma maleável, Pomodoro, simulados em PDF e app mobile Expo com paridade total de funcionalidades.",
    i18n: {
      en: "Fork aimed at civil-service exam candidates: MCQ bank, syllabus-driven study tracks, flexible schedule, Pomodoro, PDF mock exams and an Expo mobile app with full feature parity.",
      es: "Fork enfocado en opositores: banco de preguntas de opción múltiple, itinerarios por temario, cronograma flexible, Pomodoro, simulacros en PDF y app móvil Expo con paridad total de funciones.",
      fr: "Fork destiné aux candidats aux concours : banque de QCM, parcours par programme officiel, planning souple, Pomodoro, examens blancs en PDF et application mobile Expo à parité fonctionnelle complète."
    }
  },
  {
    name: "Portal Acadêmico IFF (academicoWeb)",
    cat: "software",
    visibility: "privado",
    icon: "web",
    repo: "https://github.com/pedroiff0/academicoWeb",
    stack: [ "Python", "Flask", "Jinja2", "Scraping" ],
    tags: [ "Web App", "IFF", "Scraping", "Arquivado" ],
    brief: "Sistema web que acessava os dados acadêmicos do IFF com as credenciais oficiais — dashboard, diário, material de aula, boletim e histórico escolar — via scraping. Arquivado: a migração do IFF para o SUAP torna a abordagem original obsoleta, e o Sistema Acadêmico o sucede. A técnica de scraping fica registrada como referência técnica (possível tema de TCC).",
    i18n: {
      en: "Web system that pulled IFF academic data using official credentials — dashboard, diary, course material, report card and transcript — via scraping. Archived: IFF's migration to SUAP makes the original approach obsolete, and Sistema Acadêmico supersedes it. The scraping technique remains documented as a technical reference (a possible thesis topic).",
      es: "Sistema web que accedía a los datos académicos del IFF con las credenciales oficiales — dashboard, diario, material de clase, boletín e historial — mediante scraping. Archivado: la migración del IFF al SUAP vuelve obsoleto el enfoque original, y el Sistema Académico lo sucede. La técnica de scraping queda documentada como referencia técnica (posible tema de TFG).",
      fr: "Système web qui accédait aux données académiques de l'IFF avec les identifiants officiels — tableau de bord, journal, supports de cours, bulletin et relevé — par scraping. Archivé : la migration de l'IFF vers SUAP rend l'approche initiale obsolète, et le Sistema Acadêmico lui succède. La technique de scraping reste documentée comme référence technique (sujet de mémoire possible)."
    }
  },
  {
    name: "ReLaTeX",
    cat: "software",
    visibility: "privado",
    icon: "latex",
    repo: "https://github.com/pedroiff0/relatex",
    stack: [ "Docker", "Node.js", "MongoDB", "Redis", "Pug", "LaTeX" ],
    tags: [ "Overleaf Fork", "Self-hosted", "IFF", "LaTeX" ],
    brief: "Fork do Overleaf Community Edition com identidade do IFF: classes oficiais embutidas (ifftese/iffposter), tema azul, landing própria e 10 botões extras no editor. Self-hosted via Docker (web+mongo+redis).",
    i18n: {
      en: "Fork of Overleaf Community Edition with IFF identity: official document classes (ifftese/iffposter), blue theme, custom landing page and 10 extra editor buttons. Self-hosted via Docker (web+mongo+redis).",
      es: "Fork de Overleaf Community Edition con identidad del IFF: clases oficiales (ifftese/iffposter), tema azul, página de inicio propia y 10 botones extra en el editor. Self-hosted vía Docker (web+mongo+redis).",
      fr: "Fork d'Overleaf Community Edition avec l'identité de l'IFF : classes officielles (ifftese/iffposter), thème bleu, page d'accueil propre et 10 boutons supplémentaires à l'éditeur. Auto-hébergé via Docker (web+mongo+redis)."
    }
  },
  {
    name: "Verdementa",
    cat: "software",
    visibility: "privado",
    icon: "leaf",
    repo: "https://github.com/pedroiff0/verdementa",
    stack: [ "Meta-repo", "Python", "PowerShell" ],
    tags: [ "Suíte Comercial", "ERP" ],
    brief: "Meta-repositório que agrupa Caixas, ControleEstoque, LevantamentoEstoque e Planilhador — suíte de ferramentas comerciais.",
    i18n: {
      en: "Meta-repository grouping Caixas, ControleEstoque, LevantamentoEstoque and Planilhador — a suite of retail management tools in real production use.",
      es: "Metarrepositorio que agrupa Caixas, ControleEstoque, LevantamentoEstoque y Planilhador — suite de herramientas comerciales en uso real en producción.",
      fr: "Méta-dépôt regroupant Caixas, ControleEstoque, LevantamentoEstoque et Planilhador — une suite d'outils commerciaux en usage réel en production."
    }
  },
  {
    name: "Caixas",
    cat: "software",
    visibility: "privado",
    icon: "cash",
    repo: "https://github.com/pedroiff0/caixas",
    stack: [ "Python", "Flask", "SQLAlchemy", "Alembic", "Jinja2", "AdminLTE" ],
    tags: [ "Controle de Caixa", "Relatórios" ],
    brief: "Aplicação web para registrar fechamentos diários de caixa (vendas, depósitos, vales, total contado na gaveta), gerar relatórios e manter histórico imprimível. Flask + SQLAlchemy + Alembic, com endpoints REST auxiliares e migrations versionadas em CI.",
    i18n: {
      en: "Web app to record daily cash-register closings (sales, deposits, vouchers, counted drawer total), generate reports and keep a printable history. Flask + SQLAlchemy + Alembic, with auxiliary REST endpoints and migrations versioned in CI. In production and in real daily use.",
      es: "Aplicación web para registrar cierres diarios de caja (ventas, depósitos, vales, total contado en el cajón), generar informes y mantener un historial imprimible. Flask + SQLAlchemy + Alembic, con endpoints REST auxiliares y migraciones versionadas en CI. En producción y en uso real diario.",
      fr: "Application web pour enregistrer les clôtures de caisse quotidiennes (ventes, dépôts, bons, total compté en caisse), générer des rapports et conserver un historique imprimable. Flask + SQLAlchemy + Alembic, avec endpoints REST auxiliaires et migrations versionnées en CI. En production et en usage quotidien réel."
    }
  },
  {
    name: "ControleEstoque",
    cat: "software",
    visibility: "privado",
    icon: "box",
    repo: "https://github.com/pedroiff0/controle-estoque",
    stack: [ "Python", "CI", "CSV/PDF" ],
    tags: [ "Inventário", "Estoque" ],
    brief: "Aplicação para contagem rápida de inventário, com persistência de sessão, consolidação de contagens e geração de relatórios em CSV/PDF.",
    i18n: {
      en: "App for fast inventory counting, with session persistence, consolidation of counts and CSV/PDF report generation.",
      es: "Aplicación para conteo rápido de inventario, con persistencia de sesión, consolidación de conteos y generación de informes en CSV/PDF.",
      fr: "Application de comptage rapide d'inventaire, avec persistance de session, consolidation des comptages et génération de rapports en CSV/PDF."
    }
  },
  {
    name: "LevantamentoEstoque",
    cat: "software",
    visibility: "privado",
    icon: "box",
    repo: "https://github.com/pedroiff0/levantamento-estoque",
    stack: [ "Python", "CI", "PDF" ],
    tags: [ "Estoque", "Compras" ],
    brief: "Sistema de levantamento de estoque por cor/tamanho, com persistência de sessão, extração de dados de PDF e geração de relatórios — voltado a itens de compra repetida.",
    i18n: {
      en: "Stock-taking system by colour and size, with session persistence, data extraction from PDFs and report generation — aimed at repeatedly purchased items.",
      es: "Sistema de levantamiento de existencias por color y talla, con persistencia de sesión, extracción de datos desde PDF y generación de informes — orientado a artículos de compra recurrente.",
      fr: "Système d'inventaire par couleur et taille, avec persistance de session, extraction de données depuis des PDF et génération de rapports — destiné aux articles achetés de façon récurrente."
    }
  },
  {
    name: "Planilhador",
    cat: "software",
    visibility: "privado",
    icon: "table",
    repo: "https://github.com/pedroiff0/planilhador",
    stack: [ "Python", "CI", "XML/NFCe" ],
    tags: [ "NFCe", "Planilhas" ],
    brief: "Ferramentas para processar XMLs de NFCe e gerar relatórios/planilhas automatizados.",
    i18n: {
      en: "Tools to process NFCe (Brazilian e-invoice) XML files and generate automated reports and spreadsheets.",
      es: "Herramientas para procesar XML de NFCe (factura electrónica brasileña) y generar informes y hojas de cálculo automatizados.",
      fr: "Outils pour traiter les XML de NFCe (facture électronique brésilienne) et générer rapports et tableurs automatisés."
    }
  },
  {
    name: "Projeto Profissional (template)",
    cat: "software",
    visibility: "público",
    icon: "web",
    repo: "https://github.com/pedroiff0/projeto-profissional",
    stack: [ "Node.js 20", "Express", "MongoDB", "Mongoose", "EJS", "JWT", "Zod", "Jest", "Docker" ],
    tags: [ "Template", "Boilerplate", "Segurança", "Auth", "Open Source" ],
    brief: "Template base endurecido para iniciar qualquer aplicação web Node: autenticação JWT, papéis admin/user, registro controlado pelo admin (sem autocadastro), CSP sem inline, rate limit, CSRF guard, validação Zod e suíte Jest+Supertest desde o primeiro commit. Docker Compose com app não-root e filesystem read-only.",
    i18n: {
      en: "Hardened starter template for any Node web app: JWT auth (httpOnly cookie or Bearer), admin/user roles, admin-controlled registration (no self sign-up), inline-free CSP, input sanitization, rate limiting, CSRF guard, Zod validation and a Jest+Supertest suite from the first commit. Docker Compose with a non-root, read-only app container.",
      es: "Plantilla base endurecida para iniciar cualquier aplicación web Node: autenticación JWT (cookie httpOnly o Bearer), roles admin/user, registro controlado por el admin (sin autoregistro), CSP sin inline, saneamiento, rate limit, guard CSRF, validación Zod y suite Jest+Supertest desde el primer commit. Docker Compose con app no-root y sistema de archivos de solo lectura.",
      fr: "Modèle de base durci pour démarrer toute application web Node : authentification JWT (cookie httpOnly ou Bearer), rôles admin/user, inscription contrôlée par l'admin (pas d'auto-inscription), CSP sans inline, assainissement, rate limit, garde CSRF, validation Zod et suite Jest+Supertest dès le premier commit. Docker Compose avec app non-root en lecture seule."
    }
  },
  {
    name: "awesome-skills",
    cat: "software",
    visibility: "público",
    icon: "book",
    repo: "https://github.com/pedroiff0/awesome-skills",
    stack: [ "Markdown", "YAML", "Python", "Hermes Agent" ],
    tags: [ "IA", "Agentes", "Automação", "Open Source", "Memória Procedural" ],
    brief: "Coleção pessoal de skills (memória procedural) para o agente Hermes — 102 skills em 32 categorias, cada uma com SKILL.md (frontmatter YAML + instruções) e, opcionalmente, references/, scripts/ e templates/. Índice do README gerado por script; cobre de manutenção de sites Quartz e i18n a MLOps, LaTeX e automação de desktop.",
    i18n: {
      en: "Personal collection of skills (procedural memory) for the Hermes agent — 102 skills across 32 categories, each with SKILL.md (YAML frontmatter + instructions) plus optional references/, scripts/ and templates/. Script-generated README index; spans Quartz site maintenance and i18n, MLOps, LaTeX and desktop automation.",
      es: "Colección personal de skills (memoria procedural) para el agente Hermes — 102 skills en 32 categorías, cada una con SKILL.md (frontmatter YAML + instrucciones) y, opcionalmente, references/, scripts/ y templates/. Índice del README generado por script; abarca desde sitios Quartz e i18n hasta MLOps, LaTeX y automatización de escritorio.",
      fr: "Collection personnelle de skills (mémoire procédurale) pour l'agent Hermes — 102 skills en 32 catégories, chacune avec SKILL.md (frontmatter YAML + instructions) et, en option, references/, scripts/ et templates/. Index du README généré par script ; du site Quartz et de l'i18n au MLOps, LaTeX et à l'automatisation du bureau."
    }
  },
  {
    name: "meu-setup",
    cat: "software",
    visibility: "público",
    icon: "box",
    repo: "https://github.com/pedroiff0/meu-setup",
    stack: [ "Python", "YAML", "Bash", "PowerShell", "apt/dnf/pacman/zypper", "winget", "Homebrew" ],
    tags: [ "Dotfiles", "Provisionamento", "Multi-distro", "Open Source", "Idempotente" ],
    brief: "Mapa de todos os programas que uso (Linux, Windows e macOS) com instaladores automáticos e uma única fonte de verdade: packages.yaml. O instalador Linux detecta a distro (apt/dnf/pacman/zypper), é idempotente e tem cadeia de fallback (nativo → flatpak → snap → script oficial). Um gerador produz install.ps1, install.sh e o inventário; o bootstrap repopula a máquina do zero com um comando.",
    i18n: {
      en: "A map of every program I use (Linux, Windows and macOS) with automated installers and a single source of truth: packages.yaml. The Linux installer detects the distro (apt/dnf/pacman/zypper), is idempotent and has a fallback chain (native → flatpak → snap → official script). A generator produces install.ps1, install.sh and the inventory; the bootstrap repopulates a fresh machine with one command.",
      es: "Mapa de todos los programas que uso (Linux, Windows y macOS) con instaladores automáticos y una única fuente de verdad: packages.yaml. El instalador Linux detecta la distro (apt/dnf/pacman/zypper), es idempotente y tiene cadena de fallback (nativo → flatpak → snap → script oficial). Un generador produce install.ps1, install.sh y el inventario; el bootstrap repuebla la máquina con un comando.",
      fr: "Carte de tous les programmes que j'utilise (Linux, Windows et macOS) avec des installateurs automatiques et une source unique de vérité : packages.yaml. L'installateur Linux détecte la distro (apt/dnf/pacman/zypper), est idempotent et dispose d'une chaîne de repli (natif → flatpak → snap → script officiel). Un générateur produit install.ps1, install.sh et l'inventaire ; le bootstrap repeuple la machine en une commande."
    }
  },
  {
    name: "anomaly_detection",
    cat: "pesquisa",
    visibility: "privado",
    icon: "star",
    repo: "https://github.com/pedroiff0/anomaly_detection",
    stack: [ "Python", "Astropy", "NumPy", "Pandas", "ML", "Jupyter" ],
    tags: [ "PIBIC/CNPq", "Gaia", "GALAH", "Astroquímica" ],
    brief: "Análise das propriedades estelares e composição química das estrelas próximas do GCNS observadas pelo GALAH DR4 (Gaia DR3 + GALAH DR4). Bolsa PIBIC/CNPq; co-autoria PUC Chile (Dra. M. L. L. Dantas, Dra. A. C. Soja).",
    i18n: {
      en: "Analysis of stellar properties and chemical composition of nearby stars from GCNS observed by GALAH DR4 (Gaia DR3 + GALAH DR4). PIBIC/CNPq scholarship; co-authorship PUC Chile (Dr. M. L. L. Dantas, Dr. A. C. Soja).",
      es: "Análisis de las propiedades estelares y composición química de estrellas cercanas del GCNS observadas por GALAH DR4 (Gaia DR3 + GALAH DR4). Beca PIBIC/CNPq; coautoría PUC Chile (Dra. M. L. L. Dantas, Dra. A. C. Soja).",
      fr: "Analyse des propriétés stellaires et de la composition chimique des étoiles proches du GCNS observées par GALAH DR4 (Gaia DR3 + GALAH DR4). Bourse PIBIC/CNPq ; co-autoria PUC Chile (Mme M. L. L. Dantas, Mme A. C. Soja)."
    }
  },
  {
    name: "SpectraViewer",
    cat: "pesquisa",
    visibility: "público",
    icon: "spectrum",
    repo: "https://github.com/pedroiff0/spectraviewer",
    stack: [ "Python", "FITS", "Matplotlib" ],
    tags: [ "Espectroscopia", "GALAH DR4", "Open Source" ],
    brief: "Viewer interativo de espectros GALAH DR4 (4 bandas, linhas de referência CNO/Alpha/Iron-peak, leitura de FITS, metadados Teff/log(g)/[Fe/H]).",
    i18n: {
      en: "Interactive viewer for GALAH DR4 spectra (4 bands, CNO/Alpha/Iron-peak reference lines, FITS reading, Teff/log(g)/[Fe/H] metadata).",
      es: "Visor interactivo de espectros GALAH DR4 (4 bandas, líneas de referencia CNO/Alpha/Iron-peak, lectura de FITS, metadatos Teff/log(g)/[Fe/H]).",
      fr: "Visionneuse interactive des spectres GALAH DR4 (4 bandes, lignes de référence CNO/Alpha/Iron-peak, lecture FITS, métadonnées Teff/log(g)/[Fe/H])."
    }
  },
  {
    name: "research",
    cat: "pesquisa",
    visibility: "privado",
    icon: "book",
    repo: "https://github.com/pedroiff0/research",
    stack: [ "Python", "arXiv API", "Pandas", "Matplotlib", "PyPDF2", "python-docx" ],
    tags: [ "Literatura", "arXiv" ],
    brief: "Anexos de pesquisa: busca de artigos no arXiv por assunto/keyword para compor leituras.",
    i18n: {
      en: "Research attachments: arXiv article search by subject/keyword to compose readings.",
      es: "Anexos de investigación: búsqueda de artículos en arXiv por tema/palabra clave para componer lecturas.",
      fr: "Annexes de recherche : recherche d'articles arXiv par sujet/mot-clé pour composer des lectures."
    }
  },
  {
    name: "Currículo (CV)",
    cat: "academico",
    visibility: "público",
    icon: "document",
    repo: "https://github.com/pedroiff0/cv",
    stack: [ "LaTeX", "altacv", "Makefile", "biblatex" ],
    tags: [ "Multilíngue", "PT/EN/ES/FR" ],
    brief: "CV em LaTeX (classe altacv), multilíngue (PT/EN/ES/FR) compilado via Makefile. Inclui ORCID, Google Scholar e publicações em congressos (CONFICT, SAB, SBPC).",
    i18n: {
      en: "CV in LaTeX (altacv class), multilingual (PT/EN/ES/FR) compiled via Makefile. Includes ORCID, Google Scholar and conference publications (CONFICT, SAB, SBPC).",
      es: "CV en LaTeX (clase altacv), multilingüe (PT/EN/ES/FR) compilado vía Makefile. Incluye ORCID, Google Scholar y publicaciones en congresos (CONFICT, SAB, SBPC).",
      fr: "CV en LaTeX (classe altacv), multilingue (PT/EN/ES/FR) compilé via Makefile. Inclut ORCID, Google Scholar et publications en conférence (CONFICT, SAB, SBPC)."
    }
  },
  {
    name: "Cálculo Numérico",
    cat: "academico",
    visibility: "público",
    icon: "function",
    repo: "https://github.com/pedroiff0/CalculoNumerico",
    stack: [ "Python", "CI", "Docs", "NumPy" ],
    tags: [ "Disciplina", "Métodos Numéricos" ],
    brief: "Repositório de códigos da disciplina Cálculo Numérico 2025.2, com CI e documentação.",
    i18n: {
      en: "Code repository for the Numerical Methods course (2025.2), with CI and documentation — implementations of root finding, interpolation, numerical integration and linear systems.",
      es: "Repositorio de códigos de la asignatura Cálculo Numérico 2025.2, con CI y documentación — implementaciones de búsqueda de raíces, interpolación, integración numérica y sistemas lineales.",
      fr: "Dépôt de codes du cours de Calcul Numérique 2025.2, avec CI et documentation — implémentations de recherche de racines, interpolation, intégration numérique et systèmes linéaires."
    }
  },
  {
    name: "Formulários",
    cat: "academico",
    visibility: "público",
    icon: "formula",
    repo: "https://github.com/pedroiff0/formularios",
    stack: [ "LaTeX", "siunitx" ],
    tags: [ "Resumos", "Fórmulas" ],
    brief: "Coleção de folhas de fórmulas e resumos em LaTeX organizados por disciplina.",
    i18n: {
      en: "Collection of LaTeX formula sheets and summaries organized by course — mathematics and physics, typeset with siunitx.",
      es: "Colección de formularios y resúmenes en LaTeX organizados por asignatura — matemáticas y física, compuestos con siunitx.",
      fr: "Collection de formulaires et résumés en LaTeX organisés par matière — mathématiques et physique, composés avec siunitx."
    }
  },
  {
    name: "Modelos LaTeX",
    cat: "academico",
    visibility: "privado",
    icon: "latex",
    repo: "https://github.com/pedroiff0/modelos",
    stack: [ "LaTeX" ],
    tags: [ "Templates" ],
    brief: "Modelos LaTeX para uso geral.",
    i18n: {
      en: "LaTeX templates for general use: articles, reports, theses, slides, posters, booklets, problem sets, exams and ABNT-compliant references.",
      es: "Plantillas LaTeX de uso general: artículos, informes, tesis, diapositivas, pósteres, apuntes, listas de ejercicios, exámenes y referencias según ABNT.",
      fr: "Modèles LaTeX à usage général : articles, rapports, mémoires, diapositives, affiches, fascicules, séries d'exercices, examens et références ABNT."
    }
  },
  {
    name: "page (Quartz)",
    cat: "pessoal",
    visibility: "público",
    icon: "globe",
    repo: "https://github.com/pedroiff0/quartz-site",
    stack: [ "Quartz", "Obsidian", "Markdown", "TypeScript", "GitHub Actions" ],
    tags: [ "Site Oficial", "Obsidian", "Multilíngue" ],
    brief: "Site pessoal/acadêmico oficial, multilíngue (PT completo; EN/ES/FR parciais), em Quartz a partir do vault Obsidian. Publicado em www.phrandrade.com. É o consolidado: pesquisa, notas de disciplinas, mídia e blog. Este portfólio é a página de boas-vindas dele.",
    i18n: {
      en: "Official personal/academic site, multilingual (full PT; partial EN/ES/FR), built with Quartz from an Obsidian vault. Published at www.phrandrade.com. It is the consolidated hub: research, course notes, media and blog. This portfolio is its welcome page.",
      es: "Sitio personal/académico oficial, multilingüe (PT completo; EN/ES/FR parciales), en Quartz a partir del vault de Obsidian. Publicado en www.phrandrade.com. Es el consolidado: investigación, apuntes de asignaturas, medios y blog. Este portafolio es su página de bienvenida.",
      fr: "Site personnel/académique officiel, multilingue (PT complet ; EN/ES/FR partiels), en Quartz à partir du vault Obsidian. Publié sur www.phrandrade.com. C'est le hub consolidé : recherche, notes de cours, médias et blog. Ce portfolio en est la page d'accueil."
    }
  },
  {
    name: "Livro-Texto de Cálculo",
    cat: "academico",
    visibility: "elaboracao",
    icon: "function",
    repo: "",
    stack: [ "LaTeX", "Python", "Sphinx" ],
    tags: [ "Material Didático", "Cálculo", "Algoritmos", "Autoral" ],
    brief: "Material didático próprio de Cálculo, em elaboração, escrito em LaTeX — dos fundamentos a sistemas lineares. Cobre revisão de Python/Cálculo I, sistemas de bases numéricas (binária, octal, decimal, hexadecimal) e sistemas lineares (eliminação de Gauss e fatoração LU, com e sem pivotamento). Cada capítulo traz apêndice próprio de algoritmos em versão simplificada, além de exemplos autorais que complementam o livro-texto padrão. Layout já ajustado; revisão de formatação (padrão Sphinx) e dos quadros de algoritmos em andamento.",
    i18n: {
      en: "My own Calculus textbook, in progress, written in LaTeX — from fundamentals to linear systems. Covers a Python/Calculus I refresher, numeral base systems (binary, octal, decimal, hexadecimal) and linear systems (Gaussian elimination and LU factorization, with and without pivoting). Each chapter has its own appendix of algorithms in simplified form, plus original examples complementing the standard textbook. Layout is settled; formatting review (Sphinx-style) and algorithm boxes still under way.",
      es: "Material didáctico propio de Cálculo, en elaboración, escrito en LaTeX — de los fundamentos a los sistemas lineales. Cubre un repaso de Python/Cálculo I, sistemas de bases numéricas (binaria, octal, decimal, hexadecimal) y sistemas lineales (eliminación de Gauss y factorización LU, con y sin pivoteo). Cada capítulo trae su propio apéndice de algoritmos en versión simplificada, además de ejemplos de autoría propia que complementan el libro de texto estándar. Maquetación ya ajustada; revisión de formato (estilo Sphinx) y de los cuadros de algoritmos en curso.",
      fr: "Manuel de Calcul de ma propre plume, en cours de rédaction, écrit en LaTeX — des fondements aux systèmes linéaires. Couvre une révision Python/Calcul I, les systèmes de bases numériques (binaire, octal, décimal, hexadécimal) et les systèmes linéaires (élimination de Gauss et factorisation LU, avec et sans pivotage). Chaque chapitre possède son propre annexe d'algorithmes en version simplifiée, ainsi que des exemples originaux complétant le manuel de référence. Mise en page arrêtée ; révision du formatage (style Sphinx) et des encadrés d'algorithmes en cours."
    }
  },
  {
    name: "Arquivo de Apostilas",
    cat: "academico",
    visibility: "planejamento",
    icon: "formula",
    repo: "",
    stack: [ "LaTeX" ],
    tags: [ "Material Didático", "Engenharia de Computação", "Autoral" ],
    brief: "Plano, em planejamento, de escrever apostilas próprias cobrindo toda a grade de Engenharia de Computação — com teoria, exercícios e experimentos comentados. Abrange Cálculos I–IV e Cálculo Numérico, Física I–IV (com espaço para Quântica e de Partículas), Álgebra Linear, Algoritmos e Estruturas de Dados, Equações Diferenciais, Mecânica dos Sólidos e Fluidos, Eletricidade e Eletrônica, Banco de Dados, Engenharia de Software, Compiladores, Programação, Redes, Arquitetura de Computadores, Sistemas Operacionais e Embarcados, Metodologia Científica e Astrofísica. Complementa as notas de disciplinas já publicadas no site oficial.",
    i18n: {
      en: "A planned series of my own course booklets covering the entire Computer Engineering curriculum — with theory, exercises and annotated experiments. Spans Calculus I–IV and Numerical Methods, Physics I–IV (with room for Quantum and Particle Physics), Linear Algebra, Algorithms and Data Structures, Differential Equations, Solid and Fluid Mechanics, Electricity and Electronics, Databases, Software Engineering, Compilers, Programming, Networks, Computer Architecture, Operating and Embedded Systems, Scientific Methodology and Astrophysics. Complements the course notes already published on the official site.",
      es: "Plan, en planificación, de escribir apuntes propios que cubran toda la malla de Ingeniería Informática — con teoría, ejercicios y experimentos comentados. Abarca Cálculos I–IV y Cálculo Numérico, Física I–IV (con espacio para Cuántica y de Partículas), Álgebra Lineal, Algoritmos y Estructuras de Datos, Ecuaciones Diferenciales, Mecánica de Sólidos y Fluidos, Electricidad y Electrónica, Bases de Datos, Ingeniería de Software, Compiladores, Programación, Redes, Arquitectura de Computadores, Sistemas Operativos y Embebidos, Metodología Científica y Astrofísica. Complementa los apuntes de asignaturas ya publicados en el sitio oficial.",
      fr: "Projet, en cours de planification, d'écrire mes propres fascicules couvrant tout le programme de génie informatique — avec théorie, exercices et expériences commentées. Couvre Calcul I–IV et Calcul Numérique, Physique I–IV (avec place pour la Quantique et les Particules), Algèbre Linéaire, Algorithmes et Structures de Données, Équations Différentielles, Mécanique des Solides et des Fluides, Électricité et Électronique, Bases de Données, Génie Logiciel, Compilateurs, Programmation, Réseaux, Architecture des Ordinateurs, Systèmes d'Exploitation et Embarqués, Méthodologie Scientifique et Astrophysique. Complète les notes de cours déjà publiées sur le site officiel."
    }
  },
  {
    name: "arXiv Searcher",
    cat: "pesquisa",
    visibility: "planejamento",
    icon: "star",
    repo: "",
    stack: [ "Python", "arXiv API", "Docker", "LaTeX", "Markdown" ],
    tags: [ "Automação", "Pesquisa", "Daemon", "BibTeX" ],
    brief: "Ferramenta, em planejamento, para buscar e organizar automaticamente artigos do arXiv por assunto ou palavra-chave. Pensada para rodar como daemon (possivelmente dockerizado), consultando a API do arXiv periodicamente e gerando saída diária em Markdown (tabela com data, título, primeiro autor, área e link) e citações prontas em LaTeX, na mesma estrutura de referência dos meus artigos. Configuração via planilha CSV, com área de busca padrão e opção de busca avulsa por palavra-chave sem alterar essa configuração.",
    i18n: {
      en: "A planned tool to automatically search and organize arXiv papers by subject or keyword. Designed to run as a daemon (possibly dockerized), polling the arXiv API periodically and producing a daily Markdown digest (table with date, title, first author, field and link) plus ready-to-use LaTeX citations matching the reference structure of my own papers. Configured via a CSV sheet, with a default search field and the option of a one-off keyword search that leaves the configuration untouched.",
      es: "Herramienta, en planificación, para buscar y organizar automáticamente artículos de arXiv por tema o palabra clave. Pensada para ejecutarse como demonio (posiblemente dockerizado), consultando la API de arXiv periódicamente y generando salida diaria en Markdown (tabla con fecha, título, primer autor, área y enlace) y citas listas en LaTeX, con la misma estructura de referencia de mis artículos. Configuración mediante hoja CSV, con área de búsqueda por defecto y opción de búsqueda suelta por palabra clave sin alterar esa configuración.",
      fr: "Outil, en cours de planification, pour rechercher et organiser automatiquement les articles d'arXiv par sujet ou mot-clé. Conçu pour tourner en démon (éventuellement dockerisé), interrogeant périodiquement l'API arXiv et produisant une sortie quotidienne en Markdown (tableau avec date, titre, premier auteur, domaine et lien) ainsi que des citations LaTeX prêtes à l'emploi, dans la même structure de référence que mes articles. Configuration via une feuille CSV, avec un domaine de recherche par défaut et la possibilité d'une recherche ponctuelle par mot-clé sans modifier cette configuration."
    }
  },
  {
    name: "hardcore-life",
    cat: "pessoal",
    visibility: "privado",
    icon: "life",
    repo: "https://github.com/pedroiff0/hardcore-life",
    stack: [ "Obsidian", "PARA", "Markdown" ],
    tags: [ "Produtividade", "Second Brain", "PARA" ],
    brief: "Vault Obsidian de gestão de vida pelo método PARA (projetos, áreas, recursos, arquivos), com mais de 4000 arquivos — a base de conhecimento pessoal de onde saem notas, planejamento e diário.",
    i18n: {
      en: "Obsidian vault for life management using the PARA method (projects, areas, resources, archives), with over 4000 files — the personal knowledge base behind my notes, planning and journal.",
      es: "Vault de Obsidian para gestión de vida con el método PARA (proyectos, áreas, recursos, archivos), con más de 4000 archivos — la base de conocimiento personal de la que salen notas, planificación y diario.",
      fr: "Vault Obsidian de gestion de vie selon la méthode PARA (projets, domaines, ressources, archives), avec plus de 4000 fichiers — la base de connaissances personnelle d'où sortent notes, planification et journal."
    }
  },
  {
    name: "HardCoreLife (plataforma)",
    cat: "pessoal",
    visibility: "planejamento",
    icon: "dashboard",
    repo: "",
    stack: [ "Node.js", "Express", "MongoDB", "Docker" ],
    tags: [ "Life OS", "Modular", "Multi-módulo", "Família" ],
    brief: "Plataforma pessoal modular, em planejamento, para reunir num só sistema o que hoje vive espalhado em planilhas e apps soltos. Um núcleo, vários módulos integrados: Controle Financeiro, Investimentos, Automotivo, Tarefas, Streamings (assinaturas) e Compartilhamento Familiar com acesso restrito por convite. Acesso pensado em duas camadas: web (aberta ou restrita conforme o módulo) e área privada.",
    i18n: {
      en: "A planned modular personal platform to bring into one system what today lives scattered across spreadsheets and standalone apps. One core, several integrated modules: Finances, Investments, Vehicles, Tasks, Streaming subscriptions and Family Sharing with invite-only access. Access designed in two layers: web (open or restricted depending on the module) and a private area.",
      es: "Plataforma personal modular, en planificación, para reunir en un solo sistema lo que hoy vive disperso en hojas de cálculo y apps sueltas. Un núcleo, varios módulos integrados: Control Financiero, Inversiones, Automotriz, Tareas, Streamings (suscripciones) y Compartición Familiar con acceso restringido por invitación. Acceso pensado en dos capas: web (abierta o restringida según el módulo) y área privada.",
      fr: "Plateforme personnelle modulaire, en cours de planification, pour réunir dans un seul système ce qui vit aujourd'hui éparpillé entre tableurs et applications isolées. Un noyau, plusieurs modules intégrés : Finances, Investissements, Automobile, Tâches, Abonnements streaming et Partage Familial sur invitation. Accès pensé en deux couches : web (ouverte ou restreinte selon le module) et espace privé."
    }
  },
  {
    name: "dashboard-life",
    cat: "pessoal",
    visibility: "privado",
    icon: "dashboard",
    repo: "https://github.com/pedroiff0/dashboard-life",
    stack: [ "Node.js", "Express", "MongoDB", "Docker" ],
    tags: [ "Life OS", "Hábitos", "Métricas" ],
    brief: "Dashboard pessoal de hábitos e métricas de vida, derivado do vault hardcore-life e primeiro passo concreto rumo à plataforma HardCoreLife. Node + Express + MongoDB, deploy via Docker. Em desenvolvimento.",
    i18n: {
      en: "Personal dashboard for habits and life metrics, derived from the hardcore-life vault and the first concrete step towards the HardCoreLife platform. Node + Express + MongoDB, deployed via Docker. Under development.",
      es: "Dashboard personal de hábitos y métricas de vida, derivado del vault hardcore-life y primer paso concreto hacia la plataforma HardCoreLife. Node + Express + MongoDB, despliegue vía Docker. En desarrollo.",
      fr: "Tableau de bord personnel d'habitudes et de métriques de vie, dérivé du vault hardcore-life et première étape concrète vers la plateforme HardCoreLife. Node + Express + MongoDB, déploiement via Docker. En développement."
    }
  },
  {
    name: "guia-github",
    cat: "pessoal",
    visibility: "público",
    icon: "github",
    repo: "https://github.com/pedroiff0/guia-github",
    stack: [ "Docs", "GitHub Actions", "Shell" ],
    tags: [ "Boas Práticas", "Templates", "Versionamento" ],
    brief: "Guia próprio de Git e boas práticas de versionamento — prático, não mais um manual genérico de comandos. Reúne templates, exemplos de Actions, Projects, Issues e estratégias de branching, com módulos sobre dockerização, versionamento em arquiteturas de microsserviços e padrões de documentação de repositório.",
    i18n: {
      en: "My own guide to Git and versioning best practices — hands-on, not yet another generic command manual. Gathers templates and examples of Actions, Projects, Issues and branching strategies, with modules on dockerization, versioning in microservice architectures and repository documentation standards.",
      es: "Guía propia de Git y buenas prácticas de versionado — práctica, no un manual genérico más de comandos. Reúne plantillas y ejemplos de Actions, Projects, Issues y estrategias de ramificación, con módulos sobre dockerización, versionado en arquitecturas de microservicios y estándares de documentación de repositorio.",
      fr: "Mon propre guide de Git et des bonnes pratiques de versionnage — pratique, et non un énième manuel générique de commandes. Rassemble modèles et exemples d'Actions, Projects, Issues et stratégies de branches, avec des modules sur la dockerisation, le versionnage en architecture microservices et les standards de documentation de dépôt."
    }
  },
  {
    name: "Perfil GitHub",
    cat: "pessoal",
    visibility: "público",
    icon: "profile",
    repo: "https://github.com/pedroiff0/pedroiff0",
    stack: [ "Profile", "Markdown" ],
    tags: [ "README" ],
    brief: "README de perfil do GitHub (bio, Tech & Tools, projetos em destaque).",
    i18n: {
      en: "GitHub profile README (bio, Tech & Tools, featured projects).",
      es: "README de perfil de GitHub (bio, Tech & Tools, proyectos destacados).",
      fr: "README de profil GitHub (bio, Tech & Tools, projets en vedette)."
    }
  },
  {
    name: "Portfólio (este site)",
    cat: "pessoal",
    visibility: "público",
    icon: "globe",
    repo: "https://github.com/pedroiff0/portfolio",
    stack: [ "HTML", "CSS", "JavaScript", "Canvas", "Python", "GitHub Pages" ],
    tags: [ "Portfólio", "Página Única", "Multilíngue", "Sem Framework" ],
    brief: "Este portfólio: página única animada, multilíngue (PT/EN/ES/FR), sem framework — canvas de estrelas com repulsão ao mouse, cartões expansíveis e seletor de idioma persistido. O conteúdo não vive no HTML: é escrito em Markdown (src/portfolio.md) e compilado por um script Python para JS, com verificação automática no pre-commit. Serve de página de boas-vindas para o site oficial, onde está o conteúdo completo.",
    i18n: {
      en: "This portfolio: a single animated page, multilingual (PT/EN/ES/FR), framework-free — star canvas with mouse repulsion, expandable cards and a persisted language switcher. Content does not live in the HTML: it is written in Markdown (src/portfolio.md) and compiled to JS by a Python script, with automatic verification on pre-commit. It serves as the welcome page for the official site, where the full content lives.",
      es: "Este portafolio: página única animada, multilingüe (PT/EN/ES/FR), sin framework — canvas de estrellas con repulsión al ratón, tarjetas expandibles y selector de idioma persistido. El contenido no vive en el HTML: se escribe en Markdown (src/portfolio.md) y se compila a JS con un script de Python, con verificación automática en el pre-commit. Sirve de página de bienvenida al sitio oficial, donde está el contenido completo.",
      fr: "Ce portfolio : page unique animée, multilingue (PT/EN/ES/FR), sans framework — canvas d'étoiles avec répulsion à la souris, cartes dépliables et sélecteur de langue persistant. Le contenu ne vit pas dans le HTML : il est écrit en Markdown (src/portfolio.md) et compilé en JS par un script Python, avec vérification automatique au pre-commit. Il sert de page d'accueil au site officiel, où se trouve le contenu complet."
    }
  }
];

const FEATURED = [
  REPOS.find(r => r.name === "ReLaTeX"),
  REPOS.find(r => r.name === "Sistema Acadêmico"),
  REPOS.find(r => r.name === "Projeto Profissional (template)"),
  REPOS.find(r => r.name === "awesome-skills"),
  REPOS.find(r => r.name === "meu-setup")
];

const RESEARCH = REPOS.filter(r => r.cat === "pesquisa").map(r => ({
  title: r.name, icon: r.icon, badge: r.visibility === "público" ? "Público" : "Privado",
  summary: r.brief, details: r.brief + "  Repositório: " + r.repo,
  i18n: r.i18n
}));

const BOLSAS = [
  {
    title: "Entendendo a Matéria Escura a partir de Choques ExtraGalácticos",
    icon: "darkmatter",
    kind: "IC Júnior · CNPq",
    period: "Set. 2022 — Mar. 2023",
    orient: "Dra. Ana Cecília Soja",
    desc: "Iniciação Científica Júnior sobre matéria escura e choques extragalácticos.",
    i18n: {
      en: {
        title: "Understanding Dark Matter from ExtraGalactic Shocks",
        kind: "Junior SI · CNPq",
        desc: "Junior Scientific Initiation on dark matter and extragalactic shocks."
      },
      es: {
        title: "Entendiendo la Materia Oscura a partir de Choques ExtraGalácticos",
        kind: "IC Júnior · CNPq",
        desc: "Iniciación Científica Júnior sobre materia oscura y choques extragalácticos."
      },
      fr: {
        title: "Comprendre la Matière Noire à partir de Chocs ExtraGalactiques",
        kind: "SI Junior · CNPq",
        desc: "Initiation Scientifique Junior sur la matière noire et les chocs extragalactiques."
      }
    }
  },
  {
    title: "MobFog no IFFMaker",
    icon: "fog",
    kind: "IC · IFF",
    period: "Ago. 2023 — Fev. 2024",
    orient: "Dra. Ana Cecília Soja",
    desc: "Projeto de Iniciação Científica do IFF (computação em névoa / edge).",
    i18n: {
      en: {
        title: "MobFog at IFFMaker",
        kind: "SI · IFF",
        desc: "IFF Scientific Initiation project (fog/edge computing)."
      },
      es: {
        title: "MobFog en IFFMaker",
        kind: "IC · IFF",
        desc: "Proyecto de Iniciación Científica del IFF (computación en niebla/edge)."
      },
      fr: {
        title: "MobFog à l'IFFMaker",
        kind: "SI · IFF",
        desc: "Projet d'Initiation Scientifique de l'IFF (informatique en brouillard/edge)."
      }
    }
  },
  {
    title: "Simulando o Impacto de Satélites em Observações Astronômicas",
    icon: "satellite",
    kind: "Voluntário · CNPq",
    period: "Ago. 2023 — Set. 2023",
    orient: "Dra. Ana Cecília Soja",
    desc: "Simulação do impacto de rastros de satélites em imagens astronômicas.",
    i18n: {
      en: {
        title: "Simulating the Impact of Satellites on Astronomical Observations",
        kind: "Volunteer · CNPq",
        desc: "Simulation of satellite-trail impact on astronomical images."
      },
      es: {
        title: "Simulando el Impacto de Satélites en Observaciones Astronómicas",
        kind: "Voluntario · CNPq",
        desc: "Simulación del impacto de rastros de satélites en imágenes astronómicas."
      },
      fr: {
        title: "Simuler l'Impact des Satellites sur les Observations Astronomiques",
        kind: "Bénévole · CNPq",
        desc: "Simulation de l'impact des traînées de satellites sur les images astronomiques."
      }
    }
  },
  {
    title: "Detecção de Anomalias em Estrelas da Via Láctea (Gaia + Surveys + ML)",
    icon: "star",
    kind: "IC · CNPq (PIBIC)",
    period: "Out. 2025 — presente",
    orient: "Dra. Ana Cecília Soja e Dra. Maria Luiza Linhares Dantas",
    desc: "Bolsa PIBIC/CNPq: aprendizado de máquina sobre Gaia DR3 + GALAH DR4 + GCNS para arqueologia galáctica e populações estelares. Co-autoria PUC Chile.",
    i18n: {
      en: {
        title: "Anomaly Detection in Stars of the Milky Way (Gaia + Surveys + ML)",
        kind: "SI · CNPq (PIBIC)",
        desc: "PIBIC/CNPq scholarship: machine learning on Gaia DR3 + GALAH DR4 + GCNS for galactic archaeology and stellar populations. Co-authorship PUC Chile."
      },
      es: {
        title: "Detección de Anomalias en Estrellas de la Vía Láctea (Gaia + Surveys + ML)",
        kind: "IC · CNPq (PIBIC)",
        desc: "Beca PIBIC/CNPq: aprendizaje de máquina sobre Gaia DR3 + GALAH DR4 + GCNS para arqueología galáctica y poblaciones estelares. Coautoría PUC Chile."
      },
      fr: {
        title: "Détection d'Anomalies chez les Étoiles de la Voie Lactée (Gaia + Surveys + ML)",
        kind: "SI · CNPq (PIBIC)",
        desc: "Bourse PIBIC/CNPq : apprentissage automatique sur Gaia DR3 + GALAH DR4 + GCNS pour l'archéologie galactique et les populations stellaires. Co-autoria PUC Chile."
      }
    }
  }
];

const CONTACTS = [
  {
    icon: "mail",
    labelKey: "email",
    value: "pedroiff0@gmail.com",
    href: "mailto:pedroiff0@gmail.com"
  },
  {
    icon: "github",
    labelKey: "github",
    value: "@pedroiff0",
    href: "https://github.com/pedroiff0"
  },
  {
    icon: "linkedin",
    labelKey: "linkedin",
    value: "pedroiff0",
    href: "https://www.linkedin.com/in/pedroiff0/"
  },
  {
    icon: "scholar",
    labelKey: "scholar",
    value: "Pedro H. R. de Andrade",
    href: "https://scholar.google.com.br/citations?user=qG9tHGEAAAAJ&hl=pt-BR"
  },
  {
    icon: "orcid",
    labelKey: "orcid",
    value: "0009-0003-6724-4640",
    href: "https://orcid.org/0009-0003-6724-4640"
  },
  {
    icon: "lattes",
    labelKey: "lattes",
    value: "6818168089966785",
    href: "http://lattes.cnpq.br/6818168089966785"
  },
  {
    icon: "instagram",
    labelKey: "instagram",
    value: "@fckpeeh",
    href: "https://instagram.com/fckpeeh"
  },
  {
    icon: "globe",
    labelKey: "site",
    value: "www.phrandrade.com",
    href: "https://www.phrandrade.com/pt-br/"
  },
  {
    icon: "pin",
    labelKey: "location",
    value: "Bom Jesus do Itabapoana, RJ — Brasil",
    href: null
  }
];

const EXTRA = {
  instagram: "fckpeeh",
  hobby: "Animações e simulações científicas (divulgação científica em física/astronomia).",
  grade: "74 disciplinas mapeadas no Sistema Acadêmico (grade IFF Eng. de Computação, 1º→10º período).",
  nickname: "cinzento"
};

// Dicionário de interface (PT-BR padrão).
const I18N = {
  pt: {
    nav: [ "Sobre", "Projetos", "Trabalhos", "Pesquisa", "Currículo", "Lattes", "Contato" ],
    hero: {
      eyebrow: "Engenharia de Computação · Instituto Federal Fluminense",
      sub: "Construo software para a academia e uso computação para entender o cosmos. Estudante de Engenharia de Computação, bolsista de Iniciação Científica (PIBIC/CNPq), na interseção entre métodos computacionais e astrofísica.",
      badges: [
        "🛰️ PIBIC / CNPq",
        "🏆 IAAC 2024 & 2025",
        "📡 CCNA · CyberOps · IoT",
        "🐧 Linux & Servidores",
        "🔭 Astrofísica Computacional",
        "🤖 Machine Learning",
        "🪐 Gaia · GALAH",
        "📄 ORCID · Scholar"
      ],
      hobbyLabel: "Hobby: "
    },
    sections: {
      sobre: { title: "Trajetória entre código e estrelas", lead: "" },
      projetos: {
        title: "O que eu construo",
        lead: "Clique em qualquer cartão para revelar os detalhes técnicos."
      },
      trabalhos: {
        title: "Tudo o que eu faço no GitHub",
        lead: "Lista completa dos meus repositórios — públicos e privados — com um short brief de cada um. Clique em qualquer cartão para ver os detalhes."
      },
      pesquisa: {
        title: "Astronomia computacional",
        lead: "Projetos de pesquisa em astrofísica computacional. Clique para expandir."
      },
      bolsas: {
        title: "Iniciação Científica & Pesquisa",
        lead: "Projetos de bolsa e voluntariado em astrofísica computacional (extraídos do meu CV)."
      },
      curriculo: { title: "Currículo & Material", lead: "" },
      lattes: { title: "Plataforma Lattes (CNPq)", lead: "" },
      contato: { title: "Vamos nos conectar", lead: "Fale comigo pelo canal que preferir." }
    },
    about: [
      "Sou estudante de <strong>Engenharia de Computação</strong> no <strong>Instituto Federal Fluminense (IFF)</strong>, campus Bom Jesus do Itabapoana — RJ, e bolsista de Iniciação Científica (<strong>PIBIC/CNPq</strong>). Minha pesquisa fica na fronteira entre computação e astronomia: arqueologia galáctica, populações estelares e estrutura da Via Láctea, com aprendizado de máquina aplicado a dados do <em>Gaia</em> e de surveys complementares.",
      "Do lado de engenharia, domino <strong>Python</strong> e <strong>C</strong>, redes de computadores (certificações <strong>Cisco CCNA, CyberOps e IoT</strong>), administração de servidores Linux e desenvolvimento de software full-stack. Participo da <strong>International Astronomy and Astrophysics Competition</strong> (IAAC 2024 e 2025) e apresentei trabalhos em eventos como FEBRACE, Mostratec, CONFICT e na Feira Brasileira de Iniciação Científica.",
      "Sou Técnico em Informática pelo IFF (2020–2022), membro do Centro de Representação Estudantil e um dos organizadores da Semana de Computação, Engenharia e Gestão do IFF."
    ],
    vis: {
      "público": "Público",
      privado: "Privado",
      planejamento: "Em planejamento",
      elaboracao: "Em elaboração"
    },
    labels: {
      details: "Detalhes",
      viewRepo: "↗ Ver repositório no GitHub",
      noRepo: "Sem repositório público ainda"
    },
    cat: { software: "Software", pesquisa: "Pesquisa", academico: "Acadêmico", pessoal: "Pessoal" },
    contactLabels: {
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      scholar: "Google Scholar",
      orcid: "ORCID",
      lattes: "Lattes",
      instagram: "Instagram",
      site: "Site oficial",
      location: "Localização"
    },
    bolsas: { orientLabel: "Orientação", periodLabel: "Período" },
    footer: "feito com café, código e um céu estrelado."
  },
  en: {
    nav: [ "About", "Projects", "Work", "Research", "Resume", "Lattes", "Contact" ],
    hero: {
      eyebrow: "Computer Engineering · Fluminense Federal Institute",
      sub: "I build software for academia and use computation to understand the cosmos. Computer Engineering student, Scientific Initiation Scholar (PIBIC/CNPq), at the intersection of computational methods and astrophysics.",
      badges: [
        "🛰️ PIBIC / CNPq",
        "🏆 IAAC 2024 & 2025",
        "📡 CCNA · CyberOps · IoT",
        "🐧 Linux & Servers",
        "🔭 Computational Astrophysics",
        "🤖 Machine Learning",
        "🪐 Gaia · GALAH",
        "📄 ORCID · Scholar"
      ],
      hobbyLabel: "Hobby: "
    },
    sections: {
      sobre: { title: "Journey between code and stars", lead: "" },
      projetos: { title: "What I build", lead: "Click any card to reveal the technical details." },
      trabalhos: {
        title: "Everything I do on GitHub",
        lead: "Full list of my repositories — public and private — with a short brief of each. Click any card for details."
      },
      pesquisa: {
        title: "Computational astronomy",
        lead: "Computational astrophysics research projects. Click to expand."
      },
      bolsas: {
        title: "Scientific Initiation & Research",
        lead: "Scholarship and volunteer projects in computational astrophysics (from my CV)."
      },
      curriculo: { title: "Resume & Material", lead: "" },
      lattes: { title: "Lattes Platform (CNPq)", lead: "" },
      contato: { title: "Let's connect", lead: "Reach me through your preferred channel." }
    },
    about: [
      "I am an undergraduate <strong>Computer Engineering</strong> student at the <strong>Fluminense Federal Institute (IFF)</strong>, campus Bom Jesus do Itabapoana — RJ, and a Scientific Initiation Scholar (<strong>PIBIC/CNPq</strong>). My research lies at the frontier of computing and astronomy: galactic archaeology, stellar populations and the structure of the Milky Way, with machine learning applied to <em>Gaia</em> and complementary survey data.",
      "On the engineering side, I master <strong>Python</strong> and <strong>C</strong>, computer networks (Cisco <strong>CCNA, CyberOps and IoT</strong> certifications), Linux server administration and full-stack software development. I take part in the <strong>International Astronomy and Astrophysics Competition</strong> (IAAC 2024 and 2025) and presented work at events such as FEBRACE, Mostratec, CONFICT and the Brazilian Science Fair.",
      "I hold a Technical degree in Computer Science from IFF (2020–2022), am a member of the Student Representation Center and one of the organizers of the IFF Computing, Engineering and Management Week."
    ],
    vis: {
      "público": "Public",
      privado: "Private",
      planejamento: "Planned",
      elaboracao: "In progress"
    },
    labels: {
      details: "Details",
      viewRepo: "↗ View repository on GitHub",
      noRepo: "No public repository yet"
    },
    cat: { software: "Software", pesquisa: "Research", academico: "Academic", pessoal: "Personal" },
    contactLabels: {
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      scholar: "Google Scholar",
      orcid: "ORCID",
      lattes: "Lattes",
      instagram: "Instagram",
      site: "Official site",
      location: "Location"
    },
    bolsas: { orientLabel: "Supervisor", periodLabel: "Period" },
    footer: "made with coffee, code and a starry sky."
  },
  es: {
    nav: [
      "Sobre mí",
      "Proyectos",
      "Trabajos",
      "Investigación",
      "Currículum",
      "Lattes",
      "Contacto"
    ],
    hero: {
      eyebrow: "Ingeniería Informática · Instituto Federal Fluminense",
      sub: "Construyo software para la academia y uso la computación para entender el cosmos. Estudiante de Ingeniería Informática, becario de Iniciación Científica (PIBIC/CNPq), en la intersección entre métodos computacionales y astrofísica.",
      badges: [
        "🛰️ PIBIC / CNPq",
        "🏆 IAAC 2024 y 2025",
        "📡 CCNA · CyberOps · IoT",
        "🐧 Linux y Servidores",
        "🔭 Astrofísica Computacional",
        "🤖 Aprendizaje Automático",
        "🪐 Gaia · GALAH",
        "📄 ORCID · Scholar"
      ],
      hobbyLabel: "Pasatiempo: "
    },
    sections: {
      sobre: { title: "Trayectoria entre código y estrellas", lead: "" },
      projetos: {
        title: "Lo que construyo",
        lead: "Haz clic en cualquier tarjeta para ver los detalles técnicos."
      },
      trabalhos: {
        title: "Todo lo que hago en GitHub",
        lead: "Lista completa de mis repositorios — públicos y privados — con un breve resumen de cada uno. Haz clic en cualquier tarjeta para ver detalles."
      },
      pesquisa: {
        title: "Astronomía computacional",
        lead: "Proyectos de investigación en astrofísica computacional. Haz clic para expandir."
      },
      bolsas: {
        title: "Iniciación Científica e Investigación",
        lead: "Proyectos de beca y voluntariado en astrofísica computacional (de mi CV)."
      },
      curriculo: { title: "Currículum y Material", lead: "" },
      lattes: { title: "Plataforma Lattes (CNPq)", lead: "" },
      contato: { title: "Conectemos", lead: "Contáctame por el canal que prefieras." }
    },
    about: [
      "Soy estudiante de <strong>Ingeniería Informática</strong> en el <strong>Instituto Federal Fluminense (IFF)</strong>, campus Bom Jesus do Itabapoana — RJ, y becario de Iniciación Científica (<strong>PIBIC/CNPq</strong>). Mi investigación está en la frontera entre computación y astronomía: arqueología galáctica, poblaciones estelares y estructura de la Vía Láctea, con aprendizaje automático aplicado a datos del <em>Gaia</em> y de relevamientos complementarios.",
      "Del lado de la ingeniería, domino <strong>Python</strong> y <strong>C</strong>, redes de computadoras (certificaciones <strong>Cisco CCNA, CyberOps e IoT</strong>), administración de servidores Linux y desarrollo de software full-stack. Participo de la <strong>International Astronomy and Astrophysics Competition</strong> (IAAC 2024 y 2025) y presenté trabajos en eventos como FEBRACE, Mostratec, CONFICT y la Feria Brasileña de Iniciación Científica.",
      "Soy Técnico en Informática por el IFF (2020–2022), miembro del Centro de Representación Estudiantil y uno de los organizadores de la Semana de Computación, Ingeniería y Gestión del IFF."
    ],
    vis: {
      "público": "Público",
      privado: "Privado",
      planejamento: "En planificación",
      elaboracao: "En elaboración"
    },
    labels: {
      details: "Detalles",
      viewRepo: "↗ Ver repositorio en GitHub",
      noRepo: "Aún sin repositorio público"
    },
    cat: {
      software: "Software",
      pesquisa: "Investigación",
      academico: "Académico",
      pessoal: "Personal"
    },
    contactLabels: {
      email: "Correo",
      github: "GitHub",
      linkedin: "LinkedIn",
      scholar: "Google Scholar",
      orcid: "ORCID",
      lattes: "Lattes",
      instagram: "Instagram",
      site: "Sitio oficial",
      location: "Ubicación"
    },
    bolsas: { orientLabel: "Supervisor", periodLabel: "Período" },
    footer: "hecho con café, código y un cielo estrellado."
  },
  fr: {
    nav: [ "À propos", "Projets", "Travaux", "Recherche", "CV", "Lattes", "Contact" ],
    hero: {
      eyebrow: "Génie Informatique · Institut Fédéral Fluminense",
      sub: "Je développe des logiciels pour l'académie et utilise l'informatique pour comprendre le cosmos. Étudiant en génie informatique, boursier d'Initiation Scientifique (PIBIC/CNPq), à l'intersection des méthodes computationnelles et de l'astrophysique.",
      badges: [
        "🛰️ PIBIC / CNPq",
        "🏆 IAAC 2024 et 2025",
        "📡 CCNA · CyberOps · IoT",
        "🐧 Linux et Serveurs",
        "🔭 Astrophysique Computationnelle",
        "🤖 Apprentissage Automatique",
        "🪐 Gaia · GALAH",
        "📄 ORCID · Scholar"
      ],
      hobbyLabel: "Loisir : "
    },
    sections: {
      sobre: { title: "Parcours entre code et étoiles", lead: "" },
      projetos: {
        title: "Ce que je construis",
        lead: "Cliquez sur une carte pour révéler les détails techniques."
      },
      trabalhos: {
        title: "Tout ce que je fais sur GitHub",
        lead: "Liste complète de mes dépôts — publics et privés — avec un court résumé de chacun. Cliquez sur une carte pour les détails."
      },
      pesquisa: {
        title: "Astronomie computationnelle",
        lead: "Projets de recherche en astrophysique computationnelle. Cliquez pour déployer."
      },
      bolsas: {
        title: "Initiation Scientifique et Recherche",
        lead: "Projets de bourse et bénévoles en astrophysique computationnelle (issus de mon CV)."
      },
      curriculo: { title: "CV et Matériel", lead: "" },
      lattes: { title: "Plateforme Lattes (CNPq)", lead: "" },
      contato: { title: "Restons en contact", lead: "Joignez-moi par le canal de votre choix." }
    },
    about: [
      "Je suis étudiant en <strong>génie informatique</strong> à l'<strong>Institut Fédéral Fluminense (IFF)</strong>, campus Bom Jesus do Itabapoana — RJ, et boursier d'Initiation Scientifique (<strong>PIBIC/CNPq</strong>). Ma recherche se situe à la frontière de l'informatique et de l'astronomie : archéologie galactique, populations stellaires et structure de la Voie lactée, avec apprentissage automatique appliqué aux données du <em>Gaia</em> et de relevés complémentaires.",
      "Côté ingénierie, je maîtrise <strong>Python</strong> et <strong>C</strong>, les réseaux informatiques (certifications <strong>Cisco CCNA, CyberOps et IoT</strong>), l'administration de serveurs Linux et le développement logiciel full-stack. Je participe à l'<strong>International Astronomy and Astrophysics Competition</strong> (IAAC 2024 et 2025) et ai présenté des travaux lors d'événements comme FEBRACE, Mostratec, CONFICT et la Foire Brésilienne d'Initiation Scientifique.",
      "Je suis titulaire d'un diplôme technique en informatique de l'IFF (2020–2022), membre du Centre de Représentation Étudiante et l'un des organisateurs de la Semaine Informatique, Ingénierie et Gestion de l'IFF."
    ],
    vis: {
      "público": "Public",
      privado: "Privé",
      planejamento: "En projet",
      elaboracao: "En cours"
    },
    labels: {
      details: "Détails",
      viewRepo: "↗ Voir le dépôt sur GitHub",
      noRepo: "Pas encore de dépôt public"
    },
    cat: {
      software: "Logiciel",
      pesquisa: "Recherche",
      academico: "Académique",
      pessoal: "Personnel"
    },
    contactLabels: {
      email: "Courriel",
      github: "GitHub",
      linkedin: "LinkedIn",
      scholar: "Google Scholar",
      orcid: "ORCID",
      lattes: "Lattes",
      instagram: "Instagram",
      site: "Site officiel",
      location: "Localisation"
    },
    bolsas: { orientLabel: "Encadrant", periodLabel: "Période" },
    footer: "fait avec du café, du code et un ciel étoilé."
  }
};

window.PORTFOLIO_DATA = { FULL_NAME, ORCID, REPOS, FEATURED, RESEARCH, BOLSAS, CONTACTS, EXTRA, I18N };
