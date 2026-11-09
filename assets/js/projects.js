// Dados do portfólio — Pedro Henrique Rocha de Andrade (pedroiff0)
// Gerado por tools/build.py a partir de src/conteudo.md + src/traducoes.json (não editar à mão).

const FULL_NAME = "Pedro Henrique Rocha de Andrade";
const ORCID = "0009-0003-6724-4640";

const REPOS = [
  {
    name: "Zênite",
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
    tags: [ "Finance", "Full-stack", "Investments" ],
    brief: "Zênite (antes Finanças App), em desenvolvimento: aplicação web de controle financeiro pessoal com três módulos independentes (ligados/desligados por flag): Finanças (contas, categorias, lançamentos, recorrências, orçamentos por envelope, metas), Investimentos (carteira multi-corretora, preço médio ponderado, proventos, resultado realizado/não realizado) e Moto (manutenções, abastecimentos com km/l, gastos, custo por km, alertas de revisão). Backend Node/Express + MongoDB, frontend EJS SSR, autenticação JWT, validação Zod e boas práticas de segurança (Helmet, rate-limit, CSP). Deploy via Docker Compose.",
    image: "assets/media/financas/poster.webp",
    video: "assets/media/financas/tour.webm",
    status: "dev",
    resumo: "Finanças pessoais, investimentos e gestão de veículos em três módulos independentes.",
    i18n: {
      en: {
        brief: "Zênite (formerly Finanças App), in development: a personal finance web application with three independent modules (toggled on/off by flag): Finanças (accounts, categories, transactions, recurrences, envelope budgets, goals), Investimentos (multi-broker portfolio, weighted average price, dividends, realized/unrealized results) and Moto (maintenance, refueling with km/l, expenses, cost per km, service alerts). Node/Express + MongoDB backend, EJS SSR frontend, JWT authentication, Zod validation and security best practices (Helmet, rate-limit, CSP). Deployed via Docker Compose.",
        resumo: "Personal finance, investments and vehicle management in three independent modules."
      },
      es: {
        brief: "Zênite (antes Finanças App), en desarrollo: aplicación web de control financiero personal con tres módulos independientes (activados/desactivados por flag): Finanças (cuentas, categorías, movimientos, recurrencias, presupuestos por sobre, metas), Investimentos (cartera multicorredor, precio medio ponderado, proventos, resultado realizado/no realizado) y Moto (mantenimientos, repostajes con km/l, gastos, costo por km, alertas de revisión). Backend Node/Express + MongoDB, frontend EJS SSR, autenticación JWT, validación Zod y buenas prácticas de seguridad (Helmet, rate-limit, CSP). Despliegue con Docker Compose.",
        resumo: "Finanzas personales, inversiones y gestión de vehículos en tres módulos independientes."
      },
      fr: {
        brief: "Zênite (anciennement Finanças App), en développement : application web de gestion financière personnelle avec trois modules indépendants (activés/désactivés par flag) : Finanças (comptes, catégories, écritures, récurrences, budgets par enveloppe, objectifs), Investimentos (portefeuille multi-courtiers, prix moyen pondéré, revenus distribués, résultat réalisé/non réalisé) et Moto (entretiens, pleins avec km/l, dépenses, coût par km, alertes de révision). Backend Node/Express + MongoDB, frontend EJS SSR, authentification JWT, validation Zod et bonnes pratiques de sécurité (Helmet, rate-limit, CSP). Déploiement via Docker Compose.",
        resumo: "Finances personnelles, investissements et gestion de véhicules en trois modules indépendants."
      },
      it: {
        brief: "Zênite (in precedenza Finanças App), in sviluppo: applicazione web di gestione finanziaria personale con tre moduli indipendenti (attivati/disattivati tramite flag): Finanças (conti, categorie, movimenti, ricorrenze, budget a buste, obiettivi), Investimentos (portafoglio multi-broker, prezzo medio ponderato, proventi, risultato realizzato/non realizzato) e Moto (manutenzioni, rifornimenti con km/l, spese, costo per km, avvisi di revisione). Backend Node/Express + MongoDB, frontend EJS SSR, autenticazione JWT, validazione Zod e buone pratiche di sicurezza (Helmet, rate-limit, CSP). Deploy tramite Docker Compose.",
        resumo: "Finanze personali, investimenti e gestione dei veicoli in tre moduli indipendenti."
      },
      zh: {
        brief: "Zênite（原 Finanças App），开发中：个人财务管理 Web 应用，包含三个相互独立的模块（通过 flag 开启/关闭）：Finanças（账户、分类、流水、周期性交易、信封预算、目标）、Investimentos（多券商投资组合、加权平均价格、分红收益、已实现/未实现收益）和 Moto（保养、含 km/l 的加油记录、支出、每公里成本、保养提醒）。后端采用 Node/Express + MongoDB，前端为 EJS SSR，使用 JWT 认证、Zod 校验以及安全最佳实践（Helmet、rate-limit、CSP）。通过 Docker Compose 部署。",
        resumo: "个人财务、投资和车辆管理，分为三个相互独立的模块。"
      }
    }
  },
  {
    name: "Sistema Acadêmico",
    cat: "software",
    visibility: "privado",
    icon: "academic",
    repo: "https://github.com/pedroiff0/sistema-academico",
    stack: [ "Node.js", "Express", "MongoDB", "Mongoose", "EJS", "JWT", "Docker", "vis-network" ],
    tags: [ "Full-stack", "Education", "IFF" ],
    brief: "Web exclusivo para alunos do IFF acompanharem grade curricular (PPC), diário, notas, frequência, boletim/CR e planejamento. Multi-curso: Engenharia de Computação (Bom Jesus do Itabapoana) e Sistemas de Informação (Itaperuna). Fork do padrão de avaliações, com diário, ementário, grafo de dependências e API de ingestão por bot (Telegram). Deploy via Docker Compose + systemd.",
    image: "assets/media/sistema-academico/poster.webp",
    video: "assets/media/sistema-academico/tour.webm",
    open: "https://academico.phrandrade.com",
    resumo: "Diário, notas, frequência, boletim/CR e planejamento para alunos do IFF, em vários cursos.",
    i18n: {
      en: {
        brief: "Web system exclusively for IFF students to track their curriculum (PPC), class diary, grades, attendance, report card/CR and planning. Multi-course: Computer Engineering (Bom Jesus do Itabapoana) and Information Systems (Itaperuna). Fork of the Avaliações pattern, with diary, syllabus, dependency graph and a bot ingestion API (Telegram). Deployed via Docker Compose + systemd.",
        resumo: "Diary, grades, attendance, report card/CR and planning for IFF students, across multiple courses."
      },
      es: {
        brief: "Sistema web exclusivo para estudiantes del IFF para seguir el plan de estudios (PPC), diario, notas, asistencia, boletín/CR y planificación. Multicurso: Ingeniería de Computación (Bom Jesus do Itabapoana) y Sistemas de Información (Itaperuna). Fork del patrón de Avaliações, con diario, temario, grafo de dependencias y API de ingesta por bot (Telegram). Despliegue con Docker Compose + systemd.",
        resumo: "Diario, notas, asistencia, boletín/CR y planificación para estudiantes del IFF, en varios cursos."
      },
      fr: {
        brief: "Système web réservé aux étudiants de l'IFF pour suivre la grille curriculaire (PPC), le journal de classe, les notes, l'assiduité, le bulletin/CR et la planification. Multi-cursus : Ingénierie informatique (Bom Jesus do Itabapoana) et Systèmes d'information (Itaperuna). Fork du modèle Avaliações, avec journal, programme des cours, graphe de dépendances et API d'ingestion par bot (Telegram). Déploiement via Docker Compose + systemd.",
        resumo: "Journal, notes, assiduité, bulletin/CR et planification pour les étudiants de l'IFF, dans plusieurs cursus."
      },
      it: {
        brief: "Sistema web riservato agli studenti dell'IFF per seguire il piano di studi (PPC), il diario, i voti, la frequenza, la pagella/CR e la pianificazione. Multi-corso: Ingegneria Informatica (Bom Jesus do Itabapoana) e Sistemi Informativi (Itaperuna). Fork del modello Avaliações, con diario, programmi degli insegnamenti, grafo delle dipendenze e API di ingestione tramite bot (Telegram). Deploy tramite Docker Compose + systemd.",
        resumo: "Diario, voti, frequenza, pagella/CR e pianificazione per gli studenti dell'IFF, in più corsi."
      },
      zh: {
        brief: "专为 IFF 学生打造的 Web 系统，用于跟踪课程体系（PPC）、课堂日志、成绩、出勤、成绩单/CR 以及学习规划。支持多专业：计算机工程（Bom Jesus do Itabapoana）和信息系统（Itaperuna）。基于 Avaliações 模式的 fork，包含课堂日志、课程大纲、依赖关系图和机器人（Telegram）数据导入 API。通过 Docker Compose + systemd 部署。",
        resumo: "面向 IFF 学生的日志、成绩、出勤、成绩单/CR 和学习规划，支持多个专业。"
      }
    }
  },
  {
    name: "Sistema de Avaliações",
    cat: "software",
    visibility: "privado",
    icon: "quiz",
    repo: "https://github.com/pedroiff0/avaliacoes",
    stack: [ "Node.js", "Express", "MongoDB", "LaTeX", "EJS" ],
    tags: [ "EdTech", "LaTeX", "Exams" ],
    brief: "Plataforma base de provas/listas/trabalhos em PDF a partir de um banco de questões reutilizável, com geração real em LaTeX e múltiplas variantes (seleção/ordem aleatórias). Núcleo professor+admin.",
    image: "assets/media/avaliacoes/poster.webp",
    video: "assets/media/avaliacoes/tour.webm",
    status: "beta",
    resumo: "Provas, listas e trabalhos em PDF (LaTeX) a partir de um banco de questões reutilizável.",
    i18n: {
      en: {
        brief: "Base platform for exams/problem sets/assignments in PDF generated from a reusable question bank, with real LaTeX generation and multiple variants (random selection/order). Professor + admin core.",
        resumo: "Exams, problem sets and assignments in PDF (LaTeX) from a reusable question bank."
      },
      es: {
        brief: "Plataforma base de exámenes/listas/trabajos en PDF a partir de un banco de preguntas reutilizable, con generación real en LaTeX y múltiples variantes (selección/orden aleatorios). Núcleo profesor+admin.",
        resumo: "Exámenes, listas y trabajos en PDF (LaTeX) a partir de un banco de preguntas reutilizable."
      },
      fr: {
        brief: "Plateforme de base pour générer des examens/listes d'exercices/travaux en PDF à partir d'une banque de questions réutilisable, avec génération réelle en LaTeX et plusieurs variantes (sélection/ordre aléatoires). Noyau professeur+admin.",
        resumo: "Examens, listes d'exercices et travaux en PDF (LaTeX) à partir d'une banque de questions réutilisable."
      },
      it: {
        brief: "Piattaforma di base per generare prove/liste di esercizi/elaborati in PDF a partire da una banca di domande riutilizzabile, con generazione reale in LaTeX e più varianti (selezione/ordine casuali). Nucleo docente+admin.",
        resumo: "Prove, liste di esercizi ed elaborati in PDF (LaTeX) a partire da una banca di domande riutilizzabile."
      },
      zh: {
        brief: "基于可复用题库生成 PDF 试卷/习题集/作业的基础平台，采用真正的 LaTeX 生成，并支持多种变体（随机选题/随机排序）。核心为教师+管理员角色。",
        resumo: "基于可复用题库生成 PDF（LaTeX）试卷、习题集和作业。"
      }
    }
  },
  {
    name: "Avaliações Professores",
    cat: "software",
    visibility: "privado",
    icon: "teacher",
    repo: "https://github.com/pedroiff0/avaliacoes-professores",
    stack: [ "Node.js", "Express", "MongoDB", "LaTeX" ],
    tags: [ "EdTech", "Question Bank", "Collaborative" ],
    brief: "Fork do Sistema de Avaliações com banco pessoal + banco global compartilhado (fork de questões entre professores), PDF por pool com peso e gabarito opcional.",
    image: "assets/media/avaliacoes-professores/poster.webp",
    video: "assets/media/avaliacoes-professores/tour.webm",
    resumo: "Versão para professores, com banco pessoal e global e compartilhamento de questões.",
    i18n: {
      en: {
        brief: "Fork of Sistema de Avaliações with a personal question bank + a shared global bank (question forking between professors), PDF per pool with weights and optional answer key.",
        resumo: "Version for professors, with a personal and a global bank and question sharing."
      },
      es: {
        brief: "Fork del Sistema de Avaliações con banco personal + banco global compartido (fork de preguntas entre profesores), PDF por pool con peso y clave de respuestas opcional.",
        resumo: "Versión para profesores, con banco personal y global y compartición de preguntas."
      },
      fr: {
        brief: "Fork du Sistema de Avaliações avec banque personnelle + banque globale partagée (fork de questions entre professeurs), PDF par pool avec pondération et corrigé optionnel.",
        resumo: "Version pour les professeurs, avec banque personnelle et globale et partage de questions."
      },
      it: {
        brief: "Fork del Sistema de Avaliações con banca personale + banca globale condivisa (fork delle domande tra docenti), PDF per pool con peso e griglia di correzione opzionale.",
        resumo: "Versione per i docenti, con banca personale e globale e condivisione delle domande."
      },
      zh: {
        brief: "Sistema de Avaliações 的 fork，包含个人题库 + 共享全局题库（教师之间可 fork 题目），按题池生成带权重的 PDF，并可选附带参考答案。",
        resumo: "面向教师的版本，提供个人题库和全局题库，并支持题目共享。"
      }
    }
  },
  {
    name: "Avaliações Concurseiro",
    cat: "software",
    visibility: "privado",
    icon: "exam",
    repo: "https://github.com/pedroiff0/avaliacoes-concurseiro",
    stack: [ "Node.js", "Express", "MongoDB", "Expo", "LaTeX" ],
    tags: [ "EdTech", "Mobile", "Gamification" ],
    brief: "Fork focado em concurseiros: banco de MCQ, trilhas por edital, cronograma maleável, Pomodoro, simulados em PDF e app mobile Expo com paridade total de funcionalidades.",
    image: "assets/media/avaliacoes-concurseiro/poster.webp",
    video: "assets/media/avaliacoes-concurseiro/tour.webm",
    resumo: "Versão para concursos: trilhas por edital, simulados, Pomodoro e app mobile.",
    i18n: {
      en: {
        brief: "Fork focused on civil-service exam candidates (concurseiros): MCQ bank, tracks by exam notice, flexible schedule, Pomodoro, PDF mock exams and an Expo mobile app with full feature parity.",
        resumo: "Version for civil-service exams: tracks by exam notice, mock exams, Pomodoro and mobile app."
      },
      es: {
        brief: "Fork enfocado en opositores (concurseiros): banco de MCQ, rutas por convocatoria, cronograma flexible, Pomodoro, simulacros en PDF y app móvil Expo con paridad total de funcionalidades.",
        resumo: "Versión para oposiciones: rutas por convocatoria, simulacros, Pomodoro y app móvil."
      },
      fr: {
        brief: "Fork axé sur les candidats aux concours (concurseiros) : banque de QCM, parcours par appel à candidatures, planning flexible, Pomodoro, examens blancs en PDF et application mobile Expo avec parité fonctionnelle totale.",
        resumo: "Version pour les concours : parcours par appel à candidatures, examens blancs, Pomodoro et application mobile."
      },
      it: {
        brief: "Fork orientato ai candidati ai concorsi pubblici (concurseiros): banca di quiz a risposta multipla, percorsi per bando, cronoprogramma flessibile, Pomodoro, simulazioni in PDF e app mobile Expo con piena parità di funzionalità.",
        resumo: "Versione per i concorsi pubblici: percorsi per bando, simulazioni, Pomodoro e app mobile."
      },
      zh: {
        brief: "面向公务员考试备考者（concurseiros）的 fork：选择题题库、按考试公告划分的学习路径、灵活的日程安排、Pomodoro、PDF 模拟考试，以及功能完全对等的 Expo 移动应用。",
        resumo: "面向公务员考试的版本：按考试公告划分的学习路径、模拟考试、Pomodoro 和移动应用。"
      }
    }
  },
  {
    name: "Portal Acadêmico IFF (academicoWeb)",
    cat: "software",
    visibility: "privado",
    icon: "web",
    repo: "https://github.com/pedroiff0/academico-web",
    stack: [ "Python", "Flask", "Jinja2", "Scraping" ],
    tags: [ "Web App", "IFF", "Scraping" ],
    brief: "Sistema web que acessava os dados acadêmicos do IFF com as credenciais oficiais — dashboard, diário, material de aula, boletim e histórico escolar — via scraping. Arquivado: a migração do IFF para o SUAP torna a abordagem original obsoleta, e o Sistema Acadêmico o sucede. A técnica de scraping fica registrada como referência técnica (possível tema de TCC).",
    image: "assets/media/academicoweb/poster.webp",
    video: "assets/media/academicoweb/tour.webm",
    resumo: "Portal que lia os dados do IFF por scraping; arquivado e sucedido pelo Sistema Acadêmico.",
    i18n: {
      en: {
        brief: "Web system that accessed IFF academic data with the official credentials — dashboard, class diary, course materials, report card and academic transcript — via scraping. Archived: the IFF's migration to SUAP makes the original approach obsolete, and Sistema Acadêmico succeeds it. The scraping technique is kept on record as a technical reference (possible undergraduate thesis topic).",
        resumo: "Portal that read IFF data via scraping; archived and succeeded by Sistema Acadêmico."
      },
      es: {
        brief: "Sistema web que accedía a los datos académicos del IFF con las credenciales oficiales — panel, diario, material de clase, boletín e historial académico — mediante scraping. Archivado: la migración del IFF a SUAP vuelve obsoleto el enfoque original, y el Sistema Acadêmico lo sucede. La técnica de scraping queda registrada como referencia técnica (posible tema de TCC).",
        resumo: "Portal que leía los datos del IFF mediante scraping; archivado y sucedido por el Sistema Acadêmico."
      },
      fr: {
        brief: "Système web qui accédait aux données académiques de l'IFF avec les identifiants officiels — tableau de bord, journal de classe, supports de cours, bulletin et relevé de notes — par scraping. Archivé : la migration de l'IFF vers SUAP rend l'approche d'origine obsolète, et le Sistema Acadêmico lui succède. La technique de scraping est conservée comme référence technique (sujet possible de mémoire de fin d'études).",
        resumo: "Portail qui lisait les données de l'IFF par scraping ; archivé et remplacé par le Sistema Acadêmico."
      },
      it: {
        brief: "Sistema web che accedeva ai dati accademici dell'IFF con le credenziali ufficiali — dashboard, diario, materiale didattico, pagella e storico degli studi — tramite scraping. Archiviato: la migrazione dell'IFF a SUAP rende obsoleto l'approccio originale, e il Sistema Acadêmico ne è il successore. La tecnica di scraping resta documentata come riferimento tecnico (possibile tema per la tesi di laurea).",
        resumo: "Portale che leggeva i dati dell'IFF tramite scraping; archiviato e sostituito dal Sistema Acadêmico."
      },
      zh: {
        brief: "通过官方凭据以网页抓取（scraping）方式访问 IFF 学业数据的 Web 系统——包括仪表盘、课堂日志、课程资料、成绩单和学业历史记录。已归档：IFF 迁移到 SUAP 使原有方案过时，由 Sistema Acadêmico 接替。抓取技术作为技术参考保留（可能成为毕业论文选题）。",
        resumo: "通过网页抓取读取 IFF 数据的门户；已归档，由 Sistema Acadêmico 接替。"
      }
    }
  },
  {
    name: "ReLaTeX",
    cat: "software",
    visibility: "privado",
    icon: "latex",
    repo: "https://github.com/pedroiff0/relatex",
    stack: [ "Docker", "Node.js", "MongoDB", "Redis", "Pug", "LaTeX" ],
    tags: [ "LaTeX", "Self-hosted", "IFF" ],
    brief: "Fork do Overleaf Community Edition com identidade do IFF: classes oficiais embutidas (ifftese/iffposter), tema azul, landing própria e 10 botões extras no editor. Self-hosted via Docker (web+mongo+redis). É também um projeto de extensão: leva à comunidade do IFF um ambiente LaTeX pronto, com as classes institucionais (ifftese, iffartigo, iffposter, iffslides) que automatizam as normas da ABNT e do IBGE, apresentado no CONEPE 2026 (XIII Congresso de Ensino, Pesquisa e Extensão).",
    image: "assets/media/relatex/poster.webp",
    video: "assets/media/relatex/tour.webm",
    open: "https://relatex.phrandrade.com",
    status: "ext",
    resumo: "Overleaf self-hosted com as classes oficiais do IFF; projeto de extensão para a comunidade acadêmica.",
    i18n: {
      en: {
        brief: "Fork of Overleaf Community Edition with IFF branding: built-in official classes (ifftese/iffposter), blue theme, custom landing page and 10 extra buttons in the editor. Self-hosted via Docker (web+mongo+redis). It is also an outreach project: it brings the IFF community a ready-to-use LaTeX environment, with the institutional classes (ifftese, iffartigo, iffposter, iffslides) that automate ABNT and IBGE standards, presented at CONEPE 2026 (XIII Congress of Teaching, Research and Extension).",
        resumo: "Self-hosted Overleaf with the official IFF classes; an outreach project for the academic community."
      },
      es: {
        brief: "Fork de Overleaf Community Edition con identidad del IFF: clases oficiales integradas (ifftese/iffposter), tema azul, landing propia y 10 botones adicionales en el editor. Autoalojado con Docker (web+mongo+redis). Es también un proyecto de extensión: lleva a la comunidad del IFF un entorno LaTeX listo para usar, con las clases institucionales (ifftese, iffartigo, iffposter, iffslides) que automatizan las normas de la ABNT y del IBGE, presentado en el CONEPE 2026 (XIII Congreso de Enseñanza, Investigación y Extensión).",
        resumo: "Overleaf autoalojado con las clases oficiales del IFF; proyecto de extensión para la comunidad académica."
      },
      fr: {
        brief: "Fork d'Overleaf Community Edition aux couleurs de l'IFF : classes officielles intégrées (ifftese/iffposter), thème bleu, page d'accueil dédiée et 10 boutons supplémentaires dans l'éditeur. Auto-hébergé via Docker (web+mongo+redis). C'est aussi un projet d'extension : il met à disposition de la communauté de l'IFF un environnement LaTeX prêt à l'emploi, avec les classes institutionnelles (ifftese, iffartigo, iffposter, iffslides) qui automatisent les normes de l'ABNT et de l'IBGE, présenté au CONEPE 2026 (XIII Congrès d'Enseignement, de Recherche et d'Extension).",
        resumo: "Overleaf auto-hébergé avec les classes officielles de l'IFF ; projet d'extension pour la communauté académique."
      },
      it: {
        brief: "Fork di Overleaf Community Edition con l'identità dell'IFF: classi ufficiali integrate (ifftese/iffposter), tema blu, landing dedicata e 10 pulsanti extra nell'editor. Self-hosted tramite Docker (web+mongo+redis). È anche un progetto di extension: porta alla comunità dell'IFF un ambiente LaTeX pronto all'uso, con le classi istituzionali (ifftese, iffartigo, iffposter, iffslides) che automatizzano le norme ABNT e IBGE, presentato al CONEPE 2026 (XIII Congresso di Insegnamento, Ricerca ed Estensione).",
        resumo: "Overleaf self-hosted con le classi ufficiali dell'IFF; progetto di extension per la comunità accademica."
      },
      zh: {
        brief: "Overleaf Community Edition 的 fork，采用 IFF 品牌标识：内置官方文档类（ifftese/iffposter）、蓝色主题、专属落地页以及编辑器中的 10 个额外按钮。通过 Docker 自托管（web+mongo+redis）。它同时也是一个推广服务项目：为 IFF 社区提供开箱即用的 LaTeX 环境，内置可自动遵循 ABNT 和 IBGE 规范的机构文档类（ifftese、iffartigo、iffposter、iffslides），并在 CONEPE 2026（第十三届教学、科研与推广大会）上展示。",
        resumo: "自托管的 Overleaf，内置 IFF 官方文档类；面向学术社区的推广服务项目。"
      }
    }
  },
  {
    name: "Verdementa",
    cat: "software",
    visibility: "privado",
    icon: "leaf",
    repo: "https://github.com/pedroiff0/verdementa",
    stack: [ "Meta-repo", "Python", "PowerShell" ],
    tags: [ "Business", "ERP" ],
    brief: "Meta-repositório que agrupa Caixas, ControleEstoque, LevantamentoEstoque e Planilhador — suíte de ferramentas comerciais.",
    image: "assets/media/verdementa/poster.webp",
    video: "assets/media/verdementa/tour.webm",
    resumo: "Suíte de ferramentas comerciais: caixa, estoque e planilhas.",
    i18n: {
      en: {
        brief: "Meta-repository that groups Caixas, ControleEstoque, LevantamentoEstoque and Planilhador — a suite of commercial tools.",
        resumo: "A suite of business tools: cash register, inventory and spreadsheets."
      },
      es: {
        brief: "Metarrepositorio que agrupa Caixas, ControleEstoque, LevantamentoEstoque y Planilhador: una suite de herramientas comerciales.",
        resumo: "Suite de herramientas comerciales: caja, inventario y hojas de cálculo."
      },
      fr: {
        brief: "Méta-dépôt qui regroupe Caixas, ControleEstoque, LevantamentoEstoque et Planilhador — une suite d'outils commerciaux.",
        resumo: "Suite d'outils commerciaux : caisse, stock et feuilles de calcul."
      },
      it: {
        brief: "Meta-repository che raggruppa Caixas, ControleEstoque, LevantamentoEstoque e Planilhador: una suite di strumenti commerciali.",
        resumo: "Suite di strumenti commerciali: cassa, magazzino e fogli di calcolo."
      },
      zh: {
        brief: "元仓库，汇集 Caixas、ControleEstoque、LevantamentoEstoque 和 Planilhador——一套商业工具套件。",
        resumo: "商业工具套件:收银、库存和电子表格。"
      }
    }
  },
  {
    name: "Caixas",
    cat: "software",
    visibility: "privado",
    icon: "cash",
    repo: "https://github.com/pedroiff0/caixas",
    stack: [ "Python", "Flask", "SQLAlchemy", "Alembic", "Jinja2", "AdminLTE" ],
    tags: [ "Cash Flow", "Reports" ],
    brief: "Aplicação web para registrar fechamentos diários de caixa (vendas, depósitos, vales, total contado na gaveta), gerar relatórios e manter histórico imprimível. Flask + SQLAlchemy + Alembic, com endpoints REST auxiliares e migrations versionadas em CI.",
    image: "assets/media/caixas/poster.webp",
    video: "assets/media/caixas/tour.webm",
    resumo: "Fechamentos diários de caixa, relatórios e histórico imprimível.",
    i18n: {
      en: {
        brief: "Web application for recording daily cash register closings (sales, deposits, vouchers, total counted in the drawer), generating reports and keeping a printable history. Flask + SQLAlchemy + Alembic, with auxiliary REST endpoints and versioned migrations in CI.",
        resumo: "Daily cash register closings, reports and printable history."
      },
      es: {
        brief: "Aplicación web para registrar los cierres diarios de caja (ventas, depósitos, vales, total contado en el cajón), generar informes y mantener un historial imprimible. Flask + SQLAlchemy + Alembic, con endpoints REST auxiliares y migraciones versionadas en CI.",
        resumo: "Cierres diarios de caja, informes e historial imprimible."
      },
      fr: {
        brief: "Application web pour enregistrer les clôtures de caisse quotidiennes (ventes, dépôts, bons, total compté dans le tiroir), générer des rapports et conserver un historique imprimable. Flask + SQLAlchemy + Alembic, avec des endpoints REST auxiliaires et des migrations versionnées en CI.",
        resumo: "Clôtures de caisse quotidiennes, rapports et historique imprimable."
      },
      it: {
        brief: "Applicazione web per registrare le chiusure giornaliere di cassa (vendite, versamenti, buoni, totale contato nel cassetto), generare report e mantenere uno storico stampabile. Flask + SQLAlchemy + Alembic, con endpoint REST ausiliari e migrazioni versionate in CI.",
        resumo: "Chiusure giornaliere di cassa, report e storico stampabile."
      },
      zh: {
        brief: "用于记录每日收银结账(销售、存款、代金券、抽屉中清点的总额)、生成报表并保留可打印历史记录的 Web 应用。Flask + SQLAlchemy + Alembic,配有辅助 REST endpoints,并在 CI 中进行版本化 migrations。",
        resumo: "每日收银结账、报表和可打印的历史记录。"
      }
    }
  },
  {
    name: "ControleEstoque",
    cat: "software",
    visibility: "privado",
    icon: "box",
    repo: "https://github.com/pedroiff0/controle-estoque",
    stack: [ "Python", "CI", "CSV/PDF" ],
    tags: [ "Inventory", "Reports" ],
    brief: "Aplicação para contagem rápida de inventário, com persistência de sessão, consolidação de contagens e geração de relatórios em CSV/PDF.",
    image: "assets/media/controle-estoque/poster.webp",
    video: "assets/media/controle-estoque/tour.webm",
    resumo: "Contagem rápida de inventário com relatórios em CSV e PDF.",
    i18n: {
      en: {
        brief: "Application for quick inventory counting, with session persistence, consolidation of counts and generation of CSV/PDF reports.",
        resumo: "Quick inventory counting with CSV and PDF reports."
      },
      es: {
        brief: "Aplicación para el conteo rápido de inventario, con persistencia de sesión, consolidación de conteos y generación de informes en CSV/PDF.",
        resumo: "Conteo rápido de inventario con informes en CSV y PDF."
      },
      fr: {
        brief: "Application de comptage rapide d'inventaire, avec persistance de session, consolidation des comptages et génération de rapports CSV/PDF.",
        resumo: "Comptage rapide d'inventaire avec rapports CSV et PDF."
      },
      it: {
        brief: "Applicazione per il conteggio rapido dell'inventario, con persistenza di sessione, consolidamento dei conteggi e generazione di report in CSV/PDF.",
        resumo: "Conteggio rapido dell'inventario con report in CSV e PDF."
      },
      zh: { brief: "用于快速盘点库存的应用,支持会话持久化、盘点结果合并以及生成 CSV/PDF 报表。", resumo: "快速库存盘点,提供 CSV 和 PDF 报表。" }
    }
  },
  {
    name: "LevantamentoEstoque",
    cat: "software",
    visibility: "privado",
    icon: "box",
    repo: "https://github.com/pedroiff0/levantamento-estoque",
    stack: [ "Python", "CI", "PDF" ],
    tags: [ "Inventory", "PDF" ],
    brief: "Sistema de levantamento de estoque por cor/tamanho, com persistência de sessão, extração de dados de PDF e geração de relatórios — voltado a itens de compra repetida.",
    image: "assets/media/levantamento-estoque/poster.webp",
    video: "assets/media/levantamento-estoque/tour.webm",
    resumo: "Levantamento de estoque por cor e tamanho, com extração de dados de PDF.",
    i18n: {
      en: {
        brief: "Stock survey system by color/size, with session persistence, PDF data extraction and report generation — aimed at repeat-purchase items.",
        resumo: "Stock survey by color and size, with PDF data extraction."
      },
      es: {
        brief: "Sistema de levantamiento de inventario por color/talla, con persistencia de sesión, extracción de datos de PDF y generación de informes — orientado a artículos de compra recurrente.",
        resumo: "Levantamiento de inventario por color y talla, con extracción de datos de PDF."
      },
      fr: {
        brief: "Système de relevé de stock par couleur/taille, avec persistance de session, extraction de données depuis des PDF et génération de rapports — destiné aux articles d'achat répété.",
        resumo: "Relevé de stock par couleur et taille, avec extraction de données depuis des PDF."
      },
      it: {
        brief: "Sistema di rilevamento delle scorte per colore/taglia, con persistenza di sessione, estrazione di dati da PDF e generazione di report — pensato per articoli di acquisto ricorrente.",
        resumo: "Rilevamento delle scorte per colore e taglia, con estrazione di dati da PDF."
      },
      zh: {
        brief: "按颜色/尺码进行库存盘点的系统,支持会话持久化、从 PDF 中提取数据以及生成报表——面向重复采购的商品。",
        resumo: "按颜色和尺码进行库存盘点,支持从 PDF 中提取数据。"
      }
    }
  },
  {
    name: "Planilhador",
    cat: "software",
    visibility: "privado",
    icon: "table",
    repo: "https://github.com/pedroiff0/planilhador",
    stack: [ "Python", "CI", "XML/NFCe" ],
    tags: [ "NFC-e", "Spreadsheets" ],
    brief: "Ferramentas para processar XMLs de NFCe e gerar relatórios/planilhas automatizados.",
    image: "assets/media/planilhador/poster.webp",
    video: "assets/media/planilhador/tour.webm",
    resumo: "Processa XMLs de NFC-e e gera planilhas e relatórios automáticos.",
    i18n: {
      en: {
        brief: "Tools for processing NFCe XMLs and generating automated reports/spreadsheets.",
        resumo: "Processes NFC-e XMLs and generates spreadsheets and reports automatically."
      },
      es: {
        brief: "Herramientas para procesar XML de NFCe y generar informes/hojas de cálculo automatizados.",
        resumo: "Procesa XML de NFC-e y genera hojas de cálculo e informes automáticamente."
      },
      fr: {
        brief: "Outils de traitement des XML de NFCe et de génération automatisée de rapports/feuilles de calcul.",
        resumo: "Traite les XML de NFC-e et génère automatiquement des feuilles de calcul et des rapports."
      },
      it: {
        brief: "Strumenti per elaborare gli XML delle NFCe e generare report/fogli di calcolo automatizzati.",
        resumo: "Elabora gli XML delle NFC-e e genera automaticamente fogli di calcolo e report."
      },
      zh: { brief: "用于处理 NFCe XML 并自动生成报表/电子表格的工具。", resumo: "处理 NFC-e XML,并自动生成电子表格和报表。" }
    }
  },
  {
    name: "Projeto Profissional (template)",
    cat: "software",
    visibility: "público",
    icon: "web",
    repo: "https://github.com/pedroiff0/projeto-profissional",
    stack: [ "Node.js 20", "Express", "MongoDB", "Mongoose", "EJS", "JWT", "Zod", "Jest", "Docker" ],
    tags: [ "Template", "Security", "Open Source" ],
    brief: "Template base endurecido para iniciar qualquer aplicação web Node: autenticação JWT, papéis admin/user, registro controlado pelo admin (sem autocadastro), CSP sem inline, rate limit, CSRF guard, validação Zod e suíte Jest+Supertest desde o primeiro commit. Docker Compose com app não-root e filesystem read-only.",
    image: "assets/media/projeto-profissional/poster.webp",
    video: "assets/media/projeto-profissional/tour.webm",
    resumo: "Template Node/Express + MongoDB com autenticação, papéis e segurança desde o primeiro commit.",
    i18n: {
      en: {
        brief: "Hardened base template for starting any Node web application: JWT authentication, admin/user roles, admin-controlled registration (no self-signup), CSP without inline, rate limiting, CSRF guard, Zod validation and a Jest+Supertest suite from the very first commit. Docker Compose with a non-root app and read-only filesystem.",
        resumo: "Node/Express + MongoDB template with authentication, roles and security from the first commit."
      },
      es: {
        brief: "Plantilla base reforzada para iniciar cualquier aplicación web Node: autenticación JWT, roles admin/user, registro controlado por el admin (sin autorregistro), CSP sin inline, rate limit, CSRF guard, validación Zod y suite Jest+Supertest desde el primer commit. Docker Compose con la app sin privilegios de root y sistema de archivos de solo lectura.",
        resumo: "Plantilla Node/Express + MongoDB con autenticación, roles y seguridad desde el primer commit."
      },
      fr: {
        brief: "Modèle de base durci pour démarrer toute application web Node : authentification JWT, rôles admin/user, inscription contrôlée par l'admin (pas d'auto-inscription), CSP sans inline, rate limit, CSRF guard, validation Zod et suite Jest+Supertest dès le premier commit. Docker Compose avec une application non-root et un système de fichiers en lecture seule.",
        resumo: "Modèle Node/Express + MongoDB avec authentification, rôles et sécurité dès le premier commit."
      },
      it: {
        brief: "Template di base rafforzato per avviare qualsiasi applicazione web Node: autenticazione JWT, ruoli admin/user, registrazione controllata dall'admin (senza auto-registrazione), CSP senza inline, rate limit, CSRF guard, validazione Zod e suite Jest+Supertest fin dal primo commit. Docker Compose con app non-root e filesystem in sola lettura.",
        resumo: "Template Node/Express + MongoDB con autenticazione, ruoli e sicurezza fin dal primo commit."
      },
      zh: {
        brief: "用于启动任何 Node Web 应用的加固型基础模板:JWT 认证、admin/user 角色、由管理员控制的注册(不支持自助注册)、无 inline 的 CSP、rate limit、CSRF guard、Zod 校验,以及从第一次 commit 起就具备的 Jest+Supertest 测试套件。Docker Compose 以非 root 用户运行应用,并使用只读文件系统。",
        resumo: "Node/Express + MongoDB 模板,从第一次 commit 起就具备认证、角色和安全机制。"
      }
    }
  },
  {
    name: "awesome-skills",
    cat: "software",
    visibility: "público",
    icon: "book",
    repo: "https://github.com/pedroiff0/awesome-skills",
    stack: [ "Markdown", "YAML", "Python", "Hermes Agent" ],
    tags: [ "AI", "Agents", "Open Source" ],
    brief: "Coleção pessoal de skills (memória procedural) para o agente Hermes — 102 skills em 32 categorias, cada uma com SKILL.md (frontmatter YAML + instruções) e, opcionalmente, references/, scripts/ e templates/. Índice do README gerado por script; cobre de manutenção de sites Quartz e i18n a MLOps, LaTeX e automação de desktop.",
    image: "assets/media/awesome-skills/poster.webp",
    video: "assets/media/awesome-skills/tour.webm",
    resumo: "Biblioteca de skills, agentes e plugins reutilizáveis para agentes de IA.",
    i18n: {
      en: {
        brief: "Personal collection of skills (procedural memory) for the Hermes agent — 102 skills in 32 categories, each with SKILL.md (YAML frontmatter + instructions) and, optionally, references/, scripts/ and templates/. README index generated by script; covers everything from Quartz site maintenance and i18n to MLOps, LaTeX and desktop automation.",
        resumo: "Library of reusable skills, agents and plugins for AI agents."
      },
      es: {
        brief: "Colección personal de skills (memoria procedimental) para el agente Hermes — 102 skills en 32 categorías, cada una con SKILL.md (frontmatter YAML + instrucciones) y, opcionalmente, references/, scripts/ y templates/. Índice del README generado por script; abarca desde el mantenimiento de sitios Quartz e i18n hasta MLOps, LaTeX y automatización de escritorio.",
        resumo: "Biblioteca de skills, agentes y plugins reutilizables para agentes de IA."
      },
      fr: {
        brief: "Collection personnelle de skills (mémoire procédurale) pour l'agent Hermes — 102 skills répartis en 32 catégories, chacun avec un SKILL.md (frontmatter YAML + instructions) et, éventuellement, references/, scripts/ et templates/. Index du README généré par script ; couvre de la maintenance de sites Quartz et de l'i18n au MLOps, au LaTeX et à l'automatisation du bureau.",
        resumo: "Bibliothèque de skills, d'agents et de plugins réutilisables pour agents d'IA."
      },
      it: {
        brief: "Raccolta personale di skill (memoria procedurale) per l'agente Hermes — 102 skill in 32 categorie, ciascuna con SKILL.md (frontmatter YAML + istruzioni) e, facoltativamente, references/, scripts/ e templates/. Indice del README generato tramite script; copre dalla manutenzione di siti Quartz e i18n a MLOps, LaTeX e automazione del desktop.",
        resumo: "Libreria di skill, agenti e plugin riutilizzabili per agenti di IA."
      },
      zh: {
        brief: "为 Hermes 智能体打造的个人 skills(程序性记忆)合集——32 个类别共 102 个 skills,每个都包含 SKILL.md(YAML frontmatter + 说明),并可选包含 references/、scripts/ 和 templates/。README 索引由脚本生成;涵盖从 Quartz 站点维护和 i18n,到 MLOps、LaTeX 和桌面自动化等内容。",
        resumo: "面向 AI 智能体的可复用 skills、智能体和插件库。"
      }
    }
  },
  {
    name: "meu-setup",
    cat: "software",
    visibility: "público",
    icon: "box",
    repo: "https://github.com/pedroiff0/meu-setup",
    stack: [ "Python", "YAML", "Bash", "PowerShell", "apt/dnf/pacman/zypper", "winget", "Homebrew" ],
    tags: [ "Dotfiles", "Linux", "Open Source" ],
    brief: "Mapa de todos os programas que uso (Linux, Windows e macOS) com instaladores automáticos e uma única fonte de verdade: packages.yaml. O instalador Linux detecta a distro (apt/dnf/pacman/zypper), é idempotente e tem cadeia de fallback (nativo → flatpak → snap → script oficial). Um gerador produz install.ps1, install.sh e o inventário; o bootstrap repopula a máquina do zero com um comando.",
    image: "assets/media/meu-setup/poster.webp",
    video: "assets/media/meu-setup/tour.webm",
    resumo: "Mapa dos programas que uso e instalador automático para repopular a máquina.",
    i18n: {
      en: {
        brief: "Map of all the programs I use (Linux, Windows and macOS) with automatic installers and a single source of truth: packages.yaml. The Linux installer detects the distro (apt/dnf/pacman/zypper), is idempotent and has a fallback chain (native → flatpak → snap → official script). A generator produces install.ps1, install.sh and the inventory; the bootstrap repopulates the machine from scratch with a single command.",
        resumo: "Map of the programs I use and an automatic installer to repopulate the machine."
      },
      es: {
        brief: "Mapa de todos los programas que uso (Linux, Windows y macOS) con instaladores automáticos y una única fuente de verdad: packages.yaml. El instalador de Linux detecta la distro (apt/dnf/pacman/zypper), es idempotente y tiene una cadena de fallback (nativo → flatpak → snap → script oficial). Un generador produce install.ps1, install.sh y el inventario; el bootstrap repuebla la máquina desde cero con un solo comando.",
        resumo: "Mapa de los programas que uso e instalador automático para repoblar la máquina."
      },
      fr: {
        brief: "Cartographie de tous les programmes que j'utilise (Linux, Windows et macOS) avec des installateurs automatiques et une source de vérité unique : packages.yaml. L'installateur Linux détecte la distribution (apt/dnf/pacman/zypper), est idempotent et dispose d'une chaîne de repli (natif → flatpak → snap → script officiel). Un générateur produit install.ps1, install.sh et l'inventaire ; le bootstrap repeuple la machine de zéro en une seule commande.",
        resumo: "Cartographie des programmes que j'utilise et installateur automatique pour repeupler la machine."
      },
      it: {
        brief: "Mappa di tutti i programmi che uso (Linux, Windows e macOS) con installer automatici e un'unica fonte di verità: packages.yaml. L'installer Linux rileva la distro (apt/dnf/pacman/zypper), è idempotente e ha una catena di fallback (nativo → flatpak → snap → script ufficiale). Un generatore produce install.ps1, install.sh e l'inventario; il bootstrap ripopola la macchina da zero con un solo comando.",
        resumo: "Mappa dei programmi che uso e installer automatico per ripopolare la macchina."
      },
      zh: {
        brief: "我使用的所有程序(Linux、Windows 和 macOS)的清单,配有自动安装程序和唯一的事实来源:packages.yaml。Linux 安装程序可检测发行版(apt/dnf/pacman/zypper),具备幂等性,并带有回退链(原生 → flatpak → snap → 官方脚本)。生成器会产出 install.ps1、install.sh 和清单;bootstrap 只需一条命令即可从零重新配置整台机器。",
        resumo: "我所使用程序的清单,以及用于重新配置整台机器的自动安装程序。"
      }
    }
  },
  {
    name: "anomaly-detection",
    cat: "pesquisa",
    visibility: "privado",
    icon: "star",
    repo: "https://github.com/pedroiff0/anomaly-detection",
    stack: [ "Python", "Astropy", "NumPy", "Pandas", "ML", "Jupyter" ],
    tags: [ "PIBIC/CNPq", "Gaia", "Machine Learning" ],
    brief: "Análise das propriedades estelares e composição química das estrelas próximas do GCNS observadas pelo GALAH DR4 (Gaia DR3 + GALAH DR4). Bolsa PIBIC/CNPq; co-autoria PUC Chile (Dra. M. L. L. Dantas, Dra. A. C. Soja).",
    image: "assets/media/anomalyviewer/poster.webp",
    video: "assets/media/anomalyviewer/tour.webm",
    resumo: "Aprendizado de máquina para achar estrelas anômalas no GALAH DR4 + Gaia DR3 (PIBIC/CNPq).",
    i18n: {
      en: {
        brief: "Analysis of the stellar properties and chemical composition of stars in the GCNS observed by GALAH DR4 (Gaia DR3 + GALAH DR4). PIBIC/CNPq scholarship; co-authored with PUC Chile (Dr. M. L. L. Dantas, Dr. A. C. Soja).",
        resumo: "Machine learning to find anomalous stars in GALAH DR4 + Gaia DR3 (PIBIC/CNPq)."
      },
      es: {
        brief: "Análisis de las propiedades estelares y la composición química de las estrellas cercanas del GCNS observadas por GALAH DR4 (Gaia DR3 + GALAH DR4). Beca PIBIC/CNPq; coautoría con la PUC Chile (Dra. M. L. L. Dantas, Dra. A. C. Soja).",
        resumo: "Aprendizaje automático para encontrar estrellas anómalas en GALAH DR4 + Gaia DR3 (PIBIC/CNPq)."
      },
      fr: {
        brief: "Analyse des propriétés stellaires et de la composition chimique des étoiles proches du GCNS observées par GALAH DR4 (Gaia DR3 + GALAH DR4). Bourse PIBIC/CNPq ; co-autorat avec la PUC Chile (Dre M. L. L. Dantas, Dre A. C. Soja).",
        resumo: "Apprentissage automatique pour repérer des étoiles anormales dans GALAH DR4 + Gaia DR3 (PIBIC/CNPq)."
      },
      it: {
        brief: "Analisi delle proprietà stellari e della composizione chimica delle stelle vicine del GCNS osservate da GALAH DR4 (Gaia DR3 + GALAH DR4). Borsa PIBIC/CNPq; co-autori della PUC Chile (Dott.ssa M. L. L. Dantas, Dott.ssa A. C. Soja).",
        resumo: "Apprendimento automatico per individuare stelle anomale in GALAH DR4 + Gaia DR3 (PIBIC/CNPq)."
      },
      zh: {
        brief: "分析 GALAH DR4 观测的 GCNS 近邻恒星的恒星性质与化学组成(Gaia DR3 + GALAH DR4)。PIBIC/CNPq 奖学金;与 PUC Chile 合作署名(M. L. L. Dantas 博士、A. C. Soja 博士)。",
        resumo: "利用机器学习在 GALAH DR4 + Gaia DR3 中寻找异常恒星(PIBIC/CNPq)。"
      }
    }
  },
  {
    name: "Anomaly Detection Viewer",
    cat: "pesquisa",
    visibility: "público",
    icon: "star",
    repo: "",
    stack: [ "Python", "Streamlit", "Plotly", "t-SNE", "UMAP", "HDBSCAN" ],
    tags: [ "Gaia", "Data Viz", "Machine Learning" ],
    brief: "Visualizador público dos resultados da pesquisa de detecção de anomalias em estrelas da vizinhança solar (GCNS + GALAH DR4, até 100 pc). Mostra o mapa t-SNE do espectro inteiro, pixel a pixel, com as cores dos parâmetros do catálogo, as flags de emissão e binárias espectroscópicas e os clusters HDBSCAN, além das análises do SAB 2025. Tudo pré-calculado; acompanha o banner do SAB 2026.",
    image: "assets/media/anomalyviewer/poster.webp",
    video: "assets/media/anomalyviewer/tour.webm",
    live: "https://anomaly.phrandrade.com/?embed=true",
    open: "https://anomaly.phrandrade.com",
    resumo: "Painel público do mapa t-SNE dos espectros GALAH DR4, com clusters e flags.",
    i18n: {
      en: {
        brief: "Public viewer for the results of the research on anomaly detection in stars of the solar neighborhood (GCNS + GALAH DR4, up to 100 pc). It shows the t-SNE map of the full spectrum, pixel by pixel, colored by catalog parameters, emission and spectroscopic binary flags, and HDBSCAN clusters, along with the SAB 2025 analyses. Everything is precomputed; it accompanies the SAB 2026 banner.",
        resumo: "Public dashboard of the t-SNE map of GALAH DR4 spectra, with clusters and flags."
      },
      es: {
        brief: "Visualizador público de los resultados de la investigación sobre detección de anomalías en estrellas de la vecindad solar (GCNS + GALAH DR4, hasta 100 pc). Muestra el mapa t-SNE del espectro completo, píxel a píxel, con los colores de los parámetros del catálogo, las flags de emisión y de binarias espectroscópicas y los clústeres HDBSCAN, además de los análisis del SAB 2025. Todo está precalculado; acompaña el banner del SAB 2026.",
        resumo: "Panel público del mapa t-SNE de los espectros GALAH DR4, con clústeres y flags."
      },
      fr: {
        brief: "Visualiseur public des résultats de la recherche sur la détection d'anomalies dans les étoiles du voisinage solaire (GCNS + GALAH DR4, jusqu'à 100 pc). Il présente la carte t-SNE du spectre entier, pixel par pixel, avec les couleurs des paramètres du catalogue, les flags d'émission et de binaires spectroscopiques et les clusters HDBSCAN, ainsi que les analyses du SAB 2025. Tout est précalculé ; il accompagne la bannière du SAB 2026.",
        resumo: "Tableau de bord public de la carte t-SNE des spectres GALAH DR4, avec clusters et flags."
      },
      it: {
        brief: "Visualizzatore pubblico dei risultati della ricerca sul rilevamento di anomalie nelle stelle del vicinato solare (GCNS + GALAH DR4, fino a 100 pc). Mostra la mappa t-SNE dell'intero spettro, pixel per pixel, con i colori dei parametri del catalogo, i flag di emissione e di binarie spettroscopiche e i cluster HDBSCAN, oltre alle analisi del SAB 2025. Tutto è precalcolato; accompagna il banner del SAB 2026.",
        resumo: "Dashboard pubblica della mappa t-SNE degli spettri GALAH DR4, con cluster e flag."
      },
      zh: {
        brief: "面向公众的可视化工具,展示太阳邻近区域恒星异常检测研究的结果(GCNS + GALAH DR4,100 pc 以内)。它呈现完整光谱逐像素的 t-SNE 图,可按星表参数着色,并显示发射线和分光双星标记以及 HDBSCAN 聚类,还包含 SAB 2025 的分析。所有内容均已预先计算;配合 SAB 2026 的海报使用。",
        resumo: "GALAH DR4 光谱 t-SNE 图的公开面板,含聚类和标记。"
      }
    }
  },
  {
    name: "SpectraViewer",
    cat: "pesquisa",
    visibility: "público",
    icon: "spectrum",
    repo: "https://github.com/pedroiff0/spectraviewer",
    stack: [ "Python", "FITS", "Matplotlib" ],
    tags: [ "Spectroscopy", "GALAH", "Open Source" ],
    brief: "Viewer interativo de espectros GALAH DR4 (4 bandas, linhas de referência CNO/Alpha/Iron-peak, leitura de FITS, metadados Teff/log(g)/[Fe/H]).",
    image: "assets/media/spectraviewer/poster.webp",
    video: "assets/media/spectraviewer/tour.webm",
    live: "https://spectraviewer.streamlit.app/?embed=true",
    open: "https://spectraviewer.streamlit.app",
    status: "ajustes",
    resumo: "Visualizador interativo de espectros GALAH DR4 com linhas de referência.",
    i18n: {
      en: {
        brief: "Interactive viewer for GALAH DR4 spectra (4 bands, CNO/Alpha/Iron-peak reference lines, FITS reading, Teff/log(g)/[Fe/H] metadata).",
        resumo: "Interactive viewer of GALAH DR4 spectra with reference lines."
      },
      es: {
        brief: "Visor interactivo de espectros GALAH DR4 (4 bandas, líneas de referencia CNO/Alpha/Iron-peak, lectura de FITS, metadatos Teff/log(g)/[Fe/H]).",
        resumo: "Visor interactivo de espectros GALAH DR4 con líneas de referencia."
      },
      fr: {
        brief: "Visualiseur interactif de spectres GALAH DR4 (4 bandes, raies de référence CNO/Alpha/Iron-peak, lecture de FITS, métadonnées Teff/log(g)/[Fe/H]).",
        resumo: "Visualiseur interactif de spectres GALAH DR4 avec raies de référence."
      },
      it: {
        brief: "Visualizzatore interattivo di spettri GALAH DR4 (4 bande, linee di riferimento CNO/Alpha/Iron-peak, lettura di FITS, metadati Teff/log(g)/[Fe/H]).",
        resumo: "Visualizzatore interattivo di spettri GALAH DR4 con linee di riferimento."
      },
      zh: {
        brief: "GALAH DR4 光谱交互式查看器(4 个波段,CNO/Alpha/Iron-peak 参考谱线,支持读取 FITS,含 Teff/log(g)/[Fe/H] 元数据)。",
        resumo: "带参考谱线的 GALAH DR4 光谱交互式查看器。"
      }
    }
  },
  {
    name: "Researcher Hub",
    cat: "pesquisa",
    visibility: "privado",
    icon: "book",
    repo: "https://github.com/pedroiff0/research",
    stack: [ "Node.js", "Express", "MongoDB", "EJS", "arXiv API", "Docker" ],
    tags: [ "arXiv", "Literature", "Automation" ],
    brief: "Plataforma web para acompanhar a literatura científica no arXiv (research.phrandrade.com): revisão diária pública por categoria, busca por palavra-chave e autor, monitoramento de autores, biblioteca pessoal e exportação de citações em BibTeX/LaTeX e PDF. Nasceu como o arXiv Searcher, um buscador automático de artigos por assunto, e virou uma aplicação completa.",
    image: "assets/media/research/poster.webp",
    video: "assets/media/research/tour.webm",
    open: "https://research.phrandrade.com",
    resumo: "Acompanha o arXiv: revisão diária, busca, autores monitorados e biblioteca pessoal.",
    i18n: {
      en: {
        brief: "Web platform for following the scientific literature on arXiv (research.phrandrade.com): public daily review by category, keyword and author search, author monitoring, personal library, and citation export in BibTeX/LaTeX and PDF. It started as arXiv Searcher, an automatic article finder by subject, and grew into a full application.",
        resumo: "Follows arXiv: daily review, search, monitored authors and personal library."
      },
      es: {
        brief: "Plataforma web para seguir la literatura científica en arXiv (research.phrandrade.com): revisión diaria pública por categoría, búsqueda por palabra clave y autor, seguimiento de autores, biblioteca personal y exportación de citas en BibTeX/LaTeX y PDF. Nació como arXiv Searcher, un buscador automático de artículos por tema, y se convirtió en una aplicación completa.",
        resumo: "Sigue arXiv: revisión diaria, búsqueda, autores monitoreados y biblioteca personal."
      },
      fr: {
        brief: "Plateforme web pour suivre la littérature scientifique sur arXiv (research.phrandrade.com) : revue quotidienne publique par catégorie, recherche par mot-clé et par auteur, suivi d'auteurs, bibliothèque personnelle et export de citations en BibTeX/LaTeX et PDF. Elle est née comme arXiv Searcher, un moteur de recherche automatique d'articles par sujet, et est devenue une application complète.",
        resumo: "Suit arXiv : revue quotidienne, recherche, auteurs suivis et bibliothèque personnelle."
      },
      it: {
        brief: "Piattaforma web per seguire la letteratura scientifica su arXiv (research.phrandrade.com): rassegna giornaliera pubblica per categoria, ricerca per parola chiave e autore, monitoraggio degli autori, biblioteca personale ed esportazione di citazioni in BibTeX/LaTeX e PDF. Nata come arXiv Searcher, un ricercatore automatico di articoli per argomento, è diventata un'applicazione completa.",
        resumo: "Segue arXiv: rassegna giornaliera, ricerca, autori monitorati e biblioteca personale."
      },
      zh: {
        brief: "用于跟踪 arXiv 科学文献的网络平台(research.phrandrade.com):按类别提供公开的每日综述,支持关键词和作者检索、作者监测、个人文库,以及以 BibTeX/LaTeX 和 PDF 导出引文。它最初是 arXiv Searcher,一个按主题自动检索文章的工具,后来发展为完整的应用。",
        resumo: "跟踪 arXiv:每日综述、检索、受监测的作者和个人文库。"
      }
    }
  },
  {
    name: "Currículo (CV)",
    cat: "academico",
    visibility: "público",
    icon: "document",
    repo: "https://github.com/pedroiff0/cv",
    stack: [ "LaTeX", "altacv", "Makefile", "biblatex" ],
    tags: [ "LaTeX", "Multilingual", "Open Source" ],
    brief: "CV em LaTeX (classe altacv), multilíngue (PT/EN/ES/FR) compilado via Makefile. Inclui ORCID, Google Scholar e publicações em congressos (CONFICT, SAB, SBPC).",
    image: "assets/media/cv/poster.webp",
    video: "assets/media/cv/tour.webm",
    resumo: "Currículo em LaTeX (altacv), em PT, EN, ES e FR.",
    i18n: {
      en: {
        brief: "LaTeX CV (altacv class), multilingual (PT/EN/ES/FR), compiled via Makefile. Includes ORCID, Google Scholar and conference publications (CONFICT, SAB, SBPC).",
        resumo: "LaTeX CV (altacv), in PT, EN, ES and FR."
      },
      es: {
        brief: "CV en LaTeX (clase altacv), multilingüe (PT/EN/ES/FR), compilado mediante Makefile. Incluye ORCID, Google Scholar y publicaciones en congresos (CONFICT, SAB, SBPC).",
        resumo: "CV en LaTeX (altacv), en PT, EN, ES y FR."
      },
      fr: {
        brief: "CV en LaTeX (classe altacv), multilingue (PT/EN/ES/FR), compilé via Makefile. Inclut ORCID, Google Scholar et des publications en congrès (CONFICT, SAB, SBPC).",
        resumo: "CV en LaTeX (altacv), en PT, EN, ES et FR."
      },
      it: {
        brief: "CV in LaTeX (classe altacv), multilingue (PT/EN/ES/FR), compilato tramite Makefile. Include ORCID, Google Scholar e pubblicazioni a congressi (CONFICT, SAB, SBPC).",
        resumo: "CV in LaTeX (altacv), in PT, EN, ES e FR."
      },
      zh: {
        brief: "使用 LaTeX(altacv 类)编写的多语言(PT/EN/ES/FR)简历,通过 Makefile 编译。包含 ORCID、Google Scholar 以及会议发表(CONFICT、SAB、SBPC)。",
        resumo: "LaTeX 简历(altacv),提供 PT、EN、ES 和 FR 版本。"
      }
    }
  },
  {
    name: "Cálculo Numérico",
    cat: "academico",
    visibility: "público",
    icon: "function",
    repo: "https://github.com/pedroiff0/calculo-numerico",
    stack: [ "Python", "CI", "Docs", "NumPy" ],
    tags: [ "Numerical Methods", "Python", "Open Source" ],
    brief: "Repositório de códigos da disciplina Cálculo Numérico 2025.2, com CI e documentação.",
    image: "assets/media/calculo/poster.webp",
    video: "assets/media/calculo/tour.webm",
    live: "https://pedroiff0.github.io/calculo-numerico/",
    open: "https://pedroiff0.github.io/calculo-numerico/",
    resumo: "Códigos e documentação da disciplina de Cálculo Numérico 2025.2.",
    i18n: {
      en: {
        brief: "Code repository for the Numerical Calculus 2025.2 course, with CI and documentation.",
        resumo: "Code and documentation for the Numerical Calculus 2025.2 course."
      },
      es: {
        brief: "Repositorio de códigos de la asignatura Cálculo Numérico 2025.2, con CI y documentación.",
        resumo: "Códigos y documentación de la asignatura Cálculo Numérico 2025.2."
      },
      fr: {
        brief: "Dépôt de code du cours de Calcul Numérique 2025.2, avec CI et documentation.",
        resumo: "Code et documentation du cours de Calcul Numérique 2025.2."
      },
      it: {
        brief: "Repository di codice del corso di Calcolo Numerico 2025.2, con CI e documentazione.",
        resumo: "Codice e documentazione del corso di Calcolo Numerico 2025.2."
      },
      zh: {
        brief: "数值计算(Cálculo Numérico)2025.2 课程的代码仓库,含 CI 和文档。",
        resumo: "数值计算(Cálculo Numérico)2025.2 课程的代码和文档。"
      }
    }
  },
  {
    name: "Formulários",
    cat: "academico",
    visibility: "público",
    icon: "formula",
    repo: "https://github.com/pedroiff0/formularios",
    stack: [ "LaTeX", "siunitx" ],
    tags: [ "LaTeX", "Study Notes", "Open Source" ],
    brief: "Coleção de folhas de fórmulas e resumos em LaTeX organizados por disciplina.",
    image: "assets/media/formularios/poster.webp",
    video: "assets/media/formularios/tour.webm",
    resumo: "Folhas de fórmulas e resumos em LaTeX por disciplina.",
    i18n: {
      en: {
        brief: "Collection of formula sheets and summaries in LaTeX, organized by course.",
        resumo: "Formula sheets and summaries in LaTeX by course."
      },
      es: {
        brief: "Colección de hojas de fórmulas y resúmenes en LaTeX organizados por asignatura.",
        resumo: "Hojas de fórmulas y resúmenes en LaTeX por asignatura."
      },
      fr: {
        brief: "Collection de formulaires et de résumés en LaTeX organisés par matière.",
        resumo: "Formulaires et résumés en LaTeX par matière."
      },
      it: {
        brief: "Raccolta di formulari e riassunti in LaTeX organizzati per materia.",
        resumo: "Formulari e riassunti in LaTeX per materia."
      },
      zh: { brief: "按课程整理的 LaTeX 公式表和总结合集。", resumo: "按课程整理的 LaTeX 公式表和总结。" }
    }
  },
  {
    name: "Modelos LaTeX",
    cat: "academico",
    visibility: "privado",
    icon: "latex",
    repo: "https://github.com/pedroiff0/modelos",
    stack: [ "LaTeX" ],
    tags: [ "LaTeX", "Templates" ],
    brief: "Coleção de modelos LaTeX de uso geral, reaproveitados como base nos trabalhos acadêmicos.",
    image: "assets/media/modelos/poster.webp",
    video: "assets/media/modelos/tour.webm",
    resumo: "Modelos LaTeX de uso geral, reaproveitados nos trabalhos acadêmicos.",
    i18n: {
      en: {
        brief: "Collection of general-purpose LaTeX templates, reused as a base in academic papers.",
        resumo: "General-purpose LaTeX templates, reused across academic work."
      },
      es: {
        brief: "Colección de plantillas LaTeX de uso general, reutilizadas como base en los trabajos académicos.",
        resumo: "Plantillas LaTeX de uso general, reutilizadas en los trabajos académicos."
      },
      fr: {
        brief: "Collection de modèles LaTeX à usage général, réutilisés comme base dans les travaux académiques.",
        resumo: "Modèles LaTeX à usage général, réutilisés dans les travaux académiques."
      },
      it: {
        brief: "Raccolta di modelli LaTeX di uso generale, riutilizzati come base nei lavori accademici.",
        resumo: "Modelli LaTeX di uso generale, riutilizzati nei lavori accademici."
      },
      zh: { brief: "通用 LaTeX 模板合集,用作学术论文的基础模板。", resumo: "通用 LaTeX 模板,在各类学术作业中复用。" }
    }
  },
  {
    name: "page (Quartz)",
    cat: "pessoal",
    visibility: "público",
    icon: "globe",
    repo: "https://github.com/pedroiff0/quartz-site",
    stack: [ "Quartz", "Obsidian", "Markdown", "TypeScript", "GitHub Actions" ],
    tags: [ "Obsidian", "Quartz", "Multilingual" ],
    brief: "Site pessoal/acadêmico oficial, multilíngue (PT completo; EN/ES/FR parciais), em Quartz a partir do vault Obsidian. Publicado em www.phrandrade.com. É o consolidado: pesquisa, notas de disciplinas, mídia e blog. Este portfólio é a página de boas-vindas dele.",
    image: "assets/media/page/poster.webp",
    video: "assets/media/page/tour.webm",
    live: "https://www.phrandrade.com/pt-br/",
    open: "https://www.phrandrade.com/pt-br/",
    resumo: "Site oficial: pesquisa, notas de aula, mídia e blog, em Quartz a partir do Obsidian.",
    i18n: {
      en: {
        brief: "Official personal/academic website, multilingual (PT complete; EN/ES/FR partial), built with Quartz from the Obsidian vault. Published at www.phrandrade.com. It is the consolidated hub: research, course notes, media and blog. This portfolio is its welcome page.",
        resumo: "Official website: research, class notes, media and blog, built with Quartz from Obsidian."
      },
      es: {
        brief: "Sitio personal/académico oficial, multilingüe (PT completo; EN/ES/FR parciales), creado con Quartz a partir del vault de Obsidian. Publicado en www.phrandrade.com. Es el sitio consolidado: investigación, notas de asignaturas, medios y blog. Este portafolio es su página de bienvenida.",
        resumo: "Sitio oficial: investigación, notas de clase, medios y blog, creado con Quartz a partir de Obsidian."
      },
      fr: {
        brief: "Site personnel/académique officiel, multilingue (PT complet ; EN/ES/FR partiels), construit avec Quartz à partir du vault Obsidian. Publié sur www.phrandrade.com. C'est le site consolidé : recherche, notes de cours, médias et blog. Ce portfolio en est la page d'accueil.",
        resumo: "Site officiel : recherche, notes de cours, médias et blog, construit avec Quartz à partir d'Obsidian."
      },
      it: {
        brief: "Sito personale/accademico ufficiale, multilingue (PT completo; EN/ES/FR parziali), realizzato con Quartz a partire dal vault Obsidian. Pubblicato su www.phrandrade.com. È il sito consolidato: ricerca, appunti dei corsi, media e blog. Questo portfolio è la sua pagina di benvenuto.",
        resumo: "Sito ufficiale: ricerca, appunti delle lezioni, media e blog, realizzato con Quartz a partire da Obsidian."
      },
      zh: {
        brief: "官方个人/学术网站,多语言(PT 完整;EN/ES/FR 部分),基于 Obsidian vault 使用 Quartz 构建。发布于 www.phrandrade.com。它是整合后的站点:研究、课程笔记、媒体和博客。本作品集是其欢迎页。",
        resumo: "官方网站:研究、课堂笔记、媒体和博客,基于 Obsidian 使用 Quartz 构建。"
      }
    }
  },
  {
    name: "Livro-Texto de Cálculo",
    cat: "academico",
    visibility: "elaboracao",
    icon: "function",
    repo: "",
    stack: [ "LaTeX", "Python", "Sphinx" ],
    tags: [ "LaTeX", "Teaching", "Calculus" ],
    brief: "Material didático próprio de Cálculo, em elaboração, escrito em LaTeX — dos fundamentos a sistemas lineares. Cobre revisão de Python/Cálculo I, sistemas de bases numéricas (binária, octal, decimal, hexadecimal) e sistemas lineares (eliminação de Gauss e fatoração LU, com e sem pivotamento). Cada capítulo traz apêndice próprio de algoritmos em versão simplificada, além de exemplos autorais que complementam o livro-texto padrão. Layout já ajustado; revisão de formatação (padrão Sphinx) e dos quadros de algoritmos em andamento.",
    image: "assets/media/livrocalculo/poster.webp",
    video: "assets/media/livrocalculo/tour.webm",
    resumo: "Livro-texto próprio de Cálculo em LaTeX, em elaboração.",
    i18n: {
      en: {
        brief: "Original Calculus teaching material, in progress, written in LaTeX — from the fundamentals to linear systems. It covers a review of Python/Calculus I, numeral systems (binary, octal, decimal, hexadecimal) and linear systems (Gaussian elimination and LU factorization, with and without pivoting). Each chapter includes its own appendix of algorithms in simplified form, along with original examples that complement the standard textbook. Layout already adjusted; formatting review (Sphinx standard) and of the algorithm boxes in progress.",
        resumo: "Original Calculus textbook in LaTeX, in progress."
      },
      es: {
        brief: "Material didáctico propio de Cálculo, en elaboración, escrito en LaTeX — desde los fundamentos hasta los sistemas lineales. Abarca un repaso de Python/Cálculo I, sistemas de numeración (binario, octal, decimal, hexadecimal) y sistemas lineales (eliminación de Gauss y factorización LU, con y sin pivoteo). Cada capítulo incluye su propio apéndice de algoritmos en versión simplificada, además de ejemplos originales que complementan el libro de texto estándar. Diseño ya ajustado; revisión del formato (estándar Sphinx) y de los cuadros de algoritmos en curso.",
        resumo: "Libro de texto propio de Cálculo en LaTeX, en elaboración."
      },
      fr: {
        brief: "Support pédagogique original de Calcul, en cours d'élaboration, rédigé en LaTeX — des fondements aux systèmes linéaires. Il couvre une révision de Python/Calcul I, les systèmes de numération (binaire, octal, décimal, hexadécimal) et les systèmes linéaires (élimination de Gauss et factorisation LU, avec et sans pivotage). Chaque chapitre comporte sa propre annexe d'algorithmes en version simplifiée, ainsi que des exemples originaux qui complètent le manuel standard. Mise en page déjà ajustée ; révision de la mise en forme (standard Sphinx) et des encadrés d'algorithmes en cours.",
        resumo: "Manuel de Calcul original en LaTeX, en cours d'élaboration."
      },
      it: {
        brief: "Materiale didattico originale di Calcolo, in fase di elaborazione, scritto in LaTeX — dai fondamenti ai sistemi lineari. Copre un ripasso di Python/Calcolo I, i sistemi di numerazione (binario, ottale, decimale, esadecimale) e i sistemi lineari (eliminazione di Gauss e fattorizzazione LU, con e senza pivoting). Ogni capitolo include una propria appendice di algoritmi in versione semplificata, oltre a esempi originali che integrano il libro di testo standard. Layout già sistemato; revisione della formattazione (standard Sphinx) e dei riquadri degli algoritmi in corso.",
        resumo: "Libro di testo originale di Calcolo in LaTeX, in fase di elaborazione."
      },
      zh: {
        brief: "自编的微积分教学材料,编写中,使用 LaTeX 撰写——从基础到线性方程组。内容涵盖 Python/微积分 I 复习、进制系统(二进制、八进制、十进制、十六进制)以及线性方程组(高斯消元法和 LU 分解,含主元选取与不选取两种情形)。每章都附有简化版算法附录,以及补充标准教材的原创示例。版面已调整完毕;格式审校(Sphinx 标准)和算法框的审校正在进行中。",
        resumo: "自编的 LaTeX 微积分教材,编写中。"
      }
    }
  },
  {
    name: "Arquivo de Apostilas",
    cat: "academico",
    visibility: "planejamento",
    icon: "formula",
    repo: "",
    stack: [ "LaTeX" ],
    tags: [ "LaTeX", "Teaching", "Engineering" ],
    brief: "Plano, em planejamento, de escrever apostilas próprias cobrindo toda a grade de Engenharia de Computação — com teoria, exercícios e experimentos comentados. Abrange Cálculos I–IV e Cálculo Numérico, Física I–IV (com espaço para Quântica e de Partículas), Álgebra Linear, Algoritmos e Estruturas de Dados, Equações Diferenciais, Mecânica dos Sólidos e Fluidos, Eletricidade e Eletrônica, Banco de Dados, Engenharia de Software, Compiladores, Programação, Redes, Arquitetura de Computadores, Sistemas Operacionais e Embarcados, Metodologia Científica e Astrofísica. Complementa as notas de disciplinas já publicadas no site oficial.",
    resumo: "Plano de apostilas próprias para toda a grade de Engenharia de Computação.",
    i18n: {
      en: {
        brief: "Plan, currently in the planning stage, to write original course handouts covering the entire Computer Engineering curriculum — with theory, exercises and annotated experiments. It spans Calculus I–IV and Numerical Calculus, Physics I–IV (with room for Quantum and Particle Physics), Linear Algebra, Algorithms and Data Structures, Differential Equations, Mechanics of Solids and Fluids, Electricity and Electronics, Databases, Software Engineering, Compilers, Programming, Networks, Computer Architecture, Operating Systems and Embedded Systems, Scientific Methodology and Astrophysics. It complements the course notes already published on the official website.",
        resumo: "Plan for original course handouts covering the entire Computer Engineering curriculum."
      },
      es: {
        brief: "Plan, en fase de planificación, para escribir apuntes propios que cubran todo el plan de estudios de Ingeniería Informática — con teoría, ejercicios y experimentos comentados. Abarca Cálculo I–IV y Cálculo Numérico, Física I–IV (con espacio para Física Cuántica y de Partículas), Álgebra Lineal, Algoritmos y Estructuras de Datos, Ecuaciones Diferenciales, Mecánica de Sólidos y Fluidos, Electricidad y Electrónica, Bases de Datos, Ingeniería de Software, Compiladores, Programación, Redes, Arquitectura de Computadores, Sistemas Operativos y Embebidos, Metodología Científica y Astrofísica. Complementa las notas de asignaturas ya publicadas en el sitio oficial.",
        resumo: "Plan de apuntes propios para todo el plan de estudios de Ingeniería Informática."
      },
      fr: {
        brief: "Plan, en cours de planification, visant à rédiger des polycopiés originaux couvrant l'ensemble du cursus d'Ingénierie Informatique — avec théorie, exercices et expériences commentées. Il couvre Calcul I–IV et Calcul Numérique, Physique I–IV (avec une place pour la Physique Quantique et des Particules), Algèbre Linéaire, Algorithmes et Structures de Données, Équations Différentielles, Mécanique des Solides et des Fluides, Électricité et Électronique, Bases de Données, Génie Logiciel, Compilateurs, Programmation, Réseaux, Architecture des Ordinateurs, Systèmes d'Exploitation et Embarqués, Méthodologie Scientifique et Astrophysique. Il complète les notes de cours déjà publiées sur le site officiel.",
        resumo: "Plan de polycopiés originaux couvrant l'ensemble du cursus d'Ingénierie Informatique."
      },
      it: {
        brief: "Piano, in fase di pianificazione, per scrivere dispense originali che coprano l'intero piano di studi di Ingegneria Informatica — con teoria, esercizi ed esperimenti commentati. Comprende Calcoli I–IV e Calcolo Numerico, Fisica I–IV (con spazio per Fisica Quantistica e delle Particelle), Algebra Lineare, Algoritmi e Strutture Dati, Equazioni Differenziali, Meccanica dei Solidi e dei Fluidi, Elettricità ed Elettronica, Basi di Dati, Ingegneria del Software, Compilatori, Programmazione, Reti, Architettura dei Calcolatori, Sistemi Operativi ed Embedded, Metodologia Scientifica e Astrofisica. Integra gli appunti dei corsi già pubblicati sul sito ufficiale.",
        resumo: "Piano di dispense originali per l'intero piano di studi di Ingegneria Informatica."
      },
      zh: {
        brief: "计划中的项目,拟自编讲义,覆盖计算机工程专业的全部课程——包含理论、习题和带注释的实验。涵盖微积分 I–IV 与数值计算、物理 I–IV(并为量子物理和粒子物理预留空间)、线性代数、算法与数据结构、微分方程、固体与流体力学、电学与电子学、数据库、软件工程、编译器、编程、网络、计算机体系结构、操作系统与嵌入式系统、科研方法论以及天体物理。它是对官方网站上已发布课程笔记的补充。",
        resumo: "为计算机工程专业全部课程自编讲义的计划。"
      }
    }
  },
  {
    name: "hardcore-life",
    cat: "pessoal",
    visibility: "privado",
    icon: "life",
    repo: "https://github.com/pedroiff0/hardcore-life",
    stack: [ "Obsidian", "PARA", "Markdown" ],
    tags: [ "Obsidian", "PARA", "Productivity" ],
    brief: "Vault Obsidian de gestão de vida pelo método PARA (projetos, áreas, recursos, arquivos), com mais de 4000 arquivos — a base de conhecimento pessoal de onde saem notas, planejamento e diário.",
    resumo: "Vault Obsidian (PARA) que concentra projetos, áreas, notas e diário.",
    i18n: {
      en: {
        brief: "Obsidian vault for life management using the PARA method (projects, areas, resources, archives), with over 4000 files — the personal knowledge base from which notes, planning and journal come.",
        resumo: "Obsidian (PARA) vault that centralizes projects, areas, notes and journal."
      },
      es: {
        brief: "Vault de Obsidian para la gestión de la vida mediante el método PARA (proyectos, áreas, recursos, archivos), con más de 4000 archivos — la base de conocimiento personal de la que salen notas, planificación y diario.",
        resumo: "Vault de Obsidian (PARA) que concentra proyectos, áreas, notas y diario."
      },
      fr: {
        brief: "Vault Obsidian de gestion de vie selon la méthode PARA (projets, domaines, ressources, archives), avec plus de 4000 fichiers — la base de connaissances personnelle d'où sortent notes, planification et journal.",
        resumo: "Vault Obsidian (PARA) qui centralise projets, domaines, notes et journal."
      },
      it: {
        brief: "Vault Obsidian per la gestione della vita con il metodo PARA (progetti, aree, risorse, archivi), con più di 4000 file — la base di conoscenza personale da cui nascono appunti, pianificazione e diario.",
        resumo: "Vault Obsidian (PARA) che raccoglie progetti, aree, appunti e diario."
      },
      zh: {
        brief: "采用 PARA 方法(项目、领域、资源、归档)进行生活管理的 Obsidian vault,拥有 4000 多个文件——是笔记、规划和日记的个人知识库来源。",
        resumo: "集中管理项目、领域、笔记和日记的 Obsidian (PARA) vault。"
      }
    }
  },
  {
    name: "HardCoreLife (plataforma)",
    cat: "pessoal",
    visibility: "planejamento",
    icon: "dashboard",
    repo: "",
    stack: [ "Node.js", "Express", "MongoDB", "Docker" ],
    tags: [ "Life OS", "Modular" ],
    brief: "Plataforma pessoal modular, em planejamento, para reunir num só sistema o que hoje vive espalhado em planilhas e apps soltos. Um núcleo, vários módulos integrados: Controle Financeiro, Investimentos, Automotivo, Tarefas, Streamings (assinaturas) e Compartilhamento Familiar com acesso restrito por convite. Acesso pensado em duas camadas: web (aberta ou restrita conforme o módulo) e área privada.",
    resumo: "Plataforma modular de vida (finanças, tarefas, família), em planejamento.",
    i18n: {
      en: {
        brief: "Modular personal platform, in planning, to bring together in a single system what today lives scattered across spreadsheets and standalone apps. One core, several integrated modules: Financial Control, Investments, Automotive, Tasks, Streaming (subscriptions) and Family Sharing with invitation-only restricted access. Access designed in two layers: web (open or restricted depending on the module) and private area.",
        resumo: "Modular life platform (finance, tasks, family), in planning."
      },
      es: {
        brief: "Plataforma personal modular, en planificación, para reunir en un solo sistema lo que hoy vive disperso en hojas de cálculo y aplicaciones sueltas. Un núcleo, varios módulos integrados: Control Financiero, Inversiones, Automotriz, Tareas, Streamings (suscripciones) y Compartición Familiar con acceso restringido por invitación. Acceso pensado en dos capas: web (abierta o restringida según el módulo) y área privada.",
        resumo: "Plataforma modular de vida (finanzas, tareas, familia), en planificación."
      },
      fr: {
        brief: "Plateforme personnelle modulaire, en cours de planification, pour réunir dans un seul système ce qui est aujourd'hui dispersé entre des tableurs et des applications isolées. Un noyau, plusieurs modules intégrés : Contrôle Financier, Investissements, Automobile, Tâches, Streamings (abonnements) et Partage Familial avec accès restreint sur invitation. Accès conçu en deux couches : web (ouvert ou restreint selon le module) et espace privé.",
        resumo: "Plateforme de vie modulaire (finances, tâches, famille), en cours de planification."
      },
      it: {
        brief: "Piattaforma personale modulare, in fase di pianificazione, per riunire in un unico sistema ciò che oggi è sparso tra fogli di calcolo e app isolate. Un nucleo, più moduli integrati: Controllo Finanziario, Investimenti, Automotive, Attività, Streaming (abbonamenti) e Condivisione Familiare con accesso limitato su invito. Accesso pensato su due livelli: web (aperto o limitato a seconda del modulo) e area privata.",
        resumo: "Piattaforma di vita modulare (finanze, attività, famiglia), in fase di pianificazione."
      },
      zh: {
        brief: "计划中的模块化个人平台,旨在把目前分散在电子表格和各类独立应用中的内容整合到一个系统里。一个核心,多个集成模块:财务管理、投资、汽车、任务、流媒体(订阅)以及仅限受邀访问的家庭共享。访问方式分为两层:网页端(按模块开放或受限)和私人区域。",
        resumo: "模块化生活平台(财务、任务、家庭),规划中。"
      }
    }
  },
  {
    name: "dashboard-life",
    cat: "pessoal",
    visibility: "privado",
    icon: "dashboard",
    repo: "https://github.com/pedroiff0/dashboard-life",
    stack: [ "Node.js", "Express", "MongoDB", "Docker" ],
    tags: [ "Life OS", "Habits", "Metrics" ],
    brief: "Dashboard pessoal de hábitos e métricas de vida, derivado do vault hardcore-life e primeiro passo concreto rumo à plataforma HardCoreLife. Node + Express + MongoDB, deploy via Docker. Em desenvolvimento.",
    resumo: "Painel de hábitos e métricas de vida, primeiro passo da plataforma HardCoreLife.",
    i18n: {
      en: {
        brief: "Personal dashboard for habits and life metrics, derived from the hardcore-life vault and the first concrete step toward the HardCoreLife platform. Node + Express + MongoDB, deployed via Docker. In development.",
        resumo: "Dashboard for habits and life metrics, first step toward the HardCoreLife platform."
      },
      es: {
        brief: "Panel personal de hábitos y métricas de vida, derivado del vault hardcore-life y primer paso concreto hacia la plataforma HardCoreLife. Node + Express + MongoDB, despliegue con Docker. En desarrollo.",
        resumo: "Panel de hábitos y métricas de vida, primer paso hacia la plataforma HardCoreLife."
      },
      fr: {
        brief: "Tableau de bord personnel d'habitudes et de métriques de vie, dérivé du vault hardcore-life et premier pas concret vers la plateforme HardCoreLife. Node + Express + MongoDB, déploiement via Docker. En développement.",
        resumo: "Tableau de bord d'habitudes et de métriques de vie, premier pas vers la plateforme HardCoreLife."
      },
      it: {
        brief: "Dashboard personale di abitudini e metriche di vita, derivata dal vault hardcore-life e primo passo concreto verso la piattaforma HardCoreLife. Node + Express + MongoDB, deploy tramite Docker. In sviluppo.",
        resumo: "Dashboard di abitudini e metriche di vita, primo passo verso la piattaforma HardCoreLife."
      },
      zh: {
        brief: "个人习惯与生活指标仪表盘,源自 hardcore-life vault,是迈向 HardCoreLife 平台的第一步。Node + Express + MongoDB,通过 Docker 部署。开发中。",
        resumo: "习惯与生活指标仪表盘,是迈向 HardCoreLife 平台的第一步。"
      }
    }
  },
  {
    name: "tg-agent-bridge",
    cat: "pessoal",
    visibility: "privado",
    icon: "profile",
    repo: "https://github.com/pedroiff0/tg-agent-bridge",
    stack: [ "Python 3.12", "python-telegram-bot", "httpx", "faster-whisper", "SQLite", "tmux" ],
    tags: [ "Telegram", "AI", "Automation" ],
    brief: "Bot do Telegram que liga o celular ao vault hardcore-life e aos agentes de IA (Claude Code e AGY): brief diário, lembretes, check-ins de rotina com botões, consultas somente leitura ao vault e aos repositórios, controle de sessões tmux, transcrição de áudio com Whisper e integração com o ReLaTeX. Regras de segurança bloqueiam arquivos sensíveis e notas protegidas.",
    resumo: "Bot do Telegram que liga o celular ao vault e aos agentes de IA.",
    i18n: {
      en: {
        brief: "Telegram bot that connects the phone to the hardcore-life vault and to AI agents (Claude Code and AGY): daily brief, reminders, routine check-ins with buttons, read-only queries to the vault and repositories, tmux session control, audio transcription with Whisper and integration with ReLaTeX. Security rules block sensitive files and protected notes.",
        resumo: "Telegram bot that connects the phone to the vault and to AI agents."
      },
      es: {
        brief: "Bot de Telegram que conecta el celular con el vault hardcore-life y con los agentes de IA (Claude Code y AGY): resumen diario, recordatorios, check-ins de rutina con botones, consultas de solo lectura al vault y a los repositorios, control de sesiones tmux, transcripción de audio con Whisper e integración con ReLaTeX. Reglas de seguridad bloquean archivos sensibles y notas protegidas.",
        resumo: "Bot de Telegram que conecta el celular con el vault y los agentes de IA."
      },
      fr: {
        brief: "Bot Telegram qui relie le téléphone au vault hardcore-life et aux agents d'IA (Claude Code et AGY) : brief quotidien, rappels, check-ins de routine avec boutons, consultations en lecture seule du vault et des dépôts, contrôle de sessions tmux, transcription audio avec Whisper et intégration avec ReLaTeX. Des règles de sécurité bloquent les fichiers sensibles et les notes protégées.",
        resumo: "Bot Telegram qui relie le téléphone au vault et aux agents d'IA."
      },
      it: {
        brief: "Bot Telegram che collega il telefono al vault hardcore-life e agli agenti di IA (Claude Code e AGY): brief giornaliero, promemoria, check-in di routine con pulsanti, consultazioni in sola lettura del vault e dei repository, controllo delle sessioni tmux, trascrizione audio con Whisper e integrazione con ReLaTeX. Regole di sicurezza bloccano i file sensibili e le note protette.",
        resumo: "Bot Telegram che collega il telefono al vault e agli agenti di IA."
      },
      zh: {
        brief: "Telegram 机器人,将手机与 hardcore-life vault 以及 AI 智能体(Claude Code 和 AGY)连接起来:每日简报、提醒、带按钮的日常打卡、对 vault 和代码仓库的只读查询、tmux 会话控制、使用 Whisper 的音频转录,以及与 ReLaTeX 的集成。安全规则会拦截敏感文件和受保护的笔记。",
        resumo: "将手机与 vault 和 AI 智能体连接起来的 Telegram 机器人。"
      }
    }
  },
  {
    name: "Baton",
    cat: "pessoal",
    visibility: "público",
    icon: "document",
    repo: "https://github.com/pedroiff0/baton",
    stack: [ "Python 3", "Swift/AppKit", "pdf.js", "Tailscale", "PWA" ],
    tags: [ "Presentations", "macOS", "Open Source" ],
    brief: "Controle remoto de apresentações pelo iPhone, via Tailscale, no estilo do clicker Logitech Spotlight, sem instalar nada no celular. Funciona com qualquer aplicativo (PowerPoint, Keynote, leitores de PDF) ou abre o PDF no navegador com transições, notas do apresentador, passos dentro do slide e prévia do próximo slide. Laser, foco com desfoque ajustável, caneta, marca-texto, zoom, cronômetro e \"Ir para\" por número. Licença MIT.",
    resumo: "Celular como passador de slides via Tailscale, com laser, caneta e cronômetro.",
    i18n: {
      en: {
        brief: "Remote control for presentations from an iPhone, over Tailscale, in the style of the Logitech Spotlight clicker, with nothing to install on the phone. Works with any application (PowerPoint, Keynote, PDF readers) or opens the PDF in the browser with transitions, speaker notes, in-slide steps and a preview of the next slide. Laser, focus with adjustable blur, pen, highlighter, zoom, timer and \"Go to\" by number. MIT license.",
        resumo: "Phone as a slide clicker over Tailscale, with laser, pen and timer."
      },
      es: {
        brief: "Control remoto de presentaciones desde el iPhone, a través de Tailscale, al estilo del clicker Logitech Spotlight, sin instalar nada en el móvil. Funciona con cualquier aplicación (PowerPoint, Keynote, lectores de PDF) o abre el PDF en el navegador con transiciones, notas del presentador, pasos dentro de la diapositiva y vista previa de la siguiente diapositiva. Láser, foco con desenfoque ajustable, lápiz, resaltador, zoom, cronómetro e \"Ir a\" por número. Licencia MIT.",
        resumo: "El móvil como pasador de diapositivas a través de Tailscale, con láser, lápiz y cronómetro."
      },
      fr: {
        brief: "Télécommande de présentations depuis l'iPhone, via Tailscale, dans le style du clicker Logitech Spotlight, sans rien installer sur le téléphone. Fonctionne avec n'importe quelle application (PowerPoint, Keynote, lecteurs de PDF) ou ouvre le PDF dans le navigateur avec transitions, notes du présentateur, étapes au sein de la diapositive et aperçu de la diapositive suivante. Laser, focus avec flou réglable, stylo, surligneur, zoom, chronomètre et « Aller à » par numéro. Licence MIT.",
        resumo: "Le téléphone comme télécommande de diapositives via Tailscale, avec laser, stylo et chronomètre."
      },
      it: {
        brief: "Telecomando per presentazioni dall'iPhone, tramite Tailscale, nello stile del clicker Logitech Spotlight, senza installare nulla sul telefono. Funziona con qualsiasi applicazione (PowerPoint, Keynote, lettori PDF) oppure apre il PDF nel browser con transizioni, note del relatore, passaggi all'interno della slide e anteprima della slide successiva. Laser, messa a fuoco con sfocatura regolabile, penna, evidenziatore, zoom, cronometro e \"Vai a\" per numero. Licenza MIT.",
        resumo: "Il telefono come telecomando per slide tramite Tailscale, con laser, penna e cronometro."
      },
      zh: {
        brief: "通过 iPhone 并借助 Tailscale 远程控制演示文稿,风格类似 Logitech Spotlight 翻页笔,无需在手机上安装任何东西。适用于任何应用(PowerPoint、Keynote、PDF 阅读器),也可在浏览器中打开 PDF,支持转场、演讲者备注、幻灯片内分步动画以及下一张幻灯片预览。提供激光笔、可调模糊度的聚焦、画笔、荧光笔、缩放、计时器,以及按编号“跳转到”功能。MIT 许可证。",
        resumo: "通过 Tailscale 把手机变成翻页器,带激光笔、画笔和计时器。"
      }
    }
  },
  {
    name: "devops-guide",
    cat: "pessoal",
    visibility: "público",
    icon: "github",
    repo: "https://github.com/pedroiff0/devops-guide",
    stack: [ "Docs", "TypeScript", "GitHub Actions" ],
    tags: [ "DevOps", "Git", "Open Source" ],
    brief: "Segundo cérebro de documentações reexplicadas e hub DevOps (devops.phrandrade.com): guia próprio de Git e boas práticas de versionamento, prático e sem ser mais um manual genérico de comandos. Reúne templates, exemplos de Actions, Projects, Issues e estratégias de branching, com módulos sobre dockerização, versionamento em arquiteturas de microsserviços e padrões de documentação de repositório.",
    image: "assets/media/guiagithub/poster.webp",
    video: "assets/media/guiagithub/tour.webm",
    resumo: "Segundo cérebro de DevOps e Git, com templates e exemplos de Actions.",
    i18n: {
      en: {
        brief: "A second brain of re-explained documentation and a DevOps hub (devops.phrandrade.com): a personal Git and versioning best-practices guide, practical and not just another generic command manual. It gathers templates, examples of Actions, Projects, Issues and branching strategies, with modules on dockerization, versioning in microservices architectures and repository documentation standards.",
        resumo: "DevOps and Git second brain, with templates and Actions examples."
      },
      es: {
        brief: "Segundo cerebro de documentaciones reexplicadas y hub DevOps (devops.phrandrade.com): guía propia de Git y buenas prácticas de versionado, práctica y sin ser otro manual genérico de comandos. Reúne plantillas, ejemplos de Actions, Projects, Issues y estrategias de branching, con módulos sobre dockerización, versionado en arquitecturas de microservicios y estándares de documentación de repositorios.",
        resumo: "Segundo cerebro de DevOps y Git, con plantillas y ejemplos de Actions."
      },
      fr: {
        brief: "Second cerveau de documentations réexpliquées et hub DevOps (devops.phrandrade.com) : guide personnel de Git et des bonnes pratiques de versionnement, pratique et sans être un énième manuel générique de commandes. Il rassemble des modèles, des exemples d'Actions, de Projects, d'Issues et des stratégies de branching, avec des modules sur la dockerisation, le versionnement dans les architectures de microservices et les standards de documentation de dépôt.",
        resumo: "Second cerveau DevOps et Git, avec modèles et exemples d'Actions."
      },
      it: {
        brief: "Secondo cervello di documentazioni rispiegate e hub DevOps (devops.phrandrade.com): guida personale a Git e alle buone pratiche di versionamento, pratica e non l'ennesimo manuale generico di comandi. Raccoglie template, esempi di Actions, Projects, Issues e strategie di branching, con moduli su dockerizzazione, versionamento in architetture a microservizi e standard di documentazione dei repository.",
        resumo: "Secondo cervello DevOps e Git, con template ed esempi di Actions."
      },
      zh: {
        brief: "一个由重新讲解的文档构成的“第二大脑”和 DevOps 中心(devops.phrandrade.com):个人整理的 Git 与版本管理最佳实践指南,注重实用,而不是又一本泛泛的命令手册。汇集了模板、Actions、Projects、Issues 的示例以及分支策略,并包含关于容器化(dockerization)、微服务架构中的版本管理以及仓库文档规范的模块。",
        resumo: "DevOps 与 Git 的“第二大脑”,含模板和 Actions 示例。"
      }
    }
  },
  {
    name: "Perfil GitHub",
    cat: "pessoal",
    visibility: "público",
    icon: "profile",
    repo: "https://github.com/pedroiff0/pedroiff0",
    stack: [ "Profile", "Markdown" ],
    tags: [ "GitHub", "Markdown" ],
    brief: "README de perfil do GitHub: bio, links, Tech & Tools, constelação de projetos em destaque (repositórios públicos, com os privados apenas citados) e linha do tempo de bolsas.",
    image: "assets/media/perfil/poster.webp",
    video: "assets/media/perfil/tour.webm",
    resumo: "README do perfil do GitHub com projetos e linha do tempo de bolsas.",
    i18n: {
      en: {
        brief: "GitHub profile README: bio, links, Tech & Tools, a constellation of featured projects (public repositories, with private ones only mentioned) and a scholarship timeline.",
        resumo: "GitHub profile README with projects and a scholarship timeline."
      },
      es: {
        brief: "README del perfil de GitHub: bio, enlaces, Tech & Tools, constelación de proyectos destacados (repositorios públicos, con los privados solo mencionados) y línea de tiempo de becas.",
        resumo: "README del perfil de GitHub con proyectos y línea de tiempo de becas."
      },
      fr: {
        brief: "README du profil GitHub : bio, liens, Tech & Tools, constellation de projets en vedette (dépôts publics, les privés étant seulement mentionnés) et frise chronologique des bourses.",
        resumo: "README du profil GitHub avec projets et frise chronologique des bourses."
      },
      it: {
        brief: "README del profilo GitHub: bio, link, Tech & Tools, costellazione di progetti in evidenza (repository pubblici, con quelli privati solo citati) e linea del tempo delle borse di studio.",
        resumo: "README del profilo GitHub con progetti e linea del tempo delle borse di studio."
      },
      zh: {
        brief: "GitHub 个人主页 README:简介、链接、Tech & Tools、精选项目星座(公开仓库,私有仓库仅作提及)以及奖学金时间线。",
        resumo: "GitHub 个人主页 README,含项目和奖学金时间线。"
      }
    }
  },
  {
    name: "Custos App",
    cat: "software",
    visibility: "privado",
    icon: "cash",
    repo: "https://github.com/pedroiff0/custos-app",
    stack: [ "Node.js", "Express", "MongoDB", "Mongoose", "EJS", "Zod", "Jest", "Docker" ],
    tags: [ "FinOps", "SaaS", "Cloud Costs" ],
    brief: "Zenith FinOps & Custos: aplicação SaaS para gestão de custos de infraestrutura cloud (VPS, Hetzner, AWS, DigitalOcean) e de assinaturas de deploy (Vercel, Supabase, Cloudflare). Inventário de servidores com câmbio automático, amortização de planos anuais, rateio de custos por cliente, DRE e margem de lucro por cliente com alertas, e simulador de precificação (infraestrutura, horas de trabalho, margem-alvo e impostos). Tem API REST com chaves para integrar ao Zênite, plano Pro com período de teste e central de avisos. Node/Express, MongoDB, telas em EJS, validação Zod e testes com Jest.",
    image: "assets/media/custosapp/poster.webp",
    video: "assets/media/custosapp/tour.webm",
    resumo: "SaaS de FinOps: custos de servidores e assinaturas, rateio por cliente e margem de lucro.",
    i18n: {
      en: {
        brief: "Zenith FinOps & Custos: a SaaS application for managing cloud infrastructure costs (VPS, Hetzner, AWS, DigitalOcean) and deployment subscriptions (Vercel, Supabase, Cloudflare). Server inventory with automatic currency conversion, amortization of annual plans, per-client cost allocation, P&L statements and profit margin per client with alerts, and a pricing simulator (infrastructure, working hours, target margin and taxes). It has a REST API with keys for integrating with Zênite, a Pro plan with a trial period, and a notification center. Node/Express, MongoDB, EJS views, Zod validation and Jest tests.",
        resumo: "FinOps SaaS: server and subscription costs, per-client allocation and profit margin."
      },
      es: {
        brief: "Zenith FinOps & Custos: aplicación SaaS para la gestión de costos de infraestructura cloud (VPS, Hetzner, AWS, DigitalOcean) y de suscripciones de despliegue (Vercel, Supabase, Cloudflare). Inventario de servidores con cambio de divisas automático, amortización de planes anuales, prorrateo de costos por cliente, estado de resultados (DRE) y margen de beneficio por cliente con alertas, y simulador de precios (infraestructura, horas de trabajo, margen objetivo e impuestos). Cuenta con API REST con claves para integrarse con Zênite, plan Pro con período de prueba y centro de avisos. Node/Express, MongoDB, vistas en EJS, validación con Zod y pruebas con Jest.",
        resumo: "SaaS de FinOps: costos de servidores y suscripciones, prorrateo por cliente y margen de beneficio."
      },
      fr: {
        brief: "Zenith FinOps & Custos : application SaaS pour la gestion des coûts d'infrastructure cloud (VPS, Hetzner, AWS, DigitalOcean) et des abonnements de déploiement (Vercel, Supabase, Cloudflare). Inventaire des serveurs avec conversion de devises automatique, amortissement des forfaits annuels, répartition des coûts par client, compte de résultat (DRE) et marge bénéficiaire par client avec alertes, et simulateur de tarification (infrastructure, heures de travail, marge cible et impôts). Elle dispose d'une API REST avec clés pour s'intégrer à Zênite, d'un forfait Pro avec période d'essai et d'un centre de notifications. Node/Express, MongoDB, vues en EJS, validation avec Zod et tests avec Jest.",
        resumo: "SaaS de FinOps : coûts des serveurs et des abonnements, répartition par client et marge bénéficiaire."
      },
      it: {
        brief: "Zenith FinOps & Custos: applicazione SaaS per la gestione dei costi dell'infrastruttura cloud (VPS, Hetzner, AWS, DigitalOcean) e degli abbonamenti di deploy (Vercel, Supabase, Cloudflare). Inventario dei server con cambio valuta automatico, ammortamento dei piani annuali, ripartizione dei costi per cliente, conto economico (DRE) e margine di profitto per cliente con avvisi, e simulatore di prezzi (infrastruttura, ore di lavoro, margine obiettivo e imposte). Dispone di API REST con chiavi per l'integrazione con Zênite, piano Pro con periodo di prova e centro avvisi. Node/Express, MongoDB, viste in EJS, validazione con Zod e test con Jest.",
        resumo: "SaaS di FinOps: costi di server e abbonamenti, ripartizione per cliente e margine di profitto."
      },
      zh: {
        brief: "Zenith FinOps & Custos：用于管理云基础设施成本（VPS、Hetzner、AWS、DigitalOcean）和部署订阅（Vercel、Supabase、Cloudflare）的 SaaS 应用。具备自动汇率换算的服务器清单、年度套餐摊销、按客户分摊成本、DRE（利润表）以及带预警的客户利润率，并提供定价模拟器（基础设施、工时、目标利润率和税费）。提供带密钥的 REST API 以便与 Zênite 集成，设有带试用期的 Pro 套餐和通知中心。技术栈：Node/Express、MongoDB、EJS 视图、Zod 校验和 Jest 测试。",
        resumo: "FinOps SaaS：服务器与订阅成本、按客户分摊及利润率。"
      }
    }
  },
  {
    name: "Rumo",
    cat: "software",
    visibility: "privado",
    icon: "globe",
    repo: "https://github.com/pedroiff0/viagem-app",
    stack: [ "Node.js", "Express", "MongoDB" ],
    tags: [ "Travel", "Collaborative", "Full-stack" ],
    brief: "Rumo, em desenvolvimento: planejamento de viagens em grupo que resolve os dois pontos em que viagem em grupo trava, ninguém saber o roteiro combinado e ninguém saber quem pagou o quê. Roteiro compartilhado, reservas reunidas num só lugar e divisão de despesas entre os viajantes, com interface bilíngue (PT/EN). Node.js, Express e MongoDB.",
    image: "assets/media/viagemapp/poster.webp",
    video: "assets/media/viagemapp/tour.webm",
    status: "dev",
    resumo: "Viagens em grupo: roteiro compartilhado, reservas e divisão de despesas.",
    i18n: {
      en: {
        brief: "Rumo, in development: group trip planning that tackles the two points where group travel breaks down, nobody knowing the agreed itinerary and nobody knowing who paid for what. Shared itinerary, bookings gathered in one place and expense splitting among travelers, with a bilingual interface (PT/EN). Node.js, Express and MongoDB.",
        resumo: "Group trips: shared itinerary, bookings and expense splitting."
      },
      es: {
        brief: "Rumo, en desarrollo: planificación de viajes en grupo que resuelve los dos puntos en los que se atasca un viaje en grupo, que nadie sepa el itinerario acordado y que nadie sepa quién pagó qué. Itinerario compartido, reservas reunidas en un solo lugar y división de gastos entre los viajeros, con interfaz bilingüe (PT/EN). Node.js, Express y MongoDB.",
        resumo: "Viajes en grupo: itinerario compartido, reservas y división de gastos."
      },
      fr: {
        brief: "Rumo, en développement : planification de voyages en groupe qui résout les deux points où un voyage en groupe se bloque, personne ne connaissant l'itinéraire convenu et personne ne sachant qui a payé quoi. Itinéraire partagé, réservations réunies au même endroit et partage des dépenses entre les voyageurs, avec une interface bilingue (PT/EN). Node.js, Express et MongoDB.",
        resumo: "Voyages en groupe : itinéraire partagé, réservations et partage des dépenses."
      },
      it: {
        brief: "Rumo, in sviluppo: pianificazione di viaggi di gruppo che risolve i due punti in cui un viaggio di gruppo si blocca, nessuno che conosca l'itinerario concordato e nessuno che sappia chi ha pagato cosa. Itinerario condiviso, prenotazioni raccolte in un unico posto e divisione delle spese tra i viaggiatori, con interfaccia bilingue (PT/EN). Node.js, Express e MongoDB.",
        resumo: "Viaggi di gruppo: itinerario condiviso, prenotazioni e divisione delle spese."
      },
      zh: {
        brief: "Rumo(开发中):团体旅行规划工具,解决团体旅行最容易卡住的两个问题——没人知道约定好的行程,以及没人知道谁付了什么钱。提供共享行程、集中管理的预订以及旅行者之间的费用分摊,界面支持双语(PT/EN)。Node.js、Express 和 MongoDB。",
        resumo: "团体旅行:共享行程、预订和费用分摊。"
      }
    }
  },
  {
    name: "Manga Reader",
    cat: "pessoal",
    visibility: "privado",
    icon: "document",
    repo: "https://github.com/pedroiff0/manga-reader",
    stack: [ "Docker", "Suwayomi", "Caddy", "Tailscale" ],
    tags: [ "Self-hosted", "Tailscale", "Media" ],
    brief: "Servidor pessoal de mangás baseado no Suwayomi-Server, em Docker, acessível apenas pela minha rede Tailscale (celular e iPad) e instalável como PWA. Um proxy Caddy fica na frente do servidor, com login próprio para cada amigo e biblioteca e progresso compartilhados. Não é exposto à internet.",
    image: "assets/media/mangareader/poster.webp",
    video: "assets/media/mangareader/tour.webm",
    resumo: "Servidor pessoal de mangás (Suwayomi), acessível só pela tailnet.",
    i18n: {
      en: {
        brief: "Personal manga server based on Suwayomi-Server, running in Docker, accessible only through my Tailscale network (phone and iPad) and installable as a PWA. A Caddy proxy sits in front of the server, with a separate login for each friend and a shared library and progress. It is not exposed to the internet.",
        resumo: "Personal manga server (Suwayomi), accessible only through the tailnet."
      },
      es: {
        brief: "Servidor personal de manga basado en Suwayomi-Server, en Docker, accesible solo a través de mi red Tailscale (celular e iPad) e instalable como PWA. Un proxy Caddy se sitúa delante del servidor, con inicio de sesión propio para cada amigo y biblioteca y progreso compartidos. No está expuesto a internet.",
        resumo: "Servidor personal de manga (Suwayomi), accesible solo a través de la tailnet."
      },
      fr: {
        brief: "Serveur personnel de mangas basé sur Suwayomi-Server, sous Docker, accessible uniquement via mon réseau Tailscale (téléphone et iPad) et installable en tant que PWA. Un proxy Caddy se place devant le serveur, avec une connexion propre à chaque ami et une bibliothèque et une progression partagées. Il n'est pas exposé à Internet.",
        resumo: "Serveur personnel de mangas (Suwayomi), accessible uniquement via le tailnet."
      },
      it: {
        brief: "Server personale di manga basato su Suwayomi-Server, in Docker, accessibile solo tramite la mia rete Tailscale (cellulare e iPad) e installabile come PWA. Un proxy Caddy si trova davanti al server, con login separato per ogni amico e libreria e progressi condivisi. Non è esposto a Internet.",
        resumo: "Server personale di manga (Suwayomi), accessibile solo tramite la tailnet."
      },
      zh: {
        brief: "基于 Suwayomi-Server 的个人漫画服务器，运行在 Docker 中，仅可通过我的 Tailscale 网络（手机和 iPad）访问，并可作为 PWA 安装。服务器前方部署了 Caddy 代理，每位朋友拥有独立登录账号，并共享书库和阅读进度。该服务器不对互联网开放。",
        resumo: "个人漫画服务器（Suwayomi），仅可通过 tailnet 访问。"
      }
    }
  },
  {
    name: "E-lixo",
    cat: "academico",
    visibility: "elaboracao",
    icon: "document",
    repo: "",
    stack: [ "Eletrônica", "Ciência do Ambiente", "LaTeX" ],
    tags: [ "E-waste", "Sustainability", "Outreach" ],
    brief: "Pra onde vai a bateria que morreu? Projeto integrador de Filosofia da Ciência e Tecnologia (IFF, 2026/2), em grupo, sobre lixo eletrônico com foco em baterias de carro, bicicleta elétrica e celular. Mapeia o descarte inadequado em Bom Jesus do Itabapoana, a distância entre o que a lei manda (PNRS) e os pontos de coleta que a cidade oferece, e propõe trazer o Circuito Verde do IFF para o campus BJI. Eixo técnico em Eletrônica Analógica e Digital, Ciência do Ambiente e Ciência dos Materiais; relatório e defesa em novembro de 2026. Tem bateria velha ou celular quebrado na gaveta? Não vai no lixo comum: leve a um ponto de coleta e ajude a fechar esse ciclo.",
    image: "assets/media/elixo/poster.webp",
    status: "camp",
    resumo: "Campanha sobre o descarte de baterias e e-lixo em Bom Jesus do Itabapoana.",
    i18n: {
      en: {
        brief: "Where does a dead battery go? Integrative project for Philosophy of Science and Technology (IFF, 2026/2), done as a group, on electronic waste with a focus on car, e-bike and phone batteries. It maps improper disposal in Bom Jesus do Itabapoana, the gap between what the law requires (PNRS) and the collection points the city offers, and proposes bringing the IFF Circuito Verde to the BJI campus. Technical axis in Analog and Digital Electronics, Environmental Science and Materials Science; report and defense in November 2026. Have an old battery or a broken phone in a drawer? It doesn't go in the regular trash: take it to a collection point and help close this loop.",
        resumo: "Campaign on the disposal of batteries and e-waste in Bom Jesus do Itabapoana."
      },
      es: {
        brief: "¿A dónde va la batería que murió? Proyecto integrador de Filosofía de la Ciencia y la Tecnología (IFF, 2026/2), en grupo, sobre residuos electrónicos con foco en baterías de coche, bicicleta eléctrica y móvil. Mapea el descarte inadecuado en Bom Jesus do Itabapoana, la distancia entre lo que manda la ley (PNRS) y los puntos de recogida que ofrece la ciudad, y propone llevar el Circuito Verde del IFF al campus BJI. Eje técnico en Electrónica Analógica y Digital, Ciencia del Ambiente y Ciencia de los Materiales; informe y defensa en noviembre de 2026. ¿Tienes una batería vieja o un móvil roto en el cajón? No va a la basura común: llévalo a un punto de recogida y ayuda a cerrar este ciclo.",
        resumo: "Campaña sobre el descarte de baterías y residuos electrónicos en Bom Jesus do Itabapoana."
      },
      fr: {
        brief: "Où va la batterie qui est morte ? Projet intégrateur de Philosophie des Sciences et des Technologies (IFF, 2026/2), en groupe, sur les déchets électroniques, avec un accent sur les batteries de voiture, de vélo électrique et de téléphone. Il cartographie l'élimination inappropriée à Bom Jesus do Itabapoana, l'écart entre ce que la loi impose (PNRS) et les points de collecte offerts par la ville, et propose d'amener le Circuito Verde de l'IFF sur le campus BJI. Axe technique en Électronique Analogique et Numérique, Science de l'Environnement et Science des Matériaux ; rapport et soutenance en novembre 2026. Vous avez une vieille batterie ou un téléphone cassé dans un tiroir ? Cela ne va pas à la poubelle ordinaire : apportez-le à un point de collecte et aidez à boucler ce cycle.",
        resumo: "Campagne sur l'élimination des batteries et des déchets électroniques à Bom Jesus do Itabapoana."
      },
      it: {
        brief: "Dove va a finire la batteria che ha smesso di funzionare? Progetto integratore di Filosofia della Scienza e della Tecnologia (IFF, 2026/2), di gruppo, sui rifiuti elettronici con focus su batterie di auto, bicicletta elettrica e telefono. Mappa lo smaltimento improprio a Bom Jesus do Itabapoana, la distanza tra ciò che prescrive la legge (PNRS) e i punti di raccolta offerti dalla città, e propone di portare il Circuito Verde dell'IFF al campus BJI. Asse tecnico in Elettronica Analogica e Digitale, Scienza dell'Ambiente e Scienza dei Materiali; relazione e discussione a novembre 2026. Hai una vecchia batteria o un telefono rotto nel cassetto? Non va nella spazzatura comune: portalo a un punto di raccolta e aiuta a chiudere questo ciclo.",
        resumo: "Campagna sullo smaltimento di batterie e rifiuti elettronici a Bom Jesus do Itabapoana."
      },
      zh: {
        brief: "报废的电池去了哪里?哲学、科学与技术综合项目(IFF,2026/2),小组完成,主题为电子垃圾,重点关注汽车、电动自行车和手机电池。项目梳理了 Bom Jesus do Itabapoana 的不当丢弃现状、法律规定(PNRS)与城市所提供回收点之间的差距,并提议将 IFF 的 Circuito Verde 引入 BJI 校区。技术方向涵盖模拟与数字电子学、环境科学和材料科学;报告与答辩定于 2026 年 11 月。抽屉里有旧电池或坏手机吗?它们不能扔进普通垃圾桶:请送到回收点,帮助完成这个闭环。",
        resumo: "关于 Bom Jesus do Itabapoana 电池和电子垃圾处理的宣传活动。"
      }
    }
  },
  {
    name: "Portfólio v1 (sci-fi)",
    cat: "pessoal",
    visibility: "privado",
    icon: "globe",
    repo: "https://github.com/pedroiff0/portfolio-v1-scifi",
    stack: [ "JavaScript", "Three.js", "Canvas" ],
    tags: [ "Three.js", "Portfolio" ],
    brief: "Primeira versão do portfólio, com visual sci-fi (HUD, Three.js e canvas), preservada antes da refatoração para a versão clean atual.",
    image: "assets/media/portfolio-v1/poster.webp",
    video: "assets/media/portfolio-v1/tour.webm",
    resumo: "Primeira versão do portfólio, com visual sci-fi, preservada.",
    i18n: {
      en: {
        brief: "First version of the portfolio, with a sci-fi look (HUD, Three.js and canvas), preserved before the refactor to the current clean version.",
        resumo: "First version of the portfolio, with a sci-fi look, preserved."
      },
      es: {
        brief: "Primera versión del portafolio, con estética sci-fi (HUD, Three.js y canvas), preservada antes de la refactorización a la versión clean actual.",
        resumo: "Primera versión del portafolio, con estética sci-fi, conservada."
      },
      fr: {
        brief: "Première version du portfolio, avec un style sci-fi (HUD, Three.js et canvas), conservée avant la refonte vers la version clean actuelle.",
        resumo: "Première version du portfolio, avec un style sci-fi, conservée."
      },
      it: {
        brief: "Prima versione del portfolio, con aspetto sci-fi (HUD, Three.js e canvas), conservata prima del refactoring verso l'attuale versione clean.",
        resumo: "Prima versione del portfolio, con un aspetto sci-fi, conservata."
      },
      zh: {
        brief: "作品集的第一个版本,采用科幻风格(HUD、Three.js 和 canvas),在重构为当前简洁版本之前予以保留。",
        resumo: "作品集的第一个版本，采用科幻风格，已保留存档。"
      }
    }
  },
  {
    name: "Portfólio (este site)",
    cat: "pessoal",
    visibility: "público",
    icon: "globe",
    repo: "https://github.com/pedroiff0/portfolio",
    stack: [ "HTML", "CSS", "JavaScript", "Python", "Playwright", "GitHub Pages" ],
    tags: [ "Portfolio", "Multilingual", "Static Site" ],
    brief: "Este portfólio: página única e minimalista, multilíngue (PT/EN/ES/FR), sem framework e com o visual do site oficial (tema claro e escuro, cartões com detalhes, filtro e busca de projetos). O conteúdo não vive no HTML: é escrito em português numa nota do vault Obsidian, traduzida por IA para EN/ES/FR e compilada por um script Python para JS, com verificação automática no pre-commit. Serve de página de boas-vindas para o site oficial, onde está o conteúdo completo.",
    image: "assets/media/portfolio/poster.webp",
    video: "assets/media/portfolio/tour.webm",
    resumo: "Esta página: portfólio único e multilíngue, gerado a partir de Markdown.",
    i18n: {
      en: {
        brief: "This portfolio: a single-page, minimalist, multilingual site (PT/EN/ES/FR), with no framework and the look of the official site (light and dark theme, cards with details, project filter and search). The content does not live in the HTML: it is written in Portuguese in a note in the Obsidian vault, translated by AI into EN/ES/FR and compiled by a Python script into JS, with automatic verification in the pre-commit. It serves as a welcome page for the official site, where the full content is.",
        resumo: "This page: a single multilingual portfolio, generated from Markdown."
      },
      es: {
        brief: "Este portafolio: página única y minimalista, multilingüe (PT/EN/ES/FR), sin framework y con el aspecto del sitio oficial (tema claro y oscuro, tarjetas con detalles, filtro y búsqueda de proyectos). El contenido no vive en el HTML: se escribe en portugués en una nota del vault de Obsidian, se traduce con IA a EN/ES/FR y un script de Python lo compila a JS, con verificación automática en el pre-commit. Sirve como página de bienvenida para el sitio oficial, donde está el contenido completo.",
        resumo: "Esta página: portafolio único y multilingüe, generado a partir de Markdown."
      },
      fr: {
        brief: "Ce portfolio : page unique et minimaliste, multilingue (PT/EN/ES/FR), sans framework et avec l'apparence du site officiel (thème clair et sombre, cartes avec détails, filtre et recherche de projets). Le contenu ne vit pas dans le HTML : il est rédigé en portugais dans une note du vault Obsidian, traduit par IA vers EN/ES/FR et compilé par un script Python en JS, avec vérification automatique au pre-commit. Il sert de page d'accueil pour le site officiel, où se trouve le contenu complet.",
        resumo: "Cette page : portfolio unique et multilingue, généré à partir de Markdown."
      },
      it: {
        brief: "Questo portfolio: pagina unica e minimalista, multilingue (PT/EN/ES/FR), senza framework e con l'aspetto del sito ufficiale (tema chiaro e scuro, schede con dettagli, filtro e ricerca dei progetti). Il contenuto non vive nell'HTML: è scritto in portoghese in una nota del vault Obsidian, tradotto dall'IA in EN/ES/FR e compilato da uno script Python in JS, con verifica automatica nel pre-commit. Serve da pagina di benvenuto per il sito ufficiale, dove si trova il contenuto completo.",
        resumo: "Questa pagina: portfolio unico e multilingue, generato a partire da Markdown."
      },
      zh: {
        brief: "本作品集：单页、极简、多语言（PT/EN/ES/FR），不使用框架，并采用官方网站的视觉风格（浅色和深色主题、带详情的卡片、项目筛选与搜索）。内容不存放在 HTML 中：而是用葡萄牙语写在 Obsidian vault 的一篇笔记里，由 AI 翻译成 EN/ES/FR，再由 Python 脚本编译为 JS，并在 pre-commit 阶段进行自动校验。它作为官方网站的欢迎页，完整内容请见官方网站。",
        resumo: "本页面：单页多语言作品集，由 Markdown 生成。"
      }
    }
  }
];

