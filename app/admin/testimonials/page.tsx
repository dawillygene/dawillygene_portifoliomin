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
  .testi-card { padding:1.3rem 1.5rem; border-radius:12px; background:rgba(255,255,255,.02); border:1px solid rgba(255,255,255,.05); margin-bottom:.8rem; }
  .testi-header { display:flex; align-items:center; gap:.75rem; margin-bottom:.6rem; }
  .testi-avatar { width:38px; height:38px; border-radius:50%; background:linear-gradient(135deg,#2563eb,#7c3aed); display:flex; align-items:center; justify-content:center; font-size:.82rem; font-weight:700; color:#fff; flex-shrink:0; }
  .testi-author { flex:1; }
  .testi-name { font-size:.88rem; font-weight:700; color:#e2e8f0; }
  .testi-role { font-size:.72rem; color:rgba(255,255,255,.35); }
  .testi-stars { color:#fbbf24; font-size:.75rem; letter-spacing:1px; }
  .testi-quote { font-size:.8rem; color:rgba(255,255,255,.45); font-style:italic; line-height:1.5; }
  .testi-actions { display:flex; gap:.5rem; margin-top:.8rem; justify-content:flex-end; }
  .star-btn { background:none; border:none; font-size:1.1rem; cursor:pointer; padding:0 2px; transition:transform .15s; }
  .star-btn:hover { transform:scale(1.2); }
`;

interface Testimonial {
  id: string;
  author: string;
  company?: string;
  content: string;
  stars: number;
  initials?: string;
  published?: boolean;
  order?: number;
}

const emptyForm = (): Omit<Testimonial,'id'> => ({
  author: '', company: '', content: '', stars: 5,
  initials: '', published: true, order: 99,
});

export default function AdminTestimonialsPage() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm());
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState('');

  const load = () =>
    getCollection<Testimonial>(COLLECTIONS.TESTIMONIALS).then(d =>
      setItems(d.sort((a,b) => (a.order??99) - (b.order??99)))
    );

  useEffect(() => { load(); }, []);

  const openNew = () => { setForm(emptyForm()); setEditingId(null); setShowForm(true); };
  const openEdit = (t: Testimonial) => {
    setForm({ author:t.author, company:t.company, content:t.content, stars:t.stars, initials:t.initials, published:t.published, order:t.order });
    setEditingId(t.id); setShowForm(true);
  };

  const handleSave = async () => {
    const payload = { ...form, initials: form.initials || form.author.slice(0,2).toUpperCase() };
    setSaving(true);
    try {
      if (editingId) { await updateDocument(COLLECTIONS.TESTIMONIALS, editingId, payload); setSaved('Testimonial updated!'); }
      else { await addDocument(COLLECTIONS.TESTIMONIALS, payload); setSaved('Testimonial added!'); }
      await load(); setShowForm(false); setEditingId(null);
    } finally { setSaving(false); setTimeout(() => setSaved(''), 3000); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this testimonial?')) return;
    await deleteDocument(COLLECTIONS.TESTIMONIALS, id);
    await load();
  };

  const StarSelector = () => (
    <div style={{ display:'flex', gap:4, alignItems:'center' }}>
      {[1,2,3,4,5].map(n => (
        <button key={n} className="star-btn" type="button" onClick={() => setForm(f=>({...f,stars:n}))}>
          {n <= form.stars ? '⭐' : '☆'}
        </button>
      ))}
      <span style={{ fontSize:'.75rem', color:'rgba(255,255,255,.35)', marginLeft:6 }}>{form.stars}/5</span>
    </div>
  );

  return (
    <AdminLayout pageTitle="Testimonials">
      <style>{CSS}</style>
      <div className="admin-form">
        {saved && <div className="admin-success">✅ {saved}</div>}
        <div className="add-btn-row">
          <button className="admin-btn admin-btn-primary" onClick={openNew}>+ Add Testimonial</button>
        </div>

        {showForm && (
          <div className="admin-section">
            <div className="admin-section-title">{editingId ? 'Edit Testimonial' : 'New Testimonial'}</div>

            <div className="admin-grid-2">
              <div className="admin-field">
                <label className="admin-label">Client Name</label>
                <input className="admin-input" value={form.author} onChange={e=>setForm(f=>({...f,author:e.target.value}))} placeholder="e.g. Sarah Johnson" />
              </div>
              <div className="admin-field">
                <label className="admin-label">Company / Role</label>
                <input className="admin-input" value={form.company??''} onChange={e=>setForm(f=>({...f,company:e.target.value}))} placeholder="e.g. CEO at TechCorp" />
              </div>
              <div className="admin-field">
                <label className="admin-label">Initials (auto-generated if empty)</label>
                <input className="admin-input" value={form.initials??''} onChange={e=>setForm(f=>({...f,initials:e.target.value.toUpperCase()}))} placeholder="e.g. SJ" maxLength={2} />
              </div>
              <div className="admin-field">
                <label className="admin-label">Rating</label>
                <StarSelector />
              </div>
            </div>

            <div className="admin-field">
              <label className="admin-label">Testimonial / Quote</label>
              <textarea className="admin-textarea" value={form.content} onChange={e=>setForm(f=>({...f,content:e.target.value}))} placeholder="What did this client say about working with you?…" style={{ minHeight:'110px' }} />
            </div>

            <div className="admin-field">
              <label className="admin-label">Display Order</label>
              <input className="admin-input" type="number" value={form.order??99} onChange={e=>setForm(f=>({...f,order:Number(e.target.value)}))} style={{ maxWidth:'120px' }} />
            </div>

            <div style={{ display:'flex', alignItems:'center', gap:'.75rem', marginBottom:'1rem' }}>
              <input type="checkbox" id="published" style={{ width:18, height:18, accentColor:'#38bdf8', cursor:'pointer' }} checked={!!form.published} onChange={e=>setForm(f=>({...f,published:e.target.checked}))} />
              <label htmlFor="published" style={{ fontSize:'.85rem', color:'rgba(255,255,255,.6)', cursor:'pointer' }}>Published (visible on website)</label>
            </div>

            <div style={{ display:'flex', gap:'.75rem' }}>
              <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={saving}>{saving ? 'Saving…' : 'Save Testimonial'}</button>
              <button className="admin-btn admin-btn-ghost" onClick={()=>setShowForm(false)}>Cancel</button>
            </div>
          </div>
        )}

        <div className="admin-section">
          <div className="admin-section-title">All Testimonials ({items.length})</div>
          {items.length === 0 && <p style={{ color:'rgba(255,255,255,.3)', fontSize:'.85rem' }}>No testimonials yet.</p>}
          {items.map(t => (
            <div key={t.id} className="testi-card">
              <div className="testi-header">
                <div className="testi-avatar">{t.initials || t.author.slice(0,2).toUpperCase()}</div>
                <div className="testi-author">
                  <div className="testi-name">{t.author}</div>
                  <div className="testi-role">{t.company}</div>
                </div>
                <div>
                  <div className="testi-stars">{'★'.repeat(t.stars)}{'☆'.repeat(5-t.stars)}</div>
                  {!t.published && <span style={{ fontSize:'.6rem', padding:'2px 7px', borderRadius:4, background:'rgba(244,63,94,.08)', color:'#f43f5e', border:'1px solid rgba(244,63,94,.15)' }}>Draft</span>}
                </div>
              </div>
              <div className="testi-quote">&ldquo;{t.content}&rdquo;</div>
              <div className="testi-actions">
                <button className="admin-btn admin-btn-ghost" onClick={()=>openEdit(t)}>Edit</button>
                <button className="admin-btn admin-btn-danger" onClick={()=>handleDelete(t.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
