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
  .admin-textarea { resize:vertical; min-height:80px; }
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
  .item-card { padding:1.2rem 1.5rem; border-radius:12px; background:rgba(255,255,255,.02); border:1px solid rgba(255,255,255,.05); margin-bottom:.8rem; display:flex; align-items:flex-start; justify-content:space-between; gap:1rem; }
  .item-card-info { flex:1; }
  .item-card-title { font-size:.95rem; font-weight:700; color:#e2e8f0; margin-bottom:.3rem; }
  .item-card-sub { font-size:.78rem; color:rgba(255,255,255,.35); }
  .item-card-actions { display:flex; gap:.5rem; flex-shrink:0; }
  .add-btn-row { display:flex; justify-content:flex-end; margin-bottom:1.5rem; }
  .toggle-chip { padding:3px 10px; border-radius:6px; font-size:.68rem; font-weight:600; }
  .chip-green { background:rgba(52,211,153,.1); color:#34d399; border:1px solid rgba(52,211,153,.2); }
  .chip-red { background:rgba(244,63,94,.1); color:#f43f5e; border:1px solid rgba(244,63,94,.2); }
`;

interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon?: string;
  iconColor?: string;
  order?: number;
  published?: boolean;
}

const emptyForm = (): Omit<Service,'id'> => ({
  title: '', description: '', tags: [], icon: 'fas fa-code', iconColor: '#38bdf8', order: 99, published: true,
});

export default function AdminServicesPage() {
  const [items, setItems] = useState<Service[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm());
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState('');

  const load = () =>
    getCollection<Service>(COLLECTIONS.SERVICES).then(d =>
      setItems(d.sort((a, b) => (a.order ?? 99) - (b.order ?? 99)))
    );

  useEffect(() => { load(); }, []);

  const openNew = () => { setForm(emptyForm()); setEditingId(null); setShowForm(true); };
  const openEdit = (item: Service) => { setForm({ title: item.title, description: item.description, tags: item.tags, icon: item.icon, iconColor: item.iconColor, order: item.order, published: item.published }); setEditingId(item.id); setShowForm(true); };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (editingId) {
        await updateDocument(COLLECTIONS.SERVICES, editingId, form);
        setSaved('Service updated!');
      } else {
        await addDocument(COLLECTIONS.SERVICES, form);
        setSaved('Service added!');
      }
      await load();
      setShowForm(false);
      setEditingId(null);
    } finally {
      setSaving(false);
      setTimeout(() => setSaved(''), 3000);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this service?')) return;
    await deleteDocument(COLLECTIONS.SERVICES, id);
    await load();
  };

  return (
    <AdminLayout pageTitle="Services">
      <style>{CSS}</style>
      <div className="admin-form">
        {saved && <div className="admin-success"><i className="fa-solid fa-circle-check" style={{marginRight:"0.4rem"}} /> {saved}</div>}

        <div className="add-btn-row">
          <button className="admin-btn admin-btn-primary" onClick={openNew}>+ Add Service</button>
        </div>

        {showForm && (
          <div className="admin-section">
            <div className="admin-section-title">{editingId ? 'Edit Service' : 'New Service'}</div>
            <div className="admin-grid-2">
              <div className="admin-field">
                <label className="admin-label">Title</label>
                <input className="admin-input" value={form.title} onChange={e => setForm(f => ({...f, title: e.target.value}))} placeholder="Web Development" />
              </div>
              <div className="admin-field">
                <label className="admin-label">Icon (Font Awesome class)</label>
                <input className="admin-input" value={form.icon ?? ''} onChange={e => setForm(f => ({...f, icon: e.target.value}))} placeholder="fas fa-laptop-code" />
              </div>
              <div className="admin-field">
                <label className="admin-label">Icon Color</label>
                <input className="admin-input" type="color" value={form.iconColor ?? '#38bdf8'} onChange={e => setForm(f => ({...f, iconColor: e.target.value}))} />
              </div>
              <div className="admin-field">
                <label className="admin-label">Order (1-10)</label>
                <input className="admin-input" type="number" value={form.order ?? 99} onChange={e => setForm(f => ({...f, order: Number(e.target.value)}))} />
              </div>
            </div>
            <div className="admin-field">
              <label className="admin-label">Description</label>
              <textarea className="admin-textarea" value={form.description} onChange={e => setForm(f => ({...f, description: e.target.value}))} placeholder="What this service covers…" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Tags (comma-separated)</label>
              <input className="admin-input" value={form.tags.join(', ')} onChange={e => setForm(f => ({...f, tags: e.target.value.split(',').map(s=>s.trim()).filter(Boolean)}))} placeholder="React, Node.js, TypeScript" />
            </div>
            <div style={{ display:'flex', gap:'.75rem', marginTop:'.5rem' }}>
              <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
              <button className="admin-btn admin-btn-ghost" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </div>
        )}

        <div className="admin-section">
          <div className="admin-section-title">All Services ({items.length})</div>
          {items.length === 0 && <p style={{ color: 'rgba(255,255,255,.3)', fontSize: '.85rem' }}>No services yet. Add one above.</p>}
          {items.map(item => (
            <div key={item.id} className="item-card">
              <div className="item-card-info">
                <div className="item-card-title">{item.title}</div>
                <div className="item-card-sub">{item.description.slice(0, 90)}…</div>
                <div style={{ marginTop:'.5rem', display:'flex', gap:'.35rem', flexWrap:'wrap' }}>
                  {item.tags.slice(0,4).map((t,i)=>(
                    <span key={i} style={{ padding:'2px 8px', borderRadius:5, fontSize:'.65rem', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.06)', color:'rgba(255,255,255,.4)' }}>{t}</span>
                  ))}
                  <span className={`toggle-chip ${item.published ? 'chip-green' : 'chip-red'}`}>{item.published ? 'Published' : 'Hidden'}</span>
                </div>
              </div>
              <div className="item-card-actions">
                <button className="admin-btn admin-btn-ghost" onClick={() => openEdit(item)}>Edit</button>
                <button className="admin-btn admin-btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
