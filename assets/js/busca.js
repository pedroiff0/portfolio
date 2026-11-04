/* Busca no estilo do quartz-site: Ctrl/⌘+K ou "/", termos por prefixo sem acento, título > tags > conteúdo,
   "#" busca só por tags, CJK por caractere, destaque e trecho de ~30 palavras, ↑/↓/Tab e Enter. Sem dependências. */
(function () {
  "use strict";
  const MAX = 8;
  const CJK = /[぀-ヿ㐀-䶿一-鿿豈-﫿]/;
  const $ = (s) => document.getElementById(s);
  const norm = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  function tokens(s) {
    const out = [];
    for (const w of norm(s).match(/[\p{L}\p{N}]+/gu) || []) {
      if (CJK.test(w)) for (const ch of w) out.push(ch); else out.push(w);
    }
    return out;
  }

  let docs = [], ui = {}, results = [], focus = 0, onGo = () => {}, lastQuery = "";

  function setDocs(list, strings) {
    ui = strings || ui;
    docs = list.map((d) => ({ ...d, tTitle: tokens(d.title), tTags: (d.tags || []).flatMap(tokens), tText: tokens(d.text) }));
    $("busca-input").placeholder = ui.searchPh || "";
    $("busca-input").setAttribute("aria-label", ui.search || "Buscar");
    if ($("busca").open) run($("busca-input").value);
  }

  function hit(list, term) {
    let best = 0;
    for (const t of list) {
      if (t === term) return 2;
      if (t.startsWith(term)) best = 1;
    }
    return best;
  }

  function search(q) {
    const tagMode = q.trim().startsWith("#");
    const terms = tokens(tagMode ? q.trim().slice(1) : q);
    if (!terms.length) return { terms, list: [] };
    const scored = [];
    for (const d of docs) {
      let score = 0, ok = true;
      for (const t of terms) {
        const s = tagMode ? hit(d.tTags, t) * 3 : hit(d.tTitle, t) * 4 + hit(d.tTags, t) * 2 + hit(d.tText, t);
        if (!s) { ok = false; break; }
        score += s;
      }
      if (ok) scored.push([score, d]);
    }
    scored.sort((a, b) => b[0] - a[0] || a[1].title.localeCompare(b[1].title));
    return { terms, list: scored.slice(0, MAX).map((x) => x[1]) };
  }

  // Destaca palavras cujo início casa com algum termo (comparação sem acento, texto original preservado).
  function mark(text, terms) {
    if (!terms.length) return esc(text);
    return String(text).split(/([\p{L}\p{N}]+)/u).map((part) => {
      if (!/[\p{L}\p{N}]/u.test(part)) return esc(part);
      if (CJK.test(part)) return [...part].map((ch) => terms.includes(norm(ch)) ? `<mark class="busca__hl">${esc(ch)}</mark>` : esc(ch)).join("");
      const n = norm(part);
      const t = terms.find((x) => n.startsWith(x));
      return t ? `<mark class="busca__hl">${esc(part.slice(0, t.length))}</mark>${esc(part.slice(t.length))}` : esc(part);
    }).join("");
  }

  function excerpt(text, terms) {
    const words = String(text || "").split(/\s+/);
    if (words.length <= 30) return text || "";
    let i = words.findIndex((w) => terms.some((t) => norm(w).replace(/[^\p{L}\p{N}]/gu, "").startsWith(t) || (CJK.test(w) && norm(w).includes(t))));
    if (i < 0) i = 0;
    const a = Math.max(0, i - 10), b = Math.min(words.length, a + 30);
    return (a > 0 ? "… " : "") + words.slice(a, b).join(" ") + (b < words.length ? " …" : "");
  }

  function run(q) {
    lastQuery = q;
    const { terms, list } = search(q);
    results = list;
    focus = 0;
    const box = $("busca-results");
    $("busca").classList.toggle("has-results", q.trim().length > 0);
    if (!q.trim()) { box.replaceChildren(); $("busca-preview").replaceChildren(); return; }
    if (!list.length) {
      const p = document.createElement("p");
      p.className = "busca__empty";
      p.textContent = `${ui.searchEmpty || "Nada encontrado para"} "${q.trim()}"`;
      box.replaceChildren(p);
      $("busca-preview").replaceChildren();
      return;
    }
    box.replaceChildren(...list.map((d, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "busca__card";
      b.id = `busca-r${i}`;
      b.setAttribute("role", "option");
      b.innerHTML = `<span class="busca__kind">${esc(d.kindLabel)}</span><strong>${mark(d.title, terms)}</strong>` +
        (d.tags && d.tags.length ? `<span class="busca__tags">${d.tags.slice(0, 5).map((t) => `<span>#${mark(t, terms)}</span>`).join("")}</span>` : "") +
        `<span class="busca__ex">${mark(excerpt(d.text, terms), terms)}</span>`;
      b.addEventListener("mouseenter", () => setFocus(i));
      b.addEventListener("click", () => go(i));
      return b;
    }));
    setFocus(0);
  }

  function setFocus(i) {
    if (!results.length) return;
    focus = (i + results.length) % results.length;
    [...$("busca-results").children].forEach((c, k) => { c.classList.toggle("is-focus", k === focus); c.setAttribute("aria-selected", String(k === focus)); });
    $("busca-results").children[focus]?.scrollIntoView({ block: "nearest" });
    $("busca-input").setAttribute("aria-activedescendant", `busca-r${focus}`);
    const d = results[focus], terms = tokens(lastQuery.replace(/^\s*#/, ""));
    $("busca-preview").innerHTML = `<p class="busca__kind">${esc(d.kindLabel)}</p><h3>${mark(d.title, terms)}</h3>` +
      (d.tags && d.tags.length ? `<p class="busca__tags">${d.tags.map((t) => `<span>#${mark(t, terms)}</span>`).join("")}</p>` : "") +
      `<p>${mark(d.text, terms)}</p>`;
  }

  function open() {
    const dlg = $("busca");
    if (dlg.open) return;
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    const inp = $("busca-input");
    inp.select();
    inp.focus();
    run(inp.value);
  }
  function close() { if ($("busca").open) $("busca").close(); }
  function go(i) {
    const d = results[i];
    if (!d) return;
    close();
    onGo(d);
  }

  document.addEventListener("keydown", (e) => {
    const typing = e.target.closest && e.target.closest("input, textarea, select, [contenteditable]");
    if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === "k") { e.preventDefault(); $("busca").open ? close() : open(); return; }
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "k") { e.preventDefault(); open(); $("busca-input").value = "#"; run("#"); return; }
    if (e.key === "/" && !typing && !document.querySelector("dialog[open]")) { e.preventDefault(); open(); return; }
    if (!$("busca").open) return;
    if (e.key === "ArrowDown" || (e.key === "Tab" && !e.shiftKey)) { e.preventDefault(); setFocus(focus + 1); }
    else if (e.key === "ArrowUp" || (e.key === "Tab" && e.shiftKey)) { e.preventDefault(); setFocus(focus - 1); }
    else if (e.key === "Enter") { e.preventDefault(); go(focus); }
  });

  document.addEventListener("DOMContentLoaded", () => {
    $("busca-input").addEventListener("input", (e) => run(e.target.value));
    $("busca").addEventListener("click", (e) => { if (e.target.id === "busca") close(); });
    document.querySelectorAll("[data-busca-open]").forEach((b) => b.addEventListener("click", open));
  });

  window.Busca = { setDocs, open, close, onGo(fn) { onGo = fn; }, _search: (q) => search(q).list.map((d) => d.title) };
})();
