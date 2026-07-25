'use client';
import useScrollReveal from '../hooks/useScrollReveal';
import AnimatedText from './AnimatedText';

const cases = [
  {
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    tag: 'D2C Brand',
    title: 'Scaling E-Commerce Storefront to $12M ARR',
    desc: 'Deployed high-converting video creatives, automated retargeting, and landing page CRO.',
    result: '↑ 4.6x Blended ROAS ($2.4M Ad Spend)',
    dir: 'left',
    delay: 140,
  },
  {
    img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80',
    tag: 'SaaS Platform',
    title: 'Next-Gen SaaS Web Design & Conversion',
    desc: 'Engineered a high-speed interactive design system and Webflow build with custom micro-animations.',
    result: '+148% Demo Request Conversion',
    dir: 'up',
    delay: 240,
  },
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    tag: 'Fintech Enterprise',
    title: 'Fintech Authority Building & Organic Search',
    desc: 'Dominated high-intent transactional keywords via technical SEO overhaul and digital PR.',
    result: '+420K Organic Monthly Visits',
    dir: 'right',
    delay: 340,
  },
];

export default function PortfolioSection() {
  useScrollReveal();

  return (
    <section id="portfolio">
      <div
        data-reveal data-reveal-dir="up" data-reveal-duration="900"
        className="section-card-wrapper"
      >
        <span
          data-reveal data-reveal-dir="blur-up" data-reveal-delay="60" data-reveal-duration="780"
          className="section-tag"
        >Case Studies</span>

        <AnimatedText
          text="Verified Enterprise Impact"
          tag="h2"
          className="section-title"
          delay={120}
          staggerMs={65}
        />

        <AnimatedText
          text="Real measurable impact engineered for fast-scaling brands across search, paid social, and custom web experiences."
          tag="p"
          className="section-subtitle"
          delay={360}
          staggerMs={28}
        />

        <div className="portfolio-grid">
          {cases.map((c, i) => (
            <div
              key={i}
              data-reveal
              data-reveal-dir={c.dir}
              data-reveal-delay={c.delay}
              data-reveal-duration="960"
              className="portfolio-card tilt-card"
            >
              <div
                className="portfolio-media"
                style={{ backgroundImage: `url('${c.img}')` }}
              />
              <div className="portfolio-body">
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {c.tag}
                </span>
                <h3 style={{ fontSize: '1.25rem', margin: '8px 0' }}>{c.title}</h3>
                <p style={{ fontSize: '0.9rem' }}>{c.desc}</p>
                <div style={{ marginTop: '14px', fontWeight: 800, color: 'var(--mint)', fontSize: '0.9rem' }}>
                  {c.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
