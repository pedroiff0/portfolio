// Dados do portfólio — Pedro Rocha (pedroiff0)
// Short resumé de introdução/conquista de clientes: lista TODOS os trabalhos do
// GitHub (públicos E privados), cada um com um short brief. Conteúdo extraído
// dos READMEs reais dos repositórios.

// Categorias:
//  software   -> sistemas / apps
//  pesquisa   -> astrofísica computacional
//  academico  -> estudo / materiais / latex
//  pessoal    -> vida / notas / meta

const REPOS = [
  // ---------------- SOFTWARE / SISTEMAS ----------------
  {
    name: "Sistema Acadêmico",
    cat: "software",
    visibility: "privado",
    icon: "🛰️",
    repo: "https://github.com/pedroiff0/sistema-academico",
    stack: ["Node.js", "Express", "MongoDB", "EJS", "JWT", "Docker"],
    brief: "Web exclusivo para alunos de Eng. de Computação do IFF acompanharem grade, diário, notas, frequência, boletim/CR e planejamento. Fork do padrão de avaliações, com diário, ementário, grafo de dependências e API de ingestão por bot."
  },
  {
    name: "Sistema de Avaliações",
    cat: "software",
    visibility: "privado",
    icon: "🌌",
    repo: "https://github.com/pedroiff0/avaliacoes",
    stack: ["Node.js", "Express", "MongoDB", "LaTeX"],
    brief: "Plataforma base de provas/listas/trabalhos em PDF a partir de um banco de questões reutilizável, com geração real em LaTeX e múltiplas variantes. Núcleo professor+admin."
  },
  {
    name: "Avaliações Professores",
    cat: "software",
    visibility: "privado",
    icon: "🧑‍🏫",
    repo: "https://github.com/pedroiff0/avaliacoes-professores",
    stack: ["Node.js", "Express", "MongoDB", "LaTeX"],
    brief: "Fork do Sistema de Avaliações com banco pessoal + banco global compartilhado (fork de questões), PDF por pool com peso e gabarito opcional."
  },
  {
    name: "Avaliações Concurseiro",
    cat: "software",
    visibility: "privado",
    icon: "📝",
    repo: "https://github.com/pedroiff0/avaliacoes-concurseiro",
    stack: ["Node.js", "Express", "MongoDB", "Expo", "LaTeX"],
    brief: "Fork focado em concurseiros: banco de MCQ, trilhas por edital, cronograma maleável, Pomodoro, simulados em PDF e app mobile Expo com paridade total."
  },
  {
    name: "Portal Acadêmico IFF (academicoWeb)",
    cat: "software",
    visibility: "privado",
    icon: "🎓",
    repo: "https://github.com/pedroiff0/academicoWeb",
    stack: ["Web", "Node.js"],
    brief: "Sistema web que acessa os dados acadêmicos do IFF com as credenciais oficiais: dashboard, diário, material de aula, boletim e histórico."
  },
  {
    name: "ReLaTeX",
    cat: "software",
    visibility: "privado",
    icon: "🪐",
    repo: "https://github.com/pedroiff0/relatex",
    stack: ["Docker", "Node.js", "MongoDB", "Redis", "Pug"],
    brief: "Fork do Overleaf Community Edition com identidade do IFF: classes oficiais embutidas (ifftese/iffposter), tema azul, landing própria e 10 botões extras no editor. Self-hosted via Docker."
  },
  {
    name: "Verdementa",
    cat: "software",
    visibility: "privado",
    icon: "🌿",
    repo: "https://github.com/pedroiff0/verdementa",
    stack: ["Meta-repo"],
    brief: "Meta-repositório que agrupa Caixas, ControleEstoque, LevantamentoEstoque e Planilhador — suíte de ferramentas comerciais."
  },
  {
    name: "Caixas",
    cat: "software",
    visibility: "privado",
    icon: "💰",
    repo: "https://github.com/pedroiff0/Caixas",
    stack: ["CI"],
    brief: "Sistema para lançamento de controles de caixa com menus, relatórios e funcionalidades extras."
  },
  {
    name: "ControleEstoque",
    cat: "software",
    visibility: "privado",
    icon: "📦",
    repo: "https://github.com/pedroiff0/ControleEstoque",
    stack: ["CI"],
    brief: "Sistema de controle/contagem de inventário de estoque."
  },
  {
    name: "LevantamentoEstoque",
    cat: "software",
    visibility: "privado",
    icon: "📊",
    repo: "https://github.com/pedroiff0/LevantamentoEstoque",
    stack: ["CI"],
    brief: "Levantamento de itens que são alvo de compras repetidas."
  },
  {
    name: "Planilhador",
    cat: "software",
    visibility: "privado",
    icon: "🧮",
    repo: "https://github.com/pedroiff0/Planilhador",
    stack: ["CI"],
    brief: "Ferramentas NFCe / planilhamento."
  },

  // ---------------- PESQUISA / ASTROFÍSICA ----------------
  {
    name: "anomaly_detection",
    cat: "pesquisa",
    visibility: "privado",
    icon: "🔭",
    repo: "https://github.com/pedroiff0/anomaly_detection",
    stack: ["Python", "Astropy", "ML"],
    brief: "Análise das propriedades estelares e composição química das estrelas próximas do GCNS observadas pelo GALAH DR4 (Gaia DR3 + GALAH DR4). Bolsa PIBIC/CNPq; co-autoria PUC Chile."
  },
  {
    name: "SpectraViewer",
    cat: "pesquisa",
    visibility: "público",
    icon: "📈",
    repo: "https://github.com/pedroiff0/spectraviewer",
    stack: ["Python", "FITS"],
    brief: "Viewer interativo de espectros GALAH DR4 (4 bandas, linhas de referência, leitura de FITS, metadados Teff/log(g)/[Fe/H])."
  },
  {
    name: "research",
    cat: "pesquisa",
    visibility: "privado",
    icon: "📚",
    repo: "https://github.com/pedroiff0/research",
    stack: ["Python"],
    brief: "Anexos de pesquisa: busca de artigos no arXiv por assunto/keyword para compor leituras."
  },

  // ---------------- ACADÊMICO / ESTUDO ----------------
  {
    name: "Currículo (CV)",
    cat: "academico",
    visibility: "privado",
    icon: "📄",
    repo: "https://github.com/pedroiff0/cv",
    stack: ["LaTeX", "altacv", "Makefile"],
    brief: "CV em LaTeX (classe altacv), multilíngue (PT/EN/ES/FR) compilado via Makefile."
  },
  {
    name: "Cálculo Numérico",
    cat: "academico",
    visibility: "público",
    icon: "🔢",
    repo: "https://github.com/pedroiff0/CalculoNumerico",
    stack: ["Python", "CI", "Docs"],
    brief: "Repositório de códigos da disciplina Cálculo Numérico 2025.2, com CI e documentação."
  },
  {
    name: "Formulários",
    cat: "academico",
    visibility: "público",
    icon: "📐",
    repo: "https://github.com/pedroiff0/formularios",
    stack: ["LaTeX"],
    brief: "Coleção de folhas de fórmulas e resumos em LaTeX organizados por disciplina."
  },
  {
    name: "Modelos LaTeX",
    cat: "academico",
    visibility: "privado",
    icon: "📐",
    repo: "https://github.com/pedroiff0/modelos",
    stack: ["LaTeX"],
    brief: "Modelos LaTeX para uso geral."
  },

  // ---------------- PESSOAL / VIDA ----------------
  {
    name: "page (Quartz)",
    cat: "pessoal",
    visibility: "público",
    icon: "🌐",
    repo: "https://github.com/pedroiff0/page",
    stack: ["Quartz", "Obsidian"],
    brief: "Site pessoal/acadêmico oficial, multilíngue (PT completo; EN/ES/FR parciais), em Quartz a partir do vault Obsidian. Publicado em github.io/page (migrando p/ www.phrandrade.com)."
  },
  {
    name: "hardcore-life",
    cat: "pessoal",
    visibility: "privado",
    icon: "🗂️",
    repo: "https://github.com/pedroiff0/hardcore-life",
    stack: ["Obsidian"],
    brief: "Vault Obsidian de gestão de vida (PARA: projetos, áreas, recursos, arquivos)."
  },
  {
    name: "dashboard-life",
    cat: "pessoal",
    visibility: "privado",
    icon: "📟",
    repo: "https://github.com/pedroiff0/dashboard-life",
    stack: ["Dashboard"],
    brief: "Dashboard de vida (provavelmente derivado do hardcore-life)."
  },
  {
    name: "guia-github",
    cat: "pessoal",
    visibility: "público",
    icon: "🐙",
    repo: "https://github.com/pedroiff0/guia-github",
    stack: ["Docs"],
    brief: "Boas práticas, templates e exemplos de uso profissional do GitHub (Actions, Projects, Issues, Branching) para projetos Python."
  },
  {
    name: "Perfil GitHub",
    cat: "pessoal",
    visibility: "público",
    icon: "👤",
    repo: "https://github.com/pedroiff0/pedroiff0",
    stack: ["Profile"],
    brief: "README de perfil do GitHub (bio, Tech & Tools, featured projects)."
  }
];

// Projetos em destaque no topo (cartões clicáveis) — os 4 que você pediu originalmente.
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

window.PORTFOLIO_DATA = { REPOS, FEATURED, RESEARCH };
