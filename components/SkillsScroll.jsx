'use client';

import React from 'react';

const technicalSkills = [
  { name: 'JavaScript / TypeScript', level: 'Expert' },
  { name: 'React / Next.js', level: 'Expert' },
  { name: 'Node.js / Express', level: 'Advanced' },
  { name: 'PHP / Laravel', level: 'Advanced' },
  { name: 'Java / Spring Boot', level: 'Advanced' },
  { name: 'Android Development', level: 'Intermediate' },
];

const additionalSkills = [
  { name: 'UI/UX Design', level: 'Advanced' },
  { name: 'Database Architecture', level: 'Expert' },
  { name: 'IoT & Embedded Systems', level: 'Intermediate' },
  { name: 'DevOps / CI-CD', level: 'Intermediate' },
  { name: 'Project Management', level: 'Advanced' },
  { name: 'Problem Solving', level: 'Expert' },
];

const SkillBar = ({ name, level, gradient }) => {
  const levelConfig = {
    Expert: { dots: 5, color: 'var(--accent-text)', bg: 'var(--accent-light)' },
    Advanced: { dots: 4, color: 'var(--accent-text)', bg: 'var(--accent-light)' },
    Intermediate: { dots: 3, color: 'var(--text-tertiary)', bg: 'var(--bg-tertiary)' },
  };
  const config = levelConfig[level];

  return (
    <div className="fade-in" style={{ marginBottom: '1.4rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.45rem' }}>
        <span style={{ fontSize: '.82rem', fontWeight: 500, color: 'var(--text-secondary)' }}>{name}</span>
        <div style={{ display: 'flex', gap: 3 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: i < config.dots ? gradient : 'var(--border-primary)',
                transition: 'all var(--transition-base)',
              }}
            />
          ))}
        </div>
      </div>
      <div style={{ fontSize: '.7rem', fontWeight: 600, color: 'var(--text-quaternary)', letterSpacing: '.05em', textAlign: 'right' }}>
        {level}
      </div>
    </div>
  );
};

const SkillsScroll = () => (
  <section className="section" id="skills" aria-label="Skills" style={{ background: 'var(--bg-primary)' }}>
    <div className="container">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          Expertise
        </div>
        <h2 className="fade-in">Skills & Proficiency</h2>
        <p className="fade-in">Technologies I&apos;ve mastered through years of building production-grade systems.</p>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="skills-panels">
        <div className="glass-card fade-in" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--accent-light)',
                color: 'var(--accent-text)',
                fontSize: '.85rem',
              }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
              </svg>
            </div>
            Technical Skills
          </div>
          {technicalSkills.map((s, i) => (
            <SkillBar key={i} name={s.name} level={s.level} gradient="linear-gradient(90deg, var(--accent), #38bdf8)" />
          ))}
        </div>

        <div className="glass-card fade-in" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(139,92,246,.1)',
                color: '#a78bfa',
                fontSize: '.85rem',
              }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 110 20 10 10 0 010-20zM12 6v6l4 2" />
              </svg>
            </div>
            Additional Skills
          </div>
          {additionalSkills.map((s, i) => (
            <SkillBar key={i} name={s.name} level={s.level} gradient="linear-gradient(90deg, #7c3aed, #a78bfa)" />
          ))}
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        .skills-panels { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default SkillsScroll;
