/* ============================================================
   Pedro Rocha — Portfolio · main.js
   - Starfield + GALÁXIAS ROTACIONANDO (canvas) com interação do mouse
   - Revelar ao rolar (scroll reveal)
   - Cartões de projeto (featured) + grade completa por categoria
   - Accordion de pesquisa e lista de bolsas
   - Contatos dinâmicos, navegação responsiva, contadores
   ============================================================ */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const D = window.PORTFOLIO_DATA || { REPOS: [], FEATURED: [], RESEARCH: [], BOLSAS: [], CONTACTS: [] };

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
      x: Math.random() * sw, y: Math.random() * sh,
      z: Math.random() * 0.8 + 0.2, r: (Math.random() * 1.4 + 0.3) * sdpr,
      tw: Math.random() * Math.PI * 2,
      hue: Math.random() < 0.2 ? 270 : (Math.random() < 0.5 ? 210 : 200),
    }));
  }

  function drawStars(t) {
    sctx.clearRect(0, 0, sw, sh);
    for (const s of stars) {
      const tw = 0.55 + 0.45 * Math.sin(s.tw + t * 0.0015 * s.z);
      sctx.beginPath();
      sctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2);
      sctx.fillStyle = `hsla(${s.hue},90%,${70 + tw * 20}%,${0.5 + tw * 0.5})`;
      sctx.fill();
      s.y += s.z * 0.12 * sdpr;
      if (s.y > sh) { s.y = 0; s.x = Math.random() * sw; }
      s.tw += 0.02;
    }
    requestAnimationFrame(drawStars);
  }

  /* ============ 2. GALÁXIAS ROTACIONANDO (mouse interact) ============ */
  const galCanvas = document.getElementById("galaxies");
  let gctx, gw, gh, gdpr, galaxies = [], mx = 0, my = 0, tmx = 0, tmy = 0;

  function buildGalaxies() {
    const palette = [
      ["#6ea8fe", "#b692ff"], ["#5eead4", "#6ea8fe"],
      ["#ffd479", "#b692ff"], ["#ff8fb1", "#6ea8fe"],
    ];
    const n = window.innerWidth < 700 ? 2 : 3;
    galaxies = Array.from({ length: n }, (_, i) => {
      const base = palette[i % palette.length];
      return {
        cx: (i + 1) / (n + 1),
        cy: 0.3 + (i % 2) * 0.4,
        R: Math.min(window.innerWidth, window.innerHeight) * (0.16 + Math.random() * 0.06),
        arms: 2 + (i % 2),
        rot: Math.random() * Math.PI * 2,
        spin: (Math.random() < 0.5 ? 1 : -1) * (0.0006 + Math.random() * 0.0006),
        hueA: base[0], hueB: base[1],
        stars: Array.from({ length: 260 }, () => {
          const a = Math.random() * Math.PI * 2;
          const rad = Math.pow(Math.random(), 0.5);
          return { a, rad, sz: Math.random() * 1.6 + 0.4, tw: Math.random() * Math.PI * 2 };
        }),
      };
    });
  }

  function sizeGalaxies() {
    gdpr = Math.min(window.devicePixelRatio || 1, 2);
    gw = galCanvas.width = window.innerWidth * gdpr;
    gh = galCanvas.height = window.innerHeight * gdpr;
    galCanvas.style.width = window.innerWidth + "px";
    galCanvas.style.height = window.innerHeight + "px";
    buildGalaxies();
  }

  function drawGalaxies(t) {
    gctx.clearRect(0, 0, gw, gh);
    mx += (tmx - mx) * 0.06;
    my += (tmy - my) * 0.06;
    const par = 26 * gdpr;
    for (const g of galaxies) {
      const cx = (g.cx * gw) + mx * par;
      const cy = (g.cy * gh) + my * par * 0.6;
      g.rot += g.spin;
      // núcleo
      const grad = gctx.createRadialGradient(cx, cy, 0, cx, cy, g.R * 0.55);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.18, g.hueA);
      grad.addColorStop(0.6, g.hueB);
      grad.addColorStop(1, "rgba(0,0,0,0)");
      gctx.fillStyle = grad;
      gctx.beginPath();
      gctx.arc(cx, cy, g.R * 0.55, 0, Math.PI * 2);
      gctx.fill();
      // brilho do núcleo
      const core = gctx.createRadialGradient(cx, cy, 0, cx, cy, g.R * 0.18);
      core.addColorStop(0, "rgba(255,255,255,0.95)");
      core.addColorStop(1, "rgba(255,255,255,0)");
      gctx.fillStyle = core;
      gctx.beginPath();
      gctx.arc(cx, cy, g.R * 0.18, 0, Math.PI * 2);
      gctx.fill();
      // braços de estrelas
      for (const s of g.stars) {
        const arm = Math.floor(s.a / (Math.PI * 2 / g.arms)) * (Math.PI * 2 / g.arms);
        const ang = arm + s.rad * 3.4 + g.rot;
        const rad = s.rad * g.R;
        const x = cx + Math.cos(ang) * rad;
        const y = cy + Math.sin(ang) * rad * 0.42;
        const tw = 0.5 + 0.5 * Math.sin(s.tw + t * 0.002);
        gctx.beginPath();
        gctx.arc(x, y, (s.sz + 0.4) * gdpr, 0, Math.PI * 2);
        gctx.fillStyle = `rgba(230,238,255,${0.45 + tw * 0.55})`;
        gctx.fill();
      }
    }
    requestAnimationFrame(drawGalaxies);
  }

  if (galCanvas) {
    gctx = galCanvas.getContext("2d");
    sizeGalaxies();
    window.addEventListener("resize", sizeGalaxies);
    window.addEventListener("mousemove", (e) => {
      tmx = (e.clientX / window.innerWidth - 0.5) * 2;
      tmy = (e.clientY / window.innerHeight - 0.5) * 2;
    });
    window.addEventListener("mouseleave", () => { tmx = 0; tmy = 0; });
    if (!reduceMotion) requestAnimationFrame(drawGalaxies);
    else drawGalaxies(0);
  }

  /* ============ 3. RENDER: cartões ============ */
  const cardHTML = (p) => `
    <article class="card reveal" data-card>
      <div class="card__top">
        <div class="card__icon">${p.icon}</div>
        <div>
          <div class="card__title">${p.name}</div>
          <div class="card__tag">${p.visibility === "público" ? "Público" : "Privado"} · ${p.cat}</div>
        </div>
      </div>
      <p class="card__summary">${p.brief}</p>
      <div class="card__stack">${(p.tags || []).map((s) => `<span class="tagp">${s}</span>`).join("")} ${(p.stack || []).slice(0, 4).map((s) => `<span class="tagp tagp--tech">${s}</span>`).join("")}</div>
      <div class="card__more">Detalhes <span class="chev">▾</span></div>
      <div class="card__detail">
        <p>${p.brief}</p>
        <a class="card__repo" href="${p.repo}" target="_blank" rel="noopener">↗ Ver repositório no GitHub</a>
      </div>
    </article>`;

  function wireCards(scope) {
    scope.querySelectorAll("[data-card]").forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        card.classList.toggle("open");
      });
    });
  }

  const grid = document.getElementById("projectGrid");
  if (grid) {
    grid.innerHTML = (D.FEATURED.length ? D.FEATURED : D.REPOS.slice(0, 4)).map(cardHTML).join("");
    wireCards(grid);
  }

  const full = document.getElementById("allRepos");
  if (full) {
    const order = [
      { key: "software", label: "Software & Sistemas" },
      { key: "pesquisa", label: "Pesquisa & Astrofísica" },
      { key: "academico", label: "Acadêmico & Estudo" },
      { key: "pessoal", label: "Pessoal & Vida" },
    ];
    full.innerHTML = order.map((g) => {
      const items = D.REPOS.filter((r) => r.cat === g.key);
      if (!items.length) return "";
      return `<div class="cat"><h3 class="cat__title">${g.label} <span class="cat__count">${items.length}</span></h3>
        <div class="cards">${items.map(cardHTML).join("")}</div></div>`;
    }).join("");
    wireCards(full);
  }

  /* ============ 4. Bolsas ============ */
  const bl = document.getElementById("bolsaList");
  if (bl) {
    bl.innerHTML = D.BOLSAS.map((b) => `
      <div class="bolsa reveal">
        <div class="bolsa__icon">${b.icon}</div>
        <div class="bolsa__body">
          <div class="bolsa__head">
            <h3>${b.title}</h3>
            <span class="bolsa__kind">${b.kind}</span>
          </div>
          <div class="bolsa__meta">📅 ${b.period} &nbsp;·&nbsp; 🧭 Orientação: ${b.orient}</div>
          <p class="bolsa__desc">${b.desc}</p>
        </div>
      </div>`).join("");
  }

  /* ============ 5. Accordion pesquisa ============ */
  const rlist = document.getElementById("researchList");
  if (rlist) {
    rlist.innerHTML = D.RESEARCH.map((r) => `
      <div class="acc reveal">
        <button class="acc__head" aria-expanded="false">
          <span class="acc__icon">${r.icon}</span>
          <span class="acc__titles"><span class="acc__title">${r.title}</span><br>
          <span class="acc__badge">${r.badge}</span></span>
          <span class="acc__chev">▾</span>
        </button>
        <div class="acc__summary">${r.summary}</div>
        <div class="acc__body"><p class="acc__detail">${r.details}</p></div>
      </div>`).join("");
    rlist.querySelectorAll(".acc").forEach((acc) => {
      const head = acc.querySelector(".acc__head");
      head.addEventListener("click", () => {
        const open = acc.classList.toggle("open");
        head.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  /* ============ 6. Contatos ============ */
  const cl = document.getElementById("contactList");
  if (cl) {
    cl.innerHTML = D.CONTACTS.map((c) => {
      const inner = `<span class="contact__icon">${c.icon}</span>
        <span class="contact__label">${c.label}</span>
        <span class="contact__value">${c.value}</span>`;
      return c.href
        ? `<a class="contact__item" href="${c.href}" target="_blank" rel="noopener">${inner}</a>`
        : `<div class="contact__item">${inner}</div>`;
    }).join("");
  }

  /* ============ 7. Reveal on scroll ============ */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ============ 8. Contadores ============ */
  const stats = document.querySelectorAll(".stat__num");
  const sio = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = parseInt(el.dataset.count, 10) || 0;
      const dur = 1100, start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
        if (p < 1) requestAnimationFrame(step); else el.textContent = target;
      };
      requestAnimationFrame(step);
      sio.unobserve(el);
    });
  }, { threshold: 0.6 });
  stats.forEach((s) => sio.observe(s));

  /* ============ 9. Nav ============ */
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const links = document.querySelector(".nav__links");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); })
    );
  }

  /* ============ 10. Starfield init ============ */
  if (starCanvas) {
    sizeStars();
    window.addEventListener("resize", sizeStars);
    if (!reduceMotion) requestAnimationFrame(drawStars);
    else for (const s of stars) { sctx.beginPath(); sctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2); sctx.fillStyle = `hsla(${s.hue},90%,80%,0.8)`; sctx.fill(); }
  }

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
