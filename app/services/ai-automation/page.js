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
import { Cpu, CheckCircle2, ArrowRight, Sparkles, Bot, Zap } from 'lucide-react';

export default function AiAutomationServicePage() {
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
              { label: 'AI Lead Automation' }
            ]} 
          />

          <div
            data-reveal data-reveal-dir="up" data-reveal-duration="900"
            className="section-card-wrapper"
            style={{ background: 'var(--hero-box-bg)', borderRadius: '36px', padding: '64px 32px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div className="cap-purpose-icon-box"><Cpu size={26} /></div>
              <span className="cap-pillar-tag">AI TELEMETRY</span>
            </div>

            <h1 className="hero-stacked-title" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', marginBottom: '16px' }}>
              AI Lead Workflows & Automation
            </h1>

            <div className="cap-purpose-box" style={{ maxWidth: '720px', marginBottom: '24px' }}>
              <span className="purpose-label">STRATEGIC PURPOSE:</span>
              <p className="purpose-text" style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                To eliminate lead response latency, qualify incoming inquiries 24/7, and automatically synchronize verified prospect data with your sales CRM.
              </p>
            </div>

            <p style={{ maxWidth: '720px', fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.7 }}>
              Speed-to-lead dictates conversion rates. Our AI automation engineers build custom 24/7 qualifying responders, automated calendar sequencers, and server-side CRM integrations that capture leads the moment they express interest.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button onClick={() => setModalOpen(true)} className="btn-pill-dark">
                Request AI Audit →
              </button>
              <Link href="/digital-marketing" className="btn-pill-light">
                Back to Digital Marketing Hub
              </Link>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '36px' }}>
            <div className="section-card-wrapper">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>01. 24/7 AI Lead Qualification</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Deploying interactive AI questionnaires and auto-responders that qualify lead budgets and project timelines in real time.
              </p>
            </div>

            <div className="section-card-wrapper">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>02. Instant CRM Pipeline Sync</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Synchronizing verified prospect data instantaneously into HubSpot, Salesforce, Zoho, or GoHighLevel via secure Webhooks.
              </p>
            </div>

            <div className="section-card-wrapper">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>03. Automated Calendar Booking</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Eliminating back-and-forth emails by letting high-value qualified leads book strategy calls directly into your sales team calendars.
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
