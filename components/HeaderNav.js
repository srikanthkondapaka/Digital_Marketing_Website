'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const navLinks = [
  { href: '/',                  label: 'Home' },
  { href: '/digital-marketing', label: 'Digital Marketing' },
  { href: '/#showcase',         label: 'Gallery' },
  { href: '/#process',          label: 'Roadmap' },
  { href: '/#portfolio',        label: 'Case Studies' },
  { href: '/#calculator',       label: 'ROI Calculator' },
  { href: '/#faq',              label: 'FAQ' },
];

export default function HeaderNav({ onOpenModal }) {
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('edgeproc-theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      setScrolled(prev => (prev !== isScrolled ? isScrolled : prev));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('edgeproc-theme', next);
  };

  return (
    <>
      {/* Mobile / Full Navigation Drawer */}
      <div className={`mobile-nav-drawer ${drawerOpen ? 'active' : ''}`}>
        <div className="mobile-drawer-header">
          <Link href="/" className="hero-brand" onClick={() => setDrawerOpen(false)} style={{ fontSize: '1.3rem' }}>
            EdgeProc <span className="brand-dot" />
          </Link>
          <button className="drawer-close-btn" onClick={() => setDrawerOpen(false)} aria-label="Close Menu">
            ✕
          </button>
        </div>
        <ul className="mobile-nav-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setDrawerOpen(false)}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
          <button
            className="btn-pill-dark"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => { setDrawerOpen(false); onOpenModal(); }}
          >
            Request Audit →
          </button>
        </div>
      </div>

      {/* Clean Sticky Floating Header — No Center Nav Links */}
      <header className={`hero-header ${scrolled ? 'scrolled' : ''}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href="/" className="hero-brand" title="EdgeProc Agency">
            EdgeProc <span className="brand-dot" />
          </Link>
        </motion.div>

        {/* Right Action Icons: CTA Button, Light/Dark Switcher, Hamburger Menu Icon */}
        <div className="header-right-actions">
          <button
            className="btn-pill-dark"
            onClick={onOpenModal}
            style={{ padding: '9px 20px', fontSize: '0.82rem' }}
          >
            Get Audit →
          </button>

          <button className="theme-toggle-btn" onClick={toggleTheme} title="Toggle Light/Dark Mode" aria-label="Toggle Light/Dark Mode">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="hamburger-btn" onClick={() => setDrawerOpen(true)} aria-label="Open Navigation Menu">
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </header>
    </>
  );
}
