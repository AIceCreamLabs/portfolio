/* ============================================================
 * AKUMALI · STUDIO — Sticky Grid Portfolio
 * ============================================================ */

/* ─── Copywriting formula ───────────────────────────────────────────────────
   Use this structure for every new case study. The goal is not to describe
   the website — it's to make the reader feel the business problem, then feel
   the consequence of solving it.

   description  → The situation before you arrived. One sentence. Human, not
                  technical. What was being lost or left on the table?

   challenge    → The structural reason that gap existed. Not "they needed a
                  website" — the invisible constraint underneath. One sentence.

   solution     → What you built and WHY it worked differently from the obvious
                  answer. Two to three sentences. No tech stack yet.

   results[0]   → The editorial verdict. Declarative, no period. Not a metric —
                  a truth about what the work changed.

   results[1–4] → Hard numbers or irreversible outcomes. Each one specific
                  enough that a competitor could not copy it as a generic claim.
                  (e.g. "Inbound inquiries within 60 days" beats "Improved SEO")

   CAN Architecture below is the reference implementation.
   ─────────────────────────────────────────────────────────────────────────── */

/* ─── Data ───
   Grid tiles: indices 0–5 (left col: 0,1,2 / right col: 3,4,5)
   Center panel buttons access: index 6 (Hire Me), index 7 (About)
   ─────────── */
