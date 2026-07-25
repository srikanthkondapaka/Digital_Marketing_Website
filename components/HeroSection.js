'use client';
import Link from 'next/link';
import Image from 'next/image';
import useScrollReveal from '../hooks/useScrollReveal';
import { ShieldCheck, Target, ArrowRight } from 'lucide-react';

// Professional Deep Slate Blue palette
const SLATE = 'linear-gradient(145deg, #0F2942 0%, #1E3A5F 60%, #1D4ED8 100%)';

export default function HeroSection({ onOpenModal }) {
  useScrollReveal();

  return (
    <div className="hero-wrapper" id="hero" style={{ position: 'relative', padding: '90px 24px 28px' }}>
      <div className="deco-blob deco-blob-1" />
      <div className="deco-blob deco-blob-2" />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="bento-hero-grid">

          {/* ── CELL 1 — Light Warm: Stats ── */}
          <div
            data-reveal data-reveal-dir="up" data-reveal-delay="0"
            className="bento-cell cell-trust-dark"
            style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '24px',
              padding: '26px 22px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <h2 style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.8rem)', fontWeight: 900, lineHeight: 1.2, color: '#0F172A', marginBottom: 'auto' }}>
              Real growth.<br />Real clients.
            </h2>
            <div style={{ display: 'flex', gap: '14px', marginTop: '24px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#D97706' }}>50+</div>
                <div style={{ fontSize: '0.62rem', color: '#94A3B8', fontWeight: 700, letterSpacing: '0.06em' }}>BRANDS</div>
              </div>
              <div style={{ width: '1px', background: '#E2E8F0' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#D97706' }}>4.9×</div>
                <div style={{ fontSize: '0.62rem', color: '#94A3B8', fontWeight: 700, letterSpacing: '0.06em' }}>AVG ROAS</div>
              </div>
            </div>
          </div>

          {/* ── CELL 2 — Deep Slate Blue: Main Statement (full height) ── */}
          <div
            data-reveal data-reveal-dir="up" data-reveal-delay="60"
            className="bento-cell cell-main-statement"
            style={{
              background: SLATE,
              borderRadius: '28px',
              padding: '32px 28px',
              color: '#FFF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '12px', color: '#FFFFFF' }}>
                We turn clicks<br />into customers.
              </h1>
              {/* Sketch underline */}
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{
                  fontFamily: "var(--font-caveat), 'Caveat', cursive",
                  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  fontWeight: 700,
                  color: '#FEF08A',
                  lineHeight: 1,
                }}>
                  Every rupee counts.
                </span>
                <svg viewBox="0 0 220 12" style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '10px', overflow: 'visible' }}>
                  <path d="M 4 8 C 60 2, 140 10, 216 5" stroke="#FEF08A" strokeWidth="2.5" fill="none" strokeLinecap="round"
                    strokeDasharray="220" strokeDashoffset="220"
                    style={{ animation: 'sketchStroke 1.2s cubic-bezier(0.16,1,0.3,1) 0.5s forwards' }} />
                </svg>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '28px', flexWrap: 'wrap' }}>
              <button onClick={onOpenModal} style={{ background: '#FFFFFF', color: '#1E3A5F', border: 'none', padding: '12px 24px', borderRadius: '100px', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                Get Free Audit <ArrowRight size={14} />
              </button>
              <Link href="/digital-marketing" style={{ background: 'rgba(255,255,255,0.12)', color: '#FFF', border: '1px solid rgba(255,255,255,0.25)', padding: '12px 20px', borderRadius: '100px', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}>
                Our Services
              </Link>
            </div>
          </div>

          {/* ── CELL 3 — Light Teal: Performance ── */}
          <div
            data-reveal data-reveal-dir="up" data-reveal-delay="100"
            className="bento-cell cell-award"
            style={{
              background: '#F0FDF4',
              border: '1px solid #BBF7D0',
              borderRadius: '22px',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ width: '42px', height: '42px', borderRadius: '14px', background: 'rgba(5,150,105,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <ShieldCheck size={22} style={{ color: '#059669' }} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0F172A', margin: '0 0 8px', lineHeight: 1.15 }}>
              No fluff.<br />Just results.
            </h3>
            <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#059669', letterSpacing: '0.1em' }}>
              100% TRANSPARENT REPORTING
            </div>
          </div>

          {/* ── CELL 4 — Campaign Image (full height) ── */}
          <div
            data-reveal data-reveal-dir="right" data-reveal-delay="130"
            className="bento-cell cell-image-right"
            style={{ borderRadius: '24px', overflow: 'hidden', position: 'relative', minHeight: '360px' }}
          >
            <Image src="/hero-campaign.png" alt="EdgeProc Campaign Showcase" fill style={{ objectFit: 'cover' }} priority />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(15,23,42,0.92) 30%, transparent 80%)',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px 18px',
            }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#6EE7B7', letterSpacing: '0.1em', marginBottom: '4px' }}>LIVE CAMPAIGN RESULT</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#FFFFFF' }}>4.9× ROAS</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>100M+ Impressions Served</div>
            </div>
          </div>

          {/* ── CELL 5 — Light Slate: Bold Statement ── */}
          <div
            data-reveal data-reveal-dir="up" data-reveal-delay="160"
            className="bento-cell cell-bold-text"
            style={{
              background: '#EFF6FF',
              border: '1px solid #BFDBFE',
              borderRadius: '22px',
              padding: '26px 22px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {/* "Stop Guessing." in sketch/handwritten style */}
              <span style={{
                fontFamily: "var(--font-caveat), 'Caveat', cursive",
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 700,
                color: '#334155',
                lineHeight: 1.1,
              }}>
                Stop guessing.
              </span>

              {/* "Start" in sketch style */}
              <span style={{
                fontFamily: "var(--font-caveat), 'Caveat', cursive",
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 700,
                color: '#334155',
                lineHeight: 1.1,
              }}>
                Start
              </span>

              {/* "Growing." with animated sketch underline */}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{
                  fontFamily: "var(--font-caveat), 'Caveat', cursive",
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  fontWeight: 700,
                  color: '#1D4ED8',
                  lineHeight: 1.1,
                }}>
                  growing.
                </span>
                {/* Animated sketch underline */}
                <svg viewBox="0 0 160 10" style={{ position: 'absolute', bottom: '-2px', left: 0, width: '100%', height: '9px', overflow: 'visible' }}>
                  <path
                    d="M 3 6 C 40 2, 110 8, 157 4"
                    stroke="#1D4ED8"
                    strokeWidth="2.8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="160"
                    strokeDashoffset="160"
                    style={{ animation: 'sketchStroke 1.4s cubic-bezier(0.16,1,0.3,1) 0.8s forwards' }}
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* ── CELL 6 — Light Blue: Numbers ── */}
          <div
            data-reveal data-reveal-dir="up" data-reveal-delay="180"
            className="bento-cell cell-aim"
            style={{
              background: '#EFF6FF',
              border: '1px solid #BFDBFE',
              borderRadius: '22px',
              padding: '22px 18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '9px', background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Target size={15} style={{ color: '#2563EB' }} />
              </div>
              <span style={{ fontSize: '0.66rem', fontWeight: 800, color: '#2563EB', letterSpacing: '0.1em' }}>OUR NUMBERS</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: '#475569', fontWeight: 600 }}>Revenue Lift</span>
                <strong style={{ fontSize: '1.1rem', color: '#1D4ED8' }}>↑ 340%</strong>
              </div>
              <div style={{ height: '1px', background: '#BFDBFE' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: '#475569', fontWeight: 600 }}>Client Retention</span>
                <strong style={{ fontSize: '1.1rem', color: '#1D4ED8' }}>96%</strong>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
