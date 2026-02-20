'use client';

import React, { useState, useEffect } from 'react';
import { getCollection, COLLECTIONS } from '@/lib/firestore';

const ICON_COLORS = [
  { bg: 'var(--accent-light)', color: 'var(--accent-text)' },
  { bg: 'rgba(16, 185, 129, 0.08)', color: '#10b981' },
  { bg: 'rgba(245, 158, 11, 0.08)', color: '#f59e0b' },
  { bg: 'rgba(139, 92, 246, 0.08)', color: '#8b5cf6' },
  { bg: 'rgba(239, 68, 68, 0.08)', color: '#ef4444' },
  { bg: 'rgba(99, 102, 241, 0.08)', color: '#6366f1' },
  { bg: 'rgba(20, 184, 166, 0.08)', color: '#14b8a6' },
];

const DEFAULT_SERVICES = [
  {
    number: '01', icon: 'fas fa-laptop-code',
    title: 'Web Development',
    desc: 'Responsive, performant web applications built with modern frameworks. Optimized for speed, accessibility, and user experience.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
  },
  {
    number: '02', icon: 'fas fa-mobile-alt',
    title: 'Mobile Development',
    desc: 'Native and cross-platform mobile applications with seamless UX and high-performance architecture.',
    tags: ['Android', 'Java', 'React Native', 'Kotlin'],
  },
  {
    number: '03', icon: 'fas fa-server',
    title: 'Backend Engineering',
    desc: 'Scalable server-side architectures with secure APIs, microservices, and optimized database systems.',
    tags: ['Node.js', 'Spring Boot', 'Laravel', 'GraphQL'],
  },
  {
    number: '04', icon: 'fas fa-paint-brush',
    title: 'UI/UX Design',
    desc: 'User-centered interfaces that elevate the experience through thoughtful design patterns and interaction.',
    tags: ['Figma', 'Adobe XD', 'Prototyping', 'User Testing'],
  },
  {
    number: '05', icon: 'fas fa-microchip',
    title: 'IoT & Embedded Systems',
    desc: 'Connected solutions with hardware integration, sensor networks, and real-time data processing.',
    tags: ['Arduino', 'Raspberry Pi', 'ESP32', 'MQTT'],
  },
  {
    number: '06', icon: 'fas fa-code-branch',
    title: 'DevOps & Cloud',
    desc: 'CI/CD pipelines, containerization, and cloud-native infrastructure for seamless delivery.',
    tags: ['Docker', 'AWS', 'Git', 'CI/CD'],
  },
];

const Services = () => {
  const [services, setServices] = useState(DEFAULT_SERVICES);

  useEffect(() => {
    getCollection(COLLECTIONS.SERVICES)
      .then((data) => {
        const live = data.filter((s) => s.published !== false).sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
        if (live.length > 0) setServices(live);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="section" id="services" aria-label="Services" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            What I Do
          </div>
          <h2 className="fade-in">Services & Expertise</h2>
          <p className="fade-in">
            End-to-end solutions from concept to deployment — every layer of the stack, handled with precision.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {services.map((svc, idx) => {
            const palette = ICON_COLORS[idx % ICON_COLORS.length];
            return (
              <div
                key={idx}
                className="glass-card fade-in"
                style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}
              >
                {/* Number watermark */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '1.25rem',
                    fontSize: '4rem',
                    fontWeight: 900,
                    lineHeight: 1,
                    color: 'var(--border-secondary)',
                    pointerEvents: 'none',
                    opacity: 0.5,
                  }}
                >
                  {svc.number || String(idx + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: palette.bg,
                    color: palette.color,
                    marginBottom: '1.25rem',
                    fontSize: '1.2rem',
                    transition: 'transform var(--transition-base)',
                  }}
                >
                  <i className={svc.icon} />
                </div>

                <h3 style={{ marginBottom: '0.6rem' }}>{svc.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', lineHeight: 1.65, marginBottom: '1rem' }}>
                  {svc.desc || svc.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {(svc.tags || svc.features || []).map((t, i) => {
                    const name = typeof t === 'string' ? t : t.name;
                    return (
                      <span key={i} className="tag">{name}</span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;