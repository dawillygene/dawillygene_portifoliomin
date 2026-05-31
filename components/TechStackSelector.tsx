'use client';

import React, { useState } from 'react';

interface TechNode {
  category: string;
  tech: string;
  icon: string;
  reason: string;
}

interface Solution {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  metrics: string;
  metricLabel: string;
  stack: TechNode[];
  bestPractice: string;
}

const SOLUTIONS: Solution[] = [
  {
    id: 'mobile',
    title: 'High-Performance Mobile App',
    subtitle: 'For real-time marketplaces & services',
    icon: 'fa-solid fa-mobile-screen-button',
    description: 'Best suited for platforms requiring offline support, geo-tracking, push notifications, and ultra-fast customer response.',
    metrics: '< 2.5s',
    metricLabel: 'App Load Speed',
    bestPractice: 'Decoupled API gateway architecture to ensure high mobile performance and secure token management.',
    stack: [
      { category: 'Frontend Mobile', tech: 'Android Kotlin / React Native', icon: 'fa-brands fa-android', reason: 'High hardware performance and fluid native gestures.' },
      { category: 'Realtime Backend', tech: 'Node.js & Firebase Realtime', icon: 'fa-brands fa-node-js', reason: 'Provides instant order dispatching & geo-location updates.' },
      { category: 'Database & Sync', tech: 'Cloud Firestore', icon: 'fa-solid fa-database', reason: 'Offline caching and serverless data model synchronization.' },
      { category: 'Auth & Security', tech: 'Firebase Auth & JWT', icon: 'fa-solid fa-shield-halved', reason: 'Role-based access control directly from mobile clients.' },
    ],
  },
  {
    id: 'saas',
    title: 'Multi-Tenant SaaS / POS Platform',
    subtitle: 'For secure business operating software',
    icon: 'fa-solid fa-layer-group',
    description: 'Designed for inventory systems, accounting tools, and POS portals requiring robust role permissions and tenant separation.',
    metrics: '99.99%',
    metricLabel: 'Auth Integrity',
    bestPractice: 'Middleware-enforced tenant routing to strictly prevent cross-tenant data leaks.',
    stack: [
      { category: 'Web App Portal', tech: 'Next.js & TypeScript', icon: 'fa-brands fa-react', reason: 'Fast, secure dashboard pages with strict static typing.' },
      { category: 'REST API Engine', tech: 'Laravel (PHP 8.2+) / Spring Boot', icon: 'fa-brands fa-laravel', reason: 'Mature ORM, secure transactions, and modular backend.' },
      { category: 'Relational Store', tech: 'PostgreSQL / MySQL', icon: 'fa-solid fa-server', reason: 'Ensures strict ACID transactions for ledger entries.' },
      { category: 'Permissions', tech: 'RBAC Access Middleware', icon: 'fa-solid fa-user-lock', reason: 'Granular control separating Cashier, Manager, and Admin.' },
    ],
  },
  {
    id: 'iot',
    title: 'Connected IoT & Telematics',
    subtitle: 'For smart hardware & tracking systems',
    icon: 'fa-solid fa-microchip',
    description: 'Optimized for vehicle tracking, remote weather monitors, and hardware integrations sending constant data streams.',
    metrics: '100ms',
    metricLabel: 'Message Latency',
    bestPractice: 'Efficient JSON serialization over low-overhead messaging channels to save system power.',
    stack: [
      { category: 'Embedded Unit', tech: 'ESP32 / Arduino (C++)', icon: 'fa-solid fa-gears', reason: 'Direct interface with sensors and deep-sleep low power modes.' },
      { category: 'Telemetry Protocol', tech: 'MQTT over WebSockets', icon: 'fa-solid fa-network-wired', reason: 'Ultra-lightweight messaging designed for packet loss resistance.' },
      { category: 'Ingestion Server', tech: 'Node.js Express / Python', icon: 'fa-solid fa-terminal', reason: 'Fast non-blocking socket loops parsing sensor data streams.' },
      { category: 'Cloud Dashboard', tech: 'React / WebSockets', icon: 'fa-solid fa-chart-line', reason: 'Plots live physical telemetry without page reload.' },
    ],
  },
  {
    id: 'corporate',
    title: 'Enterprise Web Showcase',
    subtitle: 'For institutional credibility & conversions',
    icon: 'fa-solid fa-building',
    description: 'Designed for membership portals (like ZANEMA) and transport directories (like Salum Transports) requiring elite design.',
    metrics: '100/100',
    metricLabel: 'Lighthouse SEO Score',
    bestPractice: 'Perfect semantic layout structures to maximize search engine authority.',
    stack: [
      { category: 'SEO Frontend', tech: 'Next.js (SSG/ISR Mode)', icon: 'fa-solid fa-desktop', reason: 'Delivers pre-rendered HTML in milliseconds directly to crawlers.' },
      { category: 'Styling & Tokens', tech: 'Tailwind CSS / HSL Styling', icon: 'fa-brands fa-css3-alt', reason: 'Vibrant, responsive layouts built to feel like premium apps.' },
      { category: 'CMS / Config', tech: 'Dynamic siteContent Engine', icon: 'fa-solid fa-sliders', reason: 'Allows marketing updates without code rewrites.' },
      { category: 'Global Delivery', tech: 'Vercel / Cloudflare Edge', icon: 'fa-solid fa-globe', reason: 'Ultra-fast global content delivery with zero cold starts.' },
    ],
  },
];

