const fs = require('fs');
let content = fs.readFileSync('assets/js/main.js', 'utf8');

const regex = /function initPersistentHubHud\(\) \{[\s\S]*?hud\.style\.display = "flex";\n  \}/;

const newFunc = `function initPersistentHubHud() {
    let hud = document.getElementById("hubHudBar");
    if (!hud) {
      hud = document.createElement("aside");
      hud.id = "hubHudBar";
      hud.className = "gta-hud-bar";
      hud.setAttribute("aria-label", "Status do Explorador");
      hud.setAttribute("role", "status");
      hud.innerHTML = \`
        <div class="gta-hud-header">
          <span class="gta-hud-title" data-i18n="hud.statusExplorer">STATUS EXPLORADOR</span>
        </div>
        <div class="gta-hud-collapsible-content" id="hudCollapsibleContent">
          <div class="gta-status-line">
            <div class="gta-meter gta-health"><div class="gta-meter-fill"></div><span>❤️ 100%</span></div>
            <div class="gta-meter gta-armor"><div class="gta-meter-fill"></div><span>🛡️ 100%</span></div>
          </div>
          <div class="gta-money-line" id="hudCashDisplay" title="Saldo de Créditos Orbitais">+$250,000</div>
          <div class="gta-minimap-wrap">
            <span class="gta-minimap-label" data-i18n="hud.radar">📡 RADAR ORBITAL // MINIMAP</span>
            <canvas id="hudMinimap" width="130" height="96"></canvas>
          </div>
        </div>
      \`;
      document.body.appendChild(hud);
      
      if (!minimapAnimId) {
        renderMinimapRadar();
      }
    }
    hud.style.display = "flex";
  }`;

content = content.replace(regex, newFunc);
fs.writeFileSync('assets/js/main.js', content);
