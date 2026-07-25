'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import { 
  Plus, Minus, Info, HelpCircle, MessageSquare, 
  Sparkles, FileText, ArrowRight 
} from 'lucide-react';

const FAQ_CATEGORIES = [
  {
    id: 'general',
    name: 'General Information',
    questions: [
      {
        q: "What is EdgeProc?",
        a: "EdgeProc is an enterprise performance marketing & digital growth agency. We architect high-velocity ad engines, SEO dominance, AI automation, and proprietary revenue funnels for market-leading brands."
      },
      {
        q: "How quickly can we expect measurable results?",
        a: "For paid channels like Google Ads and Meta Ads, initial lead flow and impression data begin within 48 to 72 hours of campaign activation. Full optimization and peak ROAS are typically achieved within 30 to 45 days."
      },
      {
        q: "What sets EdgeProc apart from traditional agencies?",
        a: "EdgeProc measures success strictly by cost per lead, sales pipeline growth, and bottom-line return on ad spend (ROAS). We combine proprietary AI automation with bespoke creative storytelling and 24/7 transparent live dashboards."
      },
      {
        q: "Do you work with businesses outside our country?",
        a: "Yes. EdgeProc is a globally operating digital marketing agency managing campaigns across 14+ countries for clients in North America, Europe, the Middle East, Southeast Asia, and India."
      }
    ]
  },
  {
    id: 'ppc',
    name: 'Purchasing and Payment',
    questions: [
      {
        q: "What minimum ad budget is recommended?",
        a: "We recommend a minimum monthly ad spend of $3,000 to $5,000 depending on your industry and competition. This ensures sufficient data volume for effective A/B testing and machine learning bid optimization."
      },
      {
        q: "Which digital marketing channels do you specialize in?",
        a: "We specialize in Google Search & Performance Max, Meta Ads (Facebook & Instagram), YouTube advertising, LinkedIn Ads for B2B, programmatic display, and performance retargeting."
      }
    ]
  },
  {
    id: 'pricing',
    name: 'Plans and Pricing',
    questions: [
      {
        q: "How does your pricing and billing structure work?",
        a: "We offer flexible engagement models: a fixed monthly retainer for ongoing management, a percentage-of-ad-spend model for performance campaigns, or project-based billing for custom website builds."
      },
      {
        q: "Are there any hidden setup fees or locked contracts?",
        a: "No hidden fees whatsoever. All contracts are clear, performance-grounded, and itemized upfront before campaign deployment."
      }
    ]
  },
  {
    id: 'setup',
    name: 'Setup and Configuration',
    questions: [
      {
        q: "What is required to set up our tracking and pixels?",
        a: "Our tech team handles 100% of the server-side GTM, GA4, Meta Conversion API, and Google Ads tag setup. We verify pixel health and offline lead attribution prior to launch."
      },
      {
        q: "How long does onboarding take?",
        a: "Standard onboarding takes 3 to 5 business days, including technical audits, strategy alignment, brand creative intake, and tracking setup."
      }
    ]
  },
  {
    id: 'features',
    name: 'Call Management and Features',
    questions: [
      {
        q: "Can AI voice & lead workflows handle call scheduling?",
        a: "Yes! Our AI lead workflow tools automate 24/7 inbound call routing, appointment booking, and CRM calendar synchronization without live operator delay."
      }
    ]
  },
  {
    id: 'integrations',
    name: 'Integrations and Compatibility',
    questions: [
      {
        q: "Can your performance infrastructure integrate with our CRM?",
        a: "Yes! We build direct API integrations for HubSpot, Salesforce, Zoho, GoHighLevel, Shopify, and custom Webhooks."
      }
    ]
  },
  {
    id: 'security',
    name: 'Security and Privacy',
    questions: [
      {
        q: "How is our customer and analytics data protected?",
        a: "All customer data is encrypted in transit and at rest using enterprise-grade SSL/TLS protocols and SOC-2 compliant cloud infrastructure."
      }
    ]
  },
  {
    id: 'support',
    name: 'Customer Support and Resources',
    questions: [
      {
        q: "Will I have a dedicated account manager?",
        a: "Yes. Every EdgeProc client gets a dedicated Senior Growth Architect and a Slack/Teams channel for real-time daily communication."
      },
      {
        q: "Will I have full visibility into campaign performance?",
        a: "Every client receives access to a custom 24/7 live Google Looker Studio portal showing real-time impressions, clicks, CPL, ROAS, and revenue data."
      }
    ]
  }
];

