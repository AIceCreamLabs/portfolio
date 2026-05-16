/* ============================================================
 * AKUMALI PORTFOLIO — Main Script
 * ============================================================ */

const PORTFOLIO_ITEMS = [
  {
    id: 6,
    title: 'Hire Me',
    subtitle: 'Services & Pricing',
    category: 'Studio',
    image: 'hire-me.png',
    type: 'service',
    description: 'Custom web development and AI integration services. Three tiers — Foundation, System, and Authority.',
    challenge: 'Most studios sell hours. I sell systems that make money.',
    solution: 'Strategy-first engagements with measurable outcomes. Every project begins with positioning, then architecture, then code.',
    results: ['Foundation — €2,500', 'System — €5,500', 'Authority — €12,000', 'MVP in weeks, not months'],
    tech: ['Strategy', 'Architecture', 'Engineering'],
    link: 'mailto:akumalis@protonmail.com?subject=Project Inquiry'
  },
  {
    id: 2,
    title: 'Psychologist LT',
    subtitle: 'Bilingual Practice Website',
    category: 'Web Development',
    image: 'psych.png',
    media: ['psych-demo.mp4', 'psych7.png', 'psych6.png', 'psych5.png', 'psych4.png', 'psych3.png', 'psych2.png', 'psych1.png', 'psych.png'],
    type: 'project',
    description: 'Clean, professional website for a psychotherapy practice in Lithuania. Designed for trust, accessibility, and client conversion.',
    challenge: 'The client needed a website that felt warm and trustworthy — not clinical. Had to work perfectly in Lithuanian and English.',
    solution: 'Built a bilingual, mobile-first website with calm design language, clear service descriptions, and an integrated booking flow.',
    results: ['Live and fully responsive', 'Bilingual LT/EN', 'Optimised for local SEO', 'Mobile-first design'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    link: 'https://sigitaasvydiene.lt/'
  },
  {
    id: 3,
    title: 'CAN Architecture',
    subtitle: 'Editorial Studio Portfolio',
    category: 'Web Development',
    image: 'can.png',
    media: ['can-demo.mp4', 'can.png'],
    type: 'project',
    description: 'Editorial architecture portfolio website with smooth scroll effects, large-format imagery, and bilingual navigation — built for a French architecture studio.',
    challenge: 'The client wanted a website that felt like a printed architecture monograph — slow, intentional, image-led. Not a typical corporate template.',
    solution: 'Custom React build with Framer Motion scroll animations, full-bleed image layouts, and a project gallery that mirrors editorial scroll style.',
    results: ['Custom scroll effects', 'Bilingual FR/EN', 'Full-bleed editorial layout', 'Optimised image loading'],
    tech: ['React', 'Framer Motion', 'CSS', 'Vercel'],
    link: 'https://can-yinka-muu8xna3i-aicecreamlabs-6519s-projects.vercel.app/'
  },
  {
    id: 4,
    title: 'AICE Legal',
    subtitle: 'AI Legal Document Advisor',
    category: 'AI Integration',
    image: 'aice.png',
    media: ['aicelegal.mp4', 'aicelegal3.png', 'aicelegal2.png', 'aicelegal1.png', 'aice_logo.png', 'aice.png'],
    type: 'project',
    description: 'AI-powered legal document analysis platform for EU law firms. Analyses contracts and flags GDPR and EU AI Act compliance issues automatically.',
    challenge: 'Legal teams were reviewing compliance manually — slow, expensive, and inconsistent across documents and jurisdictions.',
    solution: 'Built a document processing pipeline using LLM APIs to extract clauses, flag compliance risks, and generate plain-language summaries. Firebase backend with secure document handling.',
    results: ['Automated GDPR compliance flagging', 'EU AI Act risk scoring', 'Plain-language summaries', 'Secure document pipeline'],
    tech: ['Node.js', 'Firebase', 'LangChain', 'OpenAI', 'React'],
    link: 'mailto:akumalis@protonmail.com'
  },
  {
    id: 1,
    title: 'Ntoma',
    subtitle: 'AI Fashion Pattern Tool',
    category: 'AI Product',
    image: 'ntoma.png',
    media: ['ntoma4.mp4', 'ntoma3.png', 'ntoma2.png', 'ntoma1.png', 'ntoma.png'],
    type: 'project',
    description: 'AI-powered garment pattern generation. Upload any photo, get a production-ready sewing pattern with flat drawings, virtual fit preview, and DXF factory export.',
    challenge: 'Fashion designers and home sewers spend hours or hundreds of euros getting patterns made from reference photos. There was no affordable, fast alternative.',
    solution: 'Built a full AI pipeline: computer vision garment analysis, technical flat drawing generation, mathematically correct pattern pieces, virtual fit on body silhouette, and multi-size grading — all from a single photo.',
    results: ['Photo → pattern in under 2 minutes', 'XS–XL grading automatic', 'DXF export for factory production', 'Assembly guide included', 'Early access waitlist live'],
    tech: ['React', 'FastAPI', 'Python', 'OpenAI Vision', 'Vercel'],
    link: 'https://ntoma.vercel.app'
  },
  {
    id: 5,
    title: 'GiGZo',
    subtitle: 'Services Marketplace',
    category: 'Web App',
    image: 'gigzo.png',
    media: ['gigzo.mp4', 'gigzo_lg.png', 'gigzo5.png', 'gigzo3.png', 'gigzo2.png', 'gigzo1.png', 'gigzo.png'],
    type: 'project',
    description: 'Domestic services marketplace for expats in Thailand. Connects customers with verified cleaning, laundry, and household service providers.',
    challenge: 'Expats in Thailand had no reliable, English-language platform to find and book domestic services. Providers had no digital booking system.',
    solution: 'Built a full-stack marketplace with provider onboarding, booking system, payment integration, and AI-powered customer support agents using CrewAI and LangChain.',
    results: ['Full marketplace MVP built', 'Booking + payment integration', 'AI customer onboarding agents', 'Provider management system'],
    tech: ['React', 'Node.js', 'Firebase', 'CrewAI', 'LangChain', 'Stripe'],
    link: 'mailto:akumalis@protonmail.com'
  },
  {
    id: 8,
    title: 'Square',
    subtitle: 'Brand Identity System',
    category: 'Design System',
    image: 'square.jpeg',
    media: ['square.mp4','square4.png','square3.png','square2.png','square1.png','square.jpeg'],
    type: 'project',
    description: 'Comprehensive brand identity and design system for a luxury wellness brand. Type, color, motion, and component library.',
    challenge: 'Client needed a brand that read as premium across web, print, and motion — without veering into clichéd "luxury" territory.',
    solution: 'Restrained typographic system anchored by a custom display face, paired with a warm-neutral palette and motion guidelines.',
    results: ['Full design system', 'Web + print components', 'Motion guidelines', 'Brand book delivered'],
    tech: ['Figma', 'After Effects', 'Webflow'],
    link: 'mailto:akumalis@protonmail.com'
  },
  {
    id: 7,
    title: 'About Theresa',
    subtitle: 'Developer & AI Builder',
    category: 'Studio',
    image: 'about-me.webp',
    type: 'about',
    description: 'Full-stack developer and AI builder based in Thailand. Building real products that work — not demos that look pretty.',
    challenge: 'Most digital work fails not because it looks wrong — but because it is built without strategic clarity.',
    solution: 'Strategy first. Then architecture. Then code. End-to-end ownership of every project — no hand-offs, no gaps.',
    results: ['Based in Thailand', 'Available worldwide', 'Response within 24h', 'Strategy + Engineering'],
    tech: ['React', 'Next.js', 'Python', 'FastAPI', 'LangChain', 'CrewAI'],
    link: 'mailto:akumalis@protonmail.com'
  },
  {
    id: 9,
    title: 'Atelier',
    subtitle: 'Studio Practice',
    category: 'Studio',
    image: 'studio.jpeg',
    media: ['studio.mp4', 'studio5.png', 'studio4.png', 'studio3.png', 'studio2.png', 'studio1.png'],
    type: 'project',
    description: 'A focused practice — one set of hands across strategy, design, and engineering. End-to-end ownership of every project.',
    challenge: 'Most agencies hand off between roles. The result is incoherence. We work end-to-end.',
    solution: 'One operator per project. Strategy and execution from the same hand. Tight feedback loops, no scope drift.',
    results: ['Solo-led practice', 'Strategy-led engagements', 'Selected clients only', 'Long-form retainers'],
    tech: ['Strategy', 'Design', 'Engineering'],
    link: 'mailto:akumalis@protonmail.com'
  }
];

const CELL_LABELS = PORTFOLIO_ITEMS.map((p, i) => ({
  word: p.title,
  project: p.title,
  idx: String(i + 1).padStart(3, '0'),
  item: p
}));

const TWEAKS = {
  hoverMode: 'bounce',
  theme: 'light',
  tileHover: 'shape',
  background: 'off'
};

/* ============================================================
 * Bento morph — target layout after calve
 * cellSize=130, gap=18 → right column starts at 310px
 * ============================================================ */
const BENTO_LAYOUTS = [
  { x: 0,   y: 0,   w: 124, h: 94  },
  { x: 142, y: 0,   w: 150, h: 94  },
  { x: 310, y: 0,   w: 111, h: 160 },
  { x: 0,   y: 112, w: 124, h: 156 },
  { x: 142, y: 112, w: 150, h: 156 },
  { x: 310, y: 178, w: 111, h: 90  },
  { x: 0,   y: 286, w: 124, h: 124 },
  { x: 142, y: 286, w: 94,  h: 124 },
  { x: 254, y: 286, w: 167, h: 124 },
];

let bentoTimers = [];
function clearBentoTimers() {
  bentoTimers.forEach(t => clearTimeout(t));
  bentoTimers = [];
}

function getBentoConfig() {
  const vw = window.innerWidth;
  if (vw < 500) return { cellPx: 84, scale: 0.55 };
  if (vw < 900) return { cellPx: 84, scale: 0.65 };
  return { cellPx: 130, scale: 1 };
}

function initBentoMorph() {
  clearBentoTimers();
  const ease = 'cubic-bezier(.2,.8,.2,1)';
  const { cellPx, scale } = getBentoConfig();

  // Fire at 4600ms — cellCalve ends at 4500ms, so all cells are stable at their calve positions
  bentoTimers.push(setTimeout(() => {
    const cells = document.querySelectorAll('.grid .cell');
    cells.forEach(cell => {
      const i = parseInt(cell.dataset.i);
      const layout = BENTO_LAYOUTS[i];
      // Read transform from stable forwards-fill state, then freeze it as inline style
      const cs = getComputedStyle(cell);
      const matrix = new DOMMatrix(cs.transform);
      const curX = matrix.m41 || 0;
      const curY = matrix.m42 || 0;
      cell.style.animation = 'none';
      cell.style.opacity = '1';
      cell.style.transform = `translate(${curX}px, ${curY}px)`;
      cell.style.width = `${cellPx}px`;
      cell.style.height = `${cellPx}px`;
      void cell.offsetHeight;
      cell.style.transition = `transform 1.1s ${ease}, width 1.1s ${ease}, height 1.1s ${ease}`;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        cell.style.transform = `translate(${layout.x * scale}px, ${layout.y * scale}px)`;
        cell.style.width = `${layout.w * scale}px`;
        cell.style.height = `${layout.h * scale}px`;
      }));
    });
  }, 4600));

  // Reveal at 5600ms — bento morph mostly done (started 4600ms + 1100ms = 5700ms)
  bentoTimers.push(setTimeout(() => {
    const cells = document.querySelectorAll('.grid .cell');
    cells.forEach(cell => {
      cell.style.transition += `, background 0.9s ${ease}, border-color 0.9s ${ease}, box-shadow 0.9s ease`;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        cell.classList.add('revealed');
      }));
      const cellImg = cell.querySelector('.cell-img');
      if (cellImg) cellImg.style.animation = 'cellImgFade 1.0s cubic-bezier(.2,.8,.2,1) forwards';
    });
  }, 5600));
}