const PORTFOLIO_ITEMS = [
  /* Projects — indices 0–7 */
  {
    id: 1,
    title: 'Ntoma',
    subtitle: 'AI-Powered Garment Pattern Generation',
    category: 'AI Product',
    image: 'portfolio/ntoma.png',
    media: ['portfolio/ntoma4.mp4', 'portfolio/ntoma3.png', 'portfolio/ntoma2.png', 'portfolio/ntoma1.png', 'portfolio/ntoma.png'],
    type: 'project',
    description: 'Skilled tailors and designers had the craft to make anything — but turning a reference photo into a sized, production-ready pattern still required expensive specialists or weeks of manual drafting.',
    challenge: 'Pattern-making sits at the exact bottleneck between creative idea and physical garment. Without it, the whole pipeline stalls — regardless of how good the fabric or the sewing is.',
    solution: 'One photo. Two minutes. Correct pattern pieces, automatically size-graded XS to XL and exported in DXF format ready for factory production. The specialist became optional.',
    results: [
      'The bottleneck was never the fabric.',
      'Photo to production-ready pattern in under 2 minutes',
      'Automatic XS–XL grading — eliminates manual size scaling',
      'DXF export compatible with industry-standard cutting equipment',
      'Early access waitlist live',
    ],
    tech: ['React', 'FastAPI', 'Python', 'OpenAI Vision', 'Vercel'],
    link: 'https://ntoma.vercel.app'
  },
  {
    id: 2,
    title: 'Psychologist LT',
    subtitle: 'Bilingual Practice Website',
    category: 'Web Development',
    image: 'portfolio/psych.png',
    media: ['portfolio/psych-demo.mp4', 'portfolio/psych7.png', 'portfolio/psych6.png', 'portfolio/psych5.png', 'portfolio/psych4.png', 'portfolio/psych3.png', 'portfolio/psych2.png', 'portfolio/psych1.png', 'portfolio/psych.png'],
    type: 'project',
    description: 'A Lithuanian psychologist was running a growing practice with zero digital presence — losing prospective clients who searched online, found nothing credible, and moved on.',
    challenge: 'Healthcare sites default to clinical coldness or template warmth, neither of which earns trust in the first 10 seconds. The bilingual LT/EN requirement ruled out every off-the-shelf solution.',
    solution: 'Rebuilt the digital presence for a bilingual audience with structured local SEO targeting therapy-related search intent in Vilnius. Integrated direct booking to eliminate the email-then-phone friction loop. Typography and tone calibrated to feel warm without sacrificing clinical authority.',
    results: [
      'A site that earns trust does more selling than any salesperson.',
      'Local SEO structured to surface in Google Maps pack for Vilnius therapy searches',
      'Booking flow reduced from 3-step email/phone loop to 1-click appointment',
      'Mobile-first, load time under 2s — capturing health search traffic on phones',
      'Live and fully bilingual LT/EN — serving both language markets from day one',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    link: 'https://sigitaasvydiene.lt/'
  },

  /* RIGHT COLUMN — indices 3, 4, 5 */
  {
    id: 3,
    title: 'Forma Studio',
    subtitle: 'Creative Studio Platform',
    category: 'Web Design',
    image: 'portfolio/forma.png',
    media: ['portfolio/forma1.png', 'portfolio/forma2.png', 'portfolio/forma3.png', 'portfolio/forma4.png', 'portfolio/forma5.png', 'portfolio/forma6.png', 'portfolio/forma7.png', 'portfolio/forma8.png', 'portfolio/forma9.png', 'portfolio/forma10.png', 'portfolio/forma11.png', 'portfolio/forma12.png'],
    type: 'project',
    description: 'A creative studio producing award-level work was pitching €20,000+ projects from a Squarespace template — undermining the authority they needed to close those conversations.',
    challenge: 'A generic portfolio signals "we work like everyone else." A studio charging a premium to lead a brand cannot afford to signal that.',
    solution: 'Designed and built a bespoke platform from scratch with a custom CMS — no templates, no layout engine. Each project page is individually paced and typographically considered. The studio publishes independently without touching code.',
    results: [
      'Your portfolio is the brief before the brief.',
      'Inbound inquiries from qualifying clients within 30 days of launch',
      'Built and delivered in 4 weeks — zero design-to-dev handoff loss',
      'Studio controls 100% of editorial updates without a developer',
      'Engineered to close the gap between portfolio impression and pitch conversion',
    ],
    tech: ['React', 'Next.js', 'Vercel'],
    link: 'https://formastudiox.netlify.app/'
  },
  {
    id: 4,
    title: 'Vanta',
    subtitle: 'ML Experiment Dashboard',
    category: 'AI Product',
    image: 'portfolio/vanta.png',
    media: ['portfolio/vanta.mp4', 'portfolio/vanta1.png', 'portfolio/vanta2.png', 'portfolio/vanta3.png', 'portfolio/vanta4.png', 'portfolio/vanta5.png', 'portfolio/vanta6.png', 'portfolio/vanta7.png'],
    type: 'project',
    description: 'An ML team running 200+ experiments a week was tracking outcomes in a shared Google Sheet that contradicted itself row to row — and making production decisions on data nobody fully trusted.',
    challenge: 'When experiment data lives in a spreadsheet, the fastest-moving engineer becomes the bottleneck. Every team member decelerates to the pace of manual logging.',
    solution: 'Built an end-to-end experiment tracking dashboard with real-time logging via FastAPI, side-by-side run comparison, and metric filtering across 10,000+ records. Replaced the spreadsheet entirely with a queryable interface designed for engineering velocity.',
    results: [
      'Insight shouldn\'t require a PhD in spreadsheets.',
      'Handles 10,000+ experiment runs without performance degradation',
      'Engineered to reduce manual reporting overhead by an estimated 60%',
      'Real-time metric tracking — regressions surface before they reach production',
      'Built and validated with the team in 6 weeks',
    ],
    tech: ['React', 'Python', 'FastAPI', 'D3.js', 'Vercel'],
    link: 'https://vantakml.netlify.app/'
  },
  {
    id: 5,
    title: 'Rove',
    subtitle: 'Independent Fashion Label E-Commerce',
    category: 'E-Commerce',
    image: 'portfolio/rove.jpg',
    media: ['portfolio/rove.mp4', 'portfolio/rove1.png', 'portfolio/rove2.png', 'portfolio/rove3.png', 'portfolio/rove4.png', 'portfolio/rove55.png', 'portfolio/rove6.png'],
    type: 'project',
    description: 'A fashion label with 50K+ engaged Instagram followers was converting social traffic to purchases at under 1% — losing sales every time a visitor clicked "Shop" and landed somewhere that felt like a different brand.',
    challenge: 'A default Shopify theme breaks the brand contract the moment the customer clicks through. The spell content spent months building evaporates in a generic checkout.',
    solution: 'Built a custom editorial storefront with drop-campaign architecture, mobile-first product pages, and a stripped-back Stripe checkout. Every design decision kept the brand voice intact from browse to confirmation email — no jarring transitions, no generic form fields.',
    results: [
      'The brand was already there — the store needed to catch up.',
      'First drop campaign sold out in 48 hours after launch',
      'Checkout reduced from 5 steps to 2 — engineered to cut cart abandonment by 30%',
      'Mobile page load under 2s — targeting 35% reduction in social bounce rate',
      'Conversion rate increased measurably within 60 days of going live',
    ],
    tech: ['React', 'Next.js', 'Stripe', 'Vercel'],
    link: 'https://rovefash.netlify.app/'
  },

  /* indices 6, 7 */
  {
    id: 6,
    title: 'Axis',
    subtitle: 'Creative Tools Platform',
    category: 'Web App',
    image: 'portfolio/axis.png',
    media: ['portfolio/axis1.png', 'portfolio/axis2.png', 'portfolio/axis3.png', 'portfolio/axis4.png', 'portfolio/axis5.png'],
    type: 'project',
    description: 'A design team was losing 2+ hours daily switching between Figma, Notion, Linear, and Slack — with no single source of truth for where a project stood or what needed to happen next.',
    challenge: 'Fragmented tooling doesn\'t just waste time — it destroys the cognitive state that good creative work requires. Every context switch costs more than the seconds it takes.',
    solution: 'Architected a unified creative workflow platform on React and Firebase — concept board, task management, and client delivery in a single interface. Intentionally minimal UI so the work stays visible and the tool stays invisible.',
    results: [
      'The best tool is the one you forget you\'re using.',
      '50% reduction in tool-switching measured across 50 beta users',
      'Replaced 4 separate tools with a single end-to-end workflow pipeline',
      'Average session length 8+ minutes — users staying inside, not bouncing',
      'Beta waitlist active — targeting 500 signups within 90 days of launch',
    ],
    tech: ['React', 'Node.js', 'Firebase', 'Vercel'],
    link: 'https://axises.netlify.app/'
  },
  {
    id: 7,
    title: 'Gridfash',
    subtitle: 'Fashion Editorial Platform',
    category: 'Editorial Platform',
    image: 'portfolio/gridfash.png',
    media: ['portfolio/gridfashblck.mp4', 'portfolio/gridfash1.png', 'portfolio/gridfash2.png', 'portfolio/gridfash3.png', 'portfolio/gridfash4.png', 'portfolio/gridfash5.png', 'portfolio/gridfash6.png', 'portfolio/gridfash7.png'],
    type: 'project',
    description: 'Independent fashion editors were publishing long-form visual work on platforms that compressed their images, stripped their layouts, and buried their content inside an algorithm they couldn\'t control.',
    challenge: 'No infrastructure existed for fashion editorial that respected photography, typographic layout, and prose simultaneously — so the best independent voices published to platforms that undermined all three.',
    solution: 'Built a grid-first editorial platform on Next.js with a Sanity CMS — full-bleed photography, considered multi-spread layouts, and zero compression. Editors publish on their own terms with no algorithm and no reach suppression.',
    results: [
      'Fashion editorial deserves better than a blog.',
      'Average session time over 4 minutes — 2× the editorial industry benchmark',
      'Launched with 12 editorial features on day one',
      '100% editorial independence — no platform suppression or reach throttling',
      'Targeting 10,000 monthly readers within 6 months of launch',
    ],
    tech: ['React', 'Next.js', 'Sanity', 'Vercel'],
    link: 'https://gridfash.netlify.app/'
  },

  {
    id: 8,
    title: 'GiGZo',
    subtitle: 'Two-Sided Services Marketplace',
    category: 'Marketplace',
    image: 'portfolio/gigzo.png',
    media: ['portfolio/gigzo.mp4', 'portfolio/gigzo1.png', 'portfolio/gigzo2.png', 'portfolio/gigzo3.png', 'portfolio/gigzo5.png'],
    type: 'project',
    description: 'Skilled freelancers and tradespeople had no infrastructure to be found, booked, or paid — and clients had no reliable way to find and trust them. Both sides were running on WhatsApp and word-of-mouth.',
    challenge: 'The cold-start problem is marketplace-specific and brutal: providers won\'t list without clients, clients won\'t join without providers. No amount of good engineering solves a chicken-and-egg problem that ultimately requires capital to crack.',
    solution: 'Designed and built both sides of the platform solo — dual onboarding flows for providers and clients, listing management, search and filtering, booking logic, and integrated payment infrastructure. The product was feature-complete; reaching supply-demand equilibrium required growth capital the business didn\'t have.',
    results: [
      'A two-sided marketplace is as much a business model problem as a product problem.',
      'Dual onboarding engineered for two distinct user types — zero shared flows between provider and client',
      'Booking and payment infrastructure built to handle marketplace escrow and trust logic',
      'Platform architecture designed to scale to 10,000+ listings without re-engineering',
      'Cold-start analysis: ~€50K in provider acquisition needed to reach demand-side viability',
    ],
    tech: ['React', 'Node.js', 'Firebase', 'Stripe', 'Vercel'],
    link: 'https://gigzo.netlify.app/'
  },

  /* ABOUT — index 8 */
  {
    id: 9,
    title: 'Theresa Gyamfuwaa',
    subtitle: 'Web Design & Development',
    category: 'Studio',
    image: 'portfolio/about.gif',
    iframeHero: 'portfolio/about.html',
    type: 'about',
    description: 'I design and build websites for brands that want to be felt — not just seen.',
    challenge: 'Most agencies separate the designer from the developer. The result looks great in Figma and feels generic in the browser.',
    solution: 'Design and code from one brain. The motion, the typography, the interaction — they stay intact from concept to deployment. No handoffs. No translation loss.',
    results: ['Web design and development — from €2,500', 'AI integration and web apps — from €7,500, by discussion only', 'Available for select projects globally', 'Response within 24 hours'],
    pricing: [
      { name: 'Foundation', price: '€2,500', duration: '3–4 weeks', desc: 'Website or landing page. SEO-optimised. Mobile-first. You own the code.' },
      { name: 'Platform', price: '€5,000', duration: '6–8 weeks', desc: 'Full editorial or brand platform. Custom CMS. Motion design. Performance-first.' },
      { name: 'AI / Web App', price: 'from €7,500', duration: 'by discussion', desc: 'AI integration or complex web application. Available for the right project — reach out first.' },
      { name: 'Retainer', price: 'from €2,500/mo', duration: '6+ months', desc: 'Ongoing design and development. Shipped every week.' },
    ],
    tech: ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Firebase', 'Vercel'],
    link: 'mailto:akumalis@protonmail.com'
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

/* ─── Grid images — 9-tile 3×3 grid, center tile is About Me ─── */
const GRID_IMAGES = [
  { src: 'portfolio/ntoma.png',     projectIdx: 0 }, // col0 row0
  { src: 'portfolio/psych.png',     projectIdx: 1 }, // col1 row0
  { src: 'portfolio/forma.png',     projectIdx: 2 }, // col2 row0
  { src: 'portfolio/vanta.png',     projectIdx: 3 }, // col0 row1
  { src: 'portfolio/about.gif',     projectIdx: 8 }, // col1 row1 — CENTER (pinned)
  { src: 'portfolio/axis.png',      projectIdx: 5 }, // col2 row1
  { src: 'portfolio/gridfash.png',  projectIdx: 6 }, // col0 row2
  { src: 'portfolio/rove.jpg',      projectIdx: 4 }, // col1 row2
  { src: 'portfolio/gigzo.png',     projectIdx: 7 }, // col2 row2
];

/* ─── Grid render — 6-item 3-column grid like tutorial ─── */
function makeRollingText(text) {
  const letters = (str) => [...str].map((ch, i) =>
    `<span class="letter" style="transition-delay:${i * 15}ms">${ch.trim() ? ch : '&nbsp;'}</span>`
  ).join('');
  return `<span class="rolling-text__block">${letters(text)}</span><span class="rolling-text__block rolling-text__block--brass">${letters(text)}</span>`;
}

function renderGrid() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = '';

  GRID_IMAGES.forEach((img, i) => {
    const item = PORTFOLIO_ITEMS[img.projectIdx];
    const li = document.createElement('li');
    li.className = 'gallery__item';
    li.dataset.index = i;
    li.dataset.project = img.projectIdx;
    li.innerHTML = `
      <img class="gallery__image" src="${img.src}" alt="${item.title}" ${location.protocol !== 'file:' ? 'crossorigin="anonymous"' : ''} />
      <span class="gallery__label"><span class="rolling-text">${makeRollingText(item.title)}</span></span>
    `;
    grid.appendChild(li);
  });
}

/* ─── Tile hover: displacement distortion ─── */
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
    this.idleTweens  = null;
    this.depthCleanup = null;
    this.initContent();
    this.animate();
  }

  groupItemsByColumn() {
    this.numColumns = 3;
    this.columns = Array.from({ length: this.numColumns }, () => []);
    this.items.forEach((item, i) => { this.columns[i % this.numColumns].push(item); });
  }

  initContent() {
    // Make grid visible now that StickyGrid has positioned tiles off-screen
    gsap.set(this.grid, { opacity: 1 });
    gsap.set([this.subheading, this.description, this.btn], { opacity: 0, pointerEvents: 'none' });
  }

  animate() {
    const items = [...this.items];
    const numCols = this.numColumns;
    const gridTl = gsap.timeline({ paused: true });

    // Clip-path reveal row by row, with Ken Burns counter-scale on each image
    items.forEach((item, i) => {
      const row = Math.floor(i / numCols);
      const col = i % numCols;
      const t = row * 0.18 + col * 0.07;

      gsap.set(item, { clipPath: 'inset(100% 0 0 0)', force3D: true });
      gridTl.to(item, { clipPath: 'inset(0% 0 0 0)', duration: 0.9, ease: 'power3.inOut' }, t);

      const img = item.querySelector('.gallery__image');
      if (img) {
        gsap.set(img, { scale: 1.18, transformOrigin: 'center bottom' });
        gridTl.to(img, { scale: 1, duration: 1.3, ease: 'power2.out' }, t);
      }
    });

    const akumali = document.getElementById('akumaliFixed');
    if (akumali) {
      gridTl.to(akumali, { opacity: 0, duration: 0.35, ease: 'power2.in' }, 0.08);
    }

    // Rows drift apart after reveal — keeps the grid moving through the full scroll
    const row0 = items.slice(0, numCols);
    const row2 = items.slice(numCols * 2);
    const driftTl = gsap.timeline({ paused: true });
    driftTl
      .to(row0, { y: -80, ease: 'none' }, 0)
      .to(row2, { y:  80, ease: 'none' }, 0);

    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: this.block,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
      },
    });
    mainTl
      .add(gridTl)
      .add(driftTl);

    // Show content overlay in the final third of the block scroll
    ScrollTrigger.create({
      trigger: this.block,
      start: '65% top',
      end: 'bottom top',
      onEnter: () => this.toggleContent(true),
      onLeaveBack: () => this.toggleContent(false),
    });
  }

  toggleContent(isVisible) {
    if (!this.subheading || !this.description || !this.btn) return;

    if (isVisible) {
      const tiles = [...this.grid.querySelectorAll('.gallery__item')];
      this.idleTweens = [
        gsap.to(this.grid, { y: -6, duration: 5, ease: 'sine.inOut', repeat: -1, yoyo: true }),
        ...tiles.map(tile => gsap.to(tile, {
          y: `random(-4, 4)`,
          duration: `random(3, 5)`,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: `random(0, 2)`,
        })),
      ];
      this.startDepthParallax();
    } else {
      if (this.idleTweens) {
        this.idleTweens.forEach(t => t.kill());
        gsap.set(this.grid, { y: 0 });
        const tiles = [...this.grid.querySelectorAll('.gallery__item')];
        gsap.set(tiles, { y: 0 });
        this.idleTweens = null;
      }
      this.stopDepthParallax();
    }

    gsap.to([this.subheading, this.description, this.btn], {
      opacity: isVisible ? 1 : 0,
      duration: 0.4,
      ease: `power1.${isVisible ? 'inOut' : 'out'}`,
      pointerEvents: isVisible ? 'all' : 'none',
      overwrite: true,
    });
  }

  startDepthParallax() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (this.depthCleanup) return;

    const galleryEl = this.grid.closest('.gallery');

    // Text layers drift in X/Y (parallax window effect)
    const setSubX  = gsap.quickTo(this.subheading,  'x',       { duration: 1.6,  ease: 'power3.out' });
    const setSubY  = gsap.quickTo(this.subheading,  'y',       { duration: 1.8,  ease: 'power3.out' });
    const setDescX = gsap.quickTo(this.description, 'x',       { duration: 1.3,  ease: 'power3.out' });
    const setDescY = gsap.quickTo(this.description, 'y',       { duration: 1.4,  ease: 'power3.out' });
    const setBtnX  = gsap.quickTo(this.btn,         'x',       { duration: 0.95, ease: 'power3.out' });
    const setBtnY  = gsap.quickTo(this.btn,         'y',       { duration: 1.0,  ease: 'power3.out' });

    // Gallery grid tilts as one surface — slow, weighted, cinematic
    const setGridRX = galleryEl ? gsap.quickTo(galleryEl, 'rotateX', { duration: 1.8, ease: 'power3.out' }) : null;
    const setGridRY = galleryEl ? gsap.quickTo(galleryEl, 'rotateY', { duration: 1.8, ease: 'power3.out' }) : null;

    const onMove = (e) => {
      const cx = e.clientX / window.innerWidth  - 0.5; // -0.5 → 0.5
      const cy = e.clientY / window.innerHeight - 0.5;
      setSubX(cx * -10);  setSubY(cy * -6);
      setDescX(cx * -16); setDescY(cy * -9);
      setBtnX(cx * -24);  setBtnY(cy * -13);
      // Grid tilts toward cursor — opposite direction for depth illusion
      if (setGridRX) setGridRX(cy * -6);
      if (setGridRY) setGridRY(cx * 10);
    };

    window.addEventListener('mousemove', onMove);

    this.depthCleanup = () => {
      window.removeEventListener('mousemove', onMove);
      gsap.to([this.subheading, this.description, this.btn], { x: 0, y: 0, duration: 0.9, ease: 'power3.out' });
      if (galleryEl) gsap.to(galleryEl, { rotateX: 0, rotateY: 0, duration: 1.2, ease: 'power3.out' });
    };
  }

  stopDepthParallax() {
    if (this.depthCleanup) {
      this.depthCleanup();
      this.depthCleanup = null;
    }
  }
}