const FEATURED = [
  REPOS.find(r => r.name === "Sistema Acadêmico"),
  REPOS.find(r => r.name === "Researcher Hub"),
  REPOS.find(r => r.name === "Rumo"),
  REPOS.find(r => r.name === "Zênite"),
  REPOS.find(r => r.name === "ReLaTeX"),
  REPOS.find(r => r.name === "E-lixo")
];

const RESEARCH = REPOS.filter(r => r.cat === "pesquisa").map(r => ({
  ...r, title: r.name, badge: r.visibility === "público" ? "Público" : "Privado",
  summary: r.brief, details: r.brief + "  Repositório: " + r.repo
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
      },
      it: {
        title: "Comprendere la Materia Oscura a partire dagli Shock Extragalattici",
        kind: "IC Junior · CNPq",
        desc: "Iniziazione Scientifica Junior sulla materia oscura e sugli shock extragalattici."
      },
      zh: { title: "从星系外激波理解暗物质", kind: "初级科研启蒙计划 · CNPq", desc: "关于暗物质和星系外激波的初级科研启蒙计划。" }
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
      },
      it: {
        title: "MobFog in IFFMaker",
        kind: "IC · IFF",
        desc: "Progetto di Iniziazione Scientifica dell'IFF (fog computing / edge)."
      },
      zh: { title: "IFFMaker 中的 MobFog", kind: "科研启蒙计划 · IFF", desc: "IFF 科研启蒙计划项目(雾计算 / 边缘计算)。" }
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
      },
      it: {
        title: "Simulare l'Impatto dei Satelliti sulle Osservazioni Astronomiche",
        kind: "Volontario · CNPq",
        desc: "Simulazione dell'impatto delle scie dei satelliti sulle immagini astronomiche."
      },
      zh: { title: "模拟卫星对天文观测的影响", kind: "志愿者 · CNPq", desc: "模拟卫星轨迹对天文图像的影响。" }
    }
  },
  {
    title: "Detecção de Anomalias em Estrelas da Via Láctea (Gaia + Surveys + ML)",
    icon: "star",
    kind: "IC · CNPq (PIBIC)",
    period: "Out. 2025 — Set. 2026",
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
      },
      it: {
        title: "Rilevamento di anomalie nelle stelle della Via Lattea (Gaia + Surveys + ML)",
        kind: "IC · CNPq (PIBIC)",
        desc: "Borsa PIBIC/CNPq: apprendimento automatico su Gaia DR3 + GALAH DR4 + GCNS per l'archeologia galattica e le popolazioni stellari. Co-autori della PUC Chile."
      },
      zh: {
        title: "银河系恒星异常检测(Gaia + Surveys + ML)",
        kind: "IC · CNPq (PIBIC)",
        desc: "PIBIC/CNPq 奖学金:基于 Gaia DR3 + GALAH DR4 + GCNS 的机器学习,用于银河考古学和恒星星族研究。与 PUC Chile 合作撰写。"
      }
    }
  },
  {
    title: "Detecção de Anomalias em Estrelas da Via Láctea (Fase II)",
    icon: "star",
    kind: "IC · CNPq (PIBIC)",
    period: "Out. 2026 — Set. 2027",
    orient: "Dra. Ana Cecília Soja e Dra. Maria Luiza Linhares Dantas",
    desc: "Continuação do projeto PIBIC/CNPq: aprendizado de máquina sobre Gaia DR3 + GALAH DR4 + GCNS para arqueologia galáctica e populações estelares. Co-autoria PUC Chile.",
    i18n: {
      en: {
        title: "Anomaly Detection in Milky Way Stars (Phase II)",
        kind: "Scientific Initiation · CNPq (PIBIC)",
        desc: "Continuation of the PIBIC/CNPq project: machine learning on Gaia DR3 + GALAH DR4 + GCNS for galactic archaeology and stellar populations. Co-authored with PUC Chile."
      },
      es: {
        title: "Detección de Anomalías en Estrellas de la Vía Láctea (Fase II)",
        kind: "Iniciación Científica · CNPq (PIBIC)",
        desc: "Continuación del proyecto PIBIC/CNPq: aprendizaje automático sobre Gaia DR3 + GALAH DR4 + GCNS para arqueología galáctica y poblaciones estelares. Coautoría con PUC Chile."
      },
      fr: {
        title: "Détection d'anomalies dans les étoiles de la Voie lactée (Phase II)",
        kind: "Initiation Scientifique · CNPq (PIBIC)",
        desc: "Poursuite du projet PIBIC/CNPq : apprentissage automatique sur Gaia DR3 + GALAH DR4 + GCNS pour l'archéologie galactique et les populations stellaires. Co-auteur avec PUC Chile."
      },
      it: {
        title: "Rilevamento di anomalie nelle stelle della Via Lattea (Fase II)",
        kind: "IC · CNPq (PIBIC)",
        desc: "Prosecuzione del progetto PIBIC/CNPq: apprendimento automatico su Gaia DR3 + GALAH DR4 + GCNS per l'archeologia galattica e le popolazioni stellari. Co-autori della PUC Chile."
      },
      zh: {
        title: "银河系恒星异常检测(第二阶段)",
        kind: "IC · CNPq (PIBIC)",
        desc: "PIBIC/CNPq 项目的延续:基于 Gaia DR3 + GALAH DR4 + GCNS 的机器学习,用于银河考古学和恒星星族研究。与 PUC Chile 合作撰写。"
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
    value: "@ra.pedroh",
    href: "https://instagram.com/ra.pedroh"
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
  grade: "90 disciplinas mapeadas no Sistema Acadêmico (grade IFF Eng. de Computação, 1º→10º período).",
  instagram: "ra.pedroh",
  location: "Bom Jesus do Itabapoana, RJ",
  tagline: "Engenharia de Computação no IFF · bolsista PIBIC/CNPq · astrofísica computacional",
  i18n: {
    en: {
      tagline: "Computer Engineering at IFF · PIBIC/CNPq scholar · computational astrophysics"
    },
    es: {
      tagline: "Ingeniería Informática en el IFF · becario PIBIC/CNPq · astrofísica computacional"
    },
    fr: {
      tagline: "Génie informatique à l'IFF · boursier PIBIC/CNPq · astrophysique computationnelle"
    },
    it: {
      tagline: "Ingegneria Informatica all'IFF · borsista PIBIC/CNPq · astrofisica computazionale"
    },
    zh: { tagline: "IFF 计算机工程 · PIBIC/CNPq 奖学金获得者 · 计算天体物理学" }
  }
};

// Dicionário de interface (PT-BR padrão).
const I18N = {
  pt: {
    nav: [ "Sobre", "Projetos", "Trabalhos", "Pesquisa", "Currículo", "Lattes", "Contato" ],
    hero: {
      eyebrow: "Engenharia de Computação · Instituto Federal Fluminense",
      sub: "Construo software para a academia e uso computação para entender o cosmos. Estudante de Engenharia de Computação, bolsista de Iniciação Científica (PIBIC/CNPq), na interseção entre métodos computacionais e astrofísica.",
      badges: [
        "PIBIC / CNPq",
        "IAAC 2024 & 2025",
        "CCNA · CyberOps · IoT",
        "Linux & Servidores",
        "Astrofísica Computacional",
        "Machine Learning",
        "Gaia · GALAH",
        "ORCID · Scholar"
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
      contato: { title: "Vamos nos conectar", lead: "Fale comigo pelo canal que preferir." },
      contatoHero: { title: "Horizonte de Eventos · Onde o Código Transcende o Espaço-Tempo" }
    },
    about: [
      "Sou estudante de <strong>Engenharia de Computação</strong> no <strong>Instituto Federal Fluminense (IFF)</strong>, campus Bom Jesus do Itabapoana — RJ, e bolsista de Iniciação Científica (<strong>PIBIC/CNPq</strong>). Minha pesquisa fica na fronteira entre computação e astronomia: arqueologia galáctica, populações estelares e estrutura da Via Láctea, com aprendizado de máquina aplicado a dados do <em>Gaia</em> e de surveys complementares.",
      "Do lado de engenharia, domino <strong>Python</strong> e <strong>C</strong>, redes de computadores (certificações <strong>Cisco CCNA, CyberOps e IoT</strong>), administração de servidores Linux e desenvolvimento de software full-stack. Participo da <strong>International Astronomy and Astrophysics Competition</strong> (IAAC 2024 e 2025) e apresentei trabalhos em eventos como FEBRACE, Mostratec, CONFICT e na Feira Brasileira de Iniciação Científica.",
      "Sou Técnico em Informática pelo IFF (2020–2022) e um dos organizadores da Semana de Computação, Engenharia e Gestão do IFF."
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
    cat: {
      all: "Todos",
      software: "Software",
      pesquisa: "Pesquisa",
      academico: "Acadêmico",
      pessoal: "Pessoal",
      searchPlaceholder: "Filtrar por nome, tecnologia ou tag...",
      searchAria: "Buscar projetos"
    },
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
    footer: "feito com café, código e um céu estrelado.",
    hud: {
      returnBtn: "Retornar ao Hub [ESC]",
      introBtn: "🚀 Intro",
      searchBtn: "Buscar",
      hubActive: "EXPLORADOR // ATIVO",
      missions: "MISSÕES",
      exploreProjects: "Explorar Projetos",
      terminal: "Terminal (⌘K)",
      connect: "Conectar",
      goldenRecord: "Clique no Disco Dourado para decodificar a mensagem interestelar gravada em Bom Jesus do Itabapoana - RJ.",
      tesseractSync: "Clique para sincronizar os dados da singularidade através do tesseract gravitacional.",
      docking: "🌀 Iniciar Acoplamento (68 RPM)",
      statusExplorer: "STATUS EXPLORADOR",
      radar: "📡 RADAR ORBITAL // MINIMAP",
      skipIntro: "Pular [ESC] ⏭️",
      questCompletedPrefix: "Missão Cumprida:",
      questDoneTooltip: "Missão concluída!",
      questRunTooltip: "Clique para executar esta missão"
    },
    sectorNav: {
      sobre: "Sobre",
      software: "Software",
      pesquisa: "Pesquisa",
      contato: "Contato",
      contatoFull: "CV & Contatos"
    },
    hub: {
      sector1: { kicker: "SETOR 01 // TERRA", title: "Sobre Mim", sub: "Trajetória & Métricas" },
      sector2: { kicker: "SETOR 02 // MARTE", title: "Projetos & Código", sub: "12 Sistemas no GitHub" },
      sector3: {
        kicker: "SETOR 03 // SATURNO",
        title: "Pesquisa & Bolsas",
        sub: "Gaia DR3, GALAH & PIBIC"
      },
      sector4: {
        kicker: "SETOR 04 // GARGÂNTUA",
        title: "CV & Contatos",
        sub: "Interestelar & Lattes CNPq"
      }
    },
    kickers: {
      sobre: "SETOR 01 // TERRA · TRAJETÓRIA & FORMAÇÃO",
      software: "SETOR 02 // MARTE · SOFTWARE & ENGENHARIA",
      pesquisa: "SETOR 03 // SATURNO · ASTROFÍSICA & CNPQ",
      bolsas: "INICIAÇÃO CIENTÍFICA & BOLSAS",
      contato: "SETOR 04 // SINGULARIDADE GARGÂNTUA · PROTOCOLO LAZARUS",
      contatoChannels: "CANAIS DIRETOS // TRANSMISSÃO DEEP SPACE"
    },
    cmdPalette: {
      placeholder: "Buscar projetos, pesquisa, comandos, contatos...",
      navSobreTitle: "Abrir Setor: Sobre Mim & Formação",
      navSobreSub: "Setor 01",
      navSoftwareTitle: "Abrir Setor: Software & Repositórios",
      navSoftwareSub: "Setor 02",
      navPesquisaTitle: "Abrir Setor: Pesquisa & Astrofísica",
      navPesquisaSub: "Setor 03",
      navContatoTitle: "Abrir Setor: Curriculum Vitae & Contatos",
      navContatoSub: "Setor 04",
      copyLattesTitle: "Copiar ID Lattes (6818168089966785)",
      copyLattesSub: "CNPq",
      copyLattesToast: "ID Lattes copiado!",
      copyEmailTitle: "Copiar E-mail (pedroiff0@gmail.com)",
      copyEmailSub: "E-mail",
      copyEmailToast: "E-mail copiado!"
    },
    cmdSecrets: {
      motherlodeTitle: "💰 MOTHERLODE (+§50.000 Simoleons)",
      motherlodeSub: "Código Secreto // 'Kaching! +§50.000 Simoleons concedidos ao saldo orbital'",
      hesoyamTitle: "💵 HESOYAM (+$250.000 + Colete/Vida)",
      hesoyamSub: "Código Secreto // '+$250k, Vida 100%, Colete 100% e Reparo Imediato'",
      painkillerTitle: "⭐ PAINKILLER (Invencibilidade 5 Minutos)",
      painkillerSub: "Código Secreto // '1-999-724-654-5537: Escudo cósmico invulnerável por 5 minutos'",
      bmthTitle: "🎸 CAN YOU FEEL MY HEART // SEMPITERNAL",
      bmthSub: "Transmissão Sonora // 'Can you hear the silence? Can you feel my heart?'",
      bmthTag: "TRANSMISSÃO",
      kratosTitle: "🪓 FÚRIA ANCESTRAL // \"BOY!\"",
      kratosSub: "Ressonância Antiga // 'BOY! Não tenha pena. Seja melhor.'",
      kratosTag: "ARTEFATO",
      horizonTitle: "👁️ VARREDURA FOCUS // SISTEMA GAIA",
      horizonSub: "Interface Neural // 'Rede de Realidade Aumentada Sincronizada'",
      gagaTitle: "✨ BORN THIS WAY // SYNTH THEME",
      gagaSub: "Frequência Cósmica // 'I'm on the right track baby, I was born this way!'",
      gagaTag: "ÁUDIO",
      matrixTitle: "⚡ EXECUTAR: Protocolo Matrix (Digital Rain)",
      matrixSub: "Easter Egg // 'There is no spoon...'",
      matrixToast: "🟢 Modo Matrix Ativado: Siga o coelho branco...",
      interstellarTitle: "🌌 EXECUTAR: Protocolo Lazarus / Interestelar (Christopher Nolan)",
      interstellarSub: "Easter Egg // 'Não entre dócil nessa noite escura. A fúria contra a morte da luz.'",
      interstellarToast: "🌌 Interestelar (Nolan): 'O amor é a única coisa que transcende as dimensões do tempo e espaço.'",
      gargantuaTitle: "🕳️ EXECUTAR: Horizonte de Eventos de Gargântua",
      gargantuaSub: "Easter Egg // Buraco Negro Supermassivo (100M M☉ · Dilatação: 1h = 7 anos)",
      gargantuaToast: "🕳️ Gargântua: Singularidade e lente gravitacional de Einstein atingidas!",
      stayTitle: "⏳ EXECUTAR: Sinal Gravitacional 5D de Cooper (S-T-A-Y)",
      staySub: "Easter Egg // 'S-T-A-Y... Foi ele o tempo todo. Meu pai era o meu fantasma.'",
      tarsTitle: "🤖 EXECUTAR: Telemetria TARS (IA Tática)",
      tarsSub: "Easter Egg // Honestidade: 90% · Humor: 75% · 'É necessário.'",
      tarsToast: "🤖 TARS: 'Olá Cooper. Configuração de honestidade em 90%. Pronto para o acoplamento!'",
      enduranceTitle: "🌀 EXECUTAR: Manobra de Acoplamento Endurance (68 RPM)",
      enduranceSub: "Easter Egg // 'Cooper, it's not possible! — No, it's necessary.'",
      meaning42Title: "🌌 EXECUTAR: O Sentido da Vida, do Universo e Tudo Mais",
      meaning42Sub: "Easter Egg // Resposta: 42 (Douglas Adams)",
      meaning42Toast: "🌌 42: A Resposta para a Vida, o Universo e Tudo Mais. Não Entre em Pânico!",
      apolloTitle: "🚀 EXECUTAR: Telemetria Apollo 11 (Saturn V)",
      apolloSub: "Easter Egg // 'Houston, Tranquility Base here. The Eagle has landed.'",
      apolloToast: "🚀 Apollo 11: 'Um pequeno passo para o homem, um salto gigante para a humanidade.'",
      coffeeTitle: "☕ EXECUTAR: Injeção de Cafeína DevOps",
      coffeeSub: "Easter Egg // Recarga de 100% de Uptime",
      coffeeToast: "☕ Cafeína injetada nos servidores: Uptime 100%, 0 bugs!",
      sudoTitle: "💻 EXECUTAR: sudo su (Root Cósmico)",
      sudoSub: "Easter Egg // root@pedro-rocha:~#",
      sudoToast: "💻 Acesso Root Concedido: Bem-vindo, Administrador da Galáxia.",
      gaiaTitle: "🔭 EXECUTAR: Sonda Espacial Gaia DR3 Astrometric Stream",
      gaiaSub: "Easter Egg // 1.8 bilhão de fontes astrométricas",
      gaiaToast: "🔭 Gaia DR3: Sincronização astrométrica com 1.8 bilhão de estrelas concluída!"
    },
    quests: {
      landingTitle: "Pouso Orbital",
      landingDesc: "Completar a descida e reentrada na Terra",
      sobreTitle: "Registro de Bordo",
      sobreDesc: "Acessar biografia e trajetória acadêmica no Setor 01",
      softwareTitle: "Engenharia de Software",
      softwareDesc: "Explorar o catálogo de softwares e 12 projetos no Setor 02",
      pesquisaTitle: "Astrofísica & Gaia DR3",
      pesquisaDesc: "Inspecionar a Pesquisa Científica Gaia DR3 no Setor 03",
      contatoTitle: "Canais de Transmissão",
      contatoDesc: "Acessar o Setor 04 com Lattes, GitHub e CV",
      cmdTitle: "Terminal Cósmico (⌘K)",
      cmdDesc: "Abrir a Paleta de Comandos ⌘K / Ctrl+K",
      sfxTitle: "Sintetizador Acústico",
      sfxDesc: "Alternar ou testar o áudio espacial Web Audio",
      orbTitle: "Sonda Planetária 3D",
      orbDesc: "Interagir com o Core Station Orb no Hub",
      orbToast: "🔮 Core Station Orb sincronizado com a rede neural",
      spectrumTitle: "Espectroscopia H-Alpha",
      spectrumDesc: "Ajustar o espectrômetro para a raia Hα (6563 Å) no Setor 03",
      langTitle: "Poliglota Intergaláctico",
      langDesc: "Alternar o idioma da interface (EN, ES, FR ou PT)",
      filterTitle: "Filtro de Arquitetura",
      filterDesc: "Filtrar os projetos por categoria tecnológica",
      supernovaTitle: "Caçador de Supernovas",
      supernovaDesc: "Descobrir uma estrela oculta clicando no cosmos",
      goldenRecordTitle: "Disco de Ouro Voyager",
      goldenRecordDesc: "Ativar a transmissão interestelar no Setor 01",
      pulsarAudioTitle: "Eco de Pulsar Cósmico",
      pulsarAudioDesc: "Ouvir a frequência acústica de Gaia DR3 no Setor 03",
      quantumPingTitle: "Ping Quântico Relativístico",
      quantumPingDesc: "Disparar feixe de sinal quântico no Setor 04",
      murphWatchTitle: "Relógio Gravitacional de Murph",
      murphWatchDesc: "Decodificar a mensagem em código Morse 'S-T-A-Y' no Setor 04 (Gargântua)",
      enduranceDockTitle: "Acoplamento Endurance a 68 RPM",
      enduranceDockDesc: "Executar manobra de sincronização de rotação com a Endurance no Setor 04",
      hackerTitle: "Terminal Hacker Cósmico",
      hackerDesc: "Executar comando secreto no ⌘K (ex: matrix, 42, blackhole, apollo)",
      konamiTitle: "Protocolo Konami Hiperespacial",
      konamiDesc: "Digitar o Código Konami: ↑ ↑ ↓ ↓ ← → ← → B A",
      easterEggTitle: "Caçador de Relíquias Cósmicas",
      easterEggDesc: "Encontrar e decodificar um dos Easter Eggs flutuantes",
      easterEggToast: "🔍 Dica: Procure ícones flutuantes misteriosos no Hub e nos Setores!"
    }
  },
  en: {
    nav: [ "About", "Projects", "Work", "Research", "Resume", "Lattes", "Contact" ],
    hero: {
      eyebrow: "Computer Engineering · Fluminense Federal Institute",
      sub: "I build software for academia and use computation to understand the cosmos. Computer Engineering student, Scientific Initiation Scholar (PIBIC/CNPq), at the intersection of computational methods and astrophysics.",
      badges: [
        "PIBIC / CNPq",
        "IAAC 2024 & 2025",
        "CCNA · CyberOps · IoT",
        "Linux & Servers",
        "Computational Astrophysics",
        "Machine Learning",
        "Gaia · GALAH",
        "ORCID · Scholar"
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
      contato: { title: "Let's connect", lead: "Reach me through your preferred channel." },
      contatoHero: { title: "Event Horizon · Where Code Transcends Spacetime" }
    },
    about: [
      "I am an undergraduate <strong>Computer Engineering</strong> student at the <strong>Fluminense Federal Institute (IFF)</strong>, campus Bom Jesus do Itabapoana — RJ, and a Scientific Initiation Scholar (<strong>PIBIC/CNPq</strong>). My research lies at the frontier of computing and astronomy: galactic archaeology, stellar populations and the structure of the Milky Way, with machine learning applied to <em>Gaia</em> and complementary survey data.",
      "On the engineering side, I master <strong>Python</strong> and <strong>C</strong>, computer networks (Cisco <strong>CCNA, CyberOps and IoT</strong> certifications), Linux server administration and full-stack software development. I take part in the <strong>International Astronomy and Astrophysics Competition</strong> (IAAC 2024 and 2025) and presented work at events such as FEBRACE, Mostratec, CONFICT and the Brazilian Science Fair.",
      "I hold a Technician in Computing degree from IFF (2020–2022) and am one of the organizers of the IFF Week of Computing, Engineering and Management."
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
    cat: {
      all: "All",
      software: "Software",
      pesquisa: "Research",
      academico: "Academic",
      pessoal: "Personal",
      searchPlaceholder: "Filter by name, technology or tag...",
      searchAria: "Search projects"
    },
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
    footer: "made with coffee, code and a starry sky.",
    hud: {
      returnBtn: "Return to Hub [ESC]",
      introBtn: "🚀 Intro",
      searchBtn: "Search",
      hubActive: "EXPLORER // ACTIVE",
      missions: "MISSIONS",
      exploreProjects: "Explore Projects",
      terminal: "Terminal (⌘K)",
      connect: "Connect",
      goldenRecord: "Click the Golden Record to decode the interstellar message recorded in Bom Jesus do Itabapoana - RJ.",
      tesseractSync: "Click to synchronize singularity data through the gravitational tesseract.",
      docking: "🌀 Initiate Docking (68 RPM)",
      statusExplorer: "EXPLORER STATUS",
      radar: "📡 ORBITAL RADAR // MINIMAP",
      skipIntro: "Skip [ESC] ⏭️",
      questCompletedPrefix: "Mission Complete:",
      questDoneTooltip: "Mission complete!",
      questRunTooltip: "Click to run this mission"
    },
    sectorNav: {
      sobre: "About",
      software: "Software",
      pesquisa: "Research",
      contato: "Contact",
      contatoFull: "CV & Contact"
    },
    hub: {
      sector1: { kicker: "SECTOR 01 // EARTH", title: "About Me", sub: "Journey & Metrics" },
      sector2: { kicker: "SECTOR 02 // MARS", title: "Projects & Code", sub: "12 Systems on GitHub" },
      sector3: {
        kicker: "SECTOR 03 // SATURN",
        title: "Research & Grants",
        sub: "Gaia DR3, GALAH & PIBIC"
      },
      sector4: {
        kicker: "SECTOR 04 // GARGANTUA",
        title: "CV & Contacts",
        sub: "Interstellar & Lattes CNPq"
      }
    },
    kickers: {
      sobre: "SECTOR 01 // EARTH · JOURNEY & EDUCATION",
      software: "SECTOR 02 // MARS · SOFTWARE & ENGINEERING",
      pesquisa: "SECTOR 03 // SATURN · ASTROPHYSICS & CNPQ",
      bolsas: "SCIENTIFIC INITIATION & GRANTS",
      contato: "SECTOR 04 // GARGANTUA SINGULARITY · LAZARUS PROTOCOL",
      contatoChannels: "DIRECT CHANNELS // DEEP SPACE TRANSMISSION"
    },
    cmdPalette: {
      placeholder: "Search projects, research, commands, contacts...",
      navSobreTitle: "Open Sector: About Me & Education",
      navSobreSub: "Sector 01",
      navSoftwareTitle: "Open Sector: Software & Repositories",
      navSoftwareSub: "Sector 02",
      navPesquisaTitle: "Open Sector: Research & Astrophysics",
      navPesquisaSub: "Sector 03",
      navContatoTitle: "Open Sector: Curriculum Vitae & Contacts",
      navContatoSub: "Sector 04",
      copyLattesTitle: "Copy Lattes ID (6818168089966785)",
      copyLattesSub: "CNPq",
      copyLattesToast: "Lattes ID copied!",
      copyEmailTitle: "Copy Email (pedroiff0@gmail.com)",
      copyEmailSub: "Email",
      copyEmailToast: "Email copied!"
    },
    cmdSecrets: {
      motherlodeTitle: "💰 MOTHERLODE (+§50,000 Simoleons)",
      motherlodeSub: "Secret Code // 'Kaching! +§50,000 Simoleons added to your orbital balance'",
      hesoyamTitle: "💵 HESOYAM (+$250,000 + Armor/Health)",
      hesoyamSub: "Secret Code // '+$250k, 100% Health, 100% Armor and Instant Repair'",
      painkillerTitle: "⭐ PAINKILLER (5-Minute Invincibility)",
      painkillerSub: "Secret Code // '1-999-724-654-5537: Invulnerable cosmic shield for 5 minutes'",
      bmthTitle: "🎸 CAN YOU FEEL MY HEART // SEMPITERNAL",
      bmthSub: "Sound Transmission // 'Can you hear the silence? Can you feel my heart?'",
      bmthTag: "TRANSMISSION",
      kratosTitle: "🪓 ANCIENT FURY // \"BOY!\"",
      kratosSub: "Ancient Resonance // 'BOY! Don't be sorry. Be better.'",
      kratosTag: "ARTIFACT",
      horizonTitle: "👁️ FOCUS SCAN // GAIA SYSTEM",
      horizonSub: "Neural Interface // 'Augmented Reality Network Synchronized'",
      gagaTitle: "✨ BORN THIS WAY // SYNTH THEME",
      gagaSub: "Cosmic Frequency // 'I'm on the right track baby, I was born this way!'",
      gagaTag: "AUDIO",
      matrixTitle: "⚡ RUN: Matrix Protocol (Digital Rain)",
      matrixSub: "Easter Egg // 'There is no spoon...'",
      matrixToast: "🟢 Matrix Mode Activated: Follow the white rabbit...",
      interstellarTitle: "🌌 RUN: Lazarus Protocol / Interstellar (Christopher Nolan)",
      interstellarSub: "Easter Egg // 'Do not go gentle into that good night. Rage against the dying of the light.'",
      interstellarToast: "🌌 Interstellar (Nolan): 'Love is the one thing that transcends the dimensions of time and space.'",
      gargantuaTitle: "🕳️ RUN: Gargantua Event Horizon",
      gargantuaSub: "Easter Egg // Supermassive Black Hole (100M M☉ · Time Dilation: 1h = 7 years)",
      gargantuaToast: "🕳️ Gargantua: Singularity and Einstein gravitational lensing reached!",
      stayTitle: "⏳ RUN: Cooper's 5D Gravitational Signal (S-T-A-Y)",
      staySub: "Easter Egg // 'S-T-A-Y... It was him all along. My dad was my ghost.'",
      tarsTitle: "🤖 RUN: TARS Telemetry (Tactical AI)",
      tarsSub: "Easter Egg // Honesty: 90% · Humor: 75% · 'It is necessary.'",
      tarsToast: "🤖 TARS: 'Hello Cooper. Honesty setting at 90%. Ready for docking!'",
      enduranceTitle: "🌀 RUN: Endurance Docking Maneuver (68 RPM)",
      enduranceSub: "Easter Egg // 'Cooper, it's not possible! — No, it's necessary.'",
      meaning42Title: "🌌 RUN: The Meaning of Life, the Universe and Everything",
      meaning42Sub: "Easter Egg // Answer: 42 (Douglas Adams)",
      meaning42Toast: "🌌 42: The Answer to Life, the Universe and Everything. Don't Panic!",
      apolloTitle: "🚀 RUN: Apollo 11 Telemetry (Saturn V)",
      apolloSub: "Easter Egg // 'Houston, Tranquility Base here. The Eagle has landed.'",
      apolloToast: "🚀 Apollo 11: 'One small step for man, one giant leap for mankind.'",
      coffeeTitle: "☕ RUN: DevOps Caffeine Injection",
      coffeeSub: "Easter Egg // 100% Uptime Recharge",
      coffeeToast: "☕ Caffeine injected into the servers: 100% Uptime, 0 bugs!",
      sudoTitle: "💻 RUN: sudo su (Cosmic Root)",
      sudoSub: "Easter Egg // root@pedro-rocha:~#",
      sudoToast: "💻 Root Access Granted: Welcome, Galaxy Administrator.",
      gaiaTitle: "🔭 RUN: Gaia DR3 Space Probe Astrometric Stream",
      gaiaSub: "Easter Egg // 1.8 billion astrometric sources",
      gaiaToast: "🔭 Gaia DR3: Astrometric sync with 1.8 billion stars complete!"
    },
    quests: {
      landingTitle: "Orbital Landing",
      landingDesc: "Complete the descent and re-entry to Earth",
      sobreTitle: "Logbook Entry",
      sobreDesc: "Access biography and academic journey in Sector 01",
      softwareTitle: "Software Engineering",
      softwareDesc: "Explore the software catalog and 12 projects in Sector 02",
      pesquisaTitle: "Astrophysics & Gaia DR3",
      pesquisaDesc: "Inspect the Gaia DR3 Scientific Research in Sector 03",
      contatoTitle: "Transmission Channels",
      contatoDesc: "Access Sector 04 with Lattes, GitHub and CV",
      cmdTitle: "Cosmic Terminal (⌘K)",
      cmdDesc: "Open the Command Palette ⌘K / Ctrl+K",
      sfxTitle: "Acoustic Synthesizer",
      sfxDesc: "Toggle or test the Web Audio spatial sound",
      orbTitle: "3D Planetary Probe",
      orbDesc: "Interact with the Core Station Orb in the Hub",
      orbToast: "🔮 Core Station Orb synced with the neural network",
      spectrumTitle: "H-Alpha Spectroscopy",
      spectrumDesc: "Tune the spectrometer to the Hα line (6563 Å) in Sector 03",
      langTitle: "Intergalactic Polyglot",
      langDesc: "Switch the interface language (EN, ES, FR or PT)",
      filterTitle: "Architecture Filter",
      filterDesc: "Filter projects by technology category",
      supernovaTitle: "Supernova Hunter",
      supernovaDesc: "Discover a hidden star by clicking in the cosmos",
      goldenRecordTitle: "Voyager Golden Record",
      goldenRecordDesc: "Activate the interstellar transmission in Sector 01",
      pulsarAudioTitle: "Cosmic Pulsar Echo",
      pulsarAudioDesc: "Listen to the Gaia DR3 acoustic frequency in Sector 03",
      quantumPingTitle: "Relativistic Quantum Ping",
      quantumPingDesc: "Fire a quantum signal beam in Sector 04",
      murphWatchTitle: "Murph's Gravitational Watch",
      murphWatchDesc: "Decode the 'S-T-A-Y' Morse code message in Sector 04 (Gargantua)",
      enduranceDockTitle: "Endurance Docking at 68 RPM",
      enduranceDockDesc: "Perform the spin-sync docking maneuver with the Endurance in Sector 04",
      hackerTitle: "Cosmic Hacker Terminal",
      hackerDesc: "Run a secret command in ⌘K (e.g. matrix, 42, blackhole, apollo)",
      konamiTitle: "Hyperspace Konami Protocol",
      konamiDesc: "Type the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A",
      easterEggTitle: "Cosmic Relic Hunter",
      easterEggDesc: "Find and decode one of the floating Easter Eggs",
      easterEggToast: "🔍 Hint: Look for mysterious floating icons in the Hub and Sectors!"
    }
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
        "PIBIC / CNPq",
        "IAAC 2024 y 2025",
        "CCNA · CyberOps · IoT",
        "Linux y Servidores",
        "Astrofísica Computacional",
        "Aprendizaje Automático",
        "Gaia · GALAH",
        "ORCID · Scholar"
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
      contato: { title: "Conectemos", lead: "Contáctame por el canal que prefieras." },
      contatoHero: { title: "Horizonte de Sucesos · Donde el Código Trasciende el Espacio-Tiempo" }
    },
    about: [
      "Soy estudiante de <strong>Ingeniería Informática</strong> en el <strong>Instituto Federal Fluminense (IFF)</strong>, campus Bom Jesus do Itabapoana — RJ, y becario de Iniciación Científica (<strong>PIBIC/CNPq</strong>). Mi investigación está en la frontera entre computación y astronomía: arqueología galáctica, poblaciones estelares y estructura de la Vía Láctea, con aprendizaje automático aplicado a datos del <em>Gaia</em> y de relevamientos complementarios.",
      "Del lado de la ingeniería, domino <strong>Python</strong> y <strong>C</strong>, redes de computadoras (certificaciones <strong>Cisco CCNA, CyberOps e IoT</strong>), administración de servidores Linux y desarrollo de software full-stack. Participo de la <strong>International Astronomy and Astrophysics Competition</strong> (IAAC 2024 y 2025) y presenté trabajos en eventos como FEBRACE, Mostratec, CONFICT y la Feria Brasileña de Iniciación Científica.",
      "Soy Técnico en Informática por el IFF (2020–2022) y uno de los organizadores de la Semana de Computación, Ingeniería y Gestión del IFF."
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
      all: "Todos",
      software: "Software",
      pesquisa: "Investigación",
      academico: "Académico",
      pessoal: "Personal",
      searchPlaceholder: "Filtrar por nombre, tecnología o etiqueta...",
      searchAria: "Buscar proyectos"
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
    footer: "hecho con café, código y un cielo estrellado.",
    hud: {
      returnBtn: "Volver al Hub [ESC]",
      introBtn: "🚀 Intro",
      searchBtn: "Buscar",
      hubActive: "EXPLORADOR // ACTIVO",
      missions: "MISIONES",
      exploreProjects: "Explorar Proyectos",
      terminal: "Terminal (⌘K)",
      connect: "Conectar",
      goldenRecord: "Haz clic en el Disco Dorado para decodificar el mensaje interestelar grabado en Bom Jesus do Itabapoana - RJ.",
      tesseractSync: "Haz clic para sincronizar los datos de la singularidad a través del teseracto gravitacional.",
      docking: "🌀 Iniciar Acoplamiento (68 RPM)",
      statusExplorer: "ESTADO EXPLORADOR",
      radar: "📡 RADAR ORBITAL // MINIMAPA",
      skipIntro: "Saltar [ESC] ⏭️",
      questCompletedPrefix: "Misión Cumplida:",
      questDoneTooltip: "¡Misión completada!",
      questRunTooltip: "Haz clic para ejecutar esta misión"
    },
    sectorNav: {
      sobre: "Sobre mí",
      software: "Software",
      pesquisa: "Investigación",
      contato: "Contacto",
      contatoFull: "CV y Contacto"
    },
    hub: {
      sector1: { kicker: "SECTOR 01 // TIERRA", title: "Sobre Mí", sub: "Trayectoria & Métricas" },
      sector2: {
        kicker: "SECTOR 02 // MARTE",
        title: "Proyectos & Código",
        sub: "12 Sistemas en GitHub"
      },
      sector3: {
        kicker: "SECTOR 03 // SATURNO",
        title: "Investigación & Becas",
        sub: "Gaia DR3, GALAH & PIBIC"
      },
      sector4: {
        kicker: "SECTOR 04 // GARGANTÚA",
        title: "CV & Contactos",
        sub: "Interestelar & Lattes CNPq"
      }
    },
    kickers: {
      sobre: "SECTOR 01 // TIERRA · TRAYECTORIA & FORMACIÓN",
      software: "SECTOR 02 // MARTE · SOFTWARE & INGENIERÍA",
      pesquisa: "SECTOR 03 // SATURNO · ASTROFÍSICA & CNPQ",
      bolsas: "INICIACIÓN CIENTÍFICA & BECAS",
      contato: "SECTOR 04 // SINGULARIDAD GARGANTÚA · PROTOCOLO LÁZARO",
      contatoChannels: "CANALES DIRECTOS // TRANSMISIÓN DEEP SPACE"
    },
    cmdPalette: {
      placeholder: "Buscar proyectos, investigación, comandos, contactos...",
      navSobreTitle: "Abrir Sector: Sobre Mí & Formación",
      navSobreSub: "Sector 01",
      navSoftwareTitle: "Abrir Sector: Software & Repositorios",
      navSoftwareSub: "Sector 02",
      navPesquisaTitle: "Abrir Sector: Investigación & Astrofísica",
      navPesquisaSub: "Sector 03",
      navContatoTitle: "Abrir Sector: Curriculum Vitae & Contactos",
      navContatoSub: "Sector 04",
      copyLattesTitle: "Copiar ID Lattes (6818168089966785)",
      copyLattesSub: "CNPq",
      copyLattesToast: "¡ID Lattes copiado!",
      copyEmailTitle: "Copiar Email (pedroiff0@gmail.com)",
      copyEmailSub: "Email",
      copyEmailToast: "¡Email copiado!"
    },
    cmdSecrets: {
      motherlodeTitle: "💰 MOTHERLODE (+§50.000 Simoleones)",
      motherlodeSub: "Código Secreto // '¡Kaching! +§50.000 Simoleones añadidos al saldo orbital'",
      hesoyamTitle: "💵 HESOYAM (+$250.000 + Chaleco/Vida)",
      hesoyamSub: "Código Secreto // '+$250k, Vida 100%, Chaleco 100% y Reparación Instantánea'",
      painkillerTitle: "⭐ PAINKILLER (Invencibilidad 5 Minutos)",
      painkillerSub: "Código Secreto // '1-999-724-654-5537: Escudo cósmico invulnerable durante 5 minutos'",
      bmthTitle: "🎸 CAN YOU FEEL MY HEART // SEMPITERNAL",
      bmthSub: "Transmisión Sonora // 'Can you hear the silence? Can you feel my heart?'",
      bmthTag: "TRANSMISIÓN",
      kratosTitle: "🪓 FURIA ANCESTRAL // \"BOY!\"",
      kratosSub: "Resonancia Antigua // '¡BOY! No lo sientas. Sé mejor.'",
      kratosTag: "ARTEFACTO",
      horizonTitle: "👁️ ESCANEO FOCUS // SISTEMA GAIA",
      horizonSub: "Interfaz Neural // 'Red de Realidad Aumentada Sincronizada'",
      gagaTitle: "✨ BORN THIS WAY // SYNTH THEME",
      gagaSub: "Frecuencia Cósmica // 'I'm on the right track baby, I was born this way!'",
      gagaTag: "AUDIO",
      matrixTitle: "⚡ EJECUTAR: Protocolo Matrix (Lluvia Digital)",
      matrixSub: "Easter Egg // 'There is no spoon...'",
      matrixToast: "🟢 Modo Matrix Activado: Sigue al conejo blanco...",
      interstellarTitle: "🌌 EJECUTAR: Protocolo Lázaro / Interestelar (Christopher Nolan)",
      interstellarSub: "Easter Egg // 'No entres dócil en esa buena noche. Rabia, rabia contra la muerte de la luz.'",
      interstellarToast: "🌌 Interestelar (Nolan): 'El amor es lo único que trasciende las dimensiones del tiempo y el espacio.'",
      gargantuaTitle: "🕳️ EJECUTAR: Horizonte de Sucesos de Gargantúa",
      gargantuaSub: "Easter Egg // Agujero Negro Supermasivo (100M M☉ · Dilatación: 1h = 7 años)",
      gargantuaToast: "🕳️ Gargantúa: ¡Singularidad y lente gravitacional de Einstein alcanzadas!",
      stayTitle: "⏳ EJECUTAR: Señal Gravitacional 5D de Cooper (S-T-A-Y)",
      staySub: "Easter Egg // 'S-T-A-Y... Fue él todo el tiempo. Mi padre era mi fantasma.'",
      tarsTitle: "🤖 EJECUTAR: Telemetría TARS (IA Táctica)",
      tarsSub: "Easter Egg // Honestidad: 90% · Humor: 75% · 'Es necesario.'",
      tarsToast: "🤖 TARS: 'Hola Cooper. Configuración de honestidad al 90%. ¡Listo para el acoplamiento!'",
      enduranceTitle: "🌀 EJECUTAR: Maniobra de Acoplamiento Endurance (68 RPM)",
      enduranceSub: "Easter Egg // 'Cooper, it's not possible! — No, it's necessary.'",
      meaning42Title: "🌌 EJECUTAR: El Sentido de la Vida, el Universo y Todo lo Demás",
      meaning42Sub: "Easter Egg // Respuesta: 42 (Douglas Adams)",
      meaning42Toast: "🌌 42: La Respuesta a la Vida, el Universo y Todo lo Demás. ¡No Entres en Pánico!",
      apolloTitle: "🚀 EJECUTAR: Telemetría Apollo 11 (Saturn V)",
      apolloSub: "Easter Egg // 'Houston, Tranquility Base here. The Eagle has landed.'",
      apolloToast: "🚀 Apollo 11: 'Un pequeño paso para el hombre, un gran salto para la humanidad.'",
      coffeeTitle: "☕ EJECUTAR: Inyección de Cafeína DevOps",
      coffeeSub: "Easter Egg // Recarga de 100% de Uptime",
      coffeeToast: "☕ Cafeína inyectada en los servidores: Uptime 100%, ¡0 errores!",
      sudoTitle: "💻 EJECUTAR: sudo su (Root Cósmico)",
      sudoSub: "Easter Egg // root@pedro-rocha:~#",
      sudoToast: "💻 Acceso Root Concedido: Bienvenido, Administrador de la Galaxia.",
      gaiaTitle: "🔭 EJECUTAR: Sonda Espacial Gaia DR3 Astrometric Stream",
      gaiaSub: "Easter Egg // 1.800 millones de fuentes astrométricas",
      gaiaToast: "🔭 Gaia DR3: ¡Sincronización astrométrica con 1.800 millones de estrellas completada!"
    },
    quests: {
      landingTitle: "Aterrizaje Orbital",
      landingDesc: "Completar el descenso y reentrada a la Tierra",
      sobreTitle: "Registro de Bitácora",
      sobreDesc: "Acceder a la biografía y trayectoria académica en el Sector 01",
      softwareTitle: "Ingeniería de Software",
      softwareDesc: "Explorar el catálogo de software y 12 proyectos en el Sector 02",
      pesquisaTitle: "Astrofísica y Gaia DR3",
      pesquisaDesc: "Inspeccionar la Investigación Científica Gaia DR3 en el Sector 03",
      contatoTitle: "Canales de Transmisión",
      contatoDesc: "Acceder al Sector 04 con Lattes, GitHub y CV",
      cmdTitle: "Terminal Cósmico (⌘K)",
      cmdDesc: "Abrir la Paleta de Comandos ⌘K / Ctrl+K",
      sfxTitle: "Sintetizador Acústico",
      sfxDesc: "Alternar o probar el audio espacial Web Audio",
      orbTitle: "Sonda Planetaria 3D",
      orbDesc: "Interactuar con el Core Station Orb en el Hub",
      orbToast: "🔮 Core Station Orb sincronizado con la red neuronal",
      spectrumTitle: "Espectroscopía H-Alpha",
      spectrumDesc: "Ajustar el espectrómetro a la línea Hα (6563 Å) en el Sector 03",
      langTitle: "Políglota Intergaláctico",
      langDesc: "Cambiar el idioma de la interfaz (EN, ES, FR o PT)",
      filterTitle: "Filtro de Arquitectura",
      filterDesc: "Filtrar los proyectos por categoría tecnológica",
      supernovaTitle: "Cazador de Supernovas",
      supernovaDesc: "Descubrir una estrella oculta haciendo clic en el cosmos",
      goldenRecordTitle: "Disco de Oro Voyager",
      goldenRecordDesc: "Activar la transmisión interestelar en el Sector 01",
      pulsarAudioTitle: "Eco de Púlsar Cósmico",
      pulsarAudioDesc: "Escuchar la frecuencia acústica de Gaia DR3 en el Sector 03",
      quantumPingTitle: "Ping Cuántico Relativista",
      quantumPingDesc: "Disparar un haz de señal cuántica en el Sector 04",
      murphWatchTitle: "Reloj Gravitacional de Murph",
      murphWatchDesc: "Decodificar el mensaje en código Morse 'S-T-A-Y' en el Sector 04 (Gargantúa)",
      enduranceDockTitle: "Acoplamiento Endurance a 68 RPM",
      enduranceDockDesc: "Ejecutar la maniobra de sincronización de rotación con la Endurance en el Sector 04",
      hackerTitle: "Terminal Hacker Cósmico",
      hackerDesc: "Ejecutar un comando secreto en ⌘K (ej: matrix, 42, blackhole, apollo)",
      konamiTitle: "Protocolo Konami Hiperespacial",
      konamiDesc: "Escribir el Código Konami: ↑ ↑ ↓ ↓ ← → ← → B A",
      easterEggTitle: "Cazador de Reliquias Cósmicas",
      easterEggDesc: "Encontrar y decodificar uno de los Easter Eggs flotantes",
      easterEggToast: "🔍 Pista: ¡Busca íconos flotantes misteriosos en el Hub y los Sectores!"
    }
  },
  fr: {
    nav: [ "À propos", "Projets", "Travaux", "Recherche", "CV", "Lattes", "Contact" ],
    hero: {
      eyebrow: "Génie Informatique · Institut Fédéral Fluminense",
      sub: "Je développe des logiciels pour l'académie et utilise l'informatique pour comprendre le cosmos. Étudiant en génie informatique, boursier d'Initiation Scientifique (PIBIC/CNPq), à l'intersection des méthodes computationnelles et de l'astrophysique.",
      badges: [
        "PIBIC / CNPq",
        "IAAC 2024 et 2025",
        "CCNA · CyberOps · IoT",
        "Linux et Serveurs",
        "Astrophysique Computationnelle",
        "Apprentissage Automatique",
        "Gaia · GALAH",
        "ORCID · Scholar"
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
      contato: { title: "Restons en contact", lead: "Joignez-moi par le canal de votre choix." },
      contatoHero: { title: "Horizon des Événements · Où le Code Transcende l'Espace-Temps" }
    },
    about: [
      "Je suis étudiant en <strong>génie informatique</strong> à l'<strong>Institut Fédéral Fluminense (IFF)</strong>, campus Bom Jesus do Itabapoana — RJ, et boursier d'Initiation Scientifique (<strong>PIBIC/CNPq</strong>). Ma recherche se situe à la frontière de l'informatique et de l'astronomie : archéologie galactique, populations stellaires et structure de la Voie lactée, avec apprentissage automatique appliqué aux données du <em>Gaia</em> et de relevés complémentaires.",
      "Côté ingénierie, je maîtrise <strong>Python</strong> et <strong>C</strong>, les réseaux informatiques (certifications <strong>Cisco CCNA, CyberOps et IoT</strong>), l'administration de serveurs Linux et le développement logiciel full-stack. Je participe à l'<strong>International Astronomy and Astrophysics Competition</strong> (IAAC 2024 et 2025) et ai présenté des travaux lors d'événements comme FEBRACE, Mostratec, CONFICT et la Foire Brésilienne d'Initiation Scientifique.",
      "Je suis Technicien en Informatique diplômé de l'IFF (2020–2022) et l'un des organisateurs de la Semaine de l'Informatique, de l'Ingénierie et de la Gestion de l'IFF."
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
      all: "Tous",
      software: "Logiciel",
      pesquisa: "Recherche",
      academico: "Académique",
      pessoal: "Personnel",
      searchPlaceholder: "Filtrer par nom, technologie ou tag...",
      searchAria: "Rechercher des projets"
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
    footer: "fait avec du café, du code et un ciel étoilé.",
    hud: {
      returnBtn: "Retour au Hub [ESC]",
      introBtn: "🚀 Intro",
      searchBtn: "Recherche",
      hubActive: "EXPLORATEUR // ACTIF",
      missions: "MISSIONS",
      exploreProjects: "Explorer les Projets",
      terminal: "Terminal (⌘K)",
      connect: "Connexion",
      goldenRecord: "Cliquez sur le Disque d.Or pour décoder le message interstellaire enregistré à Bom Jesus do Itabapoana - RJ.",
      tesseractSync: "Cliquez pour synchroniser les données de la singularité à travers le tesseract gravitationnel.",
      docking: "🌀 Initier l.Amarrage (68 RPM)",
      statusExplorer: "STATUT EXPLORATEUR",
      radar: "📡 RADAR ORBITAL // MINICARTE",
      skipIntro: "Passer [ESC] ⏭️",
      questCompletedPrefix: "Mission Accomplie :",
      questDoneTooltip: "Mission terminée !",
      questRunTooltip: "Cliquez pour exécuter cette mission"
    },
    sectorNav: {
      sobre: "À propos",
      software: "Logiciel",
      pesquisa: "Recherche",
      contato: "Contact",
      contatoFull: "CV et Contact"
    },
    hub: {
      sector1: {
        kicker: "SECTEUR 01 // TERRE",
        title: "À propos de moi",
        sub: "Parcours & Statistiques"
      },
      sector2: { kicker: "SECTEUR 02 // MARS", title: "Projets & Code", sub: "12 systèmes sur GitHub" },
      sector3: {
        kicker: "SECTEUR 03 // SATURNE",
        title: "Recherche & Bourses",
        sub: "Gaia DR3, GALAH & PIBIC"
      },
      sector4: {
        kicker: "SECTEUR 04 // GARGANTUA",
        title: "CV & Contacts",
        sub: "Interstellaire & Lattes CNPq"
      }
    },
    kickers: {
      sobre: "SECTEUR 01 // TERRE · PARCOURS & FORMATION",
      software: "SECTEUR 02 // MARS · LOGICIEL & INGÉNIERIE",
      pesquisa: "SECTEUR 03 // SATURNE · ASTROPHYSIQUE & CNPQ",
      bolsas: "INITIATION SCIENTIFIQUE & BOURSES",
      contato: "SECTEUR 04 // SINGULARITÉ GARGANTUA · PROTOCOLE LAZARE",
      contatoChannels: "CANAUX DIRECTS // TRANSMISSION DEEP SPACE"
    },
    cmdPalette: {
      placeholder: "Rechercher projets, recherche, commandes, contacts...",
      navSobreTitle: "Ouvrir Secteur : À propos & Formation",
      navSobreSub: "Secteur 01",
      navSoftwareTitle: "Ouvrir Secteur : Logiciel & Dépôts",
      navSoftwareSub: "Secteur 02",
      navPesquisaTitle: "Ouvrir Secteur : Recherche & Astrophysique",
      navPesquisaSub: "Secteur 03",
      navContatoTitle: "Ouvrir Secteur : CV & Contacts",
      navContatoSub: "Secteur 04",
      copyLattesTitle: "Copier l'ID Lattes (6818168089966785)",
      copyLattesSub: "CNPq",
      copyLattesToast: "ID Lattes copié !",
      copyEmailTitle: "Copier l'e-mail (pedroiff0@gmail.com)",
      copyEmailSub: "E-mail",
      copyEmailToast: "E-mail copié !"
    },
    cmdSecrets: {
      motherlodeTitle: "💰 MOTHERLODE (+§50 000 Simoléons)",
      motherlodeSub: "Code Secret // « Kaching ! +§50 000 Simoléons ajoutés au solde orbital »",
      hesoyamTitle: "💵 HESOYAM (+250 000 $ + Gilet/Vie)",
      hesoyamSub: "Code Secret // « +250 000 $, Vie 100 %, Gilet 100 % et Réparation Immédiate »",
      painkillerTitle: "⭐ PAINKILLER (Invincibilité 5 Minutes)",
      painkillerSub: "Code Secret // « 1-999-724-654-5537 : Bouclier cosmique invulnérable pendant 5 minutes »",
      bmthTitle: "🎸 CAN YOU FEEL MY HEART // SEMPITERNAL",
      bmthSub: "Transmission Sonore // « Can you hear the silence? Can you feel my heart? »",
      bmthTag: "TRANSMISSION",
      kratosTitle: "🪓 FUREUR ANCESTRALE // « BOY ! »",
      kratosSub: "Résonance Ancienne // « BOY ! Ne sois pas désolé. Sois meilleur. »",
      kratosTag: "ARTEFACT",
      horizonTitle: "👁️ BALAYAGE FOCUS // SYSTÈME GAIA",
      horizonSub: "Interface Neurale // « Réseau de Réalité Augmentée Synchronisé »",
      gagaTitle: "✨ BORN THIS WAY // SYNTH THEME",
      gagaSub: "Fréquence Cosmique // « I'm on the right track baby, I was born this way! »",
      gagaTag: "AUDIO",
      matrixTitle: "⚡ EXÉCUTER : Protocole Matrix (Pluie Numérique)",
      matrixSub: "Easter Egg // « There is no spoon... »",
      matrixToast: "🟢 Mode Matrix Activé : Suis le lapin blanc...",
      interstellarTitle: "🌌 EXÉCUTER : Protocole Lazare / Interstellar (Christopher Nolan)",
      interstellarSub: "Easter Egg // « N'entre pas doucement dans cette bonne nuit. Rage contre la mort de la lumière. »",
      interstellarToast: "🌌 Interstellar (Nolan) : « L'amour est la seule chose qui transcende les dimensions du temps et de l'espace. »",
      gargantuaTitle: "🕳️ EXÉCUTER : Horizon des Événements de Gargantua",
      gargantuaSub: "Easter Egg // Trou Noir Supermassif (100M M☉ · Dilatation : 1h = 7 ans)",
      gargantuaToast: "🕳️ Gargantua : Singularité et lentille gravitationnelle d'Einstein atteintes !",
      stayTitle: "⏳ EXÉCUTER : Signal Gravitationnel 5D de Cooper (S-T-A-Y)",
      staySub: "Easter Egg // « S-T-A-Y... C'était lui depuis le début. Mon père était mon fantôme. »",
      tarsTitle: "🤖 EXÉCUTER : Télémétrie TARS (IA Tactique)",
      tarsSub: "Easter Egg // Honnêteté : 90 % · Humour : 75 % · « C'est nécessaire. »",
      tarsToast: "🤖 TARS : « Bonjour Cooper. Réglage d'honnêteté à 90 %. Prêt pour l'amarrage ! »",
      enduranceTitle: "🌀 EXÉCUTER : Manœuvre d'Amarrage Endurance (68 RPM)",
      enduranceSub: "Easter Egg // « Cooper, it's not possible! — No, it's necessary. »",
      meaning42Title: "🌌 EXÉCUTER : Le Sens de la Vie, de l'Univers et du Reste",
      meaning42Sub: "Easter Egg // Réponse : 42 (Douglas Adams)",
      meaning42Toast: "🌌 42 : La Réponse à la Vie, à l'Univers et au Reste. Pas de Panique !",
      apolloTitle: "🚀 EXÉCUTER : Télémétrie Apollo 11 (Saturn V)",
      apolloSub: "Easter Egg // « Houston, Tranquility Base here. The Eagle has landed. »",
      apolloToast: "🚀 Apollo 11 : « Un petit pas pour l'homme, un bond de géant pour l'humanité. »",
      coffeeTitle: "☕ EXÉCUTER : Injection de Caféine DevOps",
      coffeeSub: "Easter Egg // Recharge de 100 % de Disponibilité",
      coffeeToast: "☕ Caféine injectée dans les serveurs : Disponibilité 100 %, 0 bug !",
      sudoTitle: "💻 EXÉCUTER : sudo su (Root Cosmique)",
      sudoSub: "Easter Egg // root@pedro-rocha:~#",
      sudoToast: "💻 Accès Root Accordé : Bienvenue, Administrateur de la Galaxie.",
      gaiaTitle: "🔭 EXÉCUTER : Sonde Spatiale Gaia DR3 Astrometric Stream",
      gaiaSub: "Easter Egg // 1,8 milliard de sources astrométriques",
      gaiaToast: "🔭 Gaia DR3 : Synchronisation astrométrique avec 1,8 milliard d'étoiles terminée !"
    },
    quests: {
      landingTitle: "Atterrissage Orbital",
      landingDesc: "Terminer la descente et la rentrée sur Terre",
      sobreTitle: "Journal de Bord",
      sobreDesc: "Accéder à la biographie et au parcours académique dans le Secteur 01",
      softwareTitle: "Ingénierie Logicielle",
      softwareDesc: "Explorer le catalogue de logiciels et 12 projets dans le Secteur 02",
      pesquisaTitle: "Astrophysique & Gaia DR3",
      pesquisaDesc: "Inspecter la Recherche Scientifique Gaia DR3 dans le Secteur 03",
      contatoTitle: "Canaux de Transmission",
      contatoDesc: "Accéder au Secteur 04 avec Lattes, GitHub et CV",
      cmdTitle: "Terminal Cosmique (⌘K)",
      cmdDesc: "Ouvrir la Palette de Commandes ⌘K / Ctrl+K",
      sfxTitle: "Synthétiseur Acoustique",
      sfxDesc: "Activer ou tester l'audio spatial Web Audio",
      orbTitle: "Sonde Planétaire 3D",
      orbDesc: "Interagir avec le Core Station Orb dans le Hub",
      orbToast: "🔮 Core Station Orb synchronisé avec le réseau neuronal",
      spectrumTitle: "Spectroscopie H-Alpha",
      spectrumDesc: "Régler le spectromètre sur la raie Hα (6563 Å) dans le Secteur 03",
      langTitle: "Polyglotte Intergalactique",
      langDesc: "Changer la langue de l'interface (EN, ES, FR ou PT)",
      filterTitle: "Filtre d'Architecture",
      filterDesc: "Filtrer les projets par catégorie technologique",
      supernovaTitle: "Chasseur de Supernovas",
      supernovaDesc: "Découvrir une étoile cachée en cliquant dans le cosmos",
      goldenRecordTitle: "Disque d'Or Voyager",
      goldenRecordDesc: "Activer la transmission interstellaire dans le Secteur 01",
      pulsarAudioTitle: "Écho de Pulsar Cosmique",
      pulsarAudioDesc: "Écouter la fréquence acoustique de Gaia DR3 dans le Secteur 03",
      quantumPingTitle: "Ping Quantique Relativiste",
      quantumPingDesc: "Envoyer un faisceau de signal quantique dans le Secteur 04",
      murphWatchTitle: "Montre Gravitationnelle de Murph",
      murphWatchDesc: "Décoder le message en code Morse « S-T-A-Y » dans le Secteur 04 (Gargantua)",
      enduranceDockTitle: "Amarrage Endurance à 68 RPM",
      enduranceDockDesc: "Exécuter la manœuvre de synchronisation de rotation avec l'Endurance dans le Secteur 04",
      hackerTitle: "Terminal Hacker Cosmique",
      hackerDesc: "Exécuter une commande secrète dans ⌘K (ex : matrix, 42, blackhole, apollo)",
      konamiTitle: "Protocole Konami Hyperspatial",
      konamiDesc: "Saisir le Code Konami : ↑ ↑ ↓ ↓ ← → ← → B A",
      easterEggTitle: "Chasseur de Reliques Cosmiques",
      easterEggDesc: "Trouver et décoder l'un des Easter Eggs flottants",
      easterEggToast: "🔍 Indice : Cherchez des icônes flottantes mystérieuses dans le Hub et les Secteurs !"
    }
  },
  it: {
    nav: [ "Chi sono", "Progetti", "Lavori", "Ricerca", "Curriculum", "Lattes", "Contatti" ],
    hero: {
      eyebrow: "Ingegneria Informatica · Instituto Federal Fluminense",
      sub: "Costruisco software per il mondo accademico e uso il calcolo per comprendere il cosmo. Studente di Ingegneria Informatica, borsista di Iniziazione Scientifica (PIBIC/CNPq), all'intersezione tra metodi computazionali e astrofisica.",
      badges: [
        "PIBIC / CNPq",
        "IAAC 2024 & 2025",
        "CCNA · CyberOps · IoT",
        "Linux e server",
        "Astrofisica computazionale",
        "Machine Learning",
        "Gaia · GALAH",
        "ORCID · Scholar"
      ]
    },
    sections: {
      sobre: { title: "Un percorso tra codice e stelle", lead: "" },
      projetos: {
        title: "Cosa costruisco",
        lead: "Fai clic su una scheda per vedere i dettagli tecnici."
      },
      trabalhos: {
        title: "Tutto ciò che faccio su GitHub",
        lead: "Elenco completo dei miei repository, pubblici e privati, con una breve descrizione di ciascuno. Fai clic su una scheda per i dettagli."
      },
      pesquisa: {
        title: "Astronomia computazionale",
        lead: "Progetti di ricerca in astrofisica computazionale. Fai clic per espandere."
      },
      bolsas: {
        title: "Iniziazione Scientifica e Ricerca",
        lead: "Progetti con borsa e volontari in astrofisica computazionale (dal mio CV)."
      },
      curriculo: { title: "Curriculum e materiale", lead: "" },
      lattes: { title: "Piattaforma Lattes (CNPq)", lead: "" },
      contato: { title: "Restiamo in contatto", lead: "Scrivimi dal canale che preferisci." },
      contatoHero: { title: "Orizzonte degli eventi" }
    },
    about: [
      "Sono studente di <strong>Ingegneria Informatica</strong> presso l'<strong>Instituto Federal Fluminense (IFF)</strong>, campus Bom Jesus do Itabapoana — RJ, e borsista di Iniziazione Scientifica (<strong>PIBIC/CNPq</strong>). La mia ricerca si colloca al confine tra informatica e astronomia: archeologia galattica, popolazioni stellari e struttura della Via Lattea, con il machine learning applicato ai dati di <em>Gaia</em> e di survey complementari.",
      "Dal lato ingegneristico, padroneggio <strong>Python</strong> e <strong>C</strong>, le reti di computer (certificazioni <strong>Cisco CCNA, CyberOps e IoT</strong>), l'amministrazione di server Linux e lo sviluppo software full-stack. Partecipo alla <strong>International Astronomy and Astrophysics Competition</strong> (IAAC 2024 e 2025) e ho presentato lavori in eventi come FEBRACE, Mostratec, CONFICT e alla Feira Brasileira de Iniciação Científica.",
      "Sono Tecnico Informatico diplomato presso l'IFF (2020–2022) e uno degli organizzatori della Settimana di Informatica, Ingegneria e Gestione dell'IFF."
    ],
    vis: {
      "público": "Pubblico",
      privado: "Privato",
      planejamento: "Pianificato",
      elaboracao: "In corso"
    },
    labels: {
      details: "Dettagli",
      viewRepo: "↗ Vedi il repository su GitHub",
      noRepo: "Nessun repository pubblico per ora"
    },
    cat: {
      all: "Tutti",
      software: "Software",
      pesquisa: "Ricerca",
      academico: "Accademico",
      pessoal: "Personale",
      searchPlaceholder: "Filtra per nome, tecnologia o tag...",
      searchAria: "Cerca progetti"
    },
    contactLabels: {
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      scholar: "Google Scholar",
      orcid: "ORCID",
      lattes: "Lattes",
      instagram: "Instagram",
      site: "Sito ufficiale",
      location: "Luogo"
    },
    bolsas: { orientLabel: "Supervisore", periodLabel: "Periodo" }
  },
  zh: {
    nav: [ "关于", "项目", "作品", "研究", "简历", "Lattes", "联系" ],
    hero: {
      eyebrow: "计算机工程 · Instituto Federal Fluminense",
      sub: "我为学术界开发软件,并利用计算来理解宇宙。我是计算机工程专业的学生,也是科研启蒙计划(PIBIC/CNPq)的奖学金获得者,研究方向位于计算方法与天体物理学的交叉领域。",
      badges: [
        "PIBIC / CNPq",
        "IAAC 2024 & 2025",
        "CCNA · CyberOps · IoT",
        "Linux 与服务器",
        "计算天体物理学",
        "Machine Learning",
        "Gaia · GALAH",
        "ORCID · Scholar"
      ]
    },
    sections: {
      sobre: { title: "在代码与星辰之间", lead: "" },
      projetos: { title: "我的作品", lead: "点击任意卡片查看技术细节。" },
      trabalhos: { title: "我在 GitHub 上的全部工作", lead: "我的全部仓库（公开与私有），附简要说明。点击卡片查看详情。" },
      pesquisa: { title: "计算天文学", lead: "计算天体物理学研究项目。点击展开。" },
      bolsas: { title: "科研启蒙与研究", lead: "计算天体物理学方向的资助与志愿项目（摘自简历）。" },
      curriculo: { title: "简历与资料", lead: "" },
      lattes: { title: "Lattes 平台（CNPq）", lead: "" },
      contato: { title: "保持联系", lead: "通过你喜欢的方式联系我。" },
      contatoHero: { title: "事件视界" }
    },
    about: [
      "我是 <strong>Instituto Federal Fluminense (IFF)</strong> 位于 Bom Jesus do Itabapoana — RJ 校区的<strong>计算机工程</strong>专业学生,也是科研启蒙计划(<strong>PIBIC/CNPq</strong>)的奖学金获得者。我的研究处于计算机与天文学的交界处:星系考古学、恒星星族和银河系结构,并将机器学习应用于 <em>Gaia</em> 及其他互补巡天项目的数据。",
      "在工程方面,我精通 <strong>Python</strong> 和 <strong>C</strong>、计算机网络(<strong>Cisco CCNA、CyberOps 和 IoT</strong> 认证)、Linux 服务器管理以及全栈软件开发。我参加了 <strong>International Astronomy and Astrophysics Competition</strong>(IAAC 2024 和 2025),并在 FEBRACE、Mostratec、CONFICT 以及 Feira Brasileira de Iniciação Científica 等活动中展示过研究成果。",
      "我毕业于 IFF 信息技术专业（2020–2022，技术员文凭），并且是 IFF 计算机、工程与管理周的组织者之一。"
    ],
    vis: { "público": "公开", privado: "私有", planejamento: "计划中", elaboracao: "进行中" },
    labels: { details: "详情", viewRepo: "↗ 在 GitHub 上查看仓库", noRepo: "暂无公开仓库" },
    cat: {
      all: "全部",
      software: "软件",
      pesquisa: "研究",
      academico: "学术",
      pessoal: "个人",
      searchPlaceholder: "按名称、技术或标签筛选...",
      searchAria: "搜索项目"
    },
    contactLabels: {
      email: "邮箱",
      github: "GitHub",
      linkedin: "LinkedIn",
      scholar: "Google 学术",
      orcid: "ORCID",
      lattes: "Lattes",
      instagram: "Instagram",
      site: "官方网站",
      location: "所在地"
    },
    bolsas: { orientLabel: "导师", periodLabel: "时间" }
  }
};

// Textos de interface e layout vindos da nota do vault (## Interface e ## Página).
const OVERRIDES = {
  ui: {
    pt: {
      cvText: "Currículo mantido em LaTeX (classe altacv), com versões sincronizadas em seis idiomas: português, inglês, espanhol, francês, italiano e mandarim.",
      cvRepo: "Repositório do CV",
      lattesText: "Estudante de Engenharia de Computação no IFF (Bom Jesus do Itabapoana, RJ), bolsista de Iniciação Científica (PIBIC/CNPq), com pesquisa em arqueologia galáctica, populações estelares e estrutura da Via Láctea.",
      lattesOpen: "Abrir currículo Lattes",
      empty: "Nenhum projeto encontrado.",
      skip: "Pular para o conteúdo",
      theme: "Alternar tema",
      cvDownload: "Baixar CV",
      footTag: "— computação e astrofísica, feito com",
      footAnd: "e",
      footBy: "por",
      toTop: "Voltar ao topo ↑",
      icoCafe: "café",
      icoCodigo: "código",
      icoCometa: "cometas",
      updated: "Atualizado em",
      menu: "Menu",
      nav: "Eventos",
      alemTitle: "Participação em eventos",
      alemLead: "Feiras, congressos e visitas técnicas em que apresentei trabalhos ou aprendi algo, com fotos de cada um.",
      nickname: "Apelido",
      base: "Base",
      baseText: "Bom Jesus do Itabapoana, RJ",
      photos: "fotos",
      report: "Ler relato",
      noPhotos: "Relato sem fotos",
      prev: "Anterior",
      next: "Próxima",
      reader: "Modo leitura",
      readerExit: "Sair do modo leitura",
      sideCollapse: "Recolher barra lateral",
      sideExpand: "Expandir barra lateral",
      cvAcad: "Acadêmico",
      cvProf: "Profissional",
      cvLangsTitle: "Currículo em 6 idiomas (PDF)",
      tour: "Ver tour",
      live: "Explorar ao vivo",
      openNew: "Abrir em nova aba",
      close: "Fechar",
      spectrumHint: "Arraste para percorrer o espectro de uma estrela e encontrar as linhas de absorção que uso no GALAH DR4.",
      continuum: "contínuo estelar",
      sliderLabel: "Comprimento de onda em ångströms",
      play: "Reproduzir",
      pause: "Pausar",
      fullscreen: "Tela cheia",
      repo: "Repositório",
      seek: "Posição do vídeo",
      search: "Buscar",
      searchPh: "Buscar projetos, pesquisa, eventos… (# para tags)",
      searchEmpty: "Nada encontrado para",
      cvPreview: "Prévia no idioma da página",
      cvOpen: "Abrir PDF",
      "stats.0": "repositórios",
      "stats.1": "projetos de iniciação científica",
      "stats.2": "participações na IAAC (2024 e 2025)",
      "stats.3": "disciplinas mapeadas no Sistema Acadêmico",
      "el.h": "hidrogênio (Balmer)",
      "el.ca2": "cálcio ionizado",
      "el.mg": "magnésio neutro",
      "el.fe": "ferro neutro",
      "el.na": "sódio neutro",
      "kinds.projeto": "Projeto",
      "kinds.pesquisa": "Pesquisa",
      "kinds.bolsa": "Bolsa",
      "kinds.evento": "Evento",
      "kinds.secao": "Seção",
      "status.dev": "em desenvolvimento",
      "status.ext": "extensão",
      "status.camp": "campanha",
      "status.beta": "em beta",
      "status.ajustes": "precisa de ajustes",
      qrKicker: "SAB 2026 · Natal, RN · 25/10 a 30/10/2026",
      qrTitle: "Veio pelo QR code do banner? Comece por aqui.",
      qrSab: "SAB 2026: o evento e o que apresentei",
      qrSabSub: "O evento e o meu pôster",
      qrPesq: "Pesquisa: detecção de anomalias",
      qrPesqSub: "A pesquisa por trás do pôster, 2025 a 2026",
      qrPainel: "Painel interativo do mapa t-SNE",
      qrPainelSub: "Deixe seu nome na lista de quem passou pelo pôster",
      qrSobre: "Sobre mim",
      qrSobreSub: "Quem sou e o que faço",
      qrJardim: "Jardim digital",
      qrJardimSub: "Notas, projetos e eventos no site completo",
      qrNote: "O painel interativo é temporário e será desativado após a SAB. Dúvidas: pedroiff0@gmail.com."
    },
    en: {
      cvText: "Resume maintained in LaTeX (altacv class), with synchronized versions in six languages: Portuguese, English, Spanish, French, Italian and Mandarin.",
      cvRepo: "Resume repository",
      lattesText: "Computer Engineering student at IFF (Bom Jesus do Itabapoana, RJ), Scientific Initiation scholar (PIBIC/CNPq), researching galactic archaeology, stellar populations and the structure of the Milky Way.",
      lattesOpen: "Open Lattes CV",
      empty: "No projects found.",
      skip: "Skip to content",
      theme: "Toggle theme",
      cvDownload: "Download CV",
      footTag: "— computing and astrophysics, made with",
      footAnd: "and",
      footBy: "by",
      toTop: "Back to top ↑",
      icoCafe: "coffee",
      icoCodigo: "code",
      icoCometa: "comets",
      updated: "Updated on",
      menu: "Menu",
      nav: "Events",
      alemTitle: "Events",
      alemLead: "Fairs, conferences and technical visits where I presented work or learned something, with photos of each.",
      nickname: "Nickname",
      base: "Based in",
      baseText: "Bom Jesus do Itabapoana, RJ, Brazil",
      photos: "photos",
      report: "Read the story",
      noPhotos: "Story without photos",
      prev: "Previous",
      next: "Next",
      reader: "Reading mode",
      readerExit: "Exit reading mode",
      sideCollapse: "Collapse sidebar",
      sideExpand: "Expand sidebar",
      cvAcad: "Academic",
      cvProf: "Professional",
      cvLangsTitle: "Resume in 6 languages (PDF)",
      tour: "Watch tour",
      live: "Explore live",
      openNew: "Open in new tab",
      close: "Close",
      spectrumHint: "Drag to sweep a star's spectrum and find the absorption lines I work with in GALAH DR4.",
      continuum: "stellar continuum",
      sliderLabel: "Wavelength in ångströms",
      play: "Play",
      pause: "Pause",
      fullscreen: "Full screen",
      repo: "Repository",
      seek: "Video position",
      search: "Search",
      searchPh: "Search projects, research, events… (# for tags)",
      searchEmpty: "Nothing found for",
      cvPreview: "Preview in the page language",
      cvOpen: "Open PDF",
      "stats.0": "repositories",
      "stats.1": "scientific initiation projects",
      "stats.2": "IAAC participations (2024 and 2025)",
      "stats.3": "courses mapped in the Academic System",
      "el.h": "hydrogen (Balmer)",
      "el.ca2": "ionized calcium",
      "el.mg": "neutral magnesium",
      "el.fe": "neutral iron",
      "el.na": "neutral sodium",
      "kinds.projeto": "Project",
      "kinds.pesquisa": "Research",
      "kinds.bolsa": "Grant",
      "kinds.evento": "Event",
      "kinds.secao": "Section",
      "status.dev": "in development",
      "status.ext": "outreach project",
      "status.camp": "campaign",
      "status.beta": "beta",
      "status.ajustes": "needs adjustments",
      qrKicker: "SAB 2026 · Natal, Brazil · Oct 25-30, 2026",
      qrTitle: "Came from the poster QR code? Start here.",
      qrSab: "SAB 2026: the event and my poster",
      qrSabSub: "The event and what I presented",
      qrPesq: "Research: anomaly detection",
      qrPesqSub: "The research behind the poster, 2025-2026",
      qrPainel: "Interactive t-SNE map",
      qrPainelSub: "Leave your name on the poster visitors list",
      qrSobre: "About me",
      qrSobreSub: "Who I am and what I do",
      qrJardim: "Digital garden",
      qrJardimSub: "Notes, projects and events on the full site",
      qrNote: "The interactive panel is temporary and will be shut down after SAB. Questions: pedroiff0@gmail.com."
    },
    es: {
      cvText: "Currículum mantenido en LaTeX (clase altacv), con versiones sincronizadas en seis idiomas: portugués, inglés, español, francés, italiano y mandarín.",
      cvRepo: "Repositorio del CV",
      lattesText: "Estudiante de Ingeniería Informática en el IFF (Bom Jesus do Itabapoana, RJ), becario de Iniciación Científica (PIBIC/CNPq), con investigación en arqueología galáctica, poblaciones estelares y estructura de la Vía Láctea.",
      lattesOpen: "Abrir currículum Lattes",
      empty: "Ningún proyecto encontrado.",
      skip: "Saltar al contenido",
      theme: "Cambiar tema",
      cvDownload: "Descargar CV",
      footTag: "— computación y astrofísica, hecho con",
      footAnd: "y",
      footBy: "por",
      toTop: "Volver arriba ↑",
      icoCafe: "café",
      icoCodigo: "código",
      icoCometa: "cometas",
      updated: "Actualizado el",
      menu: "Menú",
      nav: "Eventos",
      alemTitle: "Participación en eventos",
      alemLead: "Ferias, congresos y visitas técnicas en las que presenté trabajos o aprendí algo, con fotos de cada uno.",
      nickname: "Apodo",
      base: "Base",
      baseText: "Bom Jesus do Itabapoana, RJ, Brasil",
      photos: "fotos",
      report: "Leer el relato",
      noPhotos: "Relato sin fotos",
      prev: "Anterior",
      next: "Siguiente",
      reader: "Modo lectura",
      readerExit: "Salir del modo lectura",
      sideCollapse: "Contraer barra lateral",
      sideExpand: "Expandir barra lateral",
      cvAcad: "Académico",
      cvProf: "Profesional",
      cvLangsTitle: "Currículum en 6 idiomas (PDF)",
      tour: "Ver recorrido",
      live: "Explorar en vivo",
      openNew: "Abrir en nueva pestaña",
      close: "Cerrar",
      spectrumHint: "Arrastra para recorrer el espectro de una estrella y encontrar las líneas de absorción que uso en GALAH DR4.",
      continuum: "continuo estelar",
      sliderLabel: "Longitud de onda en ångströms",
      play: "Reproducir",
      pause: "Pausar",
      fullscreen: "Pantalla completa",
      repo: "Repositorio",
      seek: "Posición del video",
      search: "Buscar",
      searchPh: "Buscar proyectos, investigación, eventos… (# para etiquetas)",
      searchEmpty: "Nada encontrado para",
      cvPreview: "Vista previa en el idioma de la página",
      cvOpen: "Abrir PDF",
      "stats.0": "repositorios",
      "stats.1": "proyectos de iniciación científica",
      "stats.2": "participaciones en la IAAC (2024 y 2025)",
      "stats.3": "asignaturas mapeadas en el Sistema Académico",
      "el.h": "hidrógeno (Balmer)",
      "el.ca2": "calcio ionizado",
      "el.mg": "magnesio neutro",
      "el.fe": "hierro neutro",
      "el.na": "sodio neutro",
      "kinds.projeto": "Proyecto",
      "kinds.pesquisa": "Investigación",
      "kinds.bolsa": "Beca",
      "kinds.evento": "Evento",
      "kinds.secao": "Sección",
      "status.dev": "en desarrollo",
      "status.ext": "proyecto de extensión",
      "status.camp": "campaña",
      "status.beta": "en beta",
      "status.ajustes": "necesita ajustes",
      qrKicker: "SAB 2026 · Natal, Brasil · 25 a 30/10/2026",
      qrTitle: "¿Llegaste por el código QR del póster? Empieza aquí.",
      qrSab: "SAB 2026: el evento y mi póster",
      qrSabSub: "El evento y lo que presenté",
      qrPesq: "Investigación: detección de anomalías",
      qrPesqSub: "La investigación detrás del póster, 2025-2026",
      qrPainel: "Panel interactivo del mapa t-SNE",
      qrPainelSub: "Deja tu nombre en la lista de visitantes del póster",
      qrSobre: "Sobre mí",
      qrSobreSub: "Quién soy y qué hago",
      qrJardim: "Jardín digital",
      qrJardimSub: "Notas, proyectos y eventos en el sitio completo",
      qrNote: "El panel interactivo es temporal y se desactivará después de la SAB. Dudas: pedroiff0@gmail.com."
    },
    fr: {
      cvText: "CV maintenu en LaTeX (classe altacv), avec des versions synchronisées en six langues : portugais, anglais, espagnol, français, italien et mandarin.",
      cvRepo: "Dépôt du CV",
      lattesText: "Étudiant en génie informatique à l'IFF (Bom Jesus do Itabapoana, RJ), boursier d'Initiation Scientifique (PIBIC/CNPq), avec des recherches en archéologie galactique, populations stellaires et structure de la Voie lactée.",
      lattesOpen: "Ouvrir le CV Lattes",
      empty: "Aucun projet trouvé.",
      skip: "Aller au contenu",
      theme: "Changer de thème",
      cvDownload: "Télécharger le CV",
      footTag: "— informatique et astrophysique, fait avec",
      footAnd: "et",
      footBy: "par",
      toTop: "Retour en haut ↑",
      icoCafe: "café",
      icoCodigo: "code",
      icoCometa: "comètes",
      updated: "Mis à jour le",
      menu: "Menu",
      nav: "Événements",
      alemTitle: "Participation à des événements",
      alemLead: "Salons, congrès et visites techniques où j'ai présenté des travaux ou appris quelque chose, avec les photos de chacun.",
      nickname: "Surnom",
      base: "Basé à",
      baseText: "Bom Jesus do Itabapoana, RJ, Brésil",
      photos: "photos",
      report: "Lire le récit",
      noPhotos: "Récit sans photos",
      prev: "Précédente",
      next: "Suivante",
      reader: "Mode lecture",
      readerExit: "Quitter le mode lecture",
      sideCollapse: "Réduire la barre latérale",
      sideExpand: "Développer la barre latérale",
      cvAcad: "Académique",
      cvProf: "Professionnel",
      cvLangsTitle: "CV en 6 langues (PDF)",
      tour: "Voir la visite",
      live: "Explorer en direct",
      openNew: "Ouvrir dans un nouvel onglet",
      close: "Fermer",
      spectrumHint: "Faites glisser pour parcourir le spectre d'une étoile et trouver les raies d'absorption que j'utilise dans GALAH DR4.",
      continuum: "continuum stellaire",
      sliderLabel: "Longueur d'onde en ångströms",
      play: "Lire",
      pause: "Pause",
      fullscreen: "Plein écran",
      repo: "Dépôt",
      seek: "Position de la vidéo",
      search: "Rechercher",
      searchPh: "Rechercher projets, recherche, événements… (# pour les tags)",
      searchEmpty: "Aucun résultat pour",
      cvPreview: "Aperçu dans la langue de la page",
      cvOpen: "Ouvrir le PDF",
      "stats.0": "dépôts",
      "stats.1": "projets d'initiation scientifique",
      "stats.2": "participations à l'IAAC (2024 et 2025)",
      "stats.3": "matières cartographiées dans le Système Académique",
      "el.h": "hydrogène (Balmer)",
      "el.ca2": "calcium ionisé",
      "el.mg": "magnésium neutre",
      "el.fe": "fer neutre",
      "el.na": "sodium neutre",
      "kinds.projeto": "Projet",
      "kinds.pesquisa": "Recherche",
      "kinds.bolsa": "Bourse",
      "kinds.evento": "Événement",
      "kinds.secao": "Section",
      "status.dev": "en développement",
      "status.ext": "projet d'extension",
      "status.camp": "campagne",
      "status.beta": "en bêta",
      "status.ajustes": "ajustements à faire",
      qrKicker: "SAB 2026 · Natal, Brésil · 25 au 30/10/2026",
      qrTitle: "Vous venez du QR code du poster ? Commencez ici.",
      qrSab: "SAB 2026 : l'événement et mon poster",
      qrSabSub: "L'événement et ce que j'ai présenté",
      qrPesq: "Recherche : détection d'anomalies",
      qrPesqSub: "La recherche derrière le poster, 2025-2026",
      qrPainel: "Panneau interactif de la carte t-SNE",
      qrPainelSub: "Laissez votre nom sur la liste des visiteurs du poster",
      qrSobre: "À propos de moi",
      qrSobreSub: "Qui je suis et ce que je fais",
      qrJardim: "Jardin numérique",
      qrJardimSub: "Notes, projets et événements sur le site complet",
      qrNote: "Le panneau interactif est temporaire et sera désactivé après la SAB. Questions : pedroiff0@gmail.com."
    },
    it: {
      cvText: "Curriculum mantenuto in LaTeX (classe altacv), con versioni sincronizzate in sei lingue: portoghese, inglese, spagnolo, francese, italiano e mandarino.",
      cvRepo: "Repository del CV",
      lattesText: "Studente di Ingegneria Informatica all'IFF (Bom Jesus do Itabapoana, RJ), borsista di Iniziazione Scientifica (PIBIC/CNPq), con ricerca in archeologia galattica, popolazioni stellari e struttura della Via Lattea.",
      lattesOpen: "Apri il curriculum Lattes",
      empty: "Nessun progetto trovato.",
      skip: "Vai al contenuto",
      theme: "Cambia tema",
      cvDownload: "Scarica il CV",
      footTag: "— informatica e astrofisica, fatto con",
      footAnd: "e",
      footBy: "da",
      toTop: "Torna su ↑",
      icoCafe: "caffè",
      icoCodigo: "codice",
      icoCometa: "comete",
      updated: "Aggiornato il",
      menu: "Menu",
      nav: "Eventi",
      alemTitle: "Partecipazione a eventi",
      alemLead: "Fiere, congressi e visite tecniche in cui ho presentato lavori o imparato qualcosa, con le foto di ciascuno.",
      nickname: "Soprannome",
      base: "Sede",
      baseText: "Bom Jesus do Itabapoana, RJ, Brasile",
      photos: "foto",
      report: "Leggi il resoconto",
      noPhotos: "Resoconto senza foto",
      prev: "Precedente",
      next: "Successiva",
      reader: "Modalità lettura",
      readerExit: "Esci dalla modalità lettura",
      sideCollapse: "Comprimi barra laterale",
      sideExpand: "Espandi barra laterale",
      cvAcad: "Accademico",
      cvProf: "Professionale",
      cvLangsTitle: "Curriculum in 6 lingue (PDF)",
      tour: "Guarda il tour",
      live: "Esplora dal vivo",
      openNew: "Apri in una nuova scheda",
      close: "Chiudi",
      spectrumHint: "Trascina per percorrere lo spettro di una stella e trovare le righe di assorbimento che uso in GALAH DR4.",
      continuum: "continuo stellare",
      sliderLabel: "Lunghezza d'onda in ångström",
      play: "Riproduci",
      pause: "Pausa",
      fullscreen: "Schermo intero",
      repo: "Repository",
      seek: "Posizione del video",
      search: "Cerca",
      searchPh: "Cerca progetti, ricerca, eventi… (# per i tag)",
      searchEmpty: "Nessun risultato per",
      cvPreview: "Anteprima nella lingua della pagina",
      cvOpen: "Apri il PDF",
      "stats.0": "repository",
      "stats.1": "progetti di iniziazione scientifica",
      "stats.2": "partecipazioni all'IAAC (2024 e 2025)",
      "stats.3": "materie mappate nel Sistema Accademico",
      "el.h": "idrogeno (Balmer)",
      "el.ca2": "calcio ionizzato",
      "el.mg": "magnesio neutro",
      "el.fe": "ferro neutro",
      "el.na": "sodio neutro",
      "kinds.projeto": "Progetto",
      "kinds.pesquisa": "Ricerca",
      "kinds.bolsa": "Borsa",
      "kinds.evento": "Evento",
      "kinds.secao": "Sezione",
      "status.dev": "in sviluppo",
      "status.ext": "progetto di estensione",
      "status.camp": "campagna",
      "status.beta": "in beta",
      "status.ajustes": "da sistemare",
      qrKicker: "SAB 2026 · Natal, Brasile · 25-30/10/2026",
      qrTitle: "Vieni dal QR code del poster? Parti da qui.",
      qrSab: "SAB 2026: l'evento e il mio poster",
      qrSabSub: "L'evento e cio che ho presentato",
      qrPesq: "Ricerca: rilevamento di anomalie",
      qrPesqSub: "La ricerca dietro il poster, 2025-2026",
      qrPainel: "Pannello interattivo della mappa t-SNE",
      qrPainelSub: "Lascia il tuo nome nella lista dei visitatori del poster",
      qrSobre: "Chi sono",
      qrSobreSub: "Chi sono e cosa faccio",
      qrJardim: "Giardino digitale",
      qrJardimSub: "Note, progetti ed eventi nel sito completo",
      qrNote: "Il pannello interattivo e temporaneo e sara disattivato dopo la SAB. Domande: pedroiff0@gmail.com."
    },
    zh: {
      cvText: "简历使用 LaTeX（altacv 类）维护，提供六种语言的同步版本：葡萄牙语、英语、西班牙语、法语、意大利语和中文。",
      cvRepo: "简历仓库",
      lattesText: "巴西弗卢米嫩塞联邦学院（IFF，里约州 Bom Jesus do Itabapoana）计算机工程专业学生，科研启蒙计划（PIBIC/CNPq）奖学金获得者，研究方向为银河考古学、恒星星族与银河系结构。",
      lattesOpen: "打开 Lattes 简历",
      empty: "未找到项目。",
      skip: "跳到内容",
      theme: "切换主题",
      cvDownload: "下载简历",
      footTag: "— 计算机与天体物理，用",
      footAnd: "和",
      footBy: "制作，作者",
      toTop: "回到顶部 ↑",
      icoCafe: "咖啡",
      icoCodigo: "代码",
      icoCometa: "彗星",
      updated: "更新于",
      menu: "菜单",
      nav: "活动",
      alemTitle: "参加的活动",
      alemLead: "我展示作品或学习的展会、会议和技术参观，每项都附有照片。",
      nickname: "昵称",
      base: "所在地",
      baseText: "巴西里约州 Bom Jesus do Itabapoana",
      photos: "张照片",
      report: "阅读记录",
      noPhotos: "无照片记录",
      prev: "上一张",
      next: "下一张",
      reader: "阅读模式",
      readerExit: "退出阅读模式",
      sideCollapse: "收起侧栏",
      sideExpand: "展开侧栏",
      cvAcad: "学术版",
      cvProf: "职业版",
      cvLangsTitle: "六种语言的简历（PDF）",
      tour: "观看演示",
      live: "在线体验",
      openNew: "在新标签页打开",
      close: "关闭",
      spectrumHint: "拖动滑块浏览恒星光谱，找到我在 GALAH DR4 中使用的吸收线。",
      continuum: "恒星连续谱",
      sliderLabel: "波长（埃）",
      play: "播放",
      pause: "暂停",
      fullscreen: "全屏",
      repo: "仓库",
      seek: "视频进度",
      search: "搜索",
      searchPh: "搜索项目、研究、活动…（# 搜索标签）",
      searchEmpty: "未找到",
      cvPreview: "页面语言的预览",
      cvOpen: "打开 PDF",
      "stats.0": "个仓库",
      "stats.1": "个科研启蒙项目",
      "stats.2": "次参加 IAAC（2024 与 2025）",
      "stats.3": "门课程已录入学术系统",
      "el.h": "氢（巴尔末系）",
      "el.ca2": "电离钙",
      "el.mg": "中性镁",
      "el.fe": "中性铁",
      "el.na": "中性钠",
      "kinds.projeto": "项目",
      "kinds.pesquisa": "研究",
      "kinds.bolsa": "资助",
      "kinds.evento": "活动",
      "kinds.secao": "栏目",
      "status.dev": "开发中",
      "status.ext": "推广项目",
      "status.camp": "倡议",
      "status.beta": "测试版",
      "status.ajustes": "待完善",
      qrKicker: "SAB 2026 · 巴西纳塔尔 · 2026年10月25日至30日",
      qrTitle: "从海报二维码来的？从这里开始。",
      qrSab: "SAB 2026：会议与我的海报",
      qrSabSub: "会议以及我展示的内容",
      qrPesq: "研究：异常检测",
      qrPesqSub: "海报背后的研究，2025-2026",
      qrPainel: "t-SNE 交互式地图",
      qrPainelSub: "在海报访客名单上留下你的名字",
      qrSobre: "关于我",
      qrSobreSub: "我是谁，我做什么",
      qrJardim: "数字花园",
      qrJardimSub: "完整网站上的笔记、项目和活动",
      qrNote: "交互式面板是临时的，SAB 之后将关闭。问题请联系：pedroiff0@gmail.com。"
    }
  },
  i: {
    pt: {
      "nav.0": "Sobre",
      "nav.1": "Projetos",
      "nav.2": "Trabalhos",
      "nav.3": "Pesquisa",
      "nav.4": "Currículo",
      "nav.5": "Lattes",
      "nav.6": "Contato",
      "sections.sobre.title": "Trajetória entre código e estrelas",
      "sections.projetos.title": "O que eu construo",
      "sections.projetos.lead": "Clique em qualquer cartão para revelar os detalhes técnicos.",
      "sections.trabalhos.title": "Tudo o que eu faço no GitHub",
      "sections.trabalhos.lead": "Lista completa dos meus repositórios, públicos e privados. Cada cartão traz um resumo; abra \"Detalhes\" para ver o texto completo, a stack e o link.",
      "sections.pesquisa.title": "Astronomia computacional",
      "sections.pesquisa.lead": "Projetos de pesquisa em astrofísica computacional. Clique para expandir.",
      "sections.bolsas.title": "Iniciação Científica & Pesquisa",
      "sections.bolsas.lead": "Projetos de bolsa e voluntariado em astrofísica computacional (extraídos do meu CV).",
      "sections.curriculo.title": "Currículo & Material",
      "sections.lattes.title": "Plataforma Lattes (CNPq)",
      "sections.contato.title": "Vamos nos conectar",
      "sections.contato.lead": "Fale comigo pelo canal que preferir.",
      "sections.contatoHero.title": "Horizonte de Eventos · Onde o Código Transcende o Espaço-Tempo",
      "cat.all": "Todos",
      "cat.software": "Software",
      "cat.pesquisa": "Pesquisa",
      "cat.academico": "Acadêmico",
      "cat.pessoal": "Pessoal",
      "cat.searchPlaceholder": "Filtrar por nome, tecnologia ou tag...",
      "cat.searchAria": "Buscar projetos",
      "vis.público": "Público",
      "vis.privado": "Privado",
      "vis.planejamento": "Em planejamento",
      "vis.elaboracao": "Em elaboração",
      "labels.details": "Detalhes",
      "labels.viewRepo": "↗ Ver repositório no GitHub",
      "labels.noRepo": "Sem repositório público ainda",
      "bolsas.orientLabel": "Orientação",
      "bolsas.periodLabel": "Período",
      "contactLabels.email": "Email",
      "contactLabels.github": "GitHub",
      "contactLabels.linkedin": "LinkedIn",
      "contactLabels.scholar": "Google Scholar",
      "contactLabels.orcid": "ORCID",
      "contactLabels.lattes": "Lattes",
      "contactLabels.instagram": "Instagram",
      "contactLabels.site": "Site oficial",
      "contactLabels.location": "Localização",
      footer: "feito com café, código e um céu estrelado."
    },
    en: {
      "nav.0": "About",
      "nav.1": "Projects",
      "nav.2": "Work",
      "nav.3": "Research",
      "nav.4": "Resume",
      "nav.5": "Lattes",
      "nav.6": "Contact",
      "sections.sobre.title": "Journey between code and stars",
      "sections.projetos.title": "What I build",
      "sections.projetos.lead": "Click any card to reveal the technical details.",
      "sections.trabalhos.title": "Everything I do on GitHub",
      "sections.trabalhos.lead": "A complete list of my repositories, both public and private. Each card includes a summary; open \"Details\" to see the full text, the stack and the link.",
      "sections.pesquisa.title": "Computational astronomy",
      "sections.pesquisa.lead": "Computational astrophysics research projects. Click to expand.",
      "sections.bolsas.title": "Scientific Initiation & Research",
      "sections.bolsas.lead": "Scholarship and volunteer projects in computational astrophysics (from my CV).",
      "sections.curriculo.title": "Resume & Material",
      "sections.lattes.title": "Lattes Platform (CNPq)",
      "sections.contato.title": "Let's connect",
      "sections.contato.lead": "Reach me through your preferred channel.",
      "sections.contatoHero.title": "Event Horizon · Where Code Transcends Spacetime",
      "cat.all": "All",
      "cat.software": "Software",
      "cat.pesquisa": "Research",
      "cat.academico": "Academic",
      "cat.pessoal": "Personal",
      "cat.searchPlaceholder": "Filter by name, technology or tag...",
      "cat.searchAria": "Search projects",
      "vis.público": "Public",
      "vis.privado": "Private",
      "vis.planejamento": "Planned",
      "vis.elaboracao": "In progress",
      "labels.details": "Details",
      "labels.viewRepo": "↗ View repository on GitHub",
      "labels.noRepo": "No public repository yet",
      "bolsas.orientLabel": "Supervisor",
      "bolsas.periodLabel": "Period",
      "contactLabels.email": "Email",
      "contactLabels.github": "GitHub",
      "contactLabels.linkedin": "LinkedIn",
      "contactLabels.scholar": "Google Scholar",
      "contactLabels.orcid": "ORCID",
      "contactLabels.lattes": "Lattes",
      "contactLabels.instagram": "Instagram",
      "contactLabels.site": "Official site",
      "contactLabels.location": "Location",
      footer: "made with coffee, code and a starry sky."
    },
    es: {
      "nav.0": "Sobre mí",
      "nav.1": "Proyectos",
      "nav.2": "Trabajos",
      "nav.3": "Investigación",
      "nav.4": "Currículum",
      "nav.5": "Lattes",
      "nav.6": "Contacto",
      "sections.sobre.title": "Trayectoria entre código y estrellas",
      "sections.projetos.title": "Lo que construyo",
      "sections.projetos.lead": "Haz clic en cualquier tarjeta para ver los detalles técnicos.",
      "sections.trabalhos.title": "Todo lo que hago en GitHub",
      "sections.trabalhos.lead": "Lista completa de mis repositorios, públicos y privados. Cada tarjeta incluye un resumen; abre \"Detalles\" para ver el texto completo, el stack y el enlace.",
      "sections.pesquisa.title": "Astronomía computacional",
      "sections.pesquisa.lead": "Proyectos de investigación en astrofísica computacional. Haz clic para expandir.",
      "sections.bolsas.title": "Iniciación Científica e Investigación",
      "sections.bolsas.lead": "Proyectos de beca y voluntariado en astrofísica computacional (de mi CV).",
      "sections.curriculo.title": "Currículum y Material",
      "sections.lattes.title": "Plataforma Lattes (CNPq)",
      "sections.contato.title": "Conectemos",
      "sections.contato.lead": "Contáctame por el canal que prefieras.",
      "sections.contatoHero.title": "Horizonte de Sucesos · Donde el Código Trasciende el Espacio-Tiempo",
      "cat.all": "Todos",
      "cat.software": "Software",
      "cat.pesquisa": "Investigación",
      "cat.academico": "Académico",
      "cat.pessoal": "Personal",
      "cat.searchPlaceholder": "Filtrar por nombre, tecnología o etiqueta...",
      "cat.searchAria": "Buscar proyectos",
      "vis.público": "Público",
      "vis.privado": "Privado",
      "vis.planejamento": "En planificación",
      "vis.elaboracao": "En elaboración",
      "labels.details": "Detalles",
      "labels.viewRepo": "↗ Ver repositorio en GitHub",
      "labels.noRepo": "Aún sin repositorio público",
      "bolsas.orientLabel": "Supervisor",
      "bolsas.periodLabel": "Período",
      "contactLabels.email": "Correo",
      "contactLabels.github": "GitHub",
      "contactLabels.linkedin": "LinkedIn",
      "contactLabels.scholar": "Google Scholar",
      "contactLabels.orcid": "ORCID",
      "contactLabels.lattes": "Lattes",
      "contactLabels.instagram": "Instagram",
      "contactLabels.site": "Sitio oficial",
      "contactLabels.location": "Ubicación",
      footer: "hecho con café, código y un cielo estrellado."
    },
    fr: {
      "nav.0": "À propos",
      "nav.1": "Projets",
      "nav.2": "Travaux",
      "nav.3": "Recherche",
      "nav.4": "CV",
      "nav.5": "Lattes",
      "nav.6": "Contact",
      "sections.sobre.title": "Parcours entre code et étoiles",
      "sections.projetos.title": "Ce que je construis",
      "sections.projetos.lead": "Cliquez sur une carte pour révéler les détails techniques.",
      "sections.trabalhos.title": "Tout ce que je fais sur GitHub",
      "sections.trabalhos.lead": "Liste complète de mes dépôts, publics et privés. Chaque carte contient un résumé ; ouvrez « Détails » pour voir le texte complet, la stack et le lien.",
      "sections.pesquisa.title": "Astronomie computationnelle",
      "sections.pesquisa.lead": "Projets de recherche en astrophysique computationnelle. Cliquez pour déployer.",
      "sections.bolsas.title": "Initiation Scientifique et Recherche",
      "sections.bolsas.lead": "Projets de bourse et bénévoles en astrophysique computationnelle (issus de mon CV).",
      "sections.curriculo.title": "CV et Matériel",
      "sections.lattes.title": "Plateforme Lattes (CNPq)",
      "sections.contato.title": "Restons en contact",
      "sections.contato.lead": "Joignez-moi par le canal de votre choix.",
      "sections.contatoHero.title": "Horizon des Événements · Où le Code Transcende l'Espace-Temps",
      "cat.all": "Tous",
      "cat.software": "Logiciel",
      "cat.pesquisa": "Recherche",
      "cat.academico": "Académique",
      "cat.pessoal": "Personnel",
      "cat.searchPlaceholder": "Filtrer par nom, technologie ou tag...",
      "cat.searchAria": "Rechercher des projets",
      "vis.público": "Public",
      "vis.privado": "Privé",
      "vis.planejamento": "En projet",
      "vis.elaboracao": "En cours",
      "labels.details": "Détails",
      "labels.viewRepo": "↗ Voir le dépôt sur GitHub",
      "labels.noRepo": "Pas encore de dépôt public",
      "bolsas.orientLabel": "Encadrant",
      "bolsas.periodLabel": "Période",
      "contactLabels.email": "Courriel",
      "contactLabels.github": "GitHub",
      "contactLabels.linkedin": "LinkedIn",
      "contactLabels.scholar": "Google Scholar",
      "contactLabels.orcid": "ORCID",
      "contactLabels.lattes": "Lattes",
      "contactLabels.instagram": "Instagram",
      "contactLabels.site": "Site officiel",
      "contactLabels.location": "Localisation",
      footer: "fait avec du café, du code et un ciel étoilé."
    },
    it: {
      "nav.0": "Chi sono",
      "nav.1": "Progetti",
      "nav.2": "Lavori",
      "nav.3": "Ricerca",
      "nav.4": "Curriculum",
      "nav.5": "Lattes",
      "nav.6": "Contatti",
      "sections.sobre.title": "Un percorso tra codice e stelle",
      "sections.projetos.title": "Cosa costruisco",
      "sections.projetos.lead": "Fai clic su una scheda per vedere i dettagli tecnici.",
      "sections.trabalhos.title": "Tutto ciò che faccio su GitHub",
      "sections.trabalhos.lead": "Elenco completo dei miei repository, pubblici e privati. Ogni scheda riporta un riepilogo; apri \"Dettagli\" per vedere il testo completo, lo stack e il link.",
      "sections.pesquisa.title": "Astronomia computazionale",
      "sections.pesquisa.lead": "Progetti di ricerca in astrofisica computazionale. Fai clic per espandere.",
      "sections.bolsas.title": "Iniziazione Scientifica e Ricerca",
      "sections.bolsas.lead": "Progetti con borsa e volontari in astrofisica computazionale (dal mio CV).",
      "sections.curriculo.title": "Curriculum e materiale",
      "sections.lattes.title": "Piattaforma Lattes (CNPq)",
      "sections.contato.title": "Restiamo in contatto",
      "sections.contato.lead": "Scrivimi dal canale che preferisci.",
      "sections.contatoHero.title": "Orizzonte degli eventi",
      "cat.all": "Tutti",
      "cat.software": "Software",
      "cat.pesquisa": "Ricerca",
      "cat.academico": "Accademico",
      "cat.pessoal": "Personale",
      "cat.searchPlaceholder": "Filtra per nome, tecnologia o tag...",
      "cat.searchAria": "Cerca progetti",
      "vis.público": "Pubblico",
      "vis.privado": "Privato",
      "vis.planejamento": "Pianificato",
      "vis.elaboracao": "In corso",
      "labels.details": "Dettagli",
      "labels.viewRepo": "↗ Vedi il repository su GitHub",
      "labels.noRepo": "Nessun repository pubblico per ora",
      "bolsas.orientLabel": "Supervisore",
      "bolsas.periodLabel": "Periodo",
      "contactLabels.email": "Email",
      "contactLabels.github": "GitHub",
      "contactLabels.linkedin": "LinkedIn",
      "contactLabels.scholar": "Google Scholar",
      "contactLabels.orcid": "ORCID",
      "contactLabels.lattes": "Lattes",
      "contactLabels.instagram": "Instagram",
      "contactLabels.site": "Sito ufficiale",
      "contactLabels.location": "Luogo",
      footer: "fatto con caffè, codice e un cielo stellato."
    },
    zh: {
      "nav.0": "关于",
      "nav.1": "项目",
      "nav.2": "作品",
      "nav.3": "研究",
      "nav.4": "简历",
      "nav.5": "Lattes",
      "nav.6": "联系",
      "sections.sobre.title": "在代码与星辰之间",
      "sections.projetos.title": "我的作品",
      "sections.projetos.lead": "点击任意卡片查看技术细节。",
      "sections.trabalhos.title": "我在 GitHub 上的全部工作",
      "sections.trabalhos.lead": "我的全部代码仓库列表,包括公开和私有仓库。每张卡片都附有摘要;打开“详情”即可查看完整说明、技术栈和链接。",
      "sections.pesquisa.title": "计算天文学",
      "sections.pesquisa.lead": "计算天体物理学研究项目。点击展开。",
      "sections.bolsas.title": "科研启蒙与研究",
      "sections.bolsas.lead": "计算天体物理学方向的资助与志愿项目（摘自简历）。",
      "sections.curriculo.title": "简历与资料",
      "sections.lattes.title": "Lattes 平台（CNPq）",
      "sections.contato.title": "保持联系",
      "sections.contato.lead": "通过你喜欢的方式联系我。",
      "sections.contatoHero.title": "事件视界",
      "cat.all": "全部",
      "cat.software": "软件",
      "cat.pesquisa": "研究",
      "cat.academico": "学术",
      "cat.pessoal": "个人",
      "cat.searchPlaceholder": "按名称、技术或标签筛选...",
      "cat.searchAria": "搜索项目",
      "vis.público": "公开",
      "vis.privado": "私有",
      "vis.planejamento": "计划中",
      "vis.elaboracao": "进行中",
      "labels.details": "详情",
      "labels.viewRepo": "↗ 在 GitHub 上查看仓库",
      "labels.noRepo": "暂无公开仓库",
      "bolsas.orientLabel": "导师",
      "bolsas.periodLabel": "时间",
      "contactLabels.email": "邮箱",
      "contactLabels.github": "GitHub",
      "contactLabels.linkedin": "LinkedIn",
      "contactLabels.scholar": "Google 学术",
      "contactLabels.orcid": "ORCID",
      "contactLabels.lattes": "Lattes",
      "contactLabels.instagram": "Instagram",
      "contactLabels.site": "官方网站",
      "contactLabels.location": "所在地",
      footer: "用咖啡、代码和满天繁星制作而成。"
    }
  }
};
const LAYOUT = {
  secoes: [
    "sobre",
    "projetos",
    "trabalhos",
    "pesquisa",
    "bolsas",
    "eventos",
    "curriculo",
    "lattes",
    "contato"
  ],
  nav: [
    "sobre",
    "projetos",
    "trabalhos",
    "pesquisa",
    "eventos",
    "curriculo",
    "lattes",
    "contato"
  ]
};

const EVENTS = [
  {
    id: "2026-sbpc",
    year: 2026,
    title: "78ª SBPC",
    url: "https://www.phrandrade.com/pt-br/media/2026/sbpc",
    photos: [
      "assets/media/eventos/2026-sbpc/01",
      "assets/media/eventos/2026-sbpc/02",
      "assets/media/eventos/2026-sbpc/03",
      "assets/media/eventos/2026-sbpc/04",
      "assets/media/eventos/2026-sbpc/05",
      "assets/media/eventos/2026-sbpc/06",
      "assets/media/eventos/2026-sbpc/07",
      "assets/media/eventos/2026-sbpc/08"
    ]
  },
  {
    id: "2026-escolainverno",
    year: 2026,
    title: "Escola de Inverno ON",
    url: "https://www.phrandrade.com/pt-br/media/2026/escolainverno",
    photos: [
      "assets/media/eventos/2026-escolainverno/01",
      "assets/media/eventos/2026-escolainverno/02",
      "assets/media/eventos/2026-escolainverno/03",
      "assets/media/eventos/2026-escolainverno/04",
      "assets/media/eventos/2026-escolainverno/05",
      "assets/media/eventos/2026-escolainverno/06",
      "assets/media/eventos/2026-escolainverno/07"
    ]
  },
  {
    id: "2026-conepe",
    year: 2026,
    title: "XIII CONEPE",
    url: "https://www.phrandrade.com/pt-br/media/2026/conepe",
    photos: []
  },
  {
    id: "2026-mostra-iff",
    year: 2026,
    title: "XIV Mostra do Conhecimento",
    url: "https://www.phrandrade.com/pt-br/media/2026/mostra-iff",
    photos: []
  },
  {
    id: "2026-sab",
    year: 2026,
    title: "XLIX RASAB",
    url: "https://www.phrandrade.com/pt-br/media/2026/sab",
    photos: [
      "assets/media/eventos/2026-sab/01",
      "assets/media/eventos/2026-sab/02",
      "assets/media/eventos/2026-sab/03",
      "assets/media/eventos/2026-sab/04",
      "assets/media/eventos/2026-sab/05",
      "assets/media/eventos/2026-sab/06",
      "assets/media/eventos/2026-sab/07"
    ]
  },
  {
    id: "2026-confict",
    year: 2026,
    title: "XVII CONFICT",
    url: "https://www.phrandrade.com/pt-br/media/2026/confict",
    photos: [ "assets/media/eventos/2026-confict/01" ]
  },
  {
    id: "2025-sab",
    year: 2025,
    title: "XLVIII SAB",
    url: "https://www.phrandrade.com/pt-br/media/2025/sab",
    photos: [
      "assets/media/eventos/2025-sab/01",
      "assets/media/eventos/2025-sab/02",
      "assets/media/eventos/2025-sab/03",
      "assets/media/eventos/2025-sab/04",
      "assets/media/eventos/2025-sab/05",
      "assets/media/eventos/2025-sab/06",
      "assets/media/eventos/2025-sab/07",
      "assets/media/eventos/2025-sab/08",
      "assets/media/eventos/2025-sab/09"
    ]
  },
  {
    id: "2025-mctia",
    year: 2025,
    title: "XVI MCTIA",
    url: "https://www.phrandrade.com/pt-br/media/2025/mctia",
    photos: [
      "assets/media/eventos/2025-mctia/01",
      "assets/media/eventos/2025-mctia/02",
      "assets/media/eventos/2025-mctia/03",
      "assets/media/eventos/2025-mctia/04",
      "assets/media/eventos/2025-mctia/05",
      "assets/media/eventos/2025-mctia/06",
      "assets/media/eventos/2025-mctia/07",
      "assets/media/eventos/2025-mctia/08",
      "assets/media/eventos/2025-mctia/09"
    ]
  },
  {
    id: "2024-4-sceg",
    year: 2024,
    title: "4ª SCEG 2024",
    url: "https://www.phrandrade.com/pt-br/media/2024/4-sceg",
    photos: [
      "assets/media/eventos/2024-4-sceg/01",
      "assets/media/eventos/2024-4-sceg/02",
      "assets/media/eventos/2024-4-sceg/03",
      "assets/media/eventos/2024-4-sceg/04"
    ]
  },
  {
    id: "2024-febic",
    year: 2024,
    title: "IX FEBIC",
    url: "https://www.phrandrade.com/pt-br/media/2024/febic",
    photos: [
      "assets/media/eventos/2024-febic/01",
      "assets/media/eventos/2024-febic/02",
      "assets/media/eventos/2024-febic/03",
      "assets/media/eventos/2024-febic/04",
      "assets/media/eventos/2024-febic/05",
      "assets/media/eventos/2024-febic/06",
      "assets/media/eventos/2024-febic/07",
      "assets/media/eventos/2024-febic/08",
      "assets/media/eventos/2024-febic/09"
    ]
  },
  {
    id: "2024-e-jiniff",
    year: 2024,
    title: "e-JINIFF",
    url: "https://www.phrandrade.com/pt-br/media/2024/e-jiniff",
    photos: []
  },
  {
    id: "2023-febrace",
    year: 2023,
    title: "21ª FEBRACE",
    url: "https://www.phrandrade.com/pt-br/media/2023/febrace",
    photos: [
      "assets/media/eventos/2023-febrace/01",
      "assets/media/eventos/2023-febrace/02",
      "assets/media/eventos/2023-febrace/03",
      "assets/media/eventos/2023-febrace/04",
      "assets/media/eventos/2023-febrace/05",
      "assets/media/eventos/2023-febrace/06",
      "assets/media/eventos/2023-febrace/07"
    ]
  },
  {
    id: "2023-mostratec",
    year: 2023,
    title: "37ª MOSTRATEC",
    url: "https://www.phrandrade.com/pt-br/media/2023/mostratec",
    photos: [
      "assets/media/eventos/2023-mostratec/01",
      "assets/media/eventos/2023-mostratec/02",
      "assets/media/eventos/2023-mostratec/03",
      "assets/media/eventos/2023-mostratec/04",
      "assets/media/eventos/2023-mostratec/05",
      "assets/media/eventos/2023-mostratec/06",
      "assets/media/eventos/2023-mostratec/07",
      "assets/media/eventos/2023-mostratec/08",
      "assets/media/eventos/2023-mostratec/09"
    ]
  },
  {
    id: "2022-lncc",
    year: 2022,
    title: "Laboratório Nacional de Computação Científica",
    url: "https://www.phrandrade.com/pt-br/media/2022/lncc",
    photos: [
      "assets/media/eventos/2022-lncc/01",
      "assets/media/eventos/2022-lncc/02",
      "assets/media/eventos/2022-lncc/03",
      "assets/media/eventos/2022-lncc/04",
      "assets/media/eventos/2022-lncc/05",
      "assets/media/eventos/2022-lncc/06",
      "assets/media/eventos/2022-lncc/07",
      "assets/media/eventos/2022-lncc/08",
      "assets/media/eventos/2022-lncc/09"
    ]
  }
];
const UPDATED = "2026-11-09";

window.PORTFOLIO_DATA = { FULL_NAME, ORCID, REPOS, FEATURED, RESEARCH, BOLSAS, CONTACTS, EXTRA, I18N, OVERRIDES, LAYOUT, EVENTS, UPDATED };
