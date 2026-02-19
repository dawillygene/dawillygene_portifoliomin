'use client';

import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { getDocument, setDocument, COLLECTIONS } from '@/lib/firestore';

const CSS = `
  .admin-form { max-width:800px; }
  .admin-section { background:rgba(255,255,255,.02); border:1px solid rgba(255,255,255,.05); border-radius:16px; padding:1.5rem; margin-bottom:1.5rem; }
  .admin-section-title { font-size:.85rem; font-weight:700; color:#e2e8f0; letter-spacing:.04em; text-transform:uppercase; margin-bottom:1.2rem; padding-bottom:.75rem; border-bottom:1px solid rgba(255,255,255,.05); display:flex; align-items:center; gap:.5rem; }
  .admin-field { margin-bottom:1.2rem; }
  .admin-label { display:block; font-size:.75rem; font-weight:600; color:rgba(255,255,255,.45); letter-spacing:.04em; text-transform:uppercase; margin-bottom:.5rem; }
  .admin-input {
    width:100%; padding:.75rem 1rem; border-radius:10px;
    background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.06);
    color:#e2e8f0; font-size:.88rem; font-family:inherit;
    outline:none; transition:all .3s; box-sizing:border-box;
  }
  .admin-input::placeholder { color:rgba(255,255,255,.2); }
  .admin-input:focus { border-color:rgba(56,189,248,.3); background:rgba(255,255,255,.04); box-shadow:0 0 0 3px rgba(56,189,248,.06); }
  .admin-btn { padding:.65rem 1.4rem; border-radius:10px; border:none; font-weight:600; font-size:.82rem; cursor:pointer; transition:all .3s; }
  .admin-btn-primary { color:#fff; background:linear-gradient(135deg,#2563eb,#7c3aed); }
  .admin-btn-primary:hover:not(:disabled) { transform:translateY(-1px); box-shadow:0 4px 16px rgba(37,99,235,.4); }
  .admin-btn:disabled { opacity:.5; cursor:not-allowed; }
  .admin-success { background:rgba(52,211,153,.08); border:1px solid rgba(52,211,153,.2); border-radius:10px; padding:.75rem 1rem; font-size:.82rem; color:#34d399; margin-bottom:1.2rem; }
  .admin-grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
  @media(max-width:640px){ .admin-grid-2{ grid-template-columns:1fr; } }
  .contact-preview { background:rgba(56,189,248,.04); border:1px solid rgba(56,189,248,.1); border-radius:12px; padding:1.2rem 1.5rem; margin-bottom:1.2rem; }
  .contact-preview-item { display:flex; align-items:center; gap:.75rem; padding:.4rem 0; font-size:.82rem; color:rgba(255,255,255,.5); }
  .contact-preview-item i { color:#38bdf8; width:16px; text-align:center; }
`;

interface ContactData {
  email?: string;
  phone?: string;
  location?: string;
  availability?: string;
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
}

const defaults: ContactData = {
  email: 'contact@dawillygene.com',
  phone: '+255 753 225 961',
  location: 'Dodoma, Tanzania',
  availability: 'Available for freelance & full-time',
  social: {
    linkedin: 'https://linkedin.com/in/elia-william-mariki',
    github: 'https://github.com/dawillygene',
    twitter: '',
    instagram: '',
    youtube: '',
  },
};