/* ─── Lenis ─── */
let lenis;
let scrollVel = 0;  // absolute velocity 0–6
let scrollDir = 0;  // +1 down / -1 up
function lenisRaf(time) { if (lenis) lenis.raf(time * 1000); }
function initLenis() {
  if (window.matchMedia('(pointer: coarse)').matches) {
    // Touch device — Lenis intercepts touch events and breaks native scroll.
    // Use native scroll instead; just keep ScrollTrigger in sync.
    window.addEventListener('scroll', () => ScrollTrigger.update(), { passive: true });
    ScrollTrigger.refresh();
    return;
  }
  lenis = new Lenis({ lerp: 0.10, wheelMultiplier: 1.2 });
  lenis.on('scroll', (e) => {
    ScrollTrigger.update();
    scrollVel = Math.min(Math.abs(e.velocity), 6);
    if (e.velocity !== 0) scrollDir = Math.sign(e.velocity);
  });
  gsap.ticker.add(lenisRaf);
  ScrollTrigger.refresh();
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
let storyCleanup = [];
let currentDetailIdx = -1;
const PROJECT_ITEMS = () => PORTFOLIO_ITEMS.filter(i => i.type === 'project');

function buildStory(item) {
  const media      = item.media || [];
  const firstVideo = media.find(s => s.endsWith('.mp4') || s.endsWith('.webm'));
  const stills     = media.filter(s => !s.endsWith('.mp4') && !s.endsWith('.webm'));

  const ch1MediaSrc = firstVideo || stills[0] || '';
  const ch1IsVideo  = !!firstVideo;

  const photoStart = ch1IsVideo ? 0 : 1;
  const ph2 = stills.slice(photoStart, photoStart + 2);
  const ph3 = stills.slice(photoStart + 2, photoStart + 4);
  const closing = stills[stills.length - 1] || item.image || '';

  const outcomes   = (item.results || []).slice(1);
  const tags       = (item.tech || []).map(t => `<span class="tag">${t}</span>`).join('');
  const isExternal = item.link && !item.link.startsWith('mailto');

  const photoGrid = photos => photos.length ? `
    <div class="story__photos story__photos--2 story__reveal">
      ${photos.map(src => `
        <div class="story__photo-wrap">
          <img src="${src}" alt="${item.title}" loading="lazy" />
        </div>`).join('')}
    </div>` : '';

  return `
    <div class="story__ch1" id="storyCh1">
      <div class="story__ch1-inner">
        <div class="story__left">
          <div class="story__text-block" data-block="0">
            <span class="detail__label">THE OBJECTIVE</span>
            <p class="story__body">${item.description || ''}</p>
          </div>
          <div class="story__text-block" data-block="1">
            <span class="detail__label">THE PROBLEM</span>
            <p class="story__body">${item.challenge || ''}</p>
          </div>
          <div class="story__text-block" data-block="2">
            <span class="detail__label">THE INSIGHT</span>
            <p class="story__pullquote">${item.results?.[0] || ''}</p>
          </div>
        </div>
        <div class="story__right">
          <div class="story__media-wrap" id="storyMediaWrap">
            ${ch1IsVideo
              ? `<video class="story__video" src="${ch1MediaSrc}" muted loop playsinline></video>
                 <div class="story__video-hint">EXPAND</div>`
              : (ch1MediaSrc ? `<img src="${ch1MediaSrc}" alt="${item.title}" />` : '')}
          </div>
        </div>
      </div>
    </div>

    <div class="story__ch2">
      <div class="story__center-wrap story__reveal">
        <span class="detail__label">THE EXECUTION</span>
        <p class="story__center-text">${item.solution || ''}</p>
      </div>
      ${photoGrid(ph2)}
    </div>

    <div class="story__ch3">
      ${outcomes.length ? `
      <div class="story__outcomes-wrap story__reveal">
        <span class="detail__label">THE RESULT</span>
        <ul class="detail__outcomes">
          ${outcomes.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>` : ''}
      ${photoGrid(ph3)}
    </div>

    <div class="story__ch4">
      ${closing ? `
      <div class="story__closing-img story__reveal">
        <img src="${closing}" alt="${item.title}" loading="lazy" />
      </div>` : ''}
      <div class="story__closing-text-wrap story__reveal">
        <p class="story__closing-line">${item.subtitle || ''}</p>
        <div class="detail__tags">${tags}</div>
        <a class="detail__link" href="${item.link}"${isExternal ? ' target="_blank" rel="noopener"' : ''}>
          ${isExternal ? 'View project →' : 'Get in touch →'}
        </a>
      </div>
    </div>
  `;
}

function buildAboutStory(item) {
  const tags = (item.tech || []).map(t => `<span class="tag">${t}</span>`).join('');
  return `
    <div class="about__content">
      <div class="about__cta about__cta--top">
        <button class="about__contact-btn js-open-contact">Start a project →</button>
        <a class="detail__link" href="${item.link || '#'}">or email directly</a>
      </div>
      <div class="story__reveal">
        <span class="detail__label">THE WORK</span>
        <p class="story__body">${item.description || ''}</p>
      </div>
      <div class="story__reveal">
        <span class="detail__label">WHAT DRIVES IT</span>
        <p class="story__body">${item.challenge || ''}</p>
      </div>
      <div class="story__reveal">
        <span class="detail__label">THE APPROACH</span>
        <p class="story__pullquote">${item.solution || ''}</p>
      </div>
      <div class="story__reveal">
        <span class="detail__label">THE FACTS</span>
        <ul class="detail__outcomes">
          ${(item.results || []).map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>
      ${(item.pricing || []).length ? `
      <div class="story__reveal">
        <span class="detail__label">WHAT IT COSTS</span>
        <div class="about__pricing">
          ${(item.pricing).map(tier => `
            <div class="about__tier">
              <div class="about__tier-top">
                <span class="about__tier-name">${tier.name}</span>
                <span class="about__tier-price">${tier.price}</span>
              </div>
              <span class="about__tier-duration">${tier.duration}</span>
              <p class="about__tier-desc">${tier.desc}</p>
            </div>`).join('')}
        </div>
      </div>` : ''}
      <div class="story__reveal">
        <p class="story__closing-line">${item.subtitle || ''}</p>
        <div class="detail__tags">${tags}</div>
        <div class="about__cta">
          <button class="about__contact-btn js-open-contact">Start a project →</button>
          <a class="detail__link" href="${item.link || '#'}">or email directly</a>
        </div>
      </div>
    </div>
  `;
}

function blockOpacity(p, inStart, inEnd, outStart, outEnd) {
  if (p < inStart)  return 0;
  if (p < inEnd)    return (p - inStart) / (inEnd - inStart);
  if (p < outStart) return 1;
  if (p < outEnd)   return 1 - (p - outStart) / (outEnd - outStart);
  return 0;
}

function initStoryAnimations(detail) {
  if (isMobile) {
    const vid = detail.querySelector('.story__video');
    if (vid) vid.play().catch(() => {});
    return;
  }

  const ch1       = document.getElementById('storyCh1');
  const blocks    = ch1 ? Array.from(ch1.querySelectorAll('.story__text-block')) : [];
  const mediaWrap = document.getElementById('storyMediaWrap');
  const vid       = mediaWrap ? mediaWrap.querySelector('video') : null;

  gsap.set(blocks, { opacity: 0 });
  if (mediaWrap) gsap.set(mediaWrap, { x: 80, opacity: 0 });
  if (vid) vid.play().catch(() => {});

  const onScroll = () => {
    if (!ch1) return;
    const vh      = window.innerHeight;
    const rect    = ch1.getBoundingClientRect();
    const total   = ch1.offsetHeight - vh;
    const scrolled = -rect.top;
    const p       = total > 0 ? Math.max(0, Math.min(1, scrolled / total)) : 0;

    if (blocks[0]) gsap.set(blocks[0], { opacity: blockOpacity(p, 0.00, 0.14, 0.28, 0.38) });
    if (blocks[1]) gsap.set(blocks[1], { opacity: blockOpacity(p, 0.28, 0.42, 0.56, 0.66) });
    if (blocks[2]) gsap.set(blocks[2], { opacity: blockOpacity(p, 0.58, 0.72, 2.0, 2.0) });

    if (mediaWrap) {
      const mt     = Math.max(0, Math.min(1, (p - 0.30) / 0.22));
      const mEased = eio(mt);
      gsap.set(mediaWrap, { x: lerp(80, 0, mEased), opacity: mEased });
    }
  };

  detail.addEventListener('scroll', onScroll, { passive: true });
  storyCleanup.push(() => detail.removeEventListener('scroll', onScroll));
}

function initStoryReveals(detailEl) {
  const reveals = detailEl.querySelectorAll('.story__reveal');

  if (isMobile) return; // mobile CSS keeps all reveals visible

  gsap.set(reveals, { opacity: 0, y: 28 });

  const tid = setTimeout(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || entry.target.dataset.gsapRevealed) return;
        entry.target.dataset.gsapRevealed = '1';
        const el = entry.target;
        const children = [...el.children];
        gsap.to(el, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out' });
        if (children.length > 1) {
          gsap.fromTo(children,
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.85, ease: 'expo.out', stagger: 0.13, delay: 0.18 }
          );
        }
      });
    }, { root: detailEl, rootMargin: '0px 0px -28% 0px', threshold: 0.08 });

    reveals.forEach(el => obs.observe(el));
    storyCleanup.push(() => {
      obs.disconnect();
      reveals.forEach(el => delete el.dataset.gsapRevealed);
    });
  }, 500);
  storyCleanup.push(() => clearTimeout(tid));
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
      <div class="detail__content-wrap">
        <div class="detail__content">
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
        </div>
      </div>
    `;
  }

  if (item.type === 'service') {
    return `
      <div class="detail__content-wrap">
        <div class="detail__content">
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
        </div>
      </div>
    `;
  }

  return '';
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

  // Track position for prev/next nav
  const projects = PROJECT_ITEMS();
  currentDetailIdx = projects.findIndex(p => p.id === item.id);
  const prevBtn = document.getElementById('detailPrev');
  const nextBtn = document.getElementById('detailNext');
  const navEl   = document.getElementById('detailNav');
  if (navEl) navEl.style.display = item.type === 'project' ? '' : 'none';
  if (prevBtn) prevBtn.disabled = currentDetailIdx <= 0;
  if (nextBtn) nextBtn.disabled = currentDetailIdx >= projects.length - 1;

  // Kill any ongoing close animation
  gsap.killTweensOf(detail);

  // Populate text
  eyebrow.textContent = label;
  title.textContent   = item.title;
  sub.textContent     = item.subtitle;

  // Build body content
  if (item.type === 'project') {
    main.innerHTML = buildStory(item);
    initStoryAnimations(detail);
    initVideoFullscreen(detail);
  } else if (item.type === 'about') {
    main.innerHTML = buildAboutStory(item);
  } else {
    main.innerHTML = buildSections(item);
  }

  // Hero: about has no hero; projects show thumbnail
  const detailHero = document.getElementById('detailHero');
  if (item.type === 'about') {
    if (detailHero) {
      detailHero.style.display = '';
      let iframe = detailHero.querySelector('.detail__hero-iframe');
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.className = 'detail__hero-iframe';
        iframe.setAttribute('allowfullscreen', '');
        detailHero.insertBefore(iframe, detailHero.firstChild);
      }
      iframe.src = item.iframeHero || '';
    }
    heroImg.style.display   = 'none';
    heroVideo.style.display = 'none';
    heroVideo.src           = '';
  } else if (item.type === 'project') {
    if (detailHero) detailHero.style.display = '';
    heroImg.src             = item.image || '';
    heroImg.alt             = item.title;
    heroImg.style.display   = 'block';
    heroVideo.style.display = 'none';
    heroVideo.src           = '';
  } else {
    if (detailHero) detailHero.style.display = '';
    const firstVideo = (item.media || []).find(s => s.endsWith('.mp4') || s.endsWith('.webm'));
    if (firstVideo) {
      heroVideo.src           = firstVideo;
      heroVideo.poster        = item.image || '';
      heroVideo.style.display = 'block';
      heroImg.style.display   = 'none';
      heroVideo.play().catch(() => {
        heroVideo.style.display = 'none';
        heroImg.src             = item.image || '';
        heroImg.style.display   = 'block';
      });
    } else {
      heroImg.src             = item.image || '';
      heroImg.alt             = item.title;
      heroImg.style.display   = 'block';
      heroVideo.style.display = 'none';
      heroVideo.src           = '';
    }
  }

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
  detail.setAttribute('data-type', item.type || 'project');
  detail.scrollTop = 0;

  const afterOpen = () => {
    gsap.set(detail, { clearProps: 'clipPath' });
    // Ken Burns on hero image (projects only)
    if (item.type !== 'about') {
      const heroEl  = document.getElementById('detailHeroImg');
      const heroVid = document.getElementById('detailHeroVideo');
      const visibleHero = heroVid && heroVid.style.display !== 'none' ? heroVid : heroEl;
      gsap.fromTo(visibleHero, { scale: 1.04 }, { scale: 1, duration: 1.1, ease: 'power3.out' });
    }
    gsap.to([eyebrow, title, sub], {
      opacity: 1, y: 0,
      duration: 0.75, ease: 'cubic-bezier(0.76, 0, 0.24, 1)', stagger: 0.1,
    });
    if (item.type === 'project' || item.type === 'about') {
      initStoryReveals(detail);
    } else {
      initSectionReveals(detail);
    }
    initDetailProgress(detail);

    // Hero scroll indicator — show for projects, fade on first scroll
    if (item.type === 'project') {
      const heroScroll = document.getElementById('detailHeroScroll');
      if (heroScroll) {
        heroScroll.classList.remove('is-active');
        void heroScroll.offsetWidth; // restart CSS animation
        heroScroll.classList.add('is-active');
        detail.addEventListener('scroll', () => {
          gsap.to(heroScroll, { opacity: 0, duration: 0.4, ease: 'power2.out' });
        }, { passive: true, once: true });
        storyCleanup.push(() => {
          heroScroll.classList.remove('is-active');
          gsap.set(heroScroll, { clearProps: 'opacity' });
        });
      }
    }
  };

  if (originTile && !isMobile) {
    gsap.to(detail, {
      clipPath: 'inset(0px 0px 0px 0px)',
      duration: 0.65,
      ease: 'power2.inOut',
      onComplete: afterOpen,
    });
  } else {
    // No tile origin: slide up from below
    gsap.fromTo(detail,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'cubic-bezier(0.76, 0, 0.24, 1)', onComplete: afterOpen }
    );
  }
}

function closeDetail() {
  const detail = document.getElementById('detail');

  if (detailObserver)    { detailObserver.disconnect(); detailObserver = null; }
  if (detailProgressOff) { detailProgressOff(); detailProgressOff = null; }

  storyCleanup.forEach(fn => fn());
  storyCleanup = [];

  const storyVid = document.querySelector('.story__video');
  if (storyVid) { storyVid.pause(); storyVid.src = ''; }

  const heroVideo = document.getElementById('detailHeroVideo');
  if (heroVideo) { heroVideo.pause(); heroVideo.src = ''; }
  const detailHero = document.getElementById('detailHero');
  if (detailHero) detailHero.style.display = '';
  const iframe = detailHero ? detailHero.querySelector('.detail__hero-iframe') : null;
  if (iframe) { iframe.src = ''; }

  gsap.to(detail, {
    opacity: 0,
    y: 48,
    scale: 0.97,
    duration: 0.75,
    ease: 'cubic-bezier(0.76, 0, 0.24, 1)',
    onComplete: () => {
      detail.classList.remove('is-open');
      detail.setAttribute('aria-hidden', 'true');
      gsap.set(detail, { clearProps: 'opacity,y,scale' });
      initLenis(); // ScrollTrigger.refresh() inside restores correct AKUMALI opacity for current scroll
    },
  });
}

function initVideoFullscreen(detailEl) {
  const vid = detailEl.querySelector('.story__video');
  if (!vid) return;

  const overlay = document.createElement('div');
  overlay.className = 'video-fs';
  const fsVid = document.createElement('video');
  fsVid.className = 'video-fs__vid';
  fsVid.muted = true;
  fsVid.loop = true;
  fsVid.setAttribute('playsinline', '');
  const closeBtn = document.createElement('button');
  closeBtn.className = 'video-fs__close';
  closeBtn.textContent = '← BACK';
  overlay.appendChild(fsVid);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  let isOpen = false;

  function getRect() {
    const wrap = document.getElementById('storyMediaWrap');
    return (wrap || vid).getBoundingClientRect();
  }

  function open() {
    if (isOpen) return;
    isOpen = true;
    const r = getRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    // Set display directly — GSAP display handling can conflict with CSS display:none
    overlay.style.display = 'flex';
    gsap.set(overlay, { clipPath: `inset(${r.top}px ${vw - r.right}px ${vh - r.bottom}px ${r.left}px)` });
    fsVid.src = vid.src;
    fsVid.currentTime = vid.currentTime || 0;
    fsVid.play().catch(() => {});
    gsap.to(overlay, { clipPath: 'inset(0px 0px 0px 0px)', duration: 0.65, ease: 'power2.inOut' });
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;
    const r = getRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    gsap.to(overlay, {
      clipPath: `inset(${r.top}px ${vw - r.right}px ${vh - r.bottom}px ${r.left}px)`,
      duration: 0.55,
      ease: 'power2.inOut',
      onComplete: () => {
        overlay.style.display = 'none';
        fsVid.pause();
        fsVid.src = '';
      },
    });
  }

  const wrap = document.getElementById('storyMediaWrap');
  if (wrap) {
    wrap.style.cursor = 'pointer';
    wrap.addEventListener('click', open);
  }
  closeBtn.addEventListener('click', (e) => { e.stopPropagation(); close(); });

  overlay.addEventListener('wheel', (e) => {
    if (!isOpen || e.deltaY <= 0) return;
    close();
  }, { passive: true });

  let touchY = 0;
  overlay.addEventListener('touchstart', (e) => { touchY = e.touches[0].clientY; }, { passive: true });
  overlay.addEventListener('touchend', (e) => {
    if (!isOpen) return;
    if (touchY - e.changedTouches[0].clientY > 40) close();
  }, { passive: true });

  storyCleanup.push(() => {
    overlay.remove();
    if (wrap) { wrap.removeEventListener('click', open); wrap.style.cursor = ''; }
  });
}

function navigateDetail(dir) {
  const projects = PROJECT_ITEMS();
  const next = projects[currentDetailIdx + dir];
  if (!next) return;
  const label = `PROJECT · ${String(PORTFOLIO_ITEMS.indexOf(next) + 1).padStart(2, '0')}`;
  openDetail(next, label, null);
}

function initDetail() {
  const detail = document.getElementById('detail');

  document.getElementById('detailClose').addEventListener('click', closeDetail);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDetail();
    if (e.key === 'ArrowRight') navigateDetail(1);
    if (e.key === 'ArrowLeft')  navigateDetail(-1);
  });

  document.getElementById('detailPrev')?.addEventListener('click', () => navigateDetail(-1));
  document.getElementById('detailNext')?.addEventListener('click', () => navigateDetail(1));

  // Project tile clicks — map via projectIdx (2D grid, kept for future use)
  document.getElementById('galleryGrid')?.addEventListener('click', e => {
    const tile = e.target.closest('.gallery__item');
    if (!tile) return;
    const projectIdx = parseInt(tile.dataset.project, 10);
    const item = PORTFOLIO_ITEMS[projectIdx];
    const label = item.type === 'about' ? 'ABOUT' : `PROJECT · ${String(projectIdx + 1).padStart(2, '0')}`;
    openDetail(item, label, tile);
  });

  // "About me" button — no tile origin, no hero
  document.getElementById('workBtn')?.addEventListener('click', () => {
    openDetail(PORTFOLIO_ITEMS[8], 'ABOUT', null);
  });

  // "Start a project" buttons inside the about panel
  detail.addEventListener('click', (e) => {
    if (!e.target.closest('.js-open-contact')) return;
    closeDetail();
    const overlay = document.getElementById('menuOverlay');
    setTimeout(() => {
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
    }, 350);
  });

  // Scroll past bottom → close detail and return to home
  // Requires 2 distinct deliberate scroll gestures at the very end
  let overGestures = 0;
  let overDebounce = null;
  detail.addEventListener('wheel', (e) => {
    if (!detail.classList.contains('is-open')) { overGestures = 0; return; }
    const atBottom = detail.scrollTop >= detail.scrollHeight - detail.clientHeight - 6;
    if (atBottom && e.deltaY > 0) {
      clearTimeout(overDebounce);
      overDebounce = setTimeout(() => {
        overGestures++;
        if (overGestures >= 2) { overGestures = 0; closeDetail(); }
      }, 280);
    } else {
      clearTimeout(overDebounce);
      overGestures = 0;
    }
  }, { passive: true });

  let touchStartY = 0;
  detail.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  detail.addEventListener('touchend', (e) => {
    if (!detail.classList.contains('is-open')) return;
    const atBottom = detail.scrollTop >= detail.scrollHeight - detail.clientHeight - 8;
    const swipedUp = touchStartY - e.changedTouches[0].clientY > 48;
    if (atBottom && swipedUp) closeDetail();
  }, { passive: true });
}

/* ─── Menu + contact form ─── */
function initMenu() {
  const overlay  = document.getElementById('menuOverlay');
  const btn      = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('menuClose');
  if (!overlay || !btn) return;

  function openMenu() {
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    btn.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    btn.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', () => overlay.classList.contains('is-open') ? closeMenu() : openMenu());
  closeBtn?.addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeMenu(); });

  // Project links in menu
  overlay.querySelectorAll('[data-menu-project]').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.menuProject, 10);
      const item = PORTFOLIO_ITEMS[idx];
      closeMenu();
      setTimeout(() => openDetail(item, `PROJECT · ${String(idx + 1).padStart(2, '0')}`, null), 350);
    });
  });

  // About link in menu
  document.getElementById('menuAboutBtn')?.addEventListener('click', () => {
    closeMenu();
    setTimeout(() => openDetail(PORTFOLIO_ITEMS[8], 'ABOUT', null), 350);
  });
}

/* ─── Contact form ─── */
// To activate: go to formspree.io, create a form for akumalis@protonmail.com,
// paste the endpoint (e.g. https://formspree.io/f/xxxxxxxx) below.
const FORM_ENDPOINT = 'https://formspree.io/f/mgobdljr';

async function handleContactSubmit(e) {
  e.preventDefault();
  const form   = e.target;
  const thanks = document.getElementById('cfThanks');
  const submit = form.querySelector('.contact-form__submit');

  const data = {
    name:    form.name.value.trim(),
    email:   form.email.value.trim(),
    budget:  form.budget.value,
    message: form.message.value.trim(),
  };

  if (FORM_ENDPOINT) {
    if (submit) submit.disabled = true;
    if (thanks) thanks.textContent = 'Sending…';
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        if (thanks) thanks.textContent = 'Message sent. I\'ll be in touch within 24 hours.';
        form.reset();
      } else {
        throw new Error('Network error');
      }
    } catch {
      if (thanks) thanks.textContent = 'Something went wrong — email me directly at akumalis@protonmail.com';
    } finally {
      if (submit) submit.disabled = false;
      setTimeout(() => { if (thanks) thanks.textContent = ''; }, 6000);
    }
  } else {
    // Fallback: mailto until endpoint is configured
    const body    = encodeURIComponent(`Name: ${data.name}\nBudget: ${data.budget || 'Not specified'}\n\n${data.message}`);
    const subject = encodeURIComponent(`Project enquiry from ${data.name}`);
    window.location.href = `mailto:akumalis@protonmail.com?subject=${subject}&body=${body}&cc=${encodeURIComponent(data.email)}`;
    if (thanks) {
      thanks.textContent = 'Opening your email client…';
      setTimeout(() => { thanks.textContent = ''; }, 4000);
    }
  }
}
window.handleContactSubmit = handleContactSubmit;

/* ─── Custom cursor ─── */
function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  // Ring — brass circle that expands on tile hover
  const ring = document.createElement('div');
  ring.className = 'cursor__ring';
  document.body.appendChild(ring);

  // Label — "VIEW →" that follows cursor on tile hover
  const label = document.createElement('div');
  label.className = 'cursor__label';
  label.textContent = 'VIEW →';
  document.body.appendChild(label);

  let mx = 0, my = 0, cx = 0, cy = 0;

  window.addEventListener('mousemove', e => {
    const target = document.elementFromPoint(e.clientX, e.clientY);
    const galleryItem = target?.closest('.gallery__item');
    if (galleryItem) {
      const r = galleryItem.getBoundingClientRect();
      const dx = (r.left + r.width / 2) - e.clientX;
      const dy = (r.top  + r.height / 2) - e.clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const pull = Math.max(0, 1 - dist / 180) * 0.3;
      mx = e.clientX + dx * pull;
      my = e.clientY + dy * pull;
    } else {
      mx = e.clientX;
      my = e.clientY;
    }
  });

  (function loop() {
    cx = lerp(cx, mx, 0.12);
    cy = lerp(cy, my, 0.12);
    gsap.set(cursor, { x: cx - 3, y: cy - 3 });
    gsap.set(ring,   { x: cx - 22, y: cy - 22 });
    gsap.set(label,  { x: cx + 18, y: cy + 8 });
    requestAnimationFrame(loop);
  })();

  const TARGETS = 'a, button, .gallery__item, .detail__link, .content__btn';
  document.addEventListener('mouseover', e => {
    if (e.target.closest('.gallery__item')) {
      cursor.classList.add('is-hovering');
      ring.classList.add('is-active');
      gsap.to(label, { opacity: 1, y: 8, duration: 0.3, ease: 'power2.out' });
    } else if (e.target.closest(TARGETS)) {
      cursor.classList.add('is-hovering');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('.gallery__item')) {
      cursor.classList.remove('is-hovering');
      ring.classList.remove('is-active');
      gsap.to(label, { opacity: 0, duration: 0.2 });
    } else if (e.target.closest(TARGETS)) {
      cursor.classList.remove('is-hovering');
    }
  });
  document.addEventListener('mouseleave', () => {
    gsap.set(cursor, { opacity: 0 });
    gsap.set(label, { opacity: 0 });
    ring.classList.remove('is-active');
  });
  document.addEventListener('mouseenter', () => gsap.set(cursor, { opacity: 1 }));
}

/* ─── Per-tile 3D tilt — cursor position within tile drives rotateX/Y ─── */
function initTileTilt() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  document.querySelectorAll('.gallery__item').forEach(tile => {
    const img = tile.querySelector('.gallery__image');
    const setRX = gsap.quickTo(tile, 'rotateX', { duration: 0.45, ease: 'power3.out' });
    const setRY = gsap.quickTo(tile, 'rotateY', { duration: 0.45, ease: 'power3.out' });
    tile.addEventListener('mouseenter', () => {
      // scale image inside — tile overflow:hidden contains it, grid stays intact
      if (img) gsap.to(img, { scale: 1.06, duration: 0.75, ease: 'elastic.out(1, 0.4)' });
    });
    tile.addEventListener('mousemove', e => {
      const r = tile.getBoundingClientRect();
      const nx = (e.clientX - r.left)  / r.width;
      const ny = (e.clientY - r.top)   / r.height;
      setRX((0.5 - ny) * 18);
      setRY((nx - 0.5) * 18);
    });
    tile.addEventListener('mouseleave', () => {
      if (img) gsap.to(img, { scale: 1, duration: 0.65, ease: 'elastic.out(1, 0.45)' });
      gsap.to(tile, { rotateX: 0, rotateY: 0, duration: 0.65, ease: 'elastic.out(1, 0.45)' });
    });
  });
}

/* elastic scroll removed — spring on .gallery conflicted with StickyGrid CSS translate centering */

/* ─── WebGL hover: exponential easing zoom (Curtains.js pen, raw WebGL) ─── */
function initBulgeEffects() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const W = 600, H = 380;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  canvas.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:500;opacity:0;';
  document.body.appendChild(canvas);

  const gl = canvas.getContext('webgl');
  if (!gl) { canvas.remove(); return; }

  const VS = 'attribute vec2 p;varying vec2 v;void main(){v=vec2(p.x*.5+.5,1.-(p.y*.5+.5));gl_Position=vec4(p,0.,1.);}';
  // Exact shader logic from codepen.io/AlainBarrios/pen/NQrodJ
  // exponential easing applied per-pixel creates a mathematical zoom from center;
  // R channel diverges slightly from G/B at mid-progress for a controlled chroma split
  const FS = [
    'precision mediump float;',
    'varying vec2 v;',
    'uniform sampler2D uImg;',
    'uniform float uP;',  // hover zoom progress 0→1
    'uniform float uW;',  // scroll wave strength 0→1
    'float expEase(float x,float a){',
    '  a=clamp(a,0.00001,0.99999);',
    '  return a<0.5?pow(x,2.*a):pow(x,1./(1.-2.*(a-.5)));',
    '}',
    'void main(){',
    '  float d=expEase(length(v-.5),uP)-1.+uP*.75;',
    '  vec2 c=(v-.5)*d;',
    '  vec2 r=c*(uP*.6+.4)+v;',
    '  vec2 g=c*(uP*.9+.1)+v;',
    // scroll wave: sine distortion across Y axis — R/G split for chroma feel
    '  float wave=sin(v.y*3.14159*5.0)*uW*0.018;',
    '  r.x+=wave;',
    '  g.x+=wave*1.15;',
    '  gl_FragColor=vec4(',
    '    texture2D(uImg,clamp(r,0.,1.)).r,',
    '    texture2D(uImg,clamp(g,0.,1.)).g,',
    '    texture2D(uImg,clamp(g,0.,1.)).b,',
    '  1.);',
    '}',
  ].join('');

  function mkShader(type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src); gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      console.error('Shader:', gl.getShaderInfoLog(sh)); return null;
    }
    return sh;
  }
  const vs = mkShader(gl.VERTEX_SHADER, VS);
  const fs = mkShader(gl.FRAGMENT_SHADER, FS);
  if (!vs || !fs) { canvas.remove(); return; }

  const prog = gl.createProgram();
  gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error('Link:', gl.getProgramInfoLog(prog)); canvas.remove(); return;
  }
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
  const aP = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(aP);
  gl.vertexAttribPointer(aP, 2, gl.FLOAT, false, 0, 0);
  gl.viewport(0, 0, W, H);

  const uImg = gl.getUniformLocation(prog, 'uImg');
  const uP   = gl.getUniformLocation(prog, 'uP');
  const uW   = gl.getUniformLocation(prog, 'uW');

  const texCache = new Map();
  function buildTex(img) {
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    try {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    } catch(e) {
      // SecurityError: image cached without CORS — reload with crossorigin then retry once
      gl.deleteTexture(tex);
      return null;
    }
    return tex;
  }
  function getTex(img) {
    if (texCache.has(img.src)) return texCache.get(img.src);
    if (!img.complete || !img.naturalWidth) return null;
    const tex = buildTex(img);
    if (!tex) {
      // Force a CORS-clean reload via new Image
      const fresh = new Image();
      fresh.crossOrigin = 'anonymous';
      fresh.onload = () => {
        const t = buildTex(fresh);
        if (t) texCache.set(img.src, t);
      };
      fresh.src = img.src + (img.src.includes('?') ? '&' : '?') + '_cors=1';
      return null;
    }
    texCache.set(img.src, tex);
    return tex;
  }

  const state = { progress: 0, raf: null, tex: null };

  function draw() {
    if (!state.tex) return;
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, state.tex);
    gl.uniform1i(uImg, 0);
    gl.uniform1f(uP, state.progress);
    gl.uniform1f(uW, scrollVel / 6);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  function loop() { draw(); state.raf = requestAnimationFrame(loop); }

  document.querySelectorAll('.gallery__item').forEach(function(tile) {
    const img = tile.querySelector('.gallery__image');
    if (!img) return;

    function tryCache() { try { getTex(img); } catch(e) {} }
    if (img.complete && img.naturalWidth) tryCache();
    else img.addEventListener('load', tryCache, { once: true });

    tile.addEventListener('mouseenter', function() {
      let tex; try { tex = getTex(img); } catch(e) {}
      if (!tex) return;
      const r = tile.getBoundingClientRect();
      canvas.style.left = r.left + 'px'; canvas.style.top  = r.top  + 'px';
      canvas.style.width = r.width + 'px'; canvas.style.height = r.height + 'px';
      state.tex = tex;
      if (!state.raf) loop();
      gsap.killTweensOf(state); gsap.killTweensOf(canvas);
      state.progress = 0.4; // skip the brief widen at uP < 0.4
      gsap.to(canvas, { opacity: 1, duration: 0.2, ease: 'power2.out' });
      gsap.to(state, { progress: 1, duration: 0.7, ease: 'expo.out' });
    });

    tile.addEventListener('mouseleave', function() {
      gsap.killTweensOf(state); gsap.killTweensOf(canvas);
      gsap.to(canvas, {
        opacity: 0, duration: 0.35, ease: 'power2.in',
        onComplete: function() {
          cancelAnimationFrame(state.raf); state.raf = null; state.tex = null; state.progress = 0;
        },
      });
    });
  });
}


/* ─── Hero: three depth planes responding to cursor ─── */
function initHeroParallax() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const akumali     = document.getElementById('akumaliFixed');
  const heroContent = document.getElementById('heroContent');
  const datum       = document.querySelector('.hero__datum');
  if (!akumali) return;

  // Plane 1 — AKUMALI (deepest, far wall): x only, very slow, barely moves
  const setAkuX = gsap.quickTo(akumali, 'x', { duration: 2.2, ease: 'power3.out' });

  // Plane 2 — datum horizon line (mid-depth): x only, faster, wider swing
  const setDatumX = datum
    ? gsap.quickTo(datum, 'x', { duration: 1.5, ease: 'power3.out' })
    : null;

  // Plane 3 — hero text (closest, foreground): x + y, most responsive
  const setHeroX = heroContent
    ? gsap.quickTo(heroContent, 'x', { duration: 1.0, ease: 'power3.out' })
    : null;
  const setHeroY = heroContent
    ? gsap.quickTo(heroContent, 'y', { duration: 1.0, ease: 'power3.out' })
    : null;

  window.addEventListener('mousemove', (e) => {
    const cx = e.clientX / window.innerWidth  - 0.5; // –0.5 → +0.5
    const cy = e.clientY / window.innerHeight - 0.5;
    setAkuX(cx * 7);                              // far:  7px  — barely moves
    if (setDatumX) setDatumX(cx * 18);            // mid:  18px — visible shift
    if (setHeroX)  setHeroX(cx * 32);             // near: 32px — most movement
    if (setHeroY)  setHeroY(cy * 16);             // near: 16px vertical
  });

  window.addEventListener('mouseleave', () => {
    setAkuX(0);
    if (setDatumX) setDatumX(0);
    if (setHeroX)  setHeroX(0);
    if (setHeroY)  setHeroY(0);
  });
}

/* ─── Entrance sequence ─── */
function playEntrance(onComplete) {
  const letters = [...document.querySelectorAll('.akumali-fixed__letter')];
  const cursor  = document.getElementById('akumaliCursor');
  const nav     = document.querySelector('.nav');
  const datum   = document.querySelector('.hero__datum');

  // Hide everything: letters invisible, cursor off
  gsap.set(letters, { opacity: 0 });
  if (cursor) cursor.classList.remove('is-blinking');
  gsap.set(nav, { opacity: 0, y: -4 });
  gsap.set(datum, { scaleX: 0 });

  const tl = gsap.timeline({ onComplete });
  let delay = 0.5;

  // Type each letter one by one
  letters.forEach((letter, i) => {
    tl.to(letter, { opacity: 1, duration: 0.05, ease: 'none' }, delay + i * 0.1);
  });

  // After last letter: show blinking cursor for ~1.2s then remove
  const lastLetterEnd = delay + (letters.length - 1) * 0.1 + 0.05;
  tl.add(() => {
    if (cursor) cursor.classList.add('is-blinking');
  }, lastLetterEnd);
  tl.add(() => {
    if (cursor) {
      cursor.classList.remove('is-blinking');
      gsap.to(cursor, { opacity: 0, duration: 0.25 });
    }
  }, lastLetterEnd + 1.1);

  // Nav, datum, and hero content after typing finishes
  const heroContent = document.getElementById('heroContent');
  if (heroContent) {
    gsap.set(heroContent, { opacity: 1 });
    gsap.set([...heroContent.children], { clipPath: 'inset(100% 0 0 0)', y: 12 });
  }

  tl.to(nav, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', force3D: true }, lastLetterEnd + 0.1)
    .to(datum, { scaleX: 1, duration: 1.0, ease: 'power3.out', force3D: true }, lastLetterEnd + 0.2);

  if (heroContent) {
    tl.to([...heroContent.children], {
      clipPath: 'inset(0% 0 0 0)',
      y: 0,
      duration: 0.85,
      ease: 'power3.out',
      stagger: 0.12,
      force3D: true,
    }, lastLetterEnd + 0.45);
  }
}

window.PORTFOLIO_ITEMS = PORTFOLIO_ITEMS;
window.openDetail = openDetail;
window.closeDetail = closeDetail;

/* ─── Mobile ring carousel — gesture + tilt + haptic ─── */
function setupMobileLayout() {
  document.body.classList.add('is-mobile');

  ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,orientationchange',
    ignoreMobileResize: true,
  });

  // Three featured panels — picked for visual impact
  const FEATURED_INDICES = [4, 0, 2]; // Rove, Ntoma, Forma Studio
  const MULTIPLIERS = [1.4, 0.25, -0.9]; // left fans most, center barely, right counter

  const panelsEl = document.getElementById('mobPanels');
  if (!panelsEl) return;

  // Build panels
  FEATURED_INDICES.forEach((idx, pi) => {
    const item = PORTFOLIO_ITEMS[idx];
    const div = document.createElement('div');
    div.className = 'mob-panel';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}" loading="eager" />
      <div class="mob-panel__overlay"></div>
      <div class="mob-panel__label">
        <span class="mob-panel__cat">${item.category}</span>
        <span class="mob-panel__title">${item.title}</span>
      </div>`;
    div.addEventListener('click', () => {
      openDetail(item, `PROJECT · ${String(idx + 1).padStart(2, '0')}`, null);
    });
    panelsEl.appendChild(div);
  });

  const panels = panelsEl.querySelectorAll('.mob-panel');

  // Tilt state
  let tiltTarget = 0;
  let tiltCurrent = 0;
  let hasGyro = false;
  let touchStartX = null;

  // RAF lerp loop — smooth regardless of input source
  (function tick() {
    tiltCurrent += (tiltTarget - tiltCurrent) * 0.07;
    panels.forEach((el, i) => {
      const rotY = tiltCurrent * MULTIPLIERS[i];
      const tx   = tiltCurrent * MULTIPLIERS[i] * 0.35;
      el.style.transform = `rotateY(${rotY}deg) translateX(${tx}px)`;
    });
    requestAnimationFrame(tick);
  })();

  // Gyroscope listener
  function startGyro() {
    window.addEventListener('deviceorientation', e => {
      hasGyro = true;
      tiltTarget = Math.max(-28, Math.min(28, e.gamma || 0));
    }, true);
  }

  // iOS 13+ requires a permission gesture before DeviceOrientationEvent fires
  const gyroBtn = document.getElementById('mobGyroBtn');
  if (typeof DeviceOrientationEvent !== 'undefined' &&
      typeof DeviceOrientationEvent.requestPermission === 'function') {
    if (gyroBtn) {
      gyroBtn.style.display = 'flex';
      gyroBtn.addEventListener('click', async () => {
        try {
          const result = await DeviceOrientationEvent.requestPermission();
          if (result === 'granted') { startGyro(); gyroBtn.style.display = 'none'; }
        } catch (_) {}
      });
    }
  } else {
    startGyro();
  }

  // Touch-drag fallback — horizontal drag drives tilt when no gyro
  window.addEventListener('touchstart', e => {
    if (hasGyro) return;
    touchStartX = e.touches[0] ? e.touches[0].clientX : null;
  }, { passive: true });

  window.addEventListener('touchmove', e => {
    if (hasGyro || touchStartX === null) return;
    const dx = (e.touches[0] ? e.touches[0].clientX : touchStartX) - touchStartX;
    tiltTarget = Math.max(-28, Math.min(28, dx * 0.25));
  }, { passive: true });

  window.addEventListener('touchend', () => {
    if (hasGyro) return;
    tiltTarget = 0;
    touchStartX = null;
  });

  // Entrance animations
  gsap.fromTo('.mob-scene__bust',
    { opacity: 0, scale: 0.75 },
    { opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(1.4)', delay: 0.1 }
  );
  gsap.fromTo(panels,
    { y: 120, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.25 }
  );
  gsap.fromTo('.mob-scene__wordmark',
    { opacity: 0 },
    { opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.7 }
  );
}

