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
  /* LEFT COLUMN — indices 0, 1, 2 */
  {
    id: 1,
    title: 'Ntoma',
    subtitle: 'AI-Powered Garment Pattern Generation',
    category: 'AI Product',
    image: 'ntoma.png',
    media: ['ntoma4.mp4', 'ntoma3.png', 'ntoma2.png', 'ntoma1.png', 'ntoma.png'],
    type: 'project',
    description: 'A designer found a photo of the perfect dress. Her local tailor quoted €200 and 6 weeks.',
    challenge: 'Patterns have always been the bottleneck between idea and garment. Not the fabric. Not the sewing. The math.',
    solution: 'One photo. Two minutes. Correct pattern pieces, size-graded XS to XL, exported for factory production. The tailor became optional.',
    results: [
      'The bottleneck was never the fabric.',
      'Photo to pattern in under 2 minutes',
      'XS–XL grading, automatic',
      'DXF export for factory production',
      'Early access waitlist live',
    ],
    tech: ['React', 'FastAPI', 'Python', 'OpenAI Vision', 'Vercel'],
    link: 'https://ntoma.vercel.app'
  },
  {
    id: 3,
    title: 'CAN Architecture',
    subtitle: 'Portfolio platform for an award-winning architecture firm',
    category: 'Editorial Platform',
    image: 'can.png',
    media: ['can-demo.mp4', 'can.png'],
    type: 'project',
    description: 'The firm was winning commissions in the room. They were losing them before the meeting ever happened.',
    challenge: 'Architecture is a trust business. Clients form their impression from a portfolio — and the best work in the city was buried in a PDF nobody opened.',
    solution: 'A platform engineered to make the work do the selling. Immersive project pages. Filterable by typology. An admin panel she controls without code, so the portfolio stays current without a developer on retainer.',
    results: [
      'Good work deserves a stage that matches it',
      'Live 3 weeks from brief',
      'Inbound client inquiries within 60 days of launch',
      'Zero developer dependency — fully self-managed',
      '€2,500 total investment',
    ],
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
    description: 'Therapy is built on trust. The digital experience must feel that way from the first click.',
    challenge: 'Clinical coldness kills conversion before the first session. But too much warmth reads as unprofessional.',
    solution: 'Warm, precise, bilingual. Local SEO built in. Booking integrated. The site does the reassuring before she picks up the phone.',
    results: [
      'Warmth and credibility are not opposites.',
      'Live and fully responsive',
      'Bilingual LT/EN',
      'Local SEO optimised',
      'Mobile-first design',
    ],
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
    description: 'Legal teams spend hours reviewing contracts. They should spend that time on strategy.',
    challenge: 'One missed clause in a 40-page contract can cost more than the entire project. Every review is a liability.',
    solution: 'Upload the contract. Claude reads it in real time — flags risks, missing clauses, non-standard terms. The review that used to take a day takes twelve minutes.',
    results: [
      'The risk was always in the document. Now it\'s visible.',
      '60% reduction in review time',
      'Zero missed risks',
      '6 weeks MVP to production',
      'Processing 100+ documents/week',
    ],
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
    description: 'Expats in Thailand need a cleaner. They don\'t need a language barrier to book one.',
    challenge: 'Trust doesn\'t exist in a vacuum. Without reviews, without easy booking, without English — good providers stayed invisible.',
    solution: 'Full-stack marketplace: provider onboarding, booking, payment, AI customer support. The gap between a good provider and a paying client closed.',
    results: [
      'The services existed. The infrastructure didn\'t.',
      'Full marketplace MVP built',
      'Booking + payment integrated',
      'AI customer onboarding agents',
      'Provider management system',
    ],
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
    description: 'Strategy, design, and code from one brain instead of three invited to misalign.',
    challenge: 'When you hire separately: the designer makes something beautiful, the developer says it won\'t scale, the strategist writes a plan — and nobody\'s reading the same document.',
    solution: 'One person. One vision. The full stack of thinking — from positioning to deployed code — moving as one. I take 1–2 projects at a time. Not a limitation. A feature.',
    results: [
      'One engagement. No handoffs. No translation loss.',
      'Solo-led — you work with the maker directly',
      'Strategy + design + code as one vision',
      'Selected clients only',
      'Ships in weeks, not quarters',
    ],
    tech: ['Strategy', 'Design', 'Engineering'],
    link: 'mailto:gyamfuwaa@protonmail.com'
  },

  /* ABOUT — index 6 */
  {
    id: 7,
    title: 'Theresa Gyamfuwaa',
    subtitle: 'Developer & AI Builder',
    category: 'Studio',
    image: 'about-me.webp',
    type: 'about',
    description: 'I build things that don\'t exist yet. Not components — systems. Not features — leverage.',
    challenge: 'Most developers translate briefs. They solve the problem as stated. I solve the problem behind the problem — the one your users feel but can\'t articulate.',
    solution: 'One engagement. One brain. Strategy, design, and code moving as one. No handoffs. No translation loss. No committee.',
    results: ['5 years building production systems in Thailand + remote', 'Fluent in React, Node.js, Python, FastAPI, Firebase, Claude, GPT-4', 'Available for select projects — starting from €2,500', 'Response within 24 hours'],
    pricing: [
      { name: 'Foundation', price: '€2,500', duration: '3–4 weeks', desc: 'Website or landing page. SEO optimised. Mobile-first. You own the code.' },
      { name: 'Product', price: '€5,000–7,500', duration: '8–12 weeks', desc: 'Full web app or SaaS. Built to scale.' },
      { name: 'Retainer', price: 'from €2,500/mo', duration: '6+ months', desc: 'Strategic direction and execution. Shipped every week.' },
    ],
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

/* ─── Grid images — 6 project tiles ─── */
const GRID_IMAGES = [
  { src: 'ntoma.png',   projectIdx: 0 },
  { src: 'can.png',     projectIdx: 1 },
  { src: 'psych.png',   projectIdx: 2 },
  { src: 'aice.png',    projectIdx: 3 },
  { src: 'gigzo.png',   projectIdx: 4 },
  { src: 'studio.jpeg', projectIdx: 5 },
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
      <img class="gallery__image" src="${img.src}" alt="${item.title}" loading="lazy" />
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

    const akumali = document.getElementById('akumaliFixed');
    const zoomTl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.inOut' } });
    zoomTl.to(this.grid, { scale: 1.55 });
    zoomTl.to(this.columns[0], { xPercent: -72 }, '<');
    zoomTl.to(this.columns[2], { xPercent: 72 }, '<');
    zoomTl.to(this.columns[1], {
      yPercent: (i) => (i === 0 ? -1 : 1) * 110,
      duration: 1,
      ease: 'power3.inOut',
    }, '<');
    if (akumali) zoomTl.to(akumali, { opacity: 0, duration: 0.4, ease: 'power2.in' }, '<0.3');

    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: this.block,
        start: 'top top',
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

    if (isVisible) {
      this.idleTweens = [
        gsap.to(this.grid, { y: -6, duration: 5, ease: 'sine.inOut', repeat: -1, yoyo: true }),
      ];
      this.startDepthParallax();
    } else {
      if (this.idleTweens) {
        this.idleTweens.forEach(t => t.kill());
        gsap.set(this.grid, { y: 0 });
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

    // Tiles are the fixed backdrop — only the text panel floats as a separate layer.
    // Each text element sits at a different depth so the block has internal 3D structure:
    // headline (deepest) → body copy (mid) → CTA button (closest/most responsive)
    const setSubX = gsap.quickTo(this.subheading, 'x', { duration: 1.6, ease: 'power3.out' });
    const setSubY = gsap.quickTo(this.subheading, 'y', { duration: 1.8, ease: 'power3.out' });
    const setDescX = gsap.quickTo(this.description, 'x', { duration: 1.3, ease: 'power3.out' });
    const setDescY = gsap.quickTo(this.description, 'y', { duration: 1.4, ease: 'power3.out' });
    const setBtnX = gsap.quickTo(this.btn, 'x', { duration: 0.95, ease: 'power3.out' });
    const setBtnY = gsap.quickTo(this.btn, 'y', { duration: 1.0, ease: 'power3.out' });

    const onMove = (e) => {
      const cx = e.clientX / window.innerWidth  - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;
      // All drift opposite to cursor (parallax window — text is the near glass plane)
      setSubX(cx * -10);  setSubY(cy * -6);   // headline: far within text block
      setDescX(cx * -16); setDescY(cy * -9);  // body: mid
      setBtnX(cx * -24);  setBtnY(cy * -13);  // CTA: closest, most movement
    };

    window.addEventListener('mousemove', onMove);

    this.depthCleanup = () => {
      window.removeEventListener('mousemove', onMove);
      gsap.to([this.subheading, this.description, this.btn], {
        x: 0, y: 0, duration: 0.9, ease: 'power3.out',
      });
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
function lenisRaf(time) { if (lenis) lenis.raf(time * 1000); }
function initLenis() {
  lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 1.4 });
  lenis.on('scroll', ScrollTrigger.update);
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
            <span class="detail__label">THE GOAL</span>
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
        <span class="detail__label">THE DESIGN</span>
        <p class="story__center-text">${item.solution || ''}</p>
      </div>
      ${photoGrid(ph2)}
    </div>

    <div class="story__ch3">
      ${outcomes.length ? `
      <div class="story__outcomes-wrap story__reveal">
        <span class="detail__label">OUTCOMES</span>
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
        <a class="detail__link" href="${item.link || '#'}">Get in touch →</a>
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
    if (detailHero) detailHero.style.display = 'none';
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

function initDetail() {
  const detail = document.getElementById('detail');

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

  // "About me" button — no tile origin, no hero
  document.getElementById('workBtn')?.addEventListener('click', () => {
    openDetail(PORTFOLIO_ITEMS[6], 'ABOUT', null);
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

/* ─── Custom cursor ─── */
function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  let mx = 0, my = 0, cx = 0, cy = 0, running = true;

  window.addEventListener('mousemove', e => {
    const target = document.elementFromPoint(e.clientX, e.clientY);
    const galleryItem = target?.closest('.gallery__item');
    if (galleryItem) {
      const r = galleryItem.getBoundingClientRect();
      const cx2 = r.left + r.width / 2;
      const cy2 = r.top + r.height / 2;
      const dx = cx2 - e.clientX;
      const dy = cy2 - e.clientY;
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
    if (!running) return;
    cx = lerp(cx, mx, 0.12);
    cy = lerp(cy, my, 0.12);
    gsap.set(cursor, { x: cx - 3, y: cy - 3 });
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

/* ─── WebGL bulge distortion on tile hover ─── */
class BulgeTile {
  constructor(tile) {
    this.tile     = tile;
    this.img      = tile.querySelector('.gallery__image');
    this.strength = 0;
    this.mouse    = [0.5, 0.5];
    this.aspect   = 1;
    this.raf      = null;
    this.texture  = null;

    if (!this.img) return;

    this.canvas = document.createElement('canvas');
    Object.assign(this.canvas.style, {
      position: 'absolute', inset: '0',
      width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: '1', opacity: '0',
    });
    tile.appendChild(this.canvas);

    this.gl = this.canvas.getContext('webgl', { alpha: false, antialias: false });
    if (!this.gl) return;

    this._setup();
    this._loadTexture();
    this._bindEvents();
  }

  _compile(type, src) {
    const { gl } = this;
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  }

  _setup() {
    const { gl } = this;

    // Minimal vertex: full-screen quad, flip Y for WebGL convention
    const vs = `
      attribute vec2 a;
      varying vec2 v;
      void main() {
        v = vec2(a.x * .5 + .5, 1. - (a.y * .5 + .5));
        gl_Position = vec4(a, 0., 1.);
      }`;

    // Fragment: radial bulge — samples from closer to cursor, spreading image outward
    // Tuned restrained: tight radius, low max displacement (tensioned glass, not liquid)
    const fs = `
      precision highp float;
      varying vec2 v;
      uniform sampler2D tex;
      uniform vec2 mouse;
      uniform float str;
      uniform float asp; // width / height
      void main() {
        vec2 uv = v;
        vec2 d  = uv - mouse;
        d.x    *= asp;                          // correct for aspect ratio → circular bulge
        float dist    = length(d);
        float falloff = smoothstep(.34, .0, dist);
        vec2 nd = normalize(d);
        uv -= vec2(nd.x / asp, nd.y) * falloff * str * .09;
        gl_FragColor = texture2D(tex, clamp(uv, .0, 1.));
      }`;

    const prog = gl.createProgram();
    gl.attachShader(prog, this._compile(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, this._compile(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const a = gl.getAttribLocation(prog, 'a');
    gl.enableVertexAttribArray(a);
    gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);

    this.u = {
      tex:   gl.getUniformLocation(prog, 'tex'),
      mouse: gl.getUniformLocation(prog, 'mouse'),
      str:   gl.getUniformLocation(prog, 'str'),
      asp:   gl.getUniformLocation(prog, 'asp'),
    };
  }

  _loadTexture() {
    const { gl } = this;
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T].forEach(p => gl.texParameteri(gl.TEXTURE_2D, p, gl.CLAMP_TO_EDGE));
    [gl.TEXTURE_MIN_FILTER, gl.TEXTURE_MAG_FILTER].forEach(p => gl.texParameteri(gl.TEXTURE_2D, p, gl.LINEAR));

    const upload = () => {
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.img);
      this.texture = tex;
    };

    this.img.complete && this.img.naturalWidth
      ? upload()
      : this.img.addEventListener('load', upload, { once: true });
  }

  _resize() {
    const r   = this.tile.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio, 2);
    this.canvas.width  = r.width  * dpr;
    this.canvas.height = r.height * dpr;
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    this.aspect = r.width / r.height;
  }

  _draw() {
    if (!this.texture) return;
    const { gl, u } = this;
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.uniform1i(u.tex, 0);
    gl.uniform2f(u.mouse, this.mouse[0], this.mouse[1]);
    gl.uniform1f(u.str, this.strength);
    gl.uniform1f(u.asp, this.aspect);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  _loop() {
    this._draw();
    this.raf = requestAnimationFrame(() => this._loop());
  }

  _bindEvents() {
    this.tile.addEventListener('mouseenter', () => {
      this._resize();
      if (!this.raf) this._loop();
      gsap.to(this.canvas, { opacity: 1, duration: 0.2, ease: 'none' });
      gsap.to(this, { strength: 1, duration: 0.8, ease: 'power2.out', overwrite: true });
    });

    this.tile.addEventListener('mousemove', e => {
      const r = this.tile.getBoundingClientRect();
      this.mouse[0] =       (e.clientX - r.left) / r.width;
      this.mouse[1] = 1.0 - (e.clientY - r.top)  / r.height; // flip Y for WebGL
    });

    this.tile.addEventListener('mouseleave', () => {
      gsap.to(this, {
        strength: 0, duration: 0.55, ease: 'power2.inOut', overwrite: true,
        onComplete: () => {
          gsap.to(this.canvas, { opacity: 0, duration: 0.15, ease: 'none' });
          cancelAnimationFrame(this.raf);
          this.raf = null;
        },
      });
    });
  }
}

function initBulgeEffects() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  document.querySelectorAll('.gallery__item').forEach(tile => new BulgeTile(tile));
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
  if (heroContent) gsap.set([...heroContent.children], { opacity: 0, y: 20 });

  tl.to(nav, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, lastLetterEnd + 0.1)
    .to(datum, { scaleX: 1, duration: 1.0, ease: 'power3.out' }, lastLetterEnd + 0.2);

  if (heroContent) {
    tl.to([...heroContent.children], {
      opacity: 1, y: 0,
      duration: 0.8, ease: 'cubic-bezier(0.76, 0, 0.24, 1)',
      stagger: 0.1,
    }, lastLetterEnd + 0.4);
  }
}

/* ─── Boot ─── */
document.addEventListener('DOMContentLoaded', () => {
  // Prevent browser from restoring previous scroll position on refresh
  if (history.scrollRestoration) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  gsap.registerPlugin(ScrollTrigger);

  isMobile = window.innerWidth <= 900 || window.innerHeight <= 500;

  initTheme();
  initCursor();
  renderGrid();
  initDetail();
  initBulgeEffects();

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

  // Centre akumali before entrance so it doesn't flash from the wrong position
  const akumali = document.getElementById('akumaliFixed');
  if (akumali) gsap.set(akumali, { xPercent: -50, yPercent: -50 });

  playEntrance(() => {
    // Ambient float on AKUMALI while at rest in the hero
    if (akumali) {
      gsap.to(akumali, {
        y: -8, duration: 6, ease: 'sine.inOut', repeat: -1, yoyo: true,
      });
    }

    initHeroParallax();

    // Create all ScrollTriggers first, then refresh via initLenis
    new StickyGrid();

    if (akumali) {
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

    initLenis(); // refresh happens after all triggers are registered
  });
});
