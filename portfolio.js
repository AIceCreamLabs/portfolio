/* ============================================================
 * AKUMALI · STUDIO — Sticky Grid Portfolio
 * ============================================================ */

/* ─── Data ───
   Grid tiles: indices 0–5 (left col: 0,1,2 / right col: 3,4,5)
   Center panel buttons access: index 6 (Hire Me), index 7 (About)
   ─────────── */
const PORTFOLIO_ITEMS = [
  /* LEFT COLUMN — indices 0, 1, 2 */
  {
    id: 1,
    title: 'Ntoma',
    subtitle: 'AI-Powered Garment Pattern Generation',
    category: 'AI Product',
    image: 'ntoma.png',
    media: ['ntoma4.mp4', 'ntoma3.png', 'ntoma2.png', 'ntoma1.png', 'ntoma.png'],
    type: 'project',
    description: 'AI-powered garment pattern generation. Upload any photo, get a production-ready sewing pattern with flat drawings, virtual fit preview, and DXF factory export.',
    challenge: 'Fashion designers and home sewers spend hours or hundreds of euros getting patterns made from reference photos. There was no affordable, fast alternative.',
    solution: 'Built a full AI pipeline: computer vision garment analysis, technical flat drawing generation, mathematically correct pattern pieces, virtual fit on body silhouette, and multi-size grading — all from a single photo.',
    results: [
      'Photo → pattern in under 2 minutes',
      'XS–XL grading automatic',
      'DXF export for factory production',
      'Assembly guide included',
      'Early access waitlist live',
    ],
    tech: ['React', 'FastAPI', 'Python', 'OpenAI Vision', 'Vercel'],
    link: 'https://ntoma.vercel.app'
  },
  {
    id: 3,
    title: 'CAN Architecture',
    subtitle: 'Where architects post. Where clients discover.',
    category: 'Editorial Platform',
    image: 'can.png',
    media: ['can-demo.mp4', 'can.png'],
    type: 'project',
    description: 'A full web app for a French architecture studio — custom backend, project management without code, client-facing portfolio with filtering by type, scale, location, and year.',
    challenge: 'Architects have incredible work, but clients don\'t see it. Building a portfolio site takes months and costs €5k–15k. Most architects never build one.',
    solution: 'Full web app: custom backend they control completely, add/edit/delete projects with no code, filtering by type and scale, fully SEO optimized. 3 weeks from brief to live.',
    results: ['3 weeks from brief to live', '€2,500 investment', 'Now getting inbound inquiries', 'Zero maintenance required on client end'],
    tech: ['React', 'Next.js', 'Node.js', 'Firebase', 'Firestore', 'Vercel'],
    link: 'https://can-yinka-muu8xna3i-aicecreamlabs-6519s-projects.vercel.app/'
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

  /* RIGHT COLUMN — indices 3, 4, 5 */
  {
    id: 4,
    title: 'AICE Legal',
    subtitle: 'Legal Intelligence Tool',
    category: 'AI Product',
    image: 'aice.png',
    media: ['aicelegal.mp4', 'aicelegal3.png', 'aicelegal2.png', 'aicelegal1.png', 'aice_logo.png', 'aice.png'],
    type: 'project',
    description: 'Intelligent contract analysis system: upload a contract, Claude analyzes it in real-time, flags risks and non-standard terms, provides legal context, exports a summary report.',
    challenge: 'Legal teams spend hours reviewing contracts for risks, missing clauses, and non-standard terms. It\'s repetitive work. It\'s error-prone.',
    solution: 'Upload a contract (PDF or text). Claude analyzes it in real-time — flags risks, missing clauses, non-standard terms — provides legal context and recommendations, exports a summary report.',
    results: ['60% reduction in contract review time', 'No more missed risks', '6 weeks MVP to production', 'Processing 100+ documents/week'],
    tech: ['React', 'Node.js', 'Claude (Anthropic API)', 'pdfjs', 'Vercel'],
    link: 'mailto:gyamfuwaa@protonmail.com'
  },
  {
    id: 5,
    title: 'GiGZo',
    subtitle: 'Services Marketplace',
    category: 'Web App',
    image: 'gigzo.png',
    media: ['gigzo.mp4', 'gigzo5.png', 'gigzo3.png', 'gigzo2.png', 'gigzo1.png', 'gigzo.png'],
    type: 'project',
    description: 'Domestic services marketplace for expats in Thailand. Connects customers with verified cleaning, laundry, and household service providers.',
    challenge: 'Expats in Thailand had no reliable, English-language platform to find and book domestic services. Providers had no digital booking system.',
    solution: 'Built a full-stack marketplace with provider onboarding, booking system, payment integration, and AI-powered customer support agents using CrewAI and LangChain.',
    results: ['Full marketplace MVP built', 'Booking + payment integration', 'AI customer onboarding agents', 'Provider management system'],
    tech: ['React', 'Node.js', 'Firebase', 'CrewAI', 'LangChain', 'Stripe'],
    link: 'mailto:gyamfuwaa@protonmail.com'
  },
  {
    id: 9,
    title: 'Atelier',
    subtitle: 'Studio Practice',
    category: 'Studio',
    image: 'studio.jpeg',
    media: ['studio.mp4', 'studio5.png', 'studio4.png', 'studio3.png', 'studio2.png', 'studio1.png'],
    type: 'project',
    description: 'A focused practice — one set of hands across strategy, design, and engineering. End-to-end ownership of every project. No hand-offs. No translation loss.',
    challenge: 'When you hire separately: designer makes something beautiful, developer says it won\'t scale, strategist makes a plan, and nobody\'s reading the same document.',
    solution: 'One person, one vision, one brain. Strategy informs design informs code. I take 1–2 projects at a time. Not a limitation — a feature.',
    results: ['Solo-led — you get the maker directly', 'Strategy + design + code as one vision', 'Selected clients only', 'Ships in weeks, not quarters'],
    tech: ['Strategy', 'Design', 'Engineering'],
    link: 'mailto:gyamfuwaa@protonmail.com'
  },

  /* CENTER BUTTON PANELS — index 6 (Hire Me), index 7 (About) */
  {
    id: 6,
    title: 'Hire Me',
    subtitle: 'Services & Pricing',
    category: 'Studio',
    image: 'hire-me.png',
    type: 'service',
    description: 'I build digital products. From landing pages to full SaaS platforms. Strategy first, code second.',
    challenge: 'Most studios sell hours. I sell systems that make money. You don\'t pay for effort. You pay for results.',
    solution: 'Strategy-first engagements. Every project begins with your business problem — then architecture, then code. One vision from start to finish.',
    results: ['Foundation — €2,500–3,500 / 3–4 weeks', 'System — €5,500–8,500 / 8–12 weeks', 'Authority — €12,000–18,000 / 12–16 weeks', 'Retainer — €3,500–6,500/month'],
    tech: ['Strategy', 'Architecture', 'Engineering'],
    link: 'mailto:gyamfuwaa@protonmail.com?subject=Project Inquiry'
  },
  {
    id: 7,
    title: 'Theresa Gyamfuwaa',
    subtitle: 'Developer & AI Builder',
    category: 'Studio',
    image: 'about-me.webp',
    type: 'about',
    description: 'I\'m Dutch-Ghanaian, based in Thailand, raising a daughter as a solo parent. My background is fashion and design — which means I know that aesthetics matter, but only when they serve the business.',
    challenge: 'Most digital work fails not because it looks wrong — but because it\'s built without strategic clarity. Most founders hire a designer and a developer separately. They misalign.',
    solution: 'I think like a strategist, design like someone from fashion, and code like someone who ships. I own the full stack: React, Next.js, Node.js, Python, FastAPI, Firebase. I integrate GPT-4 and Claude into products as features, not afterthoughts.',
    results: ['Based in Thailand', 'Available worldwide', 'Response within 24h', 'Selected clients only — 1–2 projects at a time'],
    tech: ['React', 'Next.js', 'Python', 'FastAPI', 'Firebase', 'GPT-4', 'Claude'],
    link: 'mailto:gyamfuwaa@protonmail.com'
  }
];

/* ─── Theme ─── */
function initTheme() {
  const btn = document.getElementById('themeBtn');
  const update = (t) => {
    document.documentElement.setAttribute('data-theme', t);
    btn.textContent = t === 'dark' ? 'DARK' : 'LIGHT';
    localStorage.setItem('akumali-theme', t);
  };
  update(localStorage.getItem('akumali-theme') || 'light');
  btn.addEventListener('click', () => {
    update(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
}

/* ─── Grid images — 6 tiles, one per project ─── */
const GRID_IMAGES = [
  { src: 'ntoma.png',     projectIdx: 0 },
  { src: 'can.png',       projectIdx: 1 },
  { src: 'psych.png',     projectIdx: 2 },
  { src: 'aice.png',      projectIdx: 3 },
  { src: 'gigzo.png',     projectIdx: 4 },
  { src: 'studio.jpeg',   projectIdx: 5 },
];

/* ─── Grid render — 6-item 3-column grid like tutorial ─── */
function renderGrid() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = '';

  GRID_IMAGES.forEach((img, i) => {
    const item = PORTFOLIO_ITEMS[img.projectIdx];
    const num = String(i + 1).padStart(2, '0');
    const li = document.createElement('li');
    li.className = 'gallery__item';
    li.dataset.index = i;
    li.dataset.project = img.projectIdx;
    li.innerHTML = `
      <img class="gallery__image" src="${img.src}" alt="${item.title}" loading="lazy" />
    `;
    grid.appendChild(li);
  });
}

/* ─── Helpers ─── */
function lerp(a, b, t) { return a + (b - a) * t; }
function eio(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

/* ─── Sticky grid animation ─── */
class StickyGrid {
  constructor() {
    this.block       = document.getElementById('gridBlock');
    this.content     = this.block.querySelector('.content');
    this.subheading  = this.block.querySelector('.content__subheading');
    this.description = this.block.querySelector('.content__description');
    this.btn         = this.block.querySelector('.content__btn');
    this.grid        = document.getElementById('galleryGrid');
    this.items       = this.grid.querySelectorAll('.gallery__item');
    this.groupItemsByColumn();
    this.initContent();
    this.animate();
  }

  groupItemsByColumn() {
    this.numColumns = 3;
    this.columns = Array.from({ length: this.numColumns }, () => []);
    this.items.forEach((item, i) => { this.columns[i % this.numColumns].push(item); });
  }

  initContent() {
    gsap.set([this.subheading, this.description, this.btn], { opacity: 0, pointerEvents: 'none' });
  }

  animate() {
    const wh = window.innerHeight;
    const dy = wh - (wh - this.grid.offsetHeight) / 2;

    const gridTl = gsap.timeline();
    this.columns.forEach((col, ci) => {
      const fromTop = ci % 2 === 0;
      gridTl.from(col, {
        y: dy * (fromTop ? -1 : 1),
        stagger: { each: 0.06, from: fromTop ? 'end' : 'start' },
        ease: 'power1.inOut',
      }, 'grid-reveal');
    });

    const zoomTl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.inOut' } });
    zoomTl.to(this.grid, { scale: 2.05 });
    zoomTl.to(this.columns[0], { xPercent: -40 }, '<');
    zoomTl.to(this.columns[2], { xPercent: 40 }, '<');
    zoomTl.to(this.columns[1], {
      yPercent: (i) => (i < Math.floor(this.columns[1].length / 2) ? -1 : 1) * 40,
      duration: 0.5,
      ease: 'power1.inOut',
    }, '-=0.5');

    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: this.block,
        start: 'top 25%',
        end: 'bottom bottom',
        scrub: true,
      },
    });
    mainTl
      .add(gridTl)
      .add(zoomTl, '-=0.6')
      .add(() => this.toggleContent(mainTl.scrollTrigger.direction === 1), '-=0.32');
  }

  toggleContent(isVisible) {
    if (!this.subheading || !this.description || !this.btn) return;
    gsap.timeline({ defaults: { overwrite: true } })
      .to([this.subheading, this.description, this.btn], {
        opacity: isVisible ? 1 : 0,
        duration: 0.4,
        ease: `power1.${isVisible ? 'inOut' : 'out'}`,
        pointerEvents: isVisible ? 'all' : 'none',
      });
  }
}



/* ─── Lenis ─── */
let lenis;
function lenisRaf(time) { if (lenis) lenis.raf(time * 1000); }
function initLenis() {
  lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 1.4 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(lenisRaf);
}
function destroyLenis() {
  if (!lenis) return;
  gsap.ticker.remove(lenisRaf);
  lenis.destroy();
  lenis = null;
}

/* ─── Detail panel ─── */
let isMobile = false;
let detailObserver = null;
let detailProgressOff = null;
let formationsScrollOff = null;
let formationVideoObs = null;

/*
 * Two-group formation layout (OnScrollLayoutFormations style):
 *   F0 — scattered editorial across full viewport
 *   F1 — group A forms top row, group B forms bottom row, text reads in the gap
 *   F2 — all items collapse into a clean grid
 *
 * Videos are shown in the detail hero; only still images go into formations.
 */
function getShowcaseFormations(vw, vh, n) {
  const g = 12;

  // F0: scattered, editorial feel
  const baseF0 = [
    { x: vw*0.03, y: vh*0.04, w: vw*0.38, h: vh*0.44 },
    { x: vw*0.44, y: vh*0.02, w: vw*0.22, h: vh*0.27 },
    { x: vw*0.68, y: vh*0.07, w: vw*0.28, h: vh*0.38 },
    { x: vw*0.04, y: vh*0.52, w: vw*0.26, h: vh*0.42 },
    { x: vw*0.32, y: vh*0.60, w: vw*0.37, h: vh*0.33 },
    { x: vw*0.71, y: vh*0.52, w: vw*0.26, h: vh*0.42 },
  ].slice(0, n);

  // F1: two horizontal rows with a text band in the middle (~18% of vh)
  const topCount = Math.ceil(n / 2);
  const botCount = n - topCount;
  const rowH     = vh * 0.38;
  const topY     = vh * 0.04;
  const botY     = vh * 0.60;
  const f1 = [];
  const topColW = (vw - g * (topCount + 1)) / Math.max(topCount, 1);
  for (let i = 0; i < topCount; i++) {
    f1.push({ x: g + i * (topColW + g), y: topY, w: topColW, h: rowH });
  }
  const botColW = botCount > 0 ? (vw - g * (botCount + 1)) / botCount : 0;
  for (let i = 0; i < botCount; i++) {
    f1.push({ x: g + i * (botColW + g), y: botY, w: botColW, h: rowH });
  }

  // F2: clean grid (3 columns, wrapping rows)
  const cols = Math.min(3, n);
  const rows = Math.ceil(n / cols);
  const cw   = (vw - g * (cols + 1)) / cols;
  const rh   = (vh - g * (rows + 1)) / rows;
  const f2   = Array.from({ length: n }, (_, i) => ({
    x: g + (i % cols) * (cw + g),
    y: g + Math.floor(i / cols) * (rh + g),
    w: cw, h: rh,
  }));

  return [baseF0, f1, f2];
}

function applyFormation(els, formations, progress) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const numSegs = formations.length - 1;
  const segLen  = 1 / numSegs;
  els.forEach((el, i) => {
    const fi = Math.min(Math.floor(progress / segLen), numSegs - 1);
    const t  = eio(Math.max(0, Math.min(1, (progress - fi * segLen) / segLen)));
    const a  = formations[fi][i];
    const b  = formations[fi + 1][i];
    if (!a || !b) return;
    gsap.set(el, {
      x:      lerp(a.x, b.x, t),
      y:      lerp(a.y, b.y, t),
      scaleX: lerp(a.w, b.w, t) / vw,
      scaleY: lerp(a.h, b.h, t) / vh,
    });
  });
}

