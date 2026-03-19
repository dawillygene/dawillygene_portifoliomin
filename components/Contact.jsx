'use client';

import React from 'react';

const Contact = () => (
  <section className="section" id="contact" aria-label="Contact" style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Contact
        </div>
        <h2 className="fade-in">Let&apos;s Build Something Great</h2>
        <p className="fade-in">Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', maxWidth: 960, margin: '0 auto' }} className="ct-layout">
        {/* Info */}
        <div className="fade-in">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { icon: 'fa-solid fa-envelope', label: 'Email', value: 'contact@dawillygene.com', href: 'mailto:contact@dawillygene.com' },
              { icon: 'fa-solid fa-phone', label: 'Phone / WhatsApp', value: '+255 753 225 961', href: 'tel:+255753225961' },
              { icon: 'fa-solid fa-location-dot', label: 'Location', value: 'Dodoma, Tanzania' },
              { icon: 'fa-solid fa-circle-check', label: 'Availability', value: 'Open to freelance & full-time' },
            ].map((info, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1rem 1.2rem', display: 'flex', alignItems: 'center', gap: '.8rem' }}>
                <span style={{ width: 36, height: 36, borderRadius: 'var(--radius-sm)', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={info.icon} style={{ fontSize: '.9rem', color: 'var(--accent-text)' }} />
                </span>
                <div>
                  <div style={{ fontSize: '.7rem', fontWeight: 600, color: 'var(--text-quaternary)', letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 2 }}>
                    {info.label}
                  </div>
                  {info.href ? (
                    <a href={info.href} style={{ fontSize: '.85rem', fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color var(--transition-fast)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-text)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: '.85rem', fontWeight: 500, color: 'var(--text-secondary)' }}>{info.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
            {[
              { href: 'https://www.linkedin.com/in/elia-william-mariki/', label: 'LinkedIn', icon: 'fab fa-linkedin-in' },
              { href: 'https://github.com/dawillygene', label: 'GitHub', icon: 'fab fa-github' },
              { href: '#', label: 'Twitter', icon: 'fab fa-twitter' },
              { href: 'https://www.instagram.com/dawillygene/', label: 'Instagram', icon: 'fab fa-instagram' },
              { href: 'https://www.tiktok.com/@dawilly_gene', label: 'TikTok', icon: 'fab fa-tiktok' },
            ].map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                aria-label={s.label}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border-primary)',
                  color: 'var(--text-tertiary)',
                  fontSize: '.9rem',
                  textDecoration: 'none',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-light)';
                  e.currentTarget.style.borderColor = 'var(--border-focus)';
                  e.currentTarget.style.color = 'var(--accent-text)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-glass)';
                  e.currentTarget.style.borderColor = 'var(--border-primary)';
                  e.currentTarget.style.color = 'var(--text-tertiary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="glass-card fade-in" style={{ padding: '2rem' }}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="ct-form-row">
              <input type="text" placeholder="Your Name" required suppressHydrationWarning
                style={{
                  width: '100%', padding: '.85rem 1.2rem', borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)',
                  color: 'var(--text-primary)', fontSize: '.88rem', fontFamily: 'inherit',
                  transition: 'all var(--transition-fast)', outline: 'none',
                }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--border-focus)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-light)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--border-primary)'; e.target.style.boxShadow = 'none'; }}
              />
              <input type="email" placeholder="Your Email" required suppressHydrationWarning
                style={{
                  width: '100%', padding: '.85rem 1.2rem', borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)',
                  color: 'var(--text-primary)', fontSize: '.88rem', fontFamily: 'inherit',
                  transition: 'all var(--transition-fast)', outline: 'none',
                }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--border-focus)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-light)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--border-primary)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>
            <input type="text" placeholder="Subject" required suppressHydrationWarning
              style={{
                width: '100%', padding: '.85rem 1.2rem', borderRadius: 'var(--radius-md)',
                background: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)',
                color: 'var(--text-primary)', fontSize: '.88rem', fontFamily: 'inherit',
                transition: 'all var(--transition-fast)', outline: 'none', marginBottom: '1rem',
              }}
              onFocus={(e) => { e.target.style.borderColor = 'var(--border-focus)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-light)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'var(--border-primary)'; e.target.style.boxShadow = 'none'; }}
            />
            <textarea rows={6} placeholder="Tell me about your project..." required suppressHydrationWarning
              style={{
                width: '100%', padding: '.85rem 1.2rem', borderRadius: 'var(--radius-md)',
                background: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)',
                color: 'var(--text-primary)', fontSize: '.88rem', fontFamily: 'inherit',
                transition: 'all var(--transition-fast)', outline: 'none', marginBottom: '1rem',
                resize: 'vertical', minHeight: 140,
              }}
              onFocus={(e) => { e.target.style.borderColor = 'var(--border-focus)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-light)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'var(--border-primary)'; e.target.style.boxShadow = 'none'; }}
            />
            <button type="submit" className="btn-primary">
              Send Message
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>

    <style>{`
      @media (min-width: 768px) {
        .ct-layout { grid-template-columns: 1fr 1.2fr !important; }
      }
      @media (max-width: 600px) {
        .ct-form-row { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default Contact;
