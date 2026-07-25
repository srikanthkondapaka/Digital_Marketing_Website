'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, TrendingUp } from 'lucide-react';

export default function LogoPreloader({ onComplete }) {
  const [show, setShow]         = useState(false);
  const [progress, setProgress] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    const navEntry    = performance?.getEntriesByType?.('navigation')?.[0];
    const alreadySeen = sessionStorage.getItem('ep_preloaded');

    if (navEntry?.type !== 'reload' && alreadySeen) {
      if (onComplete) onComplete();
      return;
    }

    sessionStorage.setItem('ep_preloaded', '1');
    setShow(true);

    const steps = [
      { target: 30,  delay: 0    },
      { target: 65,  delay: 500  },
      { target: 88,  delay: 1100 },
      { target: 100, delay: 1700 },
    ];

    const timers = steps.map(({ target, delay }) =>
      setTimeout(() => {
        setProgress(target);
        if (target === 100 && !doneRef.current) {
          doneRef.current = true;
          setTimeout(() => {
            setShow(false);
            if (onComplete) onComplete();
          }, 380);
        }
      }, delay)
    );

    return () => timers.forEach(clearTimeout);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: '#F2F4F8',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: '32px 24px',
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
              fontWeight: 900, color: '#0F172A',
              letterSpacing: '-0.04em',
              display: 'flex', alignItems: 'center', gap: '8px',
              marginBottom: '6px',
            }}
          >
            EdgeProc
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 260 }}
              style={{
                width: 'clamp(10px, 1.6vw, 16px)',
                height: 'clamp(10px, 1.6vw, 16px)',
                borderRadius: '50%', background: '#10B981',
                display: 'inline-block',
              }}
            />
          </motion.div>

          <p style={{
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#94A3B8',
            marginBottom: '44px',
          }}>
            Digital Marketing Architecture
          </p>

          {/* Visual Concept: Brand Idea -> Market Growth Track */}
          <div style={{ width: 'min(360px, 85vw)', position: 'relative' }}>
            {/* Top Row Icons */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginBottom: '12px', padding: '0 4px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  background: 'rgba(15, 23, 42, 0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#475569',
                }}>
                  <Sparkles size={14} />
                </div>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#475569', letterSpacing: '0.04em' }}>
                  BRAND
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: progress === 100 ? '#10B981' : '#0F172A', transition: 'color 0.4s' }}>
                  GROWTH 🚀
                </span>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  background: progress === 100 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(15, 23, 42, 0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: progress === 100 ? '#10B981' : '#0F172A',
                  transition: 'all 0.4s',
                }}>
                  <TrendingUp size={14} />
                </div>
              </div>
            </div>

            {/* Connecting Track with Pulsing Rocket / Signal */}
            <div style={{
              width: '100%', height: '6px',
              background: 'rgba(15, 23, 42, 0.08)',
              borderRadius: '100px',
              position: 'relative',
              overflow: 'visible',
            }}>
              {/* Fill Line */}
              <div style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #10B981 0%, #2563EB 50%, #0F172A 100%)',
                borderRadius: '100px',
                transition: 'width 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 0 12px rgba(37, 99, 235, 0.35)',
              }} />

              {/* Moving Pulse Head */}
              <div style={{
                position: 'absolute',
                left: `calc(${progress}% - 9px)`,
                top: '-5px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#0F172A',
                border: '2px solid #FFFFFF',
                boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)',
                transition: 'left 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%', background: '#10B981'
                }} />
              </div>
            </div>

            {/* Bottom percentage */}
            <div style={{
              marginTop: '12px', textAlign: 'center',
              fontSize: '0.75rem', fontWeight: 800, color: '#64748B',
              letterSpacing: '0.05em',
            }}>
              {Math.round(progress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