function populateFormations(item) {
  const wrapper = document.getElementById('detailFormationsWrapper');
  const stage   = document.getElementById('detailFormationsStage');
  stage.innerHTML = '';
  if (formationsScrollOff) { formationsScrollOff(); formationsScrollOff = null; }
  if (formationVideoObs)   { formationVideoObs.disconnect(); formationVideoObs = null; }

  // Videos go to the hero — only still images in formations
  const images = (item.media || [])
    .filter(s => !s.endsWith('.mp4') && !s.endsWith('.webm'))
    .slice(0, 6);

  if (!images.length || isMobile) { wrapper.classList.add('is-empty'); return; }
  wrapper.classList.remove('is-empty');

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const formations = getShowcaseFormations(vw, vh, images.length);

  // Build image elements
  const els = images.map((src, i) => {
    const wrap = document.createElement('div');
    wrap.className = 'detail__formations-item';
    const img = document.createElement('img');
    img.src = src; img.alt = item.title;
    img.loading = i < 3 ? 'eager' : 'lazy';
    wrap.appendChild(img);
    stage.appendChild(wrap);
    return wrap;
  });

  // Mid-band text — appears between the two groups at F1
  const midText = document.createElement('div');
  midText.className = 'detail__showcase-mid';
  // Vertically centered in the gap between rows (42%–58% of viewport)
  gsap.set(midText, { top: '42%', opacity: 0 });
  midText.innerHTML = `
    <span class="detail__showcase-eyebrow">${item.category || ''}</span>
    <p class="detail__showcase-subtitle">${item.subtitle || ''}</p>
  `;
  stage.appendChild(midText);

  // Initial positions at F0
  applyFormation(els, formations, 0);

  // Text visibility: fades in as F1 forms, fades out as F2 forms
  // progress 0.35→0.50: fade in | 0.50→0.65: hold | 0.65→0.80: fade out
  function textOpacity(p) {
    if (p < 0.35) return 0;
    if (p < 0.50) return (p - 0.35) / 0.15;
    if (p < 0.65) return 1;
    if (p < 0.80) return 1 - (p - 0.65) / 0.15;
    return 0;
  }

  const detail = document.getElementById('detail');
  const onScroll = () => {
    const wrapTop = wrapper.offsetTop;
    const total   = wrapper.offsetHeight - vh;
    const p = total > 0 ? Math.max(0, Math.min(1, (detail.scrollTop - wrapTop) / total)) : 0;
    applyFormation(els, formations, p);
    gsap.set(midText, { opacity: textOpacity(p) });
  };
  detail.addEventListener('scroll', onScroll, { passive: true });
  formationsScrollOff = () => detail.removeEventListener('scroll', onScroll);
}

