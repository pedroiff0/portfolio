/* ============================================================
   Pedro Rocha — Portfolio · main.js
   - Minimalist Corner HUD Navigation & Dedicated Sector Dossiers
   - Cinematic Intro: Earth Orbital Re-entry & Live DevOps Stream
   - Interactive Canvas Cosmos Engine (Stars, Galaxy, Constellations, Meteors)
   - Procedural Sci-Fi Audio Synthesizer (Web Audio API)
   - Command Palette (Cmd+K / Ctrl+K)
   - Astronomical Stellar Spectrum Simulator
   - Full Multilingual (PT-BR, EN, ES, FR) Dynamic Rendering
   ============================================================ */

(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const D = window.PORTFOLIO_DATA || { REPOS: [], FEATURED: [], RESEARCH: [], BOLSAS: [], CONTACTS: [], EXTRA: {}, I18N: {} };
  const I18N = D.I18N || {};

  // Current active language
  let lang = localStorage.getItem("lang") || "pt";
  if (!I18N[lang]) lang = "pt";

  // SFX sound state (enabled by default unless explicitly disabled)
  let sfxEnabled = localStorage.getItem("portfolio_sfx") !== "false";

  // Search & Filter state
  let currentCategory = "all";
  let searchQuery = "";
  let activeSector = null;

  // Helper i18n lookup
  function t(path) {
    const res = path.split(".").reduce((o, k) => (o ? o[k] : undefined), I18N[lang]);
    return res !== undefined ? res : "";
  }

  const pick = (obj, key) => (obj && obj.i18n && obj.i18n[lang] && obj.i18n[lang][key]) ? obj.i18n[lang][key] : (obj[key] || "");

  /* ============================================================
     0. SVG ICONS REPOSITORY
     ============================================================ */
  const ICONS = {
    academic: '<path d="M12 3 2 8l10 5 10-5-10-5Zm0 7L4 7m8 3 8-4"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>',
    quiz: '<path d="M9 11l2 2 4-4"/><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h2M11 8h6"/>',
    teacher: '<circle cx="12" cy="8" r="3.2"/><path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7"/>',
    exam: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M9 12l1.5 1.5L13 11"/>',
    web: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    latex: '<path d="M4 5l4 7-4 7h3l2.5-4.5L14 19h3l-5-8 4.5-8H13L9.5 9 6 5z"/>',
    leaf: '<path d="M5 21c0-9 7-15 15-15 0 9-6 15-15 15Z"/><path d="M5 21C9 14 13 10 18 7"/>',
    cash: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M7 9v6M17 9v6"/>',
    box: '<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/>',
    table: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M3 14h18M9 4v16M15 4v16"/>',
    star: '<path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"/>',
    spectrum: '<path d="M3 20V10M8 20V4M13 20v-9M18 20V7M21 20v-5"/><path d="M3 20h18"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v17H6a2 2 0 0 0-2 2z"/><path d="M19 3v17"/>',
    document: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M9 12h7M9 16h7"/>',
    function: '<path d="M4 18c4-12 12-12 16 0"/><path d="M4 7h4M16 7h4"/>',
    formula: '<path d="M5 5l14 14M19 5L5 19"/><path d="M9 4l2 4 4-2"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    life: '<path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z"/>',
    dashboard: '<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="5" rx="1"/><rect x="13" y="10" width="8" height="11" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/>',
    github: '<path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/>',
    profile: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>',
    darkmatter: '<circle cx="12" cy="12" r="3.2"/><circle cx="12" cy="12" r="9" opacity=".4"/>',
    fog: '<path d="M4 9h11a3 3 0 1 0-3-3M4 14h15a3 3 0 1 1-3 3M4 19h10"/>',
    satellite: '<path d="M5 11l-2 2 4 4 2-2M13 3l8 8-3 3-8-8zM14 6l4 4M9 14l4 4"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7"/>',
    scholar: '<path d="M12 4 2 9l10 5 10-5-10-5Z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>',
    orcid: '<circle cx="12" cy="12" r="9"/><path d="M8 11h2v5H8zM8 8.5h.01M12 13c0-1.2 1-1.8 2-1.8s1.8.7 1.8 1.8c0 1.8-2.6 2.2-2.6 3.6h2.8M16.5 16v.5"/>',
    lattes: '<path d="M12 3l9 5v8l-9 5-9-5V8z"/><path d="M12 12l9-5M12 12v9M12 12 3 7"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1"/>',
    pin: '<path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"/>',
    volumeMute: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>'
  };

  const iconSVG = (key, cls) => {
    const p = ICONS[key] || ICONS.star;
    return `<svg class="${cls || "icon"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  };

  /* ============================================================
     1. PROCEDURAL SOUND SYNTHESIZER (Web Audio API)
     ============================================================ */
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        audioCtx = new AudioCtxClass();
      }
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  }

  // Global unlock on user gesture
  const unlockAudio = () => {
    getAudioContext();
  };
  ["click", "keydown", "touchstart", "pointerdown"].forEach((ev) => {
    window.addEventListener(ev, unlockAudio, { passive: true, once: true });
  });

  function playTone(freq, type, duration, gainVal = 0.04) {
    if (!sfxEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(Math.max(0.0001, gainVal), now);
      gain.gain.exponentialRampToValueAtTime(0.00001, now + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {}
  }

  const sfx = {
    hover: () => playTone(640, "sine", 0.04, 0.015),
    click: () => {
      playTone(880, "triangle", 0.07, 0.03);
      setTimeout(() => playTone(1200, "sine", 0.05, 0.02), 35);
    },
    modal: () => {
      playTone(440, "sine", 0.09, 0.025);
      setTimeout(() => playTone(660, "sine", 0.1, 0.03), 50);
      setTimeout(() => playTone(880, "sine", 0.14, 0.035), 100);
    },
    warp: () => {
      if (!sfxEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        // Spool-up frequency sweep
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = "sawtooth";
        osc1.frequency.setValueAtTime(140, now);
        osc1.frequency.exponentialRampToValueAtTime(880, now + 0.35);
        osc1.frequency.exponentialRampToValueAtTime(320, now + 0.65);
        gain1.gain.setValueAtTime(0.01, now);
        gain1.gain.linearRampToValueAtTime(0.06, now + 0.25);
        gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.7);

        // Relativistic sub-bass rumble
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(65, now);
        osc2.frequency.exponentialRampToValueAtTime(130, now + 0.2);
        osc2.frequency.exponentialRampToValueAtTime(40, now + 0.6);
        gain2.gain.setValueAtTime(0.08, now);
        gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(now);
        osc2.stop(now + 0.65);

        // Arrival acoustic resonance chime
        setTimeout(() => {
          if (!sfxEnabled) return;
          playTone(587.33, "sine", 0.12, 0.03);
          setTimeout(() => playTone(880, "triangle", 0.18, 0.035), 50);
        }, 450);
      } catch (e) {}
    },
    bornThisWay: () => {
      if (!sfxEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;

        // Iconic Lady Gaga - "Born This Way" Synthesized Chorus / Hook:
        // "I'm on the right track baby, I was born this way!"
        // Key of F# Minor (F#4, A4, B4, C#5, B4, A4, F#4, E4, F#4, A4, F#4)
        const leadNotes = [
          { f: 369.99, d: 0.11, g: 0.045 }, // F#4 (I'm)
          { f: 440.00, d: 0.11, g: 0.05 },  // A4 (on)
          { f: 493.88, d: 0.13, g: 0.05 },  // B4 (the)
          { f: 554.37, d: 0.20, g: 0.06 },  // C#5 (right)
          { f: 493.88, d: 0.14, g: 0.05 },  // B4 (track)
          { f: 440.00, d: 0.18, g: 0.05 },  // A4 (ba-)
          { f: 369.99, d: 0.22, g: 0.055 }, // F#4 (-by)
          { f: 329.63, d: 0.12, g: 0.04 },  // E4 (I)
          { f: 369.99, d: 0.13, g: 0.05 },  // F#4 (was)
          { f: 440.00, d: 0.16, g: 0.055 }, // A4 (born)
          { f: 369.99, d: 0.40, g: 0.065 }  // F#4 (this way!)
        ];

        let offset = 0;
        leadNotes.forEach((n) => {
          setTimeout(() => {
            if (!sfxEnabled) return;
            // Dual-oscillator synth voice for rich dance-pop presence
            playTone(n.f, "sawtooth", n.d, n.g);
            playTone(n.f * 1.002, "square", n.d, n.g * 0.4);
          }, offset * 1000);
          offset += n.d * 0.96;
        });

        // Driving Euro-pop Synth Bassline pulse underneath
        const bassNotes = [185.00, 185.00, 146.83, 164.81, 185.00, 185.00, 220.00, 185.00];
        bassNotes.forEach((bf, i) => {
          setTimeout(() => {
            if (!sfxEnabled) return;
            playTone(bf, "triangle", 0.16, 0.038);
          }, i * 190);
        });
      } catch (e) {}
    },
    success: () => {
      playTone(523.25, "sine", 0.08, 0.025);
      setTimeout(() => playTone(659.25, "sine", 0.1, 0.03), 60);
      setTimeout(() => playTone(783.99, "sine", 0.16, 0.035), 120);
    },
    questComplete: () => {
      if (!sfxEnabled) return;
      playTone(523.25, "sine", 0.09, 0.03); // C5
      setTimeout(() => playTone(659.25, "sine", 0.09, 0.035), 60); // E5
      setTimeout(() => playTone(783.99, "sine", 0.12, 0.04), 120); // G5
      setTimeout(() => playTone(1046.50, "triangle", 0.25, 0.045), 180); // C6
    },
    impact: () => {
      if (!sfxEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        // Low Frequency Atmospheric Shockwave Boom
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = "sawtooth";
        osc1.frequency.setValueAtTime(130, now);
        osc1.frequency.exponentialRampToValueAtTime(24, now + 1.2);
        gain1.gain.setValueAtTime(0.12, now);
        gain1.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start(now);
        osc1.stop(now + 1.2);

        // Ionized Blast Resonance
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(520, now);
        osc2.frequency.exponentialRampToValueAtTime(70, now + 0.7);
        gain2.gain.setValueAtTime(0.08, now);
        gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(now);
        osc2.stop(now + 0.7);
      } catch (e) {}
    },
    simoleons: () => {
      if (!sfxEnabled) return;
      try {
        playTone(1318.51, "sine", 0.1, 0.05); // E6
        setTimeout(() => playTone(1760.00, "triangle", 0.25, 0.06), 70); // A6
        setTimeout(() => playTone(2093.00, "sine", 0.35, 0.04), 140); // C7
        [200, 260, 320, 370, 420].forEach((delay, i) => {
          setTimeout(() => {
            playTone(2400 + i * 180, "sine", 0.04, 0.025);
          }, delay);
        });
      } catch (e) {}
    },
    hesoyam: () => {
      if (!sfxEnabled) return;
      try {
        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
        notes.forEach((freq, idx) => {
          setTimeout(() => {
            playTone(freq, "triangle", 0.08, 0.04);
          }, idx * 55);
        });
        setTimeout(() => {
          playTone(2093.00, "sine", 0.3, 0.05);
        }, notes.length * 55);
      } catch (e) {}
    },
    godmode: () => {
      if (!sfxEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(1760, now + 1.2);
        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.07, now + 0.6);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 1.4);

        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(110, now);
        osc2.frequency.exponentialRampToValueAtTime(440, now + 0.8);
        gain2.gain.setValueAtTime(0.08, now);
        gain2.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(now);
        osc2.stop(now + 1.2);
      } catch (e) {}
    },
    bmth: () => {
      if (!sfxEnabled) return;
      try {
        const melody = [
          { f: 392.00, d: 160, type: "sawtooth", g: 0.045 },
          { f: 392.00, d: 160, type: "sawtooth", g: 0.045 },
          { f: 466.16, d: 180, type: "sawtooth", g: 0.05 },
          { f: 523.25, d: 320, type: "sawtooth", g: 0.055 },
          { f: 466.16, d: 200, type: "sawtooth", g: 0.045 },
          { f: 392.00, d: 240, type: "sawtooth", g: 0.045 },
          { f: 349.23, d: 400, type: "sawtooth", g: 0.04 }
        ];
        let t = 0;
        melody.forEach((note) => {
          setTimeout(() => {
            playTone(note.f, note.type, note.d / 1000, note.g);
          }, t);
          t += note.d + 30;
        });
      } catch (e) {}
    },
    kratos: () => {
      if (!sfxEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(82.4, now);
        osc.frequency.exponentialRampToValueAtTime(110.0, now + 0.6);
        osc.frequency.exponentialRampToValueAtTime(73.4, now + 1.6);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 1.8);

        setTimeout(() => {
          playTone(180, "square", 0.15, 0.08);
          playTone(90, "sine", 0.35, 0.1);
        }, 300);
      } catch (e) {}
    },
    focusScan: () => {
      if (!sfxEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(2400, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.35);
        osc.frequency.exponentialRampToValueAtTime(1800, now + 0.6);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.65);

        setTimeout(() => {
          playTone(1760, "triangle", 0.12, 0.035);
          setTimeout(() => playTone(2637, "sine", 0.18, 0.03), 80);
        }, 350);
      } catch (e) {}
    }
  };

  /* ============================================================
     2. TOAST NOTIFICATION SYSTEM
     ============================================================ */
  function showToast(msg, iconKey = "star") {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `${iconSVG(iconKey, "toast-icon")} <span>${msg}</span>`;
    container.appendChild(toast);
    sfx.success();
    setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 3400);
  }

  /* ============================================================
     3. CINEMATIC INTRO: REALISTIC ASTROPHYSICS RE-ENTRY & DEVOPS
     ============================================================ */
  let introActive = true;
  let introProgress = 0;
  let introCanvas, ictx, iw, ih;
  let introStartTime = 0;

  // Astrophysical World Geography (Spherical Coordinates: [lat, lon])
  const GEO_LANDMASSES = {
    southAmerica: [
      [12.4, -71.7], [10.5, -61.6], [6.8, -58.2], [2.2, -50.4],
      [-2.5, -44.3], [-3.7, -38.5], [-5.2, -35.2], [-8.0, -34.9],
      [-13.0, -38.5], [-17.9, -39.3], [-21.7, -41.3], [-22.9, -43.2],
      [-24.0, -46.3], [-27.6, -48.5], [-32.0, -52.0], [-34.8, -54.0],
      [-36.2, -56.8], [-40.8, -62.3], [-46.0, -66.0], [-52.0, -68.3],
      [-54.9, -67.3], [-55.9, -67.2], [-53.5, -73.5], [-45.0, -74.5],
      [-37.0, -73.5], [-33.0, -71.6], [-22.0, -70.3], [-15.0, -75.4],
      [-12.0, -77.0], [-5.0, -81.2], [-2.2, -80.0], [4.0, -77.5],
      [8.0, -77.5], [10.5, -75.0]
    ],
    northAmerica: [
      [71.3, -156.8], [65.0, -168.0], [58.0, -158.0], [60.0, -140.0],
      [54.0, -130.0], [49.0, -125.0], [46.0, -124.0], [37.8, -122.4],
      [32.7, -117.2], [28.0, -114.0], [23.0, -110.0], [28.0, -112.0],
      [20.0, -105.0], [16.0, -98.0], [14.5, -92.0], [9.0, -83.0],
      [8.5, -77.5], [15.5, -84.0], [20.0, -89.0], [21.5, -86.8],
      [26.0, -97.0], [29.5, -94.0], [30.0, -88.0], [25.0, -80.5],
      [28.5, -80.5], [35.0, -75.5], [41.0, -71.5], [44.5, -68.0],
      [46.5, -60.0], [52.0, -56.0], [60.0, -64.0], [68.0, -70.0],
      [75.0, -85.0], [72.0, -120.0]
    ],
    africa: [
      [35.8, -5.3], [37.2, 10.0], [31.3, 32.3], [22.0, 38.0],
      [13.0, 43.0], [11.8, 51.2], [2.0, 45.3], [-5.0, 39.0],
      [-10.5, 40.5], [-18.0, 36.0], [-26.0, 33.0], [-30.0, 31.0],
      [-34.4, 18.5], [-23.0, 14.5], [-10.0, 13.0], [4.0, 9.0],
      [5.0, 0.0], [5.0, -7.5], [15.0, -17.5], [24.0, -15.0],
      [34.0, -7.0]
    ],
    eurasia: [
      [37.0, -9.0], [43.5, -9.0], [46.0, -1.5], [48.5, -4.5],
      [51.0, 1.5], [54.0, 8.5], [58.0, 6.0], [62.0, 5.0],
      [71.0, 26.0], [66.0, 23.0], [59.0, 18.0], [54.0, 19.0],
      [44.0, 34.0], [41.0, 15.0], [38.0, 23.0], [39.0, 30.0],
      [28.0, 35.0], [16.0, 42.0], [12.5, 54.0], [24.0, 58.0],
      [24.0, 68.0], [8.0, 77.5], [21.0, 87.0], [14.0, 100.0],
      [1.3, 103.8], [16.0, 108.0], [22.3, 114.2], [31.2, 121.5],
      [38.0, 119.0], [37.5, 127.0], [43.0, 132.0], [53.0, 160.0],
      [67.0, 178.0], [72.0, 140.0], [75.0, 100.0], [70.0, 60.0]
    ],
    australia: [
      [-12.4, 130.8], [-10.7, 142.5], [-18.0, 146.0], [-27.5, 153.0],
      [-34.0, 151.2], [-38.0, 145.0], [-35.0, 138.5], [-32.0, 115.8],
      [-20.0, 118.5], [-15.0, 124.0]
    ],
    antarctica: [
      [-70.0, -180.0], [-72.0, -120.0], [-75.0, -60.0], [-65.0, -60.0],
      [-72.0, 0.0], [-68.0, 60.0], [-67.0, 120.0], [-70.0, 180.0]
    ],
    greenland: [
      [60.0, -45.0], [70.0, -52.0], [78.0, -68.0], [83.0, -30.0],
      [75.0, -20.0], [65.0, -38.0]
    ],
    japan: [
      [31.0, 130.5], [35.0, 136.0], [40.0, 140.0], [45.0, 142.0],
      [42.0, 141.0], [34.0, 133.0]
    ],
    britain: [
      [50.0, -5.0], [54.0, -3.0], [58.5, -5.0], [58.0, -3.0],
      [51.5, 1.0], [50.5, -1.0]
    ]
  };

  // Major World City Lights (Lat, Lon) for Night-Side Bioluminescence
  const GEO_CITIES = [
    // South America
    { name: "São Paulo", lat: -23.55, lon: -46.63, size: 2.6 },
    { name: "Rio de Janeiro", lat: -22.90, lon: -43.20, size: 2.4 },
    { name: "Campos / IFF", lat: -21.75, lon: -41.32, size: 2.0 },
    { name: "Brasília", lat: -15.79, lon: -47.88, size: 2.2 },
    { name: "Belo Horizonte", lat: -19.92, lon: -43.94, size: 2.1 },
    { name: "Salvador", lat: -12.97, lon: -38.51, size: 2.0 },
    { name: "Recife", lat: -8.05, lon: -34.88, size: 1.9 },
    { name: "Fortaleza", lat: -3.73, lon: -38.52, size: 1.9 },
    { name: "Curitiba", lat: -25.43, lon: -49.27, size: 1.8 },
    { name: "Porto Alegre", lat: -30.03, lon: -51.23, size: 1.8 },
    { name: "Buenos Aires", lat: -34.60, lon: -58.38, size: 2.5 },
    { name: "Santiago", lat: -33.45, lon: -70.67, size: 2.2 },
    { name: "Lima", lat: -12.05, lon: -77.04, size: 2.2 },
    { name: "Bogotá", lat: 4.71, lon: -74.07, size: 2.2 },
    // North America
    { name: "New York", lat: 40.71, lon: -74.00, size: 2.8 },
    { name: "Los Angeles", lat: 34.05, lon: -118.24, size: 2.6 },
    { name: "Chicago", lat: 41.88, lon: -87.63, size: 2.3 },
    { name: "Houston", lat: 29.76, lon: -95.37, size: 2.2 },
    { name: "Miami", lat: 25.76, lon: -80.19, size: 2.0 },
    { name: "Mexico City", lat: 19.43, lon: -99.13, size: 2.7 },
    { name: "Toronto", lat: 43.65, lon: -79.38, size: 2.2 },
    // Europe & Africa
    { name: "London", lat: 51.51, lon: -0.13, size: 2.7 },
    { name: "Paris", lat: 48.86, lon: 2.35, size: 2.6 },
    { name: "Madrid", lat: 40.42, lon: -3.70, size: 2.2 },
    { name: "Rome", lat: 41.90, lon: 12.50, size: 2.1 },
    { name: "Berlin", lat: 52.52, lon: 13.40, size: 2.3 },
    { name: "Moscow", lat: 55.75, lon: 37.62, size: 2.5 },
    { name: "Cairo", lat: 30.04, lon: 31.24, size: 2.4 },
    { name: "Johannesburg", lat: -26.20, lon: 28.04, size: 2.2 },
    // Asia & Pacific
    { name: "Tokyo", lat: 35.68, lon: 139.77, size: 3.0 },
    { name: "Shanghai", lat: 31.23, lon: 121.47, size: 2.8 },
    { name: "Beijing", lat: 39.90, lon: 116.40, size: 2.7 },
    { name: "Singapore", lat: 1.35, lon: 103.82, size: 2.2 },
    { name: "Mumbai", lat: 19.08, lon: 72.88, size: 2.6 },
    { name: "Dubai", lat: 25.20, lon: 55.27, size: 2.3 },
    { name: "Sydney", lat: -33.87, lon: 151.21, size: 2.3 }
  ];

  // Realistic Spherical 3D Projection Helpers
  const AXIAL_TILT = 23.44 * (Math.PI / 180); // Earth's obliquity 23.44 deg
  const cosTilt = Math.cos(AXIAL_TILT);
  const sinTilt = Math.sin(AXIAL_TILT);
  // Sun light direction vector in 3D (normalized, from upper-left)
  const SUN_DIR = { x: -0.62, y: -0.38, z: 0.68 };

  function projectGeo(latDeg, lonDeg, earthRotDeg) {
    const phi = latDeg * (Math.PI / 180);
    const lam = (lonDeg + earthRotDeg) * (Math.PI / 180);
    const x0 = Math.cos(phi) * Math.sin(lam);
    const y0 = -Math.sin(phi);
    const z0 = Math.cos(phi) * Math.cos(lam);

    // Apply Earth Axial Obliquity
    const x1 = x0 * cosTilt - y0 * sinTilt;
    const y1 = x0 * sinTilt + y0 * cosTilt;
    const z1 = z0;

    const dotL = x1 * SUN_DIR.x + y1 * SUN_DIR.y + z1 * SUN_DIR.z;
    return { x: x1, y: y1, z: z1, dotL };
  }

  // Multi-Scale Photorealistic Weather Systems Generator for Earth
  const EARTH_WEATHER_SYSTEMS = [
    // 1. Tropical Cyclones & Hurricanes with Realistic Logarithmic Spiral Arms
    { lat: 24, lon: -56, type: "cyclone", arms: 3, r: 0.28, rot: 1.55, b: 0.22, eyeR: 0.04 },
    { lat: -20, lon: 74, type: "cyclone", arms: 3, r: 0.26, rot: -1.45, b: 0.22, eyeR: 0.04 },
    { lat: 19, lon: 132, type: "cyclone", arms: 4, r: 0.32, rot: 1.75, b: 0.24, eyeR: 0.05 },

    // 2. Equatorial ITCZ Convective Storm Belt (Undulating Clusters across Oceans)
    { lat: 6, lon: -38, type: "itcz", r: 0.32, rot: 1.0, count: 6 },
    { lat: 4, lon: 18, type: "itcz", r: 0.34, rot: 1.0, count: 7 },
    { lat: 7, lon: 98, type: "itcz", r: 0.33, rot: 1.0, count: 6 },
    { lat: 5, lon: 162, type: "itcz", r: 0.35, rot: 1.0, count: 7 },
    { lat: 6, lon: -132, type: "itcz", r: 0.32, rot: 1.0, count: 6 },

    // 3. Mid-Latitude Baroclinic Storm Waves & Cold Front Systems
    { lat: 48, lon: -26, type: "front", r: 0.30, rot: 1.25, curve: 0.4 },
    { lat: 52, lon: 148, type: "front", r: 0.28, rot: 1.2, curve: 0.45 },
    { lat: -46, lon: -58, type: "front", r: 0.32, rot: -1.15, curve: -0.4 },
    { lat: -48, lon: 108, type: "front", r: 0.30, rot: -1.2, curve: -0.42 },
    { lat: -44, lon: -178, type: "front", r: 0.29, rot: -1.1, curve: -0.38 },

    // 4. Subpolar Wispy Cirrus Streams & Jetstream Filaments
    { lat: 68, lon: 38, type: "cirrus", r: 0.26, rot: 0.95 },
    { lat: 64, lon: -108, type: "cirrus", r: 0.25, rot: 0.95 },
    { lat: -65, lon: -22, type: "cirrus", r: 0.28, rot: -0.9 },
    { lat: -66, lon: 128, type: "cirrus", r: 0.27, rot: -0.9 },

    // 5. Continental Convective Cumulus Blankets
    { lat: -5, lon: -62, type: "cumulus", r: 0.28, rot: 1.0, count: 6 },
    { lat: 1, lon: 24, type: "cumulus", r: 0.26, rot: 1.0, count: 5 },
    { lat: -3, lon: 116, type: "cumulus", r: 0.26, rot: 1.0, count: 5 }
  ];

  function safeRadialGradient(ctx, x0, y0, r0, x1, y1, r1) {
    const sX0 = Number.isFinite(x0) ? x0 : 0;
    const sY0 = Number.isFinite(y0) ? y0 : 0;
    const sX1 = Number.isFinite(x1) ? x1 : sX0;
    const sY1 = Number.isFinite(y1) ? y1 : sY0;
    const sR0 = Math.max(0, Number.isFinite(r0) ? r0 : 0);
    const sR1 = Math.max(sR0 + 0.1, Number.isFinite(r1) ? r1 : sR0 + 0.1);
    return ctx.createRadialGradient(sX0, sY0, sR0, sX1, sY1, sR1);
  }

  function drawRealisticEarthClouds(ctx, cx, cy, er, rotDeg, sunDir) {
    if (!ctx || er <= 0) return;
    const shadowOffX = -sunDir.x * er * 0.034;
    const shadowOffY = -sunDir.y * er * 0.034;

    // PASS 1: Volumetric Cast Cloud Shadows onto Ocean & Continents Below
    ctx.fillStyle = "rgba(1, 4, 18, 0.46)";
    EARTH_WEATHER_SYSTEMS.forEach((ws) => {
      const currentLon = (ws.lon + rotDeg * ws.rot) % 360;
      const cp = projectGeo(ws.lat, currentLon, 0);
      if (cp.z > 0.05) {
        const cpx = cx + cp.x * er + shadowOffX;
        const cpy = cy + cp.y * er + shadowOffY;
        const sysR = Math.max(1, er * ws.r);

        if (ws.type === "cyclone") {
          for (let a = 0; a < ws.arms; a++) {
            const baseAngle = a * (Math.PI * 2 / ws.arms);
            for (let s = 1; s <= 5; s++) {
              const theta = baseAngle + s * 0.55;
              const rDist = sysR * 0.18 * Math.exp(ws.b * s);
              const sx = cpx + Math.cos(theta) * rDist;
              const sy = cpy + Math.sin(theta) * (rDist * 0.65);
              const nodeR = Math.max(0.5, sysR * (0.15 + s * 0.045));
              ctx.beginPath();
              ctx.arc(sx, sy, nodeR, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        } else if (ws.type === "itcz" || ws.type === "cumulus") {
          const n = ws.count || 5;
          for (let i = 0; i < n; i++) {
            const offX = (i - n / 2) * (sysR * 0.32);
            const offY = Math.sin(i * 1.6) * (sysR * 0.14);
            const puffR = Math.max(0.5, sysR * (0.35 + Math.cos(i) * 0.1));
            ctx.beginPath();
            ctx.arc(cpx + offX, cpy + offY, puffR, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (ws.type === "front") {
          for (let i = 0; i < 6; i++) {
            const t = i / 5;
            const fx = cpx + (t - 0.5) * sysR * 1.6;
            const fy = cpy + Math.sin(t * Math.PI) * (sysR * ws.curve * 1.2);
            const fR = Math.max(0.5, sysR * (0.28 + (1 - t) * 0.15));
            ctx.beginPath();
            ctx.arc(fx, fy, fR, 0, Math.PI * 2);
            ctx.fill();
          }
        } else {
          ctx.beginPath();
          ctx.ellipse(cpx, cpy, Math.max(1, sysR * 0.9), Math.max(0.5, sysR * 0.24), 0.35, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    });

    // PASS 2: Multi-Layer Billowy Clouds with Forward Scattering & Twilight Illumination
    EARTH_WEATHER_SYSTEMS.forEach((ws) => {
      const currentLon = (ws.lon + rotDeg * ws.rot) % 360;
      const cp = projectGeo(ws.lat, currentLon, 0);
      if (cp.z > 0.05) {
        const cpx = cx + cp.x * er * 1.018;
        const cpy = cy + cp.y * er * 1.018;
        const sysR = Math.max(1, er * ws.r);

        const sunIllum = Math.max(0.04, Math.min(1, (cp.dotL + 0.35) * 1.4));
        const isTerminator = cp.dotL > -0.15 && cp.dotL < 0.28;

        if (ws.type === "cyclone") {
          for (let a = 0; a < ws.arms; a++) {
            const baseAngle = a * (Math.PI * 2 / ws.arms);
            for (let s = 1; s <= 5; s++) {
              const theta = baseAngle + s * 0.55;
              const rDist = sysR * 0.18 * Math.exp(ws.b * s);
              const sx = cpx + Math.cos(theta) * rDist;
              const sy = cpy + Math.sin(theta) * (rDist * 0.65);
              const nodeR = Math.max(1, sysR * (0.16 + s * 0.045));

              const armGrad = safeRadialGradient(
                ctx,
                sx + sunDir.x * nodeR * 0.35,
                sy + sunDir.y * nodeR * 0.35,
                nodeR * 0.1,
                sx,
                sy,
                nodeR
              );

              if (isTerminator) {
                armGrad.addColorStop(0, `rgba(254, 215, 170, ${0.94 * sunIllum})`);
                armGrad.addColorStop(0.5, `rgba(251, 146, 60, ${0.68 * sunIllum})`);
                armGrad.addColorStop(0.85, `rgba(244, 63, 94, ${0.35 * sunIllum})`);
              } else {
                armGrad.addColorStop(0, `rgba(255, 255, 255, ${0.98 * sunIllum})`);
                armGrad.addColorStop(0.55, `rgba(224, 242, 254, ${0.80 * sunIllum})`);
                armGrad.addColorStop(0.85, `rgba(186, 230, 253, ${0.35 * sunIllum})`);
              }
              armGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

              ctx.fillStyle = armGrad;
              ctx.beginPath();
              ctx.arc(sx, sy, nodeR, 0, Math.PI * 2);
              ctx.fill();
            }
          }

          // Dense Central Eye-Wall & Clear Storm Eye
          const eyeWallGrad = safeRadialGradient(ctx, cpx, cpy, sysR * 0.04, cpx, cpy, Math.max(1, sysR * 0.22));
          eyeWallGrad.addColorStop(0, "rgba(1, 4, 18, 0.45)");
          eyeWallGrad.addColorStop(0.2, `rgba(255, 255, 255, ${0.98 * sunIllum})`);
          eyeWallGrad.addColorStop(0.7, `rgba(224, 242, 254, ${0.78 * sunIllum})`);
          eyeWallGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.fillStyle = eyeWallGrad;
          ctx.beginPath();
          ctx.arc(cpx, cpy, Math.max(1, sysR * 0.22), 0, Math.PI * 2);
          ctx.fill();

        } else if (ws.type === "itcz" || ws.type === "cumulus") {
          const n = ws.count || 5;
          for (let i = 0; i < n; i++) {
            const offX = (i - n / 2) * (sysR * 0.32);
            const offY = Math.sin(i * 1.6) * (sysR * 0.14);
            const puffR = Math.max(1, sysR * (0.36 + Math.cos(i) * 0.1));
            const px = cpx + offX;
            const py = cpy + offY;

            const puffGrad = safeRadialGradient(
              ctx,
              px + sunDir.x * puffR * 0.35,
              py + sunDir.y * puffR * 0.35,
              puffR * 0.1,
              px,
              py,
              puffR
            );

            if (isTerminator) {
              puffGrad.addColorStop(0, `rgba(254, 215, 170, ${0.94 * sunIllum})`);
              puffGrad.addColorStop(0.55, `rgba(251, 146, 60, ${0.65 * sunIllum})`);
            } else {
              puffGrad.addColorStop(0, `rgba(255, 255, 255, ${0.96 * sunIllum})`);
              puffGrad.addColorStop(0.6, `rgba(224, 242, 254, ${0.74 * sunIllum})`);
            }
            puffGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

            ctx.fillStyle = puffGrad;
            ctx.beginPath();
            ctx.arc(px, py, puffR, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (ws.type === "front") {
          for (let i = 0; i < 6; i++) {
            const t = i / 5;
            const fx = cpx + (t - 0.5) * sysR * 1.6;
            const fy = cpy + Math.sin(t * Math.PI) * (sysR * ws.curve * 1.2);
            const fR = Math.max(1, sysR * (0.28 + (1 - t) * 0.15));

            const frontGrad = safeRadialGradient(
              ctx,
              fx + sunDir.x * fR * 0.35,
              fy + sunDir.y * fR * 0.35,
              fR * 0.1,
              fx,
              fy,
              fR
            );

            if (isTerminator) {
              frontGrad.addColorStop(0, `rgba(254, 215, 170, ${0.92 * sunIllum})`);
              frontGrad.addColorStop(0.55, `rgba(251, 146, 60, ${0.62 * sunIllum})`);
            } else {
              frontGrad.addColorStop(0, `rgba(255, 255, 255, ${0.94 * sunIllum})`);
              frontGrad.addColorStop(0.6, `rgba(224, 242, 254, ${0.72 * sunIllum})`);
            }
            frontGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

            ctx.fillStyle = frontGrad;
            ctx.beginPath();
            ctx.arc(fx, fy, fR, 0, Math.PI * 2);
            ctx.fill();
          }
        } else {
          const cirrusGrad = ctx.createLinearGradient(cpx - sysR, cpy, cpx + sysR, cpy);
          cirrusGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
          cirrusGrad.addColorStop(0.5, `rgba(224, 242, 254, ${0.65 * sunIllum})`);
          cirrusGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

          ctx.fillStyle = cirrusGrad;
          ctx.beginPath();
          ctx.ellipse(cpx, cpy, Math.max(1, sysR * 0.9), Math.max(0.5, sysR * 0.22), 0.35, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    });
  }

  function initIntroCinematic() {
    const overlay = document.getElementById("introOverlay");
    introCanvas = document.getElementById("introCanvas");
    if (!overlay || !introCanvas) return;

    let intro3D = null;
    if (window.Space3D && typeof window.Space3D.initIntroScene === "function") {
      try {
        intro3D = window.Space3D.initIntroScene(introCanvas);
      } catch (e) {
        console.warn("3D Intro scene fallback:", e);
      }
    }

    if (!intro3D) {
      ictx = introCanvas.getContext("2d");
      resizeIntroCanvas();
      window.addEventListener("resize", resizeIntroCanvas);
    }

    introStartTime = performance.now();
    introActive = true;

    // Impact & Physics Event State
    let impactTriggered = false;
    let impactStartTime = 0;
    const impactSparks = [];
    const shockwaveRings = [];
    let flashAlpha = 0;
    let shakeIntensity = 0;

    // Background Stars with Spectral Classification (O, B, A, F, G, K, M)
    const introStars = [];
    const spectralColors = ["#bae6fd", "#93c5fd", "#ffffff", "#fef08a", "#fdba74", "#f87171"];
    for (let i = 0; i < 140; i++) {
      introStars.push({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 2.5 + 1.2,
        phase: Math.random() * Math.PI * 2,
        color: spectralColors[Math.floor(Math.random() * spectralColors.length)]
      });
    }

    // Plasma ionization fire embers for re-entry trail
    const plasmaParticles = [];
    for (let i = 0; i < 80; i++) {
      plasmaParticles.push({
        x: 0, y: 0,
        vx: 0, vy: 0,
        size: Math.random() * 5 + 2,
        life: 0,
        maxLife: Math.random() * 30 + 15,
        hue: Math.random() < 0.3 ? 280 : (Math.random() < 0.6 ? 30 : 15)
      });
    }

    // High-speed telemetry stream log schedule (total 3.0s sequence)
    const devopsLogs = [
      { t: 80, text: "> [SYS_INIT] Hypervisor online · Cluster Sync OK", cls: "highlight" },
      { t: 50, text: "> [ALERTA GLOBAL] Anomalias extraterrestres detectadas em órbita baixa da Terra", cls: "warn" },
      { t: 300, text: "> [KERNEL] Booting Antigravity Defense OS · Protocolo Evacuação Ativado", cls: "highlight" },
      { t: 600, text: "> [DOCKER] 14 containers de código empacotados para transporte interplanetário", cls: "success" },
      { t: 950, text: "> [ASTRO_NAV] Vetores de fuga calculados: Kepler-186f, Gaia DR3 e Solaris", cls: "highlight" },
      { t: 1300, text: "> [MESOSPHERE] Reentrada tática · Descida no IFF LZ-01 para resgatar repositórios", cls: "warn" },
      { t: 1650, text: "> [TELEMETRY] Coordenadas 21.7° S, 41.3° W sincronizadas // Extraindo dados", cls: "success" },
      { t: 2000, text: "> [RESCUE_LOCK] Código e pesquisas salvos! Preparando dobra hiperespacial...", cls: "highlight" },
      { t: 2350, text: "> [HYPERDRIVE] Motores de dobra carregados a 100% · Rumo aos novos mundos", cls: "success" },
      { t: 2700, text: "> [WARP_READY] Hub Central Pronto: Decolar para buscar recursos nos setores!", cls: "success" }
    ];

    const termLines = document.getElementById("introTerminalLines");
    const progressFill = document.getElementById("introProgressFill");
    const statusPercent = document.getElementById("introStatusPercent");

    if (termLines) termLines.innerHTML = "";

    devopsLogs.forEach((item) => {
      setTimeout(() => {
        if (!introActive || !termLines) return;
        const line = document.createElement("div");
        line.className = `line ${item.cls}`;
        line.textContent = item.text;
        termLines.appendChild(line);
        termLines.scrollTop = termLines.scrollHeight;
      }, item.t);
    });

    function renderIntroLoop(now) {
      if (!introActive) return;

      const elapsed = (now - introStartTime) / 1000;
      const descentDuration = 3.0; // 3.0s re-entry descent to touchdown & impact
      const totalDuration = 3.2;   // 3.2s total (0.2s touchdown impact flash then enter Hub directly)
      const p = Math.min(1, elapsed / descentDuration);

      // Update Real-Time Progress Bar & Telemetry Status
      if (progressFill) {
        progressFill.style.width = `${Math.min(100, Math.round(p * 100))}%`;
      }
      if (statusPercent) {
        if (p < 0.28) {
          statusPercent.textContent = `${Math.round(p * 100)}% (ALT: 380 KM // MACH 25)`;
        } else if (p < 0.65) {
          statusPercent.textContent = `${Math.round(p * 100)}% (ALT: 85 KM // PLASMA 1920°C)`;
        } else if (p < 0.95) {
          statusPercent.textContent = `${Math.round(p * 100)}% (ALT: 24 KM // MACH 3.2)`;
        } else if (p < 1.0) {
          statusPercent.textContent = `99% (POUSO E IMPACTO IMINENTE)`;
        } else {
          statusPercent.textContent = `100% (POUSO CONCLUÍDO // ENTRANDO NO HUB...)`;
        }
      }

      if (intro3D) {
        intro3D.render(p, elapsed);
        if (p >= 1.0 && !impactTriggered) {
          impactTriggered = true;
          impactStartTime = now;
          sfx.impact();
        }
      } else if (ictx) {
        ictx.clearRect(0, 0, iw, ih);

        // Apply Camera Shake upon Atmospheric Impact
        let shakeX = 0, shakeY = 0;
        if (shakeIntensity > 0.1) {
          shakeX = (Math.random() - 0.5) * shakeIntensity;
          shakeY = (Math.random() - 0.5) * shakeIntensity;
          shakeIntensity *= 0.90;
        }

        ictx.save();
        ictx.translate(shakeX, shakeY);

        // 1. Deep Space Cosmic Background with Galactic Band
        ictx.fillStyle = "#010309";
        ictx.fillRect(0, 0, iw, ih);

        const milkyGrad = ictx.createLinearGradient(0, 0, iw, ih);
        milkyGrad.addColorStop(0, "rgba(15, 23, 42, 0.4)");
        milkyGrad.addColorStop(0.35, "rgba(49, 27, 98, 0.18)");
      milkyGrad.addColorStop(0.65, "rgba(14, 116, 144, 0.12)");
      milkyGrad.addColorStop(1, "rgba(2, 6, 23, 0.6)");
      ictx.fillStyle = milkyGrad;
      ictx.fillRect(0, 0, iw, ih);

      // Render Twinkling Stars
      introStars.forEach((star) => {
        const sx = star.x * iw;
        const sy = star.y * ih;
        const twinkle = Math.sin(elapsed * star.twinkleSpeed + star.phase) * 0.35 + 0.65;
        ictx.beginPath();
        ictx.arc(sx, sy, star.r, 0, Math.PI * 2);
        ictx.fillStyle = star.color;
        ictx.globalAlpha = star.alpha * twinkle;
        ictx.fill();
      });
      ictx.globalAlpha = 1;

      // 2. Earth Geometry & Dynamic Positions
      const isMobile = window.innerWidth < 900;
      const baseCx = isMobile ? iw * 0.5 : iw * 0.64;
      const baseCy = isMobile ? ih * 0.44 : ih * 0.52;
      const baseR = Math.min(iw, ih) * (isMobile ? 0.38 : 0.42);

      // Zoom dynamic: as ship approaches, Earth expands slightly into camera
      const er = baseR * (1 + p * 0.18);
      const ex = baseCx;
      const ey = baseCy;

      // Earth Rotation (degrees)
      const earthRotDeg = 15 + elapsed * 7.5;

      // ---------- 3. ATMOSPHERIC RAYLEIGH & MULTI-LAYER SCATTERING (OUTER HALO) ----------
      const atmoGrad = safeRadialGradient(ictx, ex, ey, er * 0.92, ex, ey, er * 1.48);
      atmoGrad.addColorStop(0, "rgba(56, 189, 248, 0.95)");     // Stratosphere Intense Cyan
      atmoGrad.addColorStop(0.12, "rgba(96, 165, 250, 0.82)");   // Rayleigh Nitrogen Blue
      atmoGrad.addColorStop(0.28, "rgba(129, 140, 248, 0.48)");  // Mesosphere Deep Indigo
      atmoGrad.addColorStop(0.50, "rgba(192, 132, 252, 0.22)");  // Thermosphere Violet Glow
      atmoGrad.addColorStop(0.78, "rgba(14, 116, 144, 0.08)");   // Exosphere Faint Corona
      atmoGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ictx.fillStyle = atmoGrad;
      ictx.beginPath();
      ictx.arc(ex, ey, er * 1.48, 0, Math.PI * 2);
      ictx.fill();

      // Tactical Planetary Defense Forcefield Grid (Earth Invasion Alert Lore)
      const shieldPulse = Math.sin(elapsed * 4) * 0.15 + 0.85;
      ictx.save();
      ictx.strokeStyle = `rgba(239, 68, 68, ${0.35 * shieldPulse})`;
      ictx.lineWidth = 1.6;
      ictx.setLineDash([8, 14]);
      ictx.beginPath();
      ictx.arc(ex, ey, er * 1.18, 0, Math.PI * 2);
      ictx.stroke();

      ictx.strokeStyle = `rgba(245, 158, 11, ${0.45 * shieldPulse})`;
      ictx.lineWidth = 1.2;
      ictx.setLineDash([4, 20]);
      ictx.beginPath();
      ictx.arc(ex, ey, er * 1.26, 0, Math.PI * 2);
      ictx.stroke();
      ictx.setLineDash([]);

      // Tactical Invasion Anomaly Beacons along Defense Perimeter
      for (let b = 0; b < 4; b++) {
        const bAngle = (b * Math.PI / 2) + elapsed * 0.4;
        const bx = ex + Math.cos(bAngle) * (er * 1.22);
        const by = ey + Math.sin(bAngle) * (er * 1.22);
        ictx.beginPath();
        ictx.arc(bx, by, 3, 0, Math.PI * 2);
        ictx.fillStyle = b % 2 === 0 ? "#ef4444" : "#f59e0b";
        ictx.shadowColor = "#ef4444";
        ictx.shadowBlur = 8;
        ictx.fill();
      }
      ictx.shadowBlur = 0;
      ictx.restore();

      // ---------- 4. EARTH OCEAN SPHERE (DIFFUSE & SPECULAR GLINT) ----------
      const oceanGrad = safeRadialGradient(
        ictx,
        ex + SUN_DIR.x * er * 0.52,
        ey + SUN_DIR.y * er * 0.52,
        er * 0.08,
        ex,
        ey,
        er
      );
      oceanGrad.addColorStop(0, "#0284c7");
      oceanGrad.addColorStop(0.35, "#0369a1");
      oceanGrad.addColorStop(0.7, "#07264a");
      oceanGrad.addColorStop(0.92, "#04152e");
      oceanGrad.addColorStop(1, "#010712");

      ictx.fillStyle = oceanGrad;
      ictx.beginPath();
      ictx.arc(ex, ey, er, 0, Math.PI * 2);
      ictx.fill();

      // Specular Sun Glint on Ocean
      const glintX = ex + SUN_DIR.x * er * 0.45;
      const glintY = ey + SUN_DIR.y * er * 0.45;
      const glintGrad = safeRadialGradient(ictx, glintX, glintY, 2, glintX, glintY, er * 0.48);
      glintGrad.addColorStop(0, "rgba(255, 255, 255, 0.65)");
      glintGrad.addColorStop(0.2, "rgba(186, 230, 253, 0.32)");
      glintGrad.addColorStop(0.5, "rgba(56, 189, 248, 0.12)");
      glintGrad.addColorStop(1, "rgba(2, 132, 199, 0)");
      ictx.fillStyle = glintGrad;
      ictx.beginPath();
      ictx.arc(ex, ey, er, 0, Math.PI * 2);
      ictx.fill();

      // Clip inside Earth Sphere for Continents, Night Lights & Volumetric Clouds
      ictx.save();
      ictx.beginPath();
      ictx.arc(ex, ey, er, 0, Math.PI * 2);
      ictx.clip();

      // ---------- 5. CONTINENTS & BIOMES (SPHERICAL PROJECTION) ----------
      Object.keys(GEO_LANDMASSES).forEach((key) => {
        const polygon = GEO_LANDMASSES[key];
        const projected = polygon.map((pt) => projectGeo(pt[0], pt[1], earthRotDeg));

        const visiblePts = projected.filter((p) => p.z > -0.1);
        if (visiblePts.length < 3) return;

        ictx.beginPath();
        let first = true;
        projected.forEach((p) => {
          if (p.z > -0.15) {
            const px = ex + p.x * er;
            const py = ey + p.y * er;
            if (first) { ictx.moveTo(px, py); first = false; }
            else { ictx.lineTo(px, py); }
          }
        });
        ictx.closePath();

        let baseBiome = "rgba(22, 101, 52, 0.88)";
        if (key === "africa") baseBiome = "rgba(180, 83, 9, 0.82)";
        if (key === "antarctica" || key === "greenland") baseBiome = "rgba(241, 245, 249, 0.96)";
        if (key === "northAmerica") baseBiome = "rgba(34, 197, 94, 0.78)";
        if (key === "australia") baseBiome = "rgba(194, 65, 12, 0.88)";

        ictx.fillStyle = baseBiome;
        ictx.fill();

        ictx.strokeStyle = "rgba(182, 146, 255, 0.28)";
        ictx.lineWidth = 1;
        ictx.stroke();
      });

      // Night-Side Terminator Shadow Mask with Sunset Amber/Rose Rim
      const nightGrad = safeRadialGradient(
        ictx,
        ex - SUN_DIR.x * er * 0.8,
        ey - SUN_DIR.y * er * 0.8,
        er * 0.1,
        ex,
        ey,
        er * 1.05
      );
      nightGrad.addColorStop(0, "rgba(1, 4, 12, 0.95)");
      nightGrad.addColorStop(0.55, "rgba(1, 4, 12, 0.82)");
      nightGrad.addColorStop(0.82, "rgba(251, 146, 60, 0.38)");  // Warm Twilight Sunset Amber
      nightGrad.addColorStop(0.92, "rgba(244, 63, 94, 0.22)");   // Sunset Crimson/Rose
      nightGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ictx.fillStyle = nightGrad;
      ictx.beginPath();
      ictx.arc(ex, ey, er, 0, Math.PI * 2);
      ictx.fill();

      // ---------- 6. NIGHT-SIDE CITY LIGHTS ----------
      GEO_CITIES.forEach((city) => {
        const pr = projectGeo(city.lat, city.lon, earthRotDeg);
        if (pr.z > 0.05 && pr.dotL < 0.12) {
          const cx = ex + pr.x * er;
          const cy = ey + pr.y * er;
          const nightFactor = Math.max(0, 1 - pr.dotL * 7);
          const flicker = Math.sin(elapsed * 4 + city.lat) * 0.2 + 0.8;

          ictx.beginPath();
          ictx.arc(cx, cy, city.size * (1 + (1 - pr.dotL) * 0.6), 0, Math.PI * 2);
          ictx.fillStyle = `rgba(254, 240, 138, ${0.85 * nightFactor * flicker})`;
          ictx.shadowColor = "rgba(245, 158, 11, 0.9)";
          ictx.shadowBlur = 8;
          ictx.fill();
          ictx.shadowBlur = 0;
        }
      });

      // ---------- 7. ADVANCED VOLUMETRIC CLOUD SYSTEMS & CYCLONES WITH CAST SHADOWS ----------
      drawRealisticEarthClouds(ictx, ex, ey, er, earthRotDeg, SUN_DIR);

      // Sunlit Atmospheric Horizon Crescent (Limb Brightening)
      const sunRimGrad = safeRadialGradient(
        ictx,
        ex + SUN_DIR.x * er * 0.94,
        ey + SUN_DIR.y * er * 0.94,
        er * 0.02,
        ex,
        ey,
        er
      );
      sunRimGrad.addColorStop(0, "rgba(224, 242, 254, 0.65)");
      sunRimGrad.addColorStop(0.3, "rgba(56, 189, 248, 0.35)");
      sunRimGrad.addColorStop(0.7, "rgba(99, 102, 241, 0.12)");
      sunRimGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ictx.fillStyle = sunRimGrad;
      ictx.beginPath();
      ictx.arc(ex, ey, er, 0, Math.PI * 2);
      ictx.fill();

      ictx.restore(); // End Earth Sphere Clip

      // ---------- 8. HOLOGRAPHIC TARGET LOCK (IFF / CAMPOS 21.7°S, 41.3°W) ----------
      const targetGeo = projectGeo(-21.75, -41.32, earthRotDeg);
      let tx = ex + targetGeo.x * er;
      let ty = ey + targetGeo.y * er;
      if (targetGeo.z <= 0.02) {
        tx = ex - er * 0.18;
        ty = ey + er * 0.15;
      }

      const pulse = Math.sin(elapsed * 6) * 4 + 18;

      ictx.save();
      ictx.strokeStyle = "rgba(182, 146, 255, 0.85)";
      ictx.lineWidth = 1.5;
      ictx.shadowColor = "rgba(182, 146, 255, 0.9)";
      ictx.shadowBlur = 10;

      // Rotating reticle ring
      ictx.beginPath();
      ictx.arc(tx, ty, pulse, 0, Math.PI * 2);
      ictx.stroke();

      ictx.beginPath();
      ictx.arc(tx, ty, 3.5, 0, Math.PI * 2);
      ictx.fillStyle = "#b692ff";
      ictx.fill();

      // Target cardinal crosshairs
      ictx.beginPath();
      ictx.moveTo(tx - pulse - 6, ty); ictx.lineTo(tx - pulse + 2, ty);
      ictx.moveTo(tx + pulse - 2, ty); ictx.lineTo(tx + pulse + 6, ty);
      ictx.moveTo(tx, ty - pulse - 6); ictx.lineTo(tx, ty - pulse + 2);
      ictx.moveTo(tx, ty + pulse - 2); ictx.lineTo(tx, ty + pulse + 6);
      ictx.stroke();

      // Target Telemetry Tag & Tactical Invasion Departure Lore
      ictx.font = "600 10px JetBrains Mono, monospace";
      ictx.fillStyle = "#b692ff";
      ictx.fillText("TARGET: 21.7°S 41.3°W // LZ-01 EVACUATION VECTOR", tx + pulse + 8, ty + 3);
      ictx.restore();

      // ---------- 9. REALISTIC HYPERSONIC SPACECRAFT & RE-ENTRY PLASMA ----------
      // Spacecraft Trajectory: Descent from Upper-Left directly into Earth Target LZ
      const shipStartX = iw * 0.05;
      const shipStartY = -60;
      const ctrlX = iw * 0.26;
      const ctrlY = ih * 0.28;

      const u = p; // Complete descent in 2.0 seconds
      const invU = 1 - u;
      const shipX = invU * invU * shipStartX + 2 * invU * u * ctrlX + u * u * tx;
      const shipY = invU * invU * shipStartY + 2 * invU * u * ctrlY + u * u * ty;

      const dx = 2 * invU * (ctrlX - shipStartX) + 2 * u * (tx - ctrlX);
      const dy = 2 * invU * (ctrlY - shipStartY) + 2 * u * (ty - ctrlY);
      const shipAngle = Math.atan2(dy, dx);

      // Peak Re-entry Hypersonic Heating Intensity
      const plasmaIntensity = Math.sin(Math.min(1, Math.max(0, (p - 0.08) / 0.84)) * Math.PI);

      // Trigger Impact when spacecraft reaches Earth surface at elapsed >= 2.0s
      if (p >= 1.0 && !impactTriggered) {
        impactTriggered = true;
        impactStartTime = now;
        sfx.impact();
        shakeIntensity = 34;
        flashAlpha = 1.0;

        for (let i = 0; i < 130; i++) {
          const ang = Math.random() * Math.PI * 2;
          const spd = Math.random() * 16 + 4;
          impactSparks.push({
            x: tx, y: ty,
            vx: Math.cos(ang) * spd,
            vy: Math.sin(ang) * spd,
            size: Math.random() * 4.5 + 1.5,
            life: 1.0,
            decay: Math.random() * 0.024 + 0.014,
            color: Math.random() < 0.4 ? "#b692ff" : (Math.random() < 0.75 ? "#fde047" : "#fb923c")
          });
        }

        shockwaveRings.push(
          { r: 6, maxR: er * 0.95, speed: 7.2, alpha: 0.95 },
          { r: 2, maxR: er * 0.8, speed: 5.4, alpha: 0.8 },
          { r: 1, maxR: er * 0.6, speed: 3.6, alpha: 0.65 }
        );
      }

      // Draw Hypersonic Ship & Plasma Trail during descent (0.0s -> 2.0s)
      if (!impactTriggered) {
        if (plasmaIntensity > 0.05) {
          // Hypersonic Streamlines
          ictx.save();
          ictx.strokeStyle = `rgba(255, 200, 100, ${plasmaIntensity * 0.45})`;
          ictx.lineWidth = 1.4;
          for (let s = 0; s < 6; s++) {
            const streamOffY = (s - 2.5) * 16;
            const streamLen = 150 + Math.random() * 70;
            ictx.beginPath();
            ictx.moveTo(shipX - streamLen, shipY + streamOffY - streamLen * 0.4);
            ictx.lineTo(shipX + 20, shipY + streamOffY);
            ictx.stroke();
          }
          ictx.restore();

          // Hypersonic Bow Shock Wave Plasma Envelopes
          const shockGrad = safeRadialGradient(
            ictx,
            shipX + 10, shipY + 10,
            15,
            shipX - 30, shipY - 20,
            100
          );
          shockGrad.addColorStop(0, `rgba(255, 255, 255, ${plasmaIntensity * 0.95})`);
          shockGrad.addColorStop(0.18, `rgba(253, 224, 71, ${plasmaIntensity * 0.85})`);
          shockGrad.addColorStop(0.45, `rgba(249, 115, 22, ${plasmaIntensity * 0.7})`);
          shockGrad.addColorStop(0.75, `rgba(192, 38, 211, ${plasmaIntensity * 0.4})`);
          shockGrad.addColorStop(1, "rgba(59, 130, 246, 0)");

          ictx.fillStyle = shockGrad;
          ictx.beginPath();
          ictx.arc(shipX, shipY, 100, 0, Math.PI * 2);
          ictx.fill();

          // Plasma Ionization Trail & Burning Flame Wake
          plasmaParticles.forEach((pt) => {
            if (pt.life <= 0) {
              pt.x = shipX - Math.cos(shipAngle) * 35 + (Math.random() - 0.5) * 14;
              pt.y = shipY - Math.sin(shipAngle) * 35 + (Math.random() - 0.5) * 14;
              pt.vx = -Math.cos(shipAngle) * (Math.random() * 6 + 4) + (Math.random() - 0.5) * 2;
              pt.vy = -Math.sin(shipAngle) * (Math.random() * 6 + 4) + (Math.random() - 0.5) * 2;
              pt.life = pt.maxLife;
            } else {
              pt.x += pt.vx;
              pt.y += pt.vy;
              pt.life--;
              const lifeFrac = pt.life / pt.maxLife;
              ictx.beginPath();
              ictx.arc(pt.x, pt.y, pt.size * lifeFrac, 0, Math.PI * 2);
              ictx.fillStyle = `hsla(${pt.hue}, 100%, 65%, ${lifeFrac * plasmaIntensity * 0.85})`;
              ictx.fill();
            }
          });
        }

        // Render Aerospace Spacecraft Vector Geometry
        ictx.save();
        ictx.translate(shipX, shipY);
        ictx.rotate(shipAngle);

        // Heat Shield Belly
        ictx.beginPath();
        ictx.moveTo(48, 0);
        ictx.lineTo(-32, -24);
        ictx.lineTo(-24, 0);
        ictx.lineTo(-32, 24);
        ictx.closePath();
        ictx.fillStyle = plasmaIntensity > 0.2 ? "#7c2d12" : "#1e293b";
        ictx.fill();

        // Thermal glow along leading edges
        if (plasmaIntensity > 0.1) {
          ictx.strokeStyle = `rgba(253, 224, 71, ${plasmaIntensity * 0.95})`;
          ictx.lineWidth = 3;
          ictx.stroke();
        }

        // Aerospace White Hull
        ictx.beginPath();
        ictx.moveTo(44, 0);
        ictx.lineTo(-26, -18);
        ictx.lineTo(-18, 0);
        ictx.lineTo(-26, 18);
        ictx.closePath();
        const hullGrad = ictx.createLinearGradient(0, -20, 0, 20);
        hullGrad.addColorStop(0, "#e2e8f0");
        hullGrad.addColorStop(0.5, "#ffffff");
        hullGrad.addColorStop(1, "#94a3b8");
        ictx.fillStyle = hullGrad;
        ictx.fill();
        ictx.strokeStyle = "rgba(110, 168, 254, 0.8)";
        ictx.lineWidth = 1.4;
        ictx.stroke();

        // Cockpit Canopy
        ictx.beginPath();
        ictx.ellipse(14, 0, 10, 4.2, 0, 0, Math.PI * 2);
        const canopyGrad = ictx.createLinearGradient(10, -4, 18, 4);
        canopyGrad.addColorStop(0, "#38bdf8");
        canopyGrad.addColorStop(0.5, "#0284c7");
        canopyGrad.addColorStop(1, "#082f49");
        ictx.fillStyle = canopyGrad;
        ictx.fill();

        // Winglet Solar Panels
        ictx.beginPath();
        ictx.moveTo(-16, -14); ictx.lineTo(-30, -26); ictx.lineTo(-24, -14);
        ictx.moveTo(-16, 14); ictx.lineTo(-30, 26); ictx.lineTo(-24, 14);
        ictx.fillStyle = "#64748b";
        ictx.fill();

        // Navigation Strobes
        const strobe = Math.sin(elapsed * 8) > 0.4;
        if (strobe || p > 0.85) {
          ictx.beginPath();
          ictx.arc(-28, -24, 2.5, 0, Math.PI * 2);
          ictx.fillStyle = "#ef4444";
          ictx.fill();

          ictx.beginPath();
          ictx.arc(-28, 24, 2.5, 0, Math.PI * 2);
          ictx.fillStyle = "#22c55e";
          ictx.fill();
        }

        // RCS Attitude Control Jets
        if (Math.sin(elapsed * 5) > 0.6) {
          ictx.fillStyle = "rgba(182, 146, 255, 0.9)";
          ictx.beginPath();
          ictx.moveTo(-20, -18); ictx.lineTo(-26, -28); ictx.lineTo(-14, -20);
          ictx.fill();
        }

        ictx.restore();
      }

      // ---------- 10. IMPACT EVENT RENDERING (SHOCKWAVE, SPARKS, THERMAL FLASH) ----------
      if (impactTriggered) {
        // 1. Expanding Atmospheric Shockwave Rings
        shockwaveRings.forEach((ring) => {
          ring.r += ring.speed;
          ring.alpha *= 0.94;
          if (ring.alpha > 0.01) {
            ictx.save();
            ictx.beginPath();
            ictx.arc(tx, ty, ring.r, 0, Math.PI * 2);
            ictx.strokeStyle = `rgba(182, 146, 255, ${ring.alpha * 0.88})`;
            ictx.lineWidth = 3.5;
            ictx.shadowColor = "rgba(182, 146, 255, 0.95)";
            ictx.shadowBlur = 18;
            ictx.stroke();
            ictx.restore();
          }
        });

        // 2. High-Velocity Radial Impact Sparks
        impactSparks.forEach((sp) => {
          sp.x += sp.vx;
          sp.y += sp.vy;
          sp.vx *= 0.96;
          sp.vy *= 0.96;
          sp.life -= sp.decay;
          if (sp.life > 0) {
            ictx.beginPath();
            ictx.arc(sp.x, sp.y, sp.size * sp.life, 0, Math.PI * 2);
            ictx.fillStyle = sp.color;
            ictx.globalAlpha = Math.max(0, sp.life);
            ictx.fill();
          }
        });
        ictx.globalAlpha = 1;

        // 3. Touchdown Hologram Beacon
        const timeSinceImpact = (now - impactStartTime) / 1000;
        const beaconAlpha = Math.max(0, Math.min(1, 1.2 - timeSinceImpact * 1.0));
        if (beaconAlpha > 0.05) {
          ictx.save();
          const beamGrad = ictx.createLinearGradient(tx, ty, tx, ty - 180);
          beamGrad.addColorStop(0, `rgba(182, 146, 255, ${beaconAlpha * 0.85})`);
          beamGrad.addColorStop(0.4, `rgba(253, 224, 71, ${beaconAlpha * 0.5})`);
          beamGrad.addColorStop(1, "rgba(182, 146, 255, 0)");
          ictx.fillStyle = beamGrad;
          ictx.beginPath();
          ictx.moveTo(tx - 6, ty);
          ictx.lineTo(tx + 6, ty);
          ictx.lineTo(tx + 18, ty - 180);
          ictx.lineTo(tx - 18, ty - 180);
          ictx.closePath();
          ictx.fill();

          ictx.font = "700 11px JetBrains Mono, monospace";
          ictx.fillStyle = `rgba(182, 146, 255, ${beaconAlpha})`;
          ictx.fillText("POUSO CONCLUÍDO // ESTAÇÃO SINCRONIZADA", tx + 14, ty - 30);
          ictx.restore();
        }

        // 4. Blinding Thermal Plasma Flash
        if (flashAlpha > 0.01) {
          const flashGrad = safeRadialGradient(ictx, tx, ty, 5, tx, ty, iw * 0.9);
          flashGrad.addColorStop(0, `rgba(255, 255, 255, ${flashAlpha})`);
          flashGrad.addColorStop(0.25, `rgba(253, 224, 71, ${flashAlpha * 0.75})`);
          flashGrad.addColorStop(0.55, `rgba(182, 146, 255, ${flashAlpha * 0.35})`);
          flashGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
          ictx.fillStyle = flashGrad;
          ictx.fillRect(0, 0, iw, ih);
          flashAlpha *= 0.88;
        }
      }

      if (ictx) {
        ictx.restore(); // End Camera Shake Transform
      }
    }

    // Automatically pass directly into Station HUD (3.2s total)
    if (elapsed >= totalDuration) {
      dismissIntro();
      return;
    }

    requestAnimationFrame(renderIntroLoop);
  }

    requestAnimationFrame(renderIntroLoop);

    // Guaranteed fail-safe: dismiss intro after 3.4s
    setTimeout(() => {
      if (introActive) {
        dismissIntro();
      }
    }, 3400);

    function dismissIntro() {
      introActive = false;
      if (intro3D) {
        try { intro3D.destroy(); } catch (e) {}
        intro3D = null;
      }
      if (overlay) overlay.classList.add("dismissed");
      if (mainHudViewport) {
        mainHudViewport.classList.remove("warp-departing");
        mainHudViewport.classList.remove("warp-returning");
      }
      sfx.warp();
      showToast("Central Pedro Rocha Conectada // IFF LZ-01", "star");
      completeQuest("landing");
    }

    const enterBtn = document.getElementById("enterMissionBtn");
    const skipBtn = document.getElementById("skipIntroBtn");
    if (enterBtn && !enterBtn._hasListener) {
      enterBtn._hasListener = true;
      enterBtn.addEventListener("click", dismissIntro);
    }
    if (skipBtn && !skipBtn._hasListener) {
      skipBtn._hasListener = true;
      skipBtn.addEventListener("click", dismissIntro);
    }

    const replayBtn = document.getElementById("replayIntroBtn");
    if (replayBtn && !replayBtn._hasListener) {
      replayBtn._hasListener = true;
      replayBtn.addEventListener("click", () => {
        closeSectorDossier();
        if (overlay) overlay.classList.remove("dismissed");
        introActive = true;
        initIntroCinematic();
      });
    }

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && introActive) dismissIntro();
    });
  }

  function resizeIntroCanvas() {
    if (!introCanvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    iw = introCanvas.width = window.innerWidth * dpr;
    ih = introCanvas.height = window.innerHeight * dpr;
    introCanvas.style.width = window.innerWidth + "px";
    introCanvas.style.height = window.innerHeight + "px";
  }

  /* ============================================================
     4. INTERPLANETARY WARP TRAVEL ENGINE & DEDICATED SECTOR DOSSIER ROUTER
     ============================================================ */
  const warpOverlay = document.getElementById("warpTravelOverlay");
  const warpCanvas = document.getElementById("warpTravelCanvas");
  const warpSpeedText = document.getElementById("warpSpeedText");
  const warpDestText = document.getElementById("warpDestinationText");
  const mainHudViewport = document.getElementById("mainHudViewport");
  const sectorDossierOverlay = document.getElementById("sectorDossierOverlay");
  const dossierActiveTitle = document.getElementById("dossierActiveTitle");

  let warpCtx = null;
  let warpW = 0, warpH = 0, warpDpr = 1;
  let warpAnimId = null;
  let isWarping = false;

  const WARP_DESTINATIONS = {
    sobre: {
      name: "TERRA // BASE LEO & IFF",
      speed: "WARP 9.84c // VETOR ORBITAL",
      coords: "SETOR 01: SISTEMA SOLAR // TERRA [ÓRBITA LEO]",
      type: "earth",
      colorCore: "#38bdf8",
      colorAtmo: "rgba(56, 189, 248, 0.65)"
    },
    software: {
      name: "MARTE // BASE OLYMPUS MONS",
      speed: "WARP 9.92c // REDE MARCIANA",
      coords: "SETOR 02: SISTEMA SOLAR // MARTE [VALLES MARINERIS]",
      type: "mars",
      colorCore: "#f97316",
      colorAtmo: "rgba(249, 115, 22, 0.6)"
    },
    pesquisa: {
      name: "SATURNO // TITÃ & ANÉIS CASSINI",
      speed: "WARP 9.99c // LAB ASTROFÍSICA",
      coords: "SETOR 03: SISTEMA SOLAR // SATURNO [LAB CNPQ & TITÃ]",
      type: "saturn",
      colorCore: "#fbbf24",
      colorAtmo: "rgba(251, 191, 36, 0.65)"
    },
    contato: {
      name: "GARGÂNTUA // BURACO NEGRO (INTERESTELAR)",
      speed: "WARP 9.999c // WORMHOLE RELATIVÍSTICO",
      coords: "SETOR 04: SINGULARIDADE // GARGÂNTUA [HORIZONTE DE EVENTOS]",
      type: "gargantua",
      colorCore: "#f59e0b",
      colorAtmo: "rgba(245, 158, 11, 0.75)"
    },
    hub: {
      name: "ESTAÇÃO ENDURANCE // SISTEMA SOLAR",
      speed: "WARP 9.60c // ACOPLAMENTO 68 RPM",
      coords: "HUB CENTRAL // NAVE ENDURANCE [SISTEMA SOLAR]",
      type: "hub",
      colorCore: "#b692ff",
      colorAtmo: "rgba(182, 146, 255, 0.55)"
    }
  };

  const sectorTitles = {
    sobre: "SETOR 01 // TERRA · TRAJETÓRIA & FORMAÇÃO",
    software: "SETOR 02 // MARTE · SOFTWARE & REPOSITÓRIOS",
    pesquisa: "SETOR 03 // SATURNO · ASTROFÍSICA & CNPQ",
    contato: "SETOR 04 // GARGÂNTUA · CV & CONTATOS (INTERESTELAR)"
  };

  // Hyperspace Star Particle System (140 3D warp stars)
  const WARP_PARTICLES_COUNT = 140;
  let warpStars = [];

  function initWarpStars() {
    warpStars = [];
    for (let i = 0; i < WARP_PARTICLES_COUNT; i++) {
      warpStars.push({
        x: (Math.random() - 0.5) * 2000,
        y: (Math.random() - 0.5) * 2000,
        z: Math.random() * 1000 + 1,
        pz: 1000,
        radius: Math.random() * 1.5 + 0.8,
        color: Math.random() > 0.3 ? "#e2e8f0" : (Math.random() > 0.5 ? "#67e8f9" : "#c084fc")
      });
    }
  }

  let warp3D = null;

  function resizeWarpCanvas() {
    if (!warpCanvas) return;
    warpDpr = Math.min(window.devicePixelRatio || 1, 2);
    warpW = warpCanvas.width = window.innerWidth * warpDpr;
    warpH = warpCanvas.height = window.innerHeight * warpDpr;
    warpCanvas.style.width = window.innerWidth + "px";
    warpCanvas.style.height = window.innerHeight + "px";
  }

  function initWarpTravelEngine() {
    if (!warpCanvas) return;
    if (window.Space3D && typeof window.Space3D.initWarpScene === "function") {
      try {
        warp3D = window.Space3D.initWarpScene(warpCanvas);
      } catch (e) {
        console.warn("3D Warp scene fallback:", e);
      }
    }
    if (!warp3D) {
      warpCtx = warpCanvas.getContext("2d");
      resizeWarpCanvas();
      window.addEventListener("resize", resizeWarpCanvas);
      initWarpStars();
    }
  }

  function drawPlanet(pctx, type, cx, cy, radius, progress) {
    if (radius <= 1) return;
    pctx.save();
    pctx.translate(cx, cy);

    // ============================================================
    // GARGÂNTUA // BURACO NEGRO SUPERMASSIVO (INTERESTELAR / NOLAN)
    // ============================================================
    if (type === "gargantua" || type === "solaris") {
      const bhRadius = radius * 0.95;
      const rot = progress * 1.6;

      // 1. Einstein Ring Gravitational Lensing Halo (Distorted Spacetime)
      const lensGrad = pctx.createRadialGradient(0, 0, bhRadius * 0.45, 0, 0, bhRadius * 1.65);
      lensGrad.addColorStop(0, "rgba(254, 240, 138, 0.95)");
      lensGrad.addColorStop(0.2, "rgba(245, 158, 11, 0.8)");
      lensGrad.addColorStop(0.45, "rgba(234, 88, 12, 0.4)");
      lensGrad.addColorStop(0.75, "rgba(180, 83, 9, 0.15)");
      lensGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      pctx.beginPath();
      pctx.arc(0, 0, bhRadius * 1.65, 0, Math.PI * 2);
      pctx.fillStyle = lensGrad;
      pctx.fill();

      // 2. Gravitationally Lensed Upper Accretion Disk Arc (Bent over the top)
      pctx.save();
      pctx.beginPath();
      pctx.ellipse(0, -bhRadius * 0.35, bhRadius * 1.35, bhRadius * 0.85, 0, Math.PI * 0.95, Math.PI * 2.05);
      pctx.lineWidth = Math.max(3, bhRadius * 0.22);
      const upperArcGrad = pctx.createLinearGradient(-bhRadius * 1.3, 0, bhRadius * 1.3, 0);
      upperArcGrad.addColorStop(0, "rgba(255, 255, 255, 0.98)");   // Relativistic Doppler Blue/Gold Boost (Left)
      upperArcGrad.addColorStop(0.35, "rgba(253, 224, 71, 0.95)");
      upperArcGrad.addColorStop(0.7, "rgba(249, 115, 22, 0.65)");
      upperArcGrad.addColorStop(1, "rgba(185, 28, 28, 0.35)");    // Relativistic Redshift (Right)
      pctx.strokeStyle = upperArcGrad;
      pctx.shadowColor = "#f59e0b";
      pctx.shadowBlur = 18;
      pctx.stroke();
      pctx.restore();

      // 3. Gravitationally Lensed Lower Accretion Disk Arc (Bent beneath the bottom)
      pctx.save();
      pctx.beginPath();
      pctx.ellipse(0, bhRadius * 0.35, bhRadius * 1.35, bhRadius * 0.85, 0, 0, Math.PI * 1.1);
      pctx.lineWidth = Math.max(2, bhRadius * 0.16);
      const lowerArcGrad = pctx.createLinearGradient(-bhRadius * 1.3, 0, bhRadius * 1.3, 0);
      lowerArcGrad.addColorStop(0, "rgba(255, 255, 255, 0.92)");
      lowerArcGrad.addColorStop(0.4, "rgba(251, 191, 36, 0.85)");
      lowerArcGrad.addColorStop(1, "rgba(194, 65, 12, 0.3)");
      pctx.strokeStyle = lowerArcGrad;
      pctx.stroke();
      pctx.restore();

      // 4. Equatorial Accretion Disk Ring (Relativistic Matter Stream)
      pctx.save();
      pctx.beginPath();
      pctx.ellipse(0, 0, bhRadius * 1.7, bhRadius * 0.32, -0.08, 0, Math.PI * 2);
      pctx.lineWidth = Math.max(3.5, bhRadius * 0.28);
      const eqDiskGrad = pctx.createLinearGradient(-bhRadius * 1.7, 0, bhRadius * 1.7, 0);
      eqDiskGrad.addColorStop(0, "rgba(255, 255, 255, 1.0)");      // Blinding Doppler Brightening (Approaching side)
      eqDiskGrad.addColorStop(0.25, "rgba(254, 240, 138, 0.95)");
      eqDiskGrad.addColorStop(0.55, "rgba(245, 158, 11, 0.85)");
      eqDiskGrad.addColorStop(0.85, "rgba(234, 88, 12, 0.5)");
      eqDiskGrad.addColorStop(1, "rgba(124, 45, 18, 0.25)");      // Doppler Dimming (Receding side)
      pctx.strokeStyle = eqDiskGrad;
      pctx.shadowColor = "#fbbf24";
      pctx.shadowBlur = 24;
      pctx.stroke();
      pctx.restore();

      // 5. Razor-Thin Photon Sphere (1.5x Schwarzschild Radius)
      pctx.save();
      pctx.beginPath();
      pctx.arc(0, 0, bhRadius * 0.56, 0, Math.PI * 2);
      pctx.strokeStyle = "rgba(255, 255, 255, 0.98)";
      pctx.lineWidth = Math.max(1.5, bhRadius * 0.035);
      pctx.shadowColor = "#ffffff";
      pctx.shadowBlur = 12;
      pctx.stroke();
      pctx.restore();

      // 6. Schwarzschild Event Horizon (Infinite Pitch-Black Shadow)
      pctx.beginPath();
      pctx.arc(0, 0, bhRadius * 0.52, 0, Math.PI * 2);
      pctx.fillStyle = "#000000";
      pctx.fill();

      // 7. Relativistic Accretion Flares & Swirling Vortices
      for (let f = 0; f < 5; f++) {
        const fAngle = (f * Math.PI * 2 / 5) + rot * 1.8;
        const fDist = bhRadius * (0.8 + (f % 3) * 0.25);
        const fx = Math.cos(fAngle) * fDist;
        const fy = Math.sin(fAngle) * (fDist * 0.22);
        pctx.beginPath();
        pctx.arc(fx, fy, Math.max(2, bhRadius * 0.06), 0, Math.PI * 2);
        pctx.fillStyle = f % 2 === 0 ? "rgba(255, 255, 255, 0.9)" : "rgba(253, 224, 71, 0.85)";
        pctx.shadowColor = "#fef08a";
        pctx.shadowBlur = 8;
        pctx.fill();
      }

      pctx.restore();
      return;
    }

    // ============================================================
    // MARTE // SISTEMA SOLAR (O PLANETA VERMELHO · SETOR 02)
    // ============================================================
    if (type === "mars" || type === "cyber") {
      // 1. Thin Salmon-Amber Martian Atmospheric Haze
      const atmoGrad = pctx.createRadialGradient(0, 0, radius * 0.85, 0, 0, radius * 1.35);
      atmoGrad.addColorStop(0, "rgba(249, 115, 22, 0.6)");
      atmoGrad.addColorStop(0.5, "rgba(239, 68, 68, 0.25)");
      atmoGrad.addColorStop(1, "rgba(249, 115, 22, 0)");
      pctx.beginPath();
      pctx.arc(0, 0, radius * 1.35, 0, Math.PI * 2);
      pctx.fillStyle = atmoGrad;
      pctx.fill();

      // 2. Base Sphere with Iron Oxide Rust Terrain & 3D Lighting
      pctx.save();
      pctx.beginPath();
      pctx.arc(0, 0, radius, 0, Math.PI * 2);
      pctx.clip();

      const lx = -radius * 0.35;
      const ly = -radius * 0.35;
      const marsGrad = pctx.createRadialGradient(lx, ly, radius * 0.05, 0, 0, radius);
      marsGrad.addColorStop(0, "#ea580c");   // Sunlit Iron Dust
      marsGrad.addColorStop(0.4, "#c2410c");  // Rust Highlands
      marsGrad.addColorStop(0.75, "#7c2d12"); // Volcanic Basalt
      marsGrad.addColorStop(0.92, "#451a03"); // Deep Shadow Canyon
      marsGrad.addColorStop(1, "#180702");
      pctx.fillStyle = marsGrad;
      pctx.fillRect(-radius, -radius, radius * 2, radius * 2);

      // Rotating Martian Geographic Features (Valles Marineris & Highlands)
      const rot = progress * 1.3;
      pctx.fillStyle = "#431407"; // Dark volcanic rock
      for (let c = -1; c <= 1; c++) {
        const cxOffset = (c * radius * 1.5 + rot * radius * 0.6) % (radius * 2.2) - radius * 0.35;
        // Valles Marineris Canyon Scar
        pctx.beginPath();
        pctx.ellipse(cxOffset, -radius * 0.08, radius * 0.55, radius * 0.09, -0.08, 0, Math.PI * 2);
        pctx.fill();

        // Olympus Mons Shield Volcano Caldera
        pctx.beginPath();
        pctx.arc(cxOffset - radius * 0.25, -radius * 0.22, radius * 0.16, 0, Math.PI * 2);
        pctx.fillStyle = "#9a3412";
        pctx.fill();
        pctx.beginPath();
        pctx.arc(cxOffset - radius * 0.25, -radius * 0.22, radius * 0.05, 0, Math.PI * 2);
        pctx.fillStyle = "#290c04";
        pctx.fill();
      }

      // Brilliant White Carbon Dioxide / Water-Ice Polar Caps
      pctx.fillStyle = "#f8fafc";
      pctx.shadowColor = "#bae6fd";
      pctx.shadowBlur = 6;
      // North Polar Ice Cap
      pctx.beginPath();
      pctx.ellipse(0, -radius * 0.92, radius * 0.38, radius * 0.14, 0, 0, Math.PI * 2);
      pctx.fill();
      // South Polar Ice Cap
      pctx.beginPath();
      pctx.ellipse(0, radius * 0.94, radius * 0.32, radius * 0.12, 0, 0, Math.PI * 2);
      pctx.fill();
      pctx.shadowBlur = 0;

      // Martian Dust Storm Fronts
      pctx.fillStyle = "rgba(253, 186, 116, 0.35)";
      for (let c = -1; c <= 1; c++) {
        const cxOffset = (c * radius * 1.8 + rot * radius * 0.8) % (radius * 2.4) - radius * 0.45;
        pctx.beginPath();
        pctx.ellipse(cxOffset + radius * 0.15, radius * 0.25, radius * 0.4, radius * 0.12, 0.1, 0, Math.PI * 2);
        pctx.fill();
      }

      // 3D Terminator Shadow
      const shadowGrad = pctx.createRadialGradient(radius * 0.35, radius * 0.35, radius * 0.4, 0, 0, radius * 1.05);
      shadowGrad.addColorStop(0, "rgba(0, 0, 0, 0)");
      shadowGrad.addColorStop(0.65, "rgba(2, 4, 12, 0.45)");
      shadowGrad.addColorStop(1, "rgba(1, 2, 6, 0.92)");
      pctx.fillStyle = shadowGrad;
      pctx.fillRect(-radius, -radius, radius * 2, radius * 2);

      pctx.restore(); // end clip

      // Mars Orbital Vector Ring & Telemetry
      pctx.save();
      pctx.rotate(-0.25);
      pctx.strokeStyle = "rgba(249, 115, 22, 0.7)";
      pctx.lineWidth = Math.max(1.2, radius * 0.025);
      pctx.setLineDash([8, 12]);
      pctx.beginPath();
      pctx.ellipse(0, 0, radius * 1.45, radius * 0.42, 0, 0, Math.PI * 2);
      pctx.stroke();
      pctx.restore();

      pctx.restore();
      return;
    }

    // ============================================================
    // SATURNO // SISTEMA SOLAR (O GIGANTE DOS ANÉIS · SETOR 03)
    // ============================================================
    if (type === "saturn" || type === "pulsar") {
      // 1. Golden Atmospheric Halo
      const atmoGrad = pctx.createRadialGradient(0, 0, radius * 0.82, 0, 0, radius * 1.4);
      atmoGrad.addColorStop(0, "rgba(251, 191, 36, 0.75)");
      atmoGrad.addColorStop(0.45, "rgba(217, 119, 6, 0.3)");
      atmoGrad.addColorStop(1, "rgba(251, 191, 36, 0)");
      pctx.beginPath();
      pctx.arc(0, 0, radius * 1.4, 0, Math.PI * 2);
      pctx.fillStyle = atmoGrad;
      pctx.fill();

      // Draw Back Half of Saturn Rings (Behind the planet)
      pctx.save();
      pctx.rotate(-0.35);
      // Ring A & B
      const ringGrad = pctx.createRadialGradient(0, 0, radius * 1.15, 0, 0, radius * 2.35);
      ringGrad.addColorStop(0, "rgba(254, 240, 138, 0.88)");
      ringGrad.addColorStop(0.48, "rgba(217, 119, 6, 0.75)");
      ringGrad.addColorStop(0.55, "rgba(2, 4, 12, 0.15)");    // Cassini Division Gap!
      ringGrad.addColorStop(0.62, "rgba(251, 191, 36, 0.85)");
      ringGrad.addColorStop(0.92, "rgba(180, 83, 9, 0.55)");
      ringGrad.addColorStop(1, "rgba(251, 191, 36, 0)");

      pctx.beginPath();
      pctx.ellipse(0, 0, radius * 2.35, radius * 0.65, 0, Math.PI, Math.PI * 2); // Top/Back arc
      pctx.lineWidth = Math.max(3, radius * 0.28);
      pctx.strokeStyle = ringGrad;
      pctx.stroke();
      pctx.restore();

      // 2. Base Sphere with Banded Golden Gas Atmosphere
      pctx.save();
      pctx.beginPath();
      pctx.arc(0, 0, radius, 0, Math.PI * 2);
      pctx.clip();

      const lx = -radius * 0.35;
      const ly = -radius * 0.35;
      const saturnGrad = pctx.createRadialGradient(lx, ly, radius * 0.05, 0, 0, radius);
      saturnGrad.addColorStop(0, "#fef08a");   // Cream Ammonia Clouds
      saturnGrad.addColorStop(0.35, "#fde047");
      saturnGrad.addColorStop(0.65, "#d97706");
      saturnGrad.addColorStop(0.9, "#92400e");
      saturnGrad.addColorStop(1, "#291204");
      pctx.fillStyle = saturnGrad;
      pctx.fillRect(-radius, -radius, radius * 2, radius * 2);

      // Zonal Atmospheric Cloud Bands
      const bandColors = [
        "rgba(254, 240, 138, 0.6)",
        "rgba(180, 83, 9, 0.45)",
        "rgba(253, 224, 71, 0.5)",
        "rgba(146, 64, 14, 0.55)",
        "rgba(254, 240, 138, 0.4)"
      ];
      for (let b = -3; b <= 3; b++) {
        pctx.fillStyle = bandColors[(b + 3) % bandColors.length];
        pctx.beginPath();
        pctx.fillRect(-radius, (b * radius * 0.26) - radius * 0.08, radius * 2, radius * 0.16);
      }

      // Rings Shadow Band projected onto Saturn's Equator
      pctx.fillStyle = "rgba(2, 4, 12, 0.65)";
      pctx.beginPath();
      pctx.ellipse(0, radius * 0.08, radius * 0.95, radius * 0.14, -0.15, 0, Math.PI * 2);
      pctx.fill();

      // 3D Terminator Shadow
      const shadowGrad = pctx.createRadialGradient(radius * 0.35, radius * 0.35, radius * 0.4, 0, 0, radius * 1.05);
      shadowGrad.addColorStop(0, "rgba(0, 0, 0, 0)");
      shadowGrad.addColorStop(0.65, "rgba(2, 4, 12, 0.45)");
      shadowGrad.addColorStop(1, "rgba(1, 2, 6, 0.92)");
      pctx.fillStyle = shadowGrad;
      pctx.fillRect(-radius, -radius, radius * 2, radius * 2);

      pctx.restore(); // end clip

      // Draw Front Half of Saturn Rings (Crossing in front of the planet)
      pctx.save();
      pctx.rotate(-0.35);
      pctx.beginPath();
      pctx.ellipse(0, 0, radius * 2.35, radius * 0.65, 0, 0, Math.PI); // Bottom/Front arc
      pctx.lineWidth = Math.max(3, radius * 0.28);
      pctx.strokeStyle = ringGrad;
      pctx.shadowColor = "#f59e0b";
      pctx.shadowBlur = 10;
      pctx.stroke();

      // Orbiting Titan Moon
      const titanAngle = progress * 2.2;
      const tx = Math.cos(titanAngle) * (radius * 2.7);
      const ty = Math.sin(titanAngle) * (radius * 0.85);
      pctx.beginPath();
      pctx.arc(tx, ty, Math.max(2.5, radius * 0.05), 0, Math.PI * 2);
      pctx.fillStyle = "#fb923c";
      pctx.shadowColor = "#ea580c";
      pctx.shadowBlur = 8;
      pctx.fill();
      pctx.restore();

      pctx.restore();
      return;
    }

    // ============================================================
    // TERRA & HUB // SISTEMA SOLAR (SETOR 01 & HUB CENTRAL ENDURANCE)
    // ============================================================
    // 1. Realistic Multi-Layer Rayleigh Atmospheric Scattering Halo
    const atmoGrad = pctx.createRadialGradient(0, 0, radius * 0.88, 0, 0, radius * 1.52);
    atmoGrad.addColorStop(0, "rgba(56, 189, 248, 0.95)");      // Intense Stratosphere Cyan
    atmoGrad.addColorStop(0.15, "rgba(96, 165, 250, 0.82)");   // Nitrogen Rayleigh Blue
    atmoGrad.addColorStop(0.35, "rgba(129, 140, 248, 0.45)");  // Deep Mesosphere Indigo
    atmoGrad.addColorStop(0.65, "rgba(14, 116, 144, 0.14)");   // Thermosphere
    atmoGrad.addColorStop(1, "rgba(56, 189, 248, 0)");
    pctx.beginPath();
    pctx.arc(0, 0, radius * 1.52, 0, Math.PI * 2);
    pctx.fillStyle = atmoGrad;
    pctx.fill();

    // 2. Base Ocean Sphere with 3D Sunlit Directional Depth
    pctx.save();
    pctx.beginPath();
    pctx.arc(0, 0, radius, 0, Math.PI * 2);
    pctx.clip();

    const lx = -radius * 0.38;
    const ly = -radius * 0.38;
    const oceanGrad = pctx.createRadialGradient(lx, ly, radius * 0.05, 0, 0, radius * 1.05);
    oceanGrad.addColorStop(0, "#0284c7");    // Sunlit Azure Waters
    oceanGrad.addColorStop(0.28, "#0369a1"); // Continental Shelf Blue
    oceanGrad.addColorStop(0.6, "#07264a");  // Deep Abyssal Ocean
    oceanGrad.addColorStop(0.88, "#04152e"); // Shadow Ocean
    oceanGrad.addColorStop(1, "#010712");
    pctx.fillStyle = oceanGrad;
    pctx.fillRect(-radius, -radius, radius * 2, radius * 2);

    // 3. Specular Sun Glint on Ocean
    const glintGrad = pctx.createRadialGradient(lx * 0.85, ly * 0.85, 2, lx * 0.85, ly * 0.85, radius * 0.45);
    glintGrad.addColorStop(0, "rgba(255, 255, 255, 0.6)");
    glintGrad.addColorStop(0.25, "rgba(186, 230, 253, 0.28)");
    glintGrad.addColorStop(0.6, "rgba(56, 189, 248, 0.08)");
    glintGrad.addColorStop(1, "rgba(2, 132, 199, 0)");
    pctx.fillStyle = glintGrad;
    pctx.fillRect(-radius, -radius, radius * 2, radius * 2);

    // 4. Continents & Detailed Biomes with Natural Terrain Contours
    const rot = progress * 1.5;
    for (let c = -1; c <= 1; c++) {
      const cxOffset = (c * radius * 1.45 + rot * radius * 0.72) % (radius * 2.25) - radius * 0.38;

      // South America / Africa Landmasses
      pctx.fillStyle = "#15803d"; // Lush Amazon / Congo Rainforest
      pctx.beginPath();
      pctx.ellipse(cxOffset, -radius * 0.15, radius * 0.38, radius * 0.26, 0.15, 0, Math.PI * 2);
      pctx.ellipse(cxOffset + radius * 0.26, radius * 0.18, radius * 0.44, radius * 0.28, -0.12, 0, Math.PI * 2);
      pctx.fill();

      // Sahara / Desert Highlands Biome
      pctx.fillStyle = "#d97706";
      pctx.beginPath();
      pctx.ellipse(cxOffset + radius * 0.12, -radius * 0.28, radius * 0.24, radius * 0.14, 0.08, 0, Math.PI * 2);
      pctx.fill();

      // Mountain Ridges (Andes / Himalayas)
      pctx.fillStyle = "#1e293b";
      pctx.beginPath();
      pctx.ellipse(cxOffset - radius * 0.18, -radius * 0.12, radius * 0.06, radius * 0.32, 0.18, 0, Math.PI * 2);
      pctx.fill();
    }

    // Polar Ice Caps (Arctic & Antarctic)
    pctx.fillStyle = "#f8fafc";
    pctx.shadowColor = "#bae6fd";
    pctx.shadowBlur = 6;
    pctx.beginPath();
    pctx.ellipse(0, -radius * 0.94, radius * 0.42, radius * 0.13, 0, 0, Math.PI * 2);
    pctx.ellipse(0, radius * 0.96, radius * 0.46, radius * 0.15, 0, 0, Math.PI * 2);
    pctx.fill();
    pctx.shadowBlur = 0;

    // 5. Realistic Volumetric Clouds on Planet Sphere
    drawRealisticEarthClouds(pctx, 0, 0, radius, rot * 60, { x: -0.62, y: -0.38, z: 0.68 });

    // 6. 3D Terminator Shadow with Sunset Twilight Rim
    const shadowGrad = pctx.createRadialGradient(radius * 0.38, radius * 0.38, radius * 0.35, 0, 0, radius * 1.05);
    shadowGrad.addColorStop(0, "rgba(0, 0, 0, 0)");
    shadowGrad.addColorStop(0.62, "rgba(2, 4, 12, 0.45)");
    shadowGrad.addColorStop(0.82, "rgba(251, 146, 60, 0.32)");  // Sunset Twilight Amber
    shadowGrad.addColorStop(0.92, "rgba(244, 63, 94, 0.18)");   // Sunset Rose
    shadowGrad.addColorStop(1, "rgba(1, 2, 6, 0.94)");
    pctx.fillStyle = shadowGrad;
    pctx.fillRect(-radius, -radius, radius * 2, radius * 2);

    pctx.restore(); // end clip

    // Planet Orbit Features (Endurance Spacecraft / Tactical Planetary Defense)
    if (type === "earth" || type === "hub") {
      pctx.save();
      pctx.strokeStyle = "rgba(239, 68, 68, 0.4)";
      pctx.lineWidth = Math.max(1, radius * 0.015);
      pctx.setLineDash([6, 10]);
      pctx.beginPath();
      pctx.arc(0, 0, radius * 1.2, 0, Math.PI * 2);
      pctx.stroke();

      pctx.strokeStyle = "rgba(245, 158, 11, 0.45)";
      pctx.lineWidth = Math.max(1, radius * 0.012);
      pctx.setLineDash([4, 16]);
      pctx.beginPath();
      pctx.arc(0, 0, radius * 1.28, 0, Math.PI * 2);
      pctx.stroke();
      pctx.setLineDash([]);

      if (type === "hub") {
        // High-Tech Endurance 12-Pod Ring Spacecraft Structure (Rotating at 68 RPM)
        pctx.strokeStyle = "rgba(182, 146, 255, 0.85)";
        pctx.lineWidth = Math.max(1.5, radius * 0.025);
        pctx.beginPath();
        pctx.ellipse(0, 0, radius * 1.5, radius * 0.45, -0.2, 0, Math.PI * 2);
        pctx.stroke();

        // 12 Modular Pods on Endurance Ring
        for (let a = 0; a < 12; a++) {
          const sAngle = (a * Math.PI * 2 / 12) + progress * 0.8;
          const sx = Math.cos(sAngle) * (radius * 1.5);
          const sy = Math.sin(sAngle) * (radius * 0.45);
          pctx.beginPath();
          pctx.arc(sx, sy, Math.max(2.2, radius * 0.035), 0, Math.PI * 2);
          pctx.fillStyle = a % 3 === 0 ? "#b692ff" : "#e2e8f0";
          pctx.shadowColor = "#b692ff";
          pctx.shadowBlur = 6;
          pctx.fill();
        }
      }
      pctx.restore();
    }

    pctx.restore();
  }

  function triggerInterplanetaryWarp(sectorKey, callbacks = {}) {
    const onArrival = callbacks.onArrival;
    const onComplete = callbacks.onComplete;

    if (reduceMotion || !warpOverlay || !warpCanvas) {
      if (typeof onArrival === "function") {
        try { onArrival(); } catch (e) {}
      }
      if (typeof onComplete === "function") {
        try { onComplete(); } catch (e) {}
      }
      return;
    }

    if (warpAnimId) {
      cancelAnimationFrame(warpAnimId);
      warpAnimId = null;
    }

    const dest = WARP_DESTINATIONS[sectorKey] || WARP_DESTINATIONS.hub;
    isWarping = true;

    // Trigger Born This Way Synth Theme & Warp Sound FX
    sfx.bornThisWay();
    sfx.warp();

    if (warpSpeedText) warpSpeedText.textContent = dest.speed;
    if (warpDestText) warpDestText.textContent = dest.coords;

    warpOverlay.classList.add("active");
    if (warp3D) {
      warp3D.setDestination(dest.type);
    } else {
      resizeWarpCanvas();
    }

    const startTime = performance.now();
    const duration = 1000; // Fast and snappy 1.0-second interplanetary warp transition
    let arrivalFired = false;

    // Safety fallback timeout to ensure overlay is always dismissed
    const safetyTimer = setTimeout(() => {
      if (!arrivalFired && typeof onArrival === "function") {
        try { onArrival(); } catch (e) {}
      }
      if (warpOverlay) warpOverlay.classList.remove("active");
      isWarping = false;
      if (typeof onComplete === "function") {
        try { onComplete(); } catch (e) {}
      }
    }, duration + 120);

    function renderWarpFrame(now) {
      const elapsed = now - startTime;
      const p = Math.min(1, Math.max(0, elapsed / duration));

      // Dynamic Telemetry updates based on flight phase
      if (warpSpeedText) {
        if (p < 0.28) {
          warpSpeedText.textContent = `SPOOLING WARP DRIVES // 0.${Math.floor(p * 320)}c`;
        } else if (p < 0.72) {
          warpSpeedText.textContent = dest.speed;
        } else {
          warpSpeedText.textContent = "ORBITAL INSERTION // DESACELERAÇÃO // 0.12c";
        }
      }
      if (warpDestText) {
        warpDestText.textContent = dest.coords;
      }

      const warpSpeedFactor = Math.sin(p * Math.PI);

      if (warp3D) {
        warp3D.render(p, warpSpeedFactor);
      } else if (warpCtx) {
        warpCtx.clearRect(0, 0, warpW, warpH);

        const cx = warpW / 2;
        const cy = warpH / 2;

        // 1. Star Streaks in Hyperdrive (Smooth bell curve velocity)
        const currentSpeed = 16 + Math.pow(warpSpeedFactor, 1.35) * 165;

        warpCtx.lineWidth = 1.8 * warpDpr;
        for (let i = 0; i < warpStars.length; i++) {
          const s = warpStars[i];
          s.pz = s.z;
          s.z -= currentSpeed;
          if (s.z <= 10) {
            s.z = 1000;
            s.pz = 1000;
          }

          const k = (520 * warpDpr) / s.z;
          const pk = (520 * warpDpr) / s.pz;

          const sx = cx + s.x * k;
          const sy = cy + s.y * k;
          const spx = cx + s.x * pk;
          const spy = cy + s.y * pk;

          const alpha = Math.min(1, Math.max(0.08, (1000 - s.z) / 800));
          warpCtx.strokeStyle = s.color;
          warpCtx.globalAlpha = alpha * (0.25 + warpSpeedFactor * 0.75);

          warpCtx.beginPath();
          warpCtx.moveTo(spx, spy);
          warpCtx.lineTo(sx, sy);
          warpCtx.stroke();
        }
        warpCtx.globalAlpha = 1;

        // 2. Warp Tunnel Concentric Hyperspace Rings
        const ringAlpha = warpSpeedFactor * 0.38;
        if (ringAlpha > 0.02) {
          for (let r = 1; r <= 3; r++) {
            const rRadius = ((p * 2.2 + r * 0.33) % 1) * Math.max(warpW, warpH) * 0.65;
            warpCtx.beginPath();
            warpCtx.arc(cx, cy, rRadius, 0, Math.PI * 2);
            warpCtx.strokeStyle = dest.colorAtmo;
            warpCtx.lineWidth = 2 * warpDpr;
            warpCtx.globalAlpha = ringAlpha * (1 - rRadius / (Math.max(warpW, warpH) * 0.65));
            warpCtx.stroke();
          }
          warpCtx.globalAlpha = 1;
        }

        // 3. Approaching Celestial Planet (Calm cubic easing)
        if (p >= 0.18) {
          const planetP = Math.min(1, (p - 0.18) / 0.70);
          const easedScale = 1 - Math.pow(1 - planetP, 2.6);
          const maxPlanetRadius = Math.min(warpW, warpH) * 0.36;
          const currentRadius = Math.max(2, maxPlanetRadius * easedScale);
          drawPlanet(warpCtx, dest.type, cx, cy, currentRadius, p);
        }

        // 4. Soft Atmosphere Penetration Crossfade (Orbital entry)
        if (p >= 0.70) {
          const flashP = (p - 0.70) / 0.30;
          const flashAlpha = Math.sin(flashP * Math.PI) * 0.58;
          const flashGrad = warpCtx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(warpW, warpH) * 0.85);
          flashGrad.addColorStop(0, `rgba(255, 255, 255, ${flashAlpha * 0.9})`);
          flashGrad.addColorStop(0.45, dest.colorAtmo.replace(/[\d\.]+\)$/, `${flashAlpha * 0.65})`));
          flashGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
          warpCtx.fillStyle = flashGrad;
          warpCtx.fillRect(0, 0, warpW, warpH);
        }
      }

      // Fire arrival at ~50% progress while hyperspace cruise comfortably masks the DOM swap
      if (p >= 0.50 && !arrivalFired) {
        arrivalFired = true;
        if (typeof onArrival === "function") {
          try { onArrival(); } catch (e) {}
        }
      }

      if (p < 1) {
        warpAnimId = requestAnimationFrame(renderWarpFrame);
      } else {
        clearTimeout(safetyTimer);
        warpOverlay.classList.remove("active");
        isWarping = false;
        warpAnimId = null;
        if (typeof onComplete === "function") {
          try { onComplete(); } catch (e) {}
        }
      }
    }

    warpAnimId = requestAnimationFrame(renderWarpFrame);
  }

  function openSectorDossier(sectorName, syncHash = true) {
    if (!sectorDossierOverlay) return;
    if (activeSector === sectorName && sectorDossierOverlay.classList.contains("active")) return;

    if (syncHash && window.location.hash !== `#${sectorName}`) {
      window.history.pushState(null, "", `#${sectorName}`);
    }

    if (mainHudViewport) {
      mainHudViewport.classList.remove("warp-returning");
      mainHudViewport.classList.add("warp-departing");
    }

    triggerInterplanetaryWarp(sectorName, {
      onArrival: () => {
        activeSector = sectorName;

        // Trigger Gamified Onboarding Quests
        if (sectorName === "sobre") completeQuest("sobre");
        else if (sectorName === "software") completeQuest("software");
        else if (sectorName === "pesquisa") completeQuest("pesquisa");
        else if (sectorName === "contato") completeQuest("contato");

        // Update active tab buttons
        document.querySelectorAll("[data-switch-sector]").forEach((btn) => {
          btn.classList.toggle("active", btn.dataset.switchSector === sectorName);
        });

        // Update active panel
        document.querySelectorAll(".dossier-panel").forEach((panel) => {
          panel.classList.toggle("active", panel.id === `panel-${sectorName}`);
        });

        if (dossierActiveTitle) {
          dossierActiveTitle.textContent = sectorTitles[sectorName] || "SETOR SELECIONADO";
        }

        sectorDossierOverlay.classList.remove("dossier-departing");
        sectorDossierOverlay.classList.add("active", "dossier-arriving");
        initCounters();
        wireSpotlights(sectorDossierOverlay);

        const currentPanel = document.getElementById(`panel-${sectorName}`);
        if (currentPanel) {
          renderFloatingEasterEggs(currentPanel, sectorName);
        }

        if (sectorName === "contato" && gargantua3DInstance && typeof gargantua3DInstance.resize === "function") {
          setTimeout(() => gargantua3DInstance.resize(), 60);
        }
      },
      onComplete: () => {
        if (sectorDossierOverlay) sectorDossierOverlay.classList.remove("dossier-arriving");
      }
    });
  }

  function closeSectorDossier(syncHash = true) {
    activeSector = null;

    if (syncHash && window.location.hash && window.location.hash !== "#hub" && window.location.hash !== "#") {
      window.history.pushState(null, "", "#hub");
    }

    if (!sectorDossierOverlay || !sectorDossierOverlay.classList.contains("active")) {
      // If already closed or transitioning, ensure HUD is 100% visible and interactive
      if (sectorDossierOverlay) {
        sectorDossierOverlay.classList.remove("active", "dossier-departing", "dossier-arriving");
      }
      if (mainHudViewport) {
        mainHudViewport.classList.remove("warp-departing");
        mainHudViewport.classList.add("warp-returning");
        renderFloatingEasterEggs(mainHudViewport, "hub");
        setTimeout(() => {
          if (mainHudViewport) mainHudViewport.classList.remove("warp-returning");
        }, 650);
      }
      return;
    }

    sectorDossierOverlay.classList.add("dossier-departing");

    triggerInterplanetaryWarp("hub", {
      onArrival: () => {
        if (sectorDossierOverlay) {
          sectorDossierOverlay.classList.remove("active", "dossier-departing", "dossier-arriving");
        }
        if (mainHudViewport) {
          mainHudViewport.classList.remove("warp-departing");
          mainHudViewport.classList.add("warp-returning");
          renderFloatingEasterEggs(mainHudViewport, "hub");
        }
      },
      onComplete: () => {
        if (sectorDossierOverlay) {
          sectorDossierOverlay.classList.remove("active", "dossier-departing", "dossier-arriving");
        }
        if (mainHudViewport) {
          mainHudViewport.classList.remove("warp-returning", "warp-departing");
        }
      }
    });
  }

  function handleHashNavigation() {
    const rawHash = (window.location.hash || "").replace(/^#/, "").toLowerCase();
    const validSectors = ["sobre", "software", "pesquisa", "contato"];
    if (validSectors.includes(rawHash)) {
      openSectorDossier(rawHash, false);
    } else if (rawHash === "hub" || rawHash === "" || rawHash === "home") {
      if (sectorDossierOverlay && sectorDossierOverlay.classList.contains("active")) {
        closeSectorDossier(false);
      }
    }
  }

  function initSectorNavigation() {
    // Corner nodes + Mobile dock buttons + Core stage buttons + Footer sector buttons
    document.querySelectorAll("[data-open-sector]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // e.preventDefault();
        openSectorDossier(btn.dataset.openSector);
      });
      btn.addEventListener("mouseenter", () => sfx.hover());
    });

    // Home actions (Brand logos, "Pedro Rocha" in footers)
    document.querySelectorAll("[data-action='home']").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // e.preventDefault();
        closeSectorDossier();
        sfx.warp();
      });
      btn.addEventListener("mouseenter", () => sfx.hover());
    });

    // Switcher tabs inside dossier header
    document.querySelectorAll("[data-switch-sector]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // e.preventDefault();
        openSectorDossier(btn.dataset.switchSector);
      });
      btn.addEventListener("mouseenter", () => sfx.hover());
    });

    const closeBtn = document.getElementById("closeDossierBtn");
    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        // e.preventDefault();
        closeSectorDossier();
      });
      closeBtn.addEventListener("mouseenter", () => sfx.hover());
    }

    // Browser back/forward navigation support
    window.addEventListener("hashchange", handleHashNavigation);
    window.addEventListener("popstate", handleHashNavigation);

    // Initial check if opened with a hash
    if (window.location.hash) {
      setTimeout(handleHashNavigation, 100);
    }

    // Hover sound on interactive footer links and buttons
    document.querySelectorAll(".rodape-icone-link, .btn-hud-pill, .btn-core").forEach((el) => {
      el.addEventListener("mouseenter", () => sfx.hover());
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (projectModalBackdrop && projectModalBackdrop.classList.contains("active")) {
          closeProjectModal();
        } else if (cmdBackdrop && cmdBackdrop.classList.contains("active")) {
          closeCommandPalette();
        } else if (sectorDossierOverlay && sectorDossierOverlay.classList.contains("active")) {
          closeSectorDossier();
        }
      }
    });
  }

  /* ============================================================
     5. INTERACTIVE COSMOS CANVAS ENGINE (Stars, Galaxy, Constellations, Meteors)
     ============================================================ */
  const cosmosCanvas = document.getElementById("cosmosCanvas");
  let ctx, cw, ch, dpr;
  let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };

  let stars = [];
  let galaxy = { cx: 0.78, cy: 0.4, rot: 0, spin: 0.001, arms: 3, stars: [] };
  let constelNodes = [];
  let meteors = [];
  let supernovas = [];

  function triggerSupernovaBurst(x, y) {
    if (!cosmosCanvas || !ctx) return;
    const supernova = {
      x: x || (cw * 0.5),
      y: y || (ch * 0.5),
      radius: 4,
      maxRadius: 160 * (dpr || 1),
      particles: [],
      alpha: 1,
      decay: 0.02
    };

    for (let i = 0; i < 36; i++) {
      const angle = (i / 36) * Math.PI * 2;
      const speed = (Math.random() * 5 + 2) * (dpr || 1);
      supernova.particles.push({
        x: supernova.x,
        y: supernova.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: (Math.random() * 2.5 + 1.2) * (dpr || 1),
        color: Math.random() > 0.5 ? "#b692ff" : (Math.random() > 0.3 ? "#f59e0b" : "#ec4899")
      });
    }

    supernovas.push(supernova);

    if (sfxEnabled) {
      try {
        playTone(523.25, "sine", 0.12, 0.04);
        setTimeout(() => playTone(659.25, "triangle", 0.15, 0.04), 60);
        setTimeout(() => playTone(783.99, "sine", 0.2, 0.045), 120);
        setTimeout(() => playTone(1046.50, "sine", 0.35, 0.05), 180);
      } catch (e) {}
    }

    showToast("✨ Supernova Descoberta! Radiação cósmica registrada nos sensores.", "star");
    completeQuest("supernova");
  }

  function initCosmos() {
    if (!cosmosCanvas) return;
    ctx = cosmosCanvas.getContext("2d");
    resizeCosmos();
    window.addEventListener("resize", resizeCosmos);

    window.addEventListener("pointermove", (e) => {
      mouse.targetX = e.clientX * dpr;
      mouse.targetY = e.clientY * dpr;
      mouse.active = true;
    });

    window.addEventListener("pointerleave", () => {
      mouse.active = false;
    });

    cosmosCanvas.addEventListener("click", (e) => {
      const rect = cosmosCanvas.getBoundingClientRect();
      const clickX = (e.clientX - rect.left) * dpr;
      const clickY = (e.clientY - rect.top) * dpr;
      triggerSupernovaBurst(clickX, clickY);
    });

    if (!reduceMotion) requestAnimationFrame(renderCosmos);
  }

  function resizeCosmos() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    cw = cosmosCanvas.width = window.innerWidth * dpr;
    ch = cosmosCanvas.height = window.innerHeight * dpr;
    cosmosCanvas.style.width = window.innerWidth + "px";
    cosmosCanvas.style.height = window.innerHeight + "px";

    const starCount = Math.min(220, Math.floor((window.innerWidth * window.innerHeight) / 8000));
    stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * cw,
      y: Math.random() * ch,
      z: Math.random() * 0.85 + 0.15,
      r: (Math.random() * 1.5 + 0.3) * dpr,
      tw: Math.random() * Math.PI * 2,
      speed: (Math.random() * 0.1 + 0.02) * dpr,
      hue: Math.random() < 0.25 ? 260 : (Math.random() < 0.5 ? 210 : (Math.random() < 0.75 ? 175 : 45))
    }));

    galaxy.stars = Array.from({ length: 380 }, () => ({
      a: Math.random() * Math.PI * 2,
      rad: Math.pow(Math.random(), 0.6),
      sz: (Math.random() * 1.4 + 0.4) * dpr,
      tw: Math.random() * Math.PI * 2,
      dust: Math.random() < 0.3
    }));

    constelNodes = [
      { x: 0.16, y: 0.2, ph: 0 },
      { x: 0.26, y: 0.14, ph: 1 },
      { x: 0.36, y: 0.26, ph: 2 },
      { x: 0.46, y: 0.18, ph: 3 },
      { x: 0.82, y: 0.72, ph: 4 },
      { x: 0.88, y: 0.65, ph: 5 }
    ];
  }

  function spawnMeteor() {
    if (meteors.length > 2 || Math.random() > 0.015) return;
    meteors.push({
      x: Math.random() * cw * 0.8,
      y: Math.random() * ch * 0.3,
      length: (Math.random() * 150 + 80) * dpr,
      speed: (Math.random() * 14 + 10) * dpr,
      angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
      life: 1,
      decay: Math.random() * 0.02 + 0.015
    });
  }

  function renderCosmos(time) {
    mouse.x += (mouse.targetX - mouse.x) * 0.06;
    mouse.y += (mouse.targetY - mouse.y) * 0.06;

    ctx.clearRect(0, 0, cw, ch);

    const px = (mouse.x - cw / 2) * 0.02;
    const py = (mouse.y - ch / 2) * 0.02;

    for (const s of stars) {
      s.tw += 0.025;
      const tw = 0.55 + 0.45 * Math.sin(s.tw);
      const drawX = s.x - px * s.z;
      const drawY = s.y - py * s.z;

      ctx.beginPath();
      ctx.arc(drawX, drawY, s.r * s.z * (0.8 + tw * 0.4), 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${s.hue}, 90%, ${70 + tw * 25}%, ${0.35 + tw * 0.55 * s.z})`;
      ctx.fill();

      s.y += s.speed * s.z;
      if (s.y > ch) { s.y = 0; s.x = Math.random() * cw; }
    }

    // Galaxy
    galaxy.rot += galaxy.spin;
    const gRadius = Math.min(cw, ch) * 0.3;
    const gcx = galaxy.cx * cw - px * 0.35;
    const gcy = galaxy.cy * ch - py * 0.35;

    const coreGrad = ctx.createRadialGradient(gcx, gcy, 0, gcx, gcy, gRadius * 0.35);
    coreGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
    coreGrad.addColorStop(0.2, "rgba(110, 168, 254, 0.5)");
    coreGrad.addColorStop(0.6, "rgba(182, 146, 255, 0.18)");
    coreGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = coreGrad;
    ctx.beginPath();
    ctx.arc(gcx, gcy, gRadius * 0.35, 0, Math.PI * 2);
    ctx.fill();

    for (const gs of galaxy.stars) {
      const arm = Math.floor(gs.a / (Math.PI * 2 / galaxy.arms)) * (Math.PI * 2 / galaxy.arms);
      const ang = arm + gs.rad * 4.4 + galaxy.rot;
      const rad = gs.rad * gRadius;
      const x = gcx + Math.cos(ang) * rad;
      const y = gcy + Math.sin(ang) * rad * 0.55;

      ctx.beginPath();
      ctx.arc(x, y, gs.sz, 0, Math.PI * 2);
      ctx.fillStyle = gs.dust ? "rgba(255, 180, 120, 0.35)" : "rgba(200, 225, 255, 0.6)";
      ctx.fill();
    }

    // Constellations
    const nodeCoords = constelNodes.map((n, i) => ({
      x: n.x * cw + Math.sin(time * 0.0008 + n.ph) * 14 * dpr,
      y: n.y * ch + Math.cos(time * 0.0006 + n.ph) * 14 * dpr
    }));

    for (let i = 0; i < nodeCoords.length; i++) {
      for (let j = i + 1; j < nodeCoords.length; j++) {
        const dx = nodeCoords[i].x - nodeCoords[j].x;
        const dy = nodeCoords[i].y - nodeCoords[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200 * dpr) {
          const alpha = (1 - dist / (200 * dpr)) * 0.22;
          ctx.beginPath();
          ctx.moveTo(nodeCoords[i].x, nodeCoords[i].y);
          ctx.lineTo(nodeCoords[j].x, nodeCoords[j].y);
          ctx.strokeStyle = `rgba(110, 168, 254, ${alpha})`;
          ctx.lineWidth = 1 * dpr;
          ctx.stroke();
        }
      }

      if (mouse.active) {
        const mdx = nodeCoords[i].x - mouse.x;
        const mdy = nodeCoords[i].y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 160 * dpr) {
          const mAlpha = (1 - mdist / (160 * dpr)) * 0.55;
          ctx.beginPath();
          ctx.moveTo(nodeCoords[i].x, nodeCoords[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(182, 146, 255, ${mAlpha})`;
          ctx.lineWidth = 1.4 * dpr;
          ctx.stroke();
        }
      }

      ctx.beginPath();
      ctx.arc(nodeCoords[i].x, nodeCoords[i].y, 2.8 * dpr, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(182, 146, 255, 0.9)";
      ctx.fill();
    }

    // Meteors
    spawnMeteor();
    for (let i = meteors.length - 1; i >= 0; i--) {
      const m = meteors[i];
      const tailX = m.x - Math.cos(m.angle) * m.length;
      const tailY = m.y - Math.sin(m.angle) * m.length;

      const mGrad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
      mGrad.addColorStop(0, `rgba(255, 255, 255, ${m.life})`);
      mGrad.addColorStop(0.3, `rgba(182, 146, 255, ${m.life * 0.8})`);
      mGrad.addColorStop(1, "rgba(110, 168, 254, 0)");

      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(tailX, tailY);
      ctx.strokeStyle = mGrad;
      ctx.lineWidth = 2 * dpr;
      ctx.stroke();

      m.x += Math.cos(m.angle) * m.speed;
      m.y += Math.sin(m.angle) * m.speed;
      m.life -= m.decay;

      if (m.life <= 0 || m.x > cw || m.y > ch) {
        meteors.splice(i, 1);
      }
    }

    // Supernovas Render Loop
    for (let i = supernovas.length - 1; i >= 0; i--) {
      const sn = supernovas[i];
      sn.radius += (sn.maxRadius - sn.radius) * 0.08;
      sn.alpha -= sn.decay;

      if (sn.alpha <= 0.01) {
        supernovas.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(sn.x, sn.y, sn.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(245, 158, 11, ${sn.alpha * 0.8})`;
      ctx.lineWidth = 2.5 * dpr;
      ctx.shadowColor = "#f59e0b";
      ctx.shadowBlur = 15;
      ctx.stroke();
      ctx.shadowBlur = 0;

      for (const p of sn.particles) {
        p.x += p.vx;
        p.y += p.vy;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = sn.alpha;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    requestAnimationFrame(renderCosmos);
  }

  /* ============================================================
     6. CURSOR & SPOTLIGHT ENGINE
     ============================================================ */
  const cursorDot = document.getElementById("cursorDot");
  const cursorGlow = document.getElementById("cursorGlow");
  let curX = -100, curY = -100, targetCurX = -100, targetCurY = -100;

  function initCursor() {
    window.addEventListener("pointermove", (e) => {
      targetCurX = e.clientX;
      targetCurY = e.clientY;
    });

    function updateCursor() {
      curX += (targetCurX - curX) * 0.2;
      curY += (targetCurY - curY) * 0.2;
      if (cursorDot) cursorDot.style.transform = `translate3d(${targetCurX}px, ${targetCurY}px, 0) translate(-50%, -50%)`;
      if (cursorGlow) cursorGlow.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(updateCursor);
    }
    requestAnimationFrame(updateCursor);

    document.addEventListener("mouseover", (e) => {
      if (e.target.closest("a, button, [data-card], .corner-node, .dock-btn, .chip, input, select")) {
        document.body.classList.add("cursor-hover");
        sfx.hover();
      }
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest("a, button, [data-card], .corner-node, .dock-btn, .chip, input, select")) {
        document.body.classList.remove("cursor-hover");
      }
    });
    document.addEventListener("mousedown", () => document.body.classList.add("cursor-active"));
    document.addEventListener("mouseup", () => document.body.classList.remove("cursor-active"));
  }

  function wireSpotlights(container) {
    container.querySelectorAll(".spotlight-card, .corner-node").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--mouse-x", `-500px`);
        card.style.setProperty("--mouse-y", `-500px`);
      });
    });
  }

  /* ============================================================
     7. RENDER DOSSIER CONTENTS
     ============================================================ */
  function renderProjectCardHTML(p) {
    const brief = (p.i18n && p.i18n[lang]) ? p.i18n[lang] : p.brief;
    const vis = t("vis." + p.visibility) || p.visibility;
    const cat = t("cat." + p.cat) || p.cat;

    let visClass = "badge-vis--private";
    if (p.visibility === "público") visClass = "badge-vis--public";
    else if (p.visibility === "planejamento") visClass = "badge-vis--planning";
    else if (p.visibility === "elaboracao") visClass = "badge-vis--progress";

    const stackPills = (p.stack || []).slice(0, 3).map((s) => `<span class="tag-tech">${s}</span>`).join("");
    const tagPills = (p.tags || []).slice(0, 2).map((tg) => `<span class="tag-cat">${tg}</span>`).join("");

    return `
    <article class="spotlight-card project-card" data-card data-repo-name="${p.name}">
      <div>
        <div class="project-card__header">
          <div class="project-card__icon-wrap">${iconSVG(p.icon)}</div>
          <div class="project-card__title-meta">
            <h3 class="project-card__title">${p.name}</h3>
            <div class="project-card__meta-badges">
              <span class="badge-vis ${visClass}">${vis}</span>
              <span class="tag-cat">${cat}</span>
            </div>
          </div>
        </div>
        <p class="project-card__summary">${brief}</p>
        <div class="project-card__stack">${stackPills} ${tagPills}</div>
      </div>
      <div class="project-card__footer">
        <span class="project-card__more-btn">
          ${t("labels.details") || "Ver Detalhes"}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
        ${p.repo ? `
          <a class="project-card__repo-link" href="${p.repo}" target="_blank" rel="noopener" onclick="event.stopPropagation();">
            ${iconSVG("github", "repo-ico")} GitHub
          </a>` : `
          <span class="tag-cat">${t("labels.noRepo") || "Sem repo público"}</span>
        `}
      </div>
    </article>`;
  }

  function wireProjectClickEvents(container) {
    container.querySelectorAll("[data-repo-name]").forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        const repoName = card.getAttribute("data-repo-name");
        const repoData = D.REPOS.find((r) => r.name === repoName);
        if (repoData) openProjectModal(repoData);
      });
    });
  }

  function renderProjectsShowcase() {
    const grid = document.getElementById("projectGrid");
    if (!grid) return;

    let items = (D.FEATURED.length ? D.FEATURED : D.REPOS.slice(0, 6));

    if (currentCategory !== "all") {
      items = D.REPOS.filter((r) => r.cat === currentCategory);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      items = D.REPOS.filter((r) =>
        r.name.toLowerCase().includes(q) ||
        r.brief.toLowerCase().includes(q) ||
        (r.stack && r.stack.some((s) => s.toLowerCase().includes(q))) ||
        (r.tags && r.tags.some((tg) => tg.toLowerCase().includes(q)))
      );
    }

    grid.innerHTML = items.map(renderProjectCardHTML).join("");
    wireSpotlights(grid);
    wireProjectClickEvents(grid);
  }

  function renderAllReposGrouped() {
    const allContainer = document.getElementById("allRepos");
    if (!allContainer) return;

    const categories = [
      { key: "software", label: t("cat.software") || "Software & Sistemas" },
      { key: "pesquisa", label: t("cat.pesquisa") || "Pesquisa & Astrofísica" },
      { key: "academico", label: t("cat.academico") || "Acadêmico & Estudo" },
      { key: "pessoal", label: t("cat.pessoal") || "Pessoal & Vida" }
    ];

    allContainer.innerHTML = categories.map((cat) => {
      let repos = D.REPOS.filter((r) => r.cat === cat.key);
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        repos = repos.filter((r) =>
          r.name.toLowerCase().includes(q) ||
          r.brief.toLowerCase().includes(q) ||
          (r.stack && r.stack.some((s) => s.toLowerCase().includes(q))) ||
          (r.tags && r.tags.some((tg) => tg.toLowerCase().includes(q)))
        );
      }
      if (!repos.length) return "";

      return `
      <div class="cat-group">
        <div class="cat-group__head">
          <h4 class="cat-group__title">${cat.label}</h4>
          <span class="cat-group__count">${repos.length}</span>
        </div>
        <div class="cards-grid">${repos.map(renderProjectCardHTML).join("")}</div>
      </div>`;
    }).join("");

    wireSpotlights(allContainer);
    wireProjectClickEvents(allContainer);
  }

  function renderResearch() {
    const rlist = document.getElementById("researchList");
    if (!rlist) return;

    rlist.innerHTML = (D.RESEARCH || []).map((r) => {
      const sum = (r.i18n && r.i18n[lang]) ? r.i18n[lang] : r.summary;
      const det = (r.i18n && r.i18n[lang]) ? r.i18n[lang] + "  Repositório: " + r.repo : r.details;

      return `
      <div class="acc-card">
        <button class="acc-card__btn" aria-expanded="false">
          <div class="acc-card__left">
            <div class="acc-card__icon">${iconSVG(r.icon)}</div>
            <div>
              <div class="acc-card__title">${r.title}</div>
              <span class="acc-card__badge">${r.badge}</span>
            </div>
          </div>
          <svg class="acc-card__chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="acc-card__body">
          <div class="acc-card__content">
            <p style="margin-bottom: 10px;">${sum}</p>
            <p style="color: var(--text-dim); font-size: 0.85rem;">${det}</p>
          </div>
        </div>
      </div>`;
    }).join("");

    rlist.querySelectorAll(".acc-card").forEach((card) => {
      const btn = card.querySelector(".acc-card__btn");
      btn.addEventListener("click", () => {
        const isOpen = card.classList.toggle("open");
        btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        sfx.click();
      });
    });
  }

  function renderBolsas() {
    const bl = document.getElementById("bolsaList");
    if (!bl) return;

    bl.innerHTML = (D.BOLSAS || []).map((b) => `
      <div class="spotlight-card bolsa-card">
        <div class="bolsa-card__icon">${iconSVG(b.icon)}</div>
        <div class="bolsa-card__body">
          <div class="bolsa-card__head">
            <h3>${pick(b, "title")}</h3>
            <span class="bolsa-card__kind">${pick(b, "kind")}</span>
          </div>
          <div class="bolsa-card__meta">
            <span>📅 ${b.period}</span> &nbsp;·&nbsp;
            <span>🧭 ${t("bolsas.orientLabel") || "Orientação"}: ${b.orient}</span>
          </div>
          <p class="bolsa-card__desc">${pick(b, "desc")}</p>
        </div>
      </div>
    `).join("");

    wireSpotlights(bl);
  }

  function renderContacts() {
    const cl = document.getElementById("contactList");
    if (!cl) return;

    const labels = t("contactLabels") || {};

    cl.innerHTML = (D.CONTACTS || []).map((c) => {
      const label = labels[c.labelKey] || c.labelKey;
      const inner = `
        <div class="contact-card__icon">${iconSVG(c.icon)}</div>
        <div class="contact-card__info">
          <span class="contact-card__label">${label}</span>
          <span class="contact-card__value">${c.value}</span>
        </div>
      `;

      return c.href ? `
        <a class="spotlight-card contact-card" href="${c.href}" target="_blank" rel="noopener">
          ${inner}
        </a>` : `
        <div class="spotlight-card contact-card">
          ${inner}
        </div>`;
    }).join("");

    wireSpotlights(cl);
  }

  /* ============================================================
     8. PROJECT DETAILS MODAL
     ============================================================ */
  const projectModalBackdrop = document.getElementById("projectModalBackdrop");

  function openProjectModal(p) {
    if (!projectModalBackdrop) return;
    const brief = (p.i18n && p.i18n[lang]) ? p.i18n[lang] : p.brief;
    const vis = t("vis." + p.visibility) || p.visibility;
    const cat = t("cat." + p.cat) || p.cat;

    document.getElementById("modalProjIcon").innerHTML = iconSVG(p.icon);
    document.getElementById("modalProjTitle").textContent = p.name;
    document.getElementById("modalProjVis").textContent = vis;
    document.getElementById("modalProjCat").textContent = cat;
    document.getElementById("modalProjDesc").textContent = brief;

    const stackContainer = document.getElementById("modalProjStack");
    stackContainer.innerHTML = (p.stack || []).map((s) => `<span class="tag-tech">${s}</span>`).join("") +
      (p.tags || []).map((tg) => `<span class="tag-cat">${tg}</span>`).join("");

    const actionContainer = document.getElementById("modalProjActions");
    actionContainer.innerHTML = p.repo ? `
      <a class="btn-core btn-core--primary" href="${p.repo}" target="_blank" rel="noopener">
        ${iconSVG("github")} ${t("labels.viewRepo") || "Ver repositório no GitHub"}
      </a>
      <button class="btn-core btn-core--ghost" id="modalCopyLinkBtn">
        ${iconSVG("copy")} Copiar Link
      </button>
    ` : `<span class="tag-cat">${t("labels.noRepo") || "Sem repositório público ainda"}</span>`;

    const copyBtn = document.getElementById("modalCopyLinkBtn");
    if (copyBtn && p.repo) {
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(p.repo);
        showToast("Link copiado para a área de transferência!", "copy");
      });
    }

    projectModalBackdrop.classList.add("active");
    sfx.modal();
  }

  function closeProjectModal() {
    if (projectModalBackdrop) projectModalBackdrop.classList.remove("active");
  }

  /* ============================================================
     9. ASTRONOMICAL SPECTRUM SIMULATOR (GALAH DR4 / Gaia)
     ============================================================ */
  function initSpectrumSimulator() {
    const canvas = document.getElementById("spectrumCanvas");
    const slider = document.getElementById("spectrumSlider");
    const info = document.getElementById("spectrumInfo");
    if (!canvas || !slider || !info) return;

    const sctx = canvas.getContext("2d");
    const absorptionLines = [
      { name: "Ca II (K)", lambda: 3933, element: "Cálcio Ionizado" },
      { name: "H-delta", lambda: 4101, element: "Hidrogênio (Balmer)" },
      { name: "H-gamma", lambda: 4340, element: "Hidrogênio (Balmer)" },
      { name: "H-beta", lambda: 4861, element: "Hidrogênio (Balmer)" },
      { name: "Mg I (b)", lambda: 5175, element: "Magnésio Neutro" },
      { name: "Fe I", lambda: 5270, element: "Ferro Neutro" },
      { name: "Na I (D)", lambda: 5892, element: "Sódio Neutro" },
      { name: "H-alpha", lambda: 6563, element: "Hidrogênio (Balmer)" },
      { name: "Ca II (Triplet)", lambda: 8542, element: "Cálcio Ionizado" }
    ];

    function wavelengthToRGB(wavelength) {
      let r, g, b;
      if (wavelength >= 380 && wavelength < 440) {
        r = -(wavelength - 440) / (440 - 380); g = 0.0; b = 1.0;
      } else if (wavelength >= 440 && wavelength < 490) {
        r = 0.0; g = (wavelength - 440) / (490 - 440); b = 1.0;
      } else if (wavelength >= 490 && wavelength < 510) {
        r = 0.0; g = 1.0; b = -(wavelength - 510) / (510 - 490);
      } else if (wavelength >= 510 && wavelength < 580) {
        r = (wavelength - 510) / (580 - 510); g = 1.0; b = 0.0;
      } else if (wavelength >= 580 && wavelength < 645) {
        r = 1.0; g = -(wavelength - 645) / (645 - 580); b = 0.0;
      } else if (wavelength >= 645 && wavelength <= 780) {
        r = 1.0; g = 0.0; b = 0.0;
      } else {
        r = 0.5; g = 0.1; b = 0.3;
      }
      return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
    }

    function drawSpectrum(targetWavelength, isUserInteraction = true) {
      const w = canvas.width = canvas.clientWidth * (window.devicePixelRatio || 1);
      const h = canvas.height = canvas.clientHeight * (window.devicePixelRatio || 1);
      const minW = 3800, maxW = 8600;

      for (let x = 0; x < w; x++) {
        const lambda = minW + (x / w) * (maxW - minW);
        sctx.fillStyle = wavelengthToRGB(lambda / 10);
        sctx.fillRect(x, 0, 1, h * 0.7);
      }

      for (const line of absorptionLines) {
        const lx = ((line.lambda - minW) / (maxW - minW)) * w;
        sctx.fillStyle = "rgba(0, 0, 0, 0.88)";
        sctx.fillRect(lx - 1.5, 0, 3, h * 0.7);

        sctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        sctx.font = "10px monospace";
        sctx.fillText(line.name, lx - 10, h * 0.9);
      }

      const curX = ((targetWavelength - minW) / (maxW - minW)) * w;
      sctx.strokeStyle = "var(--accent-cyan)";
      sctx.lineWidth = 2;
      sctx.beginPath();
      sctx.moveTo(curX, 0);
      sctx.lineTo(curX, h);
      sctx.stroke();

      const match = absorptionLines.find((l) => Math.abs(l.lambda - targetWavelength) < 45);
      if (match) {
        info.innerHTML = `🔭 <strong>${targetWavelength} Å</strong> — Linha: <span style="color:var(--accent-amber);">${match.name}</span> (${match.element})`;
        if (isUserInteraction && (match.name.includes("H-alpha") || targetWavelength === 6563)) {
          completeQuest("spectrum");
        }
      } else {
        info.innerHTML = `🔭 <strong>${targetWavelength} Å</strong> — Espectro Contínuo Estelar (GAIA DR3 / GALAH DR4)`;
      }
    }

    slider.addEventListener("input", (e) => {
      drawSpectrum(parseInt(e.target.value, 10));
    });

    // Initial render only — the default slider value happens to be exactly
    // H-alpha (6563), so without the isUserInteraction guard this alone
    // completed the "spectrum" quest (and fired its toast) on every page
    // load, before the user ever touched the slider.
    drawSpectrum(6563, false);
  }

  /* ============================================================
     10. COMMAND PALETTE (Cmd+K / Ctrl+K) & SECRET EASTER EGGS
     ============================================================ */
  const cmdBackdrop = document.getElementById("cmdBackdrop");
  const cmdInput = document.getElementById("cmdInput");
  const cmdResults = document.getElementById("cmdResults");

  function openCommandPalette() {
    if (!cmdBackdrop) return;
    cmdBackdrop.classList.add("active");
    if (cmdInput) {
      cmdInput.value = "";
      cmdInput.focus();
    }
    renderCmdItems("");
    sfx.modal();
    completeQuest("cmd");
  }

  function closeCommandPalette() {
    if (cmdBackdrop) cmdBackdrop.classList.remove("active");
  }

  function renderCmdItems(filter) {
    if (!cmdResults) return;
    const q = filter.toLowerCase().trim();

    let actions = [
      { type: "nav", title: "Abrir Setor: Sobre Mim & Formação", sub: "Setor 01", icon: "profile", act: () => openSectorDossier("sobre") },
      { type: "nav", title: "Abrir Setor: Software & Repositórios", sub: "Setor 02", icon: "box", act: () => openSectorDossier("software") },
      { type: "nav", title: "Abrir Setor: Pesquisa & Astrofísica", sub: "Setor 03", icon: "star", act: () => openSectorDossier("pesquisa") },
      { type: "nav", title: "Abrir Setor: Curriculum Vitae & Contatos", sub: "Setor 04", icon: "document", act: () => openSectorDossier("contato") },
      { type: "act", title: "Copiar ID Lattes (6818168089966785)", sub: "CNPq", icon: "copy", act: () => { navigator.clipboard.writeText("6818168089966785"); showToast("ID Lattes copiado!", "copy"); } },
      { type: "act", title: "Copiar E-mail (pedroiff0@gmail.com)", sub: "E-mail", icon: "mail", act: () => { navigator.clipboard.writeText("pedroiff0@gmail.com"); showToast("E-mail copiado!", "mail"); } },
      { type: "lang", title: "Mudar idioma para: Português (PT-BR)", sub: "pt", icon: "globe", act: () => applyLang("pt") },
      { type: "lang", title: "Switch language to: English (EN)", sub: "en", icon: "globe", act: () => applyLang("en") },
      { type: "lang", title: "Cambiar idioma a: Español (ES)", sub: "es", icon: "globe", act: () => applyLang("es") },
      { type: "lang", title: "Changer de langue : Français (FR)", sub: "fr", icon: "globe", act: () => applyLang("fr") }
    ];

    // Secret Easter Egg Commands
    const secretActions = [];

    // Motherlode Cheat
    if (q.includes("motherload") || q.includes("motherlord") || q.includes("motherlode") || q.includes("sims") || q.includes("simoleon") || q.includes("rosebud")) {
      secretActions.push({
        type: "secret",
        title: "💰 MOTHERLODE (+§50.000 Simoleons)",
        sub: "Código Secreto // 'Kaching! +§50.000 Simoleons concedidos ao saldo orbital'",
        icon: "cash",
        tag: "CHEAT CODE",
        act: () => triggerMotherloadCheat()
      });
    }

    // HESOYAM
    if (q.includes("hesoyam") || q.includes("sanandreas") || q.includes("san andreas") || q.includes("gta sa") || q.includes("baguvix") || q.includes("aezakmi")) {
      secretActions.push({
        type: "secret",
        title: "💵 HESOYAM (+$250.000 + Colete/Vida)",
        sub: "Código Secreto // '+$250k, Vida 100%, Colete 100% e Reparo Imediato'",
        icon: "cash",
        tag: "CHEAT CODE",
        act: () => triggerHesoyamCheat()
      });
    }

    // PAINKILLER / 1-999-724-654-5537
    if (q.includes("painkiller") || q.includes("godmode") || q.includes("god mode") || q.includes("imortal") || q.includes("1-999-724-654-5537") || q.includes("19997246545537")) {
      secretActions.push({
        type: "secret",
        title: "⭐ PAINKILLER (Invencibilidade 5 Minutos)",
        sub: "Código Secreto // '1-999-724-654-5537: Escudo cósmico invulnerável por 5 minutos'",
        icon: "star",
        tag: "CHEAT CODE",
        act: () => triggerPainkillerCheat()
      });
    }

    // Can You Feel My Heart / Sempiternal
    if (q.includes("bmth") || q.includes("bring me the horizon") || q.includes("can you feel my heart") || q.includes("sempiternal") || q.includes("parasite") || q.includes("shadow moses") || q.includes("kingslayer")) {
      secretActions.push({
        type: "secret",
        title: "🎸 CAN YOU FEEL MY HEART // SEMPITERNAL",
        sub: "Transmissão Sonora // 'Can you hear the silence? Can you feel my heart?'",
        icon: "star",
        tag: "TRANSMISSÃO",
        act: () => triggerBMTHEasterEgg()
      });
    }

    // Fúria Espartana (BOY!)
    if (q.includes("kratos") || q.includes("god of war") || q.includes("gow") || q.includes("boy") || q.includes("leviathan") || q.includes("spartan") || q.includes("ragnarok")) {
      secretActions.push({
        type: "secret",
        title: "🪓 FÚRIA ANCESTRAL // \"BOY!\"",
        sub: "Ressonância Antiga // 'BOY! Não tenha pena. Seja melhor.'",
        icon: "darkmatter",
        tag: "ARTEFATO",
        act: () => triggerKratosEasterEgg()
      });
    }

    // Varredura Focus (Gaia)
    if (q.includes("aloy") || q.includes("horizon") || q.includes("focus") || q.includes("hzd") || q.includes("zero dawn") || q.includes("cauldron") || q.includes("nora")) {
      secretActions.push({
        type: "secret",
        title: "👁️ VARREDURA FOCUS // SISTEMA GAIA",
        sub: "Interface Neural // 'Rede de Realidade Aumentada Sincronizada'",
        icon: "spectrum",
        tag: "OVERRIDE",
        act: () => triggerHorizonEasterEgg()
      });
    }

    // Born This Way
    if (q.includes("born this way") || q.includes("bornthisway") || q.includes("lady gaga") || q.includes("gaga") || q.includes("monster")) {
      secretActions.push({
        type: "secret",
        title: "✨ BORN THIS WAY // SYNTH THEME",
        sub: "Frequência Cósmica // 'I'm on the right track baby, I was born this way!'",
        icon: "star",
        tag: "ÁUDIO",
        act: () => {
          showToast("✨ 'I'm on the right track baby, I was born this way!' 🌈🎶", "star");
          sfx.bornThisWay();
          completeQuest("hacker");
        }
      });
    }

    if (q.includes("matrix") || q.includes("neo")) {
      secretActions.push({
        type: "secret",
        title: "⚡ EXECUTAR: Protocolo Matrix (Digital Rain)",
        sub: "Easter Egg // 'There is no spoon...'",
        icon: "darkmatter",
        tag: "SECRET",
        act: () => {
          showToast("🟢 Modo Matrix Ativado: Siga o coelho branco...", "star");
          triggerKonamiMode();
          completeQuest("hacker");
        }
      });
    }
    if (q.includes("interstellar") || q.includes("interestelar") || q.includes("nolan")) {
      secretActions.push({
        type: "secret",
        title: "🌌 EXECUTAR: Protocolo Lazarus / Interestelar (Christopher Nolan)",
        sub: "Easter Egg // 'Não entre dócil nessa noite escura. A fúria contra a morte da luz.'",
        icon: "star",
        tag: "INTERSTELLAR",
        act: () => {
          showToast("🌌 Interestelar (Nolan): 'O amor é a única coisa que transcende as dimensões do tempo e espaço.'", "star");
          openSectorDossier("contato");
          completeQuest("hacker");
        }
      });
    }
    if (q.includes("gargantua") || q.includes("blackhole") || q.includes("buraco") || q.includes("singularidade")) {
      secretActions.push({
        type: "secret",
        title: "🕳️ EXECUTAR: Horizonte de Eventos de Gargântua",
        sub: "Easter Egg // Buraco Negro Supermassivo (100M M☉ · Dilatação: 1h = 7 anos)",
        icon: "darkmatter",
        tag: "GARGÂNTUA",
        act: () => {
          showToast("🕳️ Gargântua: Singularidade e lente gravitacional de Einstein atingidas!", "star");
          openSectorDossier("contato");
          completeQuest("hacker");
        }
      });
    }
    if (q.includes("stay") || q.includes("murph") || q.includes("relogio") || q.includes("tesseract")) {
      secretActions.push({
        type: "secret",
        title: "⏳ EXECUTAR: Sinal Gravitacional 5D de Cooper (S-T-A-Y)",
        sub: "Easter Egg // 'S-T-A-Y... Foi ele o tempo todo. Meu pai era o meu fantasma.'",
        icon: "satellite",
        tag: "MORSE",
        act: () => {
          openSectorDossier("contato");
          const dBtn = document.getElementById("decodeMorseBtn");
          if (dBtn) dBtn.click();
          completeQuest("hacker");
        }
      });
    }
    if (q.includes("tars") || q.includes("case")) {
      secretActions.push({
        type: "secret",
        title: "🤖 EXECUTAR: Telemetria TARS (IA Tática)",
        sub: "Easter Egg // Honestidade: 90% · Humor: 75% · 'É necessário.'",
        icon: "dashboard",
        tag: "TARS",
        act: () => {
          showToast("🤖 TARS: 'Olá Cooper. Configuração de honestidade em 90%. Pronto para o acoplamento!'", "dashboard");
          sfx.warp();
          completeQuest("hacker");
        }
      });
    }
    if (q.includes("endurance") || q.includes("docking") || q.includes("acoplamento") || q.includes("68")) {
      secretActions.push({
        type: "secret",
        title: "🌀 EXECUTAR: Manobra de Acoplamento Endurance (68 RPM)",
        sub: "Easter Egg // 'Cooper, it's not possible! — No, it's necessary.'",
        icon: "star",
        tag: "ENDURANCE",
        act: () => {
          openSectorDossier("contato");
          const docBtn = document.getElementById("enduranceDockingBtn");
          if (docBtn) docBtn.click();
          completeQuest("hacker");
        }
      });
    }
    if (q === "42" || q.includes("guia") || q.includes("mochileiro") || q.includes("douglas")) {
      secretActions.push({
        type: "secret",
        title: "🌌 EXECUTAR: O Sentido da Vida, do Universo e Tudo Mais",
        sub: "Easter Egg // Resposta: 42 (Douglas Adams)",
        icon: "star",
        tag: "SECRET",
        act: () => {
          showToast("🌌 42: A Resposta para a Vida, o Universo e Tudo Mais. Não Entre em Pânico!", "star");
          sfx.warp();
          completeQuest("hacker");
        }
      });
    }
    if (q.includes("apollo") || q.includes("saturn") || q.includes("nasa") || q.includes("moon")) {
      secretActions.push({
        type: "secret",
        title: "🚀 EXECUTAR: Telemetria Apollo 11 (Saturn V)",
        sub: "Easter Egg // 'Houston, Tranquility Base here. The Eagle has landed.'",
        icon: "satellite",
        tag: "SECRET",
        act: () => {
          showToast("🚀 Apollo 11: 'Um pequeno passo para o homem, um salto gigante para a humanidade.'", "satellite");
          sfx.warp();
          completeQuest("hacker");
        }
      });
    }
    if (q.includes("coffee") || q.includes("cafe") || q.includes("cafeina")) {
      secretActions.push({
        type: "secret",
        title: "☕ EXECUTAR: Injeção de Cafeína DevOps",
        sub: "Easter Egg // Recarga de 100% de Uptime",
        icon: "box",
        tag: "SECRET",
        act: () => {
          showToast("☕ Cafeína injetada nos servidores: Uptime 100%, 0 bugs!", "box");
          sfx.success();
          completeQuest("hacker");
        }
      });
    }
    if (q.includes("sudo") || q.includes("root") || q.includes("admin")) {
      secretActions.push({
        type: "secret",
        title: "💻 EXECUTAR: sudo su (Root Cósmico)",
        sub: "Easter Egg // root@pedro-rocha:~#",
        icon: "dashboard",
        tag: "SECRET",
        act: () => {
          showToast("💻 Acesso Root Concedido: Bem-vindo, Administrador da Galáxia.", "dashboard");
          sfx.success();
          completeQuest("hacker");
        }
      });
    }
    if (q.includes("gaia") || q.includes("pulsar") || q.includes("astro")) {
      secretActions.push({
        type: "secret",
        title: "🔭 EXECUTAR: Sonda Espacial Gaia DR3 Astrometric Stream",
        sub: "Easter Egg // 1.8 bilhão de fontes astrométricas",
        icon: "spectrum",
        tag: "SECRET",
        act: () => {
          showToast("🔭 Gaia DR3: Sincronização astrométrica com 1.8 bilhão de estrelas concluída!", "spectrum");
          openSectorDossier("pesquisa");
          completeQuest("hacker");
        }
      });
    }

    D.REPOS.forEach((r) => {
      actions.push({
        type: "project",
        title: r.name,
        sub: r.brief,
        icon: r.icon,
        tag: r.cat,
        act: () => openProjectModal(r)
      });
    });

    if (q) {
      actions = [...secretActions, ...actions.filter((a) => a.title.toLowerCase().includes(q) || (a.sub && a.sub.toLowerCase().includes(q)))];
    }

    cmdResults.innerHTML = actions.slice(0, 12).map((a, idx) => `
      <div class="cmd-item ${idx === 0 ? "selected" : ""}" data-idx="${idx}">
        <div class="cmd-item__left">
          <div class="cmd-item__icon">${iconSVG(a.icon)}</div>
          <div>
            <div class="cmd-item__title">${a.title}</div>
            <div class="cmd-item__sub">${(a.sub || "").slice(0, 75)}</div>
          </div>
        </div>
        ${a.tag ? `<span class="cmd-item__tag">${a.tag}</span>` : ""}
      </div>
    `).join("");

    cmdResults.querySelectorAll(".cmd-item").forEach((item, idx) => {
      item.addEventListener("click", () => {
        closeCommandPalette();
        actions[idx].act();
      });
    });
  }

  function initCommandPalette() {
    window.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        // e.preventDefault();
        openCommandPalette();
      }
    });

    if (cmdInput) {
      cmdInput.addEventListener("input", (e) => renderCmdItems(e.target.value));
    }

    if (cmdBackdrop) {
      cmdBackdrop.addEventListener("click", (e) => {
        if (e.target === cmdBackdrop) closeCommandPalette();
      });
    }

    document.querySelectorAll("[data-open-cmd]").forEach((btn) => btn.addEventListener("click", openCommandPalette));
  }

  /* ============================================================
     11. STATS ANIMATED COUNTERS
     ============================================================ */
  function initCounters() {
    const stats = document.querySelectorAll(".stat-box__num");
    stats.forEach((el) => {
      const target = parseInt(el.dataset.count, 10) || 0;
      const dur = 1000;
      const start = performance.now();

      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(ease * target);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target;
      };

      requestAnimationFrame(step);
    });
  }

  /* ============================================================
     12. GAMIFIED ONBOARDING & EXPLORATION QUEST TRACKER
     ============================================================ */
  const QUESTS = [
    {
      id: "landing",
      title: "Pouso Orbital",
      desc: "Completar a descida e reentrada na Terra",
      xp: 150,
      action: () => {
        const overlay = document.getElementById("introOverlay");
        if (overlay) {
          closeSectorDossier();
          overlay.classList.remove("dismissed");
          introActive = true;
          introProgress = 0;
          initIntroCinematic();
        }
      }
    },
    {
      id: "sobre",
      title: "Registro de Bordo",
      desc: "Acessar biografia e trajetória acadêmica no Setor 01",
      xp: 100,
      action: () => openSectorDossier("sobre")
    },
    {
      id: "software",
      title: "Engenharia de Software",
      desc: "Explorar o catálogo de softwares e 12 projetos no Setor 02",
      xp: 100,
      action: () => openSectorDossier("software")
    },
    {
      id: "pesquisa",
      title: "Astrofísica & Gaia DR3",
      desc: "Inspecionar a Pesquisa Científica Gaia DR3 no Setor 03",
      xp: 100,
      action: () => openSectorDossier("pesquisa")
    },
    {
      id: "contato",
      title: "Canais de Transmissão",
      desc: "Acessar o Setor 04 com Lattes, GitHub e CV",
      xp: 100,
      action: () => openSectorDossier("contato")
    },
    {
      id: "cmd",
      title: "Terminal Cósmico (⌘K)",
      desc: "Abrir a Paleta de Comandos ⌘K / Ctrl+K",
      xp: 100,
      action: () => openCommandPalette()
    },
    {
      id: "sfx",
      title: "Sintetizador Acústico",
      desc: "Alternar ou testar o áudio espacial Web Audio",
      xp: 50,
      action: () => {
        const sfxBtn = document.getElementById("sfxToggle");
        if (sfxBtn) sfxBtn.click();
      }
    },
    {
      id: "orb",
      title: "Sonda Planetária 3D",
      desc: "Interagir com o Core Station Orb no Hub",
      xp: 100,
      action: () => {
        closeSectorDossier();
        sfx.warp();
        showToast("🔮 Core Station Orb sincronizado com a rede neural", "star");
        completeQuest("orb");
      }
    },
    {
      id: "spectrum",
      title: "Espectroscopia H-Alpha",
      desc: "Ajustar o espectrômetro para a raia Hα (6563 Å) no Setor 03",
      xp: 150,
      action: () => {
        openSectorDossier("pesquisa");
        const slider = document.getElementById("spectrumSlider");
        if (slider) {
          slider.value = "6563";
          slider.dispatchEvent(new Event("input"));
        }
      }
    },
    {
      id: "lang",
      title: "Poliglota Intergaláctico",
      desc: "Alternar o idioma da interface (EN, ES, FR ou PT)",
      xp: 100,
      action: () => applyLang(lang === "pt" ? "en" : "pt")
    },
    {
      id: "filter",
      title: "Filtro de Arquitetura",
      desc: "Filtrar os projetos por categoria tecnológica",
      xp: 80,
      action: () => {
        openSectorDossier("software");
        const filterBtn = document.querySelector(".filter-btn[data-category='software']");
        if (filterBtn) filterBtn.click();
      }
    },
    {
      id: "supernova",
      title: "Caçador de Supernovas",
      desc: "Descobrir uma estrela oculta clicando no cosmos",
      xp: 150,
      action: () => {
        closeSectorDossier();
        triggerSupernovaBurst(window.innerWidth * 0.5 * (dpr || 1), window.innerHeight * 0.4 * (dpr || 1));
      }
    },
    {
      id: "goldenRecord",
      title: "Disco de Ouro Voyager",
      desc: "Ativar a transmissão interestelar no Setor 01",
      xp: 150,
      action: () => {
        openSectorDossier("sobre");
        const grBtn = document.getElementById("voyagerGoldenRecordBtn");
        if (grBtn) grBtn.click();
      }
    },
    {
      id: "pulsarAudio",
      title: "Eco de Pulsar Cósmico",
      desc: "Ouvir a frequência acústica de Gaia DR3 no Setor 03",
      xp: 150,
      action: () => {
        openSectorDossier("pesquisa");
        const pBtn = document.getElementById("pulsarAudioBtn");
        if (pBtn) pBtn.click();
      }
    },
    {
      id: "quantumPing",
      title: "Ping Quântico Relativístico",
      desc: "Disparar feixe de sinal quântico no Setor 04",
      xp: 150,
      action: () => {
        openSectorDossier("contato");
        const qBtn = document.getElementById("quantumPingBtn");
        if (qBtn) qBtn.click();
      }
    },
    {
      id: "murphWatch",
      title: "Relógio Gravitacional de Murph",
      desc: "Decodificar a mensagem em código Morse 'S-T-A-Y' no Setor 04 (Gargântua)",
      xp: 150,
      action: () => {
        openSectorDossier("contato");
        const morseBtn = document.getElementById("decodeMorseBtn");
        if (morseBtn) morseBtn.click();
      }
    },
    {
      id: "enduranceDock",
      title: "Acoplamento Endurance a 68 RPM",
      desc: "Executar manobra de sincronização de rotação com a Endurance no Setor 04",
      xp: 200,
      action: () => {
        openSectorDossier("contato");
        const dockBtn = document.getElementById("enduranceDockingBtn");
        if (dockBtn) dockBtn.click();
      }
    },
    {
      id: "hacker",
      title: "Terminal Hacker Cósmico",
      desc: "Executar comando secreto no ⌘K (ex: matrix, 42, blackhole, apollo)",
      xp: 200,
      action: () => {
        openCommandPalette();
        if (cmdInput) {
          cmdInput.value = "matrix";
          renderCmdItems("matrix");
        }
      }
    },
    {
      id: "konami",
      title: "Protocolo Konami Hiperespacial",
      desc: "Digitar o Código Konami: ↑ ↑ ↓ ↓ ← → ← → B A",
      xp: 300,
      action: () => triggerKonamiMode()
    },
    {
      id: "easterEgg",
      title: "Caçador de Relíquias Cósmicas",
      desc: "Encontrar e decodificar um dos Easter Eggs flutuantes",
      xp: 200,
      action: () => {
        showToast("🔍 Dica: Procure ícones flutuantes misteriosos no Hub e nos Setores!", "star");
      }
    }
  ];

  function getCompletedQuests() {
    try {
      const raw = localStorage.getItem("portfolio_quests_v1");
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function saveCompletedQuests(list) {
    try {
      localStorage.setItem("portfolio_quests_v1", JSON.stringify(list));
    } catch (e) {}
  }

  function completeQuest(questId) {
    const completed = getCompletedQuests();
    if (completed.includes(questId)) return;

    const quest = QUESTS.find((q) => q.id === questId);
    if (!quest) return;

    completed.push(questId);
    saveCompletedQuests(completed);

    sfx.questComplete();
    showToast(`🎯 Missão Cumprida: ${quest.title} (+${quest.xp} XP)`, "star");
    // Explorer credits grow with exploration: every first-time mission pays out
    // cash proportional to its XP (starts at $0 on a fresh visit).
    updateExplorerCash(quest.xp * 10);

    if (completed.length === QUESTS.length) {
      setTimeout(() => {
        sfx.warp();
        showToast("🏆 CONQUISTA MÁXIMA: 100% da Estação Explorada! Patente: COMANDANTE SUPREMO DO COSMOS", "star");
      }, 400);
    }

    renderTaskTracker();
  }

  function getRank(xp, completedCount) {
    if (completedCount === QUESTS.length) {
      return { name: "COMANDANTE SUPREMO", level: 5 };
    }
    if (xp >= 1500) {
      return { name: "ASTROFÍSICO DE ELITE", level: 4 };
    }
    if (xp >= 900) {
      return { name: "ENGENHEIRO CÓSMICO", level: 3 };
    }
    if (xp >= 400) {
      return { name: "EXPLORADOR ORBITAL", level: 2 };
    }
    return { name: "CADETE ESPACIAL", level: 1 };
  }

  function renderTaskTracker() {
    const trackerEl = document.getElementById("hudTaskTracker");
    const badgeCount = document.getElementById("taskBadgeCount");
    const userRankTag = document.getElementById("userRankTag");
    const userXpTotal = document.getElementById("userXpTotal");
    const progressPercent = document.getElementById("taskProgressPercent");
    const progressFill = document.getElementById("taskProgressFill");
    const taskItemsList = document.getElementById("taskItemsList");
    const achievementBadge = document.getElementById("taskAchievementBadge");

    if (!trackerEl || !taskItemsList) return;

    const completed = getCompletedQuests();
    let totalXp = 0;
    completed.forEach((id) => {
      const q = QUESTS.find((item) => item.id === id);
      if (q) totalXp += q.xp;
    });

    const count = completed.length;
    const total = QUESTS.length;
    const pct = Math.round((count / total) * 100);
    const rank = getRank(totalXp, count);

    if (badgeCount) badgeCount.textContent = `${count}/${total}`;
    if (userRankTag) userRankTag.textContent = `${rank.name} // LVL ${rank.level}`;
    if (userXpTotal) userXpTotal.textContent = `${totalXp} XP`;
    if (progressPercent) progressPercent.textContent = `${pct}%`;
    if (progressFill) progressFill.style.width = `${pct}%`;

    if (achievementBadge) {
      achievementBadge.classList.toggle("unlocked", count === total);
    }

    taskItemsList.innerHTML = QUESTS.map((q) => {
      const isDone = completed.includes(q.id);
      return `
        <li class="task-item ${isDone ? "completed" : ""}" data-quest-id="${q.id}" role="button" tabindex="0" title="${isDone ? "Missão concluída!" : "Clique para executar esta missão"}">
          <span class="task-check" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </span>
          <div class="task-info">
            <div class="task-title-row">
              <span class="task-title">${q.title}</span>
              <span class="task-xp-tag">+${q.xp} XP</span>
            </div>
            <span class="task-desc">${q.desc}</span>
          </div>
        </li>
      `;
    }).join("");

    taskItemsList.querySelectorAll(".task-item").forEach((item) => {
      item.addEventListener("click", () => {
        const qId = item.dataset.questId;
        const quest = QUESTS.find((q) => q.id === qId);
        if (quest && typeof quest.action === "function") {
          quest.action();
        }
      });
      item.addEventListener("mouseenter", () => sfx.hover());
    });
  }

  function initTaskTracker() {
    const trackerEl = document.getElementById("hudTaskTracker");
    const toggleBtn = document.getElementById("taskTrackerToggle");
    const minimizeBtn = document.getElementById("taskMinimizeBtn");
    const resetBtn = document.getElementById("taskResetBtn");

    if (!trackerEl) return;

    renderTaskTracker();

    if (toggleBtn) {
      toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isMobile = window.innerWidth < 900;
        if (isMobile) {
          trackerEl.classList.toggle("expanded");
        } else {
          trackerEl.classList.toggle("minimized");
        }
        sfx.click();
      });
    }

    if (minimizeBtn) {
      minimizeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isMobile = window.innerWidth < 900;
        if (isMobile) {
          trackerEl.classList.remove("expanded");
        } else {
          trackerEl.classList.add("minimized");
        }
        sfx.click();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        localStorage.removeItem("portfolio_quests_v1");
        renderTaskTracker();
        sfx.click();
        showToast("Progresso de missões reiniciado!", "box");
      });
    }

    // Interactive 3D core orb hook
    const coreOrb = document.querySelector(".core-orb-visual");
    if (coreOrb) {
      if (window.Space3D && typeof window.Space3D.initCoreOrb === "function") {
        try {
          window.Space3D.initCoreOrb(coreOrb);
        } catch (e) {
          console.warn("3D Core Orb fallback:", e);
        }
      }
      coreOrb.addEventListener("click", () => {
        sfx.warp();
        showToast("Core Station Orb 3D sincronizado com a rede neural", "star");
        completeQuest("orb");
      });
      coreOrb.addEventListener("mouseenter", () => sfx.hover());
    }
  }

  // Konami Code Listener (↑ ↑ ↓ ↓ ← → ← → B A)
  const KONAMI_CODE = ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a"];
  let konamiIndex = 0;

  function triggerKonamiMode() {
    document.body.classList.add("konami-active");
    sfx.warp();

    let banner = document.getElementById("konamiBanner");
    if (!banner) {
      banner = document.createElement("div");
      banner.id = "konamiBanner";
      banner.className = "konami-banner";
      banner.textContent = "🚀 PROTOCOLO KONAMI ATIVADO // MODO MATRIZ HIPERESPACIAL (+300 XP)";
      document.body.appendChild(banner);
    }

    showToast("🎮 Código Konami Aceito! Velocidade Hiperespacial Máxima!", "star");
    completeQuest("konami");

    setTimeout(() => triggerSupernovaBurst(window.innerWidth * 0.3 * (dpr || 1), window.innerHeight * 0.3 * (dpr || 1)), 100);
    setTimeout(() => triggerSupernovaBurst(window.innerWidth * 0.7 * (dpr || 1), window.innerHeight * 0.5 * (dpr || 1)), 350);
    setTimeout(() => triggerSupernovaBurst(window.innerWidth * 0.5 * (dpr || 1), window.innerHeight * 0.7 * (dpr || 1)), 600);

    setTimeout(() => {
      document.body.classList.remove("konami-active");
      if (banner && banner.parentNode) banner.remove();
    }, 12000);
  }

  /* ============================================================
     12.2 EASTER EGG POP CULTURE & CHEAT TRIGGERS
     ============================================================ */
  function triggerMotherloadCheat() {
    sfx.simoleons();
    document.body.classList.add("sims-green-flash");

    let container = document.getElementById("simoleonContainer");
    if (!container) {
      container = document.createElement("div");
      container.id = "simoleonContainer";
      container.className = "simoleon-particles-container";
      document.body.appendChild(container);
    }
    container.innerHTML = "";

    const count = 35;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "simoleon-particle";
      p.textContent = "§";
      p.style.left = `${Math.random() * 92 + 4}%`;
      p.style.animationDelay = `${Math.random() * 0.8}s`;
      p.style.animationDuration = `${Math.random() * 1.2 + 1.8}s`;
      p.style.fontSize = `${Math.random() * 1.6 + 1.2}rem`;
      container.appendChild(p);
    }

    let pill = document.getElementById("simsCashPill");
    if (!pill) {
      pill = document.createElement("div");
      pill.id = "simsCashPill";
      pill.className = "sims-cash-pill";
      pill.innerHTML = `<span>💰 +§50.000 SIMOLEONS</span><small>CÓDIGO SECRETO ATIVADO</small>`;
      document.body.appendChild(pill);
    }

    showToast("💰 MOTHERLODE // +§50.000 Simoleons depositados no tesouro orbital!", "cash");

    setTimeout(() => {
      document.body.classList.remove("sims-green-flash");
      if (pill && pill.parentNode) pill.remove();
      if (container && container.parentNode) container.remove();
    }, 4500);
  }

  function triggerHesoyamCheat() {
    sfx.hesoyam();
    document.body.classList.add("gta-hesoyam-flash");
    updateExplorerCash(250000);
    showToast("💵 HESOYAM // +$250.000, Saúde e Blindagem no Máximo!", "cash");

    setTimeout(() => {
      document.body.classList.remove("gta-hesoyam-flash");
    }, 2000);
  }

  let pkInterval = null;
  function triggerPainkillerCheat() {
    sfx.godmode();
    document.body.classList.add("painkiller-active");

    if (pkInterval) clearInterval(pkInterval);

    let badge = document.getElementById("painkillerTimer");
    if (!badge) {
      badge = document.createElement("div");
      badge.id = "painkillerTimer";
      badge.className = "painkiller-timer-badge";
      document.body.appendChild(badge);
    }

    let remainingSec = 300; // 5 minutes
    const updateTimerText = () => {
      const m = Math.floor(remainingSec / 60).toString().padStart(2, "0");
      const s = (remainingSec % 60).toString().padStart(2, "0");
      if (badge) {
        badge.innerHTML = `
          <span class="pk-star">⭐</span>
          <span class="pk-label">INVENCIBILIDADE:</span>
          <strong class="pk-time">${m}:${s}</strong>
        `;
      }
    };
    updateTimerText();

    pkInterval = setInterval(() => {
      remainingSec--;
      if (remainingSec <= 0) {
        clearInterval(pkInterval);
        pkInterval = null;
        document.body.classList.remove("painkiller-active");
        if (badge && badge.parentNode) badge.remove();
        showToast("⭐ Efeito de Invencibilidade expirado", "star");
      } else {
        updateTimerText();
      }
    }, 1000);

    showToast("⭐ PAINKILLER // Escudo invulnerável ativado (5 min)!", "star");
  }

  /* ============================================================
     12.3 YOUTUBE MINI PLAYER CONTROLLER
     ============================================================ */
  function playYouTubeTrack({ title, videoId }) {
    const player = document.getElementById("ytMiniPlayer");
    const titleEl = document.getElementById("ytPlayerTitle");
    const iframe = document.getElementById("ytIframe");
    const minBtn = document.getElementById("ytMinimizeBtn");
    const closeBtn = document.getElementById("ytCloseBtn");

    if (!player || !iframe) return;

    if (titleEl && title) titleEl.textContent = title;
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&enablejsapi=1`;

    player.classList.add("active");
    player.classList.remove("minimized");

    if (!player.dataset.wired) {
      player.dataset.wired = "true";
      if (minBtn) {
        minBtn.addEventListener("click", () => {
          player.classList.toggle("minimized");
        });
      }
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          iframe.src = "";
          player.classList.remove("active");
        });
      }
    }
  }

  function triggerBMTHEasterEgg() {
    sfx.bmth();
    document.body.classList.add("bmth-glitch-active");

    // Launch YouTube Mini Player playing BMTH - Can You Feel My Heart
    playYouTubeTrack({
      title: "Can You Feel My Heart — Bring Me The Horizon (Sempiternal)",
      videoId: "QJJYpsA5tv8"
    });

    let banner = document.getElementById("bmthBanner");
    if (!banner) {
      banner = document.createElement("div");
      banner.id = "bmthBanner";
      banner.className = "bmth-center-banner";
      banner.innerHTML = `
        <div class="bmth-head">🎸 CAN YOU FEEL MY HEART // SEMPITERNAL</div>
        <div class="bmth-quote">"Can you hear the silence? Can you see the dark? Can you fix the broken? CAN YOU FEEL MY HEART?"</div>
        <div class="bmth-eq"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
      `;
      document.body.appendChild(banner);
    }

    showToast("🎸 'Can you hear the silence?' // Tocando no Mini Player do YouTube...", "star");

    setTimeout(() => {
      document.body.classList.remove("bmth-glitch-active");
      if (banner && banner.parentNode) banner.remove();
    }, 4500);
  }

  /* ============================================================
     PERSISTENT HUB HUD (Explorer Status: Collapsible + Cash + Minimap)
     ============================================================ */
  let explorerCash = 0;
  let minimapAnimId = null;

  function updateExplorerCash(amountToAdd = 0) {
    explorerCash += amountToAdd;
    try {
      localStorage.setItem("portfolio_cash_v1", String(explorerCash));
    } catch (e) {}
    const cashEl = document.getElementById("hudCashDisplay");
    if (cashEl) {
      cashEl.textContent = `+$${explorerCash.toLocaleString("en-US")}`;
      if (amountToAdd > 0) {
        cashEl.classList.remove("gta-money-pulse");
        // Force reflow so the animation can retrigger on consecutive gains
        void cashEl.offsetWidth;
        cashEl.classList.add("gta-money-pulse");
      }
    }
  }

  function renderMinimapRadar() {
    const canvas = document.getElementById("hudMinimap");
    if (!canvas) return;
    const mctx = canvas.getContext("2d");
    if (!mctx) return;

    const mw = canvas.width;
    const mh = canvas.height;
    const cx = mw / 2;
    const cy = mh / 2;
    const now = performance.now() * 0.001;

    mctx.clearRect(0, 0, mw, mh);

    // Radar Grid Circles
    mctx.strokeStyle = "rgba(182, 146, 255, 0.25)";
    mctx.lineWidth = 1;
    mctx.beginPath();
    mctx.arc(cx, cy, 18, 0, Math.PI * 2);
    mctx.stroke();

    mctx.beginPath();
    mctx.arc(cx, cy, 38, 0, Math.PI * 2);
    mctx.stroke();

    // Radar Sweep Line
    const sweepAngle = (now * 1.8) % (Math.PI * 2);
    mctx.save();
    mctx.beginPath();
    mctx.moveTo(cx, cy);
    mctx.arc(cx, cy, 46, sweepAngle - 0.35, sweepAngle);
    mctx.fillStyle = "rgba(182, 146, 255, 0.15)";
    mctx.fill();
    mctx.restore();

    // Center Hub Blip (Orbital Station) — pulses when you're at the Hub itself
    const hubIsCurrent = !activeSector;
    mctx.beginPath();
    mctx.arc(cx, cy, hubIsCurrent ? 4.5 + Math.sin(now * 4) * 1 : 3.5, 0, Math.PI * 2);
    mctx.fillStyle = "#b692ff";
    mctx.shadowColor = "#b692ff";
    mctx.shadowBlur = hubIsCurrent ? 12 : 6;
    mctx.fill();
    mctx.shadowBlur = 0;

    // Sector Blips: S1 Terra (top-left), S2 Marte (top-right), S3 Saturno (bottom-left), S4 Gargântua (bottom-right)
    // "key" ties each blip to the sector router's data-open-sector value so the
    // radar can show exactly where you currently are in the cosmos.
    const sectors = [
      { key: "sobre", name: "Terra", x: cx - 26, y: cy - 20, color: "#6ea8fe" },
      { key: "software", name: "Marte", x: cx + 26, y: cy - 20, color: "#ef4444" },
      { key: "pesquisa", name: "Saturno", x: cx - 26, y: cy + 20, color: "#fbbf24" },
      { key: "contato", name: "Gargântua", x: cx + 26, y: cy + 20, color: "#c084fc" }
    ];

    sectors.forEach((s) => {
      const isCurrent = activeSector === s.key;
      mctx.beginPath();
      mctx.arc(s.x, s.y, isCurrent ? 4.2 + Math.sin(now * 4) * 1 : 2.8, 0, Math.PI * 2);
      mctx.fillStyle = s.color;
      if (isCurrent) {
        mctx.shadowColor = s.color;
        mctx.shadowBlur = 10;
      }
      mctx.fill();
      mctx.shadowBlur = 0;
      if (isCurrent) {
        // Ring around the current position so it's unmistakable at a glance.
        mctx.beginPath();
        mctx.arc(s.x, s.y, 7 + Math.sin(now * 4) * 1, 0, Math.PI * 2);
        mctx.strokeStyle = s.color;
        mctx.lineWidth = 1.2;
        mctx.stroke();
      }
    });

    minimapAnimId = requestAnimationFrame(renderMinimapRadar);
  }

  function initPersistentHubHud() {
    let hud = document.getElementById("hubHudBar");
    if (!hud) {
      // Restore any previously-earned cash (starts at $0 on a fresh visit).
      try {
        const savedCash = parseInt(localStorage.getItem("portfolio_cash_v1") || "0", 10);
        if (Number.isFinite(savedCash) && savedCash > 0) explorerCash = savedCash;
      } catch (e) {}

      hud = document.createElement("aside");
      hud.id = "hubHudBar";
      hud.className = "gta-hud-bar";
      hud.setAttribute("aria-label", "Status do Explorador");
      hud.setAttribute("role", "status");
      hud.innerHTML = `
        <div class="gta-hud-header" id="hudToggleHeader" role="button" tabindex="0" aria-expanded="false" title="Expandir/recolher status">
          <span class="gta-hud-title" data-i18n="hud.statusExplorer">STATUS EXPLORADOR</span>
          <button class="hud-collapse-btn" id="hudCollapseBtn" aria-label="Expandir/recolher status" type="button">▸</button>
        </div>
        <div class="gta-hud-collapsible-content" id="hudCollapsibleContent">
          <div class="gta-status-line">
            <div class="gta-meter gta-health"><div class="gta-meter-fill"></div><span>❤️ 100%</span></div>
            <div class="gta-meter gta-armor"><div class="gta-meter-fill"></div><span>🛡️ 100%</span></div>
          </div>
          <div class="gta-money-line" id="hudCashDisplay" title="Saldo de Créditos Orbitais">+$${explorerCash.toLocaleString("en-US")}</div>
          <div class="gta-minimap-wrap">
            <span class="gta-minimap-label" data-i18n="hud.radar">📡 RADAR ORBITAL // MINIMAP</span>
            <canvas id="hudMinimap" width="130" height="96"></canvas>
          </div>
        </div>
      `;
      document.body.appendChild(hud);

      // Collapsible by default — it used to sit permanently over dossier text
      // and the mobile CTA stack. Collapsed = just the title pill; expand on click.
      hud.classList.add("collapsed");
      const toggleHudCollapse = () => {
        const collapsed = hud.classList.toggle("collapsed");
        const header = document.getElementById("hudToggleHeader");
        const btn = document.getElementById("hudCollapseBtn");
        if (header) header.setAttribute("aria-expanded", collapsed ? "false" : "true");
        if (btn) btn.textContent = collapsed ? "▸" : "▾";
        sfx.click();
      };
      const hudHeader = document.getElementById("hudToggleHeader");
      if (hudHeader) {
        hudHeader.addEventListener("click", toggleHudCollapse);
        hudHeader.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleHudCollapse();
          }
        });
      }

      if (!minimapAnimId) {
        renderMinimapRadar();
      }
    }
    hud.style.display = "flex";
  }

  function triggerKratosEasterEgg() {
    sfx.kratos();
    document.body.classList.add("spartan-rage-active", "screen-quake-active");

    let banner = document.getElementById("kratosBanner");
    if (!banner) {
      banner = document.createElement("div");
      banner.id = "kratosBanner";
      banner.className = "kratos-center-banner";
      banner.innerHTML = `
        <div class="kratos-axe-icon">🪓</div>
        <div class="kratos-title">FÚRIA ANCESTRAL</div>
        <div class="kratos-quote">"BOY! Não tenha pena. Seja melhor."</div>
      `;
      document.body.appendChild(banner);
    }

    setTimeout(() => document.body.classList.remove("screen-quake-active"), 900);

    showToast("🪓 'BOY! Não tenha pena. Seja melhor.' // Fúria Ativada!", "star");

    setTimeout(() => {
      document.body.classList.remove("spartan-rage-active");
      if (banner && banner.parentNode) banner.remove();
    }, 4200);
  }

  function triggerHorizonEasterEgg() {
    sfx.focusScan();
    document.body.classList.add("focus-scan-active");

    let overlay = document.getElementById("horizonFocusOverlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "horizonFocusOverlay";
      overlay.className = "horizon-focus-overlay";
      overlay.innerHTML = `
        <div class="focus-tri-reticle"></div>
        <div class="focus-scan-line"></div>
        <div class="focus-hud-tag">👁️ FOCUS INTERFACE // REDE NEURAL ATIVA // GAIA OVERRIDE</div>
      `;
      document.body.appendChild(overlay);
    }

    showToast("👁️ FOCUS ATIVADO // Varredura holográfica em 360°", "spectrum");

    setTimeout(() => {
      document.body.classList.remove("focus-scan-active");
      if (overlay && overlay.parentNode) overlay.remove();
    }, 4500);
  }

  // Global Keydown Handler: Konami Code & Real-Time Typing Cheat Buffer
  let keySequenceBuffer = "";
  window.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();

    // 1. Konami check
    if (key === KONAMI_CODE[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === KONAMI_CODE.length) {
        konamiIndex = 0;
        triggerKonamiMode();
      }
    } else {
      konamiIndex = 0;
    }

    // 2. Global Cheat Code keystroke tracker (only when not focused on an input)
    if (["input", "textarea", "select"].includes(document.activeElement?.tagName?.toLowerCase())) {
      return;
    }

    if (e.key.length === 1) {
      keySequenceBuffer += key;
      if (keySequenceBuffer.length > 25) {
        keySequenceBuffer = keySequenceBuffer.slice(-25);
      }

      if (keySequenceBuffer.endsWith("motherload") || keySequenceBuffer.endsWith("motherlord") || keySequenceBuffer.endsWith("motherlode")) {
        keySequenceBuffer = "";
        triggerMotherloadCheat();
      } else if (keySequenceBuffer.endsWith("hesoyam")) {
        keySequenceBuffer = "";
        triggerHesoyamCheat();
      } else if (keySequenceBuffer.endsWith("painkiller") || keySequenceBuffer.endsWith("godmode")) {
        keySequenceBuffer = "";
        triggerPainkillerCheat();
      } else if (keySequenceBuffer.endsWith("bmth") || keySequenceBuffer.endsWith("sempiternal")) {
        keySequenceBuffer = "";
        triggerBMTHEasterEgg();
      } else if (keySequenceBuffer.endsWith("kratos") || keySequenceBuffer.endsWith("spartan")) {
        keySequenceBuffer = "";
        triggerKratosEasterEgg();
      } else if (keySequenceBuffer.endsWith("aloy") || keySequenceBuffer.endsWith("focus") || keySequenceBuffer.endsWith("hzd")) {
        keySequenceBuffer = "";
        triggerHorizonEasterEgg();
      }
    }
  });

  /* ============================================================
     12.3 FLOATING EASTER EGG RELICS (2 PER PAGE / SECTOR)
     ============================================================ */
  function triggerNolanTotem() {
    sfx.bornThisWay();
    showToast("🌀 'O pião continua girando sem parar...' // Paradoxo Quântico", "star");
    triggerSupernovaBurst(window.innerWidth * 0.5 * (dpr || 1), window.innerHeight * 0.5 * (dpr || 1));
  }

  function triggerGargantuaInterstellar() {
    sfx.bornThisWay();
    showToast("🕳️ 'Não entre dócil nessa noite escura...' // Singularidade Gravitacional", "star");
  }

  const FLOATING_EASTER_EGGS_LIST = [
    {
      id: "hesoyam",
      icon: "💵",
      name: "HESOYAM",
      desc: "+$250k & Blindagem",
      action: triggerHesoyamCheat
    },
    {
      id: "painkiller",
      icon: "🛡️",
      name: "PAINKILLER",
      desc: "Invencibilidade Temporária",
      action: triggerPainkillerCheat
    },
    {
      id: "motherlode",
      icon: "💎",
      name: "MOTHERLODE",
      desc: "+§50.000 Simoleons",
      action: triggerMotherloadCheat
    },
    {
      id: "konami",
      icon: "🕹️",
      name: "CÓDIGO SECRETO",
      desc: "30 Vidas & Frequência Retrô",
      action: triggerKonamiMode
    },
    {
      id: "gargantua",
      icon: "🕳️",
      name: "SINGULARIDADE",
      desc: "Horizonte de Eventos",
      action: triggerGargantuaInterstellar
    },
    {
      id: "nolan",
      icon: "🌀",
      name: "TOTEM",
      desc: "Paradoxo do Pião",
      action: triggerNolanTotem
    },
    {
      id: "bmth",
      icon: "🎸",
      name: "SEMPITERNAL",
      desc: "Can You Feel My Heart",
      action: triggerBMTHEasterEgg
    },
    {
      id: "gow",
      icon: "🪓",
      name: "FÚRIA",
      desc: "Leviatã // BOY!",
      action: triggerKratosEasterEgg
    },
    {
      id: "hzd",
      icon: "👁️",
      name: "FOCUS",
      desc: "Varredura Holográfica",
      action: triggerHorizonEasterEgg
    },
    {
      id: "bornthisway",
      icon: "⭐",
      name: "SINTONIA",
      desc: "Born This Way",
      action: () => {
        sfx.bornThisWay();
        showToast("⭐ 'Baby, you were born this way!' 🎵", "star");
        completeQuest("easterEgg");
      }
    }
  ];

  function renderFloatingEasterEggs(container, pageKey) {
    if (!container) return;

    container.querySelectorAll(".floating-easter-egg").forEach((el) => el.remove());

    const pageIndexMap = { hub: 0, sobre: 2, software: 4, pesquisa: 6, contato: 8 };
    const baseIdx = pageIndexMap[pageKey] !== undefined ? pageIndexMap[pageKey] : 0;
    const egg1 = FLOATING_EASTER_EGGS_LIST[baseIdx % FLOATING_EASTER_EGGS_LIST.length];
    const egg2 = FLOATING_EASTER_EGGS_LIST[(baseIdx + 1) % FLOATING_EASTER_EGGS_LIST.length];

    const pair = [egg1, egg2];
    const isMobile = window.innerWidth < 900;
    const positions = isMobile
      ? [
          { top: "14%", right: "6%" },
          { bottom: "16%", left: "6%" }
        ]
      : [
          { top: "22%", left: "8%" },
          { top: "72%", right: "8%" }
        ];

    let discoveredSet = new Set();
    try {
      discoveredSet = new Set(JSON.parse(localStorage.getItem("portfolio_discovered_eggs_v1") || "[]"));
    } catch (e) {}

    pair.forEach((egg, idx) => {
      const btn = document.createElement("button");
      const alreadyDiscovered = discoveredSet.has(egg.id);
      btn.className = `floating-easter-egg ${alreadyDiscovered ? "discovered" : ""}`;
      btn.dataset.eggId = egg.id;

      // Kept mysterious until discovered (no spoilers on the floating icon
      // itself), but once found it should clearly say what it is and where
      // it's from — it stayed anonymous even after being collected before.
      const mysteryTitle = "Sinal Misterioso // Toque para decodificar";
      const revealedTitle = `${egg.name} // ${egg.desc}`;
      btn.setAttribute("aria-label", alreadyDiscovered ? `Relíquia decodificada: ${egg.name}` : "Relíquia Enigmática");
      btn.setAttribute("title", alreadyDiscovered ? revealedTitle : mysteryTitle);

      const pos = positions[idx];
      if (pos.top) btn.style.top = pos.top;
      if (pos.bottom) btn.style.bottom = pos.bottom;
      if (pos.left) btn.style.left = pos.left;
      if (pos.right) btn.style.right = pos.right;
      btn.style.animationDelay = `${idx * -2.4}s`;

      // Icon only — no on-screen text, before or after discovery. The name/
      // source is exposed via title/aria-label (hover tooltip + screen
      // readers) instead of a visible label.
      btn.innerHTML = `<span class="egg-icon">${egg.icon}</span>`;

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        btn.classList.add("collected-burst", "discovered");
        btn.setAttribute("title", revealedTitle);
        btn.setAttribute("aria-label", `Relíquia decodificada: ${egg.name}`);

        const firstDiscovery = !discoveredSet.has(egg.id);
        discoveredSet.add(egg.id);
        try {
          localStorage.setItem("portfolio_discovered_eggs_v1", JSON.stringify([...discoveredSet]));
        } catch (err) {}
        if (firstDiscovery) updateExplorerCash(50);

        // Reveal the corresponding easter egg widget
        const eggWidgetMap = {
          voyager: "voyagerWidget",
          pulsar: "pulsarWidget",
          bmth: "bmthWidget",
          gow: "gowRuneWidget",
          hzd: "horizonFocusWidget",
          sims: "simsVaultWidget",
          hesoyam: "gtaHesoyamWidget",
          konami: null,
          gargantua: null,
          nolan: null,
          bornthisway: null
        };
        const widgetId = eggWidgetMap[egg.id];
        if (widgetId) {
          const widget = document.getElementById(widgetId);
          if (widget) {
            widget.classList.add("is-revealed");
            widget.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }

        if (typeof egg.action === "function") {
          egg.action();
        }
        completeQuest("easterEgg");

        setTimeout(() => btn.classList.remove("collected-burst"), 700);
      });

      container.appendChild(btn);
    });
  }

  function updateAllFloatingEasterEggs() {
    const hubViewport = document.querySelector(".main-hud-viewport");
    if (hubViewport) {
      renderFloatingEasterEggs(hubViewport, "hub");
    }
    document.querySelectorAll(".dossier-panel").forEach((panel) => {
      const pageKey = panel.id.replace("panel-", "");
      renderFloatingEasterEggs(panel, pageKey);
    });
  }

  function playPulsarAudio() {
    if (!sfxEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const pulseRate = 12.5;
      const pulseInterval = 1 / pulseRate;
      const count = 22;

      for (let i = 0; i < count; i++) {
        const t = now + i * pulseInterval;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(320 + (i % 2) * 80, t);
        osc.frequency.exponentialRampToValueAtTime(80, t + 0.025);
        gain.gain.setValueAtTime(0.06, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.025);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.025);
      }
    } catch (e) {}
  }

  let gargantua3DInstance = null;

  function initGargantuaBackground() {
    const canvas = document.getElementById("gargantuaBgCanvas");
    if (!canvas) return;

    if (window.Space3D && typeof window.Space3D.initGargantuaBg === "function") {
      try {
        gargantua3DInstance = window.Space3D.initGargantuaBg(canvas);
        if (gargantua3DInstance) return;
      } catch (e) {
        console.warn("3D Gargantua bg fallback:", e);
      }
    }

    // 2D fallback - full screen Gargantua
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let dpr = 1;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    }

    resize();
    window.addEventListener("resize", resize);

    // Particle accretion disk stream (200 relativistic orbiting particles)
    const ACCRETION_PARTICLES = [];
    const count = 200;
    for (let i = 0; i < count; i++) {
      ACCRETION_PARTICLES.push({
        angle: Math.random() * Math.PI * 2,
        dist: Math.random() * 0.9 + 0.55,
        speed: (Math.random() * 0.008 + 0.004) * (1.2 / (0.55 + Math.random() * 0.9)),
        size: Math.random() * 2.2 + 0.8,
        color: Math.random() > 0.4 ? "rgba(254, 240, 138, 0.9)" : "rgba(249, 115, 22, 0.85)"
      });
    }

    function renderGargantua() {
      const panel = document.getElementById("panel-contato");
      const isVisible = !panel || panel.classList.contains("active");

      if (!isVisible && !reduceMotion) {
        requestAnimationFrame(renderGargantua);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = height * 0.42;
      const baseR = Math.min(width, height) * 0.32;
      const bhRadius = Math.max(100 * dpr, baseR);

      ctx.save();
      ctx.translate(cx, cy);

      // 1. Relativistic Spacetime Lensing Gradient (Einstein Halo)
      const haloGrad = ctx.createRadialGradient(0, 0, bhRadius * 0.5, 0, 0, bhRadius * 2.5);
      haloGrad.addColorStop(0, "rgba(254, 240, 138, 0.5)");
      haloGrad.addColorStop(0.2, "rgba(245, 158, 11, 0.35)");
      haloGrad.addColorStop(0.5, "rgba(234, 88, 12, 0.15)");
      haloGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.beginPath();
      ctx.arc(0, 0, bhRadius * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = haloGrad;
      ctx.fill();

      // 2. Upper Lensed Accretion Arc (Gravitationally bent over the top)
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(0, -bhRadius * 0.38, bhRadius * 1.55, bhRadius * 0.95, 0, Math.PI * 0.94, Math.PI * 2.06);
      ctx.lineWidth = Math.max(4, bhRadius * 0.22);
      const upperGrad = ctx.createLinearGradient(-bhRadius * 1.55, 0, bhRadius * 1.55, 0);
      upperGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      upperGrad.addColorStop(0.3, "rgba(253, 224, 71, 0.85)");
      upperGrad.addColorStop(0.7, "rgba(249, 115, 22, 0.5)");
      upperGrad.addColorStop(1, "rgba(185, 28, 28, 0.2)");
      ctx.strokeStyle = upperGrad;
      ctx.shadowColor = "#f59e0b";
      ctx.shadowBlur = 20 * dpr;
      ctx.stroke();
      ctx.restore();

      // 3. Lower Lensed Accretion Arc (Gravitationally bent beneath the bottom)
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(0, bhRadius * 0.38, bhRadius * 1.55, bhRadius * 0.95, 0, 0, Math.PI * 1.06);
      ctx.lineWidth = Math.max(3, bhRadius * 0.16);
      const lowerGrad = ctx.createLinearGradient(-bhRadius * 1.55, 0, bhRadius * 1.55, 0);
      lowerGrad.addColorStop(0, "rgba(255, 255, 255, 0.85)");
      lowerGrad.addColorStop(0.4, "rgba(251, 191, 36, 0.65)");
      lowerGrad.addColorStop(1, "rgba(194, 65, 12, 0.2)");
      ctx.strokeStyle = lowerGrad;
      ctx.stroke();
      ctx.restore();

      // 4. Swirling Relativistic Accretion Matter Particles
      ACCRETION_PARTICLES.forEach((p) => {
        p.angle += p.speed * (1.2 / p.dist);
        const rx = bhRadius * 1.9 * p.dist;
        const ry = bhRadius * 0.4 * p.dist;
        const px = Math.cos(p.angle) * rx;
        const py = Math.sin(p.angle) * ry;

        const isBehind = Math.sin(p.angle) < 0 && Math.abs(px) < bhRadius * 0.55;
        if (!isBehind) {
          ctx.beginPath();
          ctx.arc(px, py, p.size * dpr, 0, Math.PI * 2);
          const alpha = px < 0 ? 0.95 : 0.45;
          ctx.fillStyle = p.color.replace(/[\d\.]+\)$/, `${alpha})`);
          ctx.fill();
        }
      });

      // 5. Equatorial Accretion Disk (Front matter stream)
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(0, 0, bhRadius * 1.95, bhRadius * 0.38, -0.06, 0, Math.PI * 2);
      ctx.lineWidth = Math.max(5, bhRadius * 0.28);
      const eqGrad = ctx.createLinearGradient(-bhRadius * 1.95, 0, bhRadius * 1.95, 0);
      eqGrad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
      eqGrad.addColorStop(0.2, "rgba(254, 240, 138, 0.95)");
      eqGrad.addColorStop(0.5, "rgba(245, 158, 11, 0.8)");
      eqGrad.addColorStop(0.8, "rgba(234, 88, 12, 0.4)");
      eqGrad.addColorStop(1, "rgba(124, 45, 18, 0.15)");
      ctx.strokeStyle = eqGrad;
      ctx.shadowColor = "#fbbf24";
      ctx.shadowBlur = 25 * dpr;
      ctx.stroke();
      ctx.restore();

      // 6. Photon Sphere (1.5x Schwarzschild radius)
      ctx.beginPath();
      ctx.arc(0, 0, bhRadius * 0.73, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
      ctx.lineWidth = Math.max(1.5, bhRadius * 0.025);
      ctx.shadowColor = "#ffffff";
      ctx.shadowBlur = 10 * dpr;
      ctx.stroke();

      // 7. Schwarzschild Event Horizon (Absolute black)
      ctx.beginPath();
      ctx.arc(0, 0, bhRadius * 0.7, 0, Math.PI * 2);
      ctx.fillStyle = "#000000";
      ctx.fill();

      ctx.restore();

      requestAnimationFrame(renderGargantua);
    }
    renderGargantua();
  }

  function initEasterEggWidgets() {
    // 1. Voyager Golden Record
    const voyagerBtn = document.getElementById("voyagerGoldenRecordBtn");
    const voyagerLog = document.getElementById("voyagerLogText");
    const voyagerOrb = document.getElementById("voyagerDiskOrb");
    if (voyagerBtn) {
      voyagerBtn.addEventListener("click", () => {
        if (voyagerOrb) voyagerOrb.classList.add("spinning");
        sfx.warp();
        if (voyagerLog) {
          voyagerLog.innerHTML = `📡 <strong>TRANSMISSÃO INTERESTELAR DECODIFICADA:</strong><br/>
          <em>"Mensagem enviada de Bom Jesus do Itabapoana - RJ (21°08'02"S 41°40'48"W): Engenharia de Computação, Astrofísica e paixão por explorar o infinito. Olá aos habitantes do cosmos!"</em>`;
        }
        showToast("📀 Disco de Ouro Voyager Ativado! Mensagem interestelar transmitida.", "star");
        completeQuest("goldenRecord");
        setTimeout(() => { if (voyagerOrb) voyagerOrb.classList.remove("spinning"); }, 5000);
      });
    }

    // 2. Gaia DR3 Pulsar Acoustic Synthesizer
    const pulsarBtn = document.getElementById("pulsarAudioBtn");
    const pulsarTelemetry = document.getElementById("pulsarTelemetryText");
    if (pulsarBtn) {
      pulsarBtn.addEventListener("click", () => {
        playPulsarAudio();
        if (pulsarTelemetry) {
          pulsarTelemetry.innerHTML = `⚡ <strong>PULSO SINTETIZADO:</strong> 12.5 Hz (750 RPM) // Campo Magnético B: 1.4 × 10¹² G // Período P = 0.080s // Gaia DR3 Source 405928192`;
        }
        showToast("⚡ Pulso de Estrela de Nêutrons Gaia DR3 Sintetizado!", "spectrum");
        completeQuest("pulsarAudio");
      });
    }

    // 3. Quantum Relay Ping Simulator
    const pingBtn = document.getElementById("quantumPingBtn");
    const pingNodes = document.querySelectorAll(".ping-node");
    if (pingBtn) {
      pingBtn.addEventListener("click", () => {
        sfx.click();
        showToast("📡 Feixe Quântico Relativístico Disparado a c = 299.792 km/s...", "satellite");
        pingNodes.forEach((node, i) => {
          setTimeout(() => {
            node.classList.add("ping-active");
            playTone(600 + i * 150, "sine", 0.08, 0.03);
            setTimeout(() => node.classList.remove("ping-active"), 1200);
          }, i * 250);
        });
        completeQuest("quantumPing");
      });
    }

    // 4. Murph's Gravity Watch (Morse "S-T-A-Y")
    const decodeMorseBtn = document.getElementById("decodeMorseBtn");
    const murphSecondHand = document.getElementById("murphSecondHand");
    const morseDecodedText = document.getElementById("morseDecodedText");
    const morseCodeStream = document.getElementById("morseCodeStream");

    // Continuous subtle quantum jitter on second hand
    let watchAngle = 0;
    setInterval(() => {
      if (murphSecondHand && !murphSecondHand.classList.contains("transmitting")) {
        watchAngle = (watchAngle + 6 + (Math.random() > 0.8 ? 4 : 0)) % 360;
        murphSecondHand.style.transform = `translateX(-50%) rotate(${watchAngle}deg)`;
      }
    }, 1000);

    if (decodeMorseBtn) {
      decodeMorseBtn.addEventListener("click", () => {
        if (murphSecondHand) murphSecondHand.classList.add("transmitting");

        // Morse Code Timing for "S T A Y" (...  -  .-  -.--)
        // dot = 80ms, dash = 240ms, element pause = 80ms, letter pause = 240ms
        const MORSE_EVENTS = [
          // S: . . .
          { type: "dot", dur: 80 }, { type: "space", dur: 80 },
          { type: "dot", dur: 80 }, { type: "space", dur: 80 },
          { type: "dot", dur: 80 }, { type: "letter", dur: 260 },
          // T: -
          { type: "dash", dur: 240 }, { type: "letter", dur: 260 },
          // A: . -
          { type: "dot", dur: 80 }, { type: "space", dur: 80 },
          { type: "dash", dur: 240 }, { type: "letter", dur: 260 },
          // Y: - . - -
          { type: "dash", dur: 240 }, { type: "space", dur: 80 },
          { type: "dot", dur: 80 }, { type: "space", dur: 80 },
          { type: "dash", dur: 240 }, { type: "space", dur: 80 },
          { type: "dash", dur: 240 }
        ];

        let elapsed = 0;
        MORSE_EVENTS.forEach((ev) => {
          setTimeout(() => {
            if (ev.type === "dot") {
              playTone(740, "sine", 0.08, 0.05);
              if (murphSecondHand) murphSecondHand.style.transform = `translateX(-50%) rotate(${Math.random() * 40 - 20}deg)`;
            } else if (ev.type === "dash") {
              playTone(740, "sine", 0.24, 0.06);
              if (murphSecondHand) murphSecondHand.style.transform = `translateX(-50%) rotate(${Math.random() * 90 + 30}deg)`;
            }
          }, elapsed);
          elapsed += ev.dur;
        });

        if (morseCodeStream) {
          morseCodeStream.style.color = "#ffffff";
          morseCodeStream.style.textShadow = "0 0 16px #f59e0b";
        }

        setTimeout(() => {
          if (morseDecodedText) {
            morseDecodedText.innerHTML = `✨ <strong>DECODIFICAÇÃO CONCLUÍDA:</strong> <code>S - T - A - Y</code><br/>
            <em>"Não me deixe ir, Murph... Foi ele o tempo todo. Meu pai era o meu fantasma no tesseract 5D."</em>`;
          }
          if (murphSecondHand) murphSecondHand.classList.remove("transmitting");
          sfx.success();
          showToast("⏳ Transmissão de Cooper Decodificada: STAY (Fique)", "star");
          completeQuest("murphWatch");
        }, elapsed + 200);
      });
    }

    // 5. Endurance Docking Maneuver (68 RPM)
    const enduranceBtn = document.getElementById("enduranceDockingBtn");
    if (enduranceBtn) {
      enduranceBtn.addEventListener("click", () => {
        document.body.classList.add("endurance-spin-active");
        sfx.warp();

        // Synthesize 68 RPM Thruster Spin Audio Sweep
        if (sfxEnabled) {
          try {
            const ctx = getAudioContext();
            if (ctx) {
              const now = ctx.currentTime;
              const osc = ctx.createOscillator();
              const gain = ctx.createGain();
              osc.type = "sawtooth";
              osc.frequency.setValueAtTime(80, now);
              osc.frequency.exponentialRampToValueAtTime(360, now + 2.0);
              osc.frequency.exponentialRampToValueAtTime(110, now + 4.0);
              gain.gain.setValueAtTime(0.08, now);
              gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.2);
              osc.connect(gain);
              gain.connect(ctx.destination);
              osc.start(now);
              osc.stop(now + 4.2);
            }
          } catch (e) {}
        }

        showToast("🚀 CASE: 'Estamos a 68 RPM... Cooper, isso é loucura!' — Acoplamento concluído!", "star");
        completeQuest("enduranceDock");

        setTimeout(() => {
          document.body.classList.remove("endurance-spin-active");
          sfx.success();
          showToast("🔒 Acoplamento com a Estação Endurance travado com 100% de integridade!", "box");
        }, 4500);
      });
    }

    // 6. Horizon Zero Dawn Focus Hologram Scanner (Setor 01 - Terra)
    const horizonBtn = document.getElementById("horizonFocusBtn");
    const horizonResult = document.getElementById("horizonFocusResult");
    if (horizonBtn) {
      horizonBtn.addEventListener("click", () => {
        triggerHorizonEasterEgg();
        if (horizonResult) {
          horizonResult.style.display = "block";
        }
      });
    }

    // 7. God of War Spartan War Runes (Setor 01 - Terra)
    const gowBtn = document.getElementById("gowRuneBtn");
    if (gowBtn) {
      gowBtn.addEventListener("click", () => {
        triggerKratosEasterEgg();
      });
    }

    // 8. The Sims Simoleons Galactic Vault (Setor 02 - Marte)
    let currentSimoleons = 50000;
    const simsVaultBtn = document.getElementById("simsVaultBtn");
    const simsVaultBalance = document.getElementById("simsVaultBalance");
    if (simsVaultBtn) {
      simsVaultBtn.addEventListener("click", () => {
        currentSimoleons += 50000;
        if (simsVaultBalance) {
          simsVaultBalance.textContent = `§${currentSimoleons.toLocaleString("pt-BR")}`;
        }
        triggerMotherloadCheat();
      });
    }

    // 9. GTA San Andreas Orbital Pay 'n' Spray (Setor 02 - Marte)
    const gtaHesoyamBtn = document.getElementById("gtaHesoyamBtn");
    if (gtaHesoyamBtn) {
      gtaHesoyamBtn.addEventListener("click", () => {
        triggerHesoyamCheat();
      });
    }

    // 10. Bring Me The Horizon Sempiternal Synthesizer (Setor 03 - Saturno)
    const bmthAudioBtn = document.getElementById("bmthAudioBtn");
    if (bmthAudioBtn) {
      bmthAudioBtn.addEventListener("click", () => {
        triggerBMTHEasterEgg();
      });
    }

    // 11. GTA V Invincibility Chamber (Setor 04 - Gargântua)
    const gtaPainkillerBtn = document.getElementById("gtaPainkillerBtn");
    if (gtaPainkillerBtn) {
      gtaPainkillerBtn.addEventListener("click", () => {
        triggerPainkillerCheat();
      });
    }
  }

  /* ============================================================
     13. i18n APPLIER & LANGUAGE ENGINE
     ============================================================ */
  function applyI18n() {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (!val) return;
      if (el.hasAttribute("data-html")) {
        el.innerHTML = Array.isArray(val) ? val.map((p) => `<p>${p}</p>`).join("") : val;
      } else {
        el.textContent = val;
      }
    });

    // Translate placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = t(key);
      if (val) el.setAttribute("placeholder", val);
    });

    // Kickers/titles/leads are translated individually via [data-i18n] above
    // (kickers.*, sections.*.title, sections.*.lead) — this used to be a
    // second, panel-id-based pass targeting kickers.setorNN/titles.setorNN/
    // leads.setorNN, none of which ever existed in interface.yaml, so it was
    // silently a no-op; removed rather than resurrected to avoid the second
    // pass re-overwriting an already-translated kicker with the wrong text
    // (some panels have more than one .section-dossier-kicker).

    // Translate interstellar banner (Nolan quotes)
    const quote1 = document.querySelector(".nolan-quote-text");
    if (quote1) {
      const val = t("interstellar.quote1");
      if (val) quote1.textContent = val;
    }
    const quote1Author = document.querySelector(".nolan-quote-author");
    if (quote1Author) {
      const val = t("interstellar.quote1Author");
      if (val) quote1Author.innerHTML = val;
    }
    const quote2 = document.querySelector(".nolan-quote-wrap .nolan-quote-text:last-child");
    if (quote2) {
      const val = t("interstellar.quote2");
      if (val) quote2.textContent = val;
    }
    // TARS telemetry strip
    const tarsStrip = document.querySelector(".tars-telemetry-strip");
    if (tarsStrip) {
      const tarsLabel = t("interstellar.tarsLabel");
      const honesty = t("interstellar.honesty");
      const humor = t("interstellar.humor");
      const paramLabel = t("interstellar.paramLabel");
      if (tarsLabel && honesty && humor && paramLabel) {
        tarsStrip.innerHTML = `
          <span>${tarsLabel}</span>
          <span>${honesty} <strong>90%</strong></span>
          <span>·</span>
          <span>${humor} <strong>75%</strong></span>
          <span>·</span>
          <span>${paramLabel} <em>"Não é possível... Não, é necessário."</em></span>
        `;
      }
    }

    // Translate footer
    const footer = document.querySelector(".rodape-frase");
    if (footer) {
      const val = t("footer");
      if (val) {
        const links = footer.querySelector(".rodape-links");
        footer.innerHTML = val;
        if (links) footer.appendChild(links);
      }
    }

    // Corner nodes (hub.sectorN.kicker/title/sub) are translated individually
    // via [data-i18n] above, same as the dossier kickers.

    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
  }

  function applyLang(l) {
    if (!I18N[l]) return;
    lang = l;
    localStorage.setItem("lang", l);
    applyI18n();
    renderProjectsShowcase();
    renderAllReposGrouped();
    renderBolsas();
    renderContacts();
    renderResearch();
    showToast(`Idioma: ${l.toUpperCase()}`, "globe");
    completeQuest("lang");
  }

  /* ============================================================
     14. INITIALIZATION
     ============================================================ */
  function init() {
    initIntroCinematic();
    initWarpTravelEngine();
    initSectorNavigation();
    initCosmos();
    initGargantuaBackground();
    initCursor();
    applyI18n();

    renderProjectsShowcase();
    renderAllReposGrouped();
    renderBolsas();
    renderContacts();
    renderResearch();

    initSpectrumSimulator();
    initCommandPalette();
    initTaskTracker();
    initEasterEggWidgets();

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => applyLang(btn.dataset.lang));
    });

    const sfxBtn = document.getElementById("sfxToggle");
    if (sfxBtn) {
      const updateSfxUI = () => {
        sfxBtn.innerHTML = `
          <span class="sfx-icon-wrap" style="display:inline-flex;align-items:center;justify-content:center;">
            ${sfxEnabled ? iconSVG("volume") : iconSVG("volumeMute")}
          </span>
          <span class="sfx-label">${sfxEnabled ? "SFX" : "MUTE"}</span>
        `;
        sfxBtn.classList.toggle("active", sfxEnabled);
        sfxBtn.setAttribute("title", sfxEnabled ? "Efeitos Sonoros: Ativados (Clique para Desativar)" : "Efeitos Sonoros: Desativados (Clique para Ativar)");
        sfxBtn.setAttribute("aria-pressed", sfxEnabled ? "true" : "false");
      };
      updateSfxUI();

      const toggleSfx = (e) => {
        if (e) // e.preventDefault();
        getAudioContext();
        sfxEnabled = !sfxEnabled;
        localStorage.setItem("portfolio_sfx", sfxEnabled ? "true" : "false");
        updateSfxUI();
        if (sfxEnabled) {
          sfx.success();
          showToast("🔊 Efeitos sonoros ativados!", "volume");
        } else {
          showToast("🔇 Efeitos sonoros desativados", "volumeMute");
        }
        completeQuest("sfx");
      };

      sfxBtn.addEventListener("click", toggleSfx);
      sfxBtn.addEventListener("touchstart", () => getAudioContext(), { passive: true });
    }

    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.dataset.category;
        renderProjectsShowcase();
        sfx.click();
        completeQuest("filter");
      });
    });

    const pSearch = document.getElementById("projectSearch");
    if (pSearch) {
      pSearch.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderProjectsShowcase();
        renderAllReposGrouped();
      });
    }

    // Mobile topbar drawer toggle (< 900px)
    const mobileTopbarToggle = document.getElementById("mobileTopbarToggle");
    const topHudBar = document.getElementById("topHudBar");
    const closeMobileTopbarBtn = document.getElementById("closeMobileTopbarBtn");

    if (mobileTopbarToggle && topHudBar) {
      mobileTopbarToggle.addEventListener("click", () => {
        topHudBar.classList.toggle("mobile-open");
        sfx.click();
      });
    }

    if (closeMobileTopbarBtn && topHudBar) {
      closeMobileTopbarBtn.addEventListener("click", () => {
        topHudBar.classList.remove("mobile-open");
        sfx.click();
      });
    }

    // Persistent GTA HUD on hub (always visible)
    initPersistentHubHud();
