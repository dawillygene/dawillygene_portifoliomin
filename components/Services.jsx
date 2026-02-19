'use client';

import React from 'react';

const SVC_CSS = `
  .svc-section {
    position: relative; padding: 7rem 0; background: #0a0a0f; overflow: hidden;
  }
  .svc-section::before {
    content: ''; position: absolute; top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    width: 800px; height: 800px; border-radius: 50%;
    background: radial-gradient(circle, rgba(56,189,248,.03) 0%, transparent 70%);
    pointer-events: none;
  }
  .svc-header { text-align: center; margin-bottom: 4rem; position: relative; z-index: 1; }
  .svc-badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 6px 18px; border-radius: 9999px;
    background: rgba(139,92,246,.06); border: 1px solid rgba(139,92,246,.12);
    font-size: .72rem; font-weight: 600; letter-spacing: .1em;
    text-transform: uppercase; color: #a78bfa; margin-bottom: 1.2rem;
  }
  .svc-title {
    font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
    letter-spacing: -.03em; color: #e2e8f0; margin-bottom: .8rem;
  }
  .svc-subtitle {
    font-size: 1rem; color: rgba(255,255,255,.35);
    max-width: 540px; margin: 0 auto; line-height: 1.6;
  }
  .svc-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem; position: relative; z-index: 1;
  }
  @media(max-width: 768px) { .svc-grid { grid-template-columns: 1fr; } }

  .svc-card {
    position: relative; padding: 2rem; border-radius: 20px;
    background: rgba(255,255,255,.02);
    border: 1px solid rgba(255,255,255,.05);
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    transition: all .45s cubic-bezier(.4,0,.2,1);
    overflow: hidden;
  }
  .svc-card::before {
    content: ''; position: absolute; inset: 0; border-radius: 20px;
    background: linear-gradient(135deg, rgba(56,189,248,.04), rgba(139,92,246,.04));
    opacity: 0; transition: opacity .4s;
  }
  .svc-card:hover {
    transform: translateY(-6px);
    border-color: rgba(56,189,248,.15);
    box-shadow: 0 12px 40px rgba(0,0,0,.4), 0 0 60px rgba(56,189,248,.05);
  }
  .svc-card:hover::before { opacity: 1; }

  .svc-num {
    position: absolute; top: 1rem; right: 1.5rem;
    font-size: 4rem; font-weight: 900; line-height: 1;
    background: linear-gradient(135deg, rgba(255,255,255,.04), rgba(255,255,255,.01));
    -webkit-background-clip: text; background-clip: text; color: transparent;
    pointer-events: none;
  }
  .svc-icon-wrap {
    width: 52px; height: 52px; border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 1.5rem; position: relative; z-index: 1;
    font-size: 1.3rem; transition: all .3s;
  }
  .svc-card:hover .svc-icon-wrap { transform: scale(1.08); }
  .svc-card-title {
    font-size: 1.15rem; font-weight: 700; color: #e2e8f0;
    margin-bottom: .75rem; position: relative; z-index: 1;
  }
  .svc-card-desc {
    font-size: .85rem; color: rgba(255,255,255,.4);
    line-height: 1.65; margin-bottom: 1.2rem; position: relative; z-index: 1;
  }
  .svc-tags {
    display: flex; flex-wrap: wrap; gap: .4rem; position: relative; z-index: 1;
  }
  .svc-tag {
    padding: 4px 12px; border-radius: 6px; font-size: .7rem; font-weight: 600;
    letter-spacing: .03em; transition: all .3s;
  }
`;