/* ============================================================
 * Render grid cells
 * ============================================================ */
const gridEl = document.getElementById('grid');

function renderGrid() {
  gridEl.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.i = i;
    const lbl = CELL_LABELS[i];
    const item = lbl.item;

    const imgHtml = item.image
      ? `<img src="${item.image}" alt="${item.title}" class="cell-photo" loading="lazy">`
      : '';

    cell.innerHTML = `
      <div class="cell-img">
        <div class="ph"></div>
        ${imgHtml}
        <span class="idx">${lbl.idx}</span>
        <span class="label">${lbl.project}</span>
      </div>
    `;

    cell.addEventListener('mouseenter', () => onTileHover(i));
    cell.addEventListener('mouseleave', () => offTileHover());
    cell.addEventListener('click', () => { if (gridDragMoved) return; openDetail(lbl.item); });
    cell.tabIndex = 0;
    cell.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail(lbl.item); }
    });

    gridEl.appendChild(cell);
  }
}
renderGrid();

/* ============================================================
 * Tile caption hover
 * ============================================================ */
const morphEl  = document.getElementById('morph');
const wordEl   = document.getElementById('morphWord');
const heroEl   = document.getElementById('hero');
const stageEl  = document.getElementById('stage');

let ready = false;

function onTileHover(i) {
  if (!ready) return;
  wordEl.textContent = CELL_LABELS[i].project;
  morphEl.classList.add('on');
  heroEl.classList.add('dim');
}
function offTileHover() {
  morphEl.classList.remove('on');
  heroEl.classList.remove('dim');
}

