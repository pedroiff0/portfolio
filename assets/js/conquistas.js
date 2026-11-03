/* Conquistas discretas: 8 marcos de exploração, salvos no navegador. Sem XP, sem ranks, sem som. */
(function () {
  "use strict";
  const IDS = ["secoes", "tour", "live", "halpha", "idioma", "tema", "leitura", "evento"];
  const TXT = {
    pt: { title: "Conquistas de exploração", unlocked: "Conquista", items: {
      secoes: ["Explorador", "Passe por todas as seções"], tour: ["Plateia", "Assista a um tour de projeto"],
      live: ["Ao vivo", "Abra uma demo ao vivo"], halpha: ["Linha Hα", "Encontre Hα no espectro"],
      idioma: ["Poliglota", "Troque o idioma"], tema: ["Noite e dia", "Alterne o tema"],
      leitura: ["Foco", "Use o modo leitura"], evento: ["Bastidores", "Abra as fotos de um evento"] } },
    en: { title: "Exploration achievements", unlocked: "Achievement", items: {
      secoes: ["Explorer", "Visit every section"], tour: ["Audience", "Watch a project tour"],
      live: ["Live", "Open a live demo"], halpha: ["Hα line", "Find Hα in the spectrum"],
      idioma: ["Polyglot", "Switch the language"], tema: ["Night and day", "Toggle the theme"],
      leitura: ["Focus", "Use reading mode"], evento: ["Backstage", "Open an event's photos"] } },
    es: { title: "Logros de exploración", unlocked: "Logro", items: {
      secoes: ["Explorador", "Recorre todas las secciones"], tour: ["Público", "Mira un recorrido de proyecto"],
      live: ["En vivo", "Abre una demo en vivo"], halpha: ["Línea Hα", "Encuentra Hα en el espectro"],
      idioma: ["Políglota", "Cambia el idioma"], tema: ["Noche y día", "Alterna el tema"],
      leitura: ["Enfoque", "Usa el modo lectura"], evento: ["Detrás de escena", "Abre las fotos de un evento"] } },
    fr: { title: "Succès d'exploration", unlocked: "Succès", items: {
      secoes: ["Explorateur", "Parcourez toutes les sections"], tour: ["Public", "Regardez une visite de projet"],
      live: ["En direct", "Ouvrez une démo en direct"], halpha: ["Raie Hα", "Trouvez Hα dans le spectre"],
      idioma: ["Polyglotte", "Changez de langue"], tema: ["Nuit et jour", "Changez de thème"],
      leitura: ["Concentration", "Utilisez le mode lecture"], evento: ["Coulisses", "Ouvrez les photos d'un événement"] } },
  };
  const KEY = "conquistas";
  let lang = "pt";
  let done = new Set();
  try { done = new Set(JSON.parse(localStorage.getItem(KEY) || "[]").filter((x) => IDS.includes(x))); } catch (e) { /* sem storage */ }

  const $ = (s) => document.getElementById(s);
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify([...done])); } catch (e) { /* sem storage */ } };

  function render() {
    const t = TXT[lang] || TXT.pt;
    if (!$("trophy-count")) return;
    $("trophy-count").textContent = `${done.size}/${IDS.length}`;
    $("trophy-btn").setAttribute("aria-label", `${t.title}: ${done.size}/${IDS.length}`);
    $("trophy-title").textContent = t.title;
    $("trophy-list").replaceChildren(...IDS.map((id) => {
      const li = document.createElement("li");
      li.className = done.has(id) ? "is-done" : "";
      const [name, hint] = t.items[id];
      li.innerHTML = `<svg class="ico" aria-hidden="true"><use href="assets/icons.svg#${done.has(id) ? "check" : "trophy"}"/></svg><span><strong></strong><small></small></span>`;
      li.querySelector("strong").textContent = name;
      li.querySelector("small").textContent = hint;
      return li;
    }));
    $("trophy").classList.toggle("is-complete", done.size === IDS.length);
  }

  let toastTimer = 0;
  function toast(id) {
    const t = TXT[lang] || TXT.pt;
    const el = $("toast");
    if (!el) return;
    el.textContent = `${t.unlocked}: ${t.items[id][0]} · ${done.size}/${IDS.length}`;
    el.hidden = false;
    el.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.classList.remove("is-on"); setTimeout(() => { el.hidden = true; }, 250); }, 3000);
  }

  function hit(id) {
    if (!IDS.includes(id) || done.has(id)) return;
    done.add(id);
    save();
    render();
    toast(id);
  }

  document.addEventListener("click", (e) => {
    const btn = $("trophy-btn"), pop = $("trophy-pop");
    if (!btn || !pop) return;
    if (btn.contains(e.target)) {
      pop.hidden = !pop.hidden;
      btn.setAttribute("aria-expanded", String(!pop.hidden));
    } else if (!pop.contains(e.target)) {
      pop.hidden = true;
      btn.setAttribute("aria-expanded", "false");
    }
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && $("trophy-pop")) $("trophy-pop").hidden = true; });

  window.Conquistas = { hit, setLang(l) { lang = l; render(); }, count: () => done.size, total: IDS.length };
  document.addEventListener("DOMContentLoaded", render);
})();
