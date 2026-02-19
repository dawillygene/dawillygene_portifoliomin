'use client';

import React from 'react';

const EXP_CSS = `
  .exp-section {
    position: relative; padding: 7rem 0; background: #0a0a0f; overflow: hidden;
  }
  .exp-section::before {
    content: ''; position: absolute; top: 0; left: -200px;
    width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, rgba(56,189,248,.04) 0%, transparent 70%);
    pointer-events: none;
  }
  .exp-header { text-align: center; margin-bottom: 4rem; position: relative; z-index: 1; }
  .exp-badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 6px 18px; border-radius: 9999px;
    background: rgba(52,211,153,.06); border: 1px solid rgba(52,211,153,.12);
    font-size: .72rem; font-weight: 600; letter-spacing: .1em;
    text-transform: uppercase; color: #34d399; margin-bottom: 1.2rem;
  }
  .exp-title {
    font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
    letter-spacing: -.03em; color: #e2e8f0; margin-bottom: .8rem;
  }
  .exp-subtitle {
    font-size: 1rem; color: rgba(255,255,255,.35);
    max-width: 520px; margin: 0 auto; line-height: 1.6;
  }

  .exp-timeline {
    position: relative; max-width: 800px; margin: 0 auto;
    padding-left: 3rem;
  }
  .exp-timeline::before {
    content: ''; position: absolute; left: 12px; top: 8px; bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #38bdf8, #818cf8, rgba(139,92,246,.1));
  }

  .exp-item {
    position: relative; padding-bottom: 2.5rem;
  }
  .exp-item:last-child { padding-bottom: 0; }

  .exp-dot {
    position: absolute; left: -3rem; top: 6px;
    width: 24px; height: 24px; border-radius: 50%;
    background: #0a0a0f;
    border: 2px solid #38bdf8;
    display: flex; align-items: center; justify-content: center;
    z-index: 1;
    transform: translateX(1px);
  }
  .exp-dot-inner {
    width: 8px; height: 8px; border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 10px rgba(56,189,248,.5);
  }

  .exp-card {
    background: rgba(255,255,255,.02);
    border: 1px solid rgba(255,255,255,.05);
    border-radius: 16px; padding: 1.5rem 1.8rem;
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    transition: all .4s cubic-bezier(.4,0,.2,1);
  }
  .exp-card:hover {
    background: rgba(255,255,255,.04);
    border-color: rgba(56,189,248,.12);
    transform: translateX(6px);
    box-shadow: 0 8px 30px rgba(0,0,0,.3);
  }

  .exp-period {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: .72rem; font-weight: 700; letter-spacing: .08em;
    text-transform: uppercase; color: #38bdf8; margin-bottom: .5rem;
  }
  .exp-role {
    font-size: 1.1rem; font-weight: 700; color: #e2e8f0;
    margin-bottom: .3rem; line-height: 1.3;
  }
  .exp-company {
    font-size: .82rem; color: rgba(255,255,255,.4);
    margin-bottom: .8rem;
  }
  .exp-desc {
    font-size: .82rem; color: rgba(255,255,255,.35);
    line-height: 1.65; margin-bottom: 1rem;
  }
  .exp-tags {
    display: flex; flex-wrap: wrap; gap: .35rem;
  }
  .exp-tag {
    padding: 3px 10px; border-radius: 5px; font-size: .68rem; font-weight: 600;
    background: rgba(56,189,248,.06); border: 1px solid rgba(56,189,248,.1);
    color: rgba(56,189,248,.7);
  }
`;

const experiences = [
  {
    period: '2024 — Present',
    title: 'Full Stack Developer',
    company: 'DODOMA UNIVERSITY  •  Independent Projects',
    description: 'Developed and deployed full-stack web applications using modern frameworks. Projects included inventory systems, e-commerce platforms, and university management tools.',
    skills: ['Laravel', 'React', 'Node.js', 'MySQL', 'MongoDB'],
  },
  {
    period: '2023 — 2024',
    title: 'Mobile & Web App Developer',
    company: 'Independent',
    description: 'Built Android apps using Java and developed full-stack web apps using Vue, Express, and Spring Boot. Applications ranged from task managers to blog platforms and REST APIs.',
    skills: ['Java (Android)', 'Spring Boot', 'Vue.js', 'Express.js', 'Servlets'],
  },
  {
    period: '2022 — 2023',
    title: 'Software Engineer Intern',
    company: 'DODOMA UNIVERSITY  •  Software Engineering',
    description: 'Worked on integrating IoT devices with cloud-based dashboards. Developed APIs and real-time data visualization tools to monitor sensor networks.',
    skills: ['Node.js', 'React', 'MQTT', 'AWS IoT Core'],
  },
  {
    period: '2021 — 2022',
    title: 'Embedded Systems Developer',
    company: 'Arusha Technical College  •  Electronics & Telecom',
    description: 'Designed and built IoT prototypes such as smart home automation systems and real-time sensor networks. Programmed microcontrollers and implemented wireless communication protocols.',
    skills: ['Arduino', 'ESP32', 'C/C++', 'Bluetooth/Wi-Fi', 'IoT'],
  },
  {
    period: '2020 — 2021',
    title: 'Junior Electronics Developer',
    company: 'Arusha Technical College  •  Embedded Lab',
    description: 'Assisted in PCB design and embedded firmware development for low-power sensor devices. Conducted signal analysis and tested hardware components.',
    skills: ['PCB Design', 'Proteus', 'Keil uVision', 'UART', 'ADC'],
  },
  {
    period: '2019 — 2020',
    title: 'Electronics & IoT Hobbyist',
    company: 'Arusha Technical College  •  Electronics Lab 4',
    description: 'Built DIY electronics projects including weather stations, automated irrigation systems, and Bluetooth-controlled robots. Shared documentation and code on GitHub.',
    skills: ['Microcontrollers', 'Sensors', 'IoT', 'Python', 'Git'],
  },
];

const Experience = () => (
  <>
    <style>{EXP_CSS}</style>
    <section className="exp-section" id="experience">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div className="exp-header">
          <div className="exp-badge">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Journey
          </div>
          <h2 className="exp-title fade-in">Experience & Growth</h2>
          <p className="exp-subtitle fade-in">
            A timeline of continuous learning, building, and shipping real-world solutions.
          </p>
        </div>

        <div className="exp-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="exp-item fade-in" style={{ animationDelay: `${0.08 * idx}s` }}>
              <div className="exp-dot"><div className="exp-dot-inner" /></div>
              <div className="exp-card">
                <div className="exp-period">
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {exp.period}
                </div>
                <h3 className="exp-role">{exp.title}</h3>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-desc">{exp.description}</p>
                <div className="exp-tags">
                  {exp.skills.map((s, i) => <span key={i} className="exp-tag">{s}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Experience;