/* ============================================================
 * AKUMALI hover — morph / liquid / off
 * ============================================================ */
const MORPH_PHRASES = ['AKUMALI', 'POSITIONING', 'FULL-STACK', 'AI BUILDER', 'REVENUE FIRST'];
const titleWrap    = document.getElementById('titleWrap');
const titleMorphEl = document.getElementById('titleMorph');

let morphState = { idx: 0, raf: null, swap: 0, hovering: false };

function applyHoverMode(mode) {
  teardown3DRoll();
  teardownScatter();
  titleWrap.classList.remove('hover-bounce', 'hover-morph', 'hover-liquid', 'hover-3d', 'hover-scatter', 'hover-off');
  if (mode === 'bounce')   titleWrap.classList.add('hover-bounce');
  else if (mode === 'morph')   titleWrap.classList.add('hover-morph');
  else if (mode === 'liquid')  titleWrap.classList.add('hover-liquid');
  else if (mode === '3d')      { titleWrap.classList.add('hover-3d'); setup3DRoll(); }
  else if (mode === 'scatter') { titleWrap.classList.add('hover-scatter'); setupScatter(); }
  else titleWrap.classList.add('hover-off');
}

function startMorphLoop() {
  if (morphState.raf) return;
  morphState.hovering = true;
  titleWrap.classList.add('hovering');
  titleMorphEl.classList.add('show');
  titleMorphEl.textContent = MORPH_PHRASES[morphState.idx];

  let last = performance.now();
  const tick = (t) => {
    if (!morphState.hovering) return;
    const dt = t - last;
    morphState.swap += dt;
    if (morphState.swap >= 1100) {
      morphState.swap = 0;
      morphState.idx = (morphState.idx + 1) % MORPH_PHRASES.length;
      titleMorphEl.style.transition = 'opacity .25s ease, filter .25s ease';
      titleMorphEl.style.filter = 'blur(8px)';
      titleMorphEl.style.opacity = '0';
      setTimeout(() => {
        titleMorphEl.textContent = MORPH_PHRASES[morphState.idx];
        titleMorphEl.style.filter = 'blur(0)';
        titleMorphEl.style.opacity = '1';
      }, 260);
    }
    last = t;
    morphState.raf = requestAnimationFrame(tick);
  };
  morphState.raf = requestAnimationFrame(tick);
}

function stopMorphLoop() {
  morphState.hovering = false;
  if (morphState.raf) cancelAnimationFrame(morphState.raf);
  morphState.raf = null;
  morphState.idx = 0;
  morphState.swap = 0;
  titleWrap.classList.remove('hovering');
  titleMorphEl.classList.remove('show');
  titleMorphEl.style.filter = '';
  titleMorphEl.style.opacity = '';
  titleMorphEl.textContent = 'AKUMALI';
}

titleWrap.addEventListener('mouseenter', () => { if (TWEAKS.hoverMode === 'morph') startMorphLoop(); });
titleWrap.addEventListener('mouseleave', () => { if (TWEAKS.hoverMode === 'morph') stopMorphLoop(); });

/* ── 3D rolling text (CSS :hover-driven, stagger set inline) ── */
function setup3DRoll() {
  document.querySelectorAll('.title .letter').forEach((letter, i) => {
    const ch   = letter.textContent;
    const roll = document.createElement('span');
    roll.className = 'letter-roll';
    const top  = document.createElement('span');
    top.className = 'letter-top';
    top.textContent = ch;
    const bot  = document.createElement('span');
    bot.className = 'letter-bot';
    bot.textContent = ch;
    const delay = `${(i * 0.04).toFixed(2)}s`;
    top.style.transitionDelay = delay;
    bot.style.transitionDelay = delay;
    roll.appendChild(top);
    roll.appendChild(bot);
    letter.replaceWith(roll);
  });
}

function teardown3DRoll() {
  document.querySelectorAll('.title .letter-roll').forEach(roll => {
    const ch   = roll.querySelector('.letter-top').textContent;
    const span = document.createElement('span');
    span.className = 'letter';
    span.textContent = ch;
    roll.replaceWith(span);
  });
}

/* ── Scatter (canvas particles, rAF physics) ── */
let scatterActive  = false;
let scatterRAF     = null;
let scatterCanvas  = null;
let scatterCtx     = null;
let scatterPtls    = [];
const scatterMouse = { x: -9999, y: -9999 };

function setupScatter() {
  scatterActive = true;
  const titleEl   = document.querySelector('.title');
  const titleRect = titleEl.getBoundingClientRect();
  const stageRect = stageEl.getBoundingClientRect();
  const gap = 4;

  /* Canvas appended to stageEl (position:relative) so z-index 2 is within stage's stacking context
     — sits BELOW .grid-stage (z-index:3) and ABOVE .hero (z-index:2, same level but earlier DOM) */
  scatterCanvas = document.createElement('canvas');
  scatterCanvas.width  = Math.ceil(titleRect.width);
  scatterCanvas.height = Math.ceil(titleRect.height);
  Object.assign(scatterCanvas.style, {
    position: 'absolute',
    left: (titleRect.left - stageRect.left) + 'px',
    top:  (titleRect.top  - stageRect.top)  + 'px',
    pointerEvents: 'none',
    zIndex: '2'
  });
  stageEl.appendChild(scatterCanvas);
  scatterCtx = scatterCanvas.getContext('2d');

  /* Sample pixel shapes of each letter glyph */
  scatterPtls = [];
  const cs = getComputedStyle(titleEl);
  document.querySelectorAll('.title .letter').forEach(letter => {
    const r  = letter.getBoundingClientRect();
    const lx = r.left - titleRect.left;
    const ly = r.top  - titleRect.top;
    const w  = Math.ceil(r.width);
    const h  = Math.ceil(r.height);

    const off = document.createElement('canvas');
    off.width = w; off.height = h;
    const oc  = off.getContext('2d');
    oc.fillStyle = '#000';
    oc.fillRect(0, 0, w, h);
    oc.fillStyle = '#fff';
    oc.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    oc.textAlign = 'center';
    oc.textBaseline = 'middle';
    oc.fillText(letter.textContent, w / 2, h / 2);

    const data = oc.getImageData(0, 0, w, h).data;
    for (let y = 0; y < h; y += gap) {
      for (let x = 0; x < w; x += gap) {
        if (data[(y * w + x) * 4] > 80) {
          const hx = lx + x, hy = ly + y;
          /* Start particles exploded far from home with outward velocity */
          const angle = Math.random() * Math.PI * 2;
          const burst = 120 + Math.random() * 220;
          const speed = 4 + Math.random() * 6;
          scatterPtls.push({
            hx, hy,
            x: hx + Math.cos(angle) * burst,
            y: hy + Math.sin(angle) * burst,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed
          });
        }
      }
    }
  });

  /* Hide DOM title letters — canvas takes over */
  titleEl.style.opacity = '0';

  const ink = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#1c1916';

  /* Mouse tracking relative to canvas origin (= titleRect left/top in viewport coords) */
  titleWrap._scatterMove  = e => {
    scatterMouse.x = e.clientX - titleRect.left;
    scatterMouse.y = e.clientY - titleRect.top;
  };
  titleWrap._scatterLeave = () => { scatterMouse.x = -9999; scatterMouse.y = -9999; };
  titleWrap.addEventListener('mousemove',  titleWrap._scatterMove);
  titleWrap.addEventListener('mouseleave', titleWrap._scatterLeave);

  const r = gap * 0.7;
  const reach = 110;

  const tick = () => {
    if (!scatterActive) return;
    scatterCtx.clearRect(0, 0, scatterCanvas.width, scatterCanvas.height);
    scatterCtx.fillStyle = ink;
    scatterPtls.forEach(p => {
      const dx   = p.x - scatterMouse.x;
      const dy   = p.y - scatterMouse.y;
      const dist = Math.hypot(dx, dy);
      if (dist < reach && dist > 0) {
        const f = ((reach - dist) / reach) ** 2 * 14;
        p.vx += (dx / dist) * f;
        p.vy += (dy / dist) * f;
      }
      /* Spring back to home */
      p.vx += (p.hx - p.x) * 0.09; p.vx *= 0.78; p.x += p.vx;
      p.vy += (p.hy - p.y) * 0.09; p.vy *= 0.78; p.y += p.vy;

      scatterCtx.beginPath();
      scatterCtx.arc(Math.round(p.x), Math.round(p.y), r, 0, Math.PI * 2);
      scatterCtx.fill();
    });
    scatterRAF = requestAnimationFrame(tick);
  };
  scatterRAF = requestAnimationFrame(tick);
}

