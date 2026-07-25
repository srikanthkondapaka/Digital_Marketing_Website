'use client';
import { useState } from 'react';
import Link from 'next/link';
import useSmoothScroll from '../../../hooks/useSmoothScroll';
import useScrollReveal from '../../../hooks/useScrollReveal';
import HeaderNav from '../../../components/HeaderNav';
import Footer from '../../../components/Footer';
import ConsultationModal from '../../../components/ConsultationModal';
import FloatingCta from '../../../components/FloatingCta';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { Layout, CheckCircle2, ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export default function WebDesignServicePage() {
  useSmoothScroll();
  useScrollReveal();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="container">
        <HeaderNav onOpenModal={() => setModalOpen(true)} />

        <div style={{ paddingTop: '110px', paddingBottom: '40px' }}>
          <Breadcrumbs 
            items={[
              { label: 'Digital Marketing', href: '/digital-marketing' },
              { label: 'Web & UX Engineering' }
            ]} 
          />

          <div
            data-reveal data-reveal-dir="up" data-reveal-duration="900"
            className="section-card-wrapper"
            style={{ background: 'var(--hero-box-bg)', borderRadius: '36px', padding: '64px 32px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div className="cap-purpose-icon-box"><Layout size={26} /></div>
              <span className="cap-pillar-tag">CONVERSION INFRASTRUCTURE</span>
            </div>

            <h1 className="hero-stacked-title" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', marginBottom: '16px' }}>
              Web & UX Engineering for High Conversion
            </h1>

            <div className="cap-purpose-box" style={{ maxWidth: '720px', marginBottom: '24px' }}>
              <span className="purpose-label">STRATEGIC PURPOSE:</span>
              <p className="purpose-text" style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                To maximize revenue per visitor by engineering sub-second page performance, intuitive user flows, and frictionless sales funnels.
              </p>
            </div>

            <p style={{ maxWidth: '720px', fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.7 }}>
              Traffic is worthless if your digital storefront doesn't convert. Our full-stack web engineering team builds custom Next.js, Figma, and Webflow web applications optimized for speed, mobile responsiveness, and conversion rate performance.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button onClick={() => setModalOpen(true)} className="btn-pill-dark">
                Request Web Audit →
              </button>
              <Link href="/digital-marketing" className="btn-pill-light">
                Back to Digital Marketing Hub
              </Link>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '36px' }}>
            <div className="section-card-wrapper">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>01. Sub-Second Speed Engineering</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Optimizing asset delivery, serverless SSR, and zero layout shift to keep page load times under 800ms worldwide.
              </p>
            </div>

            <div className="section-card-wrapper">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>02. Conversion UX & Funnel Architecture</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Designing intuitive user journeys, sticky conversion elements, and streamlined multi-step lead forms.
              </p>
            </div>

            <div className="section-card-wrapper">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>03. Multivariate A/B Testing</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Running continuous split tests on headlines, CTAs, hero media, and pricing layouts to maximize visitor-to-customer conversion.
              </p>
            </div>
          </div>
        </div>

        <Footer onOpenModal={() => setModalOpen(true)} />
      </div>

      <FloatingCta onOpenModal={() => setModalOpen(true)} />
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