export default function TechStackSelector() {
  const [activeTab, setActiveTab] = useState<string>('mobile');
  const solution = SOLUTIONS.find((s) => s.id === activeTab) || SOLUTIONS[0];

  return (
    <div className="glass-card" style={{ padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background gradients */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-10%', width: 250, height: 250,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(83,176,191,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="ts-layout">
        {/* Navigation Tabs */}
        <div>
          <div style={{ fontSize: '.75rem', fontWeight: 600, color: 'var(--accent-text)', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: '.5rem' }}>
            System Blueprint Tool
          </div>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem' }}>
            Select Your Business Objective
          </h3>
          <div style={{ display: 'grid', gap: '.65rem' }}>
            {SOLUTIONS.map((s) => {
              const active = s.id === activeTab;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    padding: '1rem 1.25rem', borderRadius: 'var(--radius-lg)',
                    border: '1px solid',
                    borderColor: active ? 'var(--border-focus)' : 'var(--border-primary)',
                    background: active ? 'var(--accent-light)' : 'var(--bg-glass)',
                    color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                    textAlign: 'left', cursor: 'pointer',
                    transition: 'all var(--transition-base)',
                    outline: 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.borderColor = 'var(--border-hover)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.borderColor = 'var(--border-primary)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }
                  }}
                >
                  <span style={{
                    width: 38, height: 38, borderRadius: 'var(--radius-md)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: active ? 'var(--accent)' : 'var(--bg-tertiary)',
                    color: active ? 'white' : 'var(--text-secondary)',
                    fontSize: '1rem', flexShrink: 0,
                    transition: 'all var(--transition-base)',
                  }}>
                    <i className={s.icon} />
                  </span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '.9rem' }}>{s.title}</div>
                    <div style={{ fontSize: '.75rem', color: 'var(--text-tertiary)' }}>{s.subtitle}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Blueprint Specifications */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          padding: '1.5rem', borderRadius: 'var(--radius-xl)',
          background: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)',
        }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <div>
              <span className="tag" style={{ marginBottom: '.4rem', display: 'inline-block' }}>Interactive Stack Rationale</span>
              <p style={{ fontSize: '.85rem', color: 'var(--text-tertiary)' }}>{solution.description}</p>
            </div>
            {/* Metric highlight */}
            <div className="glass-card" style={{ padding: '.5rem 1rem', textAlign: 'right', display: 'grid', background: 'var(--bg-glass)' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-text)' }}>{solution.metrics}</span>
              <span style={{ fontSize: '.65rem', textTransform: 'uppercase', fontWeight: 600, color: 'var(--text-quaternary)', letterSpacing: '.05em' }}>{solution.metricLabel}</span>
            </div>
          </div>

          {/* Node display */}
          <div style={{ display: 'grid', gap: '.85rem', flexGrow: 1 }}>
            {solution.stack.map((node, i) => (
              <div key={i} className="glass-card" style={{
                padding: '1rem', display: 'flex', alignItems: 'flex-start', gap: '.85rem',
                background: 'var(--bg-glass)', transition: 'transform var(--transition-fast)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span style={{
                  width: 32, height: 32, borderRadius: 'var(--radius-sm)',
                  background: 'var(--accent-light)', color: 'var(--accent-text)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '.85rem', flexShrink: 0, marginTop: 2,
                }}>
                  <i className={node.icon} />
                </span>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '.68rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--text-quaternary)', letterSpacing: '.05em' }}>
                      {node.category}
                    </span>
                    <strong style={{ fontSize: '.85rem', color: 'var(--accent-text)' }}>{node.tech}</strong>
                  </div>
                  <p style={{ fontSize: '.78rem', color: 'var(--text-tertiary)', marginTop: 2, lineHeight: 1.5 }}>
                    {node.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Best Practice alert banner */}
          <div style={{
            marginTop: '1.25rem', padding: '.75rem 1rem', borderRadius: 'var(--radius-md)',
            background: 'var(--accent-light)', border: '1px solid rgba(83, 176, 191, 0.15)',
            fontSize: '.78rem', display: 'flex', alignItems: 'center', gap: '.65rem',
          }}>
            <i className="fa-solid fa-circle-info" style={{ color: 'var(--accent-text)', fontSize: '.9rem' }} />
            <span style={{ color: 'var(--text-secondary)' }}>
              <strong>Best Practice:</strong> {solution.bestPractice}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .ts-layout { grid-template-columns: 1fr 1.15fr !important; }
        }
      `}</style>
    </div>
  );
}
