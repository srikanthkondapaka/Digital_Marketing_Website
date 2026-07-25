'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

/**
 * RotatingText — premium phrase-swap animation component.
 *
 * @param {object}   props
 * @param {string[]} props.phrases      - Phrases to cycle through (min 2).
 * @param {number}   [props.intervalMs] - Hold duration per phrase (ms). Default 2800.
 * @param {string}   [props.className]  - Optional className for the outer span.
 * @param {object}   [props.style]      - Optional inline styles for the outer span.
 */

/**
 * Measures the widest phrase from the list and sets it as minWidth on the
 * wrapper element so the surrounding text never reflows during swaps.
 * @param {string[]} phrases
 * @param {React.RefObject<HTMLSpanElement>} ref
 */
function useLongestWidth(phrases, ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const clone = /** @type {HTMLSpanElement} */ (el.cloneNode(true));
    clone.style.cssText = `
      position:absolute; visibility:hidden; pointer-events:none;
      white-space:nowrap; left:-9999px; top:-9999px;
    `;
    document.body.appendChild(clone);

    let maxW = 0;
    phrases.forEach((phrase) => {
      clone.textContent = phrase;
      maxW = Math.max(maxW, clone.getBoundingClientRect().width);
    });

    document.body.removeChild(clone);
    el.style.minWidth = `${maxW + 4}px`; // 4px safety buffer
  }, [phrases, ref]);
}

export default function RotatingText({
  phrases,
  intervalMs = 2800,
  className = '',
  style = {},
}) {
  const [index, setIndex]  = useState(0);
  const wrapperRef         = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useLongestWidth(phrases, wrapperRef);

  // Cycle interval — cleaned up on unmount
  useEffect(() => {
    if (phrases.length < 2) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [phrases, intervalMs]);

  const current = phrases[index];

  /* ── Framer Motion variants ─────────────────────────────────────────── */
  // Full premium: opacity + y + scale + blur — all GPU-composited
  const premiumVariants = {
    initial: { opacity: 0,  y: 14,   scale: 0.98, filter: 'blur(4px)' },
    animate: { opacity: 1,  y: 0,    scale: 1,    filter: 'blur(0px)' },
    exit:    { opacity: 0,  y: -14,  scale: 0.98, filter: 'blur(4px)' },
  };

  // prefers-reduced-motion fallback: opacity only, no spatial movement
  const reducedVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit:    { opacity: 0 },
  };

  const variants   = shouldReduceMotion ? reducedVariants : premiumVariants;

  // easeOutExpo custom cubic-bezier — silky landing, zero overshoot
  const premiumTransition = {
    duration: 0.56,
    ease: [0.22, 1, 0.36, 1],
  };
  const reducedTransition = { duration: 0.2, ease: 'easeInOut' };
  const transition = shouldReduceMotion ? reducedTransition : premiumTransition;

  return (
    /*
     * Outer span:
     *  - display:inline-block + white-space:nowrap — no reflow during phrase swap.
     *  - minWidth set by useLongestWidth — reserves space for longest phrase.
     *  - aria-live + aria-atomic — screen readers announce the full new phrase.
     */
    <span
      ref={wrapperRef}
      className={className}
      style={{
        display: 'inline-block',
        whiteSpace: 'nowrap',
        verticalAlign: 'baseline',
        position: 'relative',
        ...style,
      }}
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={current}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          style={{
            display: 'inline-block',
            // Hint compositor to handle transform + opacity on GPU — no layout thrashing
            willChange: 'transform, opacity, filter',
          }}
        >
          {current}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
