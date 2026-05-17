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
    const akumali = document.getElementById('akumaliFixed');
    gsap.timeline({ defaults: { overwrite: true } })
      .to([this.subheading, this.description, this.btn], {
        opacity: isVisible ? 1 : 0,
        duration: 0.4,
        ease: `power1.${isVisible ? 'inOut' : 'out'}`,
        pointerEvents: isVisible ? 'all' : 'none',
      })
      .to(akumali, {
        opacity: isVisible ? 0 : 1,
        duration: 0.4,
        ease: 'power1.out',
      }, '<');

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
              ? `<video class="story__video" src="${ch1MediaSrc}" muted loop playsinline></video>`
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
        <span class="detail__label">WHO I AM</span>
        <p class="story__body">${item.description || ''}</p>
      </div>
      <div class="story__reveal">
        <span class="detail__label">THE MISALIGNMENT</span>
        <p class="story__body">${item.challenge || ''}</p>
      </div>
      <div class="story__reveal">
        <span class="detail__label">HOW I WORK</span>
        <p class="story__pullquote">${item.solution || ''}</p>
      </div>
      <div class="story__reveal">
        <span class="detail__label">THE FACTS</span>
        <ul class="detail__outcomes">
          ${(item.results || []).map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>
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
  // Delay so opening animation settles before observer fires
  const tid = setTimeout(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('is-visible');
      });
    }, { root: detailEl, rootMargin: '0px 0px -38% 0px', threshold: 0.12 });
    reveals.forEach(el => obs.observe(el));
    storyCleanup.push(() => obs.disconnect());
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
      initLenis();
      if (!isMobile) {
        const akumali = document.getElementById('akumaliFixed');
        if (akumali) gsap.to(akumali, { opacity: 1, duration: 0.3, ease: 'power2.out' });
      }
    },
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
    openDetail(PORTFOLIO_ITEMS[7], 'ABOUT', null);
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
  const letters = [...document.querySelectorAll('.akumali-fixed__letter')];
  const nav     = document.querySelector('.nav');
  gsap.set(letters, { opacity: 0, y: 20 });
  gsap.set(nav, { opacity: 0 });
  gsap.timeline({ onComplete })
    .to(letters, {
      opacity: 1, y: 0,
      duration: 1.0, ease: 'expo.out',
      stagger: { each: 0.07, from: 'start' },
      delay: 0.15,
    })
    .to(nav, { opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.4');
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

  // Centre akumali before entrance so it doesn't flash from the wrong position
  const akumali = document.getElementById('akumaliFixed');
  if (akumali) gsap.set(akumali, { xPercent: -50, yPercent: -50 });

  playEntrance(() => {
    initLenis();
    new StickyGrid();

    // AKUMALI shrinks and moves toward grid content as hero scrolls out; scrub reverses on scroll-up
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
  });
});
