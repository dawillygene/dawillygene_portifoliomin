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
  .admin-input, .admin-textarea {
    width:100%; padding:.75rem 1rem; border-radius:10px;
    background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.06);
    color:#e2e8f0; font-size:.88rem; font-family:inherit;
    outline:none; transition:all .3s; box-sizing:border-box;
  }
  .admin-input::placeholder, .admin-textarea::placeholder { color:rgba(255,255,255,.2); }
  .admin-input:focus, .admin-textarea:focus { border-color:rgba(56,189,248,.3); background:rgba(255,255,255,.04); box-shadow:0 0 0 3px rgba(56,189,248,.06); }
  .admin-textarea { resize:vertical; min-height:90px; }
  .admin-btn { padding:.65rem 1.4rem; border-radius:10px; border:none; font-weight:600; font-size:.82rem; cursor:pointer; transition:all .3s; }
  .admin-btn-primary { color:#fff; background:linear-gradient(135deg,#2563eb,#7c3aed); }
  .admin-btn-primary:hover:not(:disabled) { transform:translateY(-1px); box-shadow:0 4px 16px rgba(37,99,235,.4); }
  .admin-btn-sm { padding:.45rem 1rem; font-size:.75rem; border-radius:8px; }
  .admin-btn-ghost { background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); color:rgba(255,255,255,.6); }
  .admin-btn-danger { background:rgba(244,63,94,.1); border:1px solid rgba(244,63,94,.2); color:#f43f5e; }
  .admin-btn:disabled { opacity:.5; cursor:not-allowed; }
  .admin-success { background:rgba(52,211,153,.08); border:1px solid rgba(52,211,153,.2); border-radius:10px; padding:.75rem 1rem; font-size:.82rem; color:#34d399; margin-bottom:1.2rem; }
  .admin-grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
  .admin-grid-3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem; }
  @media(max-width:640px){ .admin-grid-2,.admin-grid-3{ grid-template-columns:1fr; } }
  .company-header { display:flex; align-items:center; gap:1rem; background:rgba(56,189,248,.03); border:1px solid rgba(56,189,248,.1); border-radius:12px; padding:1.2rem 1.5rem; margin-bottom:1.5rem; }
  .company-logo { width:52px; height:52px; border-radius:12px; background:linear-gradient(135deg,#2563eb,#7c3aed); display:flex; align-items:center; justify-content:center; font-size:1.3rem; font-weight:900; color:#fff; flex-shrink:0; }
  .company-meta { flex:1; }
  .company-name { font-size:1.1rem; font-weight:800; color:#e2e8f0; }
  .company-tagline { font-size:.78rem; color:#38bdf8; margin-top:.15rem; }
  .stat-row { display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem; }
  .stat-item { background:rgba(255,255,255,.02); border:1px solid rgba(255,255,255,.05); border-radius:10px; padding:.8rem 1rem; display:flex; flex-direction:column; gap:.3rem; }
  .stat-value { font-size:1.2rem; font-weight:800; color:#38bdf8; }
  .stat-label { font-size:.68rem; color:rgba(255,255,255,.35); }
  .stat-add-btn { display:flex; align-items:center; justify-content:center; border:1px dashed rgba(255,255,255,.1); border-radius:10px; padding:.8rem; cursor:pointer; color:rgba(255,255,255,.3); font-size:.78rem; gap:.5rem; background:none; transition:.2s; }
  .stat-add-btn:hover { border-color:rgba(56,189,248,.3); color:#38bdf8; }
`;

interface Stat { value: string; label: string; }
interface CompanyData {
  name?: string;
  founder?: string;
  tagline?: string;
  description?: string;
  established?: string;
  email?: string;
  phone?: string;
  location?: string;
  website?: string;
  stats?: Stat[];
}

const defaults: CompanyData = {
  name: 'Genelabs Software Tz',
  founder: 'Elia William Mariki (Dawilly Gene)',
  tagline: 'Building the future, one line at a time',
  description: 'Genelabs Software Tz is a software company founded by Dawilly Gene, delivering innovative digital solutions across web, mobile, AI and system integrations.',
  established: '2019',
  email: 'contact@dawillygene.com',
  phone: '+255 753 225 961',
  location: 'Dodoma, Tanzania',
  website: 'https://dawillygene.com',
  stats: [
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
  ],
};

export default function AdminCompanyPage() {
  const [data, setData] = useState<CompanyData>(defaults);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    getDocument<CompanyData>(COLLECTIONS.COMPANY, 'main').then(d => {
      if (d) setData({ ...defaults, ...d, stats: d.stats ?? defaults.stats });
    });
  }, []);

  const set = (field: keyof CompanyData, val: string) =>
    setData(d => ({ ...d, [field]: val }));

  const updateStat = (i: number, key: keyof Stat, val: string) =>
    setData(d => ({ ...d, stats: d.stats?.map((s,idx) => idx===i ? {...s,[key]:val} : s) ?? [] }));

  const addStat = () =>
    setData(d => ({ ...d, stats: [...(d.stats??[]), { value: '0+', label: 'New Metric' }] }));

  const removeStat = (i: number) =>
    setData(d => ({ ...d, stats: d.stats?.filter((_,idx)=>idx!==i) ?? [] }));

  const handleSave = async () => {
    setSaving(true);
    try {
      await setDocument(COLLECTIONS.COMPANY, 'main', data);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally { setSaving(false); }
  };

  return (
    <AdminLayout pageTitle="Company Info">
      <style>{CSS}</style>
      <div className="admin-form">
        {saved && <div className="admin-success">✅ Company info saved!</div>}

        {/* Header Preview */}
        <div className="company-header">
          <div className="company-logo">G</div>
          <div className="company-meta">
            <div className="company-name">{data.name || 'Company Name'}</div>
            <div className="company-tagline">{data.tagline || 'Your tagline here'}</div>
          </div>
        </div>

        <div className="admin-section">
          <div className="admin-section-title"><i className="fas fa-building" /> Brand Identity</div>
          <div className="admin-grid-2">
            <div className="admin-field">
              <label className="admin-label">Company Name</label>
              <input className="admin-input" value={data.name??''} onChange={e=>set('name',e.target.value)} placeholder="Genelabs Software Tz" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Founder</label>
              <input className="admin-input" value={data.founder??''} onChange={e=>set('founder',e.target.value)} placeholder="Elia William Mariki (Dawilly Gene)" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Tagline / Slogan</label>
              <input className="admin-input" value={data.tagline??''} onChange={e=>set('tagline',e.target.value)} placeholder="Building the future, one line at a time" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Year Established</label>
              <input className="admin-input" value={data.established??''} onChange={e=>set('established',e.target.value)} placeholder="2019" />
            </div>
          </div>
          <div className="admin-field">
            <label className="admin-label">About the Company</label>
            <textarea className="admin-textarea" value={data.description??''} onChange={e=>set('description',e.target.value)} placeholder="Brief company description…" style={{ minHeight:'100px' }} />
          </div>
        </div>

        <div className="admin-section">
          <div className="admin-section-title"><i className="fas fa-globe" /> Contact & Web</div>
          <div className="admin-grid-2">
            <div className="admin-field">
              <label className="admin-label">Company Email</label>
              <input className="admin-input" type="email" value={data.email??''} onChange={e=>set('email',e.target.value)} placeholder="contact@dawillygene.com" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Phone</label>
              <input className="admin-input" type="tel" value={data.phone??''} onChange={e=>set('phone',e.target.value)} placeholder="+255 753 225 961" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Location / HQ</label>
              <input className="admin-input" value={data.location??''} onChange={e=>set('location',e.target.value)} placeholder="Dodoma, Tanzania" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Website</label>
              <input className="admin-input" type="url" value={data.website??''} onChange={e=>set('website',e.target.value)} placeholder="https://dawillygene.com" />
            </div>
          </div>
        </div>

        <div className="admin-section">
          <div className="admin-section-title"><i className="fas fa-chart-bar" /> Stats / Highlights</div>
          <div className="stat-row" style={{ marginBottom:'1rem' }}>
            {data.stats?.map((s,i) => (
              <div key={i} className="stat-item">
                <input className="admin-input" value={s.value} onChange={e=>updateStat(i,'value',e.target.value)} placeholder="50+" style={{ padding:'.4rem .6rem', fontSize:'1rem', fontWeight:800, color:'#38bdf8' }} />
                <input className="admin-input" value={s.label} onChange={e=>updateStat(i,'label',e.target.value)} placeholder="Projects Done" style={{ padding:'.35rem .6rem', fontSize:'.7rem', color:'rgba(255,255,255,.4)' }} />
                <button className="admin-btn admin-btn-danger admin-btn-sm" style={{ marginTop:'.3rem' }} onClick={()=>removeStat(i)}>Remove</button>
              </div>
            ))}
            <button className="stat-add-btn" onClick={addStat}>
              <i className="fas fa-plus" /> Add Stat
            </button>
          </div>
        </div>

        <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={saving} style={{ minWidth:160 }}>
          {saving ? 'Saving…' : '💾 Save Changes'}
        </button>
      </div>
    </AdminLayout>
  );
}
