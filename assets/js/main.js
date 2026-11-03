/* Portfolio v2.3: monta a página a partir de window.PORTFOLIO_DATA (gerado por tools/build.py). */
(function () {
  "use strict";

  const D = window.PORTFOLIO_DATA;
  const LANGS = ["pt", "en", "es", "fr"];
  const SECTIONS = ["sobre", "projetos", "trabalhos", "pesquisa", "bolsas", "eventos", "curriculo", "lattes", "contato"];
  const NAV = ["sobre", "projetos", "trabalhos", "pesquisa", "eventos", "curriculo", "lattes", "contato"];
  const NAV_I18N = { sobre: 0, projetos: 1, trabalhos: 2, pesquisa: 3, curriculo: 4, lattes: 5, contato: 6 }; // índice em I18N.*.nav
  const CV_BASE = "https://www.phrandrade.com/resource/areas/profissional/curriculo";
  const CV_LANGS = [["pt", "Português"], ["en", "English"], ["es", "Español"], ["fr", "Français"], ["it", "Italiano"], ["zh", "中文"]];

  const UI = {
    pt: {
      cvText: "Currículo mantido em LaTeX (classe altacv), com versões sincronizadas em português, inglês, espanhol e francês.",
      cvRepo: "Repositório do CV",
      lattesText: "Estudante de Engenharia de Computação no IFF (Bom Jesus do Itabapoana, RJ), bolsista de Iniciação Científica (PIBIC/CNPq), com pesquisa em arqueologia galáctica, populações estelares e estrutura da Via Láctea.",
      lattesOpen: "Abrir currículo Lattes",
      empty: "Nenhum projeto encontrado.",
      skip: "Pular para o conteúdo",
      theme: "Alternar tema",
    },
    en: {
      cvText: "Resume maintained in LaTeX (altacv class), with synchronized versions in Portuguese, English, Spanish and French.",
      cvRepo: "Resume repository",
      lattesText: "Computer Engineering student at IFF (Bom Jesus do Itabapoana, RJ), Scientific Initiation scholar (PIBIC/CNPq), researching galactic archaeology, stellar populations and the structure of the Milky Way.",
      lattesOpen: "Open Lattes CV",
      empty: "No projects found.",
      skip: "Skip to content",
      theme: "Toggle theme",
    },
    es: {
      cvText: "Currículum mantenido en LaTeX (clase altacv), con versiones sincronizadas en portugués, inglés, español y francés.",
      cvRepo: "Repositorio del CV",
      lattesText: "Estudiante de Ingeniería Informática en el IFF (Bom Jesus do Itabapoana, RJ), becario de Iniciación Científica (PIBIC/CNPq), con investigación en arqueología galáctica, poblaciones estelares y estructura de la Vía Láctea.",
      lattesOpen: "Abrir currículum Lattes",
      empty: "Ningún proyecto encontrado.",
      skip: "Saltar al contenido",
      theme: "Cambiar tema",
    },
    fr: {
      cvText: "CV maintenu en LaTeX (classe altacv), avec des versions synchronisées en portugais, anglais, espagnol et français.",
      cvRepo: "Dépôt du CV",
      lattesText: "Étudiant en génie informatique à l'IFF (Bom Jesus do Itabapoana, RJ), boursier d'Initiation Scientifique (PIBIC/CNPq), avec des recherches en archéologie galactique, populations stellaires et structure de la Voie lactée.",
      lattesOpen: "Ouvrir le CV Lattes",
      empty: "Aucun projet trouvé.",
      skip: "Aller au contenu",
      theme: "Changer de thème",
    },
  };

  const UI_MORE = {
    pt: {
      cvDownload: "Baixar CV", fSections: "Seções", fSites: "Sites", fDocs: "Documentos", updated: "Atualizado em", menu: "Menu",
      nav: "Eventos", alemTitle: "Participação em eventos", alemLead: "Feiras, congressos e visitas técnicas em que apresentei trabalhos ou aprendi algo, com fotos de cada um.",
      nickname: "Apelido", base: "Base", baseText: "Bom Jesus do Itabapoana, RJ", photos: "fotos", report: "Ler relato", noPhotos: "Relato sem fotos", prev: "Anterior", next: "Próxima",
      reader: "Modo leitura", readerExit: "Sair do modo leitura", cvAcad: "Acadêmico", cvProf: "Profissional", cvLangsTitle: "Currículo em 6 idiomas (PDF)",
      tour: "Ver tour", live: "Explorar ao vivo", openNew: "Abrir em nova aba", close: "Fechar",
      stats: ["repositórios", "projetos de iniciação científica", "participações na IAAC (2024 e 2025)", "disciplinas mapeadas no Sistema Acadêmico"],
      spectrumHint: "Arraste para percorrer o espectro de uma estrela e encontrar as linhas de absorção que uso no GALAH DR4.",
      continuum: "contínuo estelar", el: { h: "hidrogênio (Balmer)", ca2: "cálcio ionizado", mg: "magnésio neutro", fe: "ferro neutro", na: "sódio neutro" },
      sliderLabel: "Comprimento de onda em ångströms",
    },
    en: {
      cvDownload: "Download CV", fSections: "Sections", fSites: "Sites", fDocs: "Documents", updated: "Updated on", menu: "Menu",
      nav: "Events", alemTitle: "Events", alemLead: "Fairs, conferences and technical visits where I presented work or learned something, with photos of each.",
      nickname: "Nickname", base: "Based in", baseText: "Bom Jesus do Itabapoana, RJ, Brazil", photos: "photos", report: "Read the story", noPhotos: "Story without photos", prev: "Previous", next: "Next",
      reader: "Reading mode", readerExit: "Exit reading mode", cvAcad: "Academic", cvProf: "Professional", cvLangsTitle: "Resume in 6 languages (PDF)",
      tour: "Watch tour", live: "Explore live", openNew: "Open in new tab", close: "Close",
      stats: ["repositories", "scientific initiation projects", "IAAC participations (2024 and 2025)", "courses mapped in the Academic System"],
      spectrumHint: "Drag to sweep a star's spectrum and find the absorption lines I work with in GALAH DR4.",
      continuum: "stellar continuum", el: { h: "hydrogen (Balmer)", ca2: "ionized calcium", mg: "neutral magnesium", fe: "neutral iron", na: "neutral sodium" },
      sliderLabel: "Wavelength in ångströms",
    },
    es: {
      cvDownload: "Descargar CV", fSections: "Secciones", fSites: "Sitios", fDocs: "Documentos", updated: "Actualizado el", menu: "Menú",
      nav: "Eventos", alemTitle: "Participación en eventos", alemLead: "Ferias, congresos y visitas técnicas en las que presenté trabajos o aprendí algo, con fotos de cada uno.",
      nickname: "Apodo", base: "Base", baseText: "Bom Jesus do Itabapoana, RJ, Brasil", photos: "fotos", report: "Leer el relato", noPhotos: "Relato sin fotos", prev: "Anterior", next: "Siguiente",
      reader: "Modo lectura", readerExit: "Salir del modo lectura", cvAcad: "Académico", cvProf: "Profesional", cvLangsTitle: "Currículum en 6 idiomas (PDF)",
      tour: "Ver recorrido", live: "Explorar en vivo", openNew: "Abrir en nueva pestaña", close: "Cerrar",
      stats: ["repositorios", "proyectos de iniciación científica", "participaciones en la IAAC (2024 y 2025)", "asignaturas mapeadas en el Sistema Académico"],
      spectrumHint: "Arrastra para recorrer el espectro de una estrella y encontrar las líneas de absorción que uso en GALAH DR4.",
      continuum: "continuo estelar", el: { h: "hidrógeno (Balmer)", ca2: "calcio ionizado", mg: "magnesio neutro", fe: "hierro neutro", na: "sodio neutro" },
      sliderLabel: "Longitud de onda en ångströms",
    },
    fr: {
      cvDownload: "Télécharger le CV", fSections: "Sections", fSites: "Sites", fDocs: "Documents", updated: "Mis à jour le", menu: "Menu",
      nav: "Événements", alemTitle: "Participation à des événements", alemLead: "Salons, congrès et visites techniques où j'ai présenté des travaux ou appris quelque chose, avec les photos de chacun.",
      nickname: "Surnom", base: "Basé à", baseText: "Bom Jesus do Itabapoana, RJ, Brésil", photos: "photos", report: "Lire le récit", noPhotos: "Récit sans photos", prev: "Précédente", next: "Suivante",
      reader: "Mode lecture", readerExit: "Quitter le mode lecture", cvAcad: "Académique", cvProf: "Professionnel", cvLangsTitle: "CV en 6 langues (PDF)",
      tour: "Voir la visite", live: "Explorer en direct", openNew: "Ouvrir dans un nouvel onglet", close: "Fermer",
      stats: ["dépôts", "projets d'initiation scientifique", "participations à l'IAAC (2024 et 2025)", "matières cartographiées dans le Système Académique"],
      spectrumHint: "Faites glisser pour parcourir le spectre d'une étoile et trouver les raies d'absorption que j'utilise dans GALAH DR4.",
      continuum: "continuum stellaire", el: { h: "hydrogène (Balmer)", ca2: "calcium ionisé", mg: "magnésium neutre", fe: "fer neutre", na: "sodium neutre" },
      sliderLabel: "Longueur d'onde en ångströms",
    },
  };
  for (const l of LANGS) Object.assign(UI[l], UI_MORE[l]);

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
    const nav = (navigator.language || "pt").slice(0, 2).toLowerCase();
    return LANGS.includes(nav) ? nav : "pt";
  }

  const T = () => D.I18N[lang] || D.I18N.pt;
  const tr = (item, field) => {
    if (lang === "pt" || !item.i18n || !item.i18n[lang]) return item[field];
    const v = item.i18n[lang];
    return typeof v === "string" ? (field === "brief" || field === "summary" || field === "details" ? v : item[field]) : (v[field] || item[field]);
  };

  function visLabel(v) { return (T().vis || {})[v] || v; }

  function projectCard(p) {
    const L = T().labels || {};
    const brief = tr(p, "brief");
    const tags = el("div", { class: "tags" }, (p.tags || []).slice(0, 4).map((t) => el("span", { class: "tag", text: t })));
    const more = el("details", {},
      el("summary", { text: L.details || "Detalhes" }),
      el("p", { text: brief }),
      el("p", { class: "mono", text: (p.stack || []).join(" · ") }),
      p.repo && p.visibility === "público"
        ? el("a", { href: p.repo, target: "_blank", rel: "noopener", text: noArrow(L.viewRepo || "GitHub") })
        : el("p", { class: "card__meta", text: L.noRepo || "" }));
    return el("article", { class: "card", "data-cat": p.cat, "data-vis": p.visibility },
      mediaFigure(p),
      el("div", { class: "card__head" }, el("h3", { text: p.name }), el("span", { class: "card__meta", text: visLabel(p.visibility) })),
      el("p", { class: "clamp", text: brief }),
      tags, mediaActions(p), more);
  }

  function mediaFigure(p) {
    if (!p.image) return null;
    return el("figure", { class: "card__media" },
      el("img", { src: p.image, alt: p.name, loading: "lazy", decoding: "async", width: "640", height: "400" }));
  }

  function mediaActions(p) {
    const U = UI[lang];
    const btns = [];
    if (p.video) {
      const b = el("button", { type: "button", class: "btn btn--sm", text: U.tour });
      b.addEventListener("click", () => playTour(b.closest(".card"), p));
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

  function playTour(card, p) {
    let fig = card.querySelector(".card__media");
    if (!fig) { fig = el("figure", { class: "card__media" }); card.prepend(fig); }
    const v = el("video", { src: p.video, poster: p.image || null, controls: "", muted: "", playsinline: "", autoplay: "", loop: "", preload: "auto", "aria-label": p.name });
    v.muted = true;
    fig.replaceChildren(v);
    if (window.Conquistas) window.Conquistas.hit("tour");
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
    $("#footer-sections").replaceChildren(...navLinks().map((a) => el("li", {}, a)));
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
    $("#research").replaceChildren(...D.RESEARCH.map((r) => {
      const url = ((r.details || "").match(/https?:\/\/\S+/) || [])[0];
      return el("article", { class: "card" },
        el("div", { class: "card__head" }, el("h3", { text: r.title }), el("span", { class: "card__meta", text: r.badge })),
        el("p", { text: tr(r, "summary") }),
        url && r.badge !== "Privado" ? el("a", { href: url, target: "_blank", rel: "noopener", text: noArrow(L.viewRepo || "GitHub") }) : null);
    }));
  }

  function renderGrants() {
    const B = T().bolsas || {};
    $("#grants").replaceChildren(...D.BOLSAS.map((b) => el("li", {},
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
    const vals = [D.REPOS.length, D.BOLSAS.length, 2, disc];
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
        return el("article", { class: "event" },
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
    $("#footer-name").textContent = `© ${new Date().getFullYear()} ${D.FULL_NAME}`;
    $("#footer-text").textContent = noEmoji(T().footer || "");
    if (D.UPDATED) {
      const [y, m, d] = D.UPDATED.split("-");
      $("#footer-updated").textContent = `${U.updated} ${d}/${m}/${y}`;
    }
  }

  function render() {
    document.documentElement.lang = { pt: "pt-BR", en: "en", es: "es", fr: "fr" }[lang];
    $$("#lang button, #lang-m button").forEach((b) => { const on = b.dataset.lang === lang; b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", String(on)); });
    if (window.Conquistas) window.Conquistas.setLang(lang);
    renderHero(); renderSections(); renderFeatured(); renderTabs(); renderRepos();
    renderResearch(); renderGrants(); renderContacts(); renderStatic();
    renderStats(); renderEvents(); renderCV(); renderSpectrum(); renderSidebar();
    $("#reader").setAttribute("aria-label", UI[lang].reader);
    $("#reader-exit").setAttribute("aria-label", UI[lang].readerExit);
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
  (function clock() {
    const fmt = new Intl.DateTimeFormat("pt-BR", { timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
    const tick = () => { $("#clock-time").textContent = fmt.format(new Date()); };
    tick();
    setInterval(tick, 1000);
  })();
  $("#search").addEventListener("input", (e) => { query = e.target.value.trim(); renderRepos(); });
  $("#nav-mobile").addEventListener("click", (e) => { if (e.target.closest("a")) $("#menu").open = false; });
  $("#live-close").addEventListener("click", closeLive);
  $("#live").addEventListener("close", () => $("#live-frame").replaceChildren());
  $("#live").addEventListener("click", (e) => { if (e.target.id === "live") closeLive(); });
  if (window.Spectrum) spectrum = window.Spectrum.mount($("#spectrum-canvas"), $("#spectrum-slider"), $("#spectrum-info"));
  initTheme();
  render();
  initSpy();
})();
