/* ============================================================
   Pedro Rocha — Portfolio · main.js
   - Starfield + GALÁXIAS ROTACIONANDO (canvas, mouse) + CONSTELAÇÕES
   - i18n PT-BR / EN / ES / FR (seletor de bandeiras, persistido)
   - Cartões, grade completa, accordion de pesquisa, bolsas, contatos
   ============================================================ */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const D = window.PORTFOLIO_DATA || { REPOS: [], FEATURED: [], RESEARCH: [], BOLSAS: [], CONTACTS: [], EXTRA: {}, I18N: {} };
  const I18N = D.I18N || {};
  let lang = (localStorage.getItem("lang") || "pt");
  if (!I18N[lang]) lang = "pt";

  function t(path) {
    // path tipo "sections.sobre.title"
    return path.split(".").reduce((o, k) => (o ? o[k] : undefined), I18N[lang]) || "";
  }

  /* ============ 0. ÍCONES SVG ============ */
  const ICONS = {
    academic: '<path d="M12 3 2 8l10 5 10-5-10-5Zm0 7L4 7m8 3 8-4"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>',
    quiz: '<path d="M9 11l2 2 4-4"/><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h2M11 8h6"/>',
    teacher: '<circle cx="12" cy="8" r="3.2"/><path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7"/>',
    exam: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M9 12l1.5 1.5L13 11"/>',
    web: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    latex: '<path d="M4 5l4 7-4 7h3l2.5-4.5L14 19h3l-5-8 4.5-8H13L9.5 9 6 5z"/>',
    leaf: '<path d="M5 21c0-9 7-15 15-15 0 9-6 15-15 15Z"/><path d="M5 21C9 14 13 10 18 7"/>',
    cash: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M7 9v6M17 9v6"/>',
    box: '<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/>',
    table: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M3 14h18M9 4v16M15 4v16"/>',
    star: '<path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"/>',
    spectrum: '<path d="M3 20V10M8 20V4M13 20v-9M18 20V7M21 20v-5"/><path d="M3 20h18"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v17H6a2 2 0 0 0-2 2z"/><path d="M19 3v17"/>',
    document: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M9 12h7M9 16h7"/>',
    function: '<path d="M4 18c4-12 12-12 16 0"/><path d="M4 7h4M16 7h4"/>',
    formula: '<path d="M5 5l14 14M19 5L5 19"/><path d="M9 4l2 4 4-2"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    life: '<path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z"/>',
    dashboard: '<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="5" rx="1"/><rect x="13" y="10" width="8" height="11" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/>',
    github: '<path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/>',
    profile: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>',
    darkmatter: '<circle cx="12" cy="12" r="3.2"/><circle cx="12" cy="12" r="9" opacity=".4"/>',
    fog: '<path d="M4 9h11a3 3 0 1 0-3-3M4 14h15a3 3 0 1 1-3 3M4 19h10"/>',
    satellite: '<path d="M5 11l-2 2 4 4 2-2M13 3l8 8-3 3-8-8zM14 6l4 4M9 14l4 4"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7"/>',
    scholar: '<path d="M12 4 2 9l10 5 10-5-10-5Z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>',
    orcid: '<circle cx="12" cy="12" r="9"/><path d="M8 11h2v5H8zM8 8.5h.01M12 13c0-1.2 1-1.8 2-1.8s1.8.7 1.8 1.8c0 1.8-2.6 2.2-2.6 3.6h2.8M16.5 16v.5"/>',
    lattes: '<path d="M12 3l9 5v8l-9 5-9-5V8z"/><path d="M12 12l9-5M12 12v9M12 12 3 7"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1"/>',
    pin: '<path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/>'
  };
  const iconSVG = (key, cls) => {
    const p = ICONS[key] || ICONS.star;
    return `<svg class="ico ${cls || ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  };
  const pick = (obj, key) => (obj && obj.i18n && obj.i18n[lang] && obj.i18n[lang][key]) ? obj.i18n[lang][key] : (obj[key] || "");

  /* ============ 1. STARFIELD ============ */
  const starCanvas = document.getElementById("starfield");
  const sctx = starCanvas.getContext("2d");
  let stars = [], sw, sh, sdpr;
  function sizeStars() {
    sdpr = Math.min(window.devicePixelRatio || 1, 2);
    sw = starCanvas.width = window.innerWidth * sdpr;
    sh = starCanvas.height = window.innerHeight * sdpr;
    starCanvas.style.width = window.innerWidth + "px";
    starCanvas.style.height = window.innerHeight + "px";
    const count = Math.min(220, Math.floor((window.innerWidth * window.innerHeight) / 9000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * sw, y: Math.random() * sh, z: Math.random() * 0.8 + 0.2,
      r: (Math.random() * 1.4 + 0.3) * sdpr, tw: Math.random() * Math.PI * 2,
      hue: Math.random() < 0.2 ? 270 : (Math.random() < 0.5 ? 210 : 200)
    }));
  }
  function drawStars(t) {
    sctx.clearRect(0, 0, sw, sh);
    for (const s of stars) {
      const tw = 0.55 + 0.45 * Math.sin(s.tw + t * 0.0015 * s.z);
      sctx.beginPath(); sctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2);
      sctx.fillStyle = `hsla(${s.hue},90%,${70 + tw * 20}%,${0.5 + tw * 0.5})`; sctx.fill();
      s.y += s.z * 0.12 * sdpr;
      if (s.y > sh) { s.y = 0; s.x = Math.random() * sw; }
      s.tw += 0.02;
    }
    requestAnimationFrame(drawStars);
  }

  /* ============ 2. GALÁXIAS (mouse) ============ */
  const galCanvas = document.getElementById("galaxies");
  let gctx, gw, gh, gdpr, galaxies = [], mx = 0, my = 0, tmx = 0, tmy = 0;
  function buildGalaxies() {
    const palette = [["#6ea8fe","#b692ff"],["#5eead4","#6ea8fe"],["#ffd479","#b692ff"],["#ff8fb1","#6ea8fe"]];
    const n = window.innerWidth < 700 ? 2 : 3;
    galaxies = Array.from({ length: n }, (_, i) => {
      const base = palette[i % palette.length];
      return {
        cx: (i + 1) / (n + 1), cy: 0.3 + (i % 2) * 0.4,
        R: Math.min(window.innerWidth, window.innerHeight) * (0.16 + Math.random() * 0.06),
        arms: 2 + (i % 2), rot: Math.random() * Math.PI * 2,
        spin: (Math.random() < 0.5 ? 1 : -1) * (0.0006 + Math.random() * 0.0006),
        hueA: base[0], hueB: base[1],
        stars: Array.from({ length: 260 }, () => ({ a: Math.random() * Math.PI * 2, rad: Math.pow(Math.random(), 0.5), sz: Math.random() * 1.6 + 0.4, tw: Math.random() * Math.PI * 2 }))
      };
    });
  }
  function sizeGalaxies() {
    gdpr = Math.min(window.devicePixelRatio || 1, 2);
    gw = galCanvas.width = window.innerWidth * gdpr; gh = galCanvas.height = window.innerHeight * gdpr;
    galCanvas.style.width = window.innerWidth + "px"; galCanvas.style.height = window.innerHeight + "px";
    buildGalaxies();
  }
  function drawGalaxies(t) {
    gctx.clearRect(0, 0, gw, gh);
    mx += (tmx - mx) * 0.06; my += (tmy - my) * 0.06;
    // posição do mouse em pixels (suavizada)
    const mpx = (mx * 0.5 + 0.5) * gw, mpy = (my * 0.5 + 0.5) * gh;
    const radius = Math.min(gw, gh) * 0.7; // alcance da repulsão
    const maxPush = 160 * gdpr;
    for (const g of galaxies) {
      const bx = g.cx * gw, by = g.cy * gh;
      // repulsão: empurra a galáxia para LONGE do mouse, proporcional à proximidade
      let tx = 0, ty = 0;
      const dx = bx - mpx, dy = by - mpy, dist = Math.hypot(dx, dy) || 1;
      if (dist < radius) {
        const f = (1 - dist / radius);
        const push = f * f * maxPush;
        tx = (dx / dist) * push; ty = (dy / dist) * push;
      }
      g.ox = (g.ox || 0) + (tx - (g.ox || 0)) * 0.08;
      g.oy = (g.oy || 0) + (ty - (g.oy || 0)) * 0.08;
      const cx = bx + g.ox, cy = by + g.oy;
      g.rot += g.spin;
      const grad = gctx.createRadialGradient(cx, cy, 0, cx, cy, g.R * 0.55);
      grad.addColorStop(0, "rgba(255,255,255,1)"); grad.addColorStop(0.18, g.hueA);
      grad.addColorStop(0.6, g.hueB); grad.addColorStop(1, "rgba(0,0,0,0)");
      gctx.fillStyle = grad; gctx.beginPath(); gctx.arc(cx, cy, g.R * 0.55, 0, Math.PI * 2); gctx.fill();
      const core = gctx.createRadialGradient(cx, cy, 0, cx, cy, g.R * 0.18);
      core.addColorStop(0, "rgba(255,255,255,0.95)"); core.addColorStop(1, "rgba(255,255,255,0)");
      gctx.fillStyle = core; gctx.beginPath(); gctx.arc(cx, cy, g.R * 0.18, 0, Math.PI * 2); gctx.fill();
      for (const s of g.stars) {
        const arm = Math.floor(s.a / (Math.PI * 2 / g.arms)) * (Math.PI * 2 / g.arms);
        const ang = arm + s.rad * 3.4 + g.rot;
        const rad = s.rad * g.R;
        const x = cx + Math.cos(ang) * rad, y = cy + Math.sin(ang) * rad * 0.42;
        const tw = 0.5 + 0.5 * Math.sin(s.tw + t * 0.002);
        gctx.beginPath(); gctx.arc(x, y, (s.sz + 0.4) * gdpr, 0, Math.PI * 2);
        gctx.fillStyle = `rgba(230,238,255,${0.45 + tw * 0.55})`; gctx.fill();
      }
    }
    requestAnimationFrame(drawGalaxies);
  }
  if (galCanvas) {
    gctx = galCanvas.getContext("2d"); sizeGalaxies();
    window.addEventListener("resize", sizeGalaxies);
    window.addEventListener("mousemove", (e) => { tmx = (e.clientX / window.innerWidth - 0.5) * 2; tmy = (e.clientY / window.innerHeight - 0.5) * 2; });
    window.addEventListener("mouseleave", () => { tmx = 0; tmy = 0; });
    if (!reduceMotion) requestAnimationFrame(drawGalaxies); else drawGalaxies(0);
  }

  /* ============ 2b. CONSTELAÇÕES ============ */
  const constCanvas = document.getElementById("constel");
  let cctx, cw, ch, cdpr, constels = [];
  function buildConstels() {
    const C = {
      cruz: { stars: [[0.80,0.80],[0.83,0.70],[0.86,0.60],[0.84,0.50],[0.82,0.40]], lines: [[0,1],[1,2],[2,3],[3,4]] },
      ori: { stars: [[0.42,0.30],[0.46,0.38],[0.50,0.46],[0.40,0.55],[0.56,0.58],[0.36,0.70],[0.60,0.72]], lines: [[0,1],[1,2],[3,4],[0,3],[2,4],[3,5],[4,6],[5,6]] },
      escorp: { stars: [[0.12,0.55],[0.16,0.62],[0.20,0.68],[0.25,0.72],[0.30,0.74],[0.33,0.70],[0.32,0.64],[0.29,0.60]], lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] },
      cas: { stars: [[0.10,0.18],[0.18,0.24],[0.26,0.16],[0.34,0.23],[0.42,0.15]], lines: [[0,1],[1,2],[2,3],[3,4]] },
      ursa: { stars: [[0.62,0.14],[0.70,0.17],[0.78,0.16],[0.85,0.20],[0.88,0.27],[0.82,0.30],[0.74,0.28]], lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,1]] }
    };
    constels = Object.entries(C).map(([name, c]) => ({
      name, stars: c.stars.map(([x, y]) => ({ x, y, tw: Math.random() * Math.PI * 2, r: 1.2 + Math.random() * 1.6, ph: Math.random() * Math.PI * 2, amp: 4 + Math.random() * 6 })), lines: c.lines
    }));
  }
  function sizeConstel() {
    cdpr = Math.min(window.devicePixelRatio || 1, 2);
    cw = constCanvas.width = window.innerWidth * cdpr; ch = constCanvas.height = window.innerHeight * cdpr;
    constCanvas.style.width = window.innerWidth + "px"; constCanvas.style.height = window.innerHeight + "px";
    buildConstels();
  }
  function drawConstel(t) {
    cctx.clearRect(0, 0, cw, ch);
    const time = t * 0.00018; // movimento próprio devagar
    for (const c of constels) {
      // posição de cada estrela com leve deriva
      const pos = c.stars.map((s) => ({
        x: s.x * cw + Math.sin(time + s.ph) * s.amp * cdpr,
        y: s.y * ch + Math.cos(time * 0.8 + s.ph) * s.amp * cdpr * 0.6
      }));
      cctx.strokeStyle = "rgba(180,205,255,0.55)"; cctx.lineWidth = 1.6 * cdpr;
      cctx.shadowColor = "rgba(150,180,255,0.6)"; cctx.shadowBlur = 6 * cdpr;
      cctx.beginPath();
      c.lines.forEach(([a, b]) => { const A = pos[a], B = pos[b]; cctx.moveTo(A.x, A.y); cctx.lineTo(B.x, B.y); });
      cctx.stroke(); cctx.shadowBlur = 0;
      c.stars.forEach((s, i) => {
        const tw = 0.55 + 0.45 * Math.sin(s.tw + t * 0.0012);
        const x = pos[i].x, y = pos[i].y, r = s.r * cdpr * (0.7 + tw * 0.6);
        const g = cctx.createRadialGradient(x, y, 0, x, y, r * 3);
        g.addColorStop(0, "rgba(255,255,255,0.95)"); g.addColorStop(0.4, "rgba(190,210,255,0.55)"); g.addColorStop(1, "rgba(190,210,255,0)");
        cctx.fillStyle = g; cctx.beginPath(); cctx.arc(x, y, r * 3, 0, Math.PI * 2); cctx.fill();
      });
    }
    requestAnimationFrame(drawConstel);
  }
  if (constCanvas) {
    cctx = constCanvas.getContext("2d"); sizeConstel();
    window.addEventListener("resize", sizeConstel);
    drawConstel(performance.now());
    if (!reduceMotion) requestAnimationFrame(drawConstel);
  }

  /* ============ 3. RENDER (funções nomeadas) ============ */
  const cardHTML = (p) => {
    const brief = (p.i18n && p.i18n[lang]) ? p.i18n[lang] : p.brief;
    const vis = t("vis." + p.visibility) || (p.visibility === "público" ? "Público" : "Privado");
    const cat = t("cat." + p.cat) || p.cat;
    return `
    <article class="card reveal" data-card>
      <div class="card__top">
        <div class="card__icon">${iconSVG(p.icon)}</div>
        <div>
          <div class="card__title">${p.name}</div>
          <div class="card__tag">${vis} · ${cat}</div>
        </div>
      </div>
      <p class="card__summary">${brief}</p>
      <div class="card__stack">${(p.tags || []).map((s) => `<span class="tagp">${s}</span>`).join("")} ${(p.stack || []).slice(0, 4).map((s) => `<span class="tagp tagp--tech">${s}</span>`).join("")}</div>
      <div class="card__more">Detalhes <span class="chev">▾</span></div>
      <div class="card__detail">
        <p>${brief}</p>
        <a class="card__repo" href="${p.repo}" target="_blank" rel="noopener">↗ Ver repositório no GitHub</a>
      </div>
    </article>`;
  };
  function wireCards(scope) {
    scope.querySelectorAll("[data-card]").forEach((card) => {
      card.addEventListener("click", (e) => { if (e.target.closest("a")) return; card.classList.toggle("open"); });
    });
  }
  function renderCards() {
    const grid = document.getElementById("projectGrid");
    if (grid) {
      grid.innerHTML = (D.FEATURED.length ? D.FEATURED : D.REPOS.slice(0, 4)).map(cardHTML).join("");
      wireCards(grid);
    }
    const full = document.getElementById("allRepos");
    if (full) {
      const order = [{ key: "software", label: "Software & Sistemas" }, { key: "pesquisa", label: "Pesquisa & Astrofísica" }, { key: "academico", label: "Acadêmico & Estudo" }, { key: "pessoal", label: "Pessoal & Vida" }];
      full.innerHTML = order.map((g) => {
        const items = D.REPOS.filter((r) => r.cat === g.key);
        if (!items.length) return "";
        return `<div class="cat"><h3 class="cat__title">${g.label} <span class="cat__count">${items.length}</span></h3><div class="cards">${items.map(cardHTML).join("")}</div></div>`;
      }).join("");
      wireCards(full);
    }
  }
  function renderBolsas() {
    const bl = document.getElementById("bolsaList");
    if (!bl) return;
    const b = D.BOLSAS || [];
    bl.innerHTML = b.map((x) => `
      <div class="bolsa reveal">
        <div class="bolsa__icon">${iconSVG(x.icon)}</div>
        <div class="bolsa__body">
          <div class="bolsa__head">
            <h3>${pick(x, "title")}</h3>
            <span class="bolsa__kind">${pick(x, "kind")}</span>
          </div>
          <div class="bolsa__meta">📅 ${x.period} &nbsp;·&nbsp; 🧭 ${t("bolsas.orientLabel")}: ${x.orient}</div>
          <p class="bolsa__desc">${pick(x, "desc")}</p>
        </div>
      </div>`).join("");
  }
  function renderContatos() {
    const cl = document.getElementById("contactList");
    if (!cl) return;
    const labels = t("contactLabels");
    cl.innerHTML = (D.CONTACTS || []).map((c) => {
      const label = (labels && labels[c.labelKey]) ? labels[c.labelKey] : c.labelKey;
      const inner = `${iconSVG(c.icon, "contact__ico")}<span class="contact__text"><span class="contact__label">${label}</span><span class="contact__value">${c.value}</span></span>`;
      return c.href ? `<a class="contact__item" href="${c.href}" target="_blank" rel="noopener">${inner}</a>` : `<div class="contact__item">${inner}</div>`;
    }).join("");
  }
  function renderResearch() {
    const rlist = document.getElementById("researchList");
    if (!rlist) return;
    rlist.innerHTML = (D.RESEARCH || []).map((r) => {
      const sum = (r.i18n && r.i18n[lang]) ? r.i18n[lang] : r.summary;
      const det = (r.i18n && r.i18n[lang]) ? r.i18n[lang] + "  Repositório: " + r.repo : r.details;
      return `
      <div class="acc reveal">
        <button class="acc__head" aria-expanded="false">
          <span class="acc__icon">${iconSVG(r.icon)}</span>
          <span class="acc__titles"><span class="acc__title">${r.title}</span><br><span class="acc__badge">${r.badge}</span></span>
          <span class="acc__chev">▾</span>
        </button>
        <div class="acc__summary">${sum}</div>
        <div class="acc__body"><p class="acc__detail">${det}</p></div>
      </div>`;
    }).join("");
    rlist.querySelectorAll(".acc").forEach((acc) => {
      const head = acc.querySelector(".acc__head");
      head.addEventListener("click", () => { const open = acc.classList.toggle("open"); head.setAttribute("aria-expanded", open ? "true" : "false"); });
    });
  }

  /* ============ 4. i18n: aplica texto estático ============ */
  function applyI18n() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (!val) return;
      if (el.hasAttribute("data-html")) el.innerHTML = Array.isArray(val) ? val.map((p) => `<p>${p}</p>`).join("") : val;
      else el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-nav]").forEach((el) => {
      const i = parseInt(el.getAttribute("data-i18n-nav"), 10);
      const arr = t("nav"); if (arr && arr[i]) el.textContent = arr[i];
    });
    const badges = document.getElementById("heroBadges");
    if (badges) badges.innerHTML = t("hero.badges").map((b) => `<span class="chip">${b}</span>`).join("");
    const note = document.getElementById("heroNote");
    if (note && D.EXTRA && D.EXTRA.hobby) note.textContent = t("hero.hobbyLabel") + D.EXTRA.hobby;
    document.querySelectorAll(".lang-btn").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  }
  function applyLang(l) {
    if (!I18N[l]) return;
    lang = l; localStorage.setItem("lang", l);
    applyI18n();
    renderCards(); renderBolsas(); renderContatos(); renderResearch();
  }

  /* ============ 5. init ============ */
  applyI18n();
  renderCards(); renderBolsas(); renderContatos(); renderResearch();

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  /* ============ 6. Reveal on scroll ============ */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ============ 7. Contadores ============ */
  const stats = document.querySelectorAll(".stat__num");
  const sio = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target, target = parseInt(el.dataset.count, 10) || 0, dur = 1100, start = performance.now();
      const step = (now) => { const p = Math.min((now - start) / dur, 1); el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target); if (p < 1) requestAnimationFrame(step); else el.textContent = target; };
      requestAnimationFrame(step); sio.unobserve(el);
    });
  }, { threshold: 0.6 });
  stats.forEach((s) => sio.observe(s));

  /* ============ 8. Nav ============ */
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const links = document.querySelector(".nav__links");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  if (toggle && links) {
    toggle.addEventListener("click", () => { const open = links.classList.toggle("open"); toggle.setAttribute("aria-expanded", open ? "true" : "false"); });
    links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }));
  }

  /* ============ 9. Starfield init ============ */
  if (starCanvas) {
    sizeStars(); window.addEventListener("resize", sizeStars);
    if (!reduceMotion) requestAnimationFrame(drawStars);
    else for (const s of stars) { sctx.beginPath(); sctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2); sctx.fillStyle = `hsla(${s.hue},90%,80%,0.8)`; sctx.fill(); }
  }

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
