// Dados do portfólio — Pedro Henrique Rocha de Andrade (pedroiff0)
// Short resumé de introdução/conquista de clientes: lista TODOS os trabalhos do
// GitHub (públicos E privados), cada um com um short brief enriquecido.
// Projetos de bolsa extraídos do currículo LaTeX (cv/portuguese.tex).

const FULL_NAME = "Pedro Henrique Rocha de Andrade";
const ORCID = "0009-0003-6724-4640";

// Categorias: software | pesquisa | academico | pessoal
const REPOS = [
  // ---------------- SOFTWARE / SISTEMAS ----------------
  {
    name: "Sistema Acadêmico",
    cat: "software",
    visibility: "privado",
    icon: "🛰️",
    repo: "https://github.com/pedroiff0/sistema-academico",
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "EJS", "JWT", "Docker", "vis-network"],
    tags: ["Full-stack", "Web App", "Academia", "CR/Boletim", "API Bot"],
    brief: "Web exclusivo para alunos de Eng. de Computação do IFF acompanharem grade, diário, notas, frequência, boletim/CR e planejamento. Fork do padrão de avaliações, com diário, ementário, grafo de dependências e API de ingestão por bot (Telegram). Deploy via Docker Compose + systemd."
  },
  {
    name: "Sistema de Avaliações",
    cat: "software",
    visibility: "privado",
    icon: "🌌",
    repo: "https://github.com/pedroiff0/avaliacoes",
    stack: ["Node.js", "Express", "MongoDB", "LaTeX", "EJS"],
    tags: ["EdTech", "LaTeX", "Provas", "Multi-variantes"],
    brief: "Plataforma base de provas/listas/trabalhos em PDF a partir de um banco de questões reutilizável, com geração real em LaTeX e múltiplas variantes (seleção/ordem aleatórias). Núcleo professor+admin."
  },
  {
    name: "Avaliações Professores",
    cat: "software",
    visibility: "privado",
    icon: "🧑‍🏫",
    repo: "https://github.com/pedroiff0/avaliacoes-professores",
    stack: ["Node.js", "Express", "MongoDB", "LaTeX"],
    tags: ["EdTech", "Banco de Questões", "Colaborativo"],
    brief: "Fork do Sistema de Avaliações com banco pessoal + banco global compartilhado (fork de questões entre professores), PDF por pool com peso e gabarito opcional."
  },
  {
    name: "Avaliações Concurseiro",
    cat: "software",
    visibility: "privado",
    icon: "📝",
    repo: "https://github.com/pedroiff0/avaliacoes-concurseiro",
    stack: ["Node.js", "Express", "MongoDB", "Expo", "LaTeX"],
    tags: ["Concursos", "Gamificação", "Mobile", "Simulados"],
    brief: "Fork focado em concurseiros: banco de MCQ, trilhas por edital, cronograma maleável, Pomodoro, simulados em PDF e app mobile Expo com paridade total de funcionalidades."
  },
  {
    name: "Portal Acadêmico IFF (academicoWeb)",
    cat: "software",
    visibility: "privado",
    icon: "🎓",
    repo: "https://github.com/pedroiff0/academicoWeb",
    stack: ["Web", "Node.js", "Scraping"],
    tags: ["Web App", "IFF", "Dashboard"],
    brief: "Sistema web que acessa os dados acadêmicos do IFF com as credenciais oficiais: dashboard, diário, material de aula, boletim e histórico escolar."
  },
  {
    name: "ReLaTeX",
    cat: "software",
    visibility: "privado",
    icon: "🪐",
    repo: "https://github.com/pedroiff0/relatex",
    stack: ["Docker", "Node.js", "MongoDB", "Redis", "Pug", "LaTeX"],
    tags: ["Overleaf Fork", "Self-hosted", "IFF", "LaTeX"],
    brief: "Fork do Overleaf Community Edition com identidade do IFF: classes oficiais embutidas (ifftese/iffposter), tema azul, landing própria e 10 botões extras no editor. Self-hosted via Docker (web+mongo+redis)."
  },
  {
    name: "Verdementa",
    cat: "software",
    visibility: "privado",
    icon: "🌿",
    repo: "https://github.com/pedroiff0/verdementa",
    stack: ["Meta-repo", "Node.js"],
    tags: ["Suíte Comercial", "ERP"],
    brief: "Meta-repositório que agrupa Caixas, ControleEstoque, LevantamentoEstoque e Planilhador — suíte de ferramentas comerciais."
  },
  {
    name: "Caixas",
    cat: "software",
    visibility: "privado",
    icon: "💰",
    repo: "https://github.com/pedroiff0/Caixas",
    stack: ["Node.js", "CI"],
    tags: ["Controle de Caixa", "Relatórios"],
    brief: "Sistema para lançamento de controles de caixa com menus, relatórios e funcionalidades extras."
  },
  {
    name: "ControleEstoque",
    cat: "software",
    visibility: "privado",
    icon: "📦",
    repo: "https://github.com/pedroiff0/ControleEstoque",
    stack: ["Node.js", "CI"],
    tags: ["Inventário", "Estoque"],
    brief: "Sistema de controle/contagem de inventário de estoque."
  },
  {
    name: "LevantamentoEstoque",
    cat: "software",
    visibility: "privado",
    icon: "📊",
    repo: "https://github.com/pedroiff0/LevantamentoEstoque",
    stack: ["Node.js", "CI"],
    tags: ["Estoque", "Compras"],
    brief: "Levantamento de itens que são alvo de compras repetidas."
  },
  {
    name: "Planilhador",
    cat: "software",
    visibility: "privado",
    icon: "🧮",
    repo: "https://github.com/pedroiff0/Planilhador",
    stack: ["Node.js", "CI"],
    tags: ["NFCe", "Planilhas"],
    brief: "Ferramentas NFCe / planilhamento."
  },

  // ---------------- PESQUISA / ASTROFÍSICA ----------------
  {
    name: "anomaly_detection",
    cat: "pesquisa",
    visibility: "privado",
    icon: "🔭",
    repo: "https://github.com/pedroiff0/anomaly_detection",
    stack: ["Python", "Astropy", "NumPy", "Pandas", "ML", "Jupyter"],
    tags: ["PIBIC/CNPq", "Gaia", "GALAH", "Astroquímica"],
    brief: "Análise das propriedades estelares e composição química das estrelas próximas do GCNS observadas pelo GALAH DR4 (Gaia DR3 + GALAH DR4). Bolsa PIBIC/CNPq; co-autoria PUC Chile (Dra. M. L. L. Dantas, Dra. A. C. Soja)."
  },
  {
    name: "SpectraViewer",
    cat: "pesquisa",
    visibility: "público",
    icon: "📈",
    repo: "https://github.com/pedroiff0/spectraviewer",
    stack: ["Python", "FITS", "Matplotlib"],
    tags: ["Espectroscopia", "GALAH DR4", "Open Source"],
    brief: "Viewer interativo de espectros GALAH DR4 (4 bandas, linhas de referência CNO/Alpha/Iron-peak, leitura de FITS, metadados Teff/log(g)/[Fe/H])."
  },
  {
    name: "research",
    cat: "pesquisa",
    visibility: "privado",
    icon: "📚",
    repo: "https://github.com/pedroiff0/research",
    stack: ["Python", "arXiv"],
    tags: ["Literatura", "arXiv"],
    brief: "Anexos de pesquisa: busca de artigos no arXiv por assunto/keyword para compor leituras."
  },

  // ---------------- ACADÊMICO / ESTUDO ----------------
  {
    name: "Currículo (CV)",
    cat: "academico",
    visibility: "privado",
    icon: "📄",
    repo: "https://github.com/pedroiff0/cv",
    stack: ["LaTeX", "altacv", "Makefile", "biblatex"],
    tags: ["Multilíngue", "PT/EN/ES/FR"],
    brief: "CV em LaTeX (classe altacv), multilíngue (PT/EN/ES/FR) compilado via Makefile. Inclui ORCID, Google Scholar e publicações em congressos (CONFICT, SAB, SBPC)."
  },
  {
    name: "Cálculo Numérico",
    cat: "academico",
    visibility: "público",
    icon: "🔢",
    repo: "https://github.com/pedroiff0/CalculoNumerico",
    stack: ["Python", "CI", "Docs", "NumPy"],
    tags: ["Disciplina", "Métodos Numéricos"],
    brief: "Repositório de códigos da disciplina Cálculo Numérico 2025.2, com CI e documentação."
  },
  {
    name: "Formulários",
    cat: "academico",
    visibility: "público",
    icon: "📐",
    repo: "https://github.com/pedroiff0/formularios",
    stack: ["LaTeX", "siunitx"],
    tags: ["Resumos", "Fórmulas"],
    brief: "Coleção de folhas de fórmulas e resumos em LaTeX organizados por disciplina."
  },
  {
    name: "Modelos LaTeX",
    cat: "academico",
    visibility: "privado",
    icon: "📐",
    repo: "https://github.com/pedroiff0/modelos",
    stack: ["LaTeX"],
    tags: ["Templates"],
    brief: "Modelos LaTeX para uso geral."
  },

  // ---------------- PESSOAL / VIDA ----------------
  {
    name: "page (Quartz)",
    cat: "pessoal",
    visibility: "público",
    icon: "🌐",
    repo: "https://github.com/pedroiff0/page",
    stack: ["Quartz", "Obsidian", "MDX"],
    tags: ["Site Oficial", "Obsidian", "Multilíngue"],
    brief: "Site pessoal/acadêmico oficial, multilíngue (PT completo; EN/ES/FR parciais), em Quartz a partir do vault Obsidian. Publicado em github.io/page (migrando p/ www.phrandrade.com)."
  },
  {
    name: "hardcore-life",
    cat: "pessoal",
    visibility: "privado",
    icon: "🗂️",
    repo: "https://github.com/pedroiff0/hardcore-life",
    stack: ["Obsidian", "PARA"],
    tags: ["Produtividade", "Second Brain"],
    brief: "Vault Obsidian de gestão de vida (PARA: projetos, áreas, recursos, arquivos)."
  },
  {
    name: "dashboard-life",
    cat: "pessoal",
    visibility: "privado",
    icon: "📟",
    repo: "https://github.com/pedroiff0/dashboard-life",
    stack: ["Dashboard"],
    tags: ["Life OS"],
    brief: "Dashboard de vida (provavelmente derivado do hardcore-life)."
  },
  {
    name: "guia-github",
    cat: "pessoal",
    visibility: "público",
    icon: "🐙",
    repo: "https://github.com/pedroiff0/guia-github",
    stack: ["Docs", "Actions"],
    tags: ["Boas Práticas", "Templates"],
    brief: "Boas práticas, templates e exemplos de uso profissional do GitHub (Actions, Projects, Issues, Branching) para projetos Python."
  },
  {
    name: "Perfil GitHub",
    cat: "pessoal",
    visibility: "público",
    icon: "👤",
    repo: "https://github.com/pedroiff0/pedroiff0",
    stack: ["Profile", "Markdown"],
    tags: ["README"],
    brief: "README de perfil do GitHub (bio, Tech & Tools, featured projects)."
  }
];

