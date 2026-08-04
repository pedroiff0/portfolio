// Dados dos projetos e da pesquisa — portfólio Pedro Rocha.
// Conteúdo baseado nos repositórios reais (README/CLAUDE/AGENTS).

const PROJECTS = [
  {
    id: "relatex",
    icon: "🪐",
    title: "ReLaTeX",
    tag: "Fork do Overleaf CE · IFF",
    summary:
      "Ambiente LaTeX colaborativo self-hosted, com a identidade do IFF e classes oficiais embutidas.",
    stack: ["Docker", "Node.js", "MongoDB", "Redis", "Pug"],
    repo: "https://github.com/pedroiff0/relatex",
    details:
      "Fork do Overleaf Community Edition com a identidade do Instituto de Física e Química (IFF): " +
      "landing page própria, rebrand (favicon azul “Rx”), tema azul no editor e 10 botões extras " +
      "na barra de código-fonte (Título, Autor, Orientador, Seção, Subseção, Negrito, Itálico, " +
      "Tabela, Quadro, Citação). Já vem com as classes IFF embutidas (ifftese.cls, iffposter.cls, " +
      "metadados.sty, macros.sty) e aprovação de usuários (modo ii-A). Roda em Docker Compose " +
      "(web + mongo + redis) exposto na tailnet via Tailscale Serve."
  },
  {
    id: "sistema-academico",
    icon: "🛰️",
    title: "Sistema Acadêmico",
    tag: "IFF · Eng. de Computação",
    summary:
      "Sistema web exclusivo para alunos acompanharem grade, diário, notas, frequência e CR.",
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "EJS", "JWT", "Docker"],
    repo: "https://github.com/pedroiff0/sistema-academico",
    details:
      "Web app de acompanhamento acadêmico para alunos de Eng. de Computação do IFF (Bom Jesus do " +
      "Itabapoana). Fork do padrão de avaliações; o cluster de professor/admin foi removido, restando " +
      "um produto de papel único (aluno). Backend Node/Express + MongoDB/Mongoose, frontend EJS + JS " +
      "vanilla (sem bundler), auth JWT em cookie httpOnly. Inclui diário, boletim/CR, ementário, " +
      "grafo de dependências (vis-network), cronograma arrasta-e-solta, simulação de notas e API de " +
      "ingestão por bot (Telegram) para lançar presença/avaliações. Deploy via Docker Compose + systemd."
  },
  {
    id: "sistema-avaliacoes",
    icon: "🌌",
    title: "Sistema de Avaliações",
    tag: "Plataforma base (multi-papel)",
    summary:
      "Plataforma original de avaliações, provas e questões da qual o Sistema Acadêmico deriva.",
    stack: ["Node.js", "Express", "MongoDB", "EJS", "JWT"],
    repo: "https://github.com/pedroiff0/avaliacoes",
    details:
      "Sistema de avaliações multi-papel (aluno, professor, admin) — a base da qual o Sistema " +
      "Acadêmico é fork. Gerencia provas, questões e o acompanhamento das notas por perfil. " +
      "Possui forks derivados para contextos específicos: avaliações-professores e um fork " +
      "concurseiro (estudo para concursos). Backend Node/Express + MongoDB, frontend EJS, auth JWT."
  },
  {
    id: "curriculo",
    icon: "📄",
    title: "Currículo (LaTeX)",
    tag: "AltaCV · multilíngue",
    summary:
      "CV em LaTeX (classe altacv) com versões em português, inglês, espanhol e francês.",
    stack: ["LaTeX", "altacv", "Makefile", "biblatex"],
    repo: "https://github.com/pedroiff0/cv",
    details:
      "Repositório com um CV em LaTeX construído sobre a classe altacv. Inclui um Makefile " +
      "conveniente (make portugueseCV, make englishCV, make clean) que compila o PDF e limpa " +
      "os auxiliares. Há bibliografia em sample.bib (biblatex) e scripts de tradução " +
      "(translate_cv.py). As versões em PT/EN/ES/FR são geradas a partir dos arquivos de idioma."
  }
];

const RESEARCH = [
  {
    title: "Arqueologia Galáctica & Populações Estelares",
    icon: "🌠",
    badge: "PIBIC / CNPq",
    summary:
      "Uso de aprendizado de máquina sobre dados do Gaia e surveys para entender a estrutura da Via Láctea.",
    details:
      "Pesquisa de Iniciação Científica (PIBIC/CNPq) na interseção entre métodos computacionais e " +
      "problemas astrofísicos. Envolve propriedades estelares, padrões de abundâncias químicas, " +
      "estimativas de idade, distribuições de metalicidade e propriedades cinemáticas das populações " +
      "no nosso bairro galáctico — combinando GAIA DR3, GALAH DR4 e o Gaia Catalogue of Nearby Stars (GCNS)."
  },
  {
    title: "anomaly_detection — GAIA × GALAH",
    icon: "🔭",
    badge: "GitHub · pedroiff0",
    summary:
      "Análise das propriedades e composição química das estrelas próximas do GCNS observadas pelo GALAH DR4.",
    details:
      "Repositório aberto (anomaly_detection) com análise estatística e de machine learning das " +
      "propriedades estelares e abundâncias químicas usando GAIA DR3 + GALAH DR4. Co-autoria com " +
      "Maria Luiza Linhares Dantas (PUC Chile) e Ana Cecília Soja (PUC Chile). Requisitos: Python, " +
      "Astropy, NumPy, Pandas, Matplotlib, Jupyter. CNPq, IFF e PUC Chile apoiaram o trabalho."
  },
  {
    title: "Simulações de Aglomerados de Galáxias",
    icon: "💫",
    badge: "Dinâmica",
    summary:
      "Simulações dinâmicas de aglomerados de galáxias em fusão e remoção de rastros de satélites.",
    details:
      "Experiência com simulações dinâmicas de aglomerados de galáxias em processo de fusão e com a " +
      "remoção de rastros de satélites em imagens astronômicas — aplicando computação ao tratamento e " +
      "à interpretação de dados observacionais."
  },
  {
    title: "SpectraViewer (open source)",
    icon: "📊",
    badge: "Público",
    summary:
      "Visualizador de espectros com linhas para o GALAH DR4, cruzado por id com o GNSC.",
    details:
      "Projeto público (spectraviewer) que exibe espectros com linhas de absorção para o dataset " +
      "GALAH DR4, cruzado por id exato com o GNSC (Gaia Catalogue of Nearby Stars). Ferramenta de " +
      "apoio à análise espectral na pesquisa em astronomia."
  }
];

// Exposto globalmente para main.js
window.PORTFOLIO_DATA = { PROJECTS, RESEARCH };
