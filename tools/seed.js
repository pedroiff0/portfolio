#!/usr/bin/env node
/*
 * seed.js — Gera src/portfolio.md (fonte Markdown+YAML) a partir do
 * assets/js/projects.js atual. É um "congelamento" do conteúdo de hoje
 * para virar a fonte editável. Roda 1x (ou quando quiser re-sincronizar
 * do JS para o MD). O fluxo normal é MD -> JS (ver build.py).
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// Carrega projects.js com um shim de window.
global.window = {};
require(path.join(ROOT, 'assets/js/projects.js'));
const D = global.window.PORTFOLIO_DATA;

/* ---------- emissor YAML mínimo e robusto ---------- */
function yq(s) {
  if (typeof s !== 'string') return s;
  const esc = s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
               .replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\r/g, '');
  return '"' + esc + '"';
}
function isScalar(v) { return typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean'; }

function emit(node, indent) {
  const pad = '  '.repeat(indent);
  if (Array.isArray(node)) {
    if (node.length === 0) return pad + '[]\n';
    const allScalar = node.every(isScalar);
    if (allScalar && node.length <= 14 && node.every(v => String(v).length < 50)) {
      const body = node.map(v => isScalar(v) && typeof v === 'string' ? yq(v) : v).join(', ');
      return pad + '[ ' + body + ' ]\n';
    }
    let out = '';
    for (const item of node) {
      if (item !== null && typeof item === 'object') {
        const inner = emit(item, indent + 1).replace(/\n$/, '');
        const lines = inner.split('\n').filter(l => l !== '');
        const childPad = '  '.repeat(indent + 1);
        out += pad + '- ' + lines[0].slice(childPad.length) + '\n';
        for (let i = 1; i < lines.length; i++) out += lines[i] + '\n';
      } else {
        out += pad + '- ' + (typeof item === 'string' ? yq(item) : item) + '\n';
      }
    }
    return out;
  }
  if (node !== null && typeof node === 'object') {
    const keys = Object.keys(node);
    if (keys.length === 0) return pad + '{}\n';
    let out = '';
    for (const k of keys) {
      const v = node[k];
      const keyStr = /^[A-Za-z0-9_-]+$/.test(k) ? k : yq(k);
      if (v === null || v === undefined) { out += pad + keyStr + ':\n'; continue; }
      if (typeof v === 'object') {
        const inner = emit(v, indent + 1).replace(/\n$/, '');
        const firstLine = inner.split('\n')[0];
        if (Array.isArray(v)) {
          out += pad + keyStr + ':\n' + inner + '\n';
        } else if (!firstLine.startsWith('  '.repeat(indent + 1))) {
          out += pad + keyStr + ': ' + firstLine.trim() + '\n';
        } else {
          out += pad + keyStr + ':\n' + inner + '\n';
        }
      } else {
        out += pad + keyStr + ': ' + (typeof v === 'string' ? yq(v) : v) + '\n';
      }
    }
    return out;
  }
  return pad + (typeof node === 'string' ? yq(node) : node) + '\n';
}

/* ---------- monta a estrutura do MD ---------- */
const LANGS = ['pt', 'en', 'es', 'fr'];

const repos = D.REPOS.map(r => {
  const o = {
    name: r.name,
    cat: r.cat,
    visibility: r.visibility,
    icon: r.icon,
    repo: r.repo,
    stack: r.stack || [],
    tags: r.tags || [],
    brief: { pt: r.brief }
  };
  if (r.i18n) {
    for (const l of ['en', 'es', 'fr']) if (r.i18n[l]) o.brief[l] = r.i18n[l];
  }
  return o;
});

const featured = (D.FEATURED || []).map(f => f && f.name).filter(Boolean);

const bolsas = (D.BOLSAS || []).map(b => {
  const t = { pt: b.title }, k = { pt: b.kind }, dsc = { pt: b.desc };
  if (b.i18n) {
    for (const l of ['en', 'es', 'fr']) if (b.i18n[l]) {
      if (b.i18n[l].title) t[l] = b.i18n[l].title;
      if (b.i18n[l].kind) k[l] = b.i18n[l].kind;
      if (b.i18n[l].desc) dsc[l] = b.i18n[l].desc;
    }
  }
  return { title: t, icon: b.icon, kind: k, period: b.period, orient: b.orient, desc: dsc };
});

const contacts = (D.CONTACTS || []).map(c => ({
  icon: c.icon,
  labelKey: c.labelKey,
  value: c.value,
  href: c.href
}));

// I18N por-lang -> por-secao/por-lang (transposta p/ facilitar edição)
function transposeI18n() {
  const out = {};
  const I = D.I18N;
  const sections = ['nav', 'hero', 'sections', 'about', 'vis', 'cat', 'contactLabels', 'bolsas', 'footer'];
  for (const s of sections) {
    out[s] = {};
    for (const l of LANGS) {
      const src = I[l] ? I[l][s] : undefined;
      out[s][l] = JSON.parse(JSON.stringify(src)); // cópia
    }
  }
  return out;
}

const data = {
  full_name: D.FULL_NAME,
  orcid: D.ORCID,
  instagram: D.INSTAGRAM != null ? D.INSTAGRAM : undefined,
  featured: featured,
  extra: D.EXTRA,
  repos: repos,
  bolsas: bolsas,
  contacts: contacts,
  i18n: transposeI18n()
};

/* ---------- escreve o markdown ---------- */
const md =
`---
# =====================================================================
# PORTFOLIO — fonte editável (Markdown/YAML)
# Edite AQUI no Obsidian. O tools/build.py gera assets/js/projects.js
# idêntico, e o site (index.html + main.js) renderiza exatamente igual.
#
# Regras:
#  - brief/kind/title/desc/sobre textos têm 4 idiomas: pt, en, es, fr.
#  - 'pt' é o texto padrão (usado quando não há tradução).
#  - i18n.* controla menus, hero, títulos de seção, rodapé etc.
#  - não mexer em index.html / assets/css / assets/js/main.js.
# =====================================================================

${emit(data, 0).replace(/\n$/, '')}
---

<!--
  Este arquivo é a FONTE. O conteúdo acima (frontmatter YAML) vira
  assets/js/projects.js via:  python3 tools/build.py
  O HTML/CSS/JS do site consomem esse JS e montam o DOM — render idêntico.
  Commits passam por .git/hooks/pre-commit que re-gera o JS automaticamente.
-->
`;

const outPath = path.join(ROOT, 'src', 'portfolio.md');
fs.writeFileSync(outPath, md, 'utf8');
console.log('Gerado:', outPath, '(' + md.length + ' bytes)');
