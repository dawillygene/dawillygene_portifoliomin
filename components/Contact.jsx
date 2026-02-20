'use client';

import React from 'react';

const CONTACT_CSS = `
  .contact-section {
    position: relative; padding: 7rem 0; background: #0a0a0f; overflow: hidden;
  }
  .contact-section::before {
    content: ''; position: absolute; bottom: -200px; left: 50%;
    transform: translateX(-50%);
    width: 800px; height: 400px; border-radius: 50%;
    background: radial-gradient(ellipse, rgba(56,189,248,.04) 0%, transparent 70%);
    pointer-events: none;
  }
  .ct-header { text-align: center; margin-bottom: 4rem; position: relative; z-index: 1; }
  .ct-badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 6px 18px; border-radius: 9999px;
    background: rgba(56,189,248,.06); border: 1px solid rgba(56,189,248,.12);
    font-size: .72rem; font-weight: 600; letter-spacing: .1em;
    text-transform: uppercase; color: #38bdf8; margin-bottom: 1.2rem;
  }
  .ct-title {
    font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
    letter-spacing: -.03em; color: #e2e8f0; margin-bottom: .8rem;
  }
  .ct-subtitle {
    font-size: 1rem; color: rgba(255,255,255,.35);
    max-width: 540px; margin: 0 auto; line-height: 1.6;
  }

  .ct-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;
    position: relative; z-index: 1;
  }
  @media(max-width:768px) { .ct-grid { grid-template-columns: 1fr; } }

  /* Info card */
  .ct-info-card {
    display: flex; align-items: center; gap: 1rem;
    padding: 1.2rem; border-radius: 14px;
    background: rgba(255,255,255,.02);
    border: 1px solid rgba(255,255,255,.05);
    backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
    transition: all .3s; margin-bottom: 1rem;
  }
  .ct-info-card:hover {
    background: rgba(255,255,255,.04);
    border-color: rgba(56,189,248,.12);
    transform: translateX(4px);
  }
  .ct-info-icon {
    width: 48px; height: 48px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem; flex-shrink: 0;
  }
  .ct-info-label {
    font-size: .75rem; font-weight: 600; color: rgba(255,255,255,.35);
    letter-spacing: .05em; text-transform: uppercase; margin-bottom: 2px;
  }
  .ct-info-value {
    font-size: .88rem; font-weight: 500; color: rgba(255,255,255,.7);
    text-decoration: none; transition: color .3s;
  }
  a.ct-info-value:hover { color: #38bdf8; }

  .ct-social-label {
    font-size: .82rem; font-weight: 700; color: rgba(255,255,255,.5);
    margin-bottom: 1rem; margin-top: 1.5rem;
  }
  .ct-socials {
    display: flex; gap: .6rem;
  }
  .ct-social {
    width: 42px; height: 42px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,.03);
    border: 1px solid rgba(255,255,255,.06);
    color: rgba(255,255,255,.5); font-size: .95rem;
    text-decoration: none; transition: all .3s;
  }
  .ct-social:hover {
    background: rgba(56,189,248,.08);
    border-color: rgba(56,189,248,.2);
    color: #38bdf8;
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(56,189,248,.1);
  }

  /* Form panel */
  .ct-form-panel {
    padding: 2.5rem; border-radius: 20px;
    background: rgba(255,255,255,.02);
    border: 1px solid rgba(255,255,255,.05);
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  }
  .ct-form-row {
    display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
    margin-bottom: 1rem;
  }
  @media(max-width:480px) { .ct-form-row { grid-template-columns: 1fr; } }

  .ct-input, .ct-textarea {
    width: 100%; padding: .85rem 1.2rem; border-radius: 12px;
    background: rgba(255,255,255,.03);
    border: 1px solid rgba(255,255,255,.06);
    color: #e2e8f0; font-size: .88rem;
    font-family: inherit;
    transition: all .3s;
    outline: none; margin-bottom: 1rem;
  }
  .ct-input::placeholder, .ct-textarea::placeholder {
    color: rgba(255,255,255,.2);
  }
  .ct-input:focus, .ct-textarea:focus {
    border-color: rgba(56,189,248,.3);
    background: rgba(255,255,255,.04);
    box-shadow: 0 0 0 3px rgba(56,189,248,.06);
  }
  .ct-textarea { resize: vertical; min-height: 140px; }

  .ct-submit {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 14px 32px; border-radius: 12px;
    border: none; font-weight: 600; font-size: .9rem;
    letter-spacing: .02em; color: #fff;
    background: linear-gradient(135deg, #2563eb, #7c3aed);
    cursor: pointer; transition: all .35s cubic-bezier(.4,0,.2,1);
    position: relative; overflow: hidden;
  }
  .ct-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(37,99,235,.35), 0 0 60px rgba(124,58,237,.12);
  }
`;

