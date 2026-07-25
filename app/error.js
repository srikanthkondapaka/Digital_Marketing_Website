'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-canvas)',
      color: 'var(--text-main)',
      textAlign: 'center',
      padding: '24px',
      fontFamily: "'Plus Jakarta Sans', sans-serif"
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '8px' }}>Something went wrong!</h1>
      <p style={{ color: 'var(--text-muted)', maxWidth: '460px', marginBottom: '24px' }}>
        An unexpected error occurred while rendering this page.
      </p>
      <div style={{ display: 'flex', gap: '12px' }}>
        <button onClick={() => reset()} className="btn-pill-dark">
          Try Again ↺
        </button>
        <Link href="/" className="btn-pill-light">
          Go Home →
        </Link>
      </div>
    </div>
  );
}
