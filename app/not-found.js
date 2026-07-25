'use client';
import Link from 'next/link';

export default function NotFound() {
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
      <h1 style={{ fontSize: '5rem', fontWeight: 900, marginBottom: '8px' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-muted)', maxWidth: '460px', marginBottom: '24px' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="btn-pill-dark">
        Return to Homepage →
      </Link>
    </div>
  );
}
