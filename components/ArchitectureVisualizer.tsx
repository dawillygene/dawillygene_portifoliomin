'use client';

import React, { useState } from 'react';

interface TierItem {
  id: string;
  name: string;
  sub: string;
  icon: string;
  desc: string;
  metric: string;
  metricLabel: string;
  codeSnippet: string;
}

const TIER_ITEMS: TierItem[] = [
  {
    id: 'client',
    name: 'Client Applications',
    sub: 'Fluid, cross-platform user touchpoints',
    icon: 'fa-solid fa-mobile-screen',
    desc: 'Fully optimized Next.js portals and native Android apps designed with HSL-driven glassmorphism and lightweight layout streams.',
    metric: '< 1.8s',
    metricLabel: 'FCP Web Speed',
    codeSnippet: 'const App = () => {\n  const { user } = useAuth();\n  return <Dashboard user={user} />;\n};',
  },
  {
    id: 'gateway',
    name: 'Gateway & Authorization',
    sub: 'Secure, zero-trust RBAC middleware',
    icon: 'fa-solid fa-shield-halved',
    desc: 'JWT-backed token validations and custom middleware routes separating Customer, Cashier, Manager, and Site Administrator roles safely.',
    metric: '100% Secure',
    metricLabel: 'RBAC Enforcement',
    codeSnippet: 'function middleware(req) {\n  const token = req.cookies.get("session");\n  return verifyRole(token, "admin");\n}',
  },
  {
    id: 'logic',
    name: 'Application Core Logic',
    sub: 'Performant modular microservices',
    icon: 'fa-solid fa-gears',
    desc: 'Structured business controllers utilizing Laravel, Spring Boot, or Node.js. Enforces absolute transaction consistency and secure DB models.',
    metric: '85ms avg',
    metricLabel: 'API Response Time',
    codeSnippet: 'public function store(Request $req) {\n  DB::transaction(function() {\n    // Order + ledger entries\n  });\n}',
  },
  {
    id: 'database',
    name: 'Database & Sync Tier',
    sub: 'ACID transactions & message queues',
    icon: 'fa-solid fa-database',
    desc: 'Ledger stores separating write/read loads (PostgreSQL, Firestore) and instant asynchronous sync using low-overhead telemetry brokers.',
    metric: '99.99%',
    metricLabel: 'Transaction Integrity',
    codeSnippet: 'CREATE TABLE ledger_entries (\n  id SERIAL PRIMARY KEY,\n  balance NUMERIC(12,2)\n);',
  },
];

export default function ArchitectureVisualizer() {
  const [selectedTier, setSelectedTier] = useState<string>('gateway');
  const activeItem = TIER_ITEMS.find((t) => t.id === selectedTier) || TIER_ITEMS[0];

  return (
    <div className="glass-card" style={{ padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ fontSize: '.75rem', fontWeight: 600, color: 'var(--accent-text)', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: '.5rem' }}>
        Interactive Enterprise Architecture
      </div>
      <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem' }}>
        System Lifecycle & Flow Topology
      </h3>
      <p style={{ fontSize: '.88rem', color: 'var(--text-tertiary)', marginBottom: '2rem', maxWidth: 680 }}>
        Hover or click on any system tier below to inspect how security, application processing, and transaction layers are wired together for enterprise reliability.
      </p>

      {/* System Flow Diagram */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem', position: 'relative' }} className="arch-flow">
        {TIER_ITEMS.map((tier, idx) => {
          const active = tier.id === selectedTier;
          return (
            <div key={tier.id} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <button
                onClick={() => setSelectedTier(tier.id)}
                style={{
                  width: '100%', padding: '1.25rem', borderRadius: 'var(--radius-lg)',
                  border: '1px solid',
                  borderColor: active ? 'var(--border-focus)' : 'var(--border-primary)',
                  background: active ? 'var(--accent-light)' : 'var(--bg-glass)',
                  color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textAlign: 'center', cursor: 'pointer',
                  position: 'relative', transition: 'all var(--transition-base)',
                  outline: 'none', zIndex: 5,
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.borderColor = 'var(--border-hover)';
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.borderColor = 'var(--border-primary)';
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: active ? 'var(--accent)' : 'var(--bg-tertiary)',
                  color: active ? 'white' : 'var(--text-tertiary)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', marginBottom: '.75rem',
                  transition: 'all var(--transition-base)',
                  boxShadow: active ? '0 0 15px var(--accent-light)' : 'none',
                }}>
                  <i className={tier.icon} />
                </div>
                <div style={{ fontWeight: 700, fontSize: '.88rem' }}>{tier.name}</div>
                <div style={{ fontSize: '.7rem', color: 'var(--text-quaternary)', marginTop: 2 }}>{tier.sub.split(' ').slice(0, 2).join(' ')}...</div>
              </button>

              {/* Connecting Arrow (except last item) */}
              {idx < TIER_ITEMS.length - 1 && (
                <div style={{
                  position: 'absolute', right: '-12px', top: '50%', transform: 'translateY(-50%)',
                  color: 'var(--border-primary)', fontSize: '.85rem', zIndex: 10,
                  display: 'none',
                }} className="arch-connector">
                  <i className="fa-solid fa-arrow-right-long" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Rationale Panel */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem',
        padding: '1.5rem', borderRadius: 'var(--radius-xl)',
        background: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)',
      }} className="arch-details">
        {/* Specifications */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span className="tag">{activeItem.name} Details</span>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-text)' }}>{activeItem.metric}</div>
              <div style={{ fontSize: '.6rem', fontWeight: 600, color: 'var(--text-quaternary)', textTransform: 'uppercase', letterSpacing: '.05em' }}>{activeItem.metricLabel}</div>
            </div>
          </div>
          <p style={{ fontSize: '.85rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
            {activeItem.desc}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.78rem', color: 'var(--text-tertiary)' }}>
            <i className="fa-solid fa-circle-check" style={{ color: '#10b981' }} />
            <span>Fully integrated in <strong>Soko Mtaani</strong> & <strong>Gene Pharmacy POS</strong> deployments.</span>
          </div>
        </div>

        {/* Code / Architecture Snippet */}
        <div style={{
          background: 'var(--bg-code)', borderRadius: 'var(--radius-md)',
          padding: '1rem 1.25rem', fontFamily: 'var(--font-mono)', fontSize: '.75rem',
          color: 'var(--text-primary)', border: '1px solid var(--border-primary)',
          overflowX: 'auto', display: 'flex', flexDirection: 'column',
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            borderBottom: '1px solid var(--border-primary)', paddingBottom: '.5rem', marginBottom: '.75rem',
            color: 'var(--text-quaternary)', fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.05em',
          }}>
            <span>Snippet / Strategy Interface</span>
            <span>TypeScript / PHP / SQL</span>
          </div>
          <pre style={{ margin: 0, lineHeight: 1.5 }}>
            <code>{activeItem.codeSnippet}</code>
          </pre>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .arch-connector { display: block !important; }
          .arch-details { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