// Projetos em destaque no topo (cartões clicáveis).
const FEATURED = [
  REPOS.find(r => r.name === "ReLaTeX"),
  REPOS.find(r => r.name === "Sistema Acadêmico"),
  REPOS.find(r => r.name === "Sistema de Avaliações"),
  REPOS.find(r => r.name === "Currículo (CV)"),
];

// Itens de pesquisa em accordion.
const RESEARCH = REPOS.filter(r => r.cat === "pesquisa").map(r => ({
  title: r.name,
  icon: r.icon,
  badge: r.visibility === "público" ? "Público" : "GitHub · pedroiff0",
  summary: r.brief,
  details: r.brief + "  Repositório: " + r.repo
}));

// Projetos de bolsa/pesquisa (extraídos do CV LaTeX — cv/portuguese.tex).
const BOLSAS = [
  {
    title: "Entendendo a Matéria Escura a partir de Choques ExtraGalácticos",
    icon: "🌑",
    kind: "IC Júnior · CNPq",
    period: "Set. 2022 — Mar. 2023",
    orient: "Dra. Ana Cecília Soja",
    desc: "Iniciação Científica Júnior sobre matéria escura e choques extragalácticos."
  },
  {
    title: "MobFog no IFFMaker",
    icon: "🌫️",
    kind: "IC · IFF",
    period: "Ago. 2023 — Fev. 2024",
    orient: "Dra. Ana Cecília Soja",
    desc: "Projeto de Iniciação Científica do IFF (computação em névoa / edge)."
  },
  {
    title: "Simulando o Impacto de Satélites em Observações Astronômicas",
    icon: "🛰️",
    kind: "Voluntário · CNPq",
    period: "Ago. 2023 — Set. 2023",
    orient: "Dra. Ana Cecília Soja",
    desc: "Simulação do impacto de rastros de satélites em imagens astronômicas."
  },
  {
    title: "Detecção de Anomalias em Estrelas da Via Láctea (Gaia + Surveys + ML)",
    icon: "🌟",
    kind: "IC · CNPq (PIBIC)",
    period: "Out. 2025 — presente",
    orient: "Dra. Ana Cecília Soja e Dra. Maria Luiza Linhares Dantas",
    desc: "Bolsa PIBIC/CNPq: aprendizado de máquina sobre Gaia DR3 + GALAH DR4 + GCNS para arqueologia galáctica e populações estelares. Co-autoria PUC Chile."
  }
];

