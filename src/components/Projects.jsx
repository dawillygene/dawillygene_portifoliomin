import React from 'react';

const PRJ_CSS = `
  .prj-section {
    position: relative; padding: 7rem 0; background: rgba(10,10,15,.5); overflow: hidden;
  }
  .prj-section::before {
    content: ''; position: absolute; bottom: -200px; right: -100px;
    width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, rgba(139,92,246,.04) 0%, transparent 70%);
    pointer-events: none;
  }
  .prj-header { text-align: center; margin-bottom: 4rem; position: relative; z-index: 1; }
  .prj-badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 6px 18px; border-radius: 9999px;
    background: rgba(56,189,248,.06); border: 1px solid rgba(56,189,248,.12);
    font-size: .72rem; font-weight: 600; letter-spacing: .1em;
    text-transform: uppercase; color: #38bdf8; margin-bottom: 1.2rem;
  }
  .prj-title {
    font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
    letter-spacing: -.03em; color: #e2e8f0; margin-bottom: .8rem;
  }
  .prj-subtitle {
    font-size: 1rem; color: rgba(255,255,255,.35);
    max-width: 520px; margin: 0 auto; line-height: 1.6;
  }
  .prj-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 1.5rem; position: relative; z-index: 1;
  }
  @media(max-width:768px) { .prj-grid { grid-template-columns: 1fr; } }

  .prj-card {
    position: relative; border-radius: 20px; overflow: hidden;
    background: rgba(255,255,255,.02);
    border: 1px solid rgba(255,255,255,.05);
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    transition: all .45s cubic-bezier(.4,0,.2,1);
  }
  .prj-card:hover {
    transform: translateY(-8px);
    border-color: rgba(56,189,248,.15);
    box-shadow: 0 16px 50px rgba(0,0,0,.5), 0 0 80px rgba(56,189,248,.04);
  }

  .prj-card-visual {
    height: 200px; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }
  .prj-card-visual::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(10,10,15,.3), rgba(10,10,15,.7));
  }
  .prj-card-visual i {
    position: relative; z-index: 1; font-size: 3.5rem;
    filter: drop-shadow(0 4px 20px currentColor);
    transition: transform .4s;
  }
  .prj-card:hover .prj-card-visual i { transform: scale(1.12); }

  .prj-card-body { padding: 1.5rem 1.5rem 1.8rem; }
  .prj-card-badge {
    display: inline-block; padding: 3px 12px; border-radius: 6px;
    font-size: .65rem; font-weight: 700; letter-spacing: .06em;
    text-transform: uppercase; margin-bottom: .8rem;
  }
  .prj-card-name {
    font-size: 1.1rem; font-weight: 700; color: #e2e8f0;
    margin-bottom: .5rem; line-height: 1.3;
  }
  .prj-card-desc {
    font-size: .82rem; color: rgba(255,255,255,.4);
    line-height: 1.65; margin-bottom: 1rem;
  }
  .prj-card-tags {
    display: flex; flex-wrap: wrap; gap: .35rem; margin-bottom: 1.2rem;
  }
  .prj-card-tag {
    padding: 3px 10px; border-radius: 5px; font-size: .68rem; font-weight: 600;
    background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.06);
    color: rgba(255,255,255,.5);
  }
  .prj-card-link {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: .8rem; font-weight: 600; color: #38bdf8;
    text-decoration: none; transition: all .3s;
  }
  .prj-card-link:hover { color: #818cf8; gap: 10px; }
  .prj-card-link svg { transition: transform .3s; }
  .prj-card-link:hover svg { transform: translateX(3px); }

  .prj-more {
    display: inline-flex; align-items: center; gap: 8px;
    margin-top: 3rem; padding: 14px 32px; border-radius: 12px;
    font-weight: 600; font-size: .9rem; color: rgba(255,255,255,.85);
    background: rgba(255,255,255,.04);
    border: 1px solid rgba(255,255,255,.1);
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    cursor: pointer; transition: all .35s; text-decoration: none;
  }
  .prj-more:hover {
    background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.2);
    transform: translateY(-2px); box-shadow: 0 4px 20px rgba(255,255,255,.05);
  }
`;

