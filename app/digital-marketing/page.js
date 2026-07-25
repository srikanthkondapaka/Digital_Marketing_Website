'use client';
import { useState } from 'react';
import Link from 'next/link';
import useSmoothScroll from '../../hooks/useSmoothScroll';
import useScrollReveal from '../../hooks/useScrollReveal';
import HeaderNav from '../../components/HeaderNav';
import Footer from '../../components/Footer';
import ConsultationModal from '../../components/ConsultationModal';
import FloatingCta from '../../components/FloatingCta';
import Breadcrumbs from '../../components/Breadcrumbs';
import AnimatedText from '../../components/AnimatedText';
import { Search, PieChart, Layout, Cpu, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Trophy } from 'lucide-react';

const DIGITAL_MARKETING_SECTIONS = [
  {
    id: 'seo',
    badge: '01. ORGANIC AUTHORITY',
    title: 'Search Engine Dominance & SEO Architecture',
    purpose: 'To capture high-intent buyers natively on Google & Bing, securing top search positions and permanent market share without paying for every single click.',
    desc: 'Our SEO methodology combines deep technical site architecture, Core Web Vitals optimization, semantic entity clustering, and high-tier digital PR acquisition.',
    deliverables: [
      'Technical Code & Core Web Vitals Optimization',
      'Semantic Keyword Cluster & Intent Mapping',
      'High-Authority Digital PR & Editorial Link Acquisition',
      'Conversion-Optimized Organic Landing Pages',
    ],
    link: '/services/seo',
    icon: <Search size={32} className="dm-sec-icon" />,
  },
  {
    id: 'ppc',
    badge: '02. PAID ACQUISITION',
    title: 'Google & Meta Performance Ad Engines',
    purpose: 'To drive immediate, predictable pipeline velocity and sales revenue by placing high-converting ad variations in front of verified decision makers.',
    desc: 'We engineer data-driven PPC campaigns on Google Performance Max, Search, YouTube, Meta (Facebook & Instagram), and LinkedIn Ads with custom machine learning bidding rules.',
    deliverables: [
      'Google Performance Max & Search Bidding Models',
      'Meta Visual Storytelling & Motion Ad Creatives',
      'Multi-Touch Retargeting & Audience Segmentation',
      'Real-Time ROAS Telemetry & Multi-Touch Attribution',
    ],
    link: '/services/ads',
    icon: <PieChart size={32} className="dm-sec-icon" />,
  },
  {
    id: 'web',
    badge: '03. CONVERSION INFRASTRUCTURE',
    title: 'Web & UX Engineering for High Conversion',
    purpose: 'To maximize revenue per visitor by engineering sub-second page performance, intuitive user flows, and frictionless sales funnels.',
    desc: 'A great ad or SEO ranking is useless if your website drops leads. Our web engineering team builds custom Next.js & Webflow web applications optimized for conversion rate performance.',
    deliverables: [
      'Sub-Second Mobile & Desktop Page Load Speed',
      'Figma & Custom Component UX Systems',
      'Frictionless Lead Capture & Checkout Flow',
      'Heatmap Session Tracking & Multivariate A/B Testing',
    ],
    link: '/services/web-design',
    icon: <Layout size={32} className="dm-sec-icon" />,
  },
  {
    id: 'ai',
    badge: '04. AI TELEMETRY',
    title: 'AI Lead Automation & Workflow Telemetry',
    purpose: 'To eliminate lead response latency, qualify incoming inquiries 24/7, and automatically synchronize verified prospect data with your sales CRM.',
    desc: 'We build custom AI auto-responders, automated calendar scheduling engines, and server-side tracking pipelines that reduce customer acquisition cost.',
    deliverables: [
      '24/7 AI Lead Qualification & Auto-Responders',
      'Instant CRM Pipeline Sync (HubSpot, Salesforce, Zoho)',
      'Automated Calendar Booking & Follow-up Sequencers',
      'Server-Side GA4 Data Attribution Infrastructure',
    ],
    link: '/services/ai-automation',
    icon: <Cpu size={32} className="dm-sec-icon" />,
  },
];

