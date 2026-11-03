#!/usr/bin/env node
// Grava os tours de tools/demos/tours.json em assets/media/<slug>/tour.webm + poster.webp.
// Captura por screencast CDP (JPEG q90 em 1.5x) e monta com ffmpeg: texto nítido, cursor visível, sem tela branca no início.
// Uso: node tools/record_demos.js [slug ...]   (requer playwright, ffmpeg e, para PDFs, pdftoppm)
//
// Passos de um tour (executados em ordem):
//   goto URL | "local:<caminho no repo>" | "pdf:<slug>"   waitFor seletor   wait ms
//   scroll px (suave)   scrollTo seletor   scrollIn [seletor, px]   click seletor   hover seletor
//   type [seletor, texto]   press tecla   start (corta tudo antes)   poster (quadro do poster)
// Campos do tour: steps, routes, readme {file, title} (gera a página "readme:<slug>"), pdf {file, pages, dpi, title} (gera a página "pdf:<slug>"), poster_at (s), tail (ms), scheme.
const { chromium } = require("playwright");
const { execFileSync } = require("child_process");
const fs = require("fs");
const http = require("http");
const os = require("os");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const TOURS = JSON.parse(fs.readFileSync(path.join(__dirname, "demos", "tours.json"), "utf8"));
const VIEW = { width: 1440, height: 900 };
const DPR = 1.5;
const OUT_W = 1280;
const DISMISS = /^(Aceitar todos|Aceitar tudo|Accept All|Accept all|Somente necessárias|Pular, já conheço|Recusar opcionais|Entendi)$/i;

const CURSOR = `(() => {
  if (window.__cursor) return; window.__cursor = 1;
  const add = () => {
    const c = document.createElement("div");
    c.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24"><path d="M4 2l15 11-6.5 1.2L16 21l-3 1.4-3.4-6.8L4 20z" fill="#111" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>';
    Object.assign(c.style, { position: "fixed", left: "0", top: "0", zIndex: 2147483647, pointerEvents: "none", transform: "translate(-200px,-200px)", filter: "drop-shadow(0 1px 2px rgba(0,0,0,.35))" });
    const ring = document.createElement("div");
    Object.assign(ring.style, { position: "fixed", width: "34px", height: "34px", margin: "-17px 0 0 -17px", borderRadius: "50%", border: "2px solid rgba(132,79,205,.85)", zIndex: 2147483646, pointerEvents: "none", opacity: "0", transform: "scale(.4)" });
    document.documentElement.append(c, ring);
    addEventListener("mousemove", (e) => { c.style.transform = "translate(" + (e.clientX - 3) + "px," + (e.clientY - 2) + "px)"; ring.style.left = e.clientX + "px"; ring.style.top = e.clientY + "px"; }, true);
    addEventListener("mousedown", () => { ring.style.transition = "none"; ring.style.opacity = "1"; ring.style.transform = "scale(.4)"; requestAnimationFrame(() => { ring.style.transition = "opacity .45s, transform .45s"; ring.style.opacity = "0"; ring.style.transform = "scale(1.2)"; }); }, true);
  };
  if (document.documentElement) add(); else addEventListener("DOMContentLoaded", add);
})();`;

// Servidor estático: / = repo do portfólio, /__pdf/<slug>/ = páginas renderizadas de PDF.
function serve(pdfRoot) {
  const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".webp": "image/webp", ".webm": "video/webm", ".json": "application/json", ".jpg": "image/jpeg" };
  const srv = http.createServer((req, res) => {
    let p = decodeURIComponent(req.url.split("?")[0]);
    const pdf = p.startsWith("/__pdf/");
    const base = pdf ? pdfRoot : ROOT;
    if (pdf) p = p.slice(6);
    if (p.endsWith("/")) p += "index.html";
    const f = path.join(base, path.normalize(p));
    if (!f.startsWith(base) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { "content-type": types[path.extname(f)] || "application/octet-stream" });
    fs.createReadStream(f).pipe(res);
  });
  return new Promise((r) => srv.listen(0, "127.0.0.1", () => r(srv)));
}

