'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ThemeProvider';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav
        id="navbar"
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 200,
          padding: scrolled ? '0.6rem 0' : '1rem 0',
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
          borderBottom: scrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
          boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link
            href="/"
            aria-label="Dawilly Gene — Home"
            style={{
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
            }}
          >
            <span
              style={{
                fontSize: '1.2rem',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                lineHeight: 1.2,
              }}
            >
              DawillyGene
              <span
                style={{
                  display: 'inline-block',
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  marginLeft: 2,
                  boxShadow: '0 0 10px var(--accent)',
                  verticalAlign: 'super',
                  fontSize: 0,
                }}
              />
            </span>
            <span
              style={{
                fontSize: '0.55rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-quaternary)',
                lineHeight: 1,
              }}
            >
              Genelabs Software Tz
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }} className="nav-desktop-links">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  position: 'relative',
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  color: pathname === l.href ? 'var(--text-primary)' : 'var(--text-tertiary)',
                  textDecoration: 'none',
                  borderRadius: 'var(--radius-sm)',
                  background: pathname === l.href ? 'var(--accent-light)' : 'transparent',
                  transition: 'all 0.25s',
                }}
              >
                {l.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/contact"
              style={{
                padding: '0.48rem 1.2rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'white',
                background: 'var(--accent-gradient)',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                marginLeft: '0.4rem',
                transition: 'all 0.25s',
              }}
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile menu + theme toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="nav-mobile-controls">
            <ThemeToggle />
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-primary)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.5rem',
                color: 'var(--text-tertiary)',
                cursor: 'pointer',
                transition: 'all 0.25s',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          zIndex: 300,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.3s',
        }}
      />

      {/* Mobile Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: 300,
          height: '100vh',
          background: 'var(--bg-glass-heavy)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          borderLeft: '1px solid var(--border-primary)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 301,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          style={{
            alignSelf: 'flex-end',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-primary)',
            borderRadius: 'var(--radius-sm)',
            padding: '0.4rem 0.6rem',
            color: 'var(--text-tertiary)',
            cursor: 'pointer',
            marginBottom: '2rem',
            transition: 'all 0.25s',
          }}
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{
              display: 'block',
              padding: '0.75rem 0',
              fontSize: '1rem',
              fontWeight: 500,
              color: pathname === l.href ? 'var(--accent-text)' : 'var(--text-tertiary)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--border-secondary)',
              transition: 'all 0.25s',
            }}
          >
            {l.label}
          </Link>
        ))}

        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="btn-primary"
          style={{
            marginTop: '1.5rem',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          Let&apos;s Talk
        </Link>
      </div>

      {/* Responsive styles */}
      <style>{`
        .nav-mobile-controls { display: flex; }
        .nav-desktop-links { display: none !important; }
        @media (min-width: 769px) {
          .nav-mobile-controls { display: none !important; }
          .nav-desktop-links { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;


