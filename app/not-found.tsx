import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Dawilly Gene',
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-primary)',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 480 }}>
        <div
          style={{
            fontSize: 'clamp(5rem, 12vw, 8rem)',
            fontWeight: 900,
            letterSpacing: '-.06em',
            lineHeight: 1,
            background: 'var(--accent-gradient)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '1rem',
          }}
        >
          404
        </div>

        <h1
          style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '.75rem',
          }}
        >
          Page not found
        </h1>

        <p
          style={{
            fontSize: '.92rem',
            color: 'var(--text-tertiary)',
            lineHeight: 1.6,
            marginBottom: '2rem',
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <Link
          href="/"
          className="btn-primary"
          style={{ textDecoration: 'none' }}
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
