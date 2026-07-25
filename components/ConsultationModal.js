'use client';
import { useState } from 'react';
import { User, Mail, Globe, MessageSquare, ArrowRight, X } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', website: '', message: '' });
      onClose();
    }, 2200);
  };

  return (
    <div
      className="modal-overlay active"
      onClick={onClose}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '0',
          maxWidth: '480px',
          width: '100%',
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(15,23,42,0.18)',
          position: 'relative',
        }}
      >
        {/* Header Strip */}
        <div style={{
          background: 'linear-gradient(135deg, #0F2942 0%, #1E3A5F 60%, #1D4ED8 100%)',
          padding: '28px 32px 24px',
          position: 'relative',
        }}>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: 'absolute', top: '16px', right: '16px',
              background: 'rgba(255,255,255,0.12)', border: 'none',
              color: '#FFF', width: '32px', height: '32px',
              borderRadius: '50%', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.85rem', transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
          >
            <X size={15} />
          </button>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'rgba(255,255,255,0.12)', borderRadius: '100px',
            padding: '4px 12px', marginBottom: '12px',
            fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.14em',
            color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            Free Strategy Audit
          </div>

          <h3 style={{
            fontSize: 'clamp(1.4rem, 3vw, 1.75rem)', fontWeight: 900,
            color: '#FFFFFF', margin: '0 0 6px', letterSpacing: '-0.02em',
          }}>
            Get Your Free Audit
          </h3>
          <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
            We'll review your brand and send a custom growth plan within 24 hours.
          </p>
        </div>

        {/* Form Body */}
        <div style={{ padding: '28px 32px 32px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 0 10px' }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '50%',
                background: '#ECFDF5', display: 'flex', alignItems: 'center',
                justifyContent: 'center', margin: '0 auto 16px',
                fontSize: '1.6rem',
              }}>
                ✓
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', margin: '0 0 6px' }}>
                Request Received!
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#475569' }}>
                Our team will reach out within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

              {/* Full Name */}
              <div style={{ position: 'relative' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#374151', marginBottom: '6px', letterSpacing: '0.02em' }}>
                  Full Name <span style={{ color: '#E11D48' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={15} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
                  <input
                    type="text"
                    id="c-name"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%', padding: '11px 14px 11px 38px',
                      borderRadius: '10px', border: '1.5px solid #E5E7EB',
                      fontSize: '0.9rem', color: '#0F172A', background: '#F9FAFB',
                      outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
                      fontFamily: 'inherit', boxSizing: 'border-box',
                    }}
                    onFocus={e => { e.target.style.borderColor = '#1D4ED8'; e.target.style.boxShadow = '0 0 0 3px rgba(29,78,216,0.1)'; e.target.style.background = '#FFF'; }}
                    onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none'; e.target.style.background = '#F9FAFB'; }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#374151', marginBottom: '6px', letterSpacing: '0.02em' }}>
                  Email Address <span style={{ color: '#E11D48' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail size={15} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
                  <input
                    type="email"
                    id="c-email"
                    placeholder="you@company.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%', padding: '11px 14px 11px 38px',
                      borderRadius: '10px', border: '1.5px solid #E5E7EB',
                      fontSize: '0.9rem', color: '#0F172A', background: '#F9FAFB',
                      outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
                      fontFamily: 'inherit', boxSizing: 'border-box',
                    }}
                    onFocus={e => { e.target.style.borderColor = '#1D4ED8'; e.target.style.boxShadow = '0 0 0 3px rgba(29,78,216,0.1)'; e.target.style.background = '#FFF'; }}
                    onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none'; e.target.style.background = '#F9FAFB'; }}
                  />
                </div>
              </div>

              {/* Website */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#374151', marginBottom: '6px', letterSpacing: '0.02em' }}>
                  Company Website <span style={{ color: '#94A3B8', fontWeight: 500 }}>(optional)</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <Globe size={15} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
                  <input
                    type="url"
                    id="c-website"
                    placeholder="https://yourcompany.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    style={{
                      width: '100%', padding: '11px 14px 11px 38px',
                      borderRadius: '10px', border: '1.5px solid #E5E7EB',
                      fontSize: '0.9rem', color: '#0F172A', background: '#F9FAFB',
                      outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
                      fontFamily: 'inherit', boxSizing: 'border-box',
                    }}
                    onFocus={e => { e.target.style.borderColor = '#1D4ED8'; e.target.style.boxShadow = '0 0 0 3px rgba(29,78,216,0.1)'; e.target.style.background = '#FFF'; }}
                    onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none'; e.target.style.background = '#F9FAFB'; }}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#374151', marginBottom: '6px', letterSpacing: '0.02em' }}>
                  What's your goal? <span style={{ color: '#94A3B8', fontWeight: 500 }}>(optional)</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <MessageSquare size={15} style={{ position: 'absolute', left: '14px', top: '14px', color: '#94A3B8', pointerEvents: 'none' }} />
                  <textarea
                    id="c-message"
                    rows={3}
                    placeholder="e.g. Increase leads, improve ROAS, launch new brand..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%', padding: '11px 14px 11px 38px',
                      borderRadius: '10px', border: '1.5px solid #E5E7EB',
                      fontSize: '0.9rem', color: '#0F172A', background: '#F9FAFB',
                      outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
                      fontFamily: 'inherit', boxSizing: 'border-box',
                      resize: 'none', lineHeight: 1.5,
                    }}
                    onFocus={e => { e.target.style.borderColor = '#1D4ED8'; e.target.style.boxShadow = '0 0 0 3px rgba(29,78,216,0.1)'; e.target.style.background = '#FFF'; }}
                    onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none'; e.target.style.background = '#F9FAFB'; }}
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: '100%', padding: '13px 24px',
                  background: 'linear-gradient(135deg, #0F2942 0%, #1E3A5F 60%, #1D4ED8 100%)',
                  color: '#FFF', border: 'none', borderRadius: '12px',
                  fontSize: '0.95rem', fontWeight: 800, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  transition: 'opacity 0.2s, transform 0.2s',
                  fontFamily: 'inherit', marginTop: '4px',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.92'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Request Free Audit <ArrowRight size={16} />
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.74rem', color: '#9CA3AF', margin: '-6px 0 0' }}>
                No spam. No commitment. We'll respond within 24 hours.
              </p>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