function teardownScatter() {
  if (!scatterActive) return;
  scatterActive = false;
  cancelAnimationFrame(scatterRAF); scatterRAF = null;
  if (titleWrap._scatterMove)  titleWrap.removeEventListener('mousemove',  titleWrap._scatterMove);
  if (titleWrap._scatterLeave) titleWrap.removeEventListener('mouseleave', titleWrap._scatterLeave);
  if (scatterCanvas) { scatterCanvas.remove(); scatterCanvas = null; }
  document.querySelector('.title').style.opacity = '1';
  scatterPtls = [];
}

/* ============================================================
 * Background effects — dots / lines / off
 * ============================================================ */
let bgEl    = null;
let bgRAF   = null;
let bgType  = 'off';

function teardownBg() {
  if (bgRAF) { cancelAnimationFrame(bgRAF); bgRAF = null; }
  if (bgEl) {
    if (bgEl._cleanup) bgEl._cleanup();
    bgEl.remove(); bgEl = null;
  }
  bgType = 'off';
}

/* Hex background — flat-top hexagons that tessellate perfectly, cursor-reactive */
function setupDotsBg() {
  const canvas = document.createElement('canvas');
  Object.assign(canvas.style, {
    position: 'fixed', inset: '0', width: '100vw', height: '100vh',
    pointerEvents: 'none', zIndex: '0'
  });
  stageEl.before(canvas);
  bgEl = canvas;

  const ctx = canvas.getContext('2d');

  /* Cached ink — recomputed only on theme change via MutationObserver */
  let ink = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#1c1916';
  const themeObserver = new MutationObserver(() => {
    ink = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#1c1916';
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  const mouse = { x: -9999, y: -9999 };
  const onMove = e => { mouse.x = e.clientX; mouse.y = e.clientY; };
  window.addEventListener('mousemove', onMove);

  canvas._cleanup = () => {
    window.removeEventListener('mousemove', onMove);
    window.removeEventListener('resize', onResize);
    themeObserver.disconnect();
  };

  /* Flat-top hexagon tessellation.
     Circumradius R → x-step = 3R/2, y-step = R√3, odd cols offset by R√3/2 */
  const R = 26;
  const cxStep = R * 1.5;
  const cyStep = R * Math.sqrt(3);
  let hexes = [];

  function buildHexes() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    hexes = [];
    let seed = 61823;
    const lcg = () => { seed = (1664525 * seed + 1013904223) >>> 0; return seed / 0xffffffff; };
    for (let col = -1; col * cxStep < canvas.width + R * 2; col++) {
      const yOff = col % 2 !== 0 ? cyStep * 0.5 : 0;
      for (let row = -1; row * cyStep < canvas.height + R * 2; row++) {
        hexes.push({
          cx: col * cxStep,
          cy: row * cyStep + yOff,
          phase: lcg() * Math.PI * 2,
          speed: 0.3 + lcg() * 0.8
        });
      }
    }
  }
  buildHexes();

  let resizeTimer;
  const onResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(buildHexes, 120); };
  window.addEventListener('resize', onResize);

  function hexPath(cx, cy, r) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i;
      i === 0
        ? ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
        : ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
    }
    ctx.closePath();
  }

  const reach = 200;
  const tick = (t) => {
    if (!bgEl) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hexes.forEach(h => {
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.0006 * h.speed + h.phase);
      const dist  = Math.hypot(h.cx - mouse.x, h.cy - mouse.y);
      const prox  = dist < reach ? 1 - dist / reach : 0;

      hexPath(h.cx, h.cy, R * 0.94);

      ctx.strokeStyle = ink;
      ctx.lineWidth   = 0.6 + prox * 0.8;
      ctx.globalAlpha = 0.05 + pulse * 0.04 + prox * 0.1;
      ctx.stroke();

      if (prox > 0.01) {
        ctx.fillStyle   = ink;
        ctx.globalAlpha = prox * prox * 0.3;
        ctx.fill();
      }
    });

    ctx.globalAlpha = 1;
    bgRAF = requestAnimationFrame(tick);
  };
  bgRAF = requestAnimationFrame(tick);
}