function initSectionReveals(detailEl) {
  if (detailObserver) { detailObserver.disconnect(); detailObserver = null; }
  const sections = detailEl.querySelectorAll('.detail__section');
  detailObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => e.target.classList.toggle('is-visible', e.isIntersecting));
  }, { root: detailEl, rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
  sections.forEach(s => detailObserver.observe(s));
}

function initDetailProgress(detailEl) {
  if (detailProgressOff) { detailProgressOff(); detailProgressOff = null; }
  const bar = document.getElementById('detailProgress');
  bar.style.width = '0%';
  const onScroll = () => {
    const max = detailEl.scrollHeight - detailEl.clientHeight;
    bar.style.width = (max > 0 ? detailEl.scrollTop / max * 100 : 0) + '%';
  };
  detailEl.addEventListener('scroll', onScroll, { passive: true });
  detailProgressOff = () => detailEl.removeEventListener('scroll', onScroll);
}

function buildSections(item) {
  if (item.type === 'about') {
    return `
      <section class="detail__section">
        <p class="detail__lede">${item.description}</p>
      </section>
      <section class="detail__section detail__split">
        <div>
          <span class="detail__label">THE PROBLEM WITH MOST HIRES</span>
          <p class="detail__text">${item.challenge}</p>
        </div>
        <div>
          <span class="detail__label">HOW I WORK</span>
          <p class="detail__text">${item.solution}</p>
        </div>
      </section>
      <section class="detail__section detail__case-footer">
        <div class="detail__tags">${item.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <a class="detail__link" href="${item.link}">Get in touch →</a>
      </section>
    `;
  }

  if (item.type === 'service') {
    return `
      <section class="detail__section">
        <div class="detail__heading">Foundation</div>
        <div class="detail__price">€2,500–3,500</div>
        <div class="detail__time">3–4 weeks</div>
        <p class="detail__text">Website or landing page. SEO optimized. Mobile-first. You own the code. 30 days of support.</p>
      </section>
      <section class="detail__section">
        <div class="detail__heading">System</div>
        <div class="detail__price">€5,500–8,500</div>
        <div class="detail__time">8–12 weeks</div>
        <p class="detail__text">Full web app or SaaS. Admin dashboard. 1 custom AI feature. Advanced SEO + analytics.</p>
      </section>
      <section class="detail__section">
        <div class="detail__heading">Authority</div>
        <div class="detail__price">€12,000–18,000</div>
        <div class="detail__time">12–16 weeks</div>
        <p class="detail__text">Market-leading product. Advanced AI integration. Full ecosystem thinking. Launch support included.</p>
      </section>
      <section class="detail__section">
        <div class="detail__heading">Retainer</div>
        <div class="detail__price">€3,500–6,500/mo</div>
        <div class="detail__time">6+ months</div>
        <p class="detail__text">Strategic direction + execution. Embedded with your team. Weekly strategy sessions.</p>
      </section>
      <section class="detail__section">
        <div class="detail__meta-list">
          ${['Response within 24h', 'Ships in weeks, not quarters', '30 days support included', 'You own all the code'].map(r => `<div class="detail__meta-row">${r}</div>`).join('')}
        </div>
        <a class="detail__link" href="${item.link}">Start the conversation →</a>
      </section>
    `;
  }

  const isExternal = item.link && !item.link.startsWith('mailto');
  const stat       = item.results?.[0] || '';
  const outcomes   = (item.results || []).slice(1);
  return `
    ${item.description ? `
    <section class="detail__section">
      <p class="detail__lede">${item.description}</p>
    </section>` : ''}

    ${stat ? `
    <section class="detail__section">
      <span class="detail__label">IMPACT</span>
      <p class="detail__impact-stat">${stat}</p>
    </section>` : ''}

    <section class="detail__section detail__split">
      <div>
        <span class="detail__label">THE CHALLENGE</span>
        <p class="detail__text">${item.challenge}</p>
      </div>
      <div>
        <span class="detail__label">THE APPROACH</span>
        <p class="detail__text">${item.solution}</p>
      </div>
    </section>

    ${outcomes.length ? `
    <section class="detail__section">
      <span class="detail__label">OUTCOMES</span>
      <ul class="detail__outcomes">${outcomes.map(r => `<li>${r}</li>`).join('')}</ul>
    </section>` : ''}

    <section class="detail__section detail__case-footer">
      <div class="detail__tags">${(item.tech || []).map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <a class="detail__link" href="${item.link}"${isExternal ? ' target="_blank" rel="noopener"' : ''}>${isExternal ? 'View project →' : 'Get in touch →'}</a>
    </section>
  `;
}

