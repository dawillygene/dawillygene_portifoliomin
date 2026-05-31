'use client';

import React from 'react';

interface Step {
  phase: string;
  title: string;
  duration: string;
  icon: string;
  deliverables: string[];
  rationale: string;
}

const PROCESS_STEPS: Step[] = [
  {
    phase: 'Phase 01',
    title: 'Discovery & Requirements Strategy',
    duration: 'Week 1',
    icon: 'fa-regular fa-comments',
    rationale: 'We discuss your operational business goals, key target user flows, and translate vague requests into concrete technical requirements.',
    deliverables: [
      'Interactive Figma high-fidelity scoping mocks',
      'Unified Architecture & Database schema draft',
      'Granular project milestones & budget projections',
    ],
  },
  {
    phase: 'Phase 02',
    title: 'Core System Construction',
    duration: 'Weeks 2–4',
    icon: 'fa-solid fa-code-fork',
    rationale: 'I implement secure backend APIs, multi-role authentication middleware (RBAC), database indexes, and fluid customer-facing web/mobile components.',
    deliverables: [
      'Secure middleware API gateway layer',
      'Relational database system setup with indices',
      'Responsive multi-tenant dashboards',
    ],
  },
  {
    phase: 'Phase 03',
    title: 'Staging & Interactive Sandbox Test',
    duration: 'Week 5',
    icon: 'fa-solid fa-flask-vial',
    rationale: 'We deploy the application on a secure private staging server. You and your stakeholders click, submit data, test roles, and verify live speed.',
    deliverables: [
      'Live dynamic private sandbox preview',
      'Rigorous integration & latency stress runs',
      'UX adjustments based on click workflows',
    ],
  },
  {
    phase: 'Phase 04',
    title: 'Production Handover & Launch',
    duration: 'Week 6',
    icon: 'fa-solid fa-rocket',
    rationale: 'The final, optimized build is launched onto secure cloud platforms (Vercel, AWS, Play Store). All system passwords, keys, and setup docs are securely handed over.',
    deliverables: [
      'Live deployment to Play Store / Vercel',
      'Clean interactive system documentation',
      '14-day direct post-launch performance monitoring',
    ],
  },
];

export default function EngagementProcess() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }} className="ep-grid">
        {PROCESS_STEPS.map((step, idx) => (
          <div key={idx} className="glass-card" style={{
            padding: '1.75rem', position: 'relative', overflow: 'hidden',
            display: 'flex', flexDirection: 'column',
          }}>
            {/* Phase header & duration */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-secondary)', paddingBottom: '.75rem' }}>
              <span style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--accent-text)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                {step.phase}
              </span>
              <span className="tag" style={{ fontSize: '.7rem', fontWeight: 700 }}>
                <i className="fa-regular fa-clock" style={{ marginRight: 4 }} />
                {step.duration}
              </span>
            </div>

            {/* Icon + Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.75rem' }}>
              <span style={{
                width: 36, height: 36, borderRadius: 'var(--radius-sm)',
                background: 'var(--accent-light)', color: 'var(--accent-text)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '.95rem', flexShrink: 0,
              }}>
                <i className={step.icon} />
              </span>
              <h4 style={{ fontWeight: 800, fontSize: '1.05rem', margin: 0 }}>{step.title}</h4>
            </div>

            {/* Business Rationale */}
            <p style={{ fontSize: '.82rem', color: 'var(--text-tertiary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {step.rationale}
            </p>

            {/* Key Deliverables list */}
            <div style={{ marginTop: 'auto', display: 'grid', gap: '.5rem', padding: '.85rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)' }}>
              <div style={{ fontSize: '.68rem', fontWeight: 700, color: 'var(--text-quaternary)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 2 }}>
                Key Deliverables
              </div>
              {step.deliverables.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '.5rem', fontSize: '.78rem', color: 'var(--text-secondary)' }}>
                  <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-text)', fontSize: '.75rem', marginTop: 3, flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .ep-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1100px) {
          .ep-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