/* Lines background — three wavy colored bands, cursor warps the nearest line */
function setupLinesBg() {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 1440 900');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
  Object.assign(svg.style, {
    position: 'fixed', inset: '0', width: '100vw', height: '100vh',
    pointerEvents: 'none', zIndex: '0', opacity: '0.24'
  });
  stageEl.before(svg);
  bgEl = svg;

  const mouse = { x: -9999, y: -9999 };
  const onMove = e => { mouse.x = e.clientX; mouse.y = e.clientY; };
  window.addEventListener('mousemove', onMove);
  svg._cleanup = () => window.removeEventListener('mousemove', onMove);

  const bands = [
    { color: '#e8505b', y: [185, 235], amp: [52, 32], freq: [0.003,  0.004 ], w: ['2.5', '1.2'] },
    { color: '#f9d56e', y: [430, 480], amp: [62, 38], freq: [0.0025, 0.0035], w: ['2.5', '1.2'] },
    { color: '#14b1ab', y: [680, 728], amp: [58, 36], freq: [0.0028, 0.0038], w: ['2.5', '1.2'] },
  ];

  const paths = [];
  bands.forEach(b => {
    b.w.forEach((sw, i) => {
      const path = document.createElementNS(ns, 'path');
      path.setAttribute('stroke', b.color);
      path.setAttribute('stroke-width', sw);
      path.setAttribute('fill', 'none');
      path.setAttribute('opacity', i === 0 ? '1' : '0.4');
      svg.appendChild(path);
      paths.push({ el: path, y0: b.y[i], amp: b.amp[i], freq: b.freq[i] });
    });
  });

  /* Cursor in SVG-space: viewport → viewBox coords */
  const toSvg = () => ({
    x: mouse.x / window.innerWidth  * 1440,
    y: mouse.y / window.innerHeight * 900
  });

  const pts   = 80;
  const sigma = 110; /* horizontal spread of cursor warp in SVG units */

  const tick = (t) => {
    if (!bgEl) return;
    const csr = toSvg();

    paths.forEach(p => {
      let d = `M0,${p.y0}`;
      for (let i = 1; i <= pts; i++) {
        const px   = (i / pts) * 1440;
        const baseY = p.y0 + Math.sin(px * p.freq + t * 0.0007) * p.amp;

        /* Gaussian pull: each point attracts toward cursor Y, weighted by x-proximity */
        const dx      = px - csr.x;
        const gaussX  = Math.exp(-(dx * dx) / (2 * sigma * sigma));
        const maxPull = 55;
        const pull    = gaussX * Math.max(-maxPull, Math.min(maxPull, (csr.y - baseY) * 0.45));

        d += ` L${px.toFixed(1)},${(baseY + pull).toFixed(1)}`;
      }
      p.el.setAttribute('d', d);
    });

    bgRAF = requestAnimationFrame(tick);
  };
  bgRAF = requestAnimationFrame(tick);
}

function setBackground(type) {
  teardownBg();
  bgType = type;
  if (type === 'dots')  setupDotsBg();
  if (type === 'lines') setupLinesBg();
}

/* ============================================================
 * Tile hover modes — shape / lift / off
 * ============================================================ */
function applyTileHover(mode) {
  document.querySelectorAll('.cell').forEach(c => {
    c.classList.remove('tile-hover-shape', 'tile-hover-lift', 'tile-hover-off');
    c.classList.add(`tile-hover-${mode}`);
  });
}

/* ============================================================
 * Sequence ready timer
 * ============================================================ */
let readyTimer;
function armReady() {
  clearTimeout(readyTimer);
  stageEl.classList.remove('ready');
  readyTimer = setTimeout(() => {
    ready = true;
    stageEl.classList.add('ready');
    document.querySelectorAll('.cell').forEach(c => { c.style.transition = ''; });
  }, 6600);
}
armReady();
initBentoMorph();

/* ============================================================
 * Grid drag + momentum
 * ============================================================ */
const gridStageEl = document.getElementById('gridStage');
let gridOffX = 0, gridOffY = 0;
let gridVelX = 0, gridVelY = 0;
let gridDragging = false;
let gridDragMoved = false;
let gridDragStartX = 0, gridDragStartY = 0;
let gridMomRaf = null;

function applyGridTransform() {
  gridStageEl.style.transform = `translate(${gridOffX}px, ${gridOffY}px)`;
}

function startMomentum() {
  cancelAnimationFrame(gridMomRaf);
  function tick() {
    if (Math.abs(gridVelX) < 0.4 && Math.abs(gridVelY) < 0.4) {
      setTimeout(() => { gridDragMoved = false; }, 20);
      return;
    }
    gridVelX *= 0.91;
    gridVelY *= 0.91;
    gridOffX += gridVelX;
    gridOffY += gridVelY;
    applyGridTransform();
    gridMomRaf = requestAnimationFrame(tick);
  }
  gridMomRaf = requestAnimationFrame(tick);
}

// Listen on the whole stage so any drag in the viewport moves the grid
// Exclude toolbar buttons / panels from initiating drag
const DRAG_EXCLUDE = '.top-bar, .bot-bar, .tweaks-panel, .gear, .btn, .theme-pill, .close-btn, .detail-view';

stageEl.addEventListener('mousedown', (e) => {
  if (!ready) return;
  if (e.target.closest(DRAG_EXCLUDE)) return;
  cancelAnimationFrame(gridMomRaf);
  gridDragging = true;
  gridDragMoved = false;
  gridVelX = 0; gridVelY = 0;
  gridDragStartX = e.clientX - gridOffX;
  gridDragStartY = e.clientY - gridOffY;
  stageEl.style.cursor = 'grabbing';
  e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
  if (!gridDragging) return;
  const nx = e.clientX - gridDragStartX;
  const ny = e.clientY - gridDragStartY;
  gridVelX = nx - gridOffX;
  gridVelY = ny - gridOffY;
  if (Math.abs(gridVelX) > 2 || Math.abs(gridVelY) > 2) gridDragMoved = true;
  gridOffX = nx; gridOffY = ny;
  applyGridTransform();
});

document.addEventListener('mouseup', () => {
  if (!gridDragging) return;
  gridDragging = false;
  stageEl.style.cursor = '';
  startMomentum();
});

stageEl.addEventListener('touchstart', (e) => {
  if (!ready) return;
  if (e.target.closest(DRAG_EXCLUDE)) return;
  cancelAnimationFrame(gridMomRaf);
  gridDragging = true;
  gridDragMoved = false;
  gridVelX = 0; gridVelY = 0;
  gridDragStartX = e.touches[0].clientX - gridOffX;
  gridDragStartY = e.touches[0].clientY - gridOffY;
}, { passive: true });

document.addEventListener('touchmove', (e) => {
  if (!gridDragging) return;
  const nx = e.touches[0].clientX - gridDragStartX;
  const ny = e.touches[0].clientY - gridDragStartY;
  gridVelX = nx - gridOffX;
  gridVelY = ny - gridOffY;
  if (Math.abs(gridVelX) > 2 || Math.abs(gridVelY) > 2) gridDragMoved = true;
  gridOffX = nx; gridOffY = ny;
  applyGridTransform();
}, { passive: true });

document.addEventListener('touchend', () => {
  if (!gridDragging) return;
  gridDragging = false;
  startMomentum();
});

