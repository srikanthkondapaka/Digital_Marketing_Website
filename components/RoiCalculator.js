'use client';
import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import AnimatedText from './AnimatedText';

export default function RoiCalculator() {
  const [budget, setBudget] = useState(10000);
  const [cpc, setCpc] = useState(2.50);
  const [convRate, setConvRate] = useState(4.5);
  useScrollReveal();

  const avgDealValue = 480;
  const estimatedClicks  = Math.round(budget / cpc);
  const estimatedLeads   = Math.round(estimatedClicks * (convRate / 100));
  const estimatedRevenue = Math.round(estimatedLeads * avgDealValue);
  const calculatedRoi    = Math.round(((estimatedRevenue - budget) / budget) * 100);

  return (
    <section id="calculator">
      <div
        data-reveal data-reveal-dir="up" data-reveal-duration="900"
        className="roi-calculator-box"
      >
        <div className="roi-calc-grid">
          <div>
            <span
              data-reveal data-reveal-dir="blur-up" data-reveal-delay="80" data-reveal-duration="780"
              className="section-tag"
            >Growth Telemetry Engine</span>

            <AnimatedText
              text="Calculate Revenue Lift"
              tag="h2"
              delay={140}
              staggerMs={65}
              style={{ fontSize: '2.2rem', marginBottom: '12px' }}
            />
            <AnimatedText
              text="Adjust monthly ad spend and parameters to estimate traffic volume, qualified sales leads, and total return on investment."
              tag="p"
              delay={380}
              staggerMs={28}
              style={{ marginBottom: '28px', fontSize: '0.98rem' }}
            />

            <div
              data-reveal data-reveal-dir="up" data-reveal-delay="480" data-reveal-duration="860"
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, marginBottom: '8px', fontSize: '0.92rem' }}>
                  Monthly Ad Spend: <span style={{ color: 'var(--mint)' }}>${budget.toLocaleString()}</span>
                </label>
                <input type="range" min="2000" max="50000" step="1000" value={budget}
                  onChange={e => setBudget(Number(e.target.value))} className="custom-range-slider" />
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, marginBottom: '8px', fontSize: '0.92rem' }}>
                  Est. Cost Per Click (CPC): <span style={{ color: 'var(--mint)' }}>${cpc.toFixed(2)}</span>
                </label>
                <input type="range" min="0.5" max="10" step="0.25" value={cpc}
                  onChange={e => setCpc(Number(e.target.value))} className="custom-range-slider" />
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, marginBottom: '8px', fontSize: '0.92rem' }}>
                  Landing Page Conv. Rate: <span style={{ color: 'var(--mint)' }}>{convRate.toFixed(1)}%</span>
                </label>
                <input type="range" min="1" max="12" step="0.5" value={convRate}
                  onChange={e => setConvRate(Number(e.target.value))} className="custom-range-slider" />
              </div>
            </div>
          </div>

          <div
            data-reveal data-reveal-dir="scale" data-reveal-delay="320" data-reveal-duration="1000"
            className="roi-output-card tilt-card"
          >
            <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
              Est. Monthly Revenue Uplift
            </p>
            <div className="roi-big-val">${estimatedRevenue.toLocaleString()}</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Est. Monthly Clicks</p>
                <h4 style={{ fontSize: '1.25rem' }}>{estimatedClicks.toLocaleString()}</h4>
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Est. Sales Leads</p>
                <h4 style={{ fontSize: '1.25rem' }}>{estimatedLeads.toLocaleString()}</h4>
              </div>
            </div>

            <div style={{ marginTop: '20px', fontSize: '0.9rem', color: 'var(--mint)' }}>
              Est. Return on Investment: <strong>{calculatedRoi > 0 ? '+' : ''}{calculatedRoi}%</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