export default function FaqAccordion({ onOpenModal }) {
  const [activeCategoryId, setActiveCategoryId] = useState('general');
  const [openQuestionIndex, setOpenQuestionIndex] = useState(0);

  useScrollReveal();

  const currentCategory = FAQ_CATEGORIES.find(c => c.id === activeCategoryId) || FAQ_CATEGORIES[0];

  const handleCategoryChange = (id) => {
    setActiveCategoryId(id);
    setOpenQuestionIndex(0);
  };

  return (
    <section id="faq" className="faq-section-wrapper">
      <div
        data-reveal data-reveal-dir="up" data-reveal-duration="900"
        className="section-card-wrapper"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {/* Decorative Floating Header Doodle Icons */}
        <div className="faq-header-deco faq-deco-left" aria-hidden="true">
          <div className="faq-doodle-bubble">
            <MessageSquare size={22} className="faq-doodle-icon" />
          </div>
        </div>

        <div className="faq-header-deco faq-deco-right" aria-hidden="true">
          <div className="faq-doodle-circle" title="Questions & Help">
            <HelpCircle size={20} />
          </div>
          <div className="faq-doodle-info">
            <Info size={24} />
          </div>
        </div>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 2 }}>
          <span className="section-tag" style={{ display: 'inline-block', marginBottom: '12px' }}>
            Everything You Need to Know
          </span>
          <h2 className="section-title" style={{ fontSize: '2.4rem', marginBottom: '12px' }}>
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto', fontSize: '0.96rem' }}>
            Find answers to common questions about EdgeProc and how it can benefit your business growth.
          </p>
        </div>

        {/* 2-Column FAQ Layout Grid */}
        <div className="faq-layout-grid">
          
          {/* Left Column: Categories Sidebar */}
          <div className="faq-categories-sidebar">
            <h4 className="faq-sidebar-heading">Categories</h4>
            <div className="faq-category-nav-list">
              {FAQ_CATEGORIES.map((cat) => {
                const isActive = cat.id === activeCategoryId;
                return (
                  <button
                    key={cat.id}
                    className={`faq-category-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(cat.id)}
                  >
                    <span className="category-active-line" />
                    <span className="category-name-text">{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Category Accordions */}
          <div className="faq-accordion-main-column">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategoryId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="faq-accordion-list"
              >
                {currentCategory.questions.map((item, idx) => {
                  const isOpen = openQuestionIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`faq-card-item ${isOpen ? 'open' : ''}`}
                    >
                      <button
                        className="faq-card-trigger"
                        onClick={() => setOpenQuestionIndex(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                      >
                        <span className="faq-card-question-text">{item.q}</span>
                        <span className="faq-card-toggle-icon">
                          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div className="faq-card-body-text">
                              <p>{item.a}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Bottom "Still have a question?" Callout Banner */}
            <div className="faq-still-question-banner">
              <div className="still-left-info">
                <div className="still-info-icon-badge">
                  <Info size={20} />
                </div>
                <div>
                  <h4 className="still-title">Still have a question?</h4>
                  <p className="still-desc">If you didn't find your answer, feel free to reach out.</p>
                </div>
              </div>

              <div className="still-right-action">
                <div className="still-doodle-book-icon" aria-hidden="true">
                  <FileText size={20} />
                </div>
                <button
                  className="still-contact-btn"
                  onClick={onOpenModal}
                >
                  Contact us
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