const gargantuaCanvas = document.getElementById("gargantuaBgCanvas");
if (gargantuaCanvas) {
  new ResizeObserver((entries) => {
    for (let entry of entries) {
      if (entry.contentRect.width > 0 && window.gargantua3DInstance) {
        window.gargantua3DInstance.resize();
      }
    }
  }).observe(gargantuaCanvas.parentElement);
}

const spectrumCanvas = document.getElementById("spectrumCanvas");
if (spectrumCanvas) {
  new ResizeObserver((entries) => {
    for (let entry of entries) {
      if (entry.contentRect.width > 0) {
        const slider = document.getElementById("spectrumSlider");
        if (slider) {
          slider.dispatchEvent(new Event('input'));
        }
      }
    }
  }).observe(spectrumCanvas.parentElement);
}

    const copyLattesBtn = document.getElementById("copyLattesBtn");
    if (copyLattesBtn) {
      copyLattesBtn.addEventListener("click", () => {
        navigator.clipboard.writeText("6818168089966785");
        showToast("ID Lattes copiado: 6818168089966785", "lattes");
      });
    }

    const modalCloseBtn = document.getElementById("projectModalClose");
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProjectModal);
    if (projectModalBackdrop) {
      projectModalBackdrop.addEventListener("click", (e) => {
        if (e.target === projectModalBackdrop) closeProjectModal();
      });
    }

    updateAllFloatingEasterEggs();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

window.addEventListener("hashchange", () => {
  const escBtn = document.getElementById("closeDossierMobileBtn");
  if (!escBtn) return;
  const hash = window.location.hash.replace("#", "");
  if (["sobre", "software", "pesquisa", "contato"].includes(hash)) {
    escBtn.style.display = "flex";
  } else {
    escBtn.style.display = "none";
  }
});
