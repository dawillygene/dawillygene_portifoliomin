'use client';

import React, { useState, useEffect } from 'react';
import { getCollection, COLLECTIONS } from '@/lib/firestore';

const DEFAULT_TESTIMONIALS = [
  {
    stars: 5,
    text: "Dawilly consistently demonstrated outstanding technical skills and dedication in software engineering during his studies. His problem-solving ability is impressive and he quickly adapts to new challenges.",
    initials: 'RH',
    name: 'Rorland Horombo',
    title: 'Lecturer, Arusha Technical College',
  },
  {
    stars: 5,
    text: "Dawilly's interdisciplinary knowledge and innovative mindset have been key in advancing biomedical projects at Proud Biomedics. His software solutions have streamlined several complex processes.",
    initials: 'MM',
    name: 'Masoud Mbelwa',
    title: 'Biomedical Engineer, CEO @ Proud Biomedics',
  },
  {
    stars: 4.5,
    text: "I have seen Dawilly's growth firsthand. His commitment to quality and client satisfaction makes him a reliable software engineer for any project, especially in consultancy and employment services.",
    initials: 'MC',
    name: 'Mohamed',
    title: 'CEO, Alpha Employment Agency and Consultancy Limited',
  },
  {
    stars: 5,
    text: "Dawilly is a highly skilled developer whose tech expertise supports operational efficiency at Salum Transport and Salum Construction. His solutions are practical and impactful.",
    initials: 'FM',
    name: 'Fatma Masimba',
    title: 'CEO, Salum Transport Limited & Salum Construction',
  },
];

const StarIcon = ({ filled }) => (
  <svg width="15" height="15" viewBox="0 0 20 20" fill={filled ? '#f59e0b' : 'none'} stroke="#f59e0b" strokeWidth="1.5">
    <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.26 5.06 16.7l.94-5.49-4-3.9 5.53-.8L10 1.5z" />
  </svg>
);

const renderStars = (count) => {
  const full = Math.floor(count);
  const half = count % 1 !== 0;
  const stars = [];
  for (let i = 0; i < full; i++) stars.push(<StarIcon key={i} filled />);
  if (half) stars.push(<StarIcon key="half" filled />);
  return <div style={{ display: 'flex', gap: 2, marginBottom: '1rem' }}>{stars}</div>;
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(DEFAULT_TESTIMONIALS);

  useEffect(() => {
    getCollection(COLLECTIONS.TESTIMONIALS)
      .then((data) => {
        const live = data.filter((t) => t.published !== false).sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
        if (live.length > 0) setTestimonials(live);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="section" aria-label="Testimonials" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Testimonials
          </div>
          <h2 className="fade-in">What People Say</h2>
          <p className="fade-in">Trusted by educators, CEOs, and engineers who've seen my work firsthand.</p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {testimonials.map((t, idx) => (
            <div className="glass-card fade-in" key={idx} style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden' }}>
              {/* Quote watermark */}
              <div
                style={{
                  position: 'absolute',
                  top: 12,
                  right: 18,
                  fontSize: '3rem',
                  fontWeight: 900,
                  lineHeight: 1,
                  color: 'var(--accent)',
                  opacity: 0.08,
                  pointerEvents: 'none',
                  fontFamily: 'Georgia, serif',
                }}
              >
                "
              </div>

              {renderStars(t.stars)}

              <p style={{ fontSize: '.88rem', color: 'var(--text-tertiary)', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                "{t.text || t.content}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '.8rem',
                    fontWeight: 800,
                    color: '#fff',
                    background: 'var(--accent-gradient)',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '.88rem', fontWeight: 700 }}>{t.name || t.author}</div>
                  <div style={{ fontSize: '.72rem', color: 'var(--text-quaternary)' }}>{t.title || t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;