function openDetail(item, label, originTile) {
  if (!item) return;
  const detail     = document.getElementById('detail');
  const eyebrow    = document.getElementById('dEyebrow');
  const title      = document.getElementById('dTitle');
  const sub        = document.getElementById('dSub');
  const main       = document.getElementById('dMain');
  const heroImg    = document.getElementById('detailHeroImg');
  const heroVideo  = document.getElementById('detailHeroVideo');

  // Kill any ongoing close animation
  gsap.killTweensOf(detail);

  // Populate text
  eyebrow.textContent = label;
  title.textContent   = item.title;
  sub.textContent     = item.subtitle;
  main.innerHTML      = buildSections(item);

  // Hero: prefer first video in media array; fall back to still image
  const firstVideo = (item.media || []).find(s => s.endsWith('.mp4') || s.endsWith('.webm'));
  if (firstVideo) {
    heroVideo.src          = firstVideo;
    heroVideo.poster       = item.image || '';
    heroVideo.style.display = 'block';
    heroImg.style.display   = 'none';
    heroVideo.play().catch(() => {
      heroVideo.style.display = 'none';
      heroImg.src = item.image || '';
      heroImg.style.display = 'block';
    });
  } else {
    heroImg.src            = item.image || '';
    heroImg.alt            = item.title;
    heroImg.style.display  = 'block';
    heroVideo.style.display = 'none';
    heroVideo.src          = '';
  }

  populateFormations(item);

  // Hide header — will stagger in after panel opens
  gsap.set([eyebrow, title, sub], { opacity: 0, y: 16 });

  destroyLenis();

  // AKUMALI fades out (desktop only)
  if (!isMobile) {
    const akumali = document.getElementById('akumaliFixed');
    if (akumali) gsap.to(akumali, { opacity: 0, duration: 0.3, ease: 'power2.out' });
  }

  // Clip-path: start clipped to the tile's viewport position, expand to full
  if (originTile && !isMobile) {
    const r  = originTile.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    gsap.set(detail, {
      clipPath: `inset(${r.top}px ${vw - r.right}px ${vh - r.bottom}px ${r.left}px)`,
    });
  }

  detail.classList.add('is-open');
  detail.setAttribute('aria-hidden', 'false');
  detail.scrollTop = 0;

  const afterOpen = () => {
    gsap.set(detail, { clearProps: 'clipPath' });
    gsap.to([eyebrow, title, sub], {
      opacity: 1, y: 0,
      duration: 0.4, ease: 'power2.out', stagger: 0.08,
    });
    initSectionReveals(detail);
    initDetailProgress(detail);
  };

  if (originTile && !isMobile) {
    gsap.to(detail, {
      clipPath: 'inset(0px 0px 0px 0px)',
      duration: 0.65,
      ease: 'power2.inOut',
      onComplete: afterOpen,
    });
  } else {
    // Mobile or no tile: skip clip-path, just reveal header
    afterOpen();
  }
}