function buildPdf(slug, cfg, pdfRoot) {
  const dir = path.join(pdfRoot, slug);
  fs.mkdirSync(dir, { recursive: true });
  const files = (Array.isArray(cfg.file) ? cfg.file : [cfg.file]).map((f) => f.replace(/^~/, os.homedir()));
  // cfg.list = páginas escolhidas (1 arquivo); senão as cfg.pages primeiras de cada arquivo.
  const pages = cfg.list ? cfg.list.map((n) => [0, n, n]) : files.map((_, k) => [k, 1, cfg.pages || 6]);
  pages.forEach(([k, a, b], j) => execFileSync("pdftoppm", ["-png", "-r", String(cfg.dpi || 110), "-f", String(a), "-l", String(b), files[k], path.join(dir, `d${String(j).padStart(2, "0")}`)]));
  const imgs = fs.readdirSync(dir).filter((f) => f.endsWith(".png")).sort();
  const title = cfg.title || path.basename(files[0]);
  fs.writeFileSync(path.join(dir, "index.html"), `<!doctype html><meta charset="utf-8"><title>${title}</title>
<style>html{background:#2b2a33}body{margin:0;font:14px system-ui,sans-serif;color:#ddd}
.bar{position:sticky;top:0;z-index:2;display:flex;justify-content:space-between;align-items:center;padding:11px 24px;background:#38373f;box-shadow:0 1px 4px rgba(0,0,0,.4)}
.bar b{font-weight:600}.pages{display:flex;flex-direction:column;align-items:center;gap:24px;padding:28px 0 12vh}
.pages img{width:${cfg.width || 860}px;max-width:92vw;background:#fff;box-shadow:0 4px 18px rgba(0,0,0,.45);border-radius:2px}</style>
<div class="bar"><b>${title}</b><span>${imgs.length} páginas</span></div>
<div class="pages">${imgs.map((f, i) => `<img id="p${i + 1}" src="${f}" alt="">`).join("")}</div>`);
}

// README de repositório privado renderizado localmente (sem login no GitHub).
function buildReadme(slug, cfg, pdfRoot) {
  const dir = path.join(pdfRoot, slug);
  fs.mkdirSync(dir, { recursive: true });
  const file = cfg.file.replace(/^~/, os.homedir());
  const py = `import markdown,sys,html
import re
src=open(sys.argv[1],encoding="utf-8").read()
src=re.sub(r"(?is)<p[^>]*>\\s*<a[^>]*>\\s*<img[^>]*>\\s*</a>\\s*</p>","",src)
src="\\n".join(l for l in src.splitlines() if not re.match(r"\\s*(\\[!\\[|</?(div|p|a|img|br)\\b[^>]*>\\s*$)",l))
src=re.sub(r'(?m)^<h3 align="center">(.*?)</h3>',r"# \\1",src)
body=markdown.markdown(src,extensions=["tables","fenced_code","sane_lists"])
t=html.escape(sys.argv[3])
open(sys.argv[2],"w",encoding="utf-8").write('<!doctype html><meta charset="utf-8"><title>'+t+'</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown-light.min.css"><style>html{background:#f6f8fa}body{margin:0;font:14px system-ui,sans-serif}.bar{position:sticky;top:0;z-index:2;display:flex;gap:10px;align-items:center;padding:12px 28px;background:#fff;border-bottom:1px solid #d0d7de;color:#1f2328}.bar span{color:#59636e}.wrap{max-width:980px;margin:24px auto 12vh;background:#fff;border:1px solid #d0d7de;border-radius:6px;padding:32px 40px}</style><div class="bar"><b>'+t+'</b><span>README.md</span></div><div class="wrap"><article class="markdown-body">'+body+'</article></div>')`;
  execFileSync("python3", ["-c", py, file, path.join(dir, "index.html"), cfg.title || slug]);
}

async function smoothMove(page, pos, to, ms = 650) {
  const n = Math.max(8, Math.round(ms / 16));
  for (let i = 1; i <= n; i++) {
    const t = i / n, e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    await page.mouse.move(pos.x + (to.x - pos.x) * e, pos.y + (to.y - pos.y) * e);
    await page.waitForTimeout(16);
  }
  pos.x = to.x; pos.y = to.y;
}

