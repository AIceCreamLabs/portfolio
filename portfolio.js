const portfolioItems = [
  {
    id: 1,
    title: 'Ntoma',
    subtitle: 'AI Fashion Pattern Tool',
    image: 'ntoma.png',
    media: ['ntoma.png', 'ntoma-demo.mp4'],
    type: 'project',
    category: 'AI Product',
    description: 'AI-powered garment pattern generation. Upload any photo, get a production-ready sewing pattern with flat drawings, virtual fit preview, and DXF factory export.',
    challenge: 'Fashion designers and home sewers spend hours or hundreds of euros getting patterns made from reference photos. There was no affordable, fast alternative.',
    solution: 'Built a full AI pipeline: computer vision garment analysis, technical flat drawing generation, mathematically correct pattern pieces, virtual fit on body silhouette, and multi-size grading — all from a single photo.',
    results: [
      'Photo → pattern in under 2 minutes',
      'XS–XL grading automatic',
      'DXF export for factory production',
      'Assembly guide included',
      'Early access waitlist live'
    ],
    tech: ['React', 'FastAPI', 'Python', 'OpenAI Vision', 'Base44', 'Vercel'],
    link: 'https://ntoma.vercel.app'
  },
  {
    id: 2,
    title: 'Psychologist Lithuania',
    subtitle: 'Professional Services Website',
    image: 'psych.png',
    media: ['psych.png', 'psych0.png', 'psych1.png', 'psych2.png', 'psych3.png', 'psych4.png', 'psych5.png', 'psych-demo.mp4'],
    type: 'project',
    category: 'Web Development',
    description: 'Clean, professional website for a psychotherapy practice in Lithuania. Designed for trust, accessibility, and client conversion.',
    challenge: 'The client needed a website that felt warm and trustworthy — not clinical. Had to work perfectly in Lithuanian and English.',
    solution: 'Built a bilingual, mobile-first website with calm design language, clear service descriptions, and an integrated booking flow.',
    results: [
      'Live and fully responsive',
      'Bilingual LT/EN',
      'Optimised for local SEO',
      'Mobile-first design'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    link: 'https://sigitaasvydiene.lt/'
  },
  {
    id: 3,
    title: 'CAN Architecture',
    subtitle: 'Architecture Studio Website',
    image: 'can.png',
    media: ['can.png', 'can-demo.mp4'],
    type: 'project',
    category: 'Web Development',
    description: 'Editorial architecture portfolio website with smooth scroll effects, large-format imagery, and bilingual navigation — built for a French architecture studio.',
    challenge: 'The client wanted a website that felt like a printed architecture monograph — slow, intentional, image-led. Not a typical corporate template.',
    solution: 'Custom React build with Framer Motion scroll animations, full-bleed image layouts, and a project gallery that mirrors the big.dk scroll style.',
    results: [
      'Custom scroll effects matching big.dk',
      'Bilingual FR/EN',
      'Full-bleed editorial layout',
      'Optimised image loading'
    ],
    tech: ['React', 'Framer Motion', 'CSS', 'Vercel'],
    link: 'https://can-yinka-muu8xna3i-aicecreamlabs-6519s-projects.vercel.app/'
  },
  {
    id: 4,
    title: 'AICE Legal',
    subtitle: 'AI Legal Document Advisor',
    image: 'aice.png',
    media: ['aice.png', 'aice_logo.png', 'aicelegal1.png', 'aicelegal2.png', 'aicelegal3.png', 'aicelegal.mp4'],
    type: 'project',
    category: 'AI Integration',
    description: 'AI-powered legal document analysis platform for EU law firms. Analyses contracts and flags GDPR and EU AI Act compliance issues automatically.',
    challenge: 'Legal teams were reviewing compliance manually — slow, expensive, and inconsistent across documents and jurisdictions.',
    solution: 'Built a document processing pipeline using LLM APIs to extract clauses, flag compliance risks, and generate plain-language summaries. Firebase backend with secure document handling.',
    results: [
      'Automated GDPR compliance flagging',
      'EU AI Act risk scoring',
      'Plain-language summaries',
      'Secure document pipeline'
    ],
    tech: ['Node.js', 'Firebase', 'LangChain', 'OpenAI', 'React'],
    link: 'mailto:gyamfuwaa@protonmail.com'
  },
  {
    id: 5,
    title: 'GiGZo',
    subtitle: 'Services Marketplace',
    image: 'gigzo.png',
    media: ['gigzo.png', 'gigzo1.png', 'gigzo2.png', 'gigzo3.png', 'gigzo5.png', 'gigzo_lg.png', 'gigzo.mp4'],
    type: 'project',
    category: 'Web App',
    description: 'Domestic services marketplace for expats in Thailand. Connects customers with verified cleaning, laundry, and household service providers.',
    challenge: 'Expats in Thailand had no reliable, English-language platform to find and book domestic services. Providers had no digital booking system.',
    solution: 'Built a full-stack marketplace with provider onboarding, booking system, payment integration, and AI-powered customer support agents using CrewAI and LangChain.',
    results: [
      'Full marketplace MVP built',
      'Booking + payment integration',
      'AI customer onboarding agents',
      'Provider management system'
    ],
    tech: ['React', 'Node.js', 'Firebase', 'CrewAI', 'LangChain', 'Stripe'],
    link: 'mailto:gyamfuwaa@protonmail.com'
  },
  {
    id: 6,
    title: 'Hire Me',
    subtitle: 'Services & Pricing',
    image: 'hire-me.png',
    type: 'service',
    description: 'Custom web development and AI integration services.',
    fullDescription: true
  },
  {
    id: 7,
    title: 'About Me',
    subtitle: 'Developer & AI Builder',
    image: 'about-me.png',
    type: 'about',
    description: 'Full-stack developer and AI builder based in Thailand. Building real products that work.',
    fullDescription: true
  }
];
// ============================================================================
// PORTFOLIO CONTROLLER
// ============================================================================

class PortfolioController {
  constructor() {
    this.isDetailOpen = false;
    this.currentItem = null;
    this.animationPhase = 'intro';
    this.intro = { progress: 0, active: true, duration: 8000, startTime: null };
    this.scrollVelocity = 0;
    this.isDragging = false;
    this.dragStart = { x: 0, y: 0 };
    this.dragOffset = { x: 0, y: 0 };
    this.dragVelocity = { x: 0, y: 0 };
    
    this.zoom = 1;
    this.minZoom = 0.4;
    this.maxZoom = 3;
    this.lastPinchDist = null;

    this.galleryCanvas = document.getElementById('galleryCanvas');
    this.galleryImages = document.getElementById('galleryImages');
    this.heroText = document.getElementById('heroText');
    this.detailView = document.getElementById('detailView');
    this.focusOverlay = document.getElementById('focusOverlay');
    this.detailHero = null;
    this.detailHeroImg = null;
    this.detailBody = null;
    this.detailSections = null;
    this.detailTitle = null;
    this.detailMeta = null;
    
    this.init();
  }
  
  init() {
    this.createGalleryGrid();
    this.startRenderLoop();
    this.attachEventListeners();
    this.attachGalleryScroll();
    this.attachCardTilt();
  }
  
  createGalleryGrid() {
    const grid = document.createElement('div');
    grid.id = 'imageGrid';

    portfolioItems.forEach((item) => {
      const imgEl = document.createElement('div');
      imgEl.className = 'gallery-image';
      imgEl.dataset.id = item.id;

      const imgFX = document.createElement('div');
      imgFX.className = 'img-fx';

      // Only use image sources for the gallery card (skip mp4)
      const imageSrcs = item.media
        ? item.media.filter(s => !s.endsWith('.mp4') && !s.endsWith('.webm') && !s.endsWith('.mov'))
        : [item.image];
      const firstSrc = imageSrcs[0] || item.image;

      const imgBase = document.createElement('img');
      imgBase.src = firstSrc;
      imgBase.className = 'img-base';
      imgBase.alt = item.title;

      const imgReveal = document.createElement('img');
      imgReveal.src = firstSrc;
      imgReveal.className = 'img-reveal';
      imgReveal.alt = item.title;

      imgFX.appendChild(imgBase);
      imgFX.appendChild(imgReveal);

      // Label overlay
      const label = document.createElement('div');
      label.className = 'card-label';
      label.innerHTML = `<span class="card-label-title">${item.title}</span><span class="card-label-sub">${item.subtitle || item.category || ''}</span>`;

      imgEl.appendChild(imgFX);
      imgEl.appendChild(label);
      imgEl.addEventListener('click', () => this.openDetail(item));

      // Touch press: reveal colour + scale (mirrors desktop hover)
      imgEl.addEventListener('touchstart', () => {
        if (this.animationPhase !== 'interactive') return;
        imgEl.classList.add('card-active');
      }, { passive: true });
      imgEl.addEventListener('touchend', () => {
        setTimeout(() => imgEl.classList.remove('card-active'), 250);
      });
      imgEl.addEventListener('touchcancel', () => {
        imgEl.classList.remove('card-active');
      });

      // Auto-cycle images on hover (if multiple images)
      if (imageSrcs.length > 1) {
        let cycleIdx = 0;
        let cycleTimer = null;
        imgEl.addEventListener('mouseenter', () => {
          cycleTimer = setInterval(() => {
            cycleIdx = (cycleIdx + 1) % imageSrcs.length;
            imgBase.src = imageSrcs[cycleIdx];
            imgReveal.src = imageSrcs[cycleIdx];
          }, 1200);
        });
        imgEl.addEventListener('mouseleave', () => {
          clearInterval(cycleTimer);
          cycleIdx = 0;
          imgBase.src = firstSrc;
          imgReveal.src = firstSrc;
        });
      }

      grid.appendChild(imgEl);
    });

    this.galleryImages.appendChild(grid);
  }
  
  attachEventListeners() {
    document.getElementById('closeBtn').addEventListener('click', () => this.closeDetail());

    this.galleryCanvas.addEventListener('mousedown', (e) => this.onDragStart(e));
    this.galleryCanvas.addEventListener('mousemove', (e) => this.onDragMove(e));
    this.galleryCanvas.addEventListener('mouseup', () => this.onDragEnd());
    this.galleryCanvas.addEventListener('mouseleave', () => this.onDragEnd());

    // Touch: single-finger drag + two-finger pinch-to-zoom
    this.galleryCanvas.addEventListener('touchstart', (e) => {
      if (this.animationPhase === 'intro' || this.isDetailOpen) return;
      if (e.touches.length === 2) {
        this.isDragging = false;
        this.galleryCanvas.classList.remove('dragging');
        this.lastPinchDist = this.getPinchDist(e.touches);
      } else if (e.touches.length === 1) {
        this.onDragStart(e.touches[0]);
      }
    }, { passive: true });
    this.galleryCanvas.addEventListener('touchmove', (e) => {
      if (this.animationPhase === 'intro' || this.isDetailOpen) return;
      if (e.touches.length === 2 && this.lastPinchDist !== null) {
        e.preventDefault();
        this.onPinchMove(e.touches);
      } else if (e.touches.length === 1) {
        this.onDragMove(e.touches[0]);
      }
    }, { passive: false });
    this.galleryCanvas.addEventListener('touchend', (e) => {
      if (e.touches.length === 0) {
        this.lastPinchDist = null;
        this.onDragEnd();
      } else if (e.touches.length === 1) {
        this.lastPinchDist = null;
      }
    });
  }
  
  attachGalleryScroll() {
    // Wheel/trackpad: pan + ctrl-scroll/trackpad-pinch to zoom
    this.galleryCanvas.addEventListener('wheel', (e) => {
      if (this.animationPhase === 'intro' || this.isDetailOpen) return;
      e.preventDefault();

      if (e.ctrlKey || e.metaKey) {
        const delta = e.deltaY > 0 ? 0.92 : 1.08;
        this.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.zoom * delta));
        this.updateGalleryPosition();
        return;
      }

      if (this.isMobile()) return;

      const speedX = e.deltaX * 0.55;
      const speedY = e.deltaY * 0.55;

      this.dragVelocity.x -= speedX;
      this.dragVelocity.y -= speedY;

      // Clamp so fast trackpad swipes don't go wild
      const cap = 28;
      this.dragVelocity.x = Math.max(-cap, Math.min(cap, this.dragVelocity.x));
      this.dragVelocity.y = Math.max(-cap, Math.min(cap, this.dragVelocity.y));
    }, { passive: false });
  }

  attachCardTilt() {
    // 3D perspective tilt on individual gallery cards
    const cards = document.querySelectorAll('.gallery-image');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        if (this.animationPhase === 'intro') return;
        const rect = card.getBoundingClientRect();
        const cx = (e.clientX - rect.left) / rect.width - 0.5;
        const cy = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(700px) rotateY(${cx * 14}deg) rotateX(${-cy * 14}deg) scale(1.03) translateZ(10px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.7s var(--ease-out-expo)';
        card.style.transform = '';
        setTimeout(() => { card.style.transition = ''; }, 700);
      });
    });
  }

  isMobile() {
    return window.innerWidth <= 768;
  }

  onDragStart(e) {
    if (this.animationPhase === 'intro') return;
    this.isDragging = true;
    this.dragStart = { x: e.clientX, y: e.clientY };
    this.dragVelocity = { x: 0, y: 0 };
    this.galleryCanvas.classList.add('dragging');
  }
  
  onDragMove(e) {
    if (!this.isDragging || this.animationPhase === 'intro') return;
    
    const dx = e.clientX - this.dragStart.x;
    const dy = e.clientY - this.dragStart.y;
    
    this.dragOffset.x += dx * 0.5;
    this.dragOffset.y += dy * 0.5;
    
    this.dragVelocity = { x: dx * 0.2, y: dy * 0.2 };
    
    this.dragStart = { x: e.clientX, y: e.clientY };
    
    this.updateGalleryPosition();
  }
  
  onDragEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.galleryCanvas.classList.remove('dragging');
  }
  
  updateGalleryPosition() {
    // Tilt the grid in 3D based on current velocity — gentler on mobile
    const tiltMult = this.isMobile() ? 0.08 : 0.22;
    const tiltCap = this.isMobile() ? 2 : 6;
    const tiltX = Math.max(-tiltCap, Math.min(tiltCap, this.dragVelocity.y * tiltMult));
    const tiltY = Math.max(-tiltCap, Math.min(tiltCap, -this.dragVelocity.x * tiltMult));
    this.galleryImages.style.transform = `
      translate(${this.dragOffset.x}px, ${this.dragOffset.y}px)
      scale(${this.zoom})
      perspective(1000px)
      rotateX(${tiltX}deg)
      rotateY(${tiltY}deg)
    `;
  }
  
  openDetail(item) {
    if (this.isDetailOpen) return;
    this.isDetailOpen = true;
    this.currentItem = item;
    
    this.focusOverlay.classList.add('active');
    
    const flash = document.createElement('div');
    flash.className = 'exposure-soft';
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 600);
    
    document.querySelectorAll('.gallery-image').forEach(el => {
      if (el.dataset.id !== item.id.toString()) {
        el.style.opacity = '0.1';
        el.style.transform = 'scale(0.95)';
      }
    });
    
    setTimeout(() => this.showDetail(item), 700);
  }
  
  showDetail(item) {
    this.detailView.classList.add('active');
    this.detailView.style.opacity = 0;
    this.animationPhase = 'detail';
    this.renderDetailContent(item);
    this.attachDetailListeners();
    
    requestAnimationFrame(() => {
      this.detailView.style.transition = 'opacity 0.8s ease';
      this.detailView.style.opacity = 1;
    });
    
    setTimeout(() => {
      this.detailHero = this.detailView.querySelector('.detail-hero');
      this.detailHeroImg = this.detailView.querySelector('.detail-hero img, .detail-slider img');
      this.detailBody = this.detailView.querySelector('.detail-body');
      this.detailSections = this.detailView.querySelector('.detail-main');
      this.detailTitle = document.getElementById('detailTitle');
      this.detailMeta = document.getElementById('detailMeta');
      this.initSlider(this.detailView);
      this.startDirectedScroll();
      this.initMagneticElements();
    }, 100);
  }
  
  closeDetail() {
    this.detailView.style.transition = 'opacity 0.6s ease';
    this.detailView.style.opacity = 0;
    this.isDetailOpen = false;
    this.animationPhase = 'interactive';
    
    this.focusOverlay.classList.remove('active');
    
    setTimeout(() => {
      this.detailView.classList.remove('active');
      this.detailView.style.opacity = '';
      this.detailView.scrollTop = 0;
      
      const galleryImages = document.querySelectorAll('.gallery-image');
      galleryImages.forEach(el => {
        el.style.opacity = '';
        el.style.transform = '';
      });
      
      this.detailHero = null;
      this.detailHeroImg = null;
      this.detailBody = null;
      this.detailSections = null;
    }, 600);
  }
  
  renderDetailContent(item) {
    const detailContent = document.getElementById('detailContent');
    const detailTitle = document.getElementById('detailTitle');
    const detailMeta = document.getElementById('detailMeta');
    const detailMain = document.getElementById('detailMain');
    
    detailTitle.textContent = item.title;
    
    if (item.type === 'service') {
      detailMeta.innerHTML = '<span>Services & Pricing</span>';
      detailMain.innerHTML = this.renderPricingContent();
    } else if (item.type === 'about') {
      detailMeta.innerHTML = '<span>About Akua</span>';
      detailMain.innerHTML = this.renderAboutContent();
    } else {
      const category = item.category || item.type;
      detailMeta.innerHTML = `
        <span>${item.subtitle}</span>
        <span>${category}</span>
        <span>${item.tech.join(' • ')}</span>
      `;
      detailMain.innerHTML = this.renderProjectContent(item);
    }
    
    setTimeout(() => this.setupScrollReveal(), 100);
  }
  
  renderSlider(item) {
    const media = item.media || [item.image];
    const slides = media.map((src, i) => {
      const isVideo = src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov');
      const activeClass = i === 0 ? ' active' : '';
      if (isVideo) {
        return `<div class="slider-slide${activeClass}">
          <video src="${src}" muted loop playsinline preload="metadata"></video>
        </div>`;
      }
      return `<div class="slider-slide${activeClass}">
        <img src="${src}" alt="${item.title} — slide ${i + 1}" />
      </div>`;
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
      ${arrows}
      ${dots}
      <div class="scroll-cue">
        <span>Scroll to explore</span>
        <div class="scroll-line"></div>
      </div>
    </div>`;
  }

  initSlider(container) {
    const slider = container.querySelector('.detail-slider');
    if (!slider || parseInt(slider.dataset.total) <= 1) return;

    let current = 0;
    const total = parseInt(slider.dataset.total);
    const slides = slider.querySelectorAll('.slider-slide');
    const dots = slider.querySelectorAll('.slider-dot');

    const goTo = (idx) => {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');

      const prevVideo = slides[current].querySelector('video');
      if (prevVideo) prevVideo.pause();

      current = (idx + total) % total;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');

      const nextVideo = slides[current].querySelector('video');
      if (nextVideo) nextVideo.play().catch(() => {});
    };

    slider.querySelector('.slider-prev').addEventListener('click', (e) => {
      e.stopPropagation();
      goTo(current - 1);
    });
    slider.querySelector('.slider-next').addEventListener('click', (e) => {
      e.stopPropagation();
      goTo(current + 1);
    });
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        goTo(parseInt(dot.dataset.index));
      });
    });

    // Touch swipe
    let touchStartX = 0;
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    slider.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) goTo(dx < 0 ? current + 1 : current - 1);
    }, { passive: true });

    // Auto-play first video if present
    const firstVideo = slides[0].querySelector('video');
    if (firstVideo) firstVideo.play().catch(() => {});
  }

  renderProjectContent(item) {
    return `
      ${this.renderSlider(item)}
      <div class="detail-body">
        <div class="detail-intro reveal-on-scroll slow">
          <p class="section-text">${item.description}</p>
        </div>

        <div class="detail-section reveal-on-scroll dramatic">
          <h3 style="font-family: var(--font-display); font-size: 20px; margin-bottom: 16px;">The Challenge</h3>
          <p class="section-text">${item.challenge}</p>
        </div>

        <div class="detail-section reveal-on-scroll slow">
          <h3 style="font-family: var(--font-display); font-size: 20px; margin-bottom: 16px;">Solution</h3>
          <p class="section-text">${item.solution}</p>
        </div>

        <div class="detail-section reveal-on-scroll dramatic">
          <h3 style="font-family: var(--font-display); font-size: 20px; margin-bottom: 16px;">Results</h3>
          <ul style="list-style: none;">
            ${item.results.map(result => `<li style="padding: 8px 0; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0;">✓</span> ${result}
            </li>`).join('')}
          </ul>
        </div>

        <div class="detail-section reveal-on-scroll fast">
          <h3 style="font-family: var(--font-display); font-size: 20px; margin-bottom: 16px;">Tech Stack</h3>
          <div class="tech-stack">
            ${item.tech.map(t => `<div class="tech-tag">${t}</div>`).join('')}
          </div>
        </div>

        <div class="detail-section reveal-on-scroll fast">
          <a href="mailto:gyamfuwaa@protonmail.com" class="cta-button">Start a Project</a>
        </div>
      </div>
    `;
  }
  
  renderPricingContent() {
    return `
      <div class="detail-body">
        <div class="detail-intro reveal-on-scroll slow">
          <p class="section-text">Professional web development and AI integration services. Building systems that make your business money.</p>
        </div>
        
        <div class="pricing-container reveal-on-scroll slow">
          <div class="pricing-card">
            <div class="pricing-title">Starter</div>
            <div class="pricing-price">$1.5k</div>
            <p class="pricing-description">Perfect for startups</p>
            <ul class="pricing-features">
              <li>Landing Page</li>
              <li>Basic AI Integration</li>
              <li>SEO Optimization</li>
              <li>Contact Form</li>
            </ul>
          </div>
          
          <div class="pricing-card featured">
            <div class="pricing-title">Pro</div>
            <div class="pricing-price">$4k</div>
            <p class="pricing-description">Full solution</p>
            <ul class="pricing-features">
              <li>Full Website</li>
              <li>Custom AI System</li>
              <li>Dashboard</li>
              <li>Advanced SEO</li>
            </ul>
          </div>
          
          <div class="pricing-card">
            <div class="pricing-title">Custom</div>
            <div class="pricing-price">—</div>
            <p class="pricing-description">For complex needs</p>
            <ul class="pricing-features">
              <li>Advanced Systems</li>
              <li>Automation</li>
              <li>Scaling</li>
              <li>Custom Solutions</li>
            </ul>
          </div>
        </div>
        
        <div class="detail-section reveal-on-scroll slow">
          <h3 style="font-family: var(--font-display); font-size: 20px; margin-bottom: 16px;">Why Work With Me?</h3>
          <p class="section-text"><strong>Results-Focused:</strong> Every project designed to impact your bottom line—whether conversions, efficiency, or revenue.</p>
          <p class="section-text"><strong>AI Integration:</strong> From chatbots to automation to custom AI systems. I build intelligence into your workflow.</p>
          <p class="section-text"><strong>Full-Stack Expertise:</strong> React, Next.js, Node.js, Python, GPT integration. End-to-end development.</p>
        </div>
        
        <div class="detail-section reveal-on-scroll fast">
          <a href="mailto:gyamfuwaa@protonmail.com" class="cta-button">Start a Project</a>
        </div>
      </div>
    `;
  }
  
  renderAboutContent() {
    return `
      <div class="detail-body">
        <div class="detail-intro reveal-on-scroll slow">
          <p class="section-text">I'm a freelance developer based in Thailand, building high-end digital systems that make clients money.</p>
        </div>

        <div class="detail-section reveal-on-scroll slow">
          <h3 style="font-family: var(--font-display); font-size: 20px; margin-bottom: 16px;">What I Do</h3>
          <p class="section-text">Custom web development with React, Next.js, and Node.js. AI integration using GPT-4, LangChain, and custom algorithms. Building systems that convert—websites, automation, and intelligence.</p>
        </div>

        <div class="detail-section reveal-on-scroll fast">
          <h3 style="font-family: var(--font-display); font-size: 20px; margin-bottom: 16px;">Tech Stack</h3>
          <div class="tech-stack">
            <div class="tech-tag">React</div>
            <div class="tech-tag">Next.js</div>
            <div class="tech-tag">Node.js</div>
            <div class="tech-tag">Python</div>
            <div class="tech-tag">FastAPI</div>
            <div class="tech-tag">GPT-4 &amp; LangChain</div>
            <div class="tech-tag">Firebase</div>
          </div>
        </div>

        <div class="detail-section reveal-on-scroll dramatic">
          <h3 style="font-family: var(--font-display); font-size: 20px; margin-bottom: 16px;">Availability</h3>
          <p class="section-text">Currently accepting projects. Specializing in web development, AI integration, and automation. Response time: &lt;1 hour during business hours.</p>
        </div>

        <div class="detail-section reveal-on-scroll fast">
          <div class="about-cta-row">
            <a href="mailto:gyamfuwaa@protonmail.com" class="cta-button">Start a Project</a>
            <a href="resume_TG.html" target="_blank" class="cta-button cta-button--outline">View Resume</a>
          </div>
        </div>
      </div>
    `;
  }
  
  setupScrollReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.reveal-on-scroll, .detail-section').forEach(el => {
      observer.observe(el);
    });
    
    requestAnimationFrame(() => {
      if (this.detailTitle) this.detailTitle.classList.add('revealed');
      if (this.detailMeta) this.detailMeta.classList.add('revealed');
    });
  }
  
  updateHeroParallax() {
    if (!this.isDetailOpen) return;

    const scrollY = this.detailView.scrollTop;

    // Slider case (project items)
    const slider = this.detailView.querySelector('.detail-slider');
    if (slider) {
      const progress = Math.min(1, scrollY / slider.offsetHeight);
      const cue = slider.querySelector('.scroll-cue');
      if (cue) cue.style.opacity = 1 - progress * 1.2;
      if (this.detailBody) {
        this.detailBody.style.transform = `translateY(${scrollY * 0.08}px)`;
      }
      return;
    }

    if (!this.detailHero || !this.detailHeroImg) return;

    const heroHeight = this.detailHero.offsetHeight;
    const progress = Math.min(1, scrollY / heroHeight);

    const scale = 1 + progress * 0.12;
    const translateY = progress * 60;

    this.detailHeroImg.style.transform = `
      scale(${scale}) translateY(${translateY}px)
    `;

    const cue = this.detailHero.querySelector('.scroll-cue');
    if (cue) {
      cue.style.opacity = 1 - progress * 1.2;
    }
    
    if (this.detailBody) {
      const bodyOffset = scrollY * 0.08;
      this.detailBody.style.transform = `translateY(${bodyOffset}px)`;
    }
  }
  
  applyScrollGravity() {
    if (!this.isDetailOpen) return;
    
    const sections = this.detailSections?.querySelectorAll('.detail-section');
    if (!sections) return;
    
    const center = window.innerHeight / 2;
    
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const dist = Math.abs(rect.top + rect.height / 2 - center);
      
      if (dist < 120) {
        this.detailView.scrollTop += (rect.top - 100) * 0.02;
      }
    });
  }
  
  handleCinematicPause() {
    const quotes = this.detailSections?.querySelectorAll('.section-quote');
    if (!quotes) return;
    
    const triggerZone = window.innerHeight * 0.4;
    
    quotes.forEach(q => {
      const rect = q.getBoundingClientRect();
      if (rect.top < triggerZone && rect.bottom > triggerZone) {
        this.detailView.style.scrollBehavior = 'auto';
        this.detailView.scrollTop += (rect.top - triggerZone) * 0.015;
      }
    });
  }
  
  startDirectedScroll() {
    let t = 0;
    const duration = 1200;
    const start = this.detailView.scrollTop;
    const target = 120;
    
    const animate = () => {
      t += 16;
      const p = Math.min(1, t / duration);
      const ease = 1 - Math.pow(2, -10 * p);
      
      this.detailView.scrollTop = start + (target - start) * ease;
      
      if (p < 1 && this.isDetailOpen) {
        requestAnimationFrame(animate);
      }
    };
    
    setTimeout(() => animate(), 400);
  }
  
  initMagneticElements() {
    const targets = document.querySelectorAll(
      '.gallery-image, .related-item, .close-btn'
    );
    
    targets.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        el.style.transform = `
          translate(${x * 0.08}px, ${y * 0.08}px) scale(1.02)
        `;
      });
      
      el.addEventListener('mouseleave', () => {
        if (!this.isDetailOpen || !el.closest('.detail-view')) {
          el.style.transform = '';
        }
      });
    });
  }
  
  getPinchDist(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  onPinchMove(touches) {
    const dist = this.getPinchDist(touches);
    const scale = dist / this.lastPinchDist;
    this.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.zoom * scale));
    this.lastPinchDist = dist;
    this.updateGalleryPosition();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  attachDetailListeners() {
    const detailView = document.getElementById('detailView');
    detailView.addEventListener('scroll', () => {
      const current = this.detailView.scrollTop;
      this.scrollVelocity += (current - this.scrollVelocity) * 0.1;
      
      this.updateProgressCircle();
      this.updateHeroParallax();
      this.applyScrollGravity();
      this.handleCinematicPause();
    });
  }
  
  updateProgressCircle() {
    const scrollHeight = document.getElementById('detailView').scrollHeight - window.innerHeight;
    const scrollPos = document.getElementById('detailView').scrollTop;
    const progress = scrollHeight > 0 ? scrollPos / scrollHeight : 0;
    
    const circle = document.getElementById('progressBar');
    if (circle) {
      const radius = 45;
      const circumference = 2 * Math.PI * radius;
      circle.style.strokeDashoffset = circumference * (1 - progress);
    }
  }
  
  startRenderLoop() {
    const render = () => {
      if (this.animationPhase === 'intro') {
        this.updateIntro();
      } else {
        this.updateDragMomentum();
      }
      requestAnimationFrame(render);
    };
    render();
  }
  
  updateDragMomentum() {
    if (!this.isDragging) {
      if (Math.abs(this.dragVelocity.x) > 0.05 || Math.abs(this.dragVelocity.y) > 0.05) {
        this.dragOffset.x += this.dragVelocity.x;
        this.dragOffset.y += this.dragVelocity.y;

        this.dragVelocity.x *= 0.94;
        this.dragVelocity.y *= 0.94;

        this.updateGalleryPosition();
      } else if (this.dragVelocity.x !== 0 || this.dragVelocity.y !== 0) {
        // Snap velocity to zero and reset tilt cleanly
        this.dragVelocity = { x: 0, y: 0 };
        this.updateGalleryPosition();
      }
    }
  }
  
  updateIntro() {
    if (!this.intro.startTime) this.intro.startTime = performance.now();
    
    const elapsed = performance.now() - this.intro.startTime;
    this.intro.progress = Math.min(elapsed / this.intro.duration, 1);
    
    const t = this.easeOutCubic(this.intro.progress);
    
    this.animateLetters(t);
    this.animateImagesIntro(t);
    
    if (this.intro.progress >= 1) {
      this.intro.active = false;
      this.animationPhase = 'interactive';
      document.getElementById('galleryView').classList.add('interactive');
      // Clear intro inline styles so CSS card-active hover/touch states work
      document.querySelectorAll('.gallery-image').forEach(el => {
        el.style.transform = '';
      });
    }
  }
  
  easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }
  
  easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
  
  animateLetters(t) {
    const letters = document.querySelectorAll('.letter');
    const totalLetters = letters.length;
    
    // Letters appear in first 40% of animation
    const letterEndTime = 0.4;
    
    letters.forEach((letter, i) => {
      const letterDelay = (i / totalLetters) * 0.25;
      const adjustedT = Math.min(1, t / letterEndTime);
      const letterProgress = Math.max(0, Math.min(1, (adjustedT - letterDelay) / 0.15));
      const letterEase = this.easeOutCubic(letterProgress);
      
      letter.style.opacity = letterEase;
      letter.style.transform = `translateY(${(1 - letterEase) * 20}px) scale(${0.9 + letterEase * 0.1})`;
    });
  }
  
  animateImagesIntro(t) {
    const images = document.querySelectorAll('.gallery-image');
    const totalImages = images.length;
    
    // Images start appearing after 35% of animation (letters done)
    const imageStartTime = 0.35;
    const adjustedT = Math.max(0, t - imageStartTime) / (1 - imageStartTime);
    
    images.forEach((img, idx) => {
      const imageDelay = (idx / totalImages) * 0.5;
      const imageProgress = Math.max(0, adjustedT - imageDelay);
      
      let scale, opacity;
      
      if (imageProgress < 0.5) {
        const phase1 = imageProgress / 0.5;
        const phase1Ease = this.easeOutCubic(phase1);
        scale = 0.05 + phase1Ease * 0.8;
        opacity = 1;
      } else if (imageProgress < 0.7) {
        scale = 0.85;
        opacity = 1;
      } else {
        const phase3Start = imageProgress - 0.7;
        const phase3 = phase3Start / 0.3;
        const phase3Ease = this.easeInOutQuad(phase3);
        scale = 0.85 + phase3Ease * 0.15;
        opacity = 1;
      }
      
      img.style.opacity = opacity;
      img.style.transform = `scale(${scale})`;
    });
  }
}

// ============================================================================
// INITIALIZE
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  new PortfolioController();
});