function closeDetail() {
  const detail = document.getElementById('detail');

  if (detailObserver)    { detailObserver.disconnect(); detailObserver = null; }
  if (detailProgressOff) { detailProgressOff(); detailProgressOff = null; }
  if (formationsScrollOff) { formationsScrollOff(); formationsScrollOff = null; }
  if (formationVideoObs)   { formationVideoObs.disconnect(); formationVideoObs = null; }

  // Stop hero video
  const heroVideo = document.getElementById('detailHeroVideo');
  if (heroVideo) { heroVideo.pause(); heroVideo.src = ''; }

  gsap.to(detail, {
    opacity: 0,
    y: 16,
    duration: 0.35,
    ease: 'power2.in',
    onComplete: () => {
      detail.classList.remove('is-open');
      detail.setAttribute('aria-hidden', 'true');
      gsap.set(detail, { clearProps: 'opacity,y' });
      initLenis();
      if (!isMobile) {
        const akumali = document.getElementById('akumaliFixed');
        if (akumali) gsap.to(akumali, { opacity: 1, duration: 0.3, ease: 'power2.out' });
      }
    },
  });
}

function initDetail() {
  document.getElementById('detailClose').addEventListener('click', closeDetail);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDetail(); });

  // Project tile clicks — map via projectIdx
  document.getElementById('galleryGrid').addEventListener('click', e => {
    const tile = e.target.closest('.gallery__item');
    if (!tile) return;
    const projectIdx = parseInt(tile.dataset.project, 10);
    const item = PORTFOLIO_ITEMS[projectIdx];
    openDetail(item, `PROJECT · ${String(projectIdx + 1).padStart(2, '0')}`, tile);
  });

  // "See my work" button opens About
  document.getElementById('workBtn')?.addEventListener('click', e => {
    openDetail(PORTFOLIO_ITEMS[7], 'ABOUT', e.currentTarget);
  });
}

