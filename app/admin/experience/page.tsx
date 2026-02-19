'use client';

import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { getCollection, addDocument, updateDocument, deleteDocument, COLLECTIONS } from '@/lib/firestore';

const CSS = `
  .admin-form { max-width:900px; }
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
  .admin-textarea { resize:vertical; min-height:90px; }
  .admin-btn { padding:.65rem 1.4rem; border-radius:10px; border:none; font-weight:600; font-size:.82rem; cursor:pointer; transition:all .3s; }
  .admin-btn-primary { color:#fff; background:linear-gradient(135deg,#2563eb,#7c3aed); }
  .admin-btn-primary:hover:not(:disabled) { transform:translateY(-1px); box-shadow:0 4px 16px rgba(37,99,235,.4); }
  .admin-btn-danger { background:rgba(244,63,94,.1); border:1px solid rgba(244,63,94,.2); color:#f43f5e; }
  .admin-btn-danger:hover { background:rgba(244,63,94,.2); }
  .admin-btn-ghost { background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); color:rgba(255,255,255,.6); }
  .admin-btn-ghost:hover { background:rgba(255,255,255,.08); color:#fff; }
  .admin-btn:disabled { opacity:.5; cursor:not-allowed; }
  .admin-success { background:rgba(52,211,153,.08); border:1px solid rgba(52,211,153,.2); border-radius:10px; padding:.75rem 1rem; font-size:.82rem; color:#34d399; margin-bottom:1.2rem; }
  .admin-grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
  @media(max-width:640px){ .admin-grid-2{ grid-template-columns:1fr; } }
  .add-btn-row { display:flex; justify-content:flex-end; margin-bottom:1.5rem; }
  .exp-card { padding:1.2rem 1.5rem; border-radius:12px; background:rgba(255,255,255,.02); border:1px solid rgba(255,255,255,.05); margin-bottom:.8rem; display:flex; align-items:flex-start; gap:1rem; }
  .exp-period { font-size:.65rem; font-weight:700; color:#38bdf8; padding:3px 10px; border-radius:99px; background:rgba(56,189,248,.08); border:1px solid rgba(56,189,248,.15); white-space:nowrap; flex-shrink:0; margin-top:.15rem; }
  .exp-info { flex:1; }
  .exp-title { font-size:.92rem; font-weight:700; color:#e2e8f0; margin-bottom:.15rem; }
  .exp-company { font-size:.78rem; color:rgba(255,255,255,.4); margin-bottom:.3rem; }
  .exp-desc { font-size:.75rem; color:rgba(255,255,255,.3); }
  .exp-actions { display:flex; gap:.5rem; flex-shrink:0; align-items:center; }
`;

interface Experience {
  id: string;
  period: string;
  title: string;
  company: string;
  description?: string;
  skills: string[];
  order?: number;
  published?: boolean;
}

const emptyForm = (): Omit<Experience,'id'> => ({
  period: '', title: '', company: '', description: '',
  skills: [], order: 99, published: true,
});

