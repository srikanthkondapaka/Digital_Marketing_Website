/**
 * EdgeProc - Hyper-Premium 3-Card Hero Deck, Telemetry & 3D Interactive Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  initScrollRevealEngine();
  init3DTiltCards();
  initThemeEngine();
  initMobileDrawer();
  initCapabilitySwitcher();
  initScrollEffects();
  initProcessTimeline();
  initRoiCalculator();
  initFaqAccordion();
  initConsultationModal();
  initServiceModals();
});

/* ==========================================================================
   1. Real-Time Section Scroll Reveal Engine (IntersectionObserver)
   ========================================================================== */
function initScrollRevealEngine() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('revealed');
    }
  });
}

/* ==========================================================================
   2. 3D Card Parallax Tilt Effect
   ========================================================================== */
function init3DTiltCards() {
  const tiltCards = document.querySelectorAll('.tilt-card');
  if (!tiltCards.length) return;

  if (window.innerWidth <= 768) return;

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
}

/* ==========================================================================
   3. Right Card: Capability Command Deck Switcher Engine
   ========================================================================== */
const capabilityData = {
  seo: {
    title: "Search Engine Optimization",
    metric: "Rank #1 Keywords • +420% Organic Traffic",
    accuracy: "99.4% Active",
    gauge: "96%",
    icon: `<i data-lucide="search" style="width: 22px; height: 22px;"></i>`
  },
  web: {
    title: "Website Design & UX",
    metric: "99/100 Core Web Vitals • 0.4s Load Speed",
    accuracy: "98.8% Optimized",
    gauge: "94%",
    icon: `<i data-lucide="layout" style="width: 22px; height: 22px;"></i>`
  },
  smm: {
    title: "Social Media Marketing",
    metric: "2.4M Engaged Impressions • Creative Scaling",
    accuracy: "96.5% Precision",
    gauge: "90%",
    icon: `<i data-lucide="share-2" style="width: 22px; height: 22px;"></i>`
  },
  ppc: {
    title: "Google Ads & PPC Engine",
    metric: "4.8x Blended ROAS Return • Smart Bidding",
    accuracy: "99.1% High Intent",
    gauge: "98%",
    icon: `<i data-lucide="pie-chart" style="width: 22px; height: 22px;"></i>`
  },
  sem: {
    title: "Search Engine Marketing",
    metric: "Top-Page Impression Share • Instant Reach",
    accuracy: "97.9% Conversions",
    gauge: "92%",
    icon: `<i data-lucide="trending-up" style="width: 22px; height: 22px;"></i>`
  },
  ecommerce: {
    title: "E-Commerce Revenue Growth",
    metric: "$12M D2C Scaled Revenue • High Conversion",
    accuracy: "99.7% Target Lift",
    gauge: "99%",
    icon: `<i data-lucide="shopping-bag" style="width: 22px; height: 22px;"></i>`
  }
};

function initCapabilitySwitcher() {
  const chips = document.querySelectorAll('.cap-chip');
  const displayRow = document.getElementById('capability-display-row');
  const iconBox = document.getElementById('cap-icon-box');
  const titleText = document.getElementById('cap-title-text');
  const metricText = document.getElementById('cap-metric-text');
  const gaugeVal = document.getElementById('cap-gauge-val');
  const gaugeFill = document.getElementById('cap-gauge-fill');

  if (!chips.length || !displayRow) return;

  const capKeys = Object.keys(capabilityData);
  let currentIndex = 0;
  let autoTimer = null;

  function setCapability(key) {
    const data = capabilityData[key];
    if (!data) return;

    chips.forEach(c => {
      c.classList.toggle('active', c.getAttribute('data-cap') === key);
    });

    displayRow.style.opacity = '0';
    displayRow.style.transform = 'translateY(-4px)';

    setTimeout(() => {
      if (iconBox) iconBox.innerHTML = data.icon;
      if (titleText) titleText.innerText = data.title;
      if (metricText) metricText.innerText = data.metric;
      if (gaugeVal) gaugeVal.innerText = data.accuracy;
      if (gaugeFill) gaugeFill.style.width = data.gauge;

      if (window.lucide) lucide.createIcons();

      displayRow.style.opacity = '1';
      displayRow.style.transform = 'translateY(0)';
    }, 180);
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const key = chip.getAttribute('data-cap');
      if (key) {
        currentIndex = capKeys.indexOf(key);
        setCapability(key);
        resetAutoCycle();
      }
    });
  });

  function startAutoCycle() {
    autoTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % capKeys.length;
      setCapability(capKeys[currentIndex]);
    }, 3500);
  }

  function resetAutoCycle() {
    if (autoTimer) clearInterval(autoTimer);
    startAutoCycle();
  }

  startAutoCycle();
}

/* ==========================================================================
   4. Mobile Navigation Drawer
   ========================================================================== */
function initMobileDrawer() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('drawer-close-btn');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');

  if (!hamburgerBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('active') && !drawer.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   5. Theme Switcher (Dark / Light)
   ========================================================================== */
function initThemeEngine() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const sunIcon = document.querySelector('.theme-sun-icon');
  const moonIcon = document.querySelector('.theme-moon-icon');

  const savedTheme = localStorage.getItem('edgeproc-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateIcons(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('edgeproc-theme', next);
      updateIcons(next);
    });
  }

  function updateIcons(theme) {
    if (sunIcon && moonIcon) {
      if (theme === 'dark') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      }
    }
  }
}

