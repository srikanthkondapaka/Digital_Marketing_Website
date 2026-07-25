'use client';
import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import AnimatedText from './AnimatedText';

const processSteps = [
  { title: "01. Discovery & Technical Audit", desc: "We perform a comprehensive audit of your current digital footprint, audience segments, competitor landscape, and growth roadblocks to form a data-grounded foundation." },
  { title: "02. Growth Strategy Roadmap", desc: "Engineers map out channel-by-channel KPIs, budget allocation, conversion funnels, and creative messaging guidelines aligned strictly with revenue goals." },
  { title: "03. Asset Planning & Creation", desc: "Designing high-converting ad copy, landing pages, creative assets, tracking pixels, and custom CRM workflows ready for launch." },
  { title: "04. Campaign Execution", desc: "Deploying high-performing ad campaigns across search, social, and programmatic channels alongside technical SEO rollouts." },
  { title: "05. Agile Optimization", desc: "Continuous multivariate testing of ad creative, audience targeting, landing page elements, and bid strategies to maximize ROAS." },
  { title: "06. Transparent Reporting", desc: "24/7 custom data dashboard access with clear multi-touch attribution metrics showing exact cost per lead and ROI." },
  { title: "07. Revenue Scaling", desc: "Doubling down on winning channels, unlocking new audience segments, and deploying automated workflows to scale sustainably." }
];

const nodeLabels = ['Discovery', 'Strategy', 'Planning', 'Execution', 'Optimization', 'Reporting', 'Growth'];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  useScrollReveal();

  return (
    <section id="process">
      <div
        data-reveal data-reveal-dir="up" data-reveal-duration="900"
        className="section-card-wrapper"
      >
        <span
          data-reveal data-reveal-dir="blur-up" data-reveal-delay="60" data-reveal-duration="780"
          className="section-tag"
        >Proven Scaling Methodology</span>

        <AnimatedText
          text="Our 7-Phase Growth Roadmap"
          tag="h2"
          className="section-title"
          delay={120}
          staggerMs={65}
        />

        <AnimatedText
          text="Click through our step-by-step methodology engineered to turn marketing campaigns into repeatable revenue engines."
          tag="p"
          className="section-subtitle"
          delay={380}
          staggerMs={28}
        />

        <div
          data-reveal data-reveal-dir="up" data-reveal-delay="300" data-reveal-duration="900"
          className="timeline-steps"
        >
          {processSteps.map((_, idx) => (
            <div
              key={idx}
              className={`timeline-step-node ${activeStep === idx ? 'active' : ''}`}
              onClick={() => setActiveStep(idx)}
            >
              <div className="node-circle">0{idx + 1}</div>
              <div className="node-label">{nodeLabels[idx]}</div>
            </div>
          ))}
        </div>

        <div
          key={activeStep}
          data-reveal data-reveal-dir="scale" data-reveal-delay="0" data-reveal-duration="600"
          style={{
            background: 'var(--bg-alt)',
            borderRadius: '20px', padding: '28px',
            border: '1px solid var(--border-light)',
            animation: 'stepFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both'
          }}
        >
          <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>
            {processSteps[activeStep].title}
          </h3>
          <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            {processSteps[activeStep].desc}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes stepFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </section>
  );
}