export default function AdminExperiencePage() {
  const [items, setItems] = useState<Experience[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm());
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState('');

  const load = () =>
    getCollection<Experience>(COLLECTIONS.EXPERIENCE).then(d =>
      setItems(d.sort((a, b) => (a.order ?? 99) - (b.order ?? 99)))
    );

  useEffect(() => { load(); }, []);

  const openNew = () => { setForm(emptyForm()); setEditingId(null); setShowForm(true); };
  const openEdit = (e: Experience) => {
    setForm({ period:e.period, title:e.title, company:e.company, description:e.description, skills:e.skills, order:e.order, published:e.published });
    setEditingId(e.id); setShowForm(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (editingId) { await updateDocument(COLLECTIONS.EXPERIENCE, editingId, form); setSaved('Experience updated!'); }
      else { await addDocument(COLLECTIONS.EXPERIENCE, form); setSaved('Experience added!'); }
      await load(); setShowForm(false); setEditingId(null);
    } finally { setSaving(false); setTimeout(() => setSaved(''), 3000); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this experience entry?')) return;
    await deleteDocument(COLLECTIONS.EXPERIENCE, id);
    await load();
  };

  return (
    <AdminLayout pageTitle="Experience">
      <style>{CSS}</style>
      <div className="admin-form">
        {saved && <div className="admin-success">✅ {saved}</div>}
        <div className="add-btn-row">
          <button className="admin-btn admin-btn-primary" onClick={openNew}>+ Add Experience</button>
        </div>

        {showForm && (
          <div className="admin-section">
            <div className="admin-section-title">{editingId ? 'Edit Entry' : 'New Experience Entry'}</div>

            <div className="admin-grid-2">
              <div className="admin-field">
                <label className="admin-label">Period / Dates</label>
                <input className="admin-input" value={form.period} onChange={e=>setForm(f=>({...f,period:e.target.value}))} placeholder="e.g. 2024 – Present" />
              </div>
              <div className="admin-field">
                <label className="admin-label">Job Title / Role</label>
                <input className="admin-input" value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))} placeholder="e.g. Lead Full-Stack Developer" />
              </div>
              <div className="admin-field">
                <label className="admin-label">Company / Organization</label>
                <input className="admin-input" value={form.company} onChange={e=>setForm(f=>({...f,company:e.target.value}))} placeholder="e.g. Genelabs Software Tz" />
              </div>
              <div className="admin-field">
                <label className="admin-label">Display Order</label>
                <input className="admin-input" type="number" value={form.order??99} onChange={e=>setForm(f=>({...f,order:Number(e.target.value)}))} />
              </div>
            </div>

            <div className="admin-field">
              <label className="admin-label">Description / Responsibilities</label>
              <textarea className="admin-textarea" value={form.description??''} onChange={e=>setForm(f=>({...f,description:e.target.value}))} placeholder="Describe your role, key responsibilities, and achievements…" />
            </div>

            <div className="admin-field">
              <label className="admin-label">Skills / Technologies (comma-separated)</label>
              <input className="admin-input" value={form.skills.join(', ')} onChange={e=>setForm(f=>({...f,skills:e.target.value.split(',').map(s=>s.trim()).filter(Boolean)}))} placeholder="React, Node.js, Firebase, PostgreSQL" />
            </div>

            <div style={{ display:'flex', alignItems:'center', gap:'.75rem', marginBottom:'1rem' }}>
              <input type="checkbox" id="published" style={{ width:18, height:18, accentColor:'#38bdf8', cursor:'pointer' }} checked={!!form.published} onChange={e=>setForm(f=>({...f,published:e.target.checked}))} />
              <label htmlFor="published" style={{ fontSize:'.85rem', color:'rgba(255,255,255,.6)', cursor:'pointer' }}>Published (visible on website)</label>
            </div>

            <div style={{ display:'flex', gap:'.75rem' }}>
              <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={saving}>{saving ? 'Saving…' : 'Save Entry'}</button>
              <button className="admin-btn admin-btn-ghost" onClick={()=>setShowForm(false)}>Cancel</button>
            </div>
          </div>
        )}

        <div className="admin-section">
          <div className="admin-section-title">Experience Entries ({items.length})</div>
          {items.length === 0 && <p style={{ color:'rgba(255,255,255,.3)', fontSize:'.85rem' }}>No experience entries yet.</p>}
          {items.map(e => (
            <div key={e.id} className="exp-card">
              <span className="exp-period">{e.period}</span>
              <div className="exp-info">
                <div className="exp-title">{e.title}</div>
                <div className="exp-company">{e.company}</div>
                {e.description && <div className="exp-desc">{e.description.slice(0,100)}{e.description.length>100?'…':''}</div>}
                {e.skills?.length > 0 && (
                  <div style={{ marginTop:'.4rem', display:'flex', gap:'.3rem', flexWrap:'wrap' }}>
                    {e.skills.slice(0,5).map((s,i)=>(
                      <span key={i} style={{ padding:'2px 7px', borderRadius:4, fontSize:'.6rem', background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.06)', color:'rgba(255,255,255,.35)' }}>{s}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="exp-actions">
                {!e.published && <span style={{ fontSize:'.6rem', padding:'2px 7px', borderRadius:4, background:'rgba(244,63,94,.08)', color:'#f43f5e', border:'1px solid rgba(244,63,94,.15)' }}>Draft</span>}
                <button className="admin-btn admin-btn-ghost" onClick={()=>openEdit(e)}>Edit</button>
                <button className="admin-btn admin-btn-danger" onClick={()=>handleDelete(e.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