/* Trackpad/wheel scroll also moves the grid */
gridStageEl.addEventListener('wheel', (e) => {
  if (!ready) return;
  e.preventDefault();
  cancelAnimationFrame(gridMomRaf);
  gridOffX -= e.deltaX * 0.7;
  gridOffY -= e.deltaY * 0.7;
  applyGridTransform();
}, { passive: false });

/* Freeze title clip-path when reveal animation ends so letters can bounce outside bounds */
document.getElementById('title').addEventListener('animationend', function () {
  this.style.letterSpacing = '.14em';
  this.style.textIndent = '.14em';
  this.style.opacity = '1';
  this.style.clipPath = 'none';
  this.style.animation = 'none';
}, { once: true });

/* ============================================================
 * Portfolio overlay
 * ============================================================ */
const detailView = document.getElementById('detailView');
const dTitle     = document.getElementById('dTitle');
const dSub       = document.getElementById('dSub');
const dMeta      = document.getElementById('dMeta');
const dMain      = document.getElementById('dMain');
const dEyebrow   = document.getElementById('dEyebrow');

function openDetail(item) {
  if (!ready) return;

  let eyebrow = `PROJECT · ${String(item.id).padStart(2, '0')} / ${(item.category || 'STUDIO').toUpperCase()}`;
  if (item.type === 'service') eyebrow = 'STUDIO · SERVICES & PRICING';
  if (item.type === 'about')   eyebrow = 'STUDIO · ABOUT Theresa';

  dEyebrow.textContent = eyebrow;
  dTitle.textContent = item.title;
  dSub.textContent = item.subtitle;

  if (item.type === 'service') {
    dMeta.innerHTML = '<span>Strategy · Architecture · Engineering</span>';
    dMain.innerHTML = renderPricingContent();
  } else if (item.type === 'about') {
    dMeta.innerHTML = '<span>Developer & AI Builder</span><span>Based in Thailand</span>';
    dMain.innerHTML = renderAboutContent();
  } else {
    const techLine1 = (item.tech || []).slice(0, 3).join(' · ');
    const techLine2 = (item.tech || []).length > 3 ? (item.tech || []).slice(3).join(' · ') : '';
    dMeta.innerHTML = `
      <span>${item.category || ''}</span>
      <span>${techLine1}</span>
      ${techLine2 ? `<span>${techLine2}</span>` : ''}
    `;
    dMain.innerHTML = renderProjectContent(item);
    initSlider(detailView);
  }

  detailView.classList.add('active');
  detailView.setAttribute('aria-hidden', 'false');
  detailView.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  document.getElementById('closeBtn').classList.add('visible');

  // Staggered entrances — observe after clip-path transition finishes (0.7s)
  setTimeout(() => {
    const items = Array.from(dMain.children);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, root: detailView });
    items.forEach((el, i) => {
      el.style.transitionDelay = `${i * 65}ms`;
      io.observe(el);
    });
  }, 720);
}

function closeDetail() {
  detailView.classList.remove('active');
  detailView.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  document.getElementById('closeBtn').classList.remove('visible');
}

document.getElementById('closeBtn').addEventListener('click', closeDetail);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && detailView.classList.contains('active')) closeDetail();
});

/* ============================================================
 * Content renderers
 * ============================================================ */
function renderSlider(item) {
  const media = item.media || (item.image ? [item.image] : []);
  if (!media.length) return '';

  const slides = media.map((src, i) => {
    const isVideo = /\.(mp4|webm|mov)$/i.test(src);
    const active = i === 0 ? ' active' : '';
    if (isVideo) {
      return `<div class="slider-slide${active}"><video src="${src}" muted loop playsinline preload="metadata"></video></div>`;
    }
    return `<div class="slider-slide${active}"><img src="${src}" alt="${item.title} — ${i + 1}" /></div>`;
  }).join('');

  const dots = media.length > 1
    ? `<div class="slider-dots">${media.map((_, i) =>
        `<button class="slider-dot${i === 0 ? ' active' : ''}" data-index="${i}"></button>`
      ).join('')}</div>`
    : '';

  const arrows = media.length > 1
    ? `<button class="slider-arrow slider-prev" aria-label="Previous">&#8592;</button>
       <button class="slider-arrow slider-next" aria-label="Next">&#8594;</button>`
    : '';

  return `<div class="detail-slider" data-current="0" data-total="${media.length}">
    <div class="slider-track">${slides}</div>
    ${arrows}${dots}
  </div>`;
}

function initSlider(container) {
  const slider = container.querySelector('.detail-slider');
  if (!slider || parseInt(slider.dataset.total) <= 1) return;

  let current = 0;
  const total = parseInt(slider.dataset.total);
  const slides = slider.querySelectorAll('.slider-slide');
  const dots = slider.querySelectorAll('.slider-dot');

  const goTo = (idx) => {
    const prev = slides[current];
    prev.classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');
    const prevVid = prev.querySelector('video');
    if (prevVid) prevVid.pause();

    current = (idx + total) % total;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
    const nextVid = slides[current].querySelector('video');
    if (nextVid) nextVid.play().catch(() => {});
  };

  slider.querySelector('.slider-prev').addEventListener('click', (e) => { e.stopPropagation(); goTo(current - 1); });
  slider.querySelector('.slider-next').addEventListener('click', (e) => { e.stopPropagation(); goTo(current + 1); });
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => { e.stopPropagation(); goTo(parseInt(dot.dataset.index)); });
  });

  let touchStartX = 0;
  slider.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goTo(dx < 0 ? current + 1 : current - 1);
  });

  const firstVid = slides[0].querySelector('video');
  if (firstVid) firstVid.play().catch(() => {});
}

function renderProjectContent(item) {
  const results = item.results || [];
  const tech = item.tech || [];
  const link = item.link || null;

  return `
    ${renderSlider(item)}
    <h3>Overview</h3>
    <p class="section-text">${item.description}</p>

    ${item.challenge ? `<h3>The Challenge</h3><p class="section-text">${item.challenge}</p>` : ''}
    ${item.solution  ? `<h3>The Approach</h3><p class="section-text">${item.solution}</p>`  : ''}

    ${results.length ? `
      <h3>Outcomes</h3>
      <ul class="results-list">
        ${results.map(r => `<li>${r}</li>`).join('')}
      </ul>
    ` : ''}

    ${tech.length ? `
      <h3>Stack</h3>
      <div class="tech-list">${tech.map(t => `<span>${t}</span>`).join('')}</div>
    ` : ''}

    ${link ? `
      <a class="detail-cta" href="${link}" target="${link.startsWith('mailto') ? '_self' : '_blank'}" rel="noopener">
        ${link.startsWith('mailto') ? 'Start a project →' : 'View project →'}
      </a>
    ` : ''}
  `;
}

