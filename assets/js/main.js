/* Portfolio v2.3: monta a página a partir de window.PORTFOLIO_DATA (gerado por tools/build.py). */
(function () {
  "use strict";

  const D = window.PORTFOLIO_DATA;
  const LANGS = ["pt", "en", "es", "fr", "it", "zh"];
  const LAYOUT = D.LAYOUT || {};
  const ALL_SECTIONS = ["sobre", "projetos", "trabalhos", "pesquisa", "bolsas", "eventos", "curriculo", "lattes", "contato"];
  // Seções (ordem e visibilidade) e menu vêm da nota (## Página); o que não estiver lá fica oculto.
  const SECTIONS = (LAYOUT.secoes || ALL_SECTIONS).filter((id) => ALL_SECTIONS.includes(id));
  const NAV = (LAYOUT.nav || ["sobre", "projetos", "trabalhos", "pesquisa", "eventos", "curriculo", "lattes", "contato"]).filter((id) => SECTIONS.includes(id));
  const NAV_I18N = { sobre: 0, projetos: 1, trabalhos: 2, pesquisa: 3, curriculo: 4, lattes: 5, contato: 6 }; // índice em I18N.*.nav
  const CV_BASE = "https://www.phrandrade.com/resource/areas/profissional/curriculo";
  const CV_LANGS = [["pt", "Português"], ["en", "English"], ["es", "Español"], ["fr", "Français"], ["it", "Italiano"], ["zh", "中文"]];

  const UI = {
    pt: {
      cvText: "Currículo mantido em LaTeX (classe altacv), com versões sincronizadas em seis idiomas: português, inglês, espanhol, francês, italiano e mandarim.",
      cvRepo: "Repositório do CV",
      lattesText: "Estudante de Engenharia de Computação no IFF (Bom Jesus do Itabapoana, RJ), bolsista de Iniciação Científica (PIBIC/CNPq), com pesquisa em arqueologia galáctica, populações estelares e estrutura da Via Láctea.",
      lattesOpen: "Abrir currículo Lattes",
      empty: "Nenhum projeto encontrado.",
      skip: "Pular para o conteúdo",
      theme: "Alternar tema",
    },
    en: {
      cvText: "Resume maintained in LaTeX (altacv class), with synchronized versions in six languages: Portuguese, English, Spanish, French, Italian and Mandarin.",
      cvRepo: "Resume repository",
      lattesText: "Computer Engineering student at IFF (Bom Jesus do Itabapoana, RJ), Scientific Initiation scholar (PIBIC/CNPq), researching galactic archaeology, stellar populations and the structure of the Milky Way.",
      lattesOpen: "Open Lattes CV",
      empty: "No projects found.",
      skip: "Skip to content",
      theme: "Toggle theme",
    },
    es: {
      cvText: "Currículum mantenido en LaTeX (clase altacv), con versiones sincronizadas en seis idiomas: portugués, inglés, español, francés, italiano y mandarín.",
      cvRepo: "Repositorio del CV",
      lattesText: "Estudiante de Ingeniería Informática en el IFF (Bom Jesus do Itabapoana, RJ), becario de Iniciación Científica (PIBIC/CNPq), con investigación en arqueología galáctica, poblaciones estelares y estructura de la Vía Láctea.",
      lattesOpen: "Abrir currículum Lattes",
      empty: "Ningún proyecto encontrado.",
      skip: "Saltar al contenido",
      theme: "Cambiar tema",
    },
    fr: {
      cvText: "CV maintenu en LaTeX (classe altacv), avec des versions synchronisées en six langues : portugais, anglais, espagnol, français, italien et mandarin.",
      cvRepo: "Dépôt du CV",
      lattesText: "Étudiant en génie informatique à l'IFF (Bom Jesus do Itabapoana, RJ), boursier d'Initiation Scientifique (PIBIC/CNPq), avec des recherches en archéologie galactique, populations stellaires et structure de la Voie lactée.",
      lattesOpen: "Ouvrir le CV Lattes",
      empty: "Aucun projet trouvé.",
      skip: "Aller au contenu",
      theme: "Changer de thème",
    },
    it: {
      cvText: "Curriculum mantenuto in LaTeX (classe altacv), con versioni sincronizzate in sei lingue: portoghese, inglese, spagnolo, francese, italiano e mandarino.",
      cvRepo: "Repository del CV",
      lattesText: "Studente di Ingegneria Informatica all'IFF (Bom Jesus do Itabapoana, RJ), borsista di Iniziazione Scientifica (PIBIC/CNPq), con ricerca in archeologia galattica, popolazioni stellari e struttura della Via Lattea.",
      lattesOpen: "Apri il curriculum Lattes",
      empty: "Nessun progetto trovato.",
      skip: "Vai al contenuto",
      theme: "Cambia tema",
    },
    zh: {
      cvText: "简历使用 LaTeX（altacv 类）维护，提供六种语言的同步版本：葡萄牙语、英语、西班牙语、法语、意大利语和中文。",
      cvRepo: "简历仓库",
      lattesText: "巴西弗卢米嫩塞联邦学院（IFF，里约州 Bom Jesus do Itabapoana）计算机工程专业学生，科研启蒙计划（PIBIC/CNPq）奖学金获得者，研究方向为银河考古学、恒星星族与银河系结构。",
      lattesOpen: "打开 Lattes 简历",
      empty: "未找到项目。",
      skip: "跳到内容",
      theme: "切换主题",
    },
  };

  const UI_MORE = {
    pt: {
      cvDownload: "Baixar CV", footTag: "— computação e astrofísica, feito com", footAnd: "e", footBy: "por", toTop: "Voltar ao topo ↑", icoCafe: "café", icoCodigo: "código", icoCometa: "cometas", updated: "Atualizado em", menu: "Menu",
      nav: "Eventos", alemTitle: "Participação em eventos", alemLead: "Feiras, congressos e visitas técnicas em que apresentei trabalhos ou aprendi algo, com fotos de cada um.",
      nickname: "Apelido", base: "Base", baseText: "Bom Jesus do Itabapoana, RJ", photos: "fotos", report: "Ler relato", noPhotos: "Relato sem fotos", prev: "Anterior", next: "Próxima",
      reader: "Modo leitura", readerExit: "Sair do modo leitura", sideCollapse: "Recolher barra lateral", sideExpand: "Expandir barra lateral", cvAcad: "Acadêmico", cvProf: "Profissional", cvLangsTitle: "Currículo em 6 idiomas (PDF)",
      tour: "Ver tour", live: "Explorar ao vivo", openNew: "Abrir em nova aba", close: "Fechar",
      stats: ["repositórios", "projetos de iniciação científica", "participações na IAAC (2024 e 2025)", "disciplinas mapeadas no Sistema Acadêmico"],
      spectrumHint: "Arraste para percorrer o espectro de uma estrela e encontrar as linhas de absorção que uso no GALAH DR4.",
      continuum: "contínuo estelar", el: { h: "hidrogênio (Balmer)", ca2: "cálcio ionizado", mg: "magnésio neutro", fe: "ferro neutro", na: "sódio neutro" },
      sliderLabel: "Comprimento de onda em ångströms",
    },
    en: {
      cvDownload: "Download CV", footTag: "— computing and astrophysics, made with", footAnd: "and", footBy: "by", toTop: "Back to top ↑", icoCafe: "coffee", icoCodigo: "code", icoCometa: "comets", updated: "Updated on", menu: "Menu",
      nav: "Events", alemTitle: "Events", alemLead: "Fairs, conferences and technical visits where I presented work or learned something, with photos of each.",
      nickname: "Nickname", base: "Based in", baseText: "Bom Jesus do Itabapoana, RJ, Brazil", photos: "photos", report: "Read the story", noPhotos: "Story without photos", prev: "Previous", next: "Next",
      reader: "Reading mode", readerExit: "Exit reading mode", sideCollapse: "Collapse sidebar", sideExpand: "Expand sidebar", cvAcad: "Academic", cvProf: "Professional", cvLangsTitle: "Resume in 6 languages (PDF)",
      tour: "Watch tour", live: "Explore live", openNew: "Open in new tab", close: "Close",
      stats: ["repositories", "scientific initiation projects", "IAAC participations (2024 and 2025)", "courses mapped in the Academic System"],
      spectrumHint: "Drag to sweep a star's spectrum and find the absorption lines I work with in GALAH DR4.",
      continuum: "stellar continuum", el: { h: "hydrogen (Balmer)", ca2: "ionized calcium", mg: "neutral magnesium", fe: "neutral iron", na: "neutral sodium" },
      sliderLabel: "Wavelength in ångströms",
    },
    es: {
      cvDownload: "Descargar CV", footTag: "— computación y astrofísica, hecho con", footAnd: "y", footBy: "por", toTop: "Volver arriba ↑", icoCafe: "café", icoCodigo: "código", icoCometa: "cometas", updated: "Actualizado el", menu: "Menú",
      nav: "Eventos", alemTitle: "Participación en eventos", alemLead: "Ferias, congresos y visitas técnicas en las que presenté trabajos o aprendí algo, con fotos de cada uno.",
      nickname: "Apodo", base: "Base", baseText: "Bom Jesus do Itabapoana, RJ, Brasil", photos: "fotos", report: "Leer el relato", noPhotos: "Relato sin fotos", prev: "Anterior", next: "Siguiente",
      reader: "Modo lectura", readerExit: "Salir del modo lectura", sideCollapse: "Contraer barra lateral", sideExpand: "Expandir barra lateral", cvAcad: "Académico", cvProf: "Profesional", cvLangsTitle: "Currículum en 6 idiomas (PDF)",
      tour: "Ver recorrido", live: "Explorar en vivo", openNew: "Abrir en nueva pestaña", close: "Cerrar",
      stats: ["repositorios", "proyectos de iniciación científica", "participaciones en la IAAC (2024 y 2025)", "asignaturas mapeadas en el Sistema Académico"],
      spectrumHint: "Arrastra para recorrer el espectro de una estrella y encontrar las líneas de absorción que uso en GALAH DR4.",
      continuum: "continuo estelar", el: { h: "hidrógeno (Balmer)", ca2: "calcio ionizado", mg: "magnesio neutro", fe: "hierro neutro", na: "sodio neutro" },
      sliderLabel: "Longitud de onda en ångströms",
    },
    fr: {
      cvDownload: "Télécharger le CV", footTag: "— informatique et astrophysique, fait avec", footAnd: "et", footBy: "par", toTop: "Retour en haut ↑", icoCafe: "café", icoCodigo: "code", icoCometa: "comètes", updated: "Mis à jour le", menu: "Menu",
      nav: "Événements", alemTitle: "Participation à des événements", alemLead: "Salons, congrès et visites techniques où j'ai présenté des travaux ou appris quelque chose, avec les photos de chacun.",
      nickname: "Surnom", base: "Basé à", baseText: "Bom Jesus do Itabapoana, RJ, Brésil", photos: "photos", report: "Lire le récit", noPhotos: "Récit sans photos", prev: "Précédente", next: "Suivante",
      reader: "Mode lecture", readerExit: "Quitter le mode lecture", sideCollapse: "Réduire la barre latérale", sideExpand: "Développer la barre latérale", cvAcad: "Académique", cvProf: "Professionnel", cvLangsTitle: "CV en 6 langues (PDF)",
      tour: "Voir la visite", live: "Explorer en direct", openNew: "Ouvrir dans un nouvel onglet", close: "Fermer",
      stats: ["dépôts", "projets d'initiation scientifique", "participations à l'IAAC (2024 et 2025)", "matières cartographiées dans le Système Académique"],
      spectrumHint: "Faites glisser pour parcourir le spectre d'une étoile et trouver les raies d'absorption que j'utilise dans GALAH DR4.",
      continuum: "continuum stellaire", el: { h: "hydrogène (Balmer)", ca2: "calcium ionisé", mg: "magnésium neutre", fe: "fer neutre", na: "sodium neutre" },
      sliderLabel: "Longueur d'onde en ångströms",
    },
    it: {
      cvDownload: "Scarica il CV", footTag: "— informatica e astrofisica, fatto con", footAnd: "e", footBy: "da", toTop: "Torna su ↑", icoCafe: "caffè", icoCodigo: "codice", icoCometa: "comete", updated: "Aggiornato il", menu: "Menu",
      nav: "Eventi", alemTitle: "Partecipazione a eventi", alemLead: "Fiere, congressi e visite tecniche in cui ho presentato lavori o imparato qualcosa, con le foto di ciascuno.",
      nickname: "Soprannome", base: "Sede", baseText: "Bom Jesus do Itabapoana, RJ, Brasile", photos: "foto", report: "Leggi il resoconto", noPhotos: "Resoconto senza foto", prev: "Precedente", next: "Successiva",
      reader: "Modalità lettura", readerExit: "Esci dalla modalità lettura", sideCollapse: "Comprimi barra laterale", sideExpand: "Espandi barra laterale", cvAcad: "Accademico", cvProf: "Professionale", cvLangsTitle: "Curriculum in 6 lingue (PDF)",
      tour: "Guarda il tour", live: "Esplora dal vivo", openNew: "Apri in una nuova scheda", close: "Chiudi",
      stats: ["repository", "progetti di iniziazione scientifica", "partecipazioni all'IAAC (2024 e 2025)", "materie mappate nel Sistema Accademico"],
      spectrumHint: "Trascina per percorrere lo spettro di una stella e trovare le righe di assorbimento che uso in GALAH DR4.",
      continuum: "continuo stellare", el: { h: "idrogeno (Balmer)", ca2: "calcio ionizzato", mg: "magnesio neutro", fe: "ferro neutro", na: "sodio neutro" },
      sliderLabel: "Lunghezza d'onda in ångström",
    },
    zh: {
      cvDownload: "下载简历", footTag: "— 计算机与天体物理，用", footAnd: "和", footBy: "制作，作者", toTop: "回到顶部 ↑", icoCafe: "咖啡", icoCodigo: "代码", icoCometa: "彗星", updated: "更新于", menu: "菜单",
      nav: "活动", alemTitle: "参加的活动", alemLead: "我展示作品或学习的展会、会议和技术参观，每项都附有照片。",
      nickname: "昵称", base: "所在地", baseText: "巴西里约州 Bom Jesus do Itabapoana", photos: "张照片", report: "阅读记录", noPhotos: "无照片记录", prev: "上一张", next: "下一张",
      reader: "阅读模式", readerExit: "退出阅读模式", sideCollapse: "收起侧栏", sideExpand: "展开侧栏", cvAcad: "学术版", cvProf: "职业版", cvLangsTitle: "六种语言的简历（PDF）",
      tour: "观看演示", live: "在线体验", openNew: "在新标签页打开", close: "关闭",
      stats: ["个仓库", "个科研启蒙项目", "次参加 IAAC（2024 与 2025）", "门课程已录入学术系统"],
      spectrumHint: "拖动滑块浏览恒星光谱，找到我在 GALAH DR4 中使用的吸收线。",
      continuum: "恒星连续谱", el: { h: "氢（巴尔末系）", ca2: "电离钙", mg: "中性镁", fe: "中性铁", na: "中性钠" },
      sliderLabel: "波长（埃）",
    },
  };
  // v2.5: tour em zoom, busca e prévia do CV
  const UI_QR = {
    pt: { qrKicker: "SAB 2026 · Natal, RN · 25/10 a 30/10/2026", qrTitle: "Veio pelo QR code do banner? Comece por aqui.", qrSab: "SAB 2026: o evento e o que apresentei", qrSabSub: "O evento e o meu pôster", qrPesq: "Pesquisa: detecção de anomalias", qrPesqSub: "A pesquisa por trás do pôster, 2025 a 2026", qrPainel: "Painel interativo do mapa t-SNE", qrPainelSub: "Deixe seu nome na lista de quem passou pelo pôster", qrSobre: "Sobre mim", qrSobreSub: "Quem sou e o que faço", qrJardim: "Jardim digital", qrJardimSub: "Notas, projetos e eventos no site completo", qrNote: "O painel interativo é temporário e será desativado após a SAB. Dúvidas: pedroiff0@gmail.com." },
    en: { qrKicker: "SAB 2026 · Natal, Brazil · Oct 25-30, 2026", qrTitle: "Came from the poster QR code? Start here.", qrSab: "SAB 2026: the event and my poster", qrSabSub: "The event and what I presented", qrPesq: "Research: anomaly detection", qrPesqSub: "The research behind the poster, 2025-2026", qrPainel: "Interactive t-SNE map", qrPainelSub: "Leave your name on the poster visitors list", qrSobre: "About me", qrSobreSub: "Who I am and what I do", qrJardim: "Digital garden", qrJardimSub: "Notes, projects and events on the full site", qrNote: "The interactive panel is temporary and will be shut down after SAB. Questions: pedroiff0@gmail.com." },
    es: { qrKicker: "SAB 2026 · Natal, Brasil · 25 a 30/10/2026", qrTitle: "¿Llegaste por el código QR del póster? Empieza aquí.", qrSab: "SAB 2026: el evento y mi póster", qrSabSub: "El evento y lo que presenté", qrPesq: "Investigación: detección de anomalías", qrPesqSub: "La investigación detrás del póster, 2025-2026", qrPainel: "Panel interactivo del mapa t-SNE", qrPainelSub: "Deja tu nombre en la lista de visitantes del póster", qrSobre: "Sobre mí", qrSobreSub: "Quién soy y qué hago", qrJardim: "Jardín digital", qrJardimSub: "Notas, proyectos y eventos en el sitio completo", qrNote: "El panel interactivo es temporal y se desactivará después de la SAB. Dudas: pedroiff0@gmail.com." },
    fr: { qrKicker: "SAB 2026 · Natal, Brésil · 25 au 30/10/2026", qrTitle: "Vous venez du QR code du poster ? Commencez ici.", qrSab: "SAB 2026 : l'événement et mon poster", qrSabSub: "L'événement et ce que j'ai présenté", qrPesq: "Recherche : détection d'anomalies", qrPesqSub: "La recherche derrière le poster, 2025-2026", qrPainel: "Panneau interactif de la carte t-SNE", qrPainelSub: "Laissez votre nom sur la liste des visiteurs du poster", qrSobre: "À propos de moi", qrSobreSub: "Qui je suis et ce que je fais", qrJardim: "Jardin numérique", qrJardimSub: "Notes, projets et événements sur le site complet", qrNote: "Le panneau interactif est temporaire et sera désactivé après la SAB. Questions : pedroiff0@gmail.com." },
    it: { qrKicker: "SAB 2026 · Natal, Brasile · 25-30/10/2026", qrTitle: "Vieni dal QR code del poster? Parti da qui.", qrSab: "SAB 2026: l'evento e il mio poster", qrSabSub: "L'evento e cio che ho presentato", qrPesq: "Ricerca: rilevamento di anomalie", qrPesqSub: "La ricerca dietro il poster, 2025-2026", qrPainel: "Pannello interattivo della mappa t-SNE", qrPainelSub: "Lascia il tuo nome nella lista dei visitatori del poster", qrSobre: "Chi sono", qrSobreSub: "Chi sono e cosa faccio", qrJardim: "Giardino digitale", qrJardimSub: "Note, progetti ed eventi nel sito completo", qrNote: "Il pannello interattivo e temporaneo e sara disattivato dopo la SAB. Domande: pedroiff0@gmail.com." },
    zh: { qrKicker: "SAB 2026 · 巴西纳塔尔 · 2026年10月25日至30日", qrTitle: "从海报二维码来的？从这里开始。", qrSab: "SAB 2026：会议与我的海报", qrSabSub: "会议以及我展示的内容", qrPesq: "研究：异常检测", qrPesqSub: "海报背后的研究，2025-2026", qrPainel: "t-SNE 交互式地图", qrPainelSub: "在海报访客名单上留下你的名字", qrSobre: "关于我", qrSobreSub: "我是谁，我做什么", qrJardim: "数字花园", qrJardimSub: "完整网站上的笔记、项目和活动", qrNote: "交互式面板是临时的，SAB 之后将关闭。问题请联系：pedroiff0@gmail.com。" },
  };

  const UI_V25 = {
    pt: { play: "Reproduzir", pause: "Pausar", fullscreen: "Tela cheia", repo: "Repositório", seek: "Posição do vídeo", search: "Buscar", searchPh: "Buscar projetos, pesquisa, eventos… (# para tags)", searchEmpty: "Nada encontrado para", kinds: { projeto: "Projeto", pesquisa: "Pesquisa", bolsa: "Bolsa", evento: "Evento", secao: "Seção" }, cvPreview: "Prévia no idioma da página", status: { dev: "em desenvolvimento", ext: "extensão", camp: "campanha", beta: "em beta", ajustes: "precisa de ajustes" }, cvOpen: "Abrir PDF" },
    en: { play: "Play", pause: "Pause", fullscreen: "Full screen", repo: "Repository", seek: "Video position", search: "Search", searchPh: "Search projects, research, events… (# for tags)", searchEmpty: "Nothing found for", kinds: { projeto: "Project", pesquisa: "Research", bolsa: "Grant", evento: "Event", secao: "Section" }, cvPreview: "Preview in the page language", status: { dev: "in development", ext: "outreach project", camp: "campaign", beta: "beta", ajustes: "needs adjustments" }, cvOpen: "Open PDF" },
    es: { play: "Reproducir", pause: "Pausar", fullscreen: "Pantalla completa", repo: "Repositorio", seek: "Posición del video", search: "Buscar", searchPh: "Buscar proyectos, investigación, eventos… (# para etiquetas)", searchEmpty: "Nada encontrado para", kinds: { projeto: "Proyecto", pesquisa: "Investigación", bolsa: "Beca", evento: "Evento", secao: "Sección" }, cvPreview: "Vista previa en el idioma de la página", status: { dev: "en desarrollo", ext: "proyecto de extensión", camp: "campaña", beta: "en beta", ajustes: "necesita ajustes" }, cvOpen: "Abrir PDF" },
    fr: { play: "Lire", pause: "Pause", fullscreen: "Plein écran", repo: "Dépôt", seek: "Position de la vidéo", search: "Rechercher", searchPh: "Rechercher projets, recherche, événements… (# pour les tags)", searchEmpty: "Aucun résultat pour", kinds: { projeto: "Projet", pesquisa: "Recherche", bolsa: "Bourse", evento: "Événement", secao: "Section" }, cvPreview: "Aperçu dans la langue de la page", status: { dev: "en développement", ext: "projet d'extension", camp: "campagne", beta: "en bêta", ajustes: "ajustements à faire" }, cvOpen: "Ouvrir le PDF" },
    it: { play: "Riproduci", pause: "Pausa", fullscreen: "Schermo intero", repo: "Repository", seek: "Posizione del video", search: "Cerca", searchPh: "Cerca progetti, ricerca, eventi… (# per i tag)", searchEmpty: "Nessun risultato per", kinds: { projeto: "Progetto", pesquisa: "Ricerca", bolsa: "Borsa", evento: "Evento", secao: "Sezione" }, cvPreview: "Anteprima nella lingua della pagina", status: { dev: "in sviluppo", ext: "progetto di estensione", camp: "campagna", beta: "in beta", ajustes: "da sistemare" }, cvOpen: "Apri il PDF" },
    zh: { play: "播放", pause: "暂停", fullscreen: "全屏", repo: "仓库", seek: "视频进度", search: "搜索", searchPh: "搜索项目、研究、活动…（# 搜索标签）", searchEmpty: "未找到", kinds: { projeto: "项目", pesquisa: "研究", bolsa: "资助", evento: "活动", secao: "栏目" }, cvPreview: "页面语言的预览", status: { dev: "开发中", ext: "推广项目", camp: "倡议", beta: "测试版", ajustes: "待完善" }, cvOpen: "打开 PDF" },
  };
  for (const l of LANGS) Object.assign(UI[l], UI_MORE[l], UI_V25[l], UI_QR[l]);

  // Textos editados na nota do vault (## Interface) sobrescrevem os padrões acima e o I18N do interface.yaml.
  function deepSet(obj, path, val) {
    const ks = path.split("."); let o = obj;
    for (let i = 0; i < ks.length - 1; i++) { if (o[ks[i]] == null || typeof o[ks[i]] !== "object") o[ks[i]] = /^\d+$/.test(ks[i + 1]) ? [] : {}; o = o[ks[i]]; }
    o[ks[ks.length - 1]] = val;
  }
  const OV = D.OVERRIDES || {};
  for (const l of LANGS) {
    for (const [p, v] of Object.entries((OV.ui || {})[l] || {})) deepSet(UI[l], p, v);
    for (const [p, v] of Object.entries((OV.i || {})[l] || {})) deepSet(D.I18N[l] || (D.I18N[l] = {}), p, v);
  }

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* sem storage */ } },
  };

  const EMOJI = /[\p{Extended_Pictographic}\u{1F1E6}-\u{1F1FF}️‍]/gu;
  const noEmoji = (s) => String(s || "").replace(EMOJI, "").replace(/\s{2,}/g, " ").trim();
  const noArrow = (s) => noEmoji(s).replace(/^[↗→]\s*/, "");

  function el(tag, attrs, ...kids) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === "html") n.innerHTML = v;
      else if (k === "text") n.textContent = v;
      else n.setAttribute(k, v);
    }
    for (const c of kids.flat()) if (c != null) n.append(c);
    return n;
  }

  let lang = pickLang();
  let cat = "all";
  let query = "";
  let statsDone = false;
  let spectrum = null;

  function pickLang() {
    const saved = store.get("lang");
    if (LANGS.includes(saved)) return saved;
    for (const l of navigator.languages || [navigator.language || "pt"]) {
      const c = String(l).slice(0, 2).toLowerCase();
      if (LANGS.includes(c)) return c;
    }
    return "pt";
  }

  const T = () => D.I18N[lang] || D.I18N.pt;
  const tr = (item, field) => {
    if (lang === "pt" || !item.i18n || !item.i18n[lang]) return item[field];
    const v = item.i18n[lang];
    if (typeof v === "string") return field === "brief" || field === "summary" || field === "details" ? v : item[field];
    return v[field] || ((field === "summary" || field === "details") && v.brief) || item[field];
  };

  function visLabel(v) { return (T().vis || {})[v] || v; }

  function projectCard(p) {
    const L = T().labels || {};
    const brief = tr(p, "brief"), resumo = tr(p, "resumo") || brief;
    const tags = el("div", { class: "tags" }, (p.tags || []).slice(0, 4).map((t) => el("span", { class: "tag", text: t })));
    const more = el("details", {},
      el("summary", { text: L.details || "Detalhes" }),
      resumo !== brief ? el("p", { text: brief }) : null,
      el("p", { class: "mono", text: (p.stack || []).join(" · ") }),
      p.repo && p.visibility === "público"
        ? el("a", { href: p.repo, target: "_blank", rel: "noopener", text: noArrow(L.viewRepo || "GitHub") })
        : el("p", { class: "card__meta", text: L.noRepo || "" }));
    return el("article", { class: "card", "data-cat": p.cat, "data-vis": p.visibility, "data-sid": `p:${p.name}` },
      mediaFigure(p),
      el("div", { class: "card__head" }, el("h3", { text: p.name }),
        p.status ? el("span", { class: `badge badge--${p.status}`, text: UI[lang].status[p.status] || p.status }) : null,
        el("span", { class: "card__meta", text: visLabel(p.visibility) })),
      el("p", { class: "clamp", text: resumo }),
      tags, mediaActions(p), more);
  }

  function mediaFigure(p) {
    if (!p.image) return null;
    const img = el("img", { src: p.image, alt: p.name, loading: "lazy", decoding: "async", width: "640", height: "400" });
    if (!p.video) return el("figure", { class: "card__media" }, img);
    const b = el("button", { type: "button", class: "card__play", "aria-label": `${UI[lang].tour}: ${p.name}` }, img,
      el("span", { class: "card__play-ico", "aria-hidden": "true" }, icon("play")));
    b.addEventListener("click", () => openTour(p));
    return el("figure", { class: "card__media" }, b);
  }

  function mediaActions(p) {
    const U = UI[lang];
    const btns = [];
    if (p.video) {
      const b = el("button", { type: "button", class: "btn btn--sm", text: U.tour });
      b.addEventListener("click", () => openTour(p));
      btns.push(b);
    }
    if (p.live) {
      const b = el("button", { type: "button", class: "btn btn--sm btn--primary", "data-live": p.name, text: U.live });
      b.addEventListener("click", () => openLive(p));
      btns.push(b);
    }
    if (p.open && !p.live) btns.push(el("a", { class: "btn btn--sm", href: p.open, target: "_blank", rel: "noopener", text: U.openNew }));
    return btns.length ? el("div", { class: "card__actions" }, btns) : null;
  }

  // Tour em zoom: diálogo com o vídeo grande e painel mínimo (play, progresso, tempo, tela cheia, links, fechar).
  const fmtT = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  function openTour(p) {
    const U = UI[lang], dlg = $("#tour"), v = $("#tour-video");
    $("#tour-title").textContent = p.name;
    v.poster = p.image || "";
    v.src = p.video;
    v.muted = true;
    v.setAttribute("aria-label", `${U.tour}: ${p.name}`);
    const link = (q, href, text) => { const a = $(q); a.hidden = !href; if (href) { a.href = href; a.textContent = text; } };
    link("#tour-open", p.open || p.live, U.openNew);
    link("#tour-repo", p.repo && p.visibility === "público" ? p.repo : "", U.repo);
    $("#tour-close").setAttribute("aria-label", U.close);
    $("#tour-fs").setAttribute("aria-label", U.fullscreen);
    $("#tour-seek").setAttribute("aria-label", U.seek);
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    v.play().catch(() => {});
    if (window.Conquistas) window.Conquistas.hit("tour");
  }
  function tourSync() {
    const v = $("#tour-video"), U = UI[lang];
    const d = v.duration || 0;
    $("#tour-seek").value = d ? String(Math.round((v.currentTime / d) * 1000)) : "0";
    $("#tour-seek").style.setProperty("--p", d ? `${(v.currentTime / d) * 100}%` : "0%");
    $("#tour-time").textContent = `${fmtT(v.currentTime || 0)} / ${fmtT(d)}`;
    const play = $("#tour-play");
    play.setAttribute("aria-label", v.paused ? U.play : U.pause);
    play.querySelector("use").setAttribute("href", `assets/icons.svg#${v.paused ? "play" : "pause"}`);
  }

  function openLive(p) {
    const U = UI[lang];
    const dlg = $("#live");
    $("#live-title").textContent = p.name;
    const open = $("#live-open");
    open.href = p.open || p.live;
    open.textContent = U.openNew;
    $("#live-close").setAttribute("aria-label", U.close);
    $("#live-frame").replaceChildren(el("iframe", {
      src: p.live, title: `${p.name} (${U.live})`, loading: "eager",
      sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-downloads",
      referrerpolicy: "no-referrer", allow: "fullscreen",
    }));
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    if (window.Conquistas) window.Conquistas.hit("live");
  }

  function closeLive() {
    const dlg = $("#live");
    $("#live-frame").replaceChildren();
    if (dlg.open) dlg.close ? dlg.close() : dlg.removeAttribute("open");
  }

  function renderQr() {
    const U = UI[lang];
    const en = ["en", "it", "zh"].includes(lang), q = en ? "en" : "pt-br", own = ["es", "fr"].includes(lang) ? lang : q;
    const B = "https://www.phrandrade.com";
    const items = [
      [`${B}/${q}/media/2026/sab/`, U.qrSab, U.qrSabSub, true],
      [`${B}/${q}/research/deteccao-de-anomalias-iff-2025`, U.qrPesq, U.qrPesqSub],
      ["https://anomaly.phrandrade.com", U.qrPainel, U.qrPainelSub],
      [`${B}/${own}/about-me/`, U.qrSobre, U.qrSobreSub],
      [`${B}/${q}/`, U.qrJardim, U.qrJardimSub],
    ];
    $("#qr-links").replaceChildren(...items.map(([href, t, sub, primary]) =>
      el("a", { class: "qr__card" + (primary ? " is-primary" : ""), href, target: "_blank", rel: "noopener" },
        el("strong", { text: t }), el("small", { text: sub }))));
    $("#qr-note").textContent = U.qrNote;
    $("#qr-close").setAttribute("aria-label", U.close);
  }

  function applyLayout() {
    const main = document.querySelector("main.content");
    ALL_SECTIONS.forEach((id) => { const s = document.getElementById(id); if (s) s.hidden = !SECTIONS.includes(id); });
    SECTIONS.forEach((id) => { const s = document.getElementById(id); if (s) main.appendChild(s); });
  }

  function renderHero() {
    const h = T().hero || {};
    $("#hero-eyebrow").textContent = h.eyebrow || "";
    $("#hero-name").textContent = D.FULL_NAME;
    $("#hero-sub").textContent = h.sub || "";
    $("#hero-badges").replaceChildren(...(h.badges || []).map((b) => el("li", { text: noEmoji(b) })));
  }

  function renderSections() {
    const nav = T().nav || [];
    const S = T().sections || {};
    const navLinks = () => NAV.map((id) => el("a", { href: "#" + id, text: id in NAV_I18N ? (nav[NAV_I18N[id]] || id) : UI[lang].nav }));
    $("#nav").replaceChildren(...navLinks());
    $("#nav-mobile").replaceChildren(...navLinks());
    $$("[data-sec]").forEach((n) => { n.textContent = noEmoji(S[n.dataset.sec]?.title || ""); });
    $$("[data-lead]").forEach((n) => { n.textContent = noEmoji(S[n.dataset.lead]?.lead || ""); });
    const about = T().about || D.I18N.pt.about || [];
    $("#about").replaceChildren(...[].concat(about).map((p) => el("p", { html: p })));
  }

  function renderFeatured() {
    $("#featured").replaceChildren(...D.FEATURED.map(projectCard));
  }

  function renderTabs() {
    const C = T().cat || {};
    const cats = ["all", ...new Set(D.REPOS.map((r) => r.cat))];
    $("#cat-tabs").replaceChildren(...cats.map((c) => {
      const n = D.REPOS.filter((r) => c === "all" || r.cat === c).length;
      const b = el("button", { type: "button", role: "tab", "aria-selected": String(c === cat), text: `${C[c] || c} (${n})` });
      b.addEventListener("click", () => { cat = c; renderTabs(); renderRepos(); });
      return b;
    }));
    const s = $("#search");
    s.placeholder = C.searchPlaceholder || "";
    s.setAttribute("aria-label", C.searchAria || "Buscar");
  }

  function renderRepos() {
    const q = query.toLowerCase();
    const list = D.REPOS.filter((r) => (cat === "all" || r.cat === cat) &&
      (!q || [r.name, tr(r, "brief"), ...(r.stack || []), ...(r.tags || [])].join(" ").toLowerCase().includes(q)));
    $("#repos").replaceChildren(...list.map(projectCard));
    const empty = $("#repos-empty");
    empty.hidden = list.length > 0;
    empty.textContent = UI[lang].empty;
  }

  function renderResearch() {
    const L = T().labels || {};
    $("#research").replaceChildren(...D.RESEARCH.map((r, i) => {
      const url = ((r.details || "").match(/https?:\/\/\S+/) || [])[0];
      const resumo = tr(r, "resumo"), full = tr(r, "summary");
      const more = resumo && resumo !== full ? el("details", {}, el("summary", { text: L.details || "Detalhes" }), el("p", { text: full })) : null;
      return el("article", { class: "card", "data-sid": `r:${i}` },
        mediaFigure(r),
        el("div", { class: "card__head" }, el("h3", { text: r.title }),
          r.status ? el("span", { class: `badge badge--${r.status}`, text: UI[lang].status[r.status] || r.status }) : null,
          el("span", { class: "card__meta", text: r.badge })),
        el("p", { text: resumo || full }),
        mediaActions(r),
        more,
        url && r.badge !== "Privado" ? el("a", { href: url, target: "_blank", rel: "noopener", text: noArrow(L.viewRepo || "GitHub") }) : null);
    }));
  }

  function renderGrants() {
    const B = T().bolsas || {};
    $("#grants").replaceChildren(...D.BOLSAS.map((b, i) => el("li", { "data-sid": `b:${i}` },
      el("span", { class: "when", text: `${b.period} · ${tr(b, "kind")}` }),
      el("h3", { text: tr(b, "title") }),
      el("p", { text: tr(b, "desc") }),
      el("p", { class: "card__meta", text: `${B.orientLabel || "Orientação"}: ${b.orient}` }))));
  }

  function renderContacts() {
    const CL = T().contactLabels || {};
    $("#contacts").replaceChildren(...D.CONTACTS.map((c) => {
      const body = [icon(c.icon), el("span", { class: "contact__txt" }, el("small", { text: CL[c.labelKey] || c.labelKey }), el("span", { text: c.value }))];
      return c.href
        ? el("a", { class: "contact", href: c.href, target: c.href.startsWith("mailto:") ? null : "_blank", rel: "noopener" }, body)
        : el("div", { class: "contact" }, body);
    }));
  }

  function renderStats() {
    const U = UI[lang];
    const disc = Number((String(D.EXTRA?.grade || "").match(/\d+/) || [0])[0]);
    const vals = [D.REPOS.filter((r) => r.repo).length, D.BOLSAS.length, 2, disc];
    $("#stats").replaceChildren(...vals.map((v, i) => el("li", {},
      el("strong", { class: "stat__n", "data-to": String(v), text: statsDone ? String(v) : "0" }),
      el("span", { text: U.stats[i] }))));
    if (statsDone) return;
    const run = () => {
      statsDone = true;
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      $$(".stat__n").forEach((n) => {
        const to = Number(n.dataset.to);
        if (reduce) { n.textContent = String(to); return; }
        const t0 = performance.now();
        const step = (t) => { const k = Math.min(1, (t - t0) / 900); n.textContent = String(Math.round(to * (1 - Math.pow(1 - k, 3)))); if (k < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
      });
    };
    if (!("IntersectionObserver" in window)) return run();
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { io.disconnect(); run(); } });
    io.observe($("#stats"));
  }

  const extra = (k) => (lang !== "pt" && D.EXTRA?.i18n?.[lang]?.[k]) || D.EXTRA?.[k] || "";
  const icon = (id) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "ico"); svg.setAttribute("aria-hidden", "true");
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", `assets/icons.svg#${id}`);
    svg.append(use);
    return svg;
  };
  const socials = () => D.CONTACTS.filter((c) => c.href);

  let lb = { ev: null, i: 0 };
  function renderEvents() {
    const U = UI[lang];
    const anos = [...new Set((D.EVENTS || []).map((e) => e.year))];
    $("#events").replaceChildren(...anos.map((ano) => el("li", { class: "events__year" },
      el("span", { class: "events__label", text: String(ano) }),
      el("div", { class: "events__list" }, (D.EVENTS || []).filter((e) => e.year === ano).map((ev) => {
        const thumbs = ev.photos.slice(0, 6).map((ph, i) => {
          const b = el("button", { type: "button", class: "events__thumb", "aria-label": `${ev.title} ${i + 1}/${ev.photos.length}` },
            el("img", { src: `${ph}-t.webp`, alt: "", loading: "lazy", decoding: "async" }));
          if (i === 5 && ev.photos.length > 6) b.append(el("span", { class: "events__more", text: `+${ev.photos.length - 6}` }));
          b.addEventListener("click", () => openLightbox(ev, i));
          return b;
        });
        return el("article", { class: "event", "data-sid": `e:${ev.id}` },
          el("div", { class: "event__head" },
            el("h3", { text: ev.title }),
            el("span", { class: "card__meta" }, icon("camera"), ev.photos.length ? ` ${ev.photos.length} ${U.photos}` : ` ${U.noPhotos}`)),
          thumbs.length ? el("div", { class: "event__thumbs" }, thumbs) : null,
          el("a", { class: "event__link", href: ev.url, target: "_blank", rel: "noopener", text: U.report }));
      })))));
  }

  function openLightbox(ev, i) {
    lb = { ev, i };
    showLightbox();
    const d = $("#lightbox");
    if (d.showModal && !d.open) d.showModal();
    if (window.Conquistas) window.Conquistas.hit("evento");
  }

  function showLightbox() {
    const { ev, i } = lb;
    if (!ev) return;
    $("#lb-img").src = `${ev.photos[i]}.webp`;
    $("#lb-img").alt = `${ev.title} ${i + 1}/${ev.photos.length}`;
    $("#lb-cap").textContent = `${ev.title} · ${ev.year} · ${i + 1}/${ev.photos.length}`;
    $("#lb-prev").setAttribute("aria-label", UI[lang].prev);
    $("#lb-next").setAttribute("aria-label", UI[lang].next);
  }

  function stepLightbox(d) {
    if (!lb.ev) return;
    lb.i = (lb.i + d + lb.ev.photos.length) % lb.ev.photos.length;
    showLightbox();
  }

  function renderCV() {
    const U = UI[lang];
    const row = (tipo, label) => el("div", { class: "cv-row" }, el("span", { class: "cv-row__label", text: label }),
      el("div", { class: "cv-row__langs" }, CV_LANGS.map(([l, nome]) => el("a", { class: "btn btn--sm", href: `${CV_BASE}/cv-${tipo}-${l}.pdf`, target: "_blank", rel: "noopener", title: nome, text: l.toUpperCase() }))));
    $("#cv-grid").replaceChildren(el("p", { class: "cv-grid__title", text: U.cvLangsTitle }), row("academico", U.cvAcad), row("profissional", U.cvProf));
    const prev = (tipo, label) => el("a", { class: "cv-prev", href: `${CV_BASE}/cv-${tipo}-${lang}.pdf`, target: "_blank", rel: "noopener", "data-cv": `${tipo}-${lang}` },
      el("img", { src: `assets/media/cv/${tipo}-${lang}-t.webp`, srcset: `assets/media/cv/${tipo}-${lang}-t.webp 360w, assets/media/cv/${tipo}-${lang}.webp 720w`, sizes: "(max-width: 640px) 90vw, 360px", width: "360", height: "509", loading: "lazy", alt: `${label} (${lang.toUpperCase()})` }),
      el("span", { class: "cv-prev__cap" }, el("strong", { text: label }), el("span", { text: `${U.cvOpen} · ${lang.toUpperCase()}` })));
    $("#cv-preview").replaceChildren(el("p", { class: "cv-grid__title", text: U.cvPreview }), el("div", { class: "cv-prev__row" }, prev("academico", U.cvAcad), prev("profissional", U.cvProf)));
  }

  function renderSidebar() {
    const CL = T().contactLabels || {};
    $("#side-name").textContent = D.FULL_NAME;
    $("#side-tagline").textContent = extra("tagline");
    $("#side-loc").textContent = D.EXTRA?.location || "";
    $("#side-links").replaceChildren(...socials().map((c) => el("li", {},
      el("a", { href: c.href, target: c.href.startsWith("mailto:") ? null : "_blank", rel: "noopener", "aria-label": CL[c.labelKey] || c.labelKey },
        icon(c.icon), el("span", { text: CL[c.labelKey] || c.labelKey })))));
    $("#side-cv").href = `${CV_BASE}/cv-academico-${lang}.pdf`;
    $("#side-nick").textContent = D.EXTRA?.nickname ? `${UI[lang].nickname}: ${D.EXTRA.nickname}` : "";
    $("#footer-social").replaceChildren(...socials().map((c) => el("li", {},
      el("a", { href: c.href, target: c.href.startsWith("mailto:") ? null : "_blank", rel: "noopener", "aria-label": CL[c.labelKey] || c.labelKey, title: CL[c.labelKey] || c.labelKey }, icon(c.icon)))));
    $("#menu summary").setAttribute("aria-label", UI[lang].menu);
  }

  function renderSpectrum() {
    const U = UI[lang];
    $("#spectrum-hint").textContent = U.spectrumHint;
    $("#spectrum-slider").setAttribute("aria-label", U.sliderLabel);
    if (spectrum) spectrum.setText({ continuum: U.continuum, el: U.el });
  }

  function renderStatic() {
    const U = UI[lang];
    $("#cv-text").textContent = U.cvText;
    $("#lattes-text").textContent = U.lattesText;
    $$("[data-ui]").forEach((n) => { n.textContent = U[n.dataset.ui]; });
    $(".skip").textContent = U.skip;
    $("#theme").setAttribute("aria-label", U.theme);
    $("#footer-name").textContent = `© ${new Date().getFullYear()}`;
    $("#footer-text").textContent = U.footTag;
    $("#footer-and").textContent = U.footAnd;
    $("#footer-by").textContent = U.footBy;
    $("#footer-author").textContent = D.FULL_NAME;
    $("#footer-top").textContent = U.toTop;
    [["#ico-cafe", U.icoCafe], ["#ico-codigo", U.icoCodigo], ["#ico-cometa", U.icoCometa]].forEach(([q, t]) => { $(q).title = t; $(q).setAttribute("aria-label", t); });
    if (D.UPDATED) {
      const [y, m, d] = D.UPDATED.split("-");
      $("#footer-updated").textContent = `${U.updated} ${d}/${m}/${y}`;
    }
  }

  // Documentos da busca, no idioma atual.
  function searchDocs() {
    const U = UI[lang], K = U.kinds, S = T().sections || {}, C = T().cat || {};
    const strip = (h) => { const d = document.createElement("div"); d.innerHTML = h; return d.textContent; };
    const docs = D.REPOS.map((p) => ({ sid: `p:${p.name}`, kind: "projeto", kindLabel: `${K.projeto} · ${C[p.cat] || p.cat}`, title: p.name,
      tags: [...(p.tags || []), ...(p.stack || [])], text: noEmoji(tr(p, "brief")) }));
    D.RESEARCH.forEach((r, i) => docs.push({ sid: `r:${i}`, kind: "pesquisa", kindLabel: K.pesquisa, title: r.title, tags: [r.badge].filter(Boolean), text: noEmoji(tr(r, "summary")) }));
    D.BOLSAS.forEach((b, i) => docs.push({ sid: `b:${i}`, kind: "bolsa", kindLabel: `${K.bolsa} · ${b.period}`, title: tr(b, "title"), tags: [tr(b, "kind"), b.orient].filter(Boolean), text: tr(b, "desc") }));
    (D.EVENTS || []).forEach((ev) => docs.push({ sid: `e:${ev.id}`, kind: "evento", kindLabel: `${K.evento} · ${ev.year}`, title: ev.title, tags: [String(ev.year)], text: `${ev.title} ${ev.year}` }));
    const about = [].concat(T().about || []).map(strip).join(" ");
    docs.push({ sid: "s:sobre", kind: "secao", kindLabel: K.secao, title: noEmoji(S.sobre?.title || "Sobre"), tags: [], text: about });
    docs.push({ sid: "s:curriculo", kind: "secao", kindLabel: K.secao, title: noEmoji(S.curriculo?.title || "CV"), tags: ["CV", "PDF"], text: U.cvText });
    docs.push({ sid: "s:lattes", kind: "secao", kindLabel: K.secao, title: noEmoji(S.lattes?.title || "Lattes"), tags: ["Lattes", "CNPq"], text: U.lattesText });
    docs.push({ sid: "s:eventos", kind: "secao", kindLabel: K.secao, title: U.alemTitle, tags: [], text: U.alemLead });
    return docs;
  }
  function goTo(d) {
    let target;
    if (d.kind === "secao") target = document.getElementById(d.sid.slice(2));
    else {
      if (d.kind === "projeto") {
        cat = "all"; query = ""; $("#search").value = "";
        renderTabs(); renderRepos();
        target = $(`#repos [data-sid="${CSS.escape(d.sid)}"]`);
      } else target = $(`[data-sid="${CSS.escape(d.sid)}"]`);
    }
    if (!target) return;
    target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: d.kind === "secao" ? "start" : "center" });
    const det = target.querySelector("details");
    if (det) det.open = true;
    target.classList.add("is-flash");
    setTimeout(() => target.classList.remove("is-flash"), 1600);
  }

  function render() {
    document.documentElement.lang = { pt: "pt-BR", en: "en", es: "es", fr: "fr", it: "it", zh: "zh-CN" }[lang];
    $$("#lang button, #lang-m button").forEach((b) => { const on = b.dataset.lang === lang; b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", String(on)); });
    if (window.Conquistas) window.Conquistas.setLang(lang);
    applyLayout();
    renderQr(); renderHero(); renderSections(); renderFeatured(); renderTabs(); renderRepos();
    renderResearch(); renderGrants(); renderContacts(); renderStatic();
    renderStats(); renderEvents(); renderCV(); renderSpectrum(); renderSidebar();
    $("#reader").setAttribute("aria-label", UI[lang].reader);
    $("#reader-exit").setAttribute("aria-label", UI[lang].readerExit);
    syncSideLabel();
    $("#search-label").textContent = UI[lang].search;
    $("#search-btn").setAttribute("aria-label", `${UI[lang].search} (Ctrl K)`);
    if (window.Busca) window.Busca.setDocs(searchDocs(), UI[lang]);
  }

  function initTheme() {
    $("#theme").addEventListener("click", () => {
      const root = document.documentElement;
      const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
      root.dataset.theme = dark ? "light" : "dark";
      store.set("theme", root.dataset.theme);
      if (window.Conquistas) window.Conquistas.hit("tema");
    });
  }

  const visited = new Set();
  function initSpy() {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        $$("#nav a").forEach((a) => a.setAttribute("aria-current", String(a.hash === "#" + e.target.id)));
        visited.add(e.target.id);
        if (visited.size === SECTIONS.length && window.Conquistas) window.Conquistas.hit("secoes");
      }
    }, { rootMargin: "-40% 0px -55% 0px" });
    SECTIONS.forEach((id) => { const s = document.getElementById(id); if (s) io.observe(s); });
  }

  $("#lang-m").replaceChildren(...[...$$("#lang button")].map((b) => b.cloneNode(true)));
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#lang, #lang-m")) return;
    const b = e.target.closest("button[data-lang]");
    if (!b || b.dataset.lang === lang) return;
    lang = b.dataset.lang; store.set("lang", lang); render();
    if (window.Conquistas) window.Conquistas.hit("idioma");
  });
  // Barra lateral: recolher e ajustar a largura (persistido); o conteúdo é a coluna 1fr e acompanha.
  const SIDE_MIN = 180, SIDE_MAX = 420, root = document.documentElement;
  const sideW = () => parseInt(getComputedStyle(root).getPropertyValue("--side-w")) || $(".sidebar").getBoundingClientRect().width;
  function setSideW(w, save) {
    w = Math.max(SIDE_MIN, Math.min(SIDE_MAX, Math.round(w)));
    root.style.setProperty("--side-w", w + "px");
    $("#side-resize").setAttribute("aria-valuenow", String(w));
    if (save) store.set("side-w", String(w));
  }
  function syncSideLabel() {
    const col = root.hasAttribute("side-collapsed"), t = col ? UI[lang].sideExpand : UI[lang].sideCollapse;
    const b = $("#side-toggle");
    b.setAttribute("aria-label", t); b.setAttribute("title", t); b.setAttribute("aria-expanded", String(!col));
  }
  function setSideCollapsed(col) {
    root.toggleAttribute("side-collapsed", col);
    store.set("side-collapsed", col ? "1" : "0");
    syncSideLabel();
  }
  (function initSide() {
    const w = parseInt(store.get("side-w"), 10);
    if (w) setSideW(w, false);
    if (store.get("side-collapsed") === "1") root.setAttribute("side-collapsed", "");
    $("#side-toggle").addEventListener("click", () => setSideCollapsed(!root.hasAttribute("side-collapsed")));
    const h = $("#side-resize");
    h.addEventListener("pointerdown", (e) => {
      const x0 = e.clientX, w0 = $(".sidebar").getBoundingClientRect().width;
      h.setPointerCapture(e.pointerId); h.classList.add("is-drag"); root.classList.add("is-resizing");
      const move = (ev) => setSideW(w0 + ev.clientX - x0, false);
      const up = () => { h.classList.remove("is-drag"); root.classList.remove("is-resizing"); h.removeEventListener("pointermove", move); h.removeEventListener("pointerup", up); h.removeEventListener("pointercancel", up); store.set("side-w", String(Math.round(sideW()))); };
      h.addEventListener("pointermove", move); h.addEventListener("pointerup", up); h.addEventListener("pointercancel", up);
    });
    h.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") { e.preventDefault(); setSideW(sideW() + (e.key === "ArrowRight" ? 16 : -16), true); }
    });
    h.addEventListener("dblclick", () => { root.style.removeProperty("--side-w"); store.set("side-w", ""); });
  })();
  function setReader(on) {
    document.documentElement.setAttribute("reader-mode", on ? "on" : "off");
    $("#reader").setAttribute("aria-pressed", String(on));
    store.set("reader", on ? "on" : "off");
    if (on && window.Conquistas) window.Conquistas.hit("leitura");
  }
  const readerOn = () => document.documentElement.getAttribute("reader-mode") === "on";
  $("#reader").addEventListener("click", () => setReader(!readerOn()));
  $("#reader-exit").addEventListener("click", () => setReader(false));
  document.addEventListener("keydown", (e) => {
    if (e.target.closest("input, textarea, select, [contenteditable]") || e.ctrlKey || e.metaKey || e.altKey) return;
    if ($("#lightbox").open) {
      if (e.key === "ArrowRight") stepLightbox(1);
      if (e.key === "ArrowLeft") stepLightbox(-1);
      return;
    }
    if (e.key === "r" || e.key === "R") setReader(!readerOn());
  });
  $("#reader").setAttribute("aria-pressed", String(readerOn()));
  $("#lb-prev").addEventListener("click", () => stepLightbox(-1));
  $("#lb-next").addEventListener("click", () => stepLightbox(1));
  $("#lb-close").addEventListener("click", () => $("#lightbox").close());
  $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") $("#lightbox").close(); });
  $("#spectrum-slider").addEventListener("input", (e) => { if (Math.abs(Number(e.target.value) - 6563) < 45 && window.Conquistas) window.Conquistas.hit("halpha"); });
  // Rolagem por seção (desktop): um giro leva à seção seguinte/anterior. Seção mais alta que a tela rola
  // normalmente até o fim dela e só então o próximo giro muda de seção.
  (function sectionPaging() {
    const BAR = 72;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    let busy = false;
    const stops = () => [".hero-band", ...[...$$("main section.block")].map((s) => "#" + s.id), "#rodape"]
      .map((q) => $(q)).filter(Boolean).map((el) => Math.max(0, Math.round(el.getBoundingClientRect().top + scrollY - BAR)));
    const go = (top) => {
      busy = true;
      const done = () => { clearTimeout(t); busy = false; removeEventListener("scrollend", done); };
      const t = setTimeout(done, 900);
      addEventListener("scrollend", done);
      window.scrollTo({ top, behavior: reduce.matches ? "auto" : "smooth" });
    };
    addEventListener("wheel", (e) => {
      if (innerWidth <= 900 || e.ctrlKey || Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      if (document.querySelector("dialog[open]") || e.target.closest(".trophy__pop, .menu__nav, .live")) return;
      if (busy) { e.preventDefault(); return; }
      if (Math.abs(e.deltaY) < 4) return;
      const S = stops(), y = Math.round(scrollY), vh = innerHeight - BAR, max = document.documentElement.scrollHeight - innerHeight;
      let i = 0;
      for (let k = 0; k < S.length; k++) if (S[k] <= y + 2) i = k;
      if (e.deltaY > 0) {
        if (y >= max - 1) return;
        const next = S[i + 1] ?? max;
        const left = next - (y + vh);
        if (left > 2) {
          if (Math.abs(e.deltaY) < left) return;
          e.preventDefault(); go(y + left); return;
        }
        e.preventDefault(); go(Math.min(next, max));
      } else {
        if (y <= 0) return;
        const inside = y - S[i];
        if (inside > 2) {
          if (Math.abs(e.deltaY) < inside) return;
          e.preventDefault(); go(S[i]); return;
        }
        e.preventDefault(); go(Math.max(S[i - 1] ?? 0, S[i] - vh));
      }
    }, { passive: false });
  })();
  (function clock() {
    const fmt = new Intl.DateTimeFormat("pt-BR", { timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
    const tick = () => { $("#clock-time").textContent = fmt.format(new Date()); };
    tick();
    setInterval(tick, 1000);
  })();
  $("#search").addEventListener("input", (e) => { query = e.target.value.trim(); renderRepos(); });
  $("#nav-mobile").addEventListener("click", (e) => { if (e.target.closest("a")) $("#menu").open = false; });
  if (window.Busca) window.Busca.onGo(goTo);
  (function tourControls() {
    const dlg = $("#tour"), v = $("#tour-video");
    ["timeupdate", "play", "pause", "loadedmetadata"].forEach((ev) => v.addEventListener(ev, tourSync));
    $("#tour-play").addEventListener("click", () => (v.paused ? v.play() : v.pause()));
    v.addEventListener("click", () => (v.paused ? v.play() : v.pause()));
    $("#tour-seek").addEventListener("input", (e) => { if (v.duration) v.currentTime = (Number(e.target.value) / 1000) * v.duration; });
    $("#tour-fs").addEventListener("click", () => { const f = $("#tour-stage"); if (document.fullscreenElement) document.exitFullscreen(); else if (f.requestFullscreen) f.requestFullscreen(); });
    $("#tour-close").addEventListener("click", () => dlg.close());
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener("close", () => { v.pause(); v.removeAttribute("src"); v.load(); });
    dlg.addEventListener("keydown", (e) => {
      if (e.target.id === "tour-seek") return;
      if (e.key === " ") { e.preventDefault(); v.paused ? v.play() : v.pause(); }
      if (e.key === "ArrowRight") v.currentTime = Math.min(v.duration || 0, v.currentTime + 5);
      if (e.key === "ArrowLeft") v.currentTime = Math.max(0, v.currentTime - 5);
    });
  })();
  $("#live-close").addEventListener("click", closeLive);
  $("#live").addEventListener("close", () => $("#live-frame").replaceChildren());
  $("#live").addEventListener("click", (e) => { if (e.target.id === "live") closeLive(); });
  if (window.Spectrum) spectrum = window.Spectrum.mount($("#spectrum-canvas"), $("#spectrum-slider"), $("#spectrum-info"));
  initTheme();
  render();
  initSpy();
})();

(function () {
  const d = document.getElementById("qr");
  if (!d || !d.showModal) return;
  document.getElementById("qr-close").addEventListener("click", () => d.close());
  d.addEventListener("click", (e) => { if (e.target === d) d.close(); });
  d.addEventListener("close", () => { try { sessionStorage.setItem("qr-seen", "1"); } catch (e) {} });
  let seen = false; try { seen = sessionStorage.getItem("qr-seen") === "1"; } catch (e) {}
  if (!seen && !navigator.webdriver) window.addEventListener("load", () => setTimeout(() => d.showModal(), 300));
})();
