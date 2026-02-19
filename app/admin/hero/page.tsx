'use client';

import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { getDocument, setDocument, COLLECTIONS } from '@/lib/firestore';

const FORM_CSS = `
  .admin-form { max-width:720px; }
  .admin-section { background:rgba(255,255,255,.02); border:1px solid rgba(255,255,255,.05); border-radius:16px; padding:1.5rem; margin-bottom:1.5rem; }
  .admin-section-title { font-size:.85rem; font-weight:700; color:#e2e8f0; letter-spacing:.04em; text-transform:uppercase; margin-bottom:1.2rem; padding-bottom:.75rem; border-bottom:1px solid rgba(255,255,255,.05); }
  .admin-field { margin-bottom:1.2rem; }
  .admin-label { display:block; font-size:.75rem; font-weight:600; color:rgba(255,255,255,.45); letter-spacing:.04em; text-transform:uppercase; margin-bottom:.5rem; }
  .admin-input, .admin-textarea {
    width:100%; padding:.75rem 1rem; border-radius:10px;
    background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.06);
    color:#e2e8f0; font-size:.88rem; font-family:inherit;
    outline:none; transition:all .3s; box-sizing:border-box;
  }
  .admin-input::placeholder, .admin-textarea::placeholder { color:rgba(255,255,255,.2); }
  .admin-input:focus, .admin-textarea:focus { border-color:rgba(56,189,248,.3); background:rgba(255,255,255,.04); box-shadow:0 0 0 3px rgba(56,189,248,.06); }
  .admin-textarea { resize:vertical; min-height:100px; }
  .admin-save-btn {
    padding:.75rem 2rem; border-radius:12px; border:none;
    font-weight:700; font-size:.9rem; color:#fff;
    background:linear-gradient(135deg,#2563eb,#7c3aed);
    cursor:pointer; transition:all .35s;
  }
  .admin-save-btn:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 6px 24px rgba(37,99,235,.4); }
  .admin-save-btn:disabled { opacity:.5; cursor:not-allowed; }
  .admin-success { background:rgba(52,211,153,.08); border:1px solid rgba(52,211,153,.2); border-radius:10px; padding:.75rem 1rem; font-size:.82rem; color:#34d399; margin-bottom:1.2rem; }
  .admin-grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
  @media(max-width:640px){ .admin-grid-2{ grid-template-columns:1fr; } }
`;

interface HeroData {
  tagline?: string;
  headline?: string;
  subHeadline?: string;
  ctaPrimary?: string;
  ctaPrimaryHref?: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
  stat1Value?: string; stat1Label?: string;
  stat2Value?: string; stat2Label?: string;
  stat3Value?: string; stat3Label?: string;
  statusBadge?: string;
}

export default function AdminHeroPage() {
  const [data, setData] = useState<HeroData>({
    tagline: 'Available for new projects',
    headline: 'I engineer systems that scale, last, and matter.',
    subHeadline: 'Software Engineer & Full-Stack Developer based in Dodoma, Tanzania.',
    ctaPrimary: 'Get In Touch', ctaPrimaryHref: '/contact',
    ctaSecondary: 'View My Work', ctaSecondaryHref: '/projects',
    stat1Value: '5+', stat1Label: 'Years Building',
    stat2Value: '30+', stat2Label: 'Projects Shipped',
    stat3Value: '100%', stat3Label: 'Client Satisfaction',
    statusBadge: 'Available for new projects',
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    getDocument<HeroData>(COLLECTIONS.HERO, 'main').then(d => { if (d) setData(d); });
  }, []);

  const handleChange = (key: keyof HeroData, val: string) =>
    setData(prev => ({ ...prev, [key]: val }));

  const handleSave = async () => {
    setSaving(true);
    try {
      await setDocument(COLLECTIONS.HERO, 'main', data);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout pageTitle="Hero / Banner">
      <style>{FORM_CSS}</style>
      <div className="admin-form">
        {saved && <div className="admin-success">✅ Hero section saved successfully!</div>}

        <div className="admin-section">
          <div className="admin-section-title">Status Badge</div>
          <div className="admin-field">
            <label className="admin-label">Badge Text</label>
            <input className="admin-input" value={data.statusBadge ?? ''} onChange={e => handleChange('statusBadge', e.target.value)} placeholder="Available for new projects" />
          </div>
        </div>

        <div className="admin-section">
          <div className="admin-section-title">Headlines</div>
          <div className="admin-field">
            <label className="admin-label">Main Headline</label>
            <textarea className="admin-textarea" value={data.headline ?? ''} onChange={e => handleChange('headline', e.target.value)} placeholder="I engineer systems that scale, last, and matter." />
          </div>
          <div className="admin-field">
            <label className="admin-label">Sub Headline</label>
            <textarea className="admin-textarea" value={data.subHeadline ?? ''} onChange={e => handleChange('subHeadline', e.target.value)} style={{ minHeight: 70 }} />
          </div>
        </div>

        <div className="admin-section">
          <div className="admin-section-title">Call to Action Buttons</div>
          <div className="admin-grid-2">
            <div className="admin-field">
              <label className="admin-label">Primary Button Text</label>
              <input className="admin-input" value={data.ctaPrimary ?? ''} onChange={e => handleChange('ctaPrimary', e.target.value)} />
            </div>
            <div className="admin-field">
              <label className="admin-label">Primary Button Link</label>
              <input className="admin-input" value={data.ctaPrimaryHref ?? ''} onChange={e => handleChange('ctaPrimaryHref', e.target.value)} />
            </div>
            <div className="admin-field">
              <label className="admin-label">Secondary Button Text</label>
              <input className="admin-input" value={data.ctaSecondary ?? ''} onChange={e => handleChange('ctaSecondary', e.target.value)} />
            </div>
            <div className="admin-field">
              <label className="admin-label">Secondary Button Link</label>
              <input className="admin-input" value={data.ctaSecondaryHref ?? ''} onChange={e => handleChange('ctaSecondaryHref', e.target.value)} />
            </div>
          </div>
        </div>

        <div className="admin-section">
          <div className="admin-section-title">Stats</div>
          <div className="admin-grid-2">
            {(['1','2','3'] as const).map(n => (
              <React.Fragment key={n}>
                <div className="admin-field">
                  <label className="admin-label">Stat {n} Value</label>
                  <input className="admin-input" value={(data as Record<string,string>)[`stat${n}Value`] ?? ''} onChange={e => handleChange(`stat${n}Value` as keyof HeroData, e.target.value)} placeholder="5+" />
                </div>
                <div className="admin-field">
                  <label className="admin-label">Stat {n} Label</label>
                  <input className="admin-input" value={(data as Record<string,string>)[`stat${n}Label`] ?? ''} onChange={e => handleChange(`stat${n}Label` as keyof HeroData, e.target.value)} placeholder="Years Building" />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <button className="admin-save-btn" onClick={handleSave} disabled={saving}>
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
      </div>
    </AdminLayout>
  );
}
