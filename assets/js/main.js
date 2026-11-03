/* Portfolio v2.1: monta a página a partir de window.PORTFOLIO_DATA (gerado por tools/build.py). */
(function () {
  "use strict";

  const D = window.PORTFOLIO_DATA;
  const LANGS = ["pt", "en", "es", "fr"];
  const SECTIONS = ["sobre", "projetos", "trabalhos", "pesquisa", "bolsas", "alem", "curriculo", "lattes", "contato"];
  const NAV = ["sobre", "projetos", "trabalhos", "pesquisa", "alem", "curriculo", "lattes", "contato"];
  const NAV_I18N = { sobre: 0, projetos: 1, trabalhos: 2, pesquisa: 3, curriculo: 4, lattes: 5, contato: 6 }; // índice em I18N.*.nav
  const GALLERY = ["sab-2025-poster", "sab-2025", "febic-2024-estande", "febic-2024", "lncc-2022-supercomputador", "lncc-2022"];

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
      nav: "Além do código", alemTitle: "Além do código", alemLead: "Eventos, divulgação científica e o que me move fora do terminal.",
      nickname: "Apelido", hobby: "Hobby", hobbyText: "Animações e simulações científicas para divulgação em física e astronomia.", base: "Base", baseText: "Bom Jesus do Itabapoana, RJ",
      tour: "Ver tour", live: "Explorar ao vivo", openNew: "Abrir em nova aba", close: "Fechar",
      stats: ["repositórios", "projetos de iniciação científica", "participações na IAAC (2024 e 2025)", "disciplinas mapeadas no Sistema Acadêmico"],
      spectrumHint: "Arraste para percorrer o espectro de uma estrela e encontrar as linhas de absorção que uso no GALAH DR4.",
      continuum: "contínuo estelar", el: { h: "hidrogênio (Balmer)", ca2: "cálcio ionizado", mg: "magnésio neutro", fe: "ferro neutro", na: "sódio neutro" },
      sliderLabel: "Comprimento de onda em ångströms",
      captions: { "sab-2025-poster": "SAB 2025: pôster sobre estrelas próximas do Gaia observadas pelo GALAH DR4", "sab-2025": "XLVIII Reunião Anual da SAB, Caxambu (MG)", "febic-2024-estande": "IX FEBIC: estande sobre o impacto de satélites em observações astronômicas", "febic-2024": "IX FEBIC, 2024", "lncc-2022-supercomputador": "Supercomputador do LNCC, 2022", "lncc-2022": "Visita ao LNCC, Petrópolis (RJ), 2022" },
    },
    en: {
      nav: "Beyond code", alemTitle: "Beyond code", alemLead: "Events, science outreach and what drives me away from the terminal.",
      nickname: "Nickname", hobby: "Hobby", hobbyText: "Scientific animations and simulations for physics and astronomy outreach.", base: "Based in", baseText: "Bom Jesus do Itabapoana, RJ, Brazil",
      tour: "Watch tour", live: "Explore live", openNew: "Open in new tab", close: "Close",
      stats: ["repositories", "scientific initiation projects", "IAAC participations (2024 and 2025)", "courses mapped in the Academic System"],
      spectrumHint: "Drag to sweep a star's spectrum and find the absorption lines I work with in GALAH DR4.",
      continuum: "stellar continuum", el: { h: "hydrogen (Balmer)", ca2: "ionized calcium", mg: "neutral magnesium", fe: "neutral iron", na: "neutral sodium" },
      sliderLabel: "Wavelength in ångströms",
      captions: { "sab-2025-poster": "SAB 2025: poster on nearby Gaia stars observed by GALAH DR4", "sab-2025": "48th Annual Meeting of the Brazilian Astronomical Society, Caxambu (MG)", "febic-2024-estande": "IX FEBIC: booth on the impact of satellites on astronomical observations", "febic-2024": "IX FEBIC, 2024", "lncc-2022-supercomputador": "LNCC supercomputer, 2022", "lncc-2022": "Visit to LNCC, Petrópolis (RJ), 2022" },
    },
    es: {
      nav: "Más allá del código", alemTitle: "Más allá del código", alemLead: "Eventos, divulgación científica y lo que me mueve lejos de la terminal.",
      nickname: "Apodo", hobby: "Pasatiempo", hobbyText: "Animaciones y simulaciones científicas para divulgación en física y astronomía.", base: "Base", baseText: "Bom Jesus do Itabapoana, RJ, Brasil",
      tour: "Ver recorrido", live: "Explorar en vivo", openNew: "Abrir en nueva pestaña", close: "Cerrar",
      stats: ["repositorios", "proyectos de iniciación científica", "participaciones en la IAAC (2024 y 2025)", "asignaturas mapeadas en el Sistema Académico"],
      spectrumHint: "Arrastra para recorrer el espectro de una estrella y encontrar las líneas de absorción que uso en GALAH DR4.",
      continuum: "continuo estelar", el: { h: "hidrógeno (Balmer)", ca2: "calcio ionizado", mg: "magnesio neutro", fe: "hierro neutro", na: "sodio neutro" },
      sliderLabel: "Longitud de onda en ångströms",
      captions: { "sab-2025-poster": "SAB 2025: póster sobre estrellas cercanas de Gaia observadas por GALAH DR4", "sab-2025": "XLVIII Reunión Anual de la SAB, Caxambu (MG)", "febic-2024-estande": "IX FEBIC: stand sobre el impacto de los satélites en las observaciones astronómicas", "febic-2024": "IX FEBIC, 2024", "lncc-2022-supercomputador": "Supercomputador del LNCC, 2022", "lncc-2022": "Visita al LNCC, Petrópolis (RJ), 2022" },
    },
    fr: {
      nav: "Au-delà du code", alemTitle: "Au-delà du code", alemLead: "Événements, vulgarisation scientifique et ce qui m'anime loin du terminal.",
      nickname: "Surnom", hobby: "Loisir", hobbyText: "Animations et simulations scientifiques pour la vulgarisation en physique et en astronomie.", base: "Basé à", baseText: "Bom Jesus do Itabapoana, RJ, Brésil",
      tour: "Voir la visite", live: "Explorer en direct", openNew: "Ouvrir dans un nouvel onglet", close: "Fermer",
      stats: ["dépôts", "projets d'initiation scientifique", "participations à l'IAAC (2024 et 2025)", "matières cartographiées dans le Système Académique"],
      spectrumHint: "Faites glisser pour parcourir le spectre d'une étoile et trouver les raies d'absorption que j'utilise dans GALAH DR4.",
      continuum: "continuum stellaire", el: { h: "hydrogène (Balmer)", ca2: "calcium ionisé", mg: "magnésium neutre", fe: "fer neutre", na: "sodium neutre" },
      sliderLabel: "Longueur d'onde en ångströms",
      captions: { "sab-2025-poster": "SAB 2025 : poster sur les étoiles proches de Gaia observées par GALAH DR4", "sab-2025": "48e réunion annuelle de la SAB, Caxambu (MG)", "febic-2024-estande": "IX FEBIC : stand sur l'impact des satellites sur les observations astronomiques", "febic-2024": "IX FEBIC, 2024", "lncc-2022-supercomputador": "Supercalculateur du LNCC, 2022", "lncc-2022": "Visite au LNCC, Petrópolis (RJ), 2022" },
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
    return el("article", { class: "card", "data-cat": p.cat },
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
    $("#nav").replaceChildren(...NAV.map((id) => el("a", { href: "#" + id, text: id in NAV_I18N ? (nav[NAV_I18N[id]] || id) : UI[lang].nav })));
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
    $("#contacts").replaceChildren(...D.CONTACTS.flatMap((c) => [
      el("dt", { text: CL[c.labelKey] || c.labelKey }),
      el("dd", {}, c.href ? el("a", { href: c.href, target: c.href.startsWith("mailto:") ? null : "_blank", rel: "noopener", text: c.value }) : c.value),
    ]));
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

  function renderAlem() {
    const U = UI[lang];
    $("#facts").replaceChildren(
      el("dt", { text: U.nickname }), el("dd", { text: D.EXTRA?.nickname || "" }),
      el("dt", { text: U.hobby }), el("dd", { text: U.hobbyText }),
      el("dt", { text: U.base }), el("dd", { text: U.baseText }));
    $("#gallery").replaceChildren(...GALLERY.map((k) => el("figure", {},
      el("img", { src: `assets/media/eventos/${k}.webp`, alt: U.captions[k], loading: "lazy", decoding: "async" }),
      el("figcaption", { text: U.captions[k] }))));
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
  }

  function render() {
    document.documentElement.lang = { pt: "pt-BR", en: "en", es: "es", fr: "fr" }[lang];
    $("#lang").value = lang;
    renderHero(); renderSections(); renderFeatured(); renderTabs(); renderRepos();
    renderResearch(); renderGrants(); renderContacts(); renderStatic();
    renderStats(); renderAlem(); renderSpectrum();
  }

  function initTheme() {
    $("#theme").addEventListener("click", () => {
      const root = document.documentElement;
      const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
      root.dataset.theme = dark ? "light" : "dark";
      store.set("theme", root.dataset.theme);
    });
  }

  function initSpy() {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        $$("#nav a").forEach((a) => a.setAttribute("aria-current", String(a.hash === "#" + e.target.id)));
      }
    }, { rootMargin: "-40% 0px -55% 0px" });
    SECTIONS.forEach((id) => { const s = document.getElementById(id); if (s) io.observe(s); });
  }

  $("#lang").addEventListener("change", (e) => { lang = e.target.value; store.set("lang", lang); render(); });
  $("#search").addEventListener("input", (e) => { query = e.target.value.trim(); renderRepos(); });
  $("#live-close").addEventListener("click", closeLive);
  $("#live").addEventListener("close", () => $("#live-frame").replaceChildren());
  $("#live").addEventListener("click", (e) => { if (e.target.id === "live") closeLive(); });
  if (window.Spectrum) spectrum = window.Spectrum.mount($("#spectrum-canvas"), $("#spectrum-slider"), $("#spectrum-info"));
  initTheme();
  render();
  initSpy();
})();
