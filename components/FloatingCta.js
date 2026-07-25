'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

export default function FloatingCta({ onOpenModal }) {
  const [hideBtn, setHideBtn] = useState(false);

  useEffect(() => {
    const footerEl = document.querySelector('.footer');
    if (!footerEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideBtn(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.05,
      }
    );

    observer.observe(footerEl);

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {!hideBtn && (
        <motion.button
          className="enquiry-floating-btn"
          onClick={onOpenModal}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.25 } }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Get in Touch"
        >
          <span className="floating-cta-pulse-dot" title="Online" />
          <MessageSquare size={13} className="floating-cta-icon" />
          <span className="floating-cta-text">Get in Touch</span>
          <ArrowUpRight size={13} className="floating-cta-arrow" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