async function center(page, sel) {
  const el = page.locator(sel).first();
  await el.scrollIntoViewIfNeeded({ timeout: 8000 }).catch(() => {});
  await page.waitForTimeout(250);
  const b = await el.boundingBox();
  if (!b) throw new Error(`seletor sem caixa: ${sel}`);
  return { x: b.x + Math.min(b.width / 2, 120), y: b.y + Math.min(b.height / 2, 20) };
}

async function dismiss(page) {
  for (let i = 0; i < 3; i++) {
    const btn = page.getByRole("button", { name: DISMISS }).first();
    if (!(await btn.isVisible().catch(() => false))) return;
    await btn.click({ timeout: 2000 }).catch(() => {});
    await page.waitForTimeout(300);
  }
}

// tour.routes = {"glob": "url"}: serve um recurso ausente da instância local (ex.: vendor não versionado) a partir de um CDN.
async function applyRoutes(ctx, routes) {
  for (const [glob, target] of Object.entries(routes || {})) {
    await ctx.route(glob, async (r) => r.fulfill({ response: await r.fetch({ url: target }) }));
  }
}

async function record(slug, tour, base, pdfRoot) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), `tour-${slug}-`));
  const url = (u) => u.startsWith("local:") ? base + "/" + u.slice(6) : u.startsWith("pdf:") || u.startsWith("readme:") ? `${base}/__pdf/${u.split(":")[1]}/` : u;
  if (tour.pdf) buildPdf(slug, tour.pdf, pdfRoot);
  if (tour.readme) buildReadme(slug, tour.readme, pdfRoot);
  const browser = await chromium.launch();
  const ctxOpts = { viewport: VIEW, deviceScaleFactor: DPR, colorScheme: tour.scheme || "light", locale: "pt-BR" };
  const warm = await browser.newContext(ctxOpts);
  await applyRoutes(warm, tour.routes);
  const wp = await warm.newPage();
  for (const s of tour.steps) if (s.goto) { await wp.goto(url(s.goto), { waitUntil: "networkidle", timeout: 45000 }).catch(() => {}); await dismiss(wp); }
  const state = await warm.storageState();
  await warm.close();

  const ctx = await browser.newContext({ ...ctxOpts, storageState: state });
  await applyRoutes(ctx, tour.routes);
  await ctx.addInitScript(CURSOR);
  const page = await ctx.newPage();
  const cdp = await ctx.newCDPSession(page);
  const frames = [];
  cdp.on("Page.screencastFrame", (f) => {
    const file = path.join(tmp, `f${String(frames.length).padStart(5, "0")}.jpg`);
    fs.writeFileSync(file, Buffer.from(f.data, "base64"));
    frames.push({ file, t: f.metadata.timestamp });
    cdp.send("Page.screencastFrameAck", { sessionId: f.sessionId }).catch(() => {});
  });
  await cdp.send("Page.startScreencast", { format: "jpeg", quality: 90, maxWidth: VIEW.width * DPR, maxHeight: VIEW.height * DPR });
  const now = () => Date.now() / 1000;
  const pos = { x: VIEW.width * 0.62, y: VIEW.height * 0.55 };
  const explicitStart = tour.steps.some((x) => x.start);
  let start = null, poster = null;
  for (const s of tour.steps) {
    if (s.goto) {
      await page.goto(url(s.goto), { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
      await dismiss(page);
      await page.mouse.move(pos.x, pos.y);
    }
    if (s.waitFor) await page.waitForSelector(s.waitFor, { state: "visible", timeout: 30000 });
    if (start === null && !explicitStart && (s.goto || s.waitFor)) { await page.waitForTimeout(300); start = now(); }
    if (s.start) start = now();
    if (s.scroll) { await page.evaluate((y) => window.scrollBy({ top: y, behavior: "smooth" }), s.scroll); await page.waitForTimeout(Math.min(1500, 500 + Math.abs(s.scroll) * 0.9)); }
    if (s.scrollTo) { await page.evaluate((q) => document.querySelector(q)?.scrollIntoView({ behavior: "smooth", block: "start" }), s.scrollTo); await page.waitForTimeout(1200); }
    if (s.scrollIn) { await page.evaluate(([q, y]) => document.querySelector(q)?.scrollBy({ top: y, behavior: "smooth" }), s.scrollIn); await page.waitForTimeout(1100); }
    if (s.hover) await smoothMove(page, pos, await center(page, s.hover));
    if (s.click) {
      await smoothMove(page, pos, await center(page, s.click));
      await page.waitForTimeout(150);
      await page.mouse.down(); await page.mouse.up();
      await page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => {});
    }
    if (s.type) { const [q, txt] = s.type; await smoothMove(page, pos, await center(page, q)); await page.click(q); await page.keyboard.type(txt, { delay: 75 }); }
    if (s.press) await page.keyboard.press(s.press);
    if (s.poster) poster = now();
    if (s.wait) await page.waitForTimeout(s.wait);
  }
  await page.waitForTimeout(tour.tail || 700);
  const end = now();
  await cdp.send("Page.stopScreencast").catch(() => {});
  await ctx.close();
  await browser.close();
  if (frames.length < 2) throw new Error("screencast sem quadros");

  start = start ?? frames[0].t;
  let i0 = frames.findIndex((f) => f.t >= start);
  if (i0 < 0) i0 = frames.length - 1;
  if (i0 > 0) i0 -= 1;
  const keep = frames.slice(i0);
  const list = keep.map((f, i) => {
    const t0 = Math.max(f.t, start), t1 = i + 1 < keep.length ? keep[i + 1].t : end;
    return `file '${f.file}'\nduration ${Math.max(0.001, t1 - t0).toFixed(4)}`;
  }).join("\n") + `\nfile '${keep[keep.length - 1].file}'\n`;
  const listFile = path.join(tmp, "list.txt");
  fs.writeFileSync(listFile, list);

  const out = path.join(ROOT, "assets", "media", slug);
  fs.mkdirSync(out, { recursive: true });
  const webm = path.join(out, "tour.webm");
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", listFile,
    "-vf", `scale=${OUT_W}:-2:flags=lanczos,fps=30,format=yuv420p`, "-c:v", "libvpx-vp9", "-b:v", "0", "-crf", String(tour.crf || 36),
    "-row-mt", "1", "-deadline", "good", "-cpu-used", "2", "-an", webm]);
  const pt = poster !== null ? poster : tour.poster_at !== undefined ? start + tour.poster_at : start + (end - start) * 0.35;
  const pf = [...keep].reverse().find((f) => f.t <= pt) || keep[0];
  execFileSync("python3", ["-c", `from PIL import Image; im=Image.open(${JSON.stringify(pf.file)}).convert("RGB"); im.thumbnail((960,960), Image.LANCZOS); im.save(${JSON.stringify(path.join(out, "poster.webp"))}, "WEBP", quality=80)`]);
  fs.rmSync(tmp, { recursive: true, force: true });
  const kb = (f) => Math.round(fs.statSync(f).size / 1024);
  console.log(`${slug}: ${(end - start).toFixed(1)} s, tour.webm ${kb(webm)} KB, poster.webp ${kb(path.join(out, "poster.webp"))} KB`);
}

(async () => {
  const only = process.argv.slice(2);
  const pdfRoot = fs.mkdtempSync(path.join(os.tmpdir(), "tour-pdf-"));
  const srv = await serve(pdfRoot);
  const base = `http://127.0.0.1:${srv.address().port}`;
  let failed = 0;
  try {
    for (const [slug, tour] of Object.entries(TOURS)) {
      if (slug.startsWith("_") || (only.length && !only.includes(slug))) continue;
      try { await record(slug, tour, base, pdfRoot); } catch (e) { failed++; console.error(`${slug}: FALHOU ${e.message.split("\n")[0]}`); }
    }
  } finally {
    srv.close();
    fs.rmSync(pdfRoot, { recursive: true, force: true });
  }
  process.exit(failed ? 1 : 0);
})();
