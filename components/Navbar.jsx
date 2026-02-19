'use client';

import React, { useState } from 'react';

const NAV_CSS = `
  .nav-premium {
    position: fixed; top: 0; left: 0; width: 100%; z-index: 200;
    padding: 1.1rem 0;
    transition: all .4s cubic-bezier(.4,0,.2,1);
    background: transparent;
  }
  .nav-premium.scrolled {
    background: rgba(10,10,15,.78);
    backdrop-filter: blur(24px) saturate(1.4);
    -webkit-backdrop-filter: blur(24px) saturate(1.4);
    border-bottom: 1px solid rgba(255,255,255,.04);
    box-shadow: 0 4px 30px rgba(0,0,0,.35);
    padding: .7rem 0;
  }
  .nav-logo {
    font-size: 1.4rem; font-weight: 800; letter-spacing: -.03em;
    text-decoration: none;
    background: linear-gradient(135deg, #38bdf8, #818cf8);
    -webkit-background-clip: text; background-clip: text; color: transparent;
    transition: opacity .3s;
  }
  .nav-logo:hover { opacity: .85; }
  .nav-logo-dot {
    display: inline-block; width: 7px; height: 7px; border-radius: 50%;
    background: #38bdf8; margin-left: 2px;
    box-shadow: 0 0 10px rgba(56,189,248,.5);
  }
  .nav-links { display: flex; align-items: center; gap: .15rem; }
  .nav-link {
    position: relative; padding: .45rem .9rem;
    font-size: .78rem; font-weight: 500; letter-spacing: .03em;
    color: rgba(255,255,255,.5); text-decoration: none;
    transition: all .3s; border-radius: 8px;
  }
  .nav-link:hover { color: rgba(255,255,255,.9); background: rgba(255,255,255,.04); }
  .nav-link::after {
    content: ''; position: absolute; bottom: 2px; left: 50%;
    width: 0; height: 2px;
    background: linear-gradient(90deg, #38bdf8, #818cf8);
    border-radius: 1px; transition: all .3s cubic-bezier(.4,0,.2,1);
    transform: translateX(-50%);
  }
  .nav-link:hover::after { width: 55%; }
  .nav-cta {
    padding: .48rem 1.2rem; font-size: .78rem; font-weight: 600;
    color: #fff; background: linear-gradient(135deg, #2563eb, #7c3aed);
    border: none; border-radius: 8px; cursor: pointer;
    transition: all .3s; text-decoration: none; margin-left: .5rem;
  }
  .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 4px 20px rgba(37,99,235,.4); }
  .nav-mob-btn {
    display: none; background: none; border: 1px solid rgba(255,255,255,.1);
    border-radius: 8px; padding: .5rem; color: rgba(255,255,255,.7); cursor: pointer;
    transition: all .3s;
  }
  .nav-mob-btn:hover { background: rgba(255,255,255,.05); border-color: rgba(255,255,255,.2); }
  .nav-drawer {
    position: fixed; top: 0; right: 0; width: 280px; height: 100vh;
    background: rgba(10,10,15,.96); backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border-left: 1px solid rgba(255,255,255,.06);
    transform: translateX(100%);
    transition: transform .4s cubic-bezier(.4,0,.2,1);
    z-index: 301; padding: 2rem; display: flex; flex-direction: column;
  }
  .nav-drawer.open { transform: translateX(0); }
  .nav-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,.5);
    backdrop-filter: blur(4px); z-index: 300;
    opacity: 0; pointer-events: none; transition: opacity .3s;
  }
  .nav-overlay.open { opacity: 1; pointer-events: auto; }
  .nav-drawer-close {
    align-self: flex-end; background: none;
    border: 1px solid rgba(255,255,255,.1); border-radius: 8px;
    padding: .4rem .6rem; color: rgba(255,255,255,.6);
    cursor: pointer; margin-bottom: 2rem; transition: all .3s;
  }
  .nav-drawer-close:hover { background: rgba(255,255,255,.05); color: #fff; }
  .nav-drawer-link {
    display: block; padding: .75rem 0; font-size: 1rem; font-weight: 500;
    color: rgba(255,255,255,.6); text-decoration: none;
    border-bottom: 1px solid rgba(255,255,255,.04); transition: all .3s;
  }
  .nav-drawer-link:hover { color: #38bdf8; padding-left: .5rem; }
  .nav-drawer-cta {
    margin-top: 1.5rem; padding: .75rem 1.5rem; text-align: center;
    font-weight: 600; font-size: .9rem; color: #fff;
    background: linear-gradient(135deg, #2563eb, #7c3aed);
    border-radius: 10px; text-decoration: none; transition: all .3s;
  }
  .nav-drawer-cta:hover { box-shadow: 0 4px 20px rgba(37,99,235,.4); }
  @media(max-width:768px) {
    .nav-links, .nav-cta { display: none !important; }
    .nav-mob-btn { display: flex; }
  }
`;

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <style>{NAV_CSS}</style>
      <nav className="nav-premium" id="navbar">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" className="nav-logo">DawillyGene<span className="nav-logo-dot" /></a>
          <div className="nav-links">
            {links.map(l => <a key={l.href} href={l.href} className="nav-link">{l.label}</a>)}
            <a href="#contact" className="nav-cta">Let's Talk</a>
          </div>
          <button className="nav-mob-btn" onClick={() => setOpen(true)} aria-label="Menu">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </nav>
      <div className={`nav-overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />
      <div className={`nav-drawer ${open ? 'open' : ''}`}>
        <button className="nav-drawer-close" onClick={() => setOpen(false)}>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>
        {links.map(l => <a key={l.href} href={l.href} className="nav-drawer-link" onClick={() => setOpen(false)}>{l.label}</a>)}
        <a href="#contact" className="nav-drawer-cta" onClick={() => setOpen(false)}>Let's Talk</a>
      </div>
    </>
  );
};

export default Navbar;