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
  .admin-grid-3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem; }
  @media(max-width:640px){ .admin-grid-2,.admin-grid-3{ grid-template-columns:1fr; } }
  .add-btn-row { display:flex; justify-content:flex-end; margin-bottom:1.5rem; }
  .item-card { padding:1.2rem 1.5rem; border-radius:12px; background:rgba(255,255,255,.02); border:1px solid rgba(255,255,255,.05); margin-bottom:.8rem; display:flex; align-items:flex-start; gap:1rem; }
  .item-icon { width:42px; height:42px; border-radius:10px; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:1.1rem; }
  .item-info { flex:1; }
  .item-title { font-size:.92rem; font-weight:700; color:#e2e8f0; margin-bottom:.25rem; }
  .item-sub { font-size:.75rem; color:rgba(255,255,255,.35); }
  .item-actions { display:flex; gap:.5rem; flex-shrink:0; align-items:center; }
  .admin-checkbox-row { display:flex; align-items:center; gap:.75rem; padding:.6rem 0; }
  .admin-checkbox { width:18px; height:18px; accent-color:#38bdf8; cursor:pointer; }
  .badge-preview { display:inline-flex; align-items:center; gap:.35rem; padding:3px 10px; border-radius:99px; font-size:.7rem; font-weight:700; }
`;

interface Project {
  id: string;
  title: string;
  description: string;
  badgeText?: string;
  badgeBg?: string;
  badgeColor?: string;
  icon?: string;
  iconColor?: string;
  skills: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  published?: boolean;
  order?: number;
}

const emptyForm = (): Omit<Project,'id'> => ({
  title: '', description: '', badgeText: '', badgeBg: 'rgba(56,189,248,.1)', badgeColor: '#38bdf8',
  icon: 'fas fa-code', iconColor: '#38bdf8',
  skills: [], link: '', github: '', featured: false, published: true, order: 99,
});

export default function AdminProjectsPage() {
  const [items, setItems] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm());
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState('');

  const load = () =>
    getCollection<Project>(COLLECTIONS.PROJECTS).then(d =>
      setItems(d.sort((a, b) => (a.order ?? 99) - (b.order ?? 99)))
    );

  useEffect(() => { load(); }, []);

  const openNew = () => { setForm(emptyForm()); setEditingId(null); setShowForm(true); };
  const openEdit = (p: Project) => {
    setForm({ title:p.title, description:p.description, badgeText:p.badgeText, badgeBg:p.badgeBg, badgeColor:p.badgeColor, icon:p.icon, iconColor:p.iconColor, skills:p.skills, link:p.link, github:p.github, featured:p.featured, published:p.published, order:p.order });
    setEditingId(p.id); setShowForm(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (editingId) { await updateDocument(COLLECTIONS.PROJECTS, editingId, form); setSaved('Project updated!'); }
      else { await addDocument(COLLECTIONS.PROJECTS, form); setSaved('Project added!'); }
      await load(); setShowForm(false); setEditingId(null);
    } finally { setSaving(false); setTimeout(() => setSaved(''), 3000); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this project?')) return;
    await deleteDocument(COLLECTIONS.PROJECTS, id);
    await load();
  };

  return (
    <AdminLayout pageTitle="Projects">
      <style>{CSS}</style>
      <div className="admin-form">
        {saved && <div className="admin-success"><i className="fa-solid fa-circle-check" style={{marginRight:"0.4rem"}} /> {saved}</div>}
        <div className="add-btn-row">
          <button className="admin-btn admin-btn-primary" onClick={openNew}>+ Add Project</button>
        </div>

        {showForm && (
          <div className="admin-section">
            <div className="admin-section-title">{editingId ? 'Edit Project' : 'New Project'}</div>

            <div className="admin-grid-2">
              <div className="admin-field">
                <label className="admin-label">Project Title</label>
                <input className="admin-input" value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))} placeholder="e.g. E-Commerce Platform" />
              </div>
              <div className="admin-field">
                <label className="admin-label">Badge Text</label>
                <input className="admin-input" value={form.badgeText??''} onChange={e=>setForm(f=>({...f,badgeText:e.target.value}))} placeholder="e.g. Full-Stack, Mobile App" />
              </div>
            </div>

            <div className="admin-field">
              <label className="admin-label">Description</label>
              <textarea className="admin-textarea" value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))} placeholder="Brief project description…" />
            </div>

            <div className="admin-grid-3">
              <div className="admin-field">
                <label className="admin-label">Icon Class</label>
                <input className="admin-input" value={form.icon??''} onChange={e=>setForm(f=>({...f,icon:e.target.value}))} placeholder="fas fa-code" />
              </div>
              <div className="admin-field">
                <label className="admin-label">Icon Color</label>
                <input className="admin-input" type="color" value={form.iconColor??'#38bdf8'} onChange={e=>setForm(f=>({...f,iconColor:e.target.value}))} />
              </div>
              <div className="admin-field">
                <label className="admin-label">Badge Color</label>
                <input className="admin-input" type="color" value={form.badgeColor??'#38bdf8'} onChange={e=>setForm(f=>({...f,badgeColor:e.target.value}))} />
              </div>
            </div>

            <div className="admin-grid-2">
              <div className="admin-field">
                <label className="admin-label">Live URL</label>
                <input className="admin-input" value={form.link??''} onChange={e=>setForm(f=>({...f,link:e.target.value}))} placeholder="https://project.com" />
              </div>
              <div className="admin-field">
                <label className="admin-label">GitHub URL</label>
                <input className="admin-input" value={form.github??''} onChange={e=>setForm(f=>({...f,github:e.target.value}))} placeholder="https://github.com/…" />
              </div>
            </div>

            <div className="admin-field">
              <label className="admin-label">Tech Stack / Skills (comma-separated)</label>
              <input className="admin-input" value={form.skills.join(', ')} onChange={e=>setForm(f=>({...f,skills:e.target.value.split(',').map(s=>s.trim()).filter(Boolean)}))} placeholder="React, TypeScript, Firebase, Tailwind" />
            </div>

            <div className="admin-field">
              <label className="admin-label">Display Order</label>
              <input className="admin-input" type="number" value={form.order??99} onChange={e=>setForm(f=>({...f,order:Number(e.target.value)}))} style={{ maxWidth:'120px' }} />
            </div>

            <div className="admin-checkbox-row">
              <input type="checkbox" id="featured" className="admin-checkbox" checked={!!form.featured} onChange={e=>setForm(f=>({...f,featured:e.target.checked}))} />
              <label htmlFor="featured" style={{ fontSize:'.85rem', color:'rgba(255,255,255,.6)', cursor:'pointer' }}>Featured project (shown prominently)</label>
            </div>
            <div className="admin-checkbox-row">
              <input type="checkbox" id="published" className="admin-checkbox" checked={!!form.published} onChange={e=>setForm(f=>({...f,published:e.target.checked}))} />
              <label htmlFor="published" style={{ fontSize:'.85rem', color:'rgba(255,255,255,.6)', cursor:'pointer' }}>Published (visible on website)</label>
            </div>

            <div style={{ display:'flex', gap:'.75rem', marginTop:'1rem' }}>
              <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={saving}>{saving ? 'Saving…' : 'Save Project'}</button>
              <button className="admin-btn admin-btn-ghost" onClick={()=>setShowForm(false)}>Cancel</button>
            </div>
          </div>
        )}

        <div className="admin-section">
          <div className="admin-section-title">All Projects ({items.length})</div>
          {items.length === 0 && <p style={{ color:'rgba(255,255,255,.3)', fontSize:'.85rem' }}>No projects yet.</p>}
          {items.map(p => (
            <div key={p.id} className="item-card">
              <div className="item-icon" style={{ background:'rgba(255,255,255,.04)' }}>
                <i className={p.icon ?? 'fas fa-code'} style={{ color: p.iconColor ?? '#38bdf8' }} />
              </div>
              <div className="item-info">
                <div className="item-title">
                  {p.title}
                  {p.featured && <span style={{ marginLeft:'.5rem', fontSize:'.65rem', padding:'2px 7px', borderRadius:4, background:'rgba(251,191,36,.1)', color:'#fbbf24', border:'1px solid rgba(251,191,36,.2)' }}>Featured</span>}
                  {!p.published && <span style={{ marginLeft:'.5rem', fontSize:'.65rem', padding:'2px 7px', borderRadius:4, background:'rgba(244,63,94,.1)', color:'#f43f5e', border:'1px solid rgba(244,63,94,.2)' }}>Draft</span>}
                </div>
                <div className="item-sub">{p.badgeText} · {p.skills?.slice(0,4).join(', ')}</div>
              </div>
              <div className="item-actions">
                <button className="admin-btn admin-btn-ghost" onClick={()=>openEdit(p)}>Edit</button>
                <button className="admin-btn admin-btn-danger" onClick={()=>handleDelete(p.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
