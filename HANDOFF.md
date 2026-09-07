# HANDOFF — Portfolio (Pedro Rocha)

Living handoff doc for whoever (human or agent) picks up work on this repo next.
Keep it updated at the end of any substantial session — that's more valuable than
a perfect diff history in commit messages.

See also: `CLAUDE.md` (architecture map + commands) and
`.claude/skills/cosmic-portfolio/SKILL.md` (playbook for this specific
"gamified space-hub portfolio" pattern — CSS/JS gotchas, testing method).

## 2026-09-07 (part 4) — Purple theme, real Earth textures, unified topbar

- **Theme color is purple now.** `--accent-cyan` (used pervasively as *the*
  primary glow/border/link color — borders, focus rings, icons, shadows) and
  every hardcoded literal of the same color (`#b692ff` was `#5eead4`,
  `182, 146, 255` was `94, 234, 212`) were swapped across
  `style.css`/`main.js`/`space-3d.js`/`index.html` via a global search-
  replace (110 occurrences). The variable is still *named* `--accent-cyan`
  for now — renaming it is cosmetic and was deprioritized to keep this a
  low-risk value swap; do that rename as a follow-up if it bothers you.
  Planet atmosphere colors (Earth's blue, Mars' orange, etc.) were left
  alone on purpose — those are physically-flavored, not site-theme colors.
