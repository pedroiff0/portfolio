#!/usr/bin/env node
/*
 * seed_md.js — Gera src/portfolio.md (formato LIMPO) a partir do
 * assets/js/projects.js atual. Congela o conteúdo de hoje num MD fácil
 * de editar no Obsidian. Roda 1x (ou para re-sincronizar JS->MD).
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
// Carrega a fonte de verdade: projects.js.orig (snapshot estável do site),
// NUNCA o projects.js gerado (pode estar corrompido por um build falho).
const SRC = fs.readFileSync(path.join(ROOT, 'assets/js/projects.js.orig'), 'utf8');
global.window = {};
new Function('window', SRC + '\nwindow.PORTFOLIO_DATA = window.PORTFOLIO_DATA || PORTFOLIO_DATA;')(global.window);
const D = global.window.PORTFOLIO_DATA;
const LANGS = ['pt', 'en', 'es', 'fr'];
const FLAG = { pt: '🇧🇷', en: '🇺🇸', es: '🇪🇸', fr: '🇫🇷' };

function esc(s) { return String(s).replace(/\|/g, '\\|'); }

// ---- YAML mínimo p/ bloco i18n ----
function yq(s) {
  if (typeof s !== 'string') return s;
  const e = s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\r/g, '');
  return '"' + e + '"';
}
function isScalar(v) { return typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || v === null; }
function emit(node, indent) {
  const pad = '  '.repeat(indent);
  if (Array.isArray(node)) {
    if (!node.length) return pad + '[]\n';
    if (node.every(isScalar) && node.length <= 14 && node.every(v => String(v).length < 50))
      return pad + '[ ' + node.map(v => typeof v === 'string' ? yq(v) : v).join(', ') + ' ]\n';
    let o = '';
    for (const it of node) {
      if (it !== null && typeof it === 'object') {
        const inner = emit(it, indent + 1).replace(/\n$/, '');
        const lines = inner.split('\n').filter(l => l !== '');
        const cp = '  '.repeat(indent + 1);
        o += pad + '- ' + lines[0].slice(cp.length) + '\n' + lines.slice(1).join('\n') + '\n';
      } else o += pad + '- ' + (typeof it === 'string' ? yq(it) : it) + '\n';
    }
    return o;
  }
  if (node !== null && typeof node === 'object') {
    const ks = Object.keys(node);
    if (!ks.length) return pad + '{}\n';
    let o = '';
    for (const k of ks) {
      const v = node[k];
      const key = /^[A-Za-z0-9_-]+$/.test(k) ? k : yq(k);
      if (v === null || v === undefined) { o += pad + key + ':\n'; continue; }
      if (typeof v === 'object') {
        const inner = emit(v, indent + 1).replace(/\n$/, '');
        o += pad + key + ':\n' + inner + '\n';
      } else o += pad + key + ': ' + (typeof v === 'string' ? yq(v) : v) + '\n';
    }
    return o;
  }
  return pad + (typeof node === 'string' ? yq(node) : node) + '\n';
}
function transposeI18n() {
  const out = {}; const I = D.I18N;
  const sections = ['nav', 'hero', 'sections', 'about', 'vis', 'cat', 'contactLabels', 'bolsas', 'footer'];
  for (const s of sections) { out[s] = {}; for (const l of LANGS) out[s][l] = JSON.parse(JSON.stringify(I[l] ? I[l][s] : undefined)); }
  return out;
}

// instagram real vem do EXTRA.instagram no .orig
const INSTAGRAM = (D.EXTRA && D.EXTRA.instagram) || D.INSTAGRAM || '';

// ---- monta MD limpo ----
const EXEMPLO = `
## COMO EDITAR (pode apagar este bloco depois)
Copie um card abaixo, cole e troque os textos. Regras:
  - Cada projeto = um bloco "### Nome do Projeto" (a linha com ### é o título).
  - Campos de 1 linha: repo:, stack:, tags:, cat:, visibility:, icon:
      stack e tags: separem por vírgula.
  - Texto: 🇧🇷 é OBRIGATÓRIO. 🇺🇸 🇪🇸 🇫🇷 são opcionais (se faltar, o site usa o 🇧🇷).
  - cat: software | pesquisa | academico | pessoal
  - visibility: público | privado
  - icon: cash | academic | quiz | web | latex | star | globe | github | teacher | exam | leaf | box | table | function | formula | life | dashboard | profile  (ou outro nome de ícone existente em assets/js/main.js)
  - NÃO mexa em index.html / assets/css/style.css / assets/js/main.js.
  - Depois de editar: python3 tools/build.py  (ou só commitar — o pre-commit já gera).

### Nome do Projeto (MODELO — copie daqui p/ baixo)
repo: https://github.com/pedroiff0/SEU-REPO
stack: Node.js, Express, MongoDB
tags: Tag1, Tag2, Tag3
cat: software
visibility: privado
icon: star

🇧🇷 Descreva o projeto em português aqui.
🇺🇸 Describe the project in English here.
🇪🇸 Describe el proyecto en español aquí.
🇫🇷 Décrivez le projet en français ici.
`;

let md = '';
md += '# Portfolio — fonte editável (Markdown)\n';
md += '\n';
md += EXEMPLO + '\n';
md += '## Metadados\n';
md += 'full_name: ' + D.FULL_NAME + '\n';
md += 'orcid: ' + D.ORCID + '\n';
md += 'instagram: ' + INSTAGRAM + '\n';
md += 'featured: ' + (D.FEATURED || []).map(f => f.name).join(', ') + '\n';
md += '\n';
md += '## Projetos\n';
for (const r of D.REPOS) {
  md += '\n';
  md += '### ' + r.name + '\n';
  md += 'repo: ' + r.repo + '\n';
  md += 'stack: ' + (r.stack || []).join(', ') + '\n';
  md += 'tags: ' + (r.tags || []).join(', ') + '\n';
  md += 'cat: ' + r.cat + '\n';
  md += 'visibility: ' + r.visibility + '\n';
  md += 'icon: ' + r.icon + '\n';
  md += '\n';
  md += FLAG.pt + ' ' + esc(r.brief) + '\n';
  for (const l of ['en', 'es', 'fr']) if (r.i18n && r.i18n[l]) md += FLAG[l] + ' ' + esc(r.i18n[l]) + '\n';
}
md += '\n';
md += '## Bolsas\n';
for (const b of (D.BOLSAS || [])) {
  md += '\n';
  const t = { pt: b.title }; if (b.i18n) for (const l of ['en','es','fr']) if (b.i18n[l] && b.i18n[l].title) t[l] = b.i18n[l].title;
  md += '### ' + (Object.keys(t).length > 1
    ? LANGS.filter(l => t[l]).map(l => FLAG[l] + ' ' + esc(t[l])).join(' | ')
    : t.pt) + '\n';
  md += 'icon: ' + b.icon + '\n';
  const k = { pt: b.kind }; if (b.i18n) for (const l of ['en','es','fr']) if (b.i18n[l] && b.i18n[l].kind) k[l] = b.i18n[l].kind;
  md += 'kind: ' + (Object.keys(k).length > 1 ? LANGS.filter(l => k[l]).map(l => FLAG[l] + ' ' + esc(k[l])).join(' | ') : (k.pt || '')) + '\n';
  md += 'period: ' + (b.period || '') + '\n';
  md += 'orient: ' + (b.orient || '') + '\n';
  const d = { pt: b.desc }; if (b.i18n) for (const l of ['en','es','fr']) if (b.i18n[l] && b.i18n[l].desc) d[l] = b.i18n[l].desc;
  md += 'desc: ' + (Object.keys(d).length > 1 ? LANGS.filter(l => d[l]).map(l => FLAG[l] + ' ' + esc(d[l])).join(' | ') : (d.pt || '')) + '\n';
}
md += '\n';
md += '## Contatos\n';
for (const c of (D.CONTACTS || [])) {
  md += `- icon: ${c.icon} | labelKey: ${c.labelKey} | value: ${c.value}` + (c.href ? ` | href: ${c.href}` : '') + '\n';
}
md += '\n';
md += '## Extra\n';
if (D.EXTRA) {
  for (const key of ['instagram', 'hobby', 'grade', 'nickname']) {
    if (D.EXTRA[key] !== undefined) md += key + ': ' + D.EXTRA[key] + '\n';
  }
}

// Interface (menu/navegação) vai para arquivo SEPARADO src/interface.yaml
// (quase não se mexe; fica fora do MD editável).
const i18nYaml = '# Textos de interface (menu, hero, seções, sobre, labels, rodapé).\n' +
  '# Quase não se edita. Em caso de dúvida, não mexer.\n' +
  emit(transposeI18n(), 0).replace(/\n$/, '') + '\n';
fs.writeFileSync(path.join(ROOT, 'src', 'interface.yaml'), i18nYaml, 'utf8');

const outPath = path.join(ROOT, 'src', 'portfolio.md');
fs.writeFileSync(outPath, md, 'utf8');
console.log('Gerado (limpo):', outPath, '(' + md.length + ' bytes)');
