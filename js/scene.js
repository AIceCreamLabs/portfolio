import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

// ── Config ──────────────────────────────────────────────────────────────────
const COLS = 6, ROWS = 3, REPEATS = 3;
const RADIUS = 4, TILE_W = 0.72, TILE_H = 1, Y_SPACING = 2.7;
const BASE_SPEEDS = [0.65, 1.1, 1.55];

const IMAGE_SRCS = [
  'portfolio/ntoma.png',
  'portfolio/can.png',
  'portfolio/psych.png',
  'portfolio/aice.png',
  'portfolio/gigzo.png',
  'portfolio/about-me.webp',
];

const TILE_DATA = [
  { title: 'Ntoma',           cat: 'AI Product' },
  { title: 'CAN Architecture',cat: 'Editorial Platform' },
  { title: 'Psychologist LT', cat: 'Web Development' },
  { title: 'AICE Legal',      cat: 'AI Product' },
  { title: 'GiGZo',           cat: 'Web App' },
  { title: 'About Me',        cat: 'AKUMALI · Studio' },
];

// ── Renderer ─────────────────────────────────────────────────────────────────
const canvas = document.getElementById('ruben-canvas');
if (!canvas) throw new Error('ruben-canvas not found');

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
camera.position.z = 6;

// ── Lighting ──────────────────────────────────────────────────────────────
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
pmrem.dispose();

const keyLight = new THREE.DirectionalLight(0xfff0d0, 3.5);
keyLight.position.set(5, 8, 4);
scene.add(keyLight);

const fillLight = new THREE.DirectionalLight(0xd0e8ff, 1.8);
fillLight.position.set(-5, 2, 3);
scene.add(fillLight);

const rimLight = new THREE.DirectionalLight(0xffc87a, 2.0);
rimLight.position.set(0, -3, -5);
scene.add(rimLight);

scene.add(new THREE.AmbientLight(0xfff8f0, 1.2));

// ── AKUMALI 3D object ────────────────────────────────────────────────────
let helmet = null;
let helmetMat = null;
const helmetMeshes = [];
let idleRotY = 0;
let currentRotY = 0;

// ── Glitch state ─────────────────────────────────────────────────────────
let glitchEndTime = 0;
let glitchPhase = 0;
const GLITCH_DURATION = 0.42; // refined — shorter, more material-based
const BRASS = new THREE.Color(0xc9a84c);

// ── Scroll / descent state ────────────────────────────────────────────────
let smoothHelmetY  = 0;
let bounceStartTime = -1;
let bounceOffset   = 0;
let lastScrollY    = 0;
let sceneScrollVel = 0;   // smoothed absolute scroll velocity (px/frame)

// Camera is at z=6, FOV=50° vertical → visible half-height ≈ 2.8 units.
// OBJ is ~0.9 units radius. At y=-0.55 it sits in the lower third, fully visible.
const DESCENT_MAX  = -0.55;
const HOLD_END     = 0.35;    // hold at centre for first 35% of block scroll
const DESC_END     = 0.90;    // finish descending by 90% of block scroll
const BOUNCE_DUR   = 2.0;
const BOUNCE_AMP   = 0.045;

function triggerGlitch() {
  glitchEndTime = performance.now() / 1000 + GLITCH_DURATION;
}

new OBJLoader().load('models/akumali.obj', (obj) => {
  helmetMat = new THREE.MeshPhysicalMaterial({
    color: 0xc9a84c,
    metalness: 0.7,
    roughness: 0.25,
    clearcoat: 0.6,
    clearcoatRoughness: 0.1,
    envMapIntensity: 1.2,
  });
  obj.traverse((c) => {
    if (c.isMesh) {
      c.material = helmetMat;
      helmetMeshes.push(c);
    }
  });

  const box = new THREE.Box3().setFromObject(obj);
  const center = box.getCenter(new THREE.Vector3());
  const size   = box.getSize(new THREE.Vector3());
  obj.position.sub(center);
  obj.scale.setScalar(1.8 / Math.max(size.x, size.y, size.z));

  helmet = obj;
  scene.add(helmet);
});

