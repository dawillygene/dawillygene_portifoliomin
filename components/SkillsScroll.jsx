'use client';

import React from 'react';

const SKILLS_CSS = `
  .skills-section {
    position: relative;
    padding: 7rem 0;
    background: #0a0a0f;
    overflow: hidden;
  }
  .skills-section::before {
    content: '';
    position: absolute;
    top: -200px; right: -100px;
    width: 500px; height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(56,189,248,.05) 0%, transparent 70%);
    pointer-events: none;
  }
  .skills-section::after {
    content: '';
    position: absolute;
    bottom: -200px; left: -100px;
    width: 500px; height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139,92,246,.04) 0%, transparent 70%);
    pointer-events: none;
  }

  .skills-header {
    text-align: center;
    margin-bottom: 4rem;
    position: relative;
    z-index: 1;
  }
  .skills-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 18px;
    border-radius: 9999px;
    background: rgba(56,189,248,.06);
    border: 1px solid rgba(56,189,248,.12);
    font-size: .72rem;
    font-weight: 600;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: #38bdf8;
    margin-bottom: 1.2rem;
  }
  .skills-title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    letter-spacing: -.03em;
    color: #e2e8f0;
    margin-bottom: .8rem;
  }
  .skills-subtitle {
    font-size: 1rem;
    color: rgba(255,255,255,.35);
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    position: relative;
    z-index: 1;
  }
  @media(max-width:768px) { .skills-grid { grid-template-columns: 1fr; gap: 2rem; } }

  .skills-panel {
    background: rgba(255,255,255,.02);
    border: 1px solid rgba(255,255,255,.05);
    border-radius: 20px;
    padding: 2rem;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: all .4s;
  }
  .skills-panel:hover {
    background: rgba(255,255,255,.04);
    border-color: rgba(255,255,255,.08);
    box-shadow: 0 8px 40px rgba(0,0,0,.3);
  }
  .skills-panel-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #e2e8f0;
    margin-bottom: 1.8rem;
    display: flex;
    align-items: center;
    gap: .6rem;
  }
  .skills-panel-icon {
    width: 32px; height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .85rem;
  }

  .skill-row {
    margin-bottom: 1.4rem;
  }
  .skill-row:last-child { margin-bottom: 0; }
  .skill-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5rem;
  }
  .skill-name {
    font-size: .82rem;
    font-weight: 500;
    color: rgba(255,255,255,.7);
  }
  .skill-pct {
    font-size: .75rem;
    font-weight: 700;
    color: rgba(255,255,255,.4);
    font-variant-numeric: tabular-nums;
  }
  .skill-track {
    height: 6px;
    background: rgba(255,255,255,.06);
    border-radius: 3px;
    overflow: hidden;
    position: relative;
  }
  .skill-fill {
    height: 100%;
    border-radius: 3px;
    position: relative;
    transition: width 1.2s cubic-bezier(.4,0,.2,1);
  }
  .skill-fill::after {
    content: '';
    position: absolute;
    right: 0; top: 0; bottom: 0;
    width: 20px;
    border-radius: 3px;
    filter: blur(6px);
  }
  .skill-fill.tech {
    background: linear-gradient(90deg, #2563eb, #38bdf8);
  }
  .skill-fill.tech::after { background: #38bdf8; }
  .skill-fill.extra {
    background: linear-gradient(90deg, #7c3aed, #a78bfa);
  }
  .skill-fill.extra::after { background: #a78bfa; }
`;

const technicalSkills = [
  { name: 'JavaScript / TypeScript', percent: 95 },
  { name: 'React / Next.js', percent: 90 },
  { name: 'Node.js / Express', percent: 85 },
  { name: 'PHP / Laravel', percent: 80 },
  { name: 'Java / Spring Boot', percent: 85 },
  { name: 'Android Development', percent: 75 },
];

const additionalSkills = [
  { name: 'UI/UX Design', percent: 80 },
  { name: 'Database Architecture', percent: 90 },
  { name: 'IoT & Embedded Systems', percent: 75 },
  { name: 'DevOps / CI-CD', percent: 70 },
  { name: 'Project Management', percent: 85 },
  { name: 'Problem Solving', percent: 95 },
];

const SkillBar = ({ name, percent, type }) => (
  <div className="skill-row fade-in">
    <div className="skill-meta">
      <span className="skill-name">{name}</span>
      <span className="skill-pct">{percent}%</span>
    </div>
    <div className="skill-track">
      <div className={`skill-fill ${type}`} style={{ width: `${percent}%` }} />
    </div>
  </div>
);

const SkillsScroll = () => (
  <>
    <style>{SKILLS_CSS}</style>
    <section className="skills-section" id="skills">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div className="skills-header">
          <div className="skills-badge">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            Expertise
          </div>
          <h2 className="skills-title fade-in">Skills & Proficiency</h2>
          <p className="skills-subtitle fade-in">
            Technologies I've mastered through years of building production-grade systems.
          </p>
        </div>

        {/* Grid */}
        <div className="skills-grid">
          <div className="skills-panel fade-in" style={{ animationDelay: '.1s' }}>
            <div className="skills-panel-title">
              <div className="skills-panel-icon" style={{ background: 'rgba(56,189,248,.1)', color: '#38bdf8' }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
              </div>
              Technical Skills
            </div>
            {technicalSkills.map((s, i) => (
              <SkillBar key={i} name={s.name} percent={s.percent} type="tech" />
            ))}
          </div>

          <div className="skills-panel fade-in" style={{ animationDelay: '.25s' }}>
            <div className="skills-panel-title">
              <div className="skills-panel-icon" style={{ background: 'rgba(139,92,246,.1)', color: '#a78bfa' }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 110 20 10 10 0 010-20zM12 6v6l4 2" /></svg>
              </div>
              Additional Skills
            </div>
            {additionalSkills.map((s, i) => (
              <SkillBar key={i} name={s.name} percent={s.percent} type="extra" />
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default SkillsScroll;