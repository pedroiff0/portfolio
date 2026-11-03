#!/usr/bin/env node
// Grava os tours de tools/demos/tours.json em assets/media/<slug>/tour.webm + poster.webp.
// Uso: node tools/record_demos.js [slug ...]   (requer playwright e ffmpeg)
const { chromium } = require("playwright");
const { execFileSync } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const TOURS = JSON.parse(fs.readFileSync(path.join(__dirname, "demos", "tours.json"), "utf8"));
const SIZE = { width: 1280, height: 800 };
// Banners de cookie e modais de boas-vindas que encobrem o tour.
const DISMISS = /^(Aceitar todos|Aceitar tudo|Accept All|Somente necessárias|Pular, já conheço|Recusar opcionais)$/i;

async function dismiss(page) {
  for (let i = 0; i < 3; i++) {
    const btn = page.getByRole("button", { name: DISMISS }).first();
    if (!(await btn.isVisible().catch(() => false))) return;
    await btn.click({ timeout: 2000 }).catch(() => {});
    await page.waitForTimeout(300);
  }
}

async function record(slug, tour) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), `tour-${slug}-`));
  const browser = await chromium.launch();
  // Pré-aquecimento fora da gravação: aceita cookies e fecha modais uma vez (ficam salvos no contexto).
  const warm = await browser.newContext({ viewport: SIZE, colorScheme: "light", locale: "pt-BR" });
  const wp = await warm.newPage();
  for (const s of tour.steps) if (s.goto) { await wp.goto(s.goto, { waitUntil: "networkidle", timeout: 30000 }).catch(() => {}); await dismiss(wp); }
  const state = await warm.storageState();
  await warm.close();
  const rec = await browser.newContext({ viewport: SIZE, recordVideo: { dir: tmp, size: SIZE }, colorScheme: "light", locale: "pt-BR", storageState: state });
  const page = await rec.newPage();
  for (const s of tour.steps) {
    if (s.goto) { await page.goto(s.goto, { waitUntil: "networkidle", timeout: 30000 }).catch(() => {}); await dismiss(page); }
    if (s.scroll) await page.mouse.wheel(0, s.scroll);
    if (s.wait) await page.waitForTimeout(s.wait);
  }
  const raw = await page.video().path();
  await rec.close();
  await browser.close();

  const out = path.join(ROOT, "assets", "media", slug);
  fs.mkdirSync(out, { recursive: true });
  const webm = path.join(out, "tour.webm");
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", raw, "-vf", "scale=960:-2,fps=20",
    "-c:v", "libvpx-vp9", "-b:v", "0", "-crf", "42", "-row-mt", "1", "-an", webm]);
  const png = path.join(tmp, "poster.png");
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-ss", "1.6", "-i", raw, "-frames:v", "1", "-vf", "scale=640:-2", png]);
  execFileSync("python3", ["-c", `from PIL import Image; Image.open(${JSON.stringify(png)}).convert("RGB").save(${JSON.stringify(path.join(out, "poster.webp"))}, "WEBP", quality=78)`]);
  fs.rmSync(tmp, { recursive: true, force: true });
  const kb = (f) => Math.round(fs.statSync(f).size / 1024);
  console.log(`${slug}: tour.webm ${kb(webm)} KB, poster.webp ${kb(path.join(out, "poster.webp"))} KB`);
}

(async () => {
  const only = process.argv.slice(2);
  for (const [slug, tour] of Object.entries(TOURS)) {
    if (slug.startsWith("_") || (only.length && !only.includes(slug))) continue;
    await record(slug, tour);
  }
})();