- **Setores 03/04 (bottom corner nodes) were sitting on top of the footer**
  — `.node-bottom-left/-right` used a flat `bottom: 36px`, which doesn't
  reserve enough clearance for the footer's real rendered height. Bumped to
  96px (mirrors the top nodes' own 96px).
- **Real 3D Earth textures**, replacing the hand-drawn procedural canvas
  ones — see the "Earth day/night terminator" entry below the fold for the
  city-lights shader itself; this is the follow-up the user explicitly asked
  for after comparing against Three.js's own `webgpu_tsl_earth` example.
  Sourced real equirectangular imagery (day map, night lights, ocean
  specular mask, cloud layer) from `three.js`'s own MIT-licensed example
  assets (`examples/textures/planets/` in the mrdoob/three.js repo) into
  `assets/img/planets/` — see the README there for provenance/licensing.
  `getEarthTextures()` now just `THREE.TextureLoader().load()`s these
  instead of drawing continents from hand-plotted lat/lon polygons. Also
  fixed the Earth material itself while at it: it was `MeshStandardMaterial`
  with the specular mask wired in as a `roughnessMap` — backwards (white=
  ocean would read as *rough*, black=land as *glossy*, the opposite of
  reality). Switched to `MeshPhongMaterial` + `specularMap`, the pairing
  this exact texture asset is designed for (and what three.js's own earth
  examples use it as). `GEO_LANDMASSES`/`GEO_CITIES` in `space-3d.js` are
  now dead code (no longer referenced) — harmless, left in case Mars/Saturn
  ever want similar real-texture treatment, but safe to delete.
  Not attempted: Mars/Saturn are still procedural (no equivalent free
  texture set was sourced this pass) — only lighting/blob-density fixes
  from an earlier session apply there.
- **Unified the two topbars.** `.top-hud-bar` (hub: brand, intro replay,
  terminal search, SFX, language switcher) and `.dossier-header-bar`
  (in-sector: return-to-hub, sector tabs) used to be different bars with
  different controls. Per feedback they should be "the same bar everywhere,
  on hover": added a `.dossier-header-controls` block (terminal button +
  a second language-switcher instance — `.lang-btn` clicks/active-state are
  already wired generically via `querySelectorAll`, so duplicating the
  markup needed no JS changes) to the dossier header, and reverted
  `.top-hud-bar` back to reveal-on-hover (it had been made permanently
  visible in an earlier pass specifically to fix the language switcher being
  undiscoverable — now that the in-sector bar carries the same language
  switcher, that concern doesn't require permanent visibility anymore).
  Both bars now behave identically: hidden until hover, same control set.
- **Task tracker (right side, quest list) now starts collapsed** — added the
  `minimized` class to `#hudTaskTracker` by default. The collapse
  infrastructure (`.task-tracker-toggle` pill, `#taskMinimizeBtn`) already
  existed in CSS/JS but nothing set the initial state, so the full 300px
  card rendered on top of dossier-panel text (and, being on the same "GTA
  HUD" pattern as the explorer-status panel from an earlier pass, needed the
  identical default-collapsed treatment for the same reason).
- **More untranslated UI chrome fixed**: hero CTA buttons ("Explorar
  Projetos"/"Terminal"/"Conectar"), the topbar search button, the desktop
  dossier close button (`#closeDossierBtn` — only the *mobile* close button
  had `data-i18n` before), the mobile bottom-dock labels, both footers'
  sector-jump buttons, and the project category filter tabs (Todos/
  Software/Pesquisa/Acadêmico/Pessoal) all got real i18n keys wired via
  `data-i18n` (new `hud.terminal`, `sectorNav.*`, `cat.all` keys). Not yet
  covered: deeper per-panel content — CV section labels ("Repositório do
  CV", "PDF (PT)/(EN)"), the Lattes ID label, and easter-egg widget copy are
  still hardcoded Portuguese. Worth a dedicated pass rather than a partial
  one; flagging so it isn't mistaken for "fully translated now."

## 2026-09-07 (part 3) — Earth day/night lights, topbar hover restored

- **Restored `.dossier-header-bar` to reveal-on-hover** (per explicit
  feedback) — session-1 had made it permanently visible while chasing the
  navigation-stuck bug, but that bug turned out to be `.dossier-panel`'s own
  layout collapsing (see part 1's containing-block/flex-shrink writeup), not
  this bar's visibility. Confirmed safe to revert: ESC closes the dossier
  unconditionally via its own `keydown` handler regardless of hover state,
  so the close button is never the only way out. The global top bar (brand/
  SFX/language switcher) stays always-visible — hiding *that* one was an
  actual functional bug (nobody could find the language switcher).
- **Implemented a real day/night terminator with city lights** on the 3D
  Earth (`create3DEarthGroup`), replacing the old approach of baking city
  glow permanently into the day texture (visible even in broad daylight).
  Added `getDayNightLightsMaterial()` — a small custom `ShaderMaterial`
  (same pattern as the existing atmosphere Fresnel shader) that samples a
  separate night-lights-only texture and fades it in via
  `smoothstep` on `dot(worldNormal, sunDirection)`, so lights only show on
  the side facing away from the light. Found and fixed two real bugs while
  verifying this end-to-end with Playwright (screenshot bursts, then a
  temporary "force nightFactor to 1.0 / 10x city radius" debug pass to
  isolate rendering from lighting-angle luck — reverted after confirming):
  the night-lights shell's radius offset (`radius*1.001`) was too close to
  the Earth surface and z-fighting discarded it entirely; and city dots
  sized for the old baked-map approach (2.4x) are imperceptible at the small
  ~150px hero-orb scale this Earth is mostly viewed at (bumped to 4.5x).
  Also nudged Mars/Earth/Saturn's directional lights (already done in part 1)
  is what makes the day/night split itself readable — see that entry.
- Not attempted: matching the referenced Three.js `webgpu_tsl_earth` example
  itself — that demo runs on `WebGPURenderer` + TSL node materials with
  real NASA imagery, atmospheric multi-scatter, and specular ocean
  reflections; this codebase's vendored `three.min.js` is a classic
  `WebGLRenderer` build with hand-drawn canvas textures. The day/night city-
  lights *behavior* is now real and working; the *fidelity* gap (procedural
  continents vs. real satellite imagery, no true specular highlight, no
  cloud self-shadowing) is a much larger, separate undertaking — would need
  either sourcing real equirectangular Earth textures or a genuine renderer
  upgrade, not a same-session fix.

## 2026-09-07 (part 2) — Follow-up fixes from user QA

- **Easter eggs stacking multiple quest completions/toasts per click** — every
  `triggerXCheat`/`triggerXEasterEgg` function called `completeQuest("hacker")`
  itself, *in addition to* `renderFloatingEasterEggs`'s click handler already
  calling `completeQuest("easterEgg")` — a single relic click could fire up to
  3 toasts. Removed the redundant `completeQuest("hacker")` calls from those
  trigger functions; "hacker" now only completes from the command-palette
  (⌘K) flow it's actually meant to track (`"Executar comando secreto no ⌘K"`).
  Also removed the duplicated `completeQuest("easterEgg")` inside
  `triggerNolanTotem`/`triggerGargantuaInterstellar` (the click handler
  already adds it once, generically, for any relic).
- **"Espectroscopia H-Alpha" quest auto-completing on every page load** — a
  real bug, unrelated to easter eggs: `initSpectrumSimulator()` called
  `drawSpectrum(6563)` once on init just to pre-render the widget, and 6563 Å
  happens to be exactly the H-alpha wavelength the quest checks for, so it
  fired (and toasted) on load regardless of whether the user ever touched the
  slider. `drawSpectrum` now takes an `isUserInteraction` flag; only the
  slider's own `input` handler passes `true`.
- Floating easter eggs are icon-only again — no visible text label, before
  *or* after discovery (the source is still exposed via `title`/
  `aria-label` for hover tooltips and screen readers, just not as on-screen
  text). A prior fix in this same session had added a small always-visible
  label after discovery; reverted per explicit feedback.
- HUD "Status Explorador" moved back to vertically centered on the **left**
  (`top:50%`), mirroring `.hud-task-tracker` on the right (there's a comment
  in the CSS itself: `/* HUD Status Bar ... Left Lateral Fixed opposite to
  Task Tracker */`) — a session-2 fix had anchored it to `bottom:24px`, which
  both broke the intended left/right symmetry and collided with the footer.
  Collapsed-by-default is unchanged.
- **Hub corner-node sector cards (kicker/title/sub) and every dossier-panel
  kicker were never translated** — not a wiring bug so much as the i18n data
  never existing: `applyI18n()` looked up `kickers.setorNN` / `titles.setorNN`
  / `leads.setorNN` for these, and none of those keys were ever defined in
  `src/interface.yaml` (`t()` silently returns `""` for a missing path, so it
  was a no-op, not an error). Added real `hub.sectorN.{kicker,title,sub}` and
  `kickers.{sobre,software,pesquisa,bolsas,contato,contatoChannels}` entries
  (4 languages) to `interface.yaml`, wired each corner-node/kicker span with
  its own `data-i18n` attribute, and removed the old generic panel-id-based
  translation passes in `applyI18n` (besides being dead code, matching by
  ancestor `.dossier-panel` id was unsafe — some panels have more than one
  `.section-dossier-kicker`, e.g. Setor 03's own kicker vs. the "bolsas"
  sub-section's, so a single `kickers.setor03` value would have overwritten
  both with the same text). Also added `sections.contatoHero.title` (Setor
  04's main heading had no i18n key at all before) and wired
  `sections.pesquisa.lead` to its paragraph (the key already existed in the
  YAML but nothing referenced it).
- Ran `python3 tools/build.py` to regenerate `assets/js/projects.js` with the
  new i18n content — remember to do this after any `interface.yaml`/
  `portfolio.md` edit, the pre-commit hook only catches it at commit time.

## 2026-09-07 — Bug sweep + dark-only theme

Large fix pass triggered by a user report covering nearly the whole site. Root
causes were investigated with Playwright (headless, via the project's local
`playwright` devDependency) rather than guessed — screenshots plus
`getBoundingClientRect`/`scrollWidth` measurements at each step. See the
session transcript for the full investigation; short version below.

**Fixed:**
- **Setor 04 (Gargântua/contato) layout was broken** — root cause was two
  stacked CSS bugs: (1) `.dossier-panel`'s entrance animation touched
  `transform`, and Chromium keeps treating an element as a new *containing
  block* for `position:fixed` descendants for as long as a `forwards`-filled
  transform animation stays attached — even once it resolves to `translateY(0)`
  / `none`. That silently relocated the full-screen Gargantua canvas
  (`position:fixed; inset:0`) to be relative to the panel instead of the
  viewport. (2) Once that was fixed, `.dossier-panel { margin: 0 auto }` on a
  flex item with *only* out-of-flow (`position:fixed`) children still
  collapsed to `width:0` — flex auto-margins make a block shrink-to-fit its
  in-flow content, which for this panel was nothing. Fixed by giving
  `.dossier-panel` an explicit `width:100%` and dropping `transform` from
  `panelFadeIn` (opacity-only fade now). Because `html, body { overflow:
  hidden }`, none of this ever showed a scrollbar — it just silently clipped
  content, which is why it read as "broken layout" rather than "scrolls
  weirdly."
- **"Hover menu doesn't work" / navigation got stuck / language switcher
  unreachable** — both `.dossier-header-bar` (the in-dossier "Retornar ao
  Hub" + sector tabs) and `.top-hud-bar` (brand, SFX toggle, **language
  switcher**) were `position:absolute`/`fixed` with `transform:
  translateY(-90%/-150%)` + `opacity:0` by default, revealed only on
  `:hover`/`:focus-within`. Besides being unreliable on desktop (thin,
  easy-to-miss hit area) it's simply unusable on touch. Worse, if the close
  button never got a clean hover+click, `closeSectorDossier()` never fired
  and the whole sector router got stuck (every subsequent click was
  intercepted by the still-open overlay). Both bars are now permanently
  visible; this alone accounts for most of the "translation is broken" report
  — the language buttons were real and working, just effectively invisible.
- Light theme removed entirely (`[data-theme="light"]` blocks, the toggle
  button, and its JS deleted). Site is dark-only, permanently.
- HUD "Status Explorador" money now starts at **$0** (was hardcoded
  `$250,000` on load) and grows from real interactions: quests award
  `xp * 10`, and discovering a floating easter egg for the first time awards
  a flat bonus. Balance persists in `localStorage`.
- HUD panel is now collapsible (was CSS-ready but never wired to a button) and
  **collapsed by default** — it used to sit fixed over dossier body text and
  the mobile CTA stack.
- Radar/minimap now highlights whichever sector (or the Hub) you're
  currently in, with a pulsing ring — "shows where you are in the cosmos."
- Floating easter eggs now name their source once decoded (a small label
  under the icon + real `title`/`aria-label`) — they still give no spoilers
  *before* discovery, matching the site's existing design intent, but no
  longer stay anonymous *after* you've found them.
- Toast notifications repositioned below the (now permanently visible)
  top bar instead of overlapping it.
- Footer: hub footer no longer capped at `max-width:820px` (was rendering as
  a small centered pill); now spans full width like the dossier-panel footer.
- Three.js: directional lights across `initCoreOrb`/`initIntroScene`/
  `initWarpScene` were positioned close to the camera (near-flash lighting,
  flat-looking spheres) — moved to the side/behind so planets show a real
  day/night terminator. Mars' random "maria" blobs were too large/numerous
  and drowned out the named surface features (Valles Marineris, Olympus
  Mons) — reduced in count and size.

**Verified via Playwright** (not just eyeballed): all 4 sectors open/close
cleanly with `overlayActive=false` after close and zero extra
`document.documentElement.scrollWidth`, on both a 1600×900 desktop viewport
and a 390×844 mobile viewport; all 4 languages switch without throwing.

**Deferred / not attempted this pass** (scope was too large for one session —
flag these explicitly rather than claim they're done):
- A from-scratch "everything opens in a view-details modal" pass — the
  project modal (`openProjectModal`) and the YouTube mini player
  (`playYouTubeTrack`) already exist and work; nothing was done to force
  *other* interactions (research accordion items, bolsas, contacts) into that
  same modal pattern. Worth a deliberate design pass, not a drive-by change.
- Deeper Three.js "photorealism" (the header comment in `space-3d.js`
  promises more than 1200 lines of procedural-canvas-texture spheres can
  really deliver — normal maps, proper specular/roughness texture data,
  real cloud/ring shadow casting are all absent). Lighting + Mars texture
  were fixed; a real visual overhaul is a much bigger, separate effort.
- A genuine "mobile is the source of truth, desktop is a distinct optimized
  recreation" redesign. What exists today is *responsive* (corner-node
  desktop layout vs. bottom-dock mobile layout, separate breakpoints
  throughout) and the worst mobile overlap bugs are fixed, but it is not a
  ground-up mobile-first rebuild.
- `tools/verify.js` currently reports `assets/js/projects.js` out of sync
  with `assets/js/projects.js.orig` (REPOS/FEATURED/RESEARCH/CONTACTS/EXTRA/
  I18N differ) — this predates this session (nothing here touched the
  content pipeline) and should be looked at separately: either
  `.orig` needs refreshing or `src/portfolio.md` has unintended drift.

## Perfect prompt to recreate this site

If you ever need to rebuild this site from zero (new repo, or asking an
agent that has never seen it), this is the brief that captures the intent —
paste it whole:

> Build a single-page, dark-theme-only astronomy/space-mission-themed
> portfolio site as plain static HTML/CSS/JS (no framework, no build step —
> just `index.html` + `assets/css/style.css` + `assets/js/main.js`, served
> directly, e.g. by GitHub Pages). The whole interaction layer lives in one
> `main.js` IIFE, organized into clearly numbered sections
> (`/* == N. SECTION NAME == */` comments) covering, in this order: SVG icon
> repository; a procedural Web Audio SFX synthesizer (every UI sound is
> generated, no audio files); a toast notification system; a skippable
> cinematic intro (atmospheric re-entry + fake "DevOps pipeline" boot log);
> an "interplanetary warp travel" transition engine that plays a ~1s
> starfield-tunnel-plus-approaching-planet animation whenever the user
> navigates between sections, each section framed as a "sector" (planet) you
> warp to; a full-screen "sector dossier" router — clicking a sector opens a
> full-viewport overlay panel for it, with sector tabs and a persistent
> "Retornar ao Hub" control that must always be visible/reachable (no
> hover-to-reveal navigation — that's an anti-pattern, see Gotchas below); a
> starfield/constellation/meteor background canvas; custom cursor with
> card spotlight-on-hover; project-card rendering from a single global data
> object; a project details modal; an interactive spectrum simulator
> (wavelength slider → simulated stellar spectrum, GALAH DR4/Gaia-flavored);
> a Cmd/Ctrl+K command palette; gamified onboarding — a quest/XP/rank
> tracker persisted to `localStorage`, plus a small "explorer HUD" (health/
> armor meters as flavor, a money counter that starts at **$0** and grows
> as the user completes quests/discovers easter eggs, and a collapsible
> mini radar/minimap highlighting which sector the user currently occupies);
> a constellation of hidden, icon-only "easter eggs" (2 per page, randomly
> themed — pop-culture references welcome) that stay visually anonymous
> until clicked, then reveal a themed widget/effect and *do* identify their
> source once discovered (no permanent anonymity); a handful of secret
> keyboard cheat-codes (Konami code, GTA-style typed cheats) as bonus easter
> eggs; a YouTube mini-player (bottom-right floating widget with minimize/
> close) for any easter egg that plays music; full i18n across 4 languages
> (pt default, en, es, fr) via a `data-i18n` attribute system and a always-
> visible top-bar language switcher; light/dark theme is **out of scope** —
> the whole site is permanently dark, deep-space, glassmorphism-styled.
> Layout must use the full viewport width with minimal side margins at every
> breakpoint (no artificially narrow centered columns) and must be properly
> responsive — a dedicated 4-icon corner-node layout for desktop, a bottom
> icon-dock nav for mobile (`<900px`), not just a scaled-down desktop layout.
>
> Content (projects, research, scholarships/"bolsas", contacts) must **not**
> live in the JS by hand — author it in a clean Markdown file
> (`src/portfolio.md`, Obsidian-friendly frontmatter-per-section, four
> language variants per field via flag emoji 🇧🇷🇺🇸🇪🇸🇫🇷, missing language
> inherits Portuguese) plus a small `src/interface.yaml` for rarely-changed
> UI strings, and generate the actual JS data file
> (`assets/js/projects.js`, assigning `window.PORTFOLIO_DATA`) from it with a
> small Python build script, wired into a git `pre-commit` hook so the
> generated file is never hand-edited and never goes stale.
>
> **Gotchas to avoid from day one** (each of these was a real, hard-to-spot
> bug in the first build of this exact site — see the 2026-09-07 changelog
> above for the forensics):
> 1. Never make primary navigation (a close/back button, a language
>    switcher) reachable *only* via `:hover`/`:focus-within` — it's
>    unreachable on touch and unreliable on desktop, and if it also happens
>    to be the only way to unstick a modal/overlay, one missed hover can wedge
>    the whole router.
> 2. Never apply an `animation`/`transition` on `transform` to any ancestor
>    of a `position:fixed` element you expect to stay pinned to the true
>    viewport — per spec (and per Chromium's actual behavior even once the
>    animation logically resolves to `none`) a non-none transform on an
>    ancestor becomes that fixed element's containing block, silently
>    relocating it.
> 3. Never rely on `margin: 0 auto` to center a flex item that might have
>    zero in-flow children (e.g. a panel whose only content is
>    `position:fixed`) — flex auto-margins shrink the item to fit its
>    in-flow content first, so it can collapse to `width:0`. Give it an
>    explicit `width: 100%` instead.
> 4. Set `html, body { overflow: hidden }` deliberately if you do — but know
>    it means layout bugs like the above will silently clip with **no
>    scrollbar** to hint anything is wrong. Verify layout with
>    `scrollWidth`/`getBoundingClientRect()` measurements (e.g. via a
>    headless Playwright script), not just by eyeballing screenshots.
> 5. Keep a hardcoded "starting balance" or similar out of both the JS
>    default *and* the initial DOM template string — it's easy to fix one
>    and leave the other.

## Handy local commands

```bash
python3 -m http.server 8123        # serve the repo root
node tools/verify.js               # content pipeline: generated vs. baseline
python3 tools/build.py             # regenerate assets/js/projects.js
```

Playwright is a local devDependency (not global) — run scripts with:
```bash
NODE_PATH=$(pwd)/node_modules node your_script.js
```