// ── Image tube ───────────────────────────────────────────────────────────
const texLoader = new THREE.TextureLoader();
const rowGroups = [];
const tileMeshes = [];
const TOTAL = COLS * REPEATS;

function buildTube() {
  for (let row = 0; row < ROWS; row++) {
    const group = new THREE.Group();
    const y = (row - 1) * Y_SPACING;

    for (let i = 0; i < TOTAL; i++) {
      const imgIdx = i % IMAGE_SRCS.length;
      const tex = texLoader.load(IMAGE_SRCS[imgIdx]);
      tex.colorSpace = THREE.SRGBColorSpace;

      const mat = new THREE.MeshBasicMaterial({ map: tex, side: THREE.FrontSide });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(TILE_W, TILE_H), mat);
      mesh.userData.dataIdx = imgIdx;

      const angle = (i / TOTAL) * Math.PI * 2;
      mesh.position.set(
        Math.sin(angle) * RADIUS,
        y,
        Math.cos(angle) * RADIUS,
      );
      mesh.rotation.y = -angle;
      group.add(mesh);
      tileMeshes.push(mesh);
    }
    scene.add(group);
    rowGroups.push(group);
  }
}
buildTube();

// ── Resize ────────────────────────────────────────────────────────────────
function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
resize();
window.addEventListener('resize', resize);

// ── Hover / speed control ─────────────────────────────────────────────────
let speedMultiplier = 1.0;
let targetMultiplier = 1.0;
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const tooltip  = document.getElementById('sceneTooltip');
const tipTitle = document.getElementById('tooltipTitle');
const tipCat   = document.getElementById('tooltipCat');
let hoveredTile = null;
let helmetHovered = false;

function updateTooltipPos(x, y) {
  if (!tooltip) return;
  const offset = 18;
  const tw = tooltip.offsetWidth  || 180;
  const th = tooltip.offsetHeight || 60;
  const px = (x + offset + tw > window.innerWidth)  ? x - tw - offset : x + offset;
  const py = (y + offset + th > window.innerHeight) ? y - th - offset : y + offset;
  tooltip.style.left = px + 'px';
  tooltip.style.top  = py + 'px';
}

function showTooltip(dataIdx, x, y) {
  if (!tooltip || !tipTitle || !tipCat) return;
  const d = TILE_DATA[dataIdx] || TILE_DATA[0];
  tipTitle.textContent = d.title;
  tipCat.textContent   = d.cat;
  tooltip.classList.add('is-visible');
  updateTooltipPos(x, y);
}

function hideTooltip() {
  tooltip?.classList.remove('is-visible');
}

function onCanvasMouseMove(e) {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  // Check helmet hover first
  if (helmetMeshes.length > 0) {
    const helmetHits = raycaster.intersectObjects(helmetMeshes);
    if (helmetHits.length > 0) {
      if (!helmetHovered) {
        helmetHovered = true;
        triggerGlitch();
      }
    } else {
      helmetHovered = false;
    }
  }

  // Check tile hover
  const hits = raycaster.intersectObjects(tileMeshes);
  if (hits.length > 0) {
    const mesh = hits[0].object;
    if (mesh !== hoveredTile) {
      hoveredTile = mesh;
      targetMultiplier = 0.08;
      triggerGlitch();
      showTooltip(mesh.userData.dataIdx, e.clientX, e.clientY);
    } else {
      updateTooltipPos(e.clientX, e.clientY);
    }
  } else {
    if (hoveredTile) {
      hoveredTile = null;
      targetMultiplier = 1.0;
      hideTooltip();
    }
  }
}

function onCanvasMouseLeave() {
  hoveredTile = null;
  helmetHovered = false;
  targetMultiplier = 1.0;
  hideTooltip();
}