const services = [
  {
    number: '01', icon: 'fas fa-laptop-code',
    iconBg: 'rgba(56,189,248,.08)', iconColor: '#38bdf8',
    title: 'Web Development',
    desc: 'Creating responsive, performant websites and web applications using modern frameworks and cutting-edge technologies for optimal user experience.',
    tags: [
      { name: 'React', bg: 'rgba(56,189,248,.1)', color: '#38bdf8' },
      { name: 'Next.js', bg: 'rgba(56,189,248,.1)', color: '#38bdf8' },
      { name: 'Node.js', bg: 'rgba(56,189,248,.1)', color: '#38bdf8' },
      { name: 'TypeScript', bg: 'rgba(56,189,248,.1)', color: '#38bdf8' },
    ],
  },
  {
    number: '02', icon: 'fas fa-mobile-alt',
    iconBg: 'rgba(52,211,153,.08)', iconColor: '#34d399',
    title: 'Mobile Development',
    desc: 'Building native and cross-platform mobile applications with seamless user experiences and high-performance architecture.',
    tags: [
      { name: 'Android', bg: 'rgba(52,211,153,.1)', color: '#34d399' },
      { name: 'Java', bg: 'rgba(52,211,153,.1)', color: '#34d399' },
      { name: 'React Native', bg: 'rgba(52,211,153,.1)', color: '#34d399' },
      { name: 'Kotlin', bg: 'rgba(52,211,153,.1)', color: '#34d399' },
    ],
  },
  {
    number: '03', icon: 'fas fa-server',
    iconBg: 'rgba(251,191,36,.08)', iconColor: '#fbbf24',
    title: 'Backend Engineering',
    desc: 'Designing robust, scalable server-side solutions with secure RESTful APIs, microservices, and optimized database architectures.',
    tags: [
      { name: 'Node.js', bg: 'rgba(251,191,36,.1)', color: '#fbbf24' },
      { name: 'Spring Boot', bg: 'rgba(251,191,36,.1)', color: '#fbbf24' },
      { name: 'Laravel', bg: 'rgba(251,191,36,.1)', color: '#fbbf24' },
      { name: 'GraphQL', bg: 'rgba(251,191,36,.1)', color: '#fbbf24' },
    ],
  },
  {
    number: '04', icon: 'fas fa-paint-brush',
    iconBg: 'rgba(168,85,247,.08)', iconColor: '#a855f7',
    title: 'UI/UX Design',
    desc: 'Creating intuitive, user-centered designs and interfaces that elevate the user experience through thoughtful interaction patterns.',
    tags: [
      { name: 'Figma', bg: 'rgba(168,85,247,.1)', color: '#a855f7' },
      { name: 'Adobe XD', bg: 'rgba(168,85,247,.1)', color: '#a855f7' },
      { name: 'Prototyping', bg: 'rgba(168,85,247,.1)', color: '#a855f7' },
      { name: 'User Testing', bg: 'rgba(168,85,247,.1)', color: '#a855f7' },
    ],
  },
  {
    number: '05', icon: 'fas fa-microchip',
    iconBg: 'rgba(244,63,94,.08)', iconColor: '#f43f5e',
    title: 'IoT & Embedded Systems',
    desc: 'Developing smart, connected solutions with hardware integration, sensor networks, and real-time data processing pipelines.',
    tags: [
      { name: 'Arduino', bg: 'rgba(244,63,94,.1)', color: '#f43f5e' },
      { name: 'Raspberry Pi', bg: 'rgba(244,63,94,.1)', color: '#f43f5e' },
      { name: 'ESP32', bg: 'rgba(244,63,94,.1)', color: '#f43f5e' },
      { name: 'MQTT', bg: 'rgba(244,63,94,.1)', color: '#f43f5e' },
    ],
  },
  {
    number: '06', icon: 'fas fa-code-branch',
    iconBg: 'rgba(99,102,241,.08)', iconColor: '#6366f1',
    title: 'DevOps & Cloud',
    desc: 'Setting up CI/CD pipelines, containerization, infrastructure as code, and cloud-native architectures for seamless deployment.',
    tags: [
      { name: 'Docker', bg: 'rgba(99,102,241,.1)', color: '#6366f1' },
      { name: 'AWS', bg: 'rgba(99,102,241,.1)', color: '#6366f1' },
      { name: 'Git', bg: 'rgba(99,102,241,.1)', color: '#6366f1' },
      { name: 'CI/CD', bg: 'rgba(99,102,241,.1)', color: '#6366f1' },
    ],
  },
  {
    number: '07', icon: 'fas fa-vial',
    iconBg: 'rgba(20,184,166,.08)', iconColor: '#14b8a6',
    title: 'Software Testing',
    desc: 'Ensuring application reliability through structured unit tests, integration testing, end-to-end testing, and debugging best practices.',
    tags: [
      { name: 'JUnit', bg: 'rgba(20,184,166,.1)', color: '#14b8a6' },
      { name: 'Postman', bg: 'rgba(20,184,166,.1)', color: '#14b8a6' },
      { name: 'Mocha', bg: 'rgba(20,184,166,.1)', color: '#14b8a6' },
      { name: 'Cypress', bg: 'rgba(20,184,166,.1)', color: '#14b8a6' },
    ],
  },
];

const Services = () => (
  <>
    <style>{SVC_CSS}</style>
    <section className="svc-section" id="services">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div className="svc-header">
          <div className="svc-badge">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            What I Do
          </div>
          <h2 className="svc-title fade-in">Services & Expertise</h2>
          <p className="svc-subtitle fade-in">
            End-to-end solutions from concept to deployment — every layer of the stack, handled with precision.
          </p>
        </div>

        <div className="svc-grid">
          {services.map((svc, idx) => (
            <div className="svc-card fade-in" key={idx} style={{ animationDelay: `${0.08 * idx}s` }}>
              <div className="svc-num">{svc.number}</div>
              <div className="svc-icon-wrap" style={{ background: svc.iconBg, color: svc.iconColor }}>
                <i className={svc.icon} />
              </div>
              <h3 className="svc-card-title">{svc.title}</h3>
              <p className="svc-card-desc">{svc.desc}</p>
              <div className="svc-tags">
                {svc.tags.map((t, i) => (
                  <span key={i} className="svc-tag" style={{ background: t.bg, color: t.color }}>{t.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;