'use client';

import React from 'react';

const FOOTER_CSS = `
  .footer-premium {
    position: relative; background: #0a0a0f;
    padding: 0 0 2rem;
  }
  .footer-divider {
    height: 1px; margin-bottom: 3rem;
    background: linear-gradient(90deg, transparent, rgba(56,189,248,.15), rgba(139,92,246,.15), transparent);
  }
  .footer-inner {
    display: flex; flex-wrap: wrap;
    justify-content: space-between; align-items: flex-start;
    gap: 2rem;
  }
  .footer-brand {
    max-width: 320px;
  }
  .footer-logo {
    font-size: 1.4rem; font-weight: 800; letter-spacing: -.03em;
    background: linear-gradient(135deg, #38bdf8, #818cf8);
    -webkit-background-clip: text; background-clip: text; color: transparent;
    margin-bottom: .6rem; display: inline-block;
  }
  .footer-logo-dot {
    display: inline-block; width: 7px; height: 7px; border-radius: 50%;
    background: #38bdf8; margin-left: 2px;
    box-shadow: 0 0 10px rgba(56,189,248,.5);
  }
  .footer-tagline {
    font-size: .82rem; color: rgba(255,255,255,.3); line-height: 1.6;
  }

  .footer-links-group { }
  .footer-links-title {
    font-size: .72rem; font-weight: 700; letter-spacing: .1em;
    text-transform: uppercase; color: rgba(255,255,255,.5);
    margin-bottom: .8rem;
  }
  .footer-link {
    display: block; padding: .25rem 0;
    font-size: .82rem; color: rgba(255,255,255,.3);
    text-decoration: none; transition: all .3s;
  }
  .footer-link:hover { color: #38bdf8; padding-left: .3rem; }

  .footer-socials {
    display: flex; gap: .5rem; margin-top: 1rem;
  }
  .footer-social {
    width: 36px; height: 36px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,.03);
    border: 1px solid rgba(255,255,255,.06);
    color: rgba(255,255,255,.4); font-size: .85rem;
    text-decoration: none; transition: all .3s;
  }
  .footer-social:hover {
    background: rgba(56,189,248,.08);
    border-color: rgba(56,189,248,.2);
    color: #38bdf8;
    transform: translateY(-2px);
  }

  .footer-bottom {
    margin-top: 2.5rem; padding-top: 1.5rem;
    border-top: 1px solid rgba(255,255,255,.04);
    display: flex; flex-wrap: wrap; justify-content: space-between;
    align-items: center; gap: 1rem;
  }
  .footer-copy {
    font-size: .75rem; color: rgba(255,255,255,.2);
  }
  .footer-made {
    font-size: .72rem; color: rgba(255,255,255,.15);
    display: flex; align-items: center; gap: 4px;
  }
  .footer-heart { color: #f43f5e; }
`;

const Footer = () => (
  <>
    <style>{FOOTER_CSS}</style>
    <footer className="footer-premium">
      <div className="footer-divider" />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">DawillyGene<span className="footer-logo-dot" /></div>
            <p className="footer-tagline">
              Software Engineer &amp; Full-Stack Developer crafting production-grade systems that connect technologies and people.
            </p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/elia-william-mariki/" className="footer-social" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
              <a href="https://github.com/dawillygene" className="footer-social" aria-label="GitHub"><i className="fab fa-github" /></a>
              <a href="#" className="footer-social" aria-label="Twitter"><i className="fab fa-twitter" /></a>
              <a href="https://www.instagram.com/dawillygene/" className="footer-social" aria-label="Instagram"><i className="fab fa-instagram" /></a>
              <a href="https://www.tiktok.com/@dawilly_gene" className="footer-social" aria-label="TikTok"><i className="fab fa-tiktok" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-group">
            <div className="footer-links-title">Navigation</div>
            <a href="#about" className="footer-link">About</a>
            <a href="#services" className="footer-link">Services</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#experience" className="footer-link">Experience</a>
          </div>

          {/* More Links */}
          <div className="footer-links-group">
            <div className="footer-links-title">Get In Touch</div>
            <a href="mailto:contact@dawillygene.com" className="footer-link">contact@dawillygene.com</a>
            <a href="tel:+255753225961" className="footer-link">+255 753 225 961</a>
            <span className="footer-link" style={{ cursor: 'default' }}>Dodoma, Tanzania</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Dawilly Gene. All rights reserved.
          </p>
          <p className="footer-made">
            Built with <span className="footer-heart">♥</span> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;