/* ==========================================================================
   6. Dynamic Scroll Effects & Fixed Navbar State
   ========================================================================== */
function initScrollEffects() {
  const header = document.querySelector('.hero-header');
  const progressBar = document.querySelector('.scroll-progress-bar');

  function handleScroll() {
    const scrollTop = window.scrollY;
    
    if (header) {
      if (scrollTop > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    if (progressBar) progressBar.style.width = `${scrollPercent}%`;
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
}

/* ==========================================================================
   7. Process Timeline Steps
   ========================================================================== */
const processSteps = [
  { title: "01. Discovery & Technical Audit", desc: "We perform a comprehensive audit of your current digital footprint, audience segments, competitor landscape, and growth roadblocks to form a data-grounded foundation." },
  { title: "02. Growth Strategy Roadmap", desc: "Engineers map out channel-by-channel KPIs, budget allocation, conversion funnels, and creative messaging guidelines aligned strictly with revenue goals." },
  { title: "03. Asset Planning & Creation", desc: "Designing high-converting ad copy, landing pages, creative assets, tracking pixels, and custom CRM workflows ready for launch." },
  { title: "04. Campaign Execution", desc: "Deploying high-performing ad campaigns across search, social, and programmatic channels alongside technical SEO rollouts." },
  { title: "05. Agile Optimization", desc: "Continuous multivariate testing of ad creative, audience targeting, landing page elements, and bid strategies to maximize ROAS." },
  { title: "06. Transparent Reporting", desc: "24/7 custom data dashboard access with clear multi-touch attribution metrics showing exact cost per lead and ROI." },
  { title: "07. Revenue Scaling", desc: "Doubling down on winning channels, unlocking new audience segments, and deploying automated workflows to scale sustainably." }
];

function initProcessTimeline() {
  const nodes = document.querySelectorAll('.timeline-step-node');
  const titleEl = document.getElementById('process-title');
  const descEl = document.getElementById('process-desc');

  if (!nodes.length || !titleEl) return;

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      const stepIdx = parseInt(node.getAttribute('data-step') || '0', 10);
      const data = processSteps[stepIdx];
      if (data) {
        titleEl.innerText = data.title;
        descEl.innerText = data.desc;
      }
    });
  });
}

/* ==========================================================================
   8. Dynamic ROI Calculator
   ========================================================================== */
function initRoiCalculator() {
  const budgetSlider = document.getElementById('calc-budget');
  const cpcSlider = document.getElementById('calc-cpc');
  const convSlider = document.getElementById('calc-conv');

  const budgetVal = document.getElementById('calc-budget-val');
  const cpcVal = document.getElementById('calc-cpc-val');
  const convVal = document.getElementById('calc-conv-val');

  const outTraffic = document.getElementById('out-traffic');
  const outLeads = document.getElementById('out-leads');
  const outRevenue = document.getElementById('out-revenue');
  const outRoi = document.getElementById('out-roi');

  if (!budgetSlider || !outRevenue) return;

  function calculate() {
    const budget = parseFloat(budgetSlider.value);
    const cpc = parseFloat(cpcSlider.value);
    const convRate = parseFloat(convSlider.value) / 100;
    const avgDealValue = 480;

    budgetVal.innerText = `$${budget.toLocaleString()}`;
    cpcVal.innerText = `$${cpc.toFixed(2)}`;
    convVal.innerText = `${(convRate * 100).toFixed(1)}%`;

    const estimatedClicks = Math.round(budget / cpc);
    const estimatedLeads = Math.round(estimatedClicks * convRate);
    const estimatedRevenue = Math.round(estimatedLeads * avgDealValue);
    const calculatedRoi = Math.round(((estimatedRevenue - budget) / budget) * 100);

    outTraffic.innerText = estimatedClicks.toLocaleString();
    outLeads.innerText = estimatedLeads.toLocaleString();
    outRevenue.innerText = `$${estimatedRevenue.toLocaleString()}`;
    outRoi.innerText = `${calculatedRoi > 0 ? '+' : ''}${calculatedRoi}%`;
  }

  budgetSlider.addEventListener('input', calculate);
  cpcSlider.addEventListener('input', calculate);
  convSlider.addEventListener('input', calculate);

  calculate();
}

/* ==========================================================================
   9. FAQ Accordion Toggle
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });
}

/* ==========================================================================
   10. Consultation & Service Modals
   ========================================================================== */
function initConsultationModal() {
  const modal = document.getElementById('consultation-modal');
  const openBtns = document.querySelectorAll('.open-consult-modal');
  const closeBtn = modal ? modal.querySelector('.modal-close-btn') : null;
  const form = document.getElementById('consultation-form');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Thank you! Your request has been received. An EdgeProc growth architect will reach out within 24 hours.");
      form.reset();
      modal.classList.remove('active');
    });
  }
}

function initServiceModals() {
  const modal = document.getElementById('service-detail-modal');
  if (!modal) return;
  const closeBtn = modal.querySelector('.modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
}
