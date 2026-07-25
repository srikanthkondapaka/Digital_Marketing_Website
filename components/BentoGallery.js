'use client';
import { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import AnimatedCounter from './AnimatedCounter';
import { TrendingUp, DollarSign, Search, Zap, Target, Bot, MessageSquare, Bookmark, Heart } from 'lucide-react';

const CARDS = [
  { id: 'symbol',     cls: 'bento-card bento-symbol-card' },
  { id: 'banner',     cls: 'bento-card bento-banner-card' },
  { id: 'metric',     cls: 'bento-card bento-metric-showcase' },
  { id: 'social',     cls: 'bento-card bento-social-card' },
  { id: 'story',      cls: 'bento-card bento-tall-mobile' },
  { id: 'launcher',   cls: 'bento-card bento-launcher-card' },
  { id: 'innovation', cls: 'bento-card bento-innovation-card' },
];

export default function BentoGallery() {
  const sectionRef  = useRef(null);
  const triggeredRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Assign animation roles randomly on every mount
    const indices = Array.from({ length: CARDS.length }, (_, i) => i);
    const shuffled = [...indices].sort(() => Math.random() - 0.5);
    const [insertIdx, fade1Idx, fade2Idx] = shuffled.slice(0, 3);

    // Set initial hidden state for all bento cards
    const cards = section.querySelectorAll('[data-bento-card]');
    cards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transition = 'none';
      if (i === insertIdx) {
        card.style.transform = 'scale(0.82) translateY(-28px)';
      } else if (i === fade1Idx) {
        card.style.transform = 'translateX(-22px)';
      } else if (i === fade2Idx) {
        card.style.transform = 'translateX(22px)';
      } else {
        card.style.transform = 'translateY(18px)';
      }
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || triggeredRef.current) return;
        triggeredRef.current = true;

        cards.forEach((card, i) => {
          // Stagger base delay for "already placed" cards
          const baseDelay = i * 90;

          if (i === insertIdx) {
            // Insert card: delayed, punchy slot-in from above with slight bounce feel
            setTimeout(() => {
              card.style.transition =
                'opacity 1.0s cubic-bezier(0.16, 1, 0.3, 1), transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)';
              card.style.opacity = '1';
              card.style.transform = 'scale(1) translateY(0)';
            }, 520); // inserts after the first two fades start
          } else if (i === fade1Idx) {
            // Random fade 1: slides in from left
            setTimeout(() => {
              card.style.transition =
                'opacity 1.0s cubic-bezier(0.16, 1, 0.3, 1), transform 1.0s cubic-bezier(0.16, 1, 0.3, 1)';
              card.style.opacity = '1';
              card.style.transform = 'translateX(0)';
            }, 80);
          } else if (i === fade2Idx) {
            // Random fade 2: slides in from right
            setTimeout(() => {
              card.style.transition =
                'opacity 1.0s cubic-bezier(0.16, 1, 0.3, 1), transform 1.0s cubic-bezier(0.16, 1, 0.3, 1)';
              card.style.opacity = '1';
              card.style.transform = 'translateX(0)';
            }, 200);
          } else {
            // All other cards: gentle upward fade, sequential stagger
            setTimeout(() => {
              card.style.transition =
                'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, baseDelay + 60);
          }
        });

        observer.unobserve(section);
      },
      { rootMargin: '0px 0px -100px 0px', threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="showcase" ref={sectionRef}>
      <div className="section-card-wrapper" style={{ overflow: 'hidden' }}>

        <span className="section-tag">Brand & Performance Gallery</span>

        <AnimatedText
          text="Visual Excellence & Campaign Telemetry"
          tag="h2"
          className="section-title"
          delay={100}
          staggerMs={60}
        />

        <AnimatedText
          text="A curated glimpse into our brand systems, high-ROAS marketing funnels, and enterprise digital architecture."
          tag="p"
          className="section-subtitle"
          delay={400}
          staggerMs={30}
        />

        <div className="bento-gallery-grid">

          {/* 0 — Symbol Card */}
          <div data-bento-card="0" className="bento-card bento-symbol-card tilt-card">
            <div className="bento-symbol-box">
              <span className="brand-dot" style={{ width: '14px', height: '14px' }} />
              <span style={{ fontFamily: `'Plus Jakarta Sans',sans-serif`, fontWeight: 800, fontSize: '1.2rem' }}>
                EdgeProc
              </span>
            </div>
            <div className="bento-status-pill">● Verified System</div>
          </div>

          {/* 1 — Executive Banner */}
          <div data-bento-card="1" className="bento-card bento-banner-card tilt-card">
            <div>
              <div className="bento-banner-logo">EdgeProc</div>
              <p className="bento-banner-sub">Market Dominance Architecture</p>
            </div>
          </div>

          {/* 2 — Large Metric Showcase */}
          <div data-bento-card="2" className="bento-card bento-metric-showcase tilt-card">
            <div className="bento-metric-top">
              <h4>Marketing strategies for exponential scale.</h4>
              <div className="bento-metric-tag">Profit Organization</div>
              <div className="bento-metric-num">
                $<AnimatedCounter end={1480950} suffix="" duration={1800} />
              </div>
              <div className="bento-growth-badge">
                <TrendingUp size={16} />
                ↑ <AnimatedCounter end={148} suffix="% Positive Growth" duration={1600} />
              </div>
            </div>
            <div style={{ textAlign: 'right', opacity: 0.12, marginTop: 'auto', color: '#64748B' }}>
              <DollarSign size={70} />
            </div>
          </div>

          {/* 3 — Social Profile */}
          <div data-bento-card="3" className="bento-card bento-social-card tilt-card">
            <div className="bento-social-header">
              <div className="bento-avatar">EP</div>
              <div>
                <div className="bento-social-name">EdgeProc Agency ✓</div>
                <div className="bento-social-handle">@edgeproc_official</div>
              </div>
            </div>
            <p className="bento-social-bio">
              Elevate your brand with proprietary performance marketing & high-velocity ad engines.
            </p>
            <button className="bento-social-btn">+ Follow Feed</button>
          </div>

          {/* 4 — Tall Story Card */}
          <div
            data-bento-card="4"
            className="bento-card bento-tall-mobile tilt-card"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80')` }}
          >
            <div className="bento-story-overlay">
              <div className="story-header">
                <span className="story-dot" />
                edgeproc 1h ago
              </div>
              <div className="story-title">PIXEL-PERFECT FUNNELS</div>
            </div>
          </div>

          {/* 5 — App Suite Launcher */}
          <div data-bento-card="5" className="bento-card bento-launcher-card tilt-card">
            <div className="launcher-icons-row">
              <div className="app-icon-item" title="SEO Engine"><Search size={20} /></div>
              <div className="app-icon-item" title="PPC Bidding"><Zap size={20} /></div>
              <div className="app-icon-item" title="Social Ads"><Target size={20} /></div>
              <div className="app-icon-item" title="AI Workflows"><Bot size={20} /></div>
            </div>
            <div className="launcher-text">EdgeProc Performance Suite</div>
          </div>

          {/* 6 — Innovation Card */}
          <div data-bento-card="6" className="bento-card bento-innovation-card tilt-card">
            <div className="innovation-content">
              <h3>Empowering Innovation Through Technology</h3>
              <p>Explore performance metrics & AI automation models for market dominance.</p>
            </div>
            <div className="innovation-footer">
              <div className="innovation-brand">EdgeProc</div>
              <div className="innovation-actions">
                <button className="action-circle-btn"><MessageSquare size={16} /></button>
                <button className="action-circle-btn"><Bookmark size={16} /></button>
                <button className="action-circle-btn"><Heart size={16} /></button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
