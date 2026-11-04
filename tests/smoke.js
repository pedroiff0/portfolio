// Smoke test da v2: sobe um servidor estático, abre a página e confere o essencial.
const { chromium } = require("playwright");
const { spawn } = require("child_process");
const path = require("path");

const PORT = 8099;
const URL = `http://127.0.0.1:${PORT}/`;
const SHOTS = process.env.SHOTS_DIR;
const VIEWS = [
  ["desktop-claro", { width: 1440, height: 900 }, "light"],
  ["desktop-escuro", { width: 1440, height: 900 }, "dark"],
  ["mobile-claro", { width: 375, height: 812 }, "light"],
  ["mobile-escuro", { width: 375, height: 812 }, "dark"],
];

(async () => {
  const srv = spawn("python3", ["-m", "http.server", String(PORT), "--bind", "127.0.0.1"], { cwd: path.join(__dirname, ".."), stdio: "ignore" });
  await new Promise((r) => setTimeout(r, 800));
  const browser = await chromium.launch();
  const fail = [];
  const check = (ok, msg) => { if (!ok) fail.push(msg); };
  try {
    for (const [name, vp, scheme] of VIEWS) {
      const ctx = await browser.newContext({ viewport: vp, colorScheme: scheme, locale: "pt-BR" });
      const page = await ctx.newPage();
      const errors = [];
      page.on("pageerror", (e) => errors.push(e.message));
      page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
      await page.goto(URL, { waitUntil: "networkidle" });
      check(errors.length === 0, `${name}: erros no console: ${errors.join(" | ")}`);
      const n = await page.evaluate(() => ({ repos: window.PORTFOLIO_DATA.REPOS.length, featured: window.PORTFOLIO_DATA.FEATURED.length }));
      check(await page.locator("#repos .card").count() === n.repos, `${name}: cards de repositório != REPOS.length`);
      check(await page.locator("#featured .card").count() === n.featured, `${name}: destaques incompletos`);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      check(overflow <= 0, `${name}: rolagem horizontal de ${overflow}px`);
      const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
      check(bg === (scheme === "dark" ? "rgb(15, 11, 24)" : "rgb(250, 248, 255)"), `${name}: fundo inesperado ${bg}`);
      if (SHOTS) await page.screenshot({ path: path.join(SHOTS, `${name}.png`), fullPage: name.startsWith("desktop") });
      if (name === "desktop-claro") {
        const heros = new Set();
        for (const l of ["pt", "en", "es", "fr", "it", "zh"]) {
          await page.click(`#lang button[data-lang="${l}"]`);
          heros.add(await page.textContent("#hero-sub"));
        }
        check(heros.size === 6, "os 6 idiomas não trocam o texto do hero");
        check(await page.evaluate(() => document.documentElement.lang) === "zh-CN", "lang do html não vira zh-CN");
        check((await page.getAttribute(".cv-prev img", "src") || "").includes("-zh-"), "prévia do CV não segue o idioma (zh)");
        await page.click('#lang button[data-lang="pt"]');
        check(await page.locator("#trophy-count").textContent() !== "0/8", "conquista de idioma não contou");
        await page.click("#cat-tabs button:nth-child(2)");
        const cats = await page.evaluate(() => new Set([...document.querySelectorAll("#repos .card")].map((c) => c.dataset.cat)).size);
        check(cats === 1, "filtro de categoria não filtra");
        await page.fill("#search", "zzzz-nada");
        check(await page.isVisible("#repos-empty"), "busca sem resultado não mostra aviso");
        await page.click("#theme");
        check(await page.evaluate(() => document.documentElement.dataset.theme) === "dark", "botão de tema não alterna");

        await page.fill("#search", "");
        await page.click("#cat-tabs button:nth-child(1)");
        check(await page.evaluate(() => { const i = document.querySelector("#hero-photo"); return i.complete && i.naturalWidth > 0; }), "foto do hero não carregou");
        const withImage = await page.evaluate(() => window.PORTFOLIO_DATA.REPOS.filter((r) => r.image).length);
        check(await page.locator("#repos .card__media img").count() === withImage, "posters dos projetos ausentes");
        await page.locator("#repos .card__play").first().click();
        check(await page.isVisible("#tour"), "ver tour não abre o diálogo em zoom");
        check(!!(await page.getAttribute("#tour-video", "src")), "tour sem vídeo carregado");
        await page.waitForTimeout(800);
        check(/^\d+:\d{2} \/ \d+:\d{2}$/.test(await page.textContent("#tour-time")), "painel do tour sem tempo");
        await page.keyboard.press("Escape");
        await page.waitForTimeout(250);
        check(!(await page.isVisible("#tour")) && !(await page.getAttribute("#tour-video", "src")), "fechar o tour não descarrega o vídeo");
        await page.keyboard.press("Control+k");
        check(await page.isVisible("#busca-input"), "Ctrl+K não abre a busca");
        await page.keyboard.type("relatex");
        check((await page.locator(".busca__card strong").first().textContent()) === "ReLaTeX", "busca não retorna o ReLaTeX em primeiro");
        await page.keyboard.press("Enter");
        await page.waitForTimeout(900);
        check(!(await page.isVisible("#busca-input")), "Enter não fecha a busca");
        check(await page.evaluate(() => { const c = document.querySelector('#repos [data-sid="p:ReLaTeX"]'); const r = c.getBoundingClientRect(); return r.top >= 0 && r.top < innerHeight && c.querySelector("details").open; }), "Enter não leva ao cartão nem abre os detalhes");
        await page.keyboard.press("Control+k");
        await page.fill("#busca-input", "#latex");
        const nTag = await page.locator(".busca__card").count();
        check(nTag > 1 && nTag <= 8, `busca por #tag inesperada (${nTag})`);
        await page.keyboard.press("Escape");
        check((await page.getAttribute(".cv-prev img", "src") || "").includes("-pt-"), "prévia do CV não segue o idioma (pt)");
        check(await page.evaluate(() => { const i = document.querySelector(".cv-prev img"); i.loading = "eager"; return i.decode().then(() => i.naturalWidth > 0).catch(() => false); }), "imagem da prévia do CV não carrega");
        await page.locator('#repos [data-live="SpectraViewer"]').click();
        check(await page.isVisible("#live"), "dialog ao vivo não abriu");
        check((await page.getAttribute("#live-frame iframe", "src") || "").includes("spectraviewer"), "iframe ao vivo sem src");
        await page.click("#live-close");
        check(await page.locator("#live-frame iframe").count() === 0, "iframe não é descarregado ao fechar");
        check(await page.locator("#spectrum-canvas").count() === 1, "canvas do espectro ausente");
        check((await page.textContent("#spectrum-info")).includes("Å"), "espectro sem leitura");
        const nEv = await page.evaluate(() => window.PORTFOLIO_DATA.EVENTS.length);
        check(await page.locator("#events .event").count() === nEv, "eventos incompletos");
        await page.locator(".events__thumb").first().click();
        check(await page.isVisible("#lightbox"), "lightbox não abriu");
        const src1 = await page.getAttribute("#lb-img", "src");
        await page.keyboard.press("ArrowRight");
        check(src1 !== await page.getAttribute("#lb-img", "src"), "lightbox não navega");
        await page.keyboard.press("Escape");
        check(!(await page.isVisible("#lightbox")), "lightbox não fecha");
        check(await page.locator("#cv-grid a").count() === 12, "CV sem os 6 idiomas");
        const t1 = await page.textContent("#clock-time");
        check(/^\d{2}:\d{2}:\d{2}$/.test(t1), "relógio fora do formato");
        await page.waitForTimeout(1100);
        check(t1 !== await page.textContent("#clock-time"), "relógio parado");
        await page.click("#reader");
        await page.waitForTimeout(450);
        check(await page.evaluate(() => getComputedStyle(document.querySelector(".sidebar")).opacity) === "0", "modo leitura não recolhe a sidebar");
        await page.reload({ waitUntil: "networkidle" });
        check(await page.evaluate(() => document.documentElement.getAttribute("reader-mode")) === "on", "modo leitura não persiste");
        await page.click("#reader-exit");
        check(await page.evaluate(() => document.documentElement.getAttribute("reader-mode")) === "off", "botão flutuante não sai do modo leitura");
        const semVideo = await page.evaluate(() => window.PORTFOLIO_DATA.REPOS.filter((r) => !r.video && !["dashboard-life", "hardcore-life", "anomaly_detection", "HardCoreLife (plataforma)", "Arquivo de Apostilas", "tg-agent-bridge"].includes(r.name)).map((r) => r.name));
        if (process.env.EXIGIR_VIDEOS) check(semVideo.length === 0, "projetos sem vídeo: " + semVideo.join(", "));
        check(await page.locator("#stats li").count() === 4, "faixa de números incompleta");
      }
      check(await page.locator("#sky").count() === 1, `${name}: canvas do céu ausente`);
      const nSocial = await page.evaluate(() => window.PORTFOLIO_DATA.CONTACTS.filter((c) => c.href).length);
      check(await page.locator("#side-links a[aria-label][href]").count() === nSocial, `${name}: links da sidebar sem href/aria-label`);
      check(await page.locator("#footer-social a[aria-label] svg use").count() === nSocial, `${name}: ícones do rodapé ausentes`);
      check(/\d{2}\/\d{2}\/\d{4}/.test(await page.textContent("#footer-updated")), `${name}: data de atualização ausente`);
      if (name.startsWith("desktop")) {
        await page.evaluate(() => window.scrollTo(0, 2500));
        await page.waitForTimeout(100);
        const top = await page.evaluate(() => document.querySelector(".sidebar").getBoundingClientRect().top);
        check(top >= 0 && top < 120, `${name}: sidebar não fica fixa ao rolar (top=${top})`);
        await page.evaluate(() => window.scrollTo(0, 0));
      } else {
        check(await page.isVisible("#menu summary") && !(await page.isVisible("#nav")), `${name}: menu móvel ausente`);
        await page.click("#menu summary");
        check(await page.isVisible("#nav-mobile a"), `${name}: menu móvel não abre`);
        await page.click("#nav-mobile a >> nth=1");
        check(!(await page.evaluate(() => document.querySelector("#menu").open)), `${name}: menu não fecha ao navegar`);
      }
      await ctx.close();
    }
    for (const w of [1024, 1280, 1366, 1600, 1920]) {
      const wctx = await browser.newContext({ viewport: { width: w, height: 900 } });
      const wp = await wctx.newPage();
      await wp.goto(URL, { waitUntil: "networkidle" });
      const g = await wp.evaluate(() => { const b = (s) => document.querySelector(s).getBoundingClientRect(); const n = document.querySelector("#nav"); return { l: b("#nav").left - b(".brand").right, r: b(".controls").left - b("#nav").right, o: n.scrollWidth - n.clientWidth }; });
      check(g.l >= 8 && g.r >= 8 && g.o <= 0, `${w}px: topbar sobreposta (${JSON.stringify(g)})`);
      await wctx.close();
    }
    const ictx = await browser.newContext({ viewport: { width: 1280, height: 800 }, locale: "it-IT" });
    const ip = await ictx.newPage();
    await ip.goto(URL, { waitUntil: "networkidle" });
    check(await ip.evaluate(() => document.documentElement.lang) === "it", "não abre em italiano com o sistema em it-IT");
    await ictx.close();
    const rctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, reducedMotion: "reduce" });
    const rp = await rctx.newPage();
    await rp.goto(URL, { waitUntil: "networkidle" });
    await rp.waitForTimeout(200);
    check(await rp.getAttribute("#sky", "data-animated") === "false", "céu anima mesmo com prefers-reduced-motion");
    await rctx.close();
  } finally {
    await browser.close();
    srv.kill();
  }
  if (fail.length) { console.error("FALHOU:\n- " + fail.join("\n- ")); process.exit(1); }
  console.log("smoke ok");
})();