const projects = [
  {
    icon: 'fas fa-mobile-alt', iconColor: '#38bdf8',
    visualBg: 'linear-gradient(135deg, rgba(56,189,248,.08), rgba(56,189,248,.02))',
    badge: { text: 'Mobile App', bg: 'rgba(56,189,248,.1)', color: '#38bdf8' },
    title: 'Smart Home Controller',
    description: 'A mobile application that allows users to control IoT devices in their home with voice commands, scheduling, and real-time monitoring.',
    skills: ['Android', 'Java', 'IoT', 'MQTT'],
    link: '#',
  },
  {
    icon: 'fas fa-store', iconColor: '#34d399',
    visualBg: 'linear-gradient(135deg, rgba(52,211,153,.08), rgba(52,211,153,.02))',
    badge: { text: 'Full-Stack', bg: 'rgba(52,211,153,.1)', color: '#34d399' },
    title: 'Inventory Management System',
    description: 'Enterprise web application built with Laravel and MySQL to manage product stock, track orders, and generate analytical inventory reports.',
    skills: ['Laravel', 'PHP', 'MySQL', 'REST API'],
    link: '#',
  },
  {
    icon: 'fas fa-project-diagram', iconColor: '#fbbf24',
    visualBg: 'linear-gradient(135deg, rgba(251,191,36,.08), rgba(251,191,36,.02))',
    badge: { text: 'MERN Stack', bg: 'rgba(251,191,36,.1)', color: '#fbbf24' },
    title: 'Task Management Tool',
    description: 'Full-stack MERN application for assigning, tracking, and managing project tasks with real-time notifications and team collaboration.',
    skills: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    link: '#',
  },
  {
    icon: 'fas fa-lock', iconColor: '#a78bfa',
    visualBg: 'linear-gradient(135deg, rgba(167,139,250,.08), rgba(167,139,250,.02))',
    badge: { text: 'Backend', bg: 'rgba(167,139,250,.1)', color: '#a78bfa' },
    title: 'User Authentication System',
    description: 'Secure authentication platform using Java Servlets and Spring Boot with JWT tokens, OAuth2 integration, and role-based access control.',
    skills: ['Java', 'Spring Boot', 'JWT', 'OAuth2'],
    link: '#',
  },
  {
    icon: 'fas fa-shopping-cart', iconColor: '#f43f5e',
    visualBg: 'linear-gradient(135deg, rgba(244,63,94,.08), rgba(244,63,94,.02))',
    badge: { text: 'E-Commerce', bg: 'rgba(244,63,94,.1)', color: '#f43f5e' },
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce solution with integrated payment gateways, inventory management, analytics dashboard, and recommendation engine.',
    skills: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
  },
  {
    icon: 'fas fa-book', iconColor: '#6366f1',
    visualBg: 'linear-gradient(135deg, rgba(99,102,241,.08), rgba(99,102,241,.02))',
    badge: { text: 'EdTech', bg: 'rgba(99,102,241,.1)', color: '#6366f1' },
    title: 'Learning Management System',
    description: 'LMS for creating, managing, and delivering educational content with instructor dashboards, student progress tracking, and video streaming.',
    skills: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
    link: '#',
  },
  {
    icon: 'fas fa-robot', iconColor: '#14b8a6',
    visualBg: 'linear-gradient(135deg, rgba(20,184,166,.08), rgba(20,184,166,.02))',
    badge: { text: 'IoT Project', bg: 'rgba(20,184,166,.1)', color: '#14b8a6' },
    title: 'Smart Agriculture System',
    description: 'Monitors temperature, humidity, and soil moisture in real-time. Automates irrigation using IoT sensors, relays, and cloud dashboards.',
    skills: ['Arduino', 'Raspberry Pi', 'Python', 'AWS IoT'],
    link: '#',
  },
  {
    icon: 'fas fa-puzzle-piece', iconColor: '#f59e0b',
    visualBg: 'linear-gradient(135deg, rgba(245,158,11,.08), rgba(245,158,11,.02))',
    badge: { text: 'Mobile App', bg: 'rgba(245,158,11,.1)', color: '#f59e0b' },
    title: 'Android Quiz App',
    description: 'Offline-first Android app built with Java that quizzes users on various topics with score tracking, leaderboards, and timed challenges.',
    skills: ['Android', 'Java', 'SQLite', 'Material UI'],
    link: '#',
  },
];

const Projects = () => (
  <>
    <style>{PRJ_CSS}</style>
    <section className="prj-section" id="projects">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div className="prj-header">
          <div className="prj-badge">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>
            Portfolio
          </div>
          <h2 className="prj-title fade-in">Featured Projects</h2>
          <p className="prj-subtitle fade-in">
            A curated selection of production-grade applications I've designed, built, and shipped.
          </p>
        </div>

        <div className="prj-grid">
          {projects.map((p, idx) => (
            <div className="prj-card fade-in" key={idx} style={{ animationDelay: `${0.06 * idx}s` }}>
              <div className="prj-card-visual" style={{ background: p.visualBg }}>
                <i className={p.icon} style={{ color: p.iconColor }} />
              </div>
              <div className="prj-card-body">
                <span className="prj-card-badge" style={{ background: p.badge.bg, color: p.badge.color }}>
                  {p.badge.text}
                </span>
                <h3 className="prj-card-name">{p.title}</h3>
                <p className="prj-card-desc">{p.description}</p>
                <div className="prj-card-tags">
                  {p.skills.map((s, i) => <span key={i} className="prj-card-tag">{s}</span>)}
                </div>
                <a href={p.link} className="prj-card-link">
                  View Details
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="#" className="prj-more fade-in">
            View All Projects
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Projects;