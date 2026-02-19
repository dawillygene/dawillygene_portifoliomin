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
  .add-btn-row { display:flex; justify-content:flex-end; margin-bottom:1.5rem; }
  .member-card { padding:1.2rem 1.5rem; border-radius:12px; background:rgba(255,255,255,.02); border:1px solid rgba(255,255,255,.05); margin-bottom:.8rem; display:flex; align-items:flex-start; gap:1rem; }
  .member-card.founder-card { border-color:rgba(56,189,248,.2); background:rgba(56,189,248,.03); }
  .member-avatar { width:48px; height:48px; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:1.1rem; font-weight:800; color:#fff; background:linear-gradient(135deg,#2563eb,#7c3aed); }
  .member-info { flex:1; }
  .member-name { font-size:.95rem; font-weight:700; color:#e2e8f0; margin-bottom:.2rem; display:flex; align-items:center; gap:.5rem; }
  .member-role { font-size:.78rem; color:#38bdf8; margin-bottom:.3rem; }
  .member-email { font-size:.75rem; color:rgba(255,255,255,.3); }
  .member-actions { display:flex; gap:.5rem; flex-shrink:0; align-items:center; }
  .founder-badge { background:linear-gradient(135deg,#38bdf8,#818cf8); -webkit-background-clip:text; background-clip:text; color:transparent; font-size:.7rem; font-weight:700; }
  .admin-checkbox-row { display:flex; align-items:center; gap:.75rem; padding:.6rem 0; }
  .admin-checkbox { width:18px; height:18px; accent-color:#38bdf8; cursor:pointer; }
`;

interface TeamMember {
  id: string;
  name: string;
  realName?: string;
  role: string;
  email?: string;
  phone?: string;
  bio?: string;
  skills: string[];
  isFounder?: boolean;
  order?: number;
  published?: boolean;
  image?: string;
  social?: { github?: string; linkedin?: string; instagram?: string; twitter?: string };
}

const emptyForm = (): Omit<TeamMember,'id'> => ({
  name: '', realName: '', role: '', email: '', phone: '', bio: '',
  skills: [], isFounder: false, order: 99, published: true,
  social: { github: '', linkedin: '', instagram: '', twitter: '' },
});

export default function AdminTeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm());
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState('');

  const load = () =>
    getCollection<TeamMember>(COLLECTIONS.TEAM).then(d =>
      setMembers(d.sort((a, b) => (a.order ?? 99) - (b.order ?? 99)))
    );

  useEffect(() => { load(); }, []);

  const openNew = () => { setForm(emptyForm()); setEditingId(null); setShowForm(true); };
  const openEdit = (m: TeamMember) => {
    setForm({ name: m.name, realName: m.realName, role: m.role, email: m.email, phone: m.phone, bio: m.bio, skills: m.skills, isFounder: m.isFounder, order: m.order, published: m.published, image: m.image, social: m.social ?? {} });
    setEditingId(m.id); setShowForm(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (editingId) { await updateDocument(COLLECTIONS.TEAM, editingId, form); setSaved('Member updated!'); }
      else { await addDocument(COLLECTIONS.TEAM, form); setSaved('Member added!'); }
      await load();
      setShowForm(false); setEditingId(null);
    } finally {
      setSaving(false);
      setTimeout(() => setSaved(''), 3000);
    }
  };

  const handleDelete = async (id: string, isFounder?: boolean) => {
    if (isFounder) { alert('The founder account cannot be deleted.'); return; }
    if (!confirm('Remove this team member?')) return;
    await deleteDocument(COLLECTIONS.TEAM, id);
    await load();
  };

  const initials = (name: string) => name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase();

  return (
    <AdminLayout pageTitle="Team Members">
      <style>{CSS}</style>
      <div className="admin-form">
        {saved && <div className="admin-success">✅ {saved}</div>}

        <div className="add-btn-row">
          <button className="admin-btn admin-btn-primary" onClick={openNew}>+ Add Team Member</button>
        </div>

        {showForm && (
          <div className="admin-section">
            <div className="admin-section-title">{editingId ? 'Edit Member' : 'New Team Member'}</div>
            <div className="admin-grid-2">
              <div className="admin-field">
                <label className="admin-label">Display Name</label>
                <input className="admin-input" value={form.name} onChange={e => setForm(f=>({...f,name:e.target.value}))} placeholder="e.g. John Doe" />
              </div>
              <div className="admin-field">
                <label className="admin-label">Real Name (Optional)</label>
                <input className="admin-input" value={form.realName ?? ''} onChange={e => setForm(f=>({...f,realName:e.target.value}))} placeholder="Legal full name" />
              </div>
              <div className="admin-field">
                <label className="admin-label">Job Role / Title</label>
                <input className="admin-input" value={form.role} onChange={e => setForm(f=>({...f,role:e.target.value}))} placeholder="e.g. Frontend Developer" />
              </div>
              <div className="admin-field">
                <label className="admin-label">Email</label>
                <input className="admin-input" type="email" value={form.email ?? ''} onChange={e => setForm(f=>({...f,email:e.target.value}))} placeholder="email@example.com" />
              </div>
              <div className="admin-field">
                <label className="admin-label">Phone</label>
                <input className="admin-input" value={form.phone ?? ''} onChange={e => setForm(f=>({...f,phone:e.target.value}))} placeholder="+255 700 000 000" />
              </div>
              <div className="admin-field">
                <label className="admin-label">Display Order</label>
                <input className="admin-input" type="number" value={form.order ?? 99} onChange={e => setForm(f=>({...f,order:Number(e.target.value)}))} />
              </div>
            </div>
            <div className="admin-field">
              <label className="admin-label">Bio / Description</label>
              <textarea className="admin-textarea" value={form.bio ?? ''} onChange={e => setForm(f=>({...f,bio:e.target.value}))} placeholder="Brief description about this team member…" />
            </div>
            <div className="admin-field">
              <label className="admin-label">Skills (comma-separated)</label>
              <input className="admin-input" value={form.skills.join(', ')} onChange={e => setForm(f=>({...f,skills:e.target.value.split(',').map(s=>s.trim()).filter(Boolean)}))} placeholder="React, Node.js, Python, Docker" />
            </div>
            <div className="admin-section-title" style={{ marginTop:'1rem' }}>Social Links</div>
            <div className="admin-grid-2">
              <div className="admin-field">
                <label className="admin-label">GitHub URL</label>
                <input className="admin-input" value={form.social?.github ?? ''} onChange={e => setForm(f=>({...f,social:{...f.social,github:e.target.value}}))} placeholder="https://github.com/username" />
              </div>
              <div className="admin-field">
                <label className="admin-label">LinkedIn URL</label>
                <input className="admin-input" value={form.social?.linkedin ?? ''} onChange={e => setForm(f=>({...f,social:{...f.social,linkedin:e.target.value}}))} placeholder="https://linkedin.com/in/username" />
              </div>
              <div className="admin-field">
                <label className="admin-label">Instagram</label>
                <input className="admin-input" value={form.social?.instagram ?? ''} onChange={e => setForm(f=>({...f,social:{...f.social,instagram:e.target.value}}))} placeholder="@username" />
              </div>
              <div className="admin-field">
                <label className="admin-label">Twitter / X URL</label>
                <input className="admin-input" value={form.social?.twitter ?? ''} onChange={e => setForm(f=>({...f,social:{...f.social,twitter:e.target.value}}))} placeholder="https://twitter.com/username" />
              </div>
            </div>
            <div className="admin-checkbox-row">
              <input type="checkbox" id="isFounder" className="admin-checkbox" checked={!!form.isFounder} onChange={e => setForm(f=>({...f,isFounder:e.target.checked}))} />
              <label htmlFor="isFounder" style={{ fontSize:'.85rem', color:'rgba(255,255,255,.6)', cursor:'pointer' }}>Mark as Founder</label>
            </div>
            <div className="admin-checkbox-row">
              <input type="checkbox" id="published" className="admin-checkbox" checked={!!form.published} onChange={e => setForm(f=>({...f,published:e.target.checked}))} />
              <label htmlFor="published" style={{ fontSize:'.85rem', color:'rgba(255,255,255,.6)', cursor:'pointer' }}>Published (visible on website)</label>
            </div>
            <div style={{ display:'flex', gap:'.75rem', marginTop:'1rem' }}>
              <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={saving}>{saving ? 'Saving…' : 'Save Member'}</button>
              <button className="admin-btn admin-btn-ghost" onClick={()=>setShowForm(false)}>Cancel</button>
            </div>
          </div>
        )}

        <div className="admin-section">
          <div className="admin-section-title">Team Members ({members.length})</div>
          {members.length === 0 && <p style={{ color:'rgba(255,255,255,.3)', fontSize:'.85rem' }}>No team members yet. Click &quot;Add Team Member&quot; to begin.</p>}
          {members.map(m => (
            <div key={m.id} className={`member-card ${m.isFounder ? 'founder-card' : ''}`}>
              <div className="member-avatar">{initials(m.name)}</div>
              <div className="member-info">
                <div className="member-name">
                  {m.name}
                  {m.isFounder && <span className="founder-badge">★ Founder</span>}
                </div>
                <div className="member-role">{m.role}</div>
                {m.email && <div className="member-email">{m.email}</div>}
                {m.skills?.length > 0 && (
                  <div style={{ marginTop:'.4rem', display:'flex', gap:'.3rem', flexWrap:'wrap' }}>
                    {m.skills.slice(0,5).map((s,i)=>(
                      <span key={i} style={{ padding:'2px 7px', borderRadius:4, fontSize:'.62rem', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.06)', color:'rgba(255,255,255,.4)' }}>{s}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="member-actions">
                <button className="admin-btn admin-btn-ghost" onClick={()=>openEdit(m)}>Edit</button>
                <button className="admin-btn admin-btn-danger" onClick={()=>handleDelete(m.id, m.isFounder)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
