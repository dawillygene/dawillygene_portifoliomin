'use client';

import React from 'react';

const skillList = [
  { icon: 'fab fa-react', name: 'React' },
  { icon: 'fab fa-node', name: 'Node.js' },
  { icon: 'fab fa-js', name: 'JavaScript' },
  { icon: 'fab fa-java', name: 'Java' },
  { icon: 'fab fa-php', name: 'PHP' },
  { icon: 'fab fa-laravel', name: 'Laravel' },
  { icon: 'fab fa-android', name: 'Android' },
  { icon: 'fab fa-html5', name: 'HTML5' },
  { icon: 'fab fa-css3-alt', name: 'CSS3' },
  { icon: 'fab fa-react', name: 'Next.js' },
  { icon: 'fas fa-database', name: 'SQL' },
  { icon: 'fas fa-server', name: 'Spring' },
  { icon: 'fas fa-microchip', name: 'IoT' },
  { icon: 'fas fa-cog', name: 'Embedded Systems' },
  { icon: 'fab fa-python', name: 'Python' },
  { icon: 'fab fa-docker', name: 'Docker' },
  { icon: 'fab fa-git-alt', name: 'Git' },
  { icon: 'fab fa-aws', name: 'AWS' },
];

const Skills = () => (
  <>
    <style>{`
      .skills-marquee-section {
        position: relative;
        padding: 2.5rem 0;
        background: var(--bg-secondary);
        border-top: 1px solid var(--border-primary);
        border-bottom: 1px solid var(--border-primary);
        overflow: hidden;
      }
      .skills-marquee-section::before,
      .skills-marquee-section::after {
        content: '';
        position: absolute;
        top: 0; bottom: 0;
        width: 120px;
        z-index: 2;
        pointer-events: none;
      }
      .skills-marquee-section::before {
        left: 0;
        background: linear-gradient(to right, var(--bg-secondary), transparent);
      }
      .skills-marquee-section::after {
        right: 0;
        background: linear-gradient(to left, var(--bg-secondary), transparent);
      }
      .marquee-track {
        display: flex;
        white-space: nowrap;
        animation: marquee 30s linear infinite;
      }
      .marquee-item {
        display: inline-flex;
        align-items: center;
        gap: .6rem;
        margin-right: 2.5rem;
        padding: .6rem 1.2rem;
        border-radius: var(--radius-md);
        background: var(--bg-glass);
        border: 1px solid var(--border-primary);
        transition: all var(--transition-fast);
        flex-shrink: 0;
      }
      .marquee-item:hover {
        border-color: var(--border-focus);
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
      }
      .marquee-icon {
        font-size: 1.15rem;
        color: var(--accent-text);
      }
      .marquee-name {
        font-size: .82rem;
        font-weight: 500;
        color: var(--text-secondary);
        letter-spacing: .02em;
      }
    `}</style>
    <div className="skills-marquee-section">
      <div style={{ display: 'flex', overflow: 'hidden' }}>
        <div className="marquee-track">
          {[...skillList, ...skillList].map((skill, idx) => (
            <div className="marquee-item" key={idx}>
              <i className={`${skill.icon} marquee-icon`} />
              <span className="marquee-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Skills;