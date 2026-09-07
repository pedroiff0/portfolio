/* ============================================================
   Pedro Rocha — Portfolio · space-3d.js
   Photorealistic 3D Celestial Engine (Three.js & WebGL)
   - Earth: Continents, Ocean Specular, Biomes, City Lights, 
            Dynamic Cloud Layer & Rayleigh Scattering Atmosphere Shader
   - Mars: Iron-Oxide Terrain, Valles Marineris, Olympus Mons, Polar Ice Caps
   - Saturn: Oblique Gas Giant, Latitudinal Bands & Double-Sided Concentric Ring System
   - Gargantua: Kip Thorne Relativistic Kerr Black Hole, Accretion Disk,
                Gravitational Lensing Arcs, Doppler Beaming & Photon Sphere
   - Interactive 3D Central Core Orb with Inertial Rotation
   ============================================================ */

(function () {
  "use strict";

  if (typeof window.THREE === "undefined") {
    console.warn("Three.js not loaded, fallback to 2D canvas mode.");
    return;
  }

  const THREE = window.THREE;

  // Astrophysical World Geography (Lat, Lon) for procedural Earth mapping
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

  // Major Cities for Night Lights (Lat, Lon)
  const GEO_CITIES = [
    { name: "São Paulo", lat: -23.55, lon: -46.63, size: 2.8 },
    { name: "Rio de Janeiro", lat: -22.90, lon: -43.20, size: 2.5 },
    { name: "Campos / IFF", lat: -21.75, lon: -41.32, size: 2.2 },
    { name: "Brasília", lat: -15.79, lon: -47.88, size: 2.3 },
    { name: "Buenos Aires", lat: -34.60, lon: -58.38, size: 2.6 },
    { name: "New York", lat: 40.71, lon: -74.00, size: 3.0 },
    { name: "Los Angeles", lat: 34.05, lon: -118.24, size: 2.8 },
    { name: "London", lat: 51.51, lon: -0.13, size: 2.9 },
    { name: "Paris", lat: 48.85, lon: 2.35, size: 2.7 },
    { name: "Tokyo", lat: 35.67, lon: 139.65, size: 3.2 },
    { name: "Sydney", lat: -33.86, lon: 151.20, size: 2.4 }
  ];

  /* ============================================================
     1. PROCEDURAL 3D TEXTURE GENERATOR FACTORY
     ============================================================ */
  const Space3D = {
    _textures: {},

    getAtmosphereShaderMaterial(colorHex = 0x38bdf8, power = 2.6, intensity = 0.95) {
      return new THREE.ShaderMaterial({
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vPosition;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          varying vec3 vPosition;
          uniform vec3 color;
          uniform float power;
          uniform float intensity;
          void main() {
            vec3 viewDir = normalize(-vPosition);
            float fresnel = pow(1.0 - max(0.0, dot(vNormal, viewDir)), power);
            gl_FragColor = vec4(color, fresnel * intensity);
          }
        `,
        uniforms: {
          color: { value: new THREE.Color(colorHex) },
          power: { value: power },
          intensity: { value: intensity }
        },
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        depthWrite: false
      });
    },

    getEarthTextures() {
      if (this._textures.earthMap) {
        return {
          map: this._textures.earthMap,
          clouds: this._textures.earthClouds,
          specular: this._textures.earthSpecular
        };
      }

      // 1. High-Resolution Diffuse Texture (2048 x 1024)
      const w = 2048, h = 1024;
      const cv = document.createElement("canvas");
      cv.width = w; cv.height = h;
      const ctx = cv.getContext("2d");

      // Deep Ocean Bathymetry Gradient
      const oceanGrad = ctx.createLinearGradient(0, 0, 0, h);
      oceanGrad.addColorStop(0.0, "#081d36");
      oceanGrad.addColorStop(0.25, "#031526");
      oceanGrad.addColorStop(0.5, "#020f1e");
      oceanGrad.addColorStop(0.75, "#031526");
      oceanGrad.addColorStop(1.0, "#081d36");
      ctx.fillStyle = oceanGrad;
      ctx.fillRect(0, 0, w, h);

      // Coastal Shallows and Reefs
      Object.keys(GEO_LANDMASSES).forEach((k) => {
        const poly = GEO_LANDMASSES[k];
        if (!poly || !poly.length) return;
        ctx.beginPath();
        poly.forEach(([lat, lon], idx) => {
          const x = ((lon + 180) / 360) * w;
          const y = ((90 - lat) / 180) * h;
          if (idx === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.lineWidth = 16;
        ctx.strokeStyle = "rgba(6, 182, 212, 0.35)";
        ctx.stroke();
      });

      // Continents with Biome Shading
      Object.keys(GEO_LANDMASSES).forEach((k) => {
        const poly = GEO_LANDMASSES[k];
        if (!poly || !poly.length) return;
        ctx.beginPath();
        poly.forEach(([lat, lon], idx) => {
          const x = ((lon + 180) / 360) * w;
          const y = ((90 - lat) / 180) * h;
          if (idx === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.closePath();

        if (k === "southAmerica") {
          const saGrad = ctx.createLinearGradient(0, 0, 0, h);
          saGrad.addColorStop(0.4, "#165b33"); // Amazon Basin
          saGrad.addColorStop(0.6, "#2d6a4f"); // Cerrado
          saGrad.addColorStop(0.85, "#52796f"); // Pampas
          ctx.fillStyle = saGrad;
        } else if (k === "africa") {
          const afGrad = ctx.createLinearGradient(0, 0, 0, h);
          afGrad.addColorStop(0.3, "#d97706"); // Sahara Desert
          afGrad.addColorStop(0.5, "#15803d"); // Congo Rainforest
          afGrad.addColorStop(0.8, "#65a30d"); // Savanna
          ctx.fillStyle = afGrad;
        } else if (k === "antarctica" || k === "greenland") {
          ctx.fillStyle = "#f8fafc";
        } else {
          const genGrad = ctx.createLinearGradient(0, 0, 0, h);
          genGrad.addColorStop(0.2, "#e2e8f0");
          genGrad.addColorStop(0.35, "#2d6a4f");
          genGrad.addColorStop(0.5, "#386641");
          genGrad.addColorStop(0.7, "#ca8a04");
          ctx.fillStyle = genGrad;
        }
        ctx.fill();

        ctx.lineWidth = 2.5;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx.stroke();
      });

      // Night City Lights (Warm Amber Clusters)
      GEO_CITIES.forEach((c) => {
        const cx = ((c.lon + 180) / 360) * w;
        const cy = ((90 - c.lat) / 180) * h;
        const rad = c.size * 2.4;
        const cityGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
        cityGrad.addColorStop(0, "rgba(254, 240, 138, 0.98)");
        cityGrad.addColorStop(0.4, "rgba(245, 158, 11, 0.75)");
        cityGrad.addColorStop(1, "rgba(234, 88, 12, 0)");
        ctx.fillStyle = cityGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.fill();
      });

      this._textures.earthMap = new THREE.CanvasTexture(cv);
      this._textures.earthMap.wrapS = THREE.RepeatWrapping;

      // 2. Specular Map (Water = 1.0 high gloss, Land = 0.05 matte)
      const specCv = document.createElement("canvas");
      specCv.width = 1024; specCv.height = 512;
      const specCtx = specCv.getContext("2d");
      specCtx.fillStyle = "#ffffff";
      specCtx.fillRect(0, 0, 1024, 512);
      specCtx.fillStyle = "#0a0a0a";
      Object.keys(GEO_LANDMASSES).forEach((k) => {
        const poly = GEO_LANDMASSES[k];
        if (!poly || !poly.length) return;
        specCtx.beginPath();
        poly.forEach(([lat, lon], idx) => {
          const x = ((lon + 180) / 360) * 1024;
          const y = ((90 - lat) / 180) * 512;
          if (idx === 0) specCtx.moveTo(x, y);
          else specCtx.lineTo(x, y);
        });
        specCtx.closePath();
        specCtx.fill();
      });
      this._textures.earthSpecular = new THREE.CanvasTexture(specCv);

      // 3. Dynamic Procedural Cloud Layer (1024 x 512)
      const cloudCv = document.createElement("canvas");
      cloudCv.width = 1024; cloudCv.height = 512;
      const cctx = cloudCv.getContext("2d");
      cctx.clearRect(0, 0, 1024, 512);

      for (let y = 0; y < 512; y += 4) {
        const lat = 90 - (y / 512) * 180;
        const itcz = Math.exp(-Math.pow(lat / 14, 2)) * 0.72;
        const polar = Math.exp(-Math.pow((Math.abs(lat) - 60) / 16, 2)) * 0.62;
        const baseDensity = itcz + polar + 0.12;

        for (let x = 0; x < 1024; x += 4) {
          const nx = x / 1024;
          const ny = y / 512;
          const noise = Math.sin(nx * 16 + ny * 8) * Math.cos(nx * 28 - ny * 14) * 0.5 + 0.5;
          const noise2 = Math.sin(nx * 42 + ny * 20) * 0.5 + 0.5;
          const alpha = Math.max(0, Math.min(0.92, (noise * 0.65 + noise2 * 0.35 + baseDensity - 0.44) * 1.55));
          if (alpha > 0.05) {
            cctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
            cctx.fillRect(x, y, 4, 4);
          }
        }
      }

      // Cyclone Eddies
      const cyclones = [{ x: 340, y: 170, r: 50 }, { x: 720, y: 330, r: 60 }, { x: 500, y: 190, r: 42 }];
      cyclones.forEach((cyc) => {
        for (let a = 0; a < Math.PI * 6; a += 0.12) {
          const r = (a / (Math.PI * 6)) * cyc.r;
          const px = cyc.x + Math.cos(a) * r;
          const py = cyc.y + Math.sin(a) * (r * 0.58);
          const alpha = (1 - r / cyc.r) * 0.85;
          cctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
          cctx.beginPath();
          cctx.arc(px, py, 6 + r * 0.1, 0, Math.PI * 2);
          cctx.fill();
        }
      });

      this._textures.earthClouds = new THREE.CanvasTexture(cloudCv);
      this._textures.earthClouds.wrapS = THREE.RepeatWrapping;

      return {
        map: this._textures.earthMap,
        clouds: this._textures.earthClouds,
        specular: this._textures.earthSpecular
      };
    },

    getMarsTexture() {
      if (this._textures.marsMap) return this._textures.marsMap;
      const w = 1024, h = 512;
      const cv = document.createElement("canvas");
      cv.width = w; cv.height = h;
      const ctx = cv.getContext("2d");

      // Red/Rust Terrain Base
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0.0, "#85260c");
      grad.addColorStop(0.3, "#b43d1b");
      grad.addColorStop(0.5, "#d9531e");
      grad.addColorStop(0.7, "#9c3214");
      grad.addColorStop(1.0, "#85260c");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Basaltic Volcanic Maria
      ctx.fillStyle = "rgba(45, 14, 7, 0.4)";
      for (let i = 0; i < 30; i++) {
        const mx = Math.random() * w;
        const my = Math.random() * h * 0.6 + h * 0.2;
        const mr = Math.random() * 80 + 30;
        ctx.beginPath();
        ctx.arc(mx, my, mr, 0, Math.PI * 2);
        ctx.fill();
      }

      // Valles Marineris Canyon
      ctx.strokeStyle = "rgba(30, 8, 4, 0.85)";
      ctx.lineWidth = 12;
      ctx.beginPath();
      ctx.moveTo(350, 270);
      ctx.quadraticCurveTo(460, 290, 580, 260);
      ctx.stroke();

      // Olympus Mons Caldera
      const omGrad = ctx.createRadialGradient(280, 220, 0, 280, 220, 45);
      omGrad.addColorStop(0, "#f97316");
      omGrad.addColorStop(0.4, "#9a3412");
      omGrad.addColorStop(1, "rgba(124, 45, 18, 0)");
      ctx.fillStyle = omGrad;
      ctx.beginPath();
      ctx.arc(280, 220, 45, 0, Math.PI * 2);
      ctx.fill();

      // Polar Ice Caps
      const poleGradN = ctx.createRadialGradient(w / 2, 0, 0, w / 2, 0, 75);
      poleGradN.addColorStop(0, "#ffffff");
      poleGradN.addColorStop(0.7, "#e2e8f0");
      poleGradN.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = poleGradN;
      ctx.fillRect(0, 0, w, 80);

      const poleGradS = ctx.createRadialGradient(w / 2, h, 0, w / 2, h, 65);
      poleGradS.addColorStop(0, "#ffffff");
      poleGradS.addColorStop(0.65, "#e2e8f0");
      poleGradS.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = poleGradS;
      ctx.fillRect(0, h - 70, w, 70);

      this._textures.marsMap = new THREE.CanvasTexture(cv);
      return this._textures.marsMap;
    },

    getSaturnTextures() {
      if (this._textures.saturnMap) {
        return { map: this._textures.saturnMap, rings: this._textures.saturnRingsMap };
      }
      const w = 1024, h = 512;
      const cv = document.createElement("canvas");
      cv.width = w; cv.height = h;
      const ctx = cv.getContext("2d");

      // Saturn Atmospheric Gas Belts
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      const bands = [
        [0.0, "#927042"], [0.1, "#c89f66"], [0.2, "#e5be88"], [0.35, "#fde68a"],
        [0.5, "#fef3c7"], [0.65, "#e0b375"], [0.8, "#b9884e"], [0.9, "#8d6438"], [1.0, "#634423"]
      ];
      bands.forEach(([pos, col]) => grad.addColorStop(pos, col));
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      for (let y = 0; y < h; y += 3) {
        ctx.fillStyle = `rgba(255, 255, 255, ${(Math.sin(y * 0.1) * 0.08 + 0.04).toFixed(3)})`;
        ctx.fillRect(0, y, w, 1.5);
      }
      this._textures.saturnMap = new THREE.CanvasTexture(cv);

      // Saturn Concentric Ring System (1024 x 64)
      const rcv = document.createElement("canvas");
      rcv.width = 1024; rcv.height = 64;
      const rctx = rcv.getContext("2d");
      const rgrad = rctx.createLinearGradient(0, 0, 1024, 0);
      rgrad.addColorStop(0.0, "rgba(0, 0, 0, 0)");
      rgrad.addColorStop(0.12, "rgba(146, 112, 66, 0.2)");   // Ring C
      rgrad.addColorStop(0.35, "rgba(254, 243, 199, 0.95)");  // Ring B
      rgrad.addColorStop(0.62, "rgba(253, 230, 138, 0.9)");
      rgrad.addColorStop(0.65, "rgba(0, 0, 0, 0)");           // Cassini Division
      rgrad.addColorStop(0.70, "rgba(217, 168, 104, 0.85)");  // Ring A
      rgrad.addColorStop(0.95, "rgba(180, 130, 75, 0.6)");
      rgrad.addColorStop(1.0, "rgba(0, 0, 0, 0)");
      rctx.fillStyle = rgrad;
      rctx.fillRect(0, 0, 1024, 64);

      this._textures.saturnRingsMap = new THREE.CanvasTexture(rcv);
      return { map: this._textures.saturnMap, rings: this._textures.saturnRingsMap };
    },

    /* ============================================================
       2. 3D CELESTIAL MESH BUILDERS
       ============================================================ */
    create3DEarthGroup(radius = 1.5) {
      const group = new THREE.Group();
      const textures = this.getEarthTextures();

      // 1. Earth Surface Mesh
      const earthGeo = new THREE.SphereGeometry(radius, 64, 64);
      const earthMat = new THREE.MeshStandardMaterial({
        map: textures.map,
        roughness: 0.6,
        metalness: 0.08,
        roughnessMap: textures.specular
      });
      const earthMesh = new THREE.Mesh(earthGeo, earthMat);
      group.add(earthMesh);

      // 2. Dynamic 3D Cloud Layer
      const cloudGeo = new THREE.SphereGeometry(radius * 1.014, 64, 64);
      const cloudMat = new THREE.MeshStandardMaterial({
        map: textures.clouds,
        transparent: true,
        opacity: 0.88,
        depthWrite: false
      });
      const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
      group.add(cloudMesh);

      // 3. Volumetric Rayleigh Scattering Atmosphere Halo
      const atmoMat = this.getAtmosphereShaderMaterial(0x38bdf8, 2.6, 0.95);
      const atmoMesh = new THREE.Mesh(new THREE.SphereGeometry(radius * 1.08, 64, 64), atmoMat);
      group.add(atmoMesh);

      // 4. Soft Outer Exosphere Blue Halo
      const outerMat = this.getAtmosphereShaderMaterial(0x0284c7, 3.8, 0.6);
      const outerMesh = new THREE.Mesh(new THREE.SphereGeometry(radius * 1.20, 48, 48), outerMat);
      group.add(outerMesh);

      // Earth Axial Tilt (23.44°)
      group.rotation.z = (23.44 * Math.PI) / 180;

      return {
        group,
        earthMesh,
        cloudMesh,
        update: () => {
          earthMesh.rotation.y += 0.0018;
          cloudMesh.rotation.y += 0.0026;
        }
      };
    },

    create3DMarsGroup(radius = 1.5) {
      const group = new THREE.Group();
      const marsMap = this.getMarsTexture();

      const marsGeo = new THREE.SphereGeometry(radius, 64, 64);
      const marsMat = new THREE.MeshStandardMaterial({
        map: marsMap,
        roughness: 0.78,
        metalness: 0.05
      });
      const marsMesh = new THREE.Mesh(marsGeo, marsMat);
      group.add(marsMesh);

      const atmoMat = this.getAtmosphereShaderMaterial(0xf97316, 2.8, 0.75);
      const atmoMesh = new THREE.Mesh(new THREE.SphereGeometry(radius * 1.06, 48, 48), atmoMat);
      group.add(atmoMesh);

      group.rotation.z = (25.19 * Math.PI) / 180;

      return {
        group,
        marsMesh,
        update: () => {
          marsMesh.rotation.y += 0.002;
        }
      };
    },

    create3DSaturnGroup(radius = 1.5) {
      const group = new THREE.Group();
      const { map, rings } = this.getSaturnTextures();

      // Oblate Spheroid Planet Body
      const saturnGeo = new THREE.SphereGeometry(radius, 64, 64);
      const saturnMat = new THREE.MeshStandardMaterial({
        map: map,
        roughness: 0.85,
        metalness: 0.02
      });
      const saturnMesh = new THREE.Mesh(saturnGeo, saturnMat);
      saturnMesh.scale.set(1.0, 0.91, 1.0);
      group.add(saturnMesh);

      // 3D Concentric Ring System
      const ringGeo = new THREE.RingGeometry(radius * 1.25, radius * 2.35, 96);
      const pos = ringGeo.attributes.position;
      const uvs = ringGeo.attributes.uv;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const dist = Math.sqrt(x * x + y * y);
        const u = (dist - radius * 1.25) / (radius * 1.1);
        uvs.setXY(i, u, 0.5);
      }
      ringGeo.uvsNeedUpdate = true;

      const ringMat = new THREE.MeshStandardMaterial({
        map: rings,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.92,
        roughness: 0.4
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2;
      group.add(ringMesh);

      const atmoMat = this.getAtmosphereShaderMaterial(0xfde68a, 2.5, 0.7);
      const atmoMesh = new THREE.Mesh(new THREE.SphereGeometry(radius * 1.07, 48, 48), atmoMat);
      group.add(atmoMesh);

      group.rotation.z = (26.73 * Math.PI) / 180;

      return {
        group,
        saturnMesh,
        ringMesh,
        update: () => {
          saturnMesh.rotation.y += 0.0022;
        }
      };
    },

    create3DGargantuaGroup(radius = 1.5) {
      const group = new THREE.Group();

      // 1. Einstein Gravitational Lensing Halo (Outer Spacetime Distortion)
      const haloGeo = new THREE.PlaneGeometry(radius * 5.5, radius * 5.5);
      const haloMat = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec2 vUv;
          void main() {
            float dist = distance(vUv, vec2(0.5));
            float alpha = smoothstep(0.48, 0.15, dist) * smoothstep(0.08, 0.28, dist) * 0.45;
            vec3 col = mix(vec3(0.98, 0.65, 0.15), vec3(1.0, 0.95, 0.7), smoothstep(0.2, 0.35, dist));
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      haloMesh.position.z = -0.1;
      group.add(haloMesh);

      // 2. Schwarzschild Absolute Black Event Horizon (Black Hole Sphere)
      const bhGeo = new THREE.SphereGeometry(radius * 0.72, 48, 48);
      const bhMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const bhMesh = new THREE.Mesh(bhGeo, bhMat);
      group.add(bhMesh);

      // 3. Razor-Thin Photon Sphere Ring (1.5 Rs)
      const photonGeo = new THREE.RingGeometry(radius * 0.73, radius * 0.76, 96);
      const photonMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.95
      });
      const photonMesh = new THREE.Mesh(photonGeo, photonMat);
      photonMesh.rotation.x = Math.PI / 2;
      group.add(photonMesh);

      // 4. Relativistic Accretion Disk (Equatorial Plane)
      const diskGeo = new THREE.RingGeometry(radius * 1.05, radius * 2.9, 96);
      const diskMat = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vPos;
          void main() {
            vUv = uv;
            vPos = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec2 vUv;
          varying vec3 vPos;
          uniform float time;
          void main() {
            float dist = length(vPos.xy);
            float angle = atan(vPos.y, vPos.x) + time * 2.0;
            float swirl = sin(angle * 5.0 + dist * 3.5) * 0.5 + 0.5;
            
            // Relativistic Doppler Beaming (approaching side bluer & brighter)
            float doppler = smoothstep(-2.5, 2.5, -vPos.x);
            vec3 colLeft = mix(vec3(1.0, 0.95, 0.7), vec3(0.6, 0.85, 1.0), doppler);
            vec3 colRight = mix(vec3(0.9, 0.35, 0.1), vec3(0.5, 0.12, 0.05), 1.0 - doppler);
            vec3 baseCol = mix(colRight, colLeft, doppler);
            
            float alpha = smoothstep(1.05, 1.45, dist) * (1.0 - smoothstep(2.3, 2.9, dist)) * (0.65 + swirl * 0.35);
            gl_FragColor = vec4(baseCol * (1.25 + doppler * 0.85), alpha);
          }
        `,
        uniforms: {
          time: { value: 0 }
        },
        transparent: true,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const diskMesh = new THREE.Mesh(diskGeo, diskMat);
      diskMesh.rotation.x = Math.PI / 2.3;
      group.add(diskMesh);

      // 5. Gravitationally Lensed Upper Accretion Arc (Bent over the top)
      const upperArcGeo = new THREE.RingGeometry(radius * 0.92, radius * 1.95, 64, 1, 0, Math.PI);
      const upperArcMat = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vPos;
          void main() {
            vUv = uv;
            vPos = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec2 vUv;
          varying vec3 vPos;
          uniform float time;
          void main() {
            float dist = length(vPos.xy);
            float alpha = smoothstep(0.0, 0.35, vUv.x) * (1.0 - smoothstep(0.65, 1.0, vUv.x)) * 0.85;
            float doppler = smoothstep(1.5, -1.5, vPos.x);
            vec3 col = mix(vec3(0.9, 0.3, 0.1), vec3(1.0, 0.95, 0.6), doppler);
            gl_FragColor = vec4(col * 1.3, alpha);
          }
        `,
        uniforms: {
          time: { value: 0 }
        },
        transparent: true,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const upperArcMesh = new THREE.Mesh(upperArcGeo, upperArcMat);
      upperArcMesh.position.y = radius * 0.12;
      upperArcMesh.position.z = -0.05;
      group.add(upperArcMesh);

      // 6. Gravitationally Lensed Lower Accretion Arc (Bent beneath the bottom)
      const lowerArcGeo = new THREE.RingGeometry(radius * 0.92, radius * 1.95, 64, 1, Math.PI, Math.PI);
      const lowerArcMat = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vPos;
          void main() {
            vUv = uv;
            vPos = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec2 vUv;
          varying vec3 vPos;
          uniform float time;
          void main() {
            float alpha = smoothstep(0.0, 0.35, vUv.x) * (1.0 - smoothstep(0.65, 1.0, vUv.x)) * 0.65;
            float doppler = smoothstep(1.5, -1.5, vPos.x);
            vec3 col = mix(vec3(0.8, 0.25, 0.08), vec3(1.0, 0.88, 0.5), doppler);
            gl_FragColor = vec4(col * 1.1, alpha);
          }
        `,
        uniforms: {
          time: { value: 0 }
        },
        transparent: true,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const lowerArcMesh = new THREE.Mesh(lowerArcGeo, lowerArcMat);
      lowerArcMesh.position.y = -radius * 0.12;
      lowerArcMesh.position.z = -0.05;
      group.add(lowerArcMesh);

      return {
        group,
        diskMat,
        upperArcMat,
        lowerArcMat,
        update: (time) => {
          const t = (time || performance.now()) * 0.001;
          diskMat.uniforms.time.value = t;
          upperArcMat.uniforms.time.value = t;
          lowerArcMat.uniforms.time.value = t;
        }
      };
    },

    create3DEnduranceStation(radius = 1.2) {
      const group = new THREE.Group();

      const moduleGeo = new THREE.BoxGeometry(0.24, 0.24, 0.38);
      const moduleMat = new THREE.MeshStandardMaterial({
        color: 0xe2e8f0,
        metalness: 0.85,
        roughness: 0.25
      });

      const numModules = 12;
      for (let i = 0; i < numModules; i++) {
        const angle = (i / numModules) * Math.PI * 2;
        const mod = new THREE.Mesh(moduleGeo, moduleMat);
        mod.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
        mod.rotation.y = -angle;
        group.add(mod);
      }

      const trussGeo = new THREE.TorusGeometry(radius, 0.04, 16, 64);
      const trussMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.2 });
      const trussMesh = new THREE.Mesh(trussGeo, trussMat);
      trussMesh.rotation.x = Math.PI / 2;
      group.add(trussMesh);

      const coreGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.5, 24);
      const coreMat = new THREE.MeshStandardMaterial({ color: 0x5eead4, metalness: 0.7, roughness: 0.3 });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      group.add(coreMesh);

      return {
        group,
        update: () => {
          group.rotation.y += 0.015;
        }
      };
    },

    /* ============================================================
       3. SUBSYSTEM: 3D INTERACTIVE CORE ORB (MAIN HUD)
       ============================================================ */
    initCoreOrb(container) {
      if (!container) return null;
      container.innerHTML = "";
      container.classList.add("is-3d");

      const width = container.clientWidth || 140;
      const height = container.clientHeight || 140;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
      camera.position.set(0, 0, 3.6);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const earthObj = this.create3DEarthGroup(0.95);
      scene.add(earthObj.group);

      const satGroup = new THREE.Group();
      const ringGeo = new THREE.RingGeometry(1.35, 1.37, 64);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x6ea8fe, side: THREE.DoubleSide, transparent: true, opacity: 0.4 });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2.2;
      satGroup.add(ringMesh);

      const satMesh = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.14), new THREE.MeshStandardMaterial({ color: 0x5eead4, metalness: 0.9 }));
      satMesh.position.set(1.36, 0, 0);
      satGroup.add(satMesh);
      scene.add(satGroup);

      const sun = new THREE.DirectionalLight(0xffffff, 2.2);
      sun.position.set(4, 2, 4);
      scene.add(sun);
      scene.add(new THREE.AmbientLight(0x0a1638, 0.5));

      let isDragging = false;
      let prevMousePos = { x: 0, y: 0 };
      let rotVel = { x: 0, y: 0.002 };

      const onDown = (e) => {
        isDragging = true;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        prevMousePos = { x: clientX, y: clientY };
        container.style.cursor = "grabbing";
      };

      const onMove = (e) => {
        if (!isDragging) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const dx = clientX - prevMousePos.x;
        const dy = clientY - prevMousePos.y;
        prevMousePos = { x: clientX, y: clientY };

        earthObj.group.rotation.y += dx * 0.012;
        earthObj.group.rotation.x += dy * 0.012;
        rotVel = { x: dy * 0.008, y: dx * 0.008 };
      };

      const onUp = () => {
        isDragging = false;
        container.style.cursor = "grab";
      };

      container.addEventListener("mousedown", onDown);
      container.addEventListener("touchstart", onDown, { passive: true });
      window.addEventListener("mousemove", onMove);
      window.addEventListener("touchmove", onMove, { passive: true });
      window.addEventListener("mouseup", onUp);
      window.addEventListener("touchend", onUp);

      let animId;
      function animate() {
        animId = requestAnimationFrame(animate);

        if (!isDragging) {
          earthObj.group.rotation.y += rotVel.y;
          earthObj.group.rotation.x += rotVel.x;
          rotVel.x *= 0.95;
          rotVel.y = rotVel.y * 0.95 + 0.002 * 0.05;
          earthObj.cloudMesh.rotation.y += 0.001;
        }
        satGroup.rotation.y += 0.012;

        renderer.render(scene, camera);
      }
      animate();

      return {
        destroy: () => {
          cancelAnimationFrame(animId);
          renderer.dispose();
        }
      };
    },

    /* ============================================================
       4. SUBSYSTEM: 3D PHOTOREALISTIC EARTH INTRO CINEMATIC
       ============================================================ */
    initIntroScene(canvas) {
      if (!canvas) return null;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 0.3, 4.6);

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // 3D Earth
      const earthObj = this.create3DEarthGroup(1.5);
      scene.add(earthObj.group);

      // Deep Space Starfield (350 3D Star points with Spectral colors)
      const starGeo = new THREE.BufferGeometry();
      const starPos = [];
      const starColors = [];
      const colors = [
        new THREE.Color(0x93c5fd), new THREE.Color(0xffffff),
        new THREE.Color(0xfef08a), new THREE.Color(0xfdba74), new THREE.Color(0xf87171)
      ];
      for (let i = 0; i < 350; i++) {
        const x = (Math.random() - 0.5) * 80;
        const y = (Math.random() - 0.5) * 80;
        const z = (Math.random() - 0.5) * 60 - 20;
        starPos.push(x, y, z);
        const c = colors[Math.floor(Math.random() * colors.length)];
        starColors.push(c.r, c.g, c.b);
      }
      starGeo.setAttribute("position", new THREE.Float32BufferAttribute(starPos, 3));
      starGeo.setAttribute("color", new THREE.Float32BufferAttribute(starColors, 3));
      const starMat = new THREE.PointsMaterial({ size: 1.8, vertexColors: true, transparent: true, opacity: 0.85 });
      const stars = new THREE.Points(starGeo, starMat);
      scene.add(stars);

      // Re-entry Ionization Plasma Embers (80 Particles)
      const plasmaGeo = new THREE.BufferGeometry();
      const plasmaPos = [];
      const plasmaCols = [];
      for (let i = 0; i < 80; i++) {
        plasmaPos.push((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
        plasmaCols.push(1.0, Math.random() * 0.6 + 0.3, 0.1);
      }
      plasmaGeo.setAttribute("position", new THREE.Float32BufferAttribute(plasmaPos, 3));
      plasmaGeo.setAttribute("color", new THREE.Float32BufferAttribute(plasmaCols, 3));
      const plasmaMat = new THREE.PointsMaterial({ size: 3.5, vertexColors: true, blending: THREE.AdditiveBlending, transparent: true, opacity: 0 });
      const plasmaPoints = new THREE.Points(plasmaGeo, plasmaMat);
      scene.add(plasmaPoints);

      // Key Sunlight & Space Fill
      const sun = new THREE.DirectionalLight(0xffffff, 2.6);
      sun.position.set(6, 3, 5);
      scene.add(sun);
      scene.add(new THREE.AmbientLight(0x060e28, 0.38));

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

      return {
        render: (p, elapsed) => {
          earthObj.update();

          // 3D Orbital Trajectory (Descends from 400km LEO down to South America LZ-01)
          const isMobile = window.innerWidth < 900;
          const startZ = isMobile ? 5.6 : 4.6;
          const endZ = isMobile ? 2.9 : 2.05;
          const startX = isMobile ? 0 : 0.45;
          const endX = isMobile ? 0 : 0.68;
          const startY = isMobile ? 0.65 : 0.2;
          const endY = isMobile ? 0.25 : -0.25;

          camera.position.z = startZ - (startZ - endZ) * Math.pow(p, 1.5);
          camera.position.x = startX + (endX - startX) * p;
          camera.position.y = startY - (startY - endY) * p;
          const targetY = isMobile ? 0.45 : earthObj.group.position.y;
          camera.lookAt(earthObj.group.position.x + (isMobile ? 0 : 0.2 * p), targetY, 0);

          // Re-entry Plasma Shockwave Flare intensity
          if (p > 0.35 && p < 0.96) {
            const plasmaP = Math.sin(((p - 0.35) / 0.61) * Math.PI);
            plasmaMat.opacity = plasmaP * 0.85;
            const posAttr = plasmaGeo.attributes.position;
            for (let i = 0; i < 80; i++) {
              posAttr.setY(i, posAttr.getY(i) - 0.08);
              if (posAttr.getY(i) < -2) posAttr.setY(i, 2);
            }
            posAttr.needsUpdate = true;
          } else {
            plasmaMat.opacity = 0;
          }

          renderer.render(scene, camera);
        },
        destroy: () => {
          window.removeEventListener("resize", onResize);
          renderer.dispose();
        }
      };
    },

    /* ============================================================
       5. SUBSYSTEM: 3D PHOTOREALISTIC INTERPLANETARY WARP ENGINE
       ============================================================ */
    initWarpScene(canvas) {
      if (!canvas) return null;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1500);
      camera.position.set(0, 0, 5.0);

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // 3D Volumetric Hyperdrive Star Streaks (240 star lines)
      const numStars = 240;
      const starGeo = new THREE.BufferGeometry();
      const starPositions = new Float32Array(numStars * 6); // 2 vertices per star line
      const starSpeeds = [];

      for (let i = 0; i < numStars; i++) {
        const x = (Math.random() - 0.5) * 30;
        const y = (Math.random() - 0.5) * 30;
        const z = -Math.random() * 80;
        starPositions[i * 6 + 0] = x;
        starPositions[i * 6 + 1] = y;
        starPositions[i * 6 + 2] = z;
        starPositions[i * 6 + 3] = x;
        starPositions[i * 6 + 4] = y;
        starPositions[i * 6 + 5] = z - 1.5;
        starSpeeds.push(Math.random() * 0.4 + 0.6);
      }
      starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
      const starMat = new THREE.LineBasicMaterial({ color: 0xa5f3fc, transparent: true, opacity: 0.85 });
      const starLines = new THREE.LineSegments(starGeo, starMat);
      scene.add(starLines);

      // Planet Cache
      const planetGroups = {
        earth: this.create3DEarthGroup(1.5),
        mars: this.create3DMarsGroup(1.5),
        saturn: this.create3DSaturnGroup(1.4),
        gargantua: this.create3DGargantuaGroup(1.5),
        hub: this.create3DEnduranceStation(1.4)
      };

      let currentPlanet = null;

      const sun = new THREE.DirectionalLight(0xffffff, 2.4);
      sun.position.set(5, 3, 5);
      scene.add(sun);
      scene.add(new THREE.AmbientLight(0x060e28, 0.45));

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

      return {
        setDestination: (type) => {
          if (currentPlanet && currentPlanet.group) {
            scene.remove(currentPlanet.group);
          }
          currentPlanet = planetGroups[type] || planetGroups.hub;
          if (currentPlanet && currentPlanet.group) {
            currentPlanet.group.position.set(0, 0, -4);
            currentPlanet.group.scale.set(0.01, 0.01, 0.01);
            scene.add(currentPlanet.group);
          }
        },
        render: (p, speedFactor) => {
          // Update 3D Hyperdrive Streaks
          const posAttr = starGeo.attributes.position;
          const currentSpeed = 0.5 + speedFactor * 3.5;
          const tailLen = 0.5 + speedFactor * 5.0;

          for (let i = 0; i < numStars; i++) {
            let z = posAttr.getZ(i * 2 + 0) + currentSpeed * starSpeeds[i];
            if (z > 5) z = -80;
            posAttr.setZ(i * 2 + 0, z);
            posAttr.setZ(i * 2 + 1, z - tailLen);
          }
          posAttr.needsUpdate = true;

          // Update Approaching Planet
          if (currentPlanet && currentPlanet.group) {
            if (p >= 0.15) {
              const planetP = (p - 0.15) / 0.72;
              const easedScale = 1 - Math.pow(1 - Math.min(1, planetP), 2.5);
              currentPlanet.group.scale.set(easedScale, easedScale, easedScale);
              currentPlanet.group.position.z = -4 + easedScale * 4;
            }
            if (typeof currentPlanet.update === "function") {
              currentPlanet.update(performance.now());
            }
          }

          renderer.render(scene, camera);
        },
        destroy: () => {
          window.removeEventListener("resize", onResize);
          renderer.dispose();
        }
      };
    },

    /* ============================================================
       6. SUBSYSTEM: 3D DEDICATED GARGÂNTUA KERR BLACK HOLE (SETOR 04)
       ============================================================ */
    initGargantuaBg(canvas) {
      if (!canvas) return null;

      const scene = new THREE.Scene();
      const getDims = () => ({
        w: Math.max(280, canvas.parentElement.clientWidth || window.innerWidth),
        h: Math.max(240, canvas.parentElement.clientHeight || window.innerHeight)
      });

      const dims = getDims();
      const camera = new THREE.PerspectiveCamera(45, dims.w / dims.h, 0.1, 200);
      camera.position.set(0, 0.35, 4.2);

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setSize(dims.w, dims.h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      // Create enhanced Gargantua with more photorealistic elements
      const gargantuaObj = this.create3DGargantuaGroup(1.8);
      scene.add(gargantuaObj.group);

      // Add volumetric accretion particles
      const particleGeo = new THREE.BufferGeometry();
      const particleCount = 600;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = 1.0 + Math.random() * 2.5;
        positions[i * 3] = Math.cos(angle) * dist;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 0.15;
        positions[i * 3 + 2] = Math.sin(angle) * dist;
        const brightness = 0.5 + Math.random() * 0.5;
        colors[i * 3] = brightness;
        colors[i * 3 + 1] = brightness * (0.6 + Math.random() * 0.4);
        colors[i * 3 + 2] = brightness * (0.2 + Math.random() * 0.3);
      }
      particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      const particleMat = new THREE.PointsMaterial({
        size: 0.04,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      particles.rotation.x = Math.PI / 2.3;
      scene.add(particles);

      let targetRotY = 0;
      let targetRotX = 0;
      const onPointerMove = (e) => {
        const cx = (e.clientX / window.innerWidth) * 2 - 1;
        const cy = (e.clientY / window.innerHeight) * 2 - 1;
        targetRotY = cx * 0.15;
        targetRotX = cy * 0.1;
      };
      window.addEventListener("pointermove", onPointerMove, { passive: true });

      const onResize = () => {
        const d = getDims();
        camera.aspect = d.w / d.h;
        camera.updateProjectionMatrix();
        renderer.setSize(d.w, d.h, false);
      };
      window.addEventListener("resize", onResize);

      let animId;
      function animate(time) {
        animId = requestAnimationFrame(animate);

        const panel = document.getElementById("panel-contato");
        const isVisible = !panel || panel.classList.contains("active");

        if (isVisible) {
          gargantuaObj.update(time);
          particles.rotation.z += 0.0008;
          gargantuaObj.group.rotation.y += (targetRotY - gargantuaObj.group.rotation.y) * 0.03;
          gargantuaObj.group.rotation.x += (targetRotX - gargantuaObj.group.rotation.x) * 0.03;
          renderer.render(scene, camera);
        }
      }
      animate(0);

      return {
        resize: onResize,
        destroy: () => {
          cancelAnimationFrame(animId);
          window.removeEventListener("resize", onResize);
          window.removeEventListener("pointermove", onPointerMove);
          renderer.dispose();
        }
      };
    }
  };

  window.Space3D = Space3D;
})();
