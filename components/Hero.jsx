'use client';

import React from 'react';

/* ──────────────────────────────────────────────────────────
   Premium Hero – $10M brand-quality, glassmorphism + orbital
   ────────────────────────────────────────────────────────── */

const HERO_CSS = `
  /* ── Orbital System ── */
  @keyframes orbit-slow    { to { transform: rotate(360deg); } }
  @keyframes orbit-reverse { to { transform: rotate(-360deg); } }
  @keyframes pulse-glow    { 0%,100%{ opacity:.45; } 50%{ opacity:.8; } }
  @keyframes float-slow    { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-14px); } }
  @keyframes fade-up       { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scroll-bounce { 0%,100%{ transform:translateY(0); opacity:1; } 50%{ transform:translateY(10px); opacity:.3; } }
  @keyframes shimmer       { 0%{ background-position:-200% center; } 100%{ background-position:200% center; } }
  @keyframes dash-rotate   { to { stroke-dashoffset: -100; } }
  @keyframes particle-drift { 0%{ transform:translateY(0) scale(1); opacity:.6; } 100%{ transform:translateY(-60px) scale(.4); opacity:0; } }

  .hero-premium {
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: #0a0a0f;
  }

  /* ambient glow layers */
  .hero-premium::before,
  .hero-premium::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(120px);
  }
  .hero-premium::before {
    width: 700px; height: 700px;
    top: -20%; right: -10%;
    background: radial-gradient(circle, rgba(56,189,248,.08) 0%, transparent 70%);
  }
  .hero-premium::after {
    width: 500px; height: 500px;
    bottom: -15%; left: -5%;
    background: radial-gradient(circle, rgba(139,92,246,.06) 0%, transparent 70%);
  }

  /* fine grid overlay */
  .hero-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%);
  }

  /* noise texture */
  .hero-noise {
    position: absolute; inset: 0;
    opacity: .03;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    pointer-events: none;
  }

  /* headline gradient */
  .hero-headline-gradient {
    background: linear-gradient(135deg, #e2e8f0 0%, #38bdf8 45%, #818cf8 75%, #e2e8f0 100%);
    background-size: 400% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: shimmer 8s linear infinite;
  }

  /* glass status badge */
  .glass-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 9999px;
    background: rgba(255,255,255,.04);
    border: 1px solid rgba(255,255,255,.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    font-size: .75rem;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: rgba(255,255,255,.6);
  }
  .glass-badge .dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #34d399;
    box-shadow: 0 0 8px rgba(52,211,153,.6);
    animation: pulse-glow 2s ease-in-out infinite;
  }

  /* CTA buttons */
  .cta-primary {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 32px;
    border-radius: 12px;
    border: none;
    font-weight: 600;
    font-size: .9rem;
    letter-spacing: .02em;
    color: #fff;
    background: linear-gradient(135deg, #2563eb, #7c3aed);
    cursor: pointer;
    transition: all .35s cubic-bezier(.4,0,.2,1);
    text-decoration: none;
    overflow: hidden;
    z-index: 1;
  }
  .cta-primary::before {
    content: '';
    position: absolute; inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    opacity: 0;
    transition: opacity .35s;
    z-index: -1;
  }
  .cta-primary:hover {
    transform: translateY(-2px);
    box-shadow:
      0 8px 30px rgba(37,99,235,.35),
      0 0 60px rgba(124,58,237,.15);
  }
  .cta-primary:hover::before { opacity: 1; }

  .cta-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 32px;
    border-radius: 12px;
    font-weight: 600;
    font-size: .9rem;
    letter-spacing: .02em;
    color: rgba(255,255,255,.85);
    background: rgba(255,255,255,.04);
    border: 1px solid rgba(255,255,255,.1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    cursor: pointer;
    transition: all .35s cubic-bezier(.4,0,.2,1);
    text-decoration: none;
  }
  .cta-secondary:hover {
    background: rgba(255,255,255,.08);
    border-color: rgba(255,255,255,.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(255,255,255,.05);
  }

  /* orbital wrapper */
  .orbital-system {
    position: relative;
    width: 420px;
    height: 420px;
    animation: float-slow 6s ease-in-out infinite;
  }
  @media(max-width:768px){ .orbital-system{ width:280px; height:280px; } }

  .orbit-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
  }

  .orbit-ring svg { width: 100%; height: 100%; }

  .orbit-ring-1 { animation: orbit-slow 25s linear infinite; }
  .orbit-ring-2 { animation: orbit-reverse 35s linear infinite; }
  .orbit-ring-3 { animation: orbit-slow 45s linear infinite; }

  .orbital-core {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    z-index: 2;
  }

  .core-monogram {
    font-size: 3.5rem;
    font-weight: 800;
    letter-spacing: -.04em;
    background: linear-gradient(135deg, #e2e8f0, #38bdf8, #818cf8);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    line-height: 1;
  }
  .core-label {
    margin-top: 8px;
    font-size: .7rem;
    letter-spacing: .15em;
    text-transform: uppercase;
    color: rgba(255,255,255,.35);
  }

  /* glass card behind core */
  .core-glass {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    width: 140px; height: 140px;
    border-radius: 28px;
    background: rgba(255,255,255,.03);
    border: 1px solid rgba(255,255,255,.06);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px rgba(0,0,0,.4);
  }

  /* node dots on orbits */
  .orbit-node {
    width: 8px; height: 8px;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0 0 12px currentColor;
  }

  /* scroll indicator */
  .scroll-cue {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: rgba(255,255,255,.3);
    font-size: .65rem;
    letter-spacing: .15em;
    text-transform: uppercase;
  }
  .scroll-cue-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, rgba(255,255,255,.3), transparent);
    animation: scroll-bounce 2s ease-in-out infinite;
  }

  /* stat counters */
  .hero-stats {
    display: flex;
    gap: 2.5rem;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,.06);
  }
  .hero-stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #38bdf8, #818cf8);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .hero-stat-label {
    font-size: .7rem;
    color: rgba(255,255,255,.35);
    letter-spacing: .06em;
    text-transform: uppercase;
    margin-top: 2px;
  }

  /* fade-up utility */
  .anim-fade-up {
    animation: fade-up .9s cubic-bezier(.16,1,.3,1) both;
  }

  /* floating particles */
  .particle {
    position: absolute;
    width: 3px; height: 3px;
    border-radius: 50%;
    background: rgba(56,189,248,.3);
    animation: particle-drift 4s ease-in-out infinite;
  }
`;

