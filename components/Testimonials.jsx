'use client';

import React from 'react';

const TEST_CSS = `
  .test-section {
    position: relative; padding: 7rem 0; background: rgba(10,10,15,.5); overflow: hidden;
  }
  .test-section::before {
    content: ''; position: absolute; top: -200px; right: -150px;
    width: 500px; height: 500px; border-radius: 50%;
    background: radial-gradient(circle, rgba(251,191,36,.03) 0%, transparent 70%);
    pointer-events: none;
  }
  .test-header { text-align: center; margin-bottom: 4rem; position: relative; z-index: 1; }
  .test-badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 6px 18px; border-radius: 9999px;
    background: rgba(251,191,36,.06); border: 1px solid rgba(251,191,36,.12);
    font-size: .72rem; font-weight: 600; letter-spacing: .1em;
    text-transform: uppercase; color: #fbbf24; margin-bottom: 1.2rem;
  }
  .test-title {
    font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
    letter-spacing: -.03em; color: #e2e8f0; margin-bottom: .8rem;
  }
  .test-subtitle {
    font-size: 1rem; color: rgba(255,255,255,.35);
    max-width: 500px; margin: 0 auto; line-height: 1.6;
  }
  .test-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem; position: relative; z-index: 1;
  }
  @media(max-width:768px) { .test-grid { grid-template-columns: 1fr; } }

  .test-card {
    position: relative; padding: 2rem; border-radius: 20px;
    background: rgba(255,255,255,.02);
    border: 1px solid rgba(255,255,255,.05);
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    transition: all .45s cubic-bezier(.4,0,.2,1);
    overflow: hidden;
  }
  .test-card::before {
    content: ''; position: absolute; top: 0; left: 0;
    width: 100%; height: 3px;
    background: linear-gradient(90deg, transparent, #38bdf8, #818cf8, transparent);
    opacity: 0; transition: opacity .4s;
  }
  .test-card:hover {
    transform: translateY(-4px);
    border-color: rgba(255,255,255,.08);
    box-shadow: 0 12px 40px rgba(0,0,0,.35);
  }
  .test-card:hover::before { opacity: 1; }

  .test-quote-icon {
    position: absolute; top: 1.2rem; right: 1.5rem;
    font-size: 2.5rem;
    background: linear-gradient(135deg, rgba(56,189,248,.15), rgba(139,92,246,.1));
    -webkit-background-clip: text; background-clip: text; color: transparent;
    pointer-events: none;
  }

  .test-stars { display: flex; gap: 3px; margin-bottom: 1.2rem; }
  .test-star { color: #fbbf24; font-size: .85rem; }
  .test-star-half { color: #fbbf24; font-size: .85rem; }

  .test-text {
    font-size: .88rem; color: rgba(255,255,255,.5);
    line-height: 1.7; margin-bottom: 1.5rem;
    font-style: italic;
  }
  .test-author {
    display: flex; align-items: center; gap: .8rem;
  }
  .test-avatar {
    width: 44px; height: 44px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: .85rem; font-weight: 800;
    background: linear-gradient(135deg, #2563eb, #7c3aed);
    color: #fff;
    box-shadow: 0 0 0 3px rgba(10,10,15,.8), 0 0 0 5px rgba(56,189,248,.2);
  }
  .test-author-name {
    font-size: .88rem; font-weight: 700; color: #e2e8f0;
    line-height: 1.3;
  }
  .test-author-title {
    font-size: .72rem; color: rgba(255,255,255,.35);
  }
`;

const testimonials = [
  {
    stars: 5,
    text: "Dawilly consistently demonstrated outstanding technical skills and dedication in software engineering during his studies. His problem-solving ability is impressive and he quickly adapts to new challenges.",
    initials: "RH",
    name: "Rorland Horombo",
    title: "Lecturer, Arusha Technical College",
  },
  {
    stars: 5,
    text: "Dawilly's interdisciplinary knowledge and innovative mindset have been key in advancing biomedical projects at Proud Biomedics. His software solutions have streamlined several complex processes.",
    initials: "MM",
    name: "Masoud Mbelwa",
    title: "Biomedical Engineer, CEO @ Proud Biomedics",
  },
  {
    stars: 4.5,
    text: "I have seen Dawilly's growth firsthand. His commitment to quality and client satisfaction makes him a reliable software engineer for any project, especially in consultancy and employment services.",
    initials: "MC",
    name: "Mohamed",
    title: "CEO, Alpha Employment Agency and Consultancy Limited",
  },
  {
    stars: 5,
    text: "Dawilly is a highly skilled developer whose tech expertise supports operational efficiency at Salum Transport and Salum Construction. His solutions are practical and impactful.",
    initials: "FM",
    name: "Fatma Masimba",
    title: "CEO, Salum Transport Limited & Salum Construction",
  },
];

const renderStars = (count) => {
  const full = Math.floor(count);
  const half = count % 1 !== 0;
  return (
    <div className="test-stars">
      {[...Array(full)].map((_, i) => (
        <i key={i} className="fas fa-star test-star" />
      ))}
      {half && <i className="fas fa-star-half-alt test-star-half" />}
    </div>
  );
};

const Testimonials = () => (
  <>
    <style>{TEST_CSS}</style>
    <section className="test-section">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div className="test-header">
          <div className="test-badge">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            Testimonials
          </div>
          <h2 className="test-title fade-in">What People Say</h2>
          <p className="test-subtitle fade-in">
            Trusted by educators, CEOs, and engineers who've seen my work firsthand.
          </p>
        </div>

        <div className="test-grid">
          {testimonials.map((t, idx) => (
            <div className="test-card fade-in" key={idx} style={{ animationDelay: `${0.1 * idx}s` }}>
              <div className="test-quote-icon">
                <i className="fas fa-quote-right" />
              </div>
              {renderStars(t.stars)}
              <p className="test-text">"{t.text}"</p>
              <div className="test-author">
                <div className="test-avatar">{t.initials}</div>
                <div>
                  <div className="test-author-name">{t.name}</div>
                  <div className="test-author-title">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Testimonials;