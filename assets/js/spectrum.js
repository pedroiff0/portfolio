/* Espectro estelar interativo (portado da v1): linhas de absorção sobre o contínuo, cursor por slider. */
(function () {
  "use strict";

  const LINES = [
    { name: "Ca II K", lambda: 3933, el: "ca2" },
    { name: "Hδ", lambda: 4101, el: "h" },
    { name: "Hγ", lambda: 4340, el: "h" },
    { name: "Hβ", lambda: 4861, el: "h" },
    { name: "Mg I b", lambda: 5175, el: "mg" },
    { name: "Fe I", lambda: 5270, el: "fe" },
    { name: "Na I D", lambda: 5892, el: "na" },
    { name: "Hα", lambda: 6563, el: "h" },
    { name: "Ca II", lambda: 8542, el: "ca2" },
  ];
  const MIN = 3800, MAX = 8600;

  function rgb(nm) {
    let r = 0, g = 0, b = 0;
    if (nm < 440) { r = -(nm - 440) / 60; b = 1; }
    else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
    else if (nm < 510) { g = 1; b = -(nm - 510) / 20; }
    else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
    else if (nm < 645) { r = 1; g = -(nm - 645) / 65; }
    else if (nm <= 780) { r = 1; }
    else { r = 0.45; g = 0.05; b = 0.1; }
    let f = 1;
    if (nm < 420) f = 0.3 + 0.7 * (nm - 380) / 40;
    else if (nm > 700) f = Math.max(0.25, 0.3 + 0.7 * (780 - nm) / 80);
    return `rgb(${Math.round(255 * r * f)},${Math.round(255 * g * f)},${Math.round(255 * b * f)})`;
  }

  function mount(canvas, slider, info) {
    const ctx = canvas.getContext("2d");
    let t = null;

    function draw() {
      if (!t) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth, h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const band = h * 0.62;
      const css = getComputedStyle(canvas);
      for (let x = 0; x < w; x++) {
        ctx.fillStyle = rgb((MIN + (x / w) * (MAX - MIN)) / 10);
        ctx.fillRect(x, 0, 1, band);
      }
      ctx.font = `11px ${css.getPropertyValue("--font-mono") || "monospace"}`;
      ctx.textAlign = "center";
      LINES.forEach((l, i) => {
        const x = ((l.lambda - MIN) / (MAX - MIN)) * w;
        ctx.fillStyle = "rgba(0,0,0,0.85)";
        ctx.fillRect(x - 1.5, 0, 3, band);
        ctx.fillStyle = css.color;
        ctx.fillText(l.name, x, band + 16 + (i % 2) * 14);
      });
      const v = Number(slider.value);
      const cx = ((v - MIN) / (MAX - MIN)) * w;
      ctx.strokeStyle = css.getPropertyValue("--accent").trim() || "#6d28d9";
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, h); ctx.stroke();
      const hit = LINES.find((l) => Math.abs(l.lambda - v) < 45);
      info.textContent = hit ? `${v} Å · ${hit.name} · ${t.el[hit.el]}` : `${v} Å · ${t.continuum}`;
    }

    slider.addEventListener("input", draw);
    new ResizeObserver(draw).observe(canvas);
    new MutationObserver(draw).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", draw);
    return { setText(next) { t = next; draw(); } };
  }

  window.Spectrum = { mount };
})();
