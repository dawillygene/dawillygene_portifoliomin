import React from 'react';

const MARQUEE_CSS = `
  .skills-marquee-section {
    position: relative;
    padding: 2.5rem 0;
    background: rgba(10,10,15,.6);
    border-top: 1px solid rgba(255,255,255,.04);
    border-bottom: 1px solid rgba(255,255,255,.04);
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
    background: linear-gradient(to right, #0a0a0f, transparent);
  }
  .skills-marquee-section::after {
    right: 0;
    background: linear-gradient(to left, #0a0a0f, transparent);
  }
  .marquee-track {
    display: flex;
    white-space: nowrap;
    animation: marquee-flow 30s linear infinite;
  }
  @keyframes marquee-flow {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-item {
    display: inline-flex;
    align-items: center;
    gap: .6rem;
    margin-right: 3rem;
    padding: .6rem 1.4rem;
    border-radius: 10px;
    background: rgba(255,255,255,.03);
    border: 1px solid rgba(255,255,255,.05);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    transition: all .3s;
    flex-shrink: 0;
  }
  .marquee-item:hover {
    background: rgba(255,255,255,.06);
    border-color: rgba(56,189,248,.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(56,189,248,.08);
  }
  .marquee-icon {
    font-size: 1.2rem;
    background: linear-gradient(135deg, #38bdf8, #818cf8);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .marquee-name {
    font-size: .85rem;
    font-weight: 500;
    color: rgba(255,255,255,.6);
    letter-spacing: .02em;
  }
`;

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
    <style>{MARQUEE_CSS}</style>
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