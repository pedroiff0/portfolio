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
      }
      await ctx.close();
    }
  } finally {
    await browser.close();
    srv.kill();
  }
  if (fail.length) { console.error("FALHOU:\n- " + fail.join("\n- ")); process.exit(1); }
  console.log("smoke ok");
})();