/* ─── Custom cursor ─── */
function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  let mx = 0, my = 0, cx = 0, cy = 0, running = true;
  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  (function loop() {
    if (!running) return;
    cx = lerp(cx, mx, 0.12);
    cy = lerp(cy, my, 0.12);
    gsap.set(cursor, { x: cx, y: cy });
    requestAnimationFrame(loop);
  })();

  const TARGETS = 'a, button, .gallery__item, .detail__link, .content__btn';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(TARGETS)) cursor.classList.add('is-hovering');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(TARGETS)) cursor.classList.remove('is-hovering');
  });
  document.addEventListener('mouseleave', () => gsap.set(cursor, { opacity: 0 }));
  document.addEventListener('mouseenter', () => gsap.set(cursor, { opacity: 1 }));
}

/* ─── Entrance sequence ─── */
function playEntrance(onComplete) {
  const letters = document.querySelectorAll('.akumali-fixed__letter');
  const nav     = document.querySelector('.nav');
  gsap.set(letters, { opacity: 0, y: 24 });
  gsap.set(nav, { opacity: 0 });
  gsap.timeline({ onComplete })
    .to(letters, {
      opacity: 1, y: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.06,
      delay: 0.15,
    })
    .to(nav, { opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.3');
}

/* ─── Boot ─── */
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  isMobile = window.innerWidth <= 768 || window.innerHeight <= 500;

  initTheme();
  initCursor();
  renderGrid();
  initDetail();

  window.addEventListener('orientationchange', () => {
    setTimeout(() => window.location.reload(), 300);
  });

  if (isMobile) {
    const block = document.getElementById('gridBlock');
    if (block) {
      gsap.set(
        [block.querySelector('.content__subheading'),
         block.querySelector('.content__description'),
         block.querySelector('.content__btn')],
        { opacity: 1, pointerEvents: 'all' }
      );
    }
    return;
  }

  gsap.ticker.lagSmoothing(0);

  playEntrance(() => {
    initLenis();
    new StickyGrid();

    // Persistent akumali — scales down into the middle content area
    const akumali = document.getElementById('akumaliFixed');
    if (akumali) {
      gsap.set(akumali, { xPercent: -50, yPercent: -50 });
      gsap.to(akumali, {
        top: '35%',
        scale: 0.32,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  });
});
