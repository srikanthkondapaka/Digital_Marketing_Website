'use client';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Footer({ onOpenModal }) {
  useScrollReveal();

  return (
    <footer
      data-reveal data-reveal-dir="up" data-reveal-duration="900"
      className="footer"
    >
      <div className="footer-grid">

        <div data-reveal data-reveal-dir="up" data-reveal-delay="80" data-reveal-duration="880">
          <h3 style={{ fontSize: '1.45rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            EdgeProc <span className="brand-dot" />
          </h3>
          <p style={{ fontSize: '0.88rem' }}>
            Digital marketing and branding agency helping businesses build memorable brand identities, targeted growth strategies, and high-converting campaigns.
          </p>
        </div>

        <div data-reveal data-reveal-dir="up" data-reveal-delay="160" data-reveal-duration="880">
          <h4 style={{ marginBottom: '14px' }}>Capabilities</h4>
          {['SEO & Organic Search', 'Google Ads & PPC', 'Meta Social Ads', 'Web Design & UX'].map(item => (
            <p key={item} style={{ fontSize: '0.85rem', marginBottom: '8px', color: 'var(--text-muted)', cursor: 'default',
              transition: 'color 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-main)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >{item}</p>
          ))}
        </div>

        <div data-reveal data-reveal-dir="up" data-reveal-delay="240" data-reveal-duration="880">
          <h4 style={{ marginBottom: '14px' }}>Company</h4>
          {[['#showcase','Showcase'],['#services','Capabilities'],['#process','Roadmap'],['#portfolio','Case Studies']].map(([href, label]) => (
            <p key={href} style={{ fontSize: '0.85rem', marginBottom: '8px' }}>
              <a href={href} className="nav-link" style={{ fontSize: '0.85rem' }}>{label}</a>
            </p>
          ))}
        </div>

        <div data-reveal data-reveal-dir="up" data-reveal-delay="320" data-reveal-duration="880">
          <h4 style={{ marginBottom: '14px' }}>Get Started</h4>
          <button onClick={onOpenModal} className="btn-pill-dark" style={{ width: '100%', justifyContent: 'center' }}>
            Schedule Audit →
          </button>
        </div>

      </div>

      <div
        data-reveal data-reveal-dir="up" data-reveal-delay="440" data-reveal-duration="800"
        className="footer-bottom"
      >
        <div>© 2026 EdgeProc Digital Agency. All rights reserved.</div>
        <div>Privacy Policy • Terms of Service</div>
      </div>
    </footer>
  );
}
