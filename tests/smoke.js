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
        for (const l of ["pt", "en", "es", "fr"]) {
          await page.selectOption("#lang", l);
          heros.add(await page.textContent("#hero-sub"));
        }
        check(heros.size === 4, "os 4 idiomas não trocam o texto do hero");
        await page.selectOption("#lang", "pt");
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
        const tourBtn = page.locator("#repos .card", { has: page.locator(".card__media") }).first().getByRole("button").first();
        await tourBtn.click();
        check(await page.locator("#repos video").count() === 1, "ver tour não cria o vídeo");
        await page.locator('#repos [data-live="SpectraViewer"]').click();
        check(await page.isVisible("#live"), "dialog ao vivo não abriu");
        check((await page.getAttribute("#live-frame iframe", "src") || "").includes("spectraviewer"), "iframe ao vivo sem src");
        await page.click("#live-close");
        check(await page.locator("#live-frame iframe").count() === 0, "iframe não é descarregado ao fechar");
        check(await page.locator("#spectrum-canvas").count() === 1, "canvas do espectro ausente");
        check((await page.textContent("#spectrum-info")).includes("Å"), "espectro sem leitura");
        check(await page.locator("#gallery img").count() === 6, "galeria incompleta");
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
