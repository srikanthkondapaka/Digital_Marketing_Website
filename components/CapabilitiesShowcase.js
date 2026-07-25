'use client';
import Link from 'next/link';
import useScrollReveal from '../hooks/useScrollReveal';
import AnimatedText from './AnimatedText';
import { ShieldCheck, Rocket, Zap, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const TRUST_PILLARS = [
  {
    id: 'transparency',
    pillar: 'PILLAR 01 • GUARANTEED DATA TRANSPARENCY',
    title: '100% Real-Time Attribution & Telemetry',
    desc: 'Every dollar you invest is tracked in real-time. You get live dashboard access showing exact customer acquisition costs, pipeline conversion rates, and verified ROI.',
    valueLabel: 'VALUE TO YOU:',
    valueText: 'Zero hidden costs or vanity metrics—only verified revenue data.',
    icon: <ShieldCheck size={26} />,
  },
  {
    id: 'ownership',
    pillar: 'PILLAR 02 • FULL-STACK OWNERSHIP',
    title: 'End-to-End Growth System Ownership',
    desc: 'We take total accountability for your entire customer acquisition funnel—from initial prospect discovery and campaign strategy to landing page conversion.',
    valueLabel: 'VALUE TO YOU:',
    valueText: 'A single accountable partner managing your complete revenue engine.',
    icon: <Rocket size={26} />,
  },
  {
    id: 'velocity',
    pillar: 'PILLAR 03 • CONVERSION VELOCITY',
    title: 'Sub-Second Experience & Speed-to-Market',
    desc: 'Speed builds trust. We deploy high-converting brand assets in days and optimize user flows for sub-second load times so you never lose a prospective buyer.',
    valueLabel: 'VALUE TO YOU:',
    valueText: 'Faster pipeline velocity and higher conversion rates across all channels.',
    icon: <Zap size={26} />,
  },
  {
    id: 'expertise',
    pillar: 'PILLAR 04 • SENIOR PARTNERSHIP',
    title: 'Direct Access to Senior Strategists',
    desc: 'You work directly with seasoned growth engineers and directors who have managed enterprise budgets—never handed off to junior account managers.',
    valueLabel: 'VALUE TO YOU:',
    valueText: 'Enterprise-grade strategic execution and proactive communication.',
    icon: <Users size={26} />,
  },
];

export default function CapabilitiesShowcase({ onOpenModal }) {
  useScrollReveal();

  return (
    <section id="services">
      <div
        data-reveal data-reveal-dir="up" data-reveal-duration="900"
        className="section-card-wrapper"
      >
        <span
          data-reveal data-reveal-dir="blur-up" data-reveal-delay="60" data-reveal-duration="800"
          className="section-tag"
        >
          Why Enterprise Clients Trust Us
        </span>

        <AnimatedText
          text="Engineered for Client Trust & Strategic Growth"
          tag="h2"
          className="section-title"
          delay={120}
          staggerMs={55}
        />

        <AnimatedText
          text="We don't sell generic marketing packages. We build predictable revenue engines backed by transparent data, rapid execution, and senior expertise."
          tag="p"
          className="section-subtitle"
          delay={350}
          staggerMs={25}
        />

        {/* 2x2 Trust & Value Grid */}
        <div className="capabilities-purpose-grid">
          {TRUST_PILLARS.map((pillar, i) => (
            <div
              key={pillar.id}
              data-reveal
              data-reveal-dir="up"
              data-reveal-delay={140 + i * 100}
              data-reveal-duration="880"
              className="cap-purpose-card tilt-card"
            >
              <div className="cap-purpose-top">
                <span className="cap-pillar-tag">{pillar.pillar}</span>
                <div className="cap-purpose-icon-box">{pillar.icon}</div>
              </div>

              <h3 className="cap-purpose-title">{pillar.title}</h3>

              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '18px' }}>
                {pillar.desc}
              </p>

              <div className="cap-purpose-box">
                <span className="purpose-label">{pillar.valueLabel}</span>
                <p className="purpose-text">{pillar.valueText}</p>
              </div>

              <Link href="/digital-marketing" className="cap-purpose-link">
                <span>Explore Full Execution Strategy</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner to Central Digital Marketing Page */}
        <div
          data-reveal data-reveal-dir="up" data-reveal-delay="480" data-reveal-duration="800"
          className="cap-overview-banner"
        >
          <div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '4px', color: '#FFFFFF' }}>
              Looking for technical channel breakdowns (Search, Ads, Web & AI)?
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)' }}>
              All specific execution channels are organized on our dedicated Digital Marketing overview page.
            </p>
          </div>
          <Link href="/digital-marketing" className="btn-pill-dark">
            Explore Digital Marketing Hub →
          </Link>
        </div>
      </div>
    </section>
  );
}