const Hero = () => (
  <>
    <style>{HERO_CSS}</style>

    <section className="hero-premium" id="about">
      {/* Ambient layers */}
      <div className="hero-grid" />
      <div className="hero-noise" />

      {/* Floating particles */}
      {[
        { top: '15%', left: '10%', delay: '0s', dur: '5s' },
        { top: '70%', left: '15%', delay: '1.5s', dur: '6s' },
        { top: '25%', left: '85%', delay: '2s', dur: '4.5s' },
        { top: '80%', left: '75%', delay: '0.8s', dur: '5.5s' },
        { top: '45%', left: '5%', delay: '3s', dur: '7s' },
        { top: '60%', left: '90%', delay: '1s', dur: '6.5s' },
      ].map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.dur,
          }}
        />
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            minHeight: '100vh',
            paddingTop: '6rem',
            paddingBottom: '4rem',
          }}
        >
          {/* ─── Left: Content ─── */}
          <div
            className="anim-fade-up"
            style={{ flex: '1 1 55%', minWidth: 300, paddingRight: '2rem' }}
          >
            {/* Status badge */}
            <div className="glass-badge" style={{ marginBottom: '2rem' }}>
              <span className="dot" />
              Available for new projects
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-.03em',
                color: '#e2e8f0',
                marginBottom: '1.5rem',
              }}
            >
              I engineer systems
              <br />
              that{' '}
              <span className="hero-headline-gradient">scale, last,</span>
              <br />
              and matter.
            </h1>

            {/* Sub-headline */}
            <p
              style={{
                fontSize: 'clamp(.95rem, 1.3vw, 1.15rem)',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,.45)',
                maxWidth: 520,
                marginBottom: '2.5rem',
              }}
            >
              <span style={{ color: 'rgba(255,255,255,.7)' }}>Dawilly Gene</span> — Software
              Engineer &amp; Full-Stack Developer. I break down complex technical
              problems to create integrity-focused solutions that connect
              technologies and people.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="#contact" className="cta-primary">
                Get In Touch
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="#projects" className="cta-secondary">
                View My Work
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              {[
                { value: '5+', label: 'Years Building' },
                { value: '30+', label: 'Projects Shipped' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((s, i) => (
                <div key={i} className="anim-fade-up" style={{ animationDelay: `${0.5 + i * 0.15}s` }}>
                  <div className="hero-stat-value">{s.value}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right: Orbital Visual ─── */}
          <div
            className="anim-fade-up"
            style={{
              flex: '1 1 45%',
              minWidth: 280,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              animationDelay: '.35s',
            }}
          >
            <div className="orbital-system">
              {/* Glass backdrop */}
              <div className="core-glass" />

              {/* Ring 1 — outer */}
              <div className="orbit-ring orbit-ring-1">
                <svg viewBox="0 0 420 420" fill="none">
                  <circle cx="210" cy="210" r="200" stroke="rgba(56,189,248,.12)" strokeWidth="1" />
                  <circle
                    cx="210" cy="210" r="200"
                    stroke="url(#grad1)" strokeWidth="1.5"
                    strokeDasharray="8 16"
                    style={{ animation: 'dash-rotate 12s linear infinite' }}
                  />
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity=".6" />
                      <stop offset="100%" stopColor="#818cf8" stopOpacity=".1" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="orbit-node" style={{ top: '2%', left: '48%', color: '#38bdf8', background: '#38bdf8' }} />
                <div className="orbit-node" style={{ bottom: '8%', right: '12%', color: '#818cf8', background: '#818cf8', width: 6, height: 6 }} />
              </div>

              {/* Ring 2 — mid */}
              <div className="orbit-ring orbit-ring-2" style={{ inset: '15%' }}>
                <svg viewBox="0 0 300 300" fill="none">
                  <circle cx="150" cy="150" r="140" stroke="rgba(139,92,246,.1)" strokeWidth="1" />
                  <circle
                    cx="150" cy="150" r="140"
                    stroke="url(#grad2)" strokeWidth="1"
                    strokeDasharray="4 12"
                  />
                  <defs>
                    <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#a78bfa" stopOpacity=".5" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity=".05" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="orbit-node" style={{ top: '5%', right: '20%', color: '#a78bfa', background: '#a78bfa', width: 5, height: 5 }} />
              </div>

              {/* Ring 3 — inner */}
              <div className="orbit-ring orbit-ring-3" style={{ inset: '30%' }}>
                <svg viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="90" stroke="rgba(56,189,248,.08)" strokeWidth=".5" />
                </svg>
              </div>

              {/* Core monogram */}
              <div className="orbital-core">
                <div className="core-monogram">DG</div>
                <div className="core-label">Full-Stack Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-cue">
        <div className="scroll-cue-line" />
        <span>Scroll</span>
      </div>
    </section>
  </>
);

export default Hero;