// Contatos (enriquecidos com dados do CV LaTeX).
const CONTACTS = [
  { icon: "✉️", label: "Email", value: "pedroiff0@gmail.com", href: "mailto:pedroiff0@gmail.com" },
  { icon: "💻", label: "GitHub", value: "@pedroiff0", href: "https://github.com/pedroiff0" },
  { icon: "🔗", label: "LinkedIn", value: "pedroiff0", href: "https://www.linkedin.com/in/pedroiff0/" },
  { icon: "🎓", label: "Google Scholar", value: "Pedro H. R. de Andrade", href: "https://scholar.google.com.br/citations?user=qG9tHGEAAAAJ&hl=pt-BR" },
  { icon: "🆔", label: "ORCID", value: ORCID, href: "https://orcid.org/" + ORCID },
  { icon: "📚", label: "Lattes", value: "6818168089966785", href: "http://lattes.cnpq.br/6818168089966785" },
  { icon: "🌐", label: "Site oficial", value: "www.phrandrade.com", href: "https://www.phrandrade.com/pt-br/" },
  { icon: "📍", label: "Localização", value: "Bom Jesus do Itabapoana, RJ — Brasil", href: null }
];

window.PORTFOLIO_DATA = { FULL_NAME, ORCID, REPOS, FEATURED, RESEARCH, BOLSAS, CONTACTS };