export default function AdminContactPage() {
  const [data, setData] = useState<ContactData>(defaults);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    getDocument<ContactData>(COLLECTIONS.CONTACT, 'main').then(d => {
      if (d) setData({ ...defaults, ...d, social: { ...defaults.social, ...d.social } });
    });
  }, []);

  const set = (field: keyof ContactData, val: string) =>
    setData(d => ({ ...d, [field]: val }));

  const setSocial = (field: keyof NonNullable<ContactData['social']>, val: string) =>
    setData(d => ({ ...d, social: { ...d.social, [field]: val } }));

  const handleSave = async () => {
    setSaving(true);
    try {
      await setDocument(COLLECTIONS.CONTACT, 'main', data);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally { setSaving(false); }
  };

  return (
    <AdminLayout pageTitle="Contact Information">
      <style>{CSS}</style>
      <div className="admin-form">
        {saved && <div className="admin-success">✅ Contact info saved successfully!</div>}

        {/* Live Preview */}
        <div className="contact-preview">
          <div style={{ fontSize:'.7rem', fontWeight:700, color:'rgba(255,255,255,.3)', letterSpacing:'.05em', textTransform:'uppercase', marginBottom:'.6rem' }}>Live Preview</div>
          {data.email && <div className="contact-preview-item"><i className="fas fa-envelope" /> {data.email}</div>}
          {data.phone && <div className="contact-preview-item"><i className="fas fa-phone" /> {data.phone}</div>}
          {data.location && <div className="contact-preview-item"><i className="fas fa-map-marker-alt" /> {data.location}</div>}
          {data.availability && <div className="contact-preview-item"><i className="fas fa-clock" /> {data.availability}</div>}
        </div>

        <div className="admin-section">
          <div className="admin-section-title"><i className="fas fa-address-card" /> Primary Contact</div>
          <div className="admin-grid-2">
            <div className="admin-field">
              <label className="admin-label">Email Address</label>
              <input className="admin-input" type="email" value={data.email??''} onChange={e=>set('email',e.target.value)} placeholder="contact@dawillygene.com" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Phone Number</label>
              <input className="admin-input" type="tel" value={data.phone??''} onChange={e=>set('phone',e.target.value)} placeholder="+255 753 225 961" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Location</label>
              <input className="admin-input" value={data.location??''} onChange={e=>set('location',e.target.value)} placeholder="Dodoma, Tanzania" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Availability Message</label>
              <input className="admin-input" value={data.availability??''} onChange={e=>set('availability',e.target.value)} placeholder="Available for freelance & full-time" />
            </div>
          </div>
        </div>

        <div className="admin-section">
          <div className="admin-section-title"><i className="fas fa-share-alt" /> Social Media Links</div>
          <div className="admin-grid-2">
            <div className="admin-field">
              <label className="admin-label"><i className="fab fa-linkedin" style={{ marginRight:4 }} /> LinkedIn</label>
              <input className="admin-input" value={data.social?.linkedin??''} onChange={e=>setSocial('linkedin',e.target.value)} placeholder="https://linkedin.com/in/username" />
            </div>
            <div className="admin-field">
              <label className="admin-label"><i className="fab fa-github" style={{ marginRight:4 }} /> GitHub</label>
              <input className="admin-input" value={data.social?.github??''} onChange={e=>setSocial('github',e.target.value)} placeholder="https://github.com/username" />
            </div>
            <div className="admin-field">
              <label className="admin-label"><i className="fab fa-twitter" style={{ marginRight:4 }} /> Twitter / X</label>
              <input className="admin-input" value={data.social?.twitter??''} onChange={e=>setSocial('twitter',e.target.value)} placeholder="https://twitter.com/username" />
            </div>
            <div className="admin-field">
              <label className="admin-label"><i className="fab fa-instagram" style={{ marginRight:4 }} /> Instagram</label>
              <input className="admin-input" value={data.social?.instagram??''} onChange={e=>setSocial('instagram',e.target.value)} placeholder="@username or URL" />
            </div>
            <div className="admin-field">
              <label className="admin-label"><i className="fab fa-youtube" style={{ marginRight:4 }} /> YouTube</label>
              <input className="admin-input" value={data.social?.youtube??''} onChange={e=>setSocial('youtube',e.target.value)} placeholder="https://youtube.com/@channel" />
            </div>
          </div>
        </div>

        <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={saving} style={{ minWidth:160 }}>
          {saving ? 'Saving…' : '💾 Save Changes'}
        </button>
      </div>
    </AdminLayout>
  );
}
