'use client';

import React, { useState, useEffect } from 'react';
import { getCollection, COLLECTIONS } from '@/lib/firestore';

const PALETTE = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#6366f1', '#14b8a6', '#f97316'];

const DEFAULT_PROJECTS = [
  {
    icon: 'fas fa-shopping-basket',
    badge: { text: 'Live Product' },
    title: 'Soko Mtaani',
    description: 'Tanzania-focused grocery marketplace with web, Android, and iOS apps for fresh food delivery from local markets. Live on Google Play and App Store.',
    skills: ['React', 'Node.js', 'Android', 'iOS', 'Digital Payments'],
    link: 'https://sokomtaani.co.tz/',
  },
  {
    icon: 'fas fa-bolt',
    badge: { text: 'Live Product' },
    title: 'LeoTap',
    description: 'Multi-service super app combining food ordering, ride-hailing, shopping, and local delivery into one customer experience. Live on Google Play.',
    skills: ['Android', 'iOS', 'Firebase', 'Maps API', 'Realtime Dispatch'],
    link: 'https://play.google.com/store/apps/details?id=com.leotap.customer',
  },
  {
    icon: 'fas fa-capsules',
    badge: { text: 'SaaS Platform' },
    title: 'Gene Pharmacy POS',
    description: 'Multi-tenant pharmacy management and point-of-sale system with secure dashboard access, inventory workflows, and role-based controls.',
    skills: ['Next.js', 'TypeScript', 'Multi-tenant Auth', 'POS Workflows'],
    link: 'https://gene-pharmacy-frontend.vercel.app/login',
  },
  {
    icon: 'fas fa-code',
    badge: { text: 'Open Source' },
    title: 'ClickPesa Laravel',
    description: 'Open-source Laravel package for ClickPesa payments and disbursements — USSD push, card payments, mobile money payouts, and bank transfers.',
    skills: ['Laravel', 'PHP', 'Composer', 'ClickPesa API', 'JWT'],
    link: 'https://github.com/dawillygene/clickpesa-laravel',
  },
  {
    icon: 'fas fa-landmark',
    badge: { text: 'Client Website' },
    title: 'ZANEMA',
    description: 'Official website for the Zanzibar Employers Association — presenting membership services, labour relations support, and legal advisory.',
    skills: ['Responsive Web', 'CMS', 'SEO', 'Institutional UX'],
    link: 'https://www.zanema.org/',
  },
  {
    icon: 'fas fa-truck',
    badge: { text: 'Client Website' },
    title: 'Salum Transports',
    description: 'Corporate website for a logistics company presenting fuel supply, heavy hauling, crane services, and shuttle operations in Zanzibar.',
    skills: ['Marketing Website', 'Service Catalog', 'Lead Generation'],
    link: 'https://www.salumtransports.co.tz/',
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(DEFAULT_PROJECTS);

  useEffect(() => {
    getCollection(COLLECTIONS.PROJECTS)
      .then((data) => {
        const live = data.filter((p) => p.published !== false).sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
        if (live.length > 0) setProjects(live);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="section" id="projects" aria-label="Projects" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            Portfolio
          </div>
          <h2 className="fade-in">Featured Projects</h2>
          <p className="fade-in">
            A curated selection of production-grade applications I&apos;ve designed, built, and shipped.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((p, idx) => {
            const color = PALETTE[idx % PALETTE.length];
            const badgeText = p.badgeText ?? p.badge?.text ?? '';
            return (
              <div className="glass-card fade-in" key={idx} style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {/* Visual header */}
                <div
                  style={{
                    height: 160,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `linear-gradient(135deg, ${color}12, ${color}06)`,
                    borderBottom: '1px solid var(--border-primary)',
                    position: 'relative',
                  }}
                >
                  <i className={p.icon} style={{ fontSize: '2.8rem', color, filter: `drop-shadow(0 4px 16px ${color}50)` }} />
                </div>

                {/* Body */}
                <div style={{ padding: '1.25rem 1.5rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {badgeText && (
                    <span
                      style={{
                        display: 'inline-block',
                        width: 'fit-content',
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '.65rem',
                        fontWeight: 700,
                        letterSpacing: '.06em',
                        textTransform: 'uppercase',
                        background: `${color}14`,
                        color,
                        marginBottom: '.7rem',
                      }}
                    >
                      {badgeText}
                    </span>
                  )}
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '.4rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '.82rem', color: 'var(--text-tertiary)', lineHeight: 1.65, marginBottom: '1rem', flex: 1 }}>
                    {p.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem', marginBottom: '1rem' }}>
                    {(p.skills || []).map((s, i) => (
                      <span key={i} className="tag">{s}</span>
                    ))}
                  </div>
                  <a
                    href={p.link || p.github || '#'}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: '.8rem',
                      fontWeight: 600,
                      color: 'var(--accent-text)',
                      textDecoration: 'none',
                      transition: 'gap var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.gap = '10px')}
                    onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
                  >
                    View Details
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="#" className="btn-secondary fade-in">
            View All Projects
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