const SCENE_TO_PORTFOLIO = [0, 1, 2, 3, 4, 6];

function onCanvasClick(e) {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(tileMeshes);
  if (hits.length > 0) {
    const dataIdx = hits[0].object.userData.dataIdx;
    const mappedIdx = SCENE_TO_PORTFOLIO[dataIdx];
    const items = window.PORTFOLIO_ITEMS;
    const item = items ? items[mappedIdx] : null;
    if (item && window.openDetail) {
      const isAbout = item.type === 'about';
      const label = isAbout ? 'ABOUT' : `PROJECT · ${String(mappedIdx + 1).padStart(2, '0')}`;
      window.openDetail(item, label, null);
    }
  }
}

// ── Render loop ───────────────────────────────────────────────────────────
let lastT = 0;

function tick(t) {
  requestAnimationFrame(tick);
  const delta = Math.min((t - lastT) / 1000, 0.05);
  lastT = t;

  speedMultiplier += (targetMultiplier - speedMultiplier) * 0.06;

  // Scroll-driven rotation + gentle y drift
  const scrollY = window.scrollY || 0;
  const scrollRotY = scrollY * 0.0025;

  if (helmet) {
    idleRotY += 0.004 * speedMultiplier;
    const target = idleRotY + scrollRotY;
    currentRotY += (target - currentRotY) * 0.04;
    helmet.rotation.y = currentRotY;

    // ── Scroll velocity — drives tube spin boost ──────────────────────────
    const rawVel = Math.abs(scrollY - lastScrollY);
    sceneScrollVel += (rawVel - sceneScrollVel) * 0.14;
    lastScrollY = scrollY;

    // ── Three-phase Y journey ─────────────────────────────────────────────
    const heroH      = window.innerHeight;
    const blockH     = 5 * window.innerHeight;
    const blockRange = Math.max(1, blockH - heroH);

    // Phase 0 — entrance: OBJ drifts in from slightly above as canvas fades in
    const canvasFadeP = Math.max(0, Math.min(1, (scrollY - heroH * 0.3) / (heroH * 0.6)));
    const entryY      = (1 - canvasFadeP) * 0.2; // settles from +0.2 → 0

    // Phase 1 — hold: OBJ stays at centre while user reads the scene (0 – HOLD_END)
    // Phase 2 — descent: smooth ease-out drop into lower third (HOLD_END – DESC_END)
    const rawBlockP    = Math.max(0, Math.min(1, (scrollY - heroH) / blockRange));
    const descentPhase = Math.max(0, Math.min(1, (rawBlockP - HOLD_END) / (DESC_END - HOLD_END)));
    const easedDescent = 1 - Math.pow(1 - descentPhase, 2.5); // ease-out expo
    const descentY     = easedDescent * DESCENT_MAX;

    const targetY = entryY + descentY;
    smoothHelmetY += (targetY - smoothHelmetY) * 0.036; // gentle inertia

    // Phase 3 — bounce: settle at footer with rhythmic oscillation
    if (rawBlockP > 0.88 && bounceStartTime < 0) {
      bounceStartTime = t / 1000;
    } else if (rawBlockP < 0.80) {
      bounceStartTime = -1;
      bounceOffset    = 0;
    }

    if (bounceStartTime > 0) {
      const bt    = t / 1000 - bounceStartTime;
      if (bt < BOUNCE_DUR) {
        // Decaying sine — 3 rhythmic pulses, quadratic envelope
        const decay  = Math.pow(1 - bt / BOUNCE_DUR, 2);
        bounceOffset = Math.sin(bt * Math.PI * 3) * BOUNCE_AMP * decay;
      } else {
        bounceOffset = 0;
      }
    }

    helmet.position.y = smoothHelmetY + bounceOffset;

    // ── Refined glitch — stays in brass/gold family, no harsh colors ─────
    const now      = t / 1000;
    const glitching = now < glitchEndTime;
    if (glitching) {
      glitchPhase++;
      const glitchT = 1 - (glitchEndTime - now) / GLITCH_DURATION; // 0→1

      // Micro-tremor — much finer than before, only every 4 frames
      if (glitchPhase % 4 === 0) {
        helmet.position.x += (Math.random() - 0.5) * 0.016;
        helmet.position.z += (Math.random() - 0.5) * 0.009;
      }

      if (helmetMat) {
        // Brief metalness spike — stays premium (never goes below 0.7)
        helmetMat.metalness = 0.70 + Math.sin(glitchT * Math.PI) * 0.24;

        // Subtle warm emissive — dark amber only, no white/cyan/red
        const ei = Math.sin(glitchT * Math.PI) * 0.13;
        helmetMat.emissive.setRGB(ei, ei * 0.42, 0);

        // Colour: micro-shimmer within brass family
        const shimmer = Math.sin(glitchPhase * 0.85) * 0.038;
        helmetMat.color.setRGB(
          Math.min(1, BRASS.r + shimmer),
          BRASS.g,
          Math.max(0, BRASS.b - shimmer * 0.4),
        );
      }
    } else if (glitchPhase > 0) {
      glitchPhase = 0;
      helmet.position.x = 0;
      helmet.position.z = 0;
      if (helmetMat) {
        helmetMat.color.copy(BRASS);
        helmetMat.emissive.set(0x000000);
        helmetMat.metalness = 0.70;
        helmetMat.roughness = 0.25;
      }
    }
  }

  // Tube rings spin faster when the user scrolls — then relax back to base cadence
  const scrollBoost = 1 + sceneScrollVel * 0.06;
  rowGroups.forEach((g, i) => {
    g.rotation.y += BASE_SPEEDS[i] * delta * 0.3 * speedMultiplier * scrollBoost;
  });
  renderer.render(scene, camera);
}
requestAnimationFrame(tick);