function renderPricingContent() {
  return `
    <h3>About</h3>
    <p class="section-text">I'm a full-stack designer and engineer. I work at the intersection of strategy, design, and code — building digital products that make money for founders and leaders who think differently.</p>
    <p class="section-text">I don't separate thinking from making. Strategy informs design. Design informs code. The best products come from one person holding the whole vision — not handing it off between specialists.</p>
    <p class="section-text">My background is fashion and design. That shapes how I approach problems: aesthetics matter, but only when they serve the business. I've built AI-powered pattern generation systems (Ntoma), editorial platforms with custom backends (CAN Architecture), legal intelligence tools (AICE), and avant-garde fashion brands (Moor Noir). Everything starts with asking: what problem are we actually solving?</p>
    <p class="section-text">React, Next.js, Node.js, Python, FastAPI, Firebase. GPT-4, Claude, LangChain. SEO, analytics, conversion. I ship production code fast. I don't do scope creep.</p>
    <p class="section-text">Based in Thailand. Work with teams globally. Always thinking about the next product, the next problem, the next business waiting to be built.</p>

    <h3>Services & Pricing</h3>
    <p class="section-text" style="font-size:15px;color:var(--ink-dim);">I build digital products. From landing pages to full SaaS platforms. Strategy first, code second.</p>

    <div class="pricing-container">
      <div class="pricing-card">
        <div class="pricing-title">Foundation</div>
        <div class="pricing-price"><span>€</span>2,500–3,500</div>
        <p class="pricing-description">Website or landing page + CMS backend. You manage content. 3–4 weeks.</p>
        <ul class="pricing-features">
          <li>Website or Landing Page</li>
          <li>Editable Backend</li>
          <li>SEO Optimized</li>
          <li>Mobile-First Design</li>
        </ul>
        <a href="mailto:akumalis@protonmail.com?subject=Foundation Project Inquiry" class="pricing-cta-btn">Start Foundation</a>
      </div>
      <div class="pricing-card featured">
        <div class="pricing-badge">Most Popular</div>
        <div class="pricing-title">System</div>
        <div class="pricing-price"><span>€</span>5,500–8,500</div>
        <p class="pricing-description">Full web app or product with custom features + AI. 8–12 weeks.</p>
        <ul class="pricing-features">
          <li>Web App or SaaS Product</li>
          <li>Admin Dashboard + Database</li>
          <li>1 Custom AI Feature</li>
          <li>Advanced SEO + Analytics</li>
        </ul>
        <a href="mailto:akumalis@protonmail.com?subject=System Project Inquiry" class="pricing-cta-btn">Start System</a>
      </div>
      <div class="pricing-card">
        <div class="pricing-title">Authority</div>
        <div class="pricing-price"><span>€</span>12,000–18,000</div>
        <p class="pricing-description">Market-leading product. Advanced AI, immersive design, full ecosystem. 12–16 weeks.</p>
        <ul class="pricing-features">
          <li>Complete Product System</li>
          <li>Advanced AI Integration</li>
          <li>Custom Design (Three.js optional)</li>
          <li>Launch + Ongoing Support</li>
        </ul>
        <a href="mailto:akumalis@protonmail.com?subject=Authority Project Inquiry" class="pricing-cta-btn">Start Authority</a>
      </div>
    </div>

    <div class="retainer-card">
      <div class="retainer-header">
        <div class="pricing-title">Retainer Partnership</div>
        <div class="pricing-price" style="font-size:28px;margin-bottom:0;"><span>€</span>3,500–6,500<span style="font-size:14px;color:var(--ink-dim);"> / month</span></div>
      </div>
      <p class="pricing-description">For founders scaling. I work 15–25 hours/week: quarterly positioning refinement, feature direction, design reviews, new product exploration, and team mentoring.</p>
    </div>

    <h3>Why This Works</h3>
    <div class="why-grid">
      <div class="why-card">
        <div class="why-card-icon">01</div>
        <div class="why-card-title">Strategy First</div>
        <div class="why-card-text">I solve the business problem. Code is the tool, not the goal.</div>
      </div>
      <div class="why-card">
        <div class="why-card-icon">02</div>
        <div class="why-card-title">AI-Native</div>
        <div class="why-card-text">GPT-4, Claude, LangChain. Intelligence that compounds your business.</div>
      </div>
      <div class="why-card">
        <div class="why-card-icon">03</div>
        <div class="why-card-title">Full-Stack Ownership</div>
        <div class="why-card-text">React, Node.js, Python, Firebase. No handoffs. One vision end-to-end.</div>
      </div>
      <div class="why-card">
        <div class="why-card-icon">04</div>
        <div class="why-card-title">You Ship Fast</div>
        <div class="why-card-text">Production-ready in weeks. Not months. Not fancy for fancy's sake.</div>
      </div>
    </div>

    <div class="big-cta">
      <p style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-mute);margin-bottom:20px;">Ready to talk?</p>
      <a href="mailto:akumalis@protonmail.com?subject=Project Inquiry" class="big-cta-btn">Start a Project →</a>
      <p style="font-size:11px;color:var(--ink-mute);margin-top:16px;letter-spacing:.06em;">Response within 24 hours. Based in Thailand, work with teams globally.</p>
    </div>
  `;
}

function renderAboutContent() {
  return `
    <h3>Who</h3>
    <p class="section-text" style="font-size:20px;">Theresa Gyamfuwaa — full-stack developer and AI builder based in Thailand. I don't build websites. I build systems that make clients money.</p>

    <h3>What I believe</h3>
    <p class="section-text">Most digital work fails not because it looks wrong — but because it's built without strategic clarity. Every system I build starts with understanding the business problem first. Code is the last step.</p>

    <h3>What I build</h3>
    <p class="section-text">Full-stack web applications with React, Next.js, and Node.js. AI pipelines using GPT-4, LangChain, and custom agents. Automation systems that replace manual processes. Platforms that connect businesses with their customers.</p>

    <h3>Stack</h3>
    <div class="tech-list">
      <span>React</span><span>Next.js</span><span>Node.js</span><span>Python</span>
      <span>FastAPI</span><span>GPT-4 & LangChain</span><span>Firebase</span><span>CrewAI</span>
    </div>

    <h3>Currently</h3>
    <p class="section-text">Based in Thailand. Accepting new projects. I work with founders, agencies, and businesses who are serious about what they build. Response within 24 hours.</p>

    <div class="about-cta-row">
      <a href="mailto:akumalis@protonmail.com" class="cta-button">Start a Project</a>
      <a href="resume_TG.html" target="_blank" class="cta-button cta-button--outline">View Resume</a>
    </div>
  `;
}

/* ============================================================
 * Tweaks panel
 * ============================================================ */