export default function DigitalMarketingPage() {
  useSmoothScroll();
  useScrollReveal();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="container">
        <HeaderNav onOpenModal={() => setModalOpen(true)} />

        {/* Hero Section of Digital Marketing Hub */}
        <div style={{ paddingTop: '110px', paddingBottom: '40px' }}>
          <Breadcrumbs items={[{ label: 'Digital Marketing Hub' }]} />

          <div
            data-reveal data-reveal-dir="up" data-reveal-duration="900"
            className="section-card-wrapper"
            style={{ textAlign: 'center', background: 'var(--hero-box-bg)', borderRadius: '36px', padding: '64px 32px' }}
          >
            <div className="media-overlay-badge" style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <Sparkles size={14} style={{ color: 'var(--mint)' }} />
              <span>DIGITAL MARKETING ARCHITECTURE</span>
            </div>

            <h1 className="hero-stacked-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '16px' }}>
              Digital Marketing Categorized by Purpose
            </h1>

            <p style={{ maxWidth: '720px', margin: '0 auto 28px', fontSize: '1.05rem', color: 'var(--text-muted)' }}>
              We don't sell random marketing activities. We build structured growth systems where every discipline serves a specific revenue objective.
            </p>

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => setModalOpen(true)} className="btn-pill-dark">
                Schedule Growth Audit →
              </button>
              <Link href="/#calculator" className="btn-pill-light">
                Calculate Revenue ROAS
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Purpose-Driven Service Modules */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '60px' }}>
          {DIGITAL_MARKETING_SECTIONS.map((sec, idx) => (
            <div
              key={sec.id}
              id={sec.id}
              data-reveal
              data-reveal-dir="up"
              data-reveal-delay={100 + idx * 80}
              data-reveal-duration="900"
              className="section-card-wrapper dm-hub-card"
            >
              <div className="dm-hub-header">
                <div className="dm-hub-badge-row">
                  <span className="cap-pillar-tag">{sec.badge}</span>
                  <div className="cap-purpose-icon-box">{sec.icon}</div>
                </div>
                <h2 className="dm-hub-title">{sec.title}</h2>
              </div>

              {/* Purpose Box */}
              <div className="cap-purpose-box" style={{ margin: '16px 0 20px' }}>
                <span className="purpose-label">CORE BUSINESS PURPOSE:</span>
                <p className="purpose-text" style={{ fontSize: '1.02rem', fontWeight: 600 }}>{sec.purpose}</p>
              </div>

              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.65 }}>
                {sec.desc}
              </p>

              {/* Deliverables Checklist */}
              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 800, marginBottom: '12px', color: 'var(--text-main)' }}>
                  KEY SYSTEM DELIVERABLES:
                </h4>
                <div className="dm-deliverables-grid">
                  {sec.deliverables.map((item, i) => (
                    <div key={i} className="dm-deliverable-item">
                      <CheckCircle2 size={16} style={{ color: 'var(--mint)', flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link to dedicated service sub-page */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                <Link href={sec.link} className="cap-purpose-link" style={{ fontSize: '0.95rem' }}>
                  <span>Read Deep-Dive Strategy Page ({sec.badge.split('• ')[1]})</span>
                  <ArrowRight size={16} />
                </Link>
                <button onClick={() => setModalOpen(true)} className="btn-pill-dark" style={{ padding: '8px 20px', fontSize: '0.82rem' }}>
                  Request {sec.badge.split('. ')[1]} Proposal
                </button>
              </div>
            </div>
          ))}
        </div>

        <Footer onOpenModal={() => setModalOpen(true)} />
      </div>

      <FloatingCta onOpenModal={() => setModalOpen(true)} />
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
