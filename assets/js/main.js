/* Portfolio v2 clean: monta a página a partir de window.PORTFOLIO_DATA (gerado por tools/build.py). */
(function () {
  "use strict";

  const D = window.PORTFOLIO_DATA;
  const LANGS = ["pt", "en", "es", "fr"];
  const SECTIONS = ["sobre", "projetos", "trabalhos", "pesquisa", "bolsas", "curriculo", "lattes", "contato"];
  const NAV = ["sobre", "projetos", "trabalhos", "pesquisa", "curriculo", "lattes", "contato"]; // mesma ordem de I18N.*.nav

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
      el("div", { class: "card__head" }, el("h3", { text: p.name }), el("span", { class: "card__meta", text: visLabel(p.visibility) })),
      el("p", { class: "clamp", text: brief }),
      tags, more);
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
    $("#nav").replaceChildren(...NAV.map((id, i) => el("a", { href: "#" + id, text: nav[i] || id })));
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
  initTheme();
  render();
  initSpy();
})();
