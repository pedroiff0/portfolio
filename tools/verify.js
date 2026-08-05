#!/usr/bin/env node
/*
 * verify.js — Validação semântica do build.
 * Compara o window.PORTFOLIO_DATA gerado (assets/js/projects.js) com o
 * original (assets/js/projects.js.orig). O arquivo NÃO precisa ser
 * byte-a-byte igual; o que importa é o objeto ser semanticamente igual,
 * pois é ele que o main.js consome para montar o DOM (render idêntico).
 *
 * Exit 0 = idêntico; Exit 1 = diferença.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

function loadData(file) {
  const src = fs.readFileSync(file, 'utf8');
  const fn = new Function('window', src + '\nreturn window.PORTFOLIO_DATA;');
  const win = {};
  fn(win);
  return win.PORTFOLIO_DATA;
}

function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (a === null || b === null) return a === b;
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) if (!deepEqual(a[i], b[i])) return false;
    return true;
  }
  if (typeof a === 'object') {
    const ka = Object.keys(a), kb = Object.keys(b);
    if (ka.length !== kb.length) return false;
    for (const k of ka) {
      if (!Object.prototype.hasOwnProperty.call(b, k)) return false;
      if (!deepEqual(a[k], b[k])) return false;
    }
    return true;
  }
  return a === b;
}

function summarize(diff) {
  return diff;
}

const orig = loadData(path.join(ROOT, 'assets/js/projects.js.orig'));
const gen = loadData(path.join(ROOT, 'assets/js/projects.js'));

// Campos de comparação (PORTFOLIO_DATA inteiro)
const keys = ['FULL_NAME', 'ORCID', 'REPOS', 'FEATURED', 'RESEARCH', 'BOLSAS', 'CONTACTS', 'EXTRA', 'I18N'];
let ok = true;
const problems = [];
for (const k of keys) {
  if (!deepEqual(orig[k], gen[k])) {
    ok = false;
    problems.push(k);
  }
}

if (ok) {
  console.log('OK: window.PORTFOLIO_DATA gerado == original (render será idêntico).');
  process.exit(0);
} else {
  console.error('DIFERENÇA em: ' + problems.join(', '));
  // relatório detalhado por campo
  for (const k of problems) {
    console.error('-- ' + k + ' --');
    console.error('orig: ' + JSON.stringify(orig[k]).slice(0, 300));
    console.error('gen : ' + JSON.stringify(gen[k]).slice(0, 300));
  }
  process.exit(1);
}
