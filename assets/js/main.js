/* ============================================================
   Pedro Rocha — Portfolio · main.js
   - Starfield canvas animado
   - Revelar ao rolar (scroll reveal)
   - Accordions (projetos + pesquisa) — conteúdo "invisível" até clicar
   - Navegação responsiva
   - Contadores de estatísticas
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 1. Starfield ---------- */
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");
  let stars = [];
  let w, h, dpr;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = window.innerWidth * dpr;
    h = canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    const count = Math.min(220, Math.floor((window.innerWidth * window.innerHeight) / 9000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 0.8 + 0.2,
      r: (Math.random() * 1.4 + 0.3) * dpr,
      tw: Math.random() * Math.PI * 2,
      hue: Math.random() < 0.2 ? 270 : (Math.random() < 0.5 ? 210 : 200),
    }));
  }

  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      const tw = 0.55 + 0.45 * Math.sin(s.tw + t * 0.0015 * s.z);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${s.hue}, 90%, ${70 + tw * 20}%, ${0.5 + tw * 0.5})`;
      ctx.fill();
      s.y += s.z * 0.12 * dpr;
      if (s.y > h) { s.y = 0; s.x = Math.random() * w; }
      s.tw += 0.02;
    }
    requestAnimationFrame(draw);
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  resize();
  window.addEventListener("resize", resize);
  if (!reduceMotion) requestAnimationFrame(draw);
  else { // desenho estático
    for (const s of stars) {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${s.hue}, 90%, 80%, 0.8)`;
      ctx.fill();
    }
  }

  /* ---------- 2. Monte os cards de projeto ---------- */
  const D = window.PORTFOLIO_DATA || { PROJECTS: [], RESEARCH: [] };
  const grid = document.getElementById("projectGrid");
  if (grid) {
    grid.innerHTML = D.PROJECTS.map((p) => `
      <article class="card reveal" data-card>
        <div class="card__top">
          <div class="card__icon">${p.icon}</div>
          <div>
            <div class="card__title">${p.title}</div>
            <div class="card__tag">${p.tag}</div>
          </div>
        </div>
        <p class="card__summary">${p.summary}</p>
        <div class="card__stack">${p.stack.map((s) => `<span class="tagp">${s}</span>`).join("")}</div>
        <div class="card__more">Detalhes <span class="chev">▾</span></div>
        <div class="card__detail">
          <p>${p.details}</p>
          <a class="card__repo" href="${p.repo}" target="_blank" rel="noopener">↗ Ver repositório no GitHub</a>
        </div>
      </article>`).join("");

    grid.querySelectorAll("[data-card]").forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("a")) return; // não fecha ao clicar no link
        card.classList.toggle("open");
      });
    });
  }

  /* ---------- 3. Accordion de pesquisa ---------- */
  const rlist = document.getElementById("researchList");
  if (rlist) {
    rlist.innerHTML = D.RESEARCH.map((r) => `
      <div class="acc reveal">
        <button class="acc__head" aria-expanded="false">
          <span class="acc__icon">${r.icon}</span>
          <span class="acc__titles">
            <span class="acc__title">${r.title}</span><br>
            <span class="acc__badge">${r.badge}</span>
          </span>
          <span class="acc__chev">▾</span>
        </button>
        <div class="acc__summary">${r.summary}</div>
        <div class="acc__body">
          <p class="acc__detail">${r.details}</p>
        </div>
      </div>`).join("");

    rlist.querySelectorAll(".acc").forEach((acc) => {
      const head = acc.querySelector(".acc__head");
      head.addEventListener("click", () => {
        const open = acc.classList.toggle("open");
        head.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  /* ---------- 4. Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ---------- 5. Contadores de stats ---------- */
  const stats = document.querySelectorAll(".stat__num");
  const sio = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = parseInt(el.dataset.count, 10) || 0;
      const dur = 1100;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target;
      };
      requestAnimationFrame(step);
      sio.unobserve(el);
    });
  }, { threshold: 0.6 });
  stats.forEach((s) => sio.observe(s));

  /* ---------- 6. Nav: scrolled + menu mobile ---------- */
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
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------- 7. Ano no footer ---------- */
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
