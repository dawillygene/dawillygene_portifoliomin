'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ThemeProvider';
import { companyProfile, primaryNavigation } from '@/lib/siteContent';

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        id="navbar"
        style={{
          position: 'fixed',
          inset: '0 0 auto 0',
          zIndex: 300,
          borderBottom: scrolled ? '1px solid var(--border-primary)' : '1px solid transparent',
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          transition: 'all var(--transition-base)',
        }}
      >
        <div className="container navbar-shell">
          <Link href="/" aria-label={`${companyProfile.brandName} home`} className="brand-lockup" onClick={() => setOpen(false)}>
            <span className="brand-wordmark">{companyProfile.brandName}</span>
            <span className="brand-subtitle">{companyProfile.studioName}</span>
          </Link>

          <div className="desktop-nav">
            {primaryNavigation.map((item) => {
              const active = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
              return (
                <Link key={item.href} href={item.href} className={`nav-link ${active ? 'active' : ''}`}>
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="desktop-actions">
            <ThemeToggle />
            <Link href="/contact" className="btn-primary nav-cta">
              Book a Conversation
            </Link>
          </div>

          <div className="mobile-actions">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="menu-toggle"
              onClick={() => setOpen((current) => !current)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-overlay ${open ? 'visible' : ''}`} onClick={() => setOpen(false)} />

      <aside className={`mobile-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <div className="brand-wordmark" style={{ fontSize: '1.05rem' }}>
              {companyProfile.brandName}
            </div>
            <div className="brand-subtitle">{companyProfile.studioName}</div>
          </div>
          <button type="button" aria-label="Close menu" className="menu-toggle" onClick={() => setOpen(false)}>
            <span />
            <span />
            <span />
          </button>
        </div>

        <div style={{ display: 'grid', gap: '0.4rem' }}>
          {primaryNavigation.map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav-link ${active ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="glass-card" style={{ padding: '1rem', marginTop: '1.25rem' }}>
          <strong style={{ display: 'block', marginBottom: '0.4rem' }}>{companyProfile.availability}</strong>
          <p style={{ fontSize: '0.9rem', marginBottom: '0.85rem' }}>
            Product delivery, consulting, and engineering conversations are all welcome.
          </p>
          <Link href="/contact" className="btn-primary" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