/* ─── Boot ─── */
document.addEventListener('DOMContentLoaded', () => {
  // Prevent browser from restoring previous scroll position on refresh
  if (history.scrollRestoration) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  gsap.registerPlugin(ScrollTrigger);

  // iOS Safari runs scroll on a separate thread — these prevent rubber-band stutter
  ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,orientationchange,load',
    ignoreMobileResize: true,
  });

  isMobile = window.innerWidth <= 900 || window.innerHeight <= 500 || window.matchMedia('(pointer: coarse)').matches;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  initTheme();
  initCursor();
  initMenu();
  renderGrid();
  initDetail();

  window.addEventListener('orientationchange', () => {
    setTimeout(() => window.location.reload(), 300);
  });

  if (isMobile) {
    setupMobileLayout();
    return; // skip 3D ring, Lenis, StickyGrid, playEntrance on touch devices
  }

  try { new StickyGrid(); }   catch(e) { console.warn('StickyGrid init failed:', e); }
  try { initBulgeEffects(); } catch(e) { console.warn('Bulge init failed:', e); }
  try { initTileTilt(); }     catch(e) { console.warn('TileTilt init failed:', e); }

  // Skip entrance animation for users who prefer reduced motion — show content immediately
  if (prefersReducedMotion) {
    const akumali = document.getElementById('akumaliFixed');
    if (akumali) gsap.set(akumali, { xPercent: -50, yPercent: -50, opacity: 1 });
    document.dispatchEvent(new CustomEvent('akumali:entranceDone'));
    initLenis();
    return;
  }

  gsap.ticker.lagSmoothing(0);

  // Centre akumali before entrance so it doesn't flash from the wrong position
  const akumali = document.getElementById('akumaliFixed');
  if (akumali) gsap.set(akumali, { xPercent: -50, yPercent: -50, opacity: 1 });

  playEntrance(() => {
    // Ambient float on AKUMALI while at rest in the hero
    if (akumali) {
      gsap.to(akumali, {
        y: -8, duration: 6, ease: 'sine.inOut', repeat: -1, yoyo: true,
      });
    }

    initHeroParallax();

    // AKUMALI shrinks AND fades out as user scrolls hero away
    if (akumali) {
      gsap.to(akumali, {
        top: '50%',
        scale: 0.18,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // Hero text fades out as user begins scrolling
    const heroContent = document.getElementById('heroContent');
    if (heroContent) {
      gsap.to(heroContent, {
        opacity: 0,
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: '45% top',
          scrub: true,
        },
      });
    }

    // Notify scene.js — canvas reveal is scroll-driven, not immediate
    document.dispatchEvent(new CustomEvent('akumali:entranceDone'));

    initLenis(); // refresh happens after all triggers are registered
  });
});
