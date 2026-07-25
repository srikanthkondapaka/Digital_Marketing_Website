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
import { Search, CheckCircle2, ArrowRight, Sparkles, Trophy, Globe, ShieldCheck } from 'lucide-react';

export default function SeoServicePage() {
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
              { label: 'Technical SEO' }
            ]} 
          />

          {/* Header */}
          <div
            data-reveal data-reveal-dir="up" data-reveal-duration="900"
            className="section-card-wrapper"
            style={{ background: 'var(--hero-box-bg)', borderRadius: '36px', padding: '64px 32px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div className="cap-purpose-icon-box"><Search size={26} /></div>
              <span className="cap-pillar-tag">ORGANIC DOMINANCE</span>
            </div>

            <h1 className="hero-stacked-title" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', marginBottom: '16px' }}>
              Technical SEO & Authority Architecture
            </h1>

            <div className="cap-purpose-box" style={{ maxWidth: '720px', marginBottom: '24px' }}>
              <span className="purpose-label">STRATEGIC PURPOSE:</span>
              <p className="purpose-text" style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                To capture high-intent buyers natively on Google & Bing, securing top search positions and permanent market share without paying for every single click.
              </p>
            </div>

            <p style={{ maxWidth: '720px', fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.7 }}>
              Standard SEO agencies focus on low-value traffic and vanity metrics. EdgeProc architects domain-dominating technical overhauls, Core Web Vitals optimization, semantic keyword cluster mapping, and high-authority digital PR acquisition engineered specifically for commercial revenue intent.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button onClick={() => setModalOpen(true)} className="btn-pill-dark">
                Request Technical SEO Audit →
              </button>
              <Link href="/digital-marketing" className="btn-pill-light">
                Back to Digital Marketing Hub
              </Link>
            </div>
          </div>

          {/* Deep Breakdown Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '36px' }}>
            <div className="section-card-wrapper">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>01. Technical Code & Speed Audit</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Full audit of crawl depth, indexability, JavaScript rendering, sitemaps, canonical tags, and sub-second Core Web Vitals optimization.
              </p>
            </div>

            <div className="section-card-wrapper">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>02. Semantic Keyword Clustering</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Mapping user search intent into high-converting topical authority silos rather than isolated target keywords.
              </p>
            </div>

            <div className="section-card-wrapper">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>03. High-Authority Digital PR</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Acquiring contextual, high-DR editorial backlinks from authoritative industry press outlets to solidify domain trust.
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
