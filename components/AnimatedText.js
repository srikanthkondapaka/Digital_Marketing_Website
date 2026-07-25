'use client';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedText({
  text,
  tag: Tag = 'h2',
  className = '',
  delay = 0,
  mode = 'words', // 'words' | 'lines'
  staggerMs = 70,
  style = {}
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const parts = mode === 'words' ? text.split(' ') : text.split('\n');

  return (
    <Tag ref={ref} className={className} style={{ ...style, overflow: 'hidden' }}>
      {parts.map((part, i) => (
        <span
          key={i}
          className="animated-word-wrapper"
          style={{ display: 'inline-block', overflow: 'hidden', marginRight: mode === 'words' ? '0.28em' : '0' }}
        >
          <span
            className="animated-word"
            style={{
              display: 'inline-block',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0px)' : 'translateY(16px)',
              transition: `opacity 1.0s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * staggerMs}ms, transform 1.0s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * staggerMs}ms`,
              willChange: 'opacity, transform',
            }}
          >
            {part}
            {mode === 'lines' && i < parts.length - 1 ? <br /> : null}
          </span>
        </span>
      ))}
    </Tag>
  );
}
