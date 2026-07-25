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
import { PieChart, CheckCircle2, ArrowRight, Sparkles, Target, Flame } from 'lucide-react';

export default function AdsServicePage() {
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
              { label: 'PPC & Meta Ads' }
            ]} 
          />

          <div
            data-reveal data-reveal-dir="up" data-reveal-duration="900"
            className="section-card-wrapper"
            style={{ background: 'var(--hero-box-bg)', borderRadius: '36px', padding: '64px 32px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div className="cap-purpose-icon-box"><PieChart size={26} /></div>
              <span className="cap-pillar-tag">PAID ACQUISITION</span>
            </div>

            <h1 className="hero-stacked-title" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', marginBottom: '16px' }}>
              Google & Meta Performance Ad Engines
            </h1>

            <div className="cap-purpose-box" style={{ maxWidth: '720px', marginBottom: '24px' }}>
              <span className="purpose-label">STRATEGIC PURPOSE:</span>
              <p className="purpose-text" style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                To drive immediate, predictable pipeline velocity and sales revenue by placing high-converting ad variations in front of verified decision makers.
              </p>
            </div>

            <p style={{ maxWidth: '720px', fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.7 }}>
              We architect multi-channel ad campaigns across Google Performance Max, Search, YouTube, Meta (Facebook & Instagram), and LinkedIn Ads engineered with custom ML bidding models and rapid visual creative iterations for maximum customer acquisition.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button onClick={() => setModalOpen(true)} className="btn-pill-dark">
                Request Paid Ads Audit →
              </button>
              <Link href="/digital-marketing" className="btn-pill-light">
                Back to Digital Marketing Hub
              </Link>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '36px' }}>
            <div className="section-card-wrapper">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>01. Google Performance Max & Search</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Capturing active buyer search queries with machine learning bid algorithms, custom audience signals, and negative keyword filtering.
              </p>
            </div>

            <div className="section-card-wrapper">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>02. Meta Creative Scaling Engine</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Rapidly testing high-converting hook variations, UGC motion ads, and dynamic product ads to scale ROAS efficiently.
              </p>
            </div>

            <div className="section-card-wrapper">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>03. Server-Side Attribution Tracking</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Bypassing iOS privacy restrictions with server-side GTM and CAPI implementations for 100% accurate conversion telemetry.
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