// ── Canvas reveal — driven by scroll, not entrance ────────────────────────
let entranceDone = false;
let hoverEnabled = false;

function enableHover() {
  if (hoverEnabled) return;
  hoverEnabled = true;
  canvas.style.pointerEvents = 'all';
  canvas.addEventListener('mousemove', onCanvasMouseMove);
  canvas.addEventListener('mouseleave', onCanvasMouseLeave);
  canvas.addEventListener('click', onCanvasClick);
}

function disableHover() {
  if (!hoverEnabled) return;
  hoverEnabled = false;
  canvas.style.pointerEvents = 'none';
  canvas.removeEventListener('mousemove', onCanvasMouseMove);
  canvas.removeEventListener('mouseleave', onCanvasMouseLeave);
  canvas.removeEventListener('click', onCanvasClick);
  hideTooltip();
  targetMultiplier = 1.0;
}

function handleScroll() {
  if (!entranceDone) return;
  const heroH = document.querySelector('.hero')?.offsetHeight || window.innerHeight;
  // Canvas fades in from 30% → 90% of hero scroll (wider zone = smoother feel both ways)
  const raw = (window.scrollY - heroH * 0.3) / (heroH * 0.6);
  const progress = Math.max(0, Math.min(1, raw));
  // Ease the opacity so it eases in and eases out naturally
  const easedOpacity = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2;
  canvas.style.opacity = easedOpacity;

  if (progress > 0.5) {
    enableHover();
    // Show hint once when scene first fully appears
    if (progress > 0.95) {
      const hint = document.getElementById('sceneHint');
      if (hint && !hint.dataset.shown) {
        hint.dataset.shown = '1';
        hint.classList.add('is-visible');
        setTimeout(() => hint.classList.remove('is-visible'), 3500);
      }
    }
  } else {
    disableHover();
  }
}

document.addEventListener('akumali:entranceDone', () => {
  entranceDone = true;
  window.addEventListener('scroll', handleScroll, { passive: true });
});

window.rubenScene = { scene, camera, renderer };
