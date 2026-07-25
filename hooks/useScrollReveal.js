'use client';
import { useEffect } from 'react';

/**
 * Professional scroll reveal engine.
 * Each element gets its own IntersectionObserver — fully independent.
 *
 * Supported data attributes on any element:
 *   data-reveal           → triggers reveal (required)
 *   data-reveal-dir       → "up" | "down" | "left" | "right" | "scale" | "blur-up" (default: "up")
 *   data-reveal-delay     → delay in ms (default: 0)
 *   data-reveal-duration  → duration in ms (default: 900)
 *   data-reveal-distance  → px offset (default: 28)
 */
export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!elements.length) return;

    const easeLuxury  = 'cubic-bezier(0.16, 1, 0.3, 1)';
    const easeSoft    = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    const observers   = [];

    elements.forEach((el) => {
      const dir      = el.dataset.revealDir      || 'up';
      const delay    = parseInt(el.dataset.revealDelay    || '0',    10);
      const duration = parseInt(el.dataset.revealDuration || '900',  10);
      const dist     = parseInt(el.dataset.revealDistance || '28',   10);

      // ── Set initial hidden state ────────────────────────────────────────
      el.style.willChange   = 'opacity, transform';
      el.style.opacity      = '0';
      el.style.transition   = 'none';

      switch (dir) {
        case 'up':      el.style.transform = `translateY(${dist}px)`;    break;
        case 'down':    el.style.transform = `translateY(-${dist}px)`;   break;
        case 'left':    el.style.transform = `translateX(${dist}px)`;    break;
        case 'right':   el.style.transform = `translateX(-${dist}px)`;   break;
        case 'scale':   el.style.transform = 'scale(0.93)';              break;
        case 'blur-up':
          el.style.transform = `translateY(${dist * 0.6}px)`;
          el.style.filter    = 'blur(6px)';
          break;
        default: break;
      }

      // Check if already in viewport on load — reveal instantly
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight - 60 && rect.bottom > 0;

      if (inView) {
        // Already visible — just clear transform, no delay
        requestAnimationFrame(() => {
          el.style.transition = `opacity 0.6s ${easeSoft}, transform 0.6s ${easeSoft}, filter 0.6s ${easeSoft}`;
          el.style.opacity    = '1';
          el.style.transform  = dir === 'scale' ? 'scale(1)' : 'translate(0)';
          if (dir === 'blur-up') el.style.filter = 'blur(0px)';
          setTimeout(() => { el.style.willChange = 'auto'; }, 700);
        });
        return;
      }

      // ── Create individual observer ──────────────────────────────────────
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;

          setTimeout(() => {
            el.style.transition = [
              `opacity ${duration}ms ${easeLuxury}`,
              `transform ${duration}ms ${easeLuxury}`,
              dir === 'blur-up' ? `filter ${duration}ms ${easeSoft}` : '',
            ].filter(Boolean).join(', ');

            el.style.opacity   = '1';
            el.style.transform = dir === 'scale' ? 'scale(1)' : 'translate(0)';
            if (dir === 'blur-up') el.style.filter = 'blur(0px)';

            setTimeout(() => { el.style.willChange = 'auto'; }, duration + delay + 100);
          }, delay);

          obs.unobserve(el);
        },
        { rootMargin: '0px 0px -70px 0px', threshold: 0.1 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);
}