const tweaksPanel = document.getElementById('tweaksPanel');
const gearBtn     = document.getElementById('gearBtn');
gearBtn.addEventListener('click', () => tweaksPanel.classList.toggle('open'));
document.getElementById('tweaksClose').addEventListener('click', () => tweaksPanel.classList.remove('open'));

document.querySelectorAll('.tweak-seg').forEach(seg => {
  const key = seg.dataset.tweak;
  seg.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      seg.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      TWEAKS[key] = btn.dataset.value;
      applyTweak(key, btn.dataset.value);
    });
  });
});

function applyTweak(key, value) {
  if (key === 'hoverMode') {
    stopMorphLoop();
    teardownScatter();
    applyHoverMode(value);
  } else if (key === 'theme') {
    const t = value === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('akumali-theme', t);
    const lbl = document.getElementById('themePillLabel');
    if (lbl) lbl.textContent = t === 'dark' ? 'DARK' : 'LIGHT';
  } else if (key === 'tileHover') {
    applyTileHover(value);
  } else if (key === 'background') {
    setBackground(value);
  }
}

/* Sync theme toggle button to stored preference */
(function () {
  const stored = localStorage.getItem('akumali-theme') || 'light';
  if (stored === 'dark') {
    const seg = document.querySelector('[data-tweak="theme"]');
    if (seg) {
      seg.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      const darkBtn = seg.querySelector('[data-value="dark"]');
      if (darkBtn) darkBtn.classList.add('active');
    }
  }
})();

/* Pill toggle */
const themePill = document.getElementById('themePill');
const themePillLabel = document.getElementById('themePillLabel');
if (themePill) {
  const storedTheme = localStorage.getItem('akumali-theme') || 'light';
  if (themePillLabel) themePillLabel.textContent = storedTheme === 'dark' ? 'DARK' : 'LIGHT';
  TWEAKS.theme = storedTheme;

  themePill.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('akumali-theme', next);
    if (themePillLabel) themePillLabel.textContent = isDark ? 'LIGHT' : 'DARK';
    TWEAKS.theme = next;
    const seg = document.querySelector('[data-tweak="theme"]');
    if (seg) {
      seg.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      const btn = seg.querySelector(`[data-value="${next}"]`);
      if (btn) btn.classList.add('active');
    }
  });
}

/* Initial apply */
applyHoverMode(TWEAKS.hoverMode);
applyTileHover(TWEAKS.tileHover);

/* ============================================================
 * Replay / Skip
 * ============================================================ */
function replay() {
  clearBentoTimers();
  cancelAnimationFrame(gridMomRaf);
  gridOffX = 0; gridOffY = 0; gridVelX = 0; gridVelY = 0;
  gridStageEl.style.transform = '';
  ready = false;
  stageEl.classList.remove('ready');
  offTileHover();
  stopMorphLoop();

  const title = document.querySelector('.title');
  title.style.animation = 'none';
  title.style.clipPath = '';
  title.style.letterSpacing = '';
  title.style.textIndent = '';
  title.style.opacity = '';
  void title.offsetWidth;
  title.style.animation = '';

  document.querySelectorAll('.roles li').forEach(li => {
    li.style.animation = 'none'; void li.offsetWidth; li.style.animation = '';
  });

  const oldRect = document.querySelector('.fill-rect');
  const newRect = oldRect.cloneNode(true);
  oldRect.replaceWith(newRect);

  renderGrid();
  applyHoverMode(TWEAKS.hoverMode);
  applyTileHover(TWEAKS.tileHover);

  document.querySelectorAll('.top-bar, .bot-bar, .grid-meta, .controls, .gear')
    .forEach(el => { el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; });

  armReady();
  initBentoMorph();
}

document.getElementById('replayBtn').addEventListener('click', replay);
document.getElementById('skipBtn').addEventListener('click', () => {
  clearBentoTimers();
  clearTimeout(readyTimer);

  document.querySelectorAll('.title, .roles li, .top-bar, .bot-bar, .grid-meta, .controls, .gear')
    .forEach(el => {
      el.style.animation = 'none';
      el.style.opacity = '1';
      el.style.filter = '';
      el.style.transform = '';
      el.style.clipPath = '';
    });

  const titleEl = document.querySelector('.title');
  titleEl.style.clipPath = 'none';
  titleEl.style.letterSpacing = '.14em';
  titleEl.style.textIndent = '.14em';

  const rect = document.querySelector('.fill-rect');
  rect.style.animation = 'none'; rect.style.opacity = '0';

  const { scale: skipScale } = getBentoConfig();
  document.querySelectorAll('.cell').forEach(c => {
    const i = parseInt(c.dataset.i);
    c.style.animation = 'none';
    c.style.transition = '';
    if (i === 4) { c.style.opacity = '0'; return; }
    const layout = BENTO_LAYOUTS[i];
    c.style.opacity = '1';
    c.style.transform = `translate(${layout.x * skipScale}px, ${layout.y * skipScale}px)`;
    c.style.width = `${layout.w * skipScale}px`;
    c.style.height = `${layout.h * skipScale}px`;
    c.classList.add('revealed');
  });

  document.querySelectorAll('.cell-img').forEach(ci => {
    ci.style.animation = 'none';
    ci.style.opacity = '1';
    ci.style.transform = 'scale(1)';
    ci.style.filter = 'saturate(.65) contrast(1.05) brightness(.95)';
  });

  ready = true;
  stageEl.classList.add('ready');
});

/* ============================================================
 * Custom cursor — brass ring + dot, only on fine-pointer devices
 * ============================================================ */
if (window.matchMedia('(pointer: fine)').matches) {
  const cursorEl = document.createElement('div');
  cursorEl.className = 'custom-cursor';
  cursorEl.innerHTML = '<div class="custom-cursor-dot"></div>';
  document.body.appendChild(cursorEl);

  let aimX = 0, aimY = 0, curX = 0, curY = 0;

  window.addEventListener('mousemove', e => { aimX = e.clientX; aimY = e.clientY; });

  (function cursorLoop() {
    curX += (aimX - curX) * 0.14;
    curY += (aimY - curY) * 0.14;
    cursorEl.style.transform = `translate(calc(${curX}px - 50%), calc(${curY}px - 50%))`;
    requestAnimationFrame(cursorLoop);
  })();

  const INTERACTIVE = 'a, button, .cell, [role="button"]';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(INTERACTIVE)) cursorEl.classList.add('hovering');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(INTERACTIVE)) cursorEl.classList.remove('hovering');
  });

  /* Hide while over detail view scrollbar area */
  document.addEventListener('mouseleave', () => cursorEl.classList.add('hidden'));
  document.addEventListener('mouseenter', () => cursorEl.classList.remove('hidden'));
}
