/* Céu estrelado discreto atrás do hero. Pausa fora da tela, com a aba oculta e com prefers-reduced-motion. */
(function () {
  "use strict";
  const canvas = document.getElementById("sky");
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  const N = 120;
  let stars = [];
  let visible = true;
  let raf = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.round(width * dpr));
    canvas.height = Math.max(1, Math.round(height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars = Array.from({ length: N }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.3,
      a: Math.random() * 0.6 + 0.2,
      s: Math.random() * 0.0015 + 0.0004,
      p: Math.random() * Math.PI * 2,
    }));
    draw(0);
  }

  function draw(t) {
    const { width, height } = canvas.getBoundingClientRect();
    const color = getComputedStyle(canvas).color;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = color;
    for (const s of stars) {
      ctx.globalAlpha = reduce.matches ? s.a : s.a * (0.55 + 0.45 * Math.sin(t * s.s + s.p));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function loop(t) {
    draw(t);
    raf = requestAnimationFrame(loop);
  }

  function update() {
    cancelAnimationFrame(raf);
    if (visible && !document.hidden && !reduce.matches) raf = requestAnimationFrame(loop);
    else draw(0);
  }

  canvas.dataset.animated = "false";
  const sync = () => { update(); canvas.dataset.animated = String(visible && !document.hidden && !reduce.matches); };
  new ResizeObserver(resize).observe(canvas);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; sync(); }).observe(canvas);
  }
  document.addEventListener("visibilitychange", sync);
  reduce.addEventListener("change", sync);
  new MutationObserver(() => draw(0)).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  resize();
  sync();
})();