const Contact = () => (
  <>
    <style>{CONTACT_CSS}</style>
    <section className="contact-section" id="contact">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div className="ct-header">
          <div className="ct-badge">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Contact
          </div>
          <h2 className="ct-title fade-in">Let's Build Something Great</h2>
          <p className="ct-subtitle fade-in">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="ct-grid">
          {/* Left – Info */}
          <div className="fade-in" style={{ animationDelay: '.1s' }}>
            <div className="ct-info-card">
              <div className="ct-info-icon" style={{ background: 'rgba(56,189,248,.08)', color: '#38bdf8' }}>
                <i className="fas fa-envelope" />
              </div>
              <div>
                <div className="ct-info-label">Email</div>
                <a href="mailto:contact@dawillygene.com" className="ct-info-value">contact@dawillygene.com</a>
              </div>
            </div>

            <div className="ct-info-card">
              <div className="ct-info-icon" style={{ background: 'rgba(52,211,153,.08)', color: '#34d399' }}>
                <i className="fas fa-phone" />
              </div>
              <div>
                <div className="ct-info-label">Phone / WhatsApp</div>
                <a href="tel:+255753225961" className="ct-info-value">+255 753 225 961</a>
              </div>
            </div>

            <div className="ct-info-card">
              <div className="ct-info-icon" style={{ background: 'rgba(251,191,36,.08)', color: '#fbbf24' }}>
                <i className="fas fa-map-marker-alt" />
              </div>
              <div>
                <div className="ct-info-label">Location</div>
                <span className="ct-info-value">Dodoma, Tanzania</span>
              </div>
            </div>

            <div className="ct-info-card">
              <div className="ct-info-icon" style={{ background: 'rgba(139,92,246,.08)', color: '#a78bfa' }}>
                <i className="fas fa-clock" />
              </div>
              <div>
                <div className="ct-info-label">Availability</div>
                <span className="ct-info-value">Open to freelance & full-time</span>
              </div>
            </div>

            <div className="ct-social-label">Connect With Me</div>
            <div className="ct-socials">
              <a href="https://www.linkedin.com/in/elia-william-mariki/" className="ct-social" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://github.com/dawillygene" className="ct-social" aria-label="GitHub">
                <i className="fab fa-github" />
              </a>
              <a href="#" className="ct-social" aria-label="Twitter">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://www.instagram.com/dawillygene/" className="ct-social" aria-label="Instagram">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.tiktok.com/@dawilly_gene" className="ct-social" aria-label="TikTok">
                <i className="fab fa-tiktok" />
              </a>
            </div>
          </div>

          {/* Right – Form */}
          <div className="ct-form-panel fade-in" style={{ animationDelay: '.25s' }}>
            <form onSubmit={e => e.preventDefault()}>
              <div className="ct-form-row">
                <input type="text" placeholder="Your Name" required className="ct-input" suppressHydrationWarning />
                <input type="email" placeholder="Your Email" required className="ct-input" suppressHydrationWarning />
              </div>
              <input type="text" placeholder="Subject" required className="ct-input" suppressHydrationWarning />
              <textarea rows="6" placeholder="Tell me about your project..." required className="ct-textarea" suppressHydrationWarning />
              <button type="submit" className="ct-submit">
                Send Message
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;