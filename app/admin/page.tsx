'use client';

import AdminLayout from '@/components/AdminLayout';
import Link from 'next/link';

const cards = [
  { href: '/admin/hero', label: 'Hero / Banner', desc: 'Edit tagline, headline & CTA', icon: '🖥️', color: '#38bdf8' },
  { href: '/admin/services', label: 'Services', desc: 'Add, edit or remove services', icon: '⚙️', color: '#a78bfa' },
  { href: '/admin/projects', label: 'Projects', desc: 'Manage portfolio projects', icon: '📁', color: '#34d399' },
  { href: '/admin/experience', label: 'Experience', desc: 'Edit career timeline', icon: '🕐', color: '#fbbf24' },
  { href: '/admin/team', label: 'Team Members', desc: 'Add co-workers & colleagues', icon: '👥', color: '#f43f5e' },
  { href: '/admin/testimonials', label: 'Testimonials', desc: 'Manage client reviews', icon: '💬', color: '#6366f1' },
  { href: '/admin/contact', label: 'Contact Info', desc: 'Update email, phone & socials', icon: '📨', color: '#14b8a6' },
  { href: '/admin/company', label: 'Company Info', desc: 'Update Genelabs Software Tz details', icon: '🏢', color: '#fb923c' },
];

const DASH_CSS = `
  .dash-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:1.2rem; }
  .dash-card {
    display:flex; flex-direction:column; gap:.5rem;
    padding:1.5rem; border-radius:16px;
    background:rgba(255,255,255,.02); border:1px solid rgba(255,255,255,.05);
    text-decoration:none; transition:all .35s cubic-bezier(.4,0,.2,1);
    position:relative; overflow:hidden;
  }
  .dash-card:hover { transform:translateY(-4px); border-color:rgba(255,255,255,.1); box-shadow:0 12px 40px rgba(0,0,0,.4); background:rgba(255,255,255,.04); }
  .dash-card-icon { font-size:1.8rem; margin-bottom:.3rem; }
  .dash-card-label { font-size:1rem; font-weight:700; color:#e2e8f0; }
  .dash-card-desc { font-size:.78rem; color:rgba(255,255,255,.35); }
  .dash-card-arrow { position:absolute; top:1rem; right:1rem; color:rgba(255,255,255,.2); font-size:.8rem; transition:all .3s; }
  .dash-card:hover .dash-card-arrow { color:rgba(255,255,255,.6); transform:translate(3px,-3px); }
  .dash-welcome { padding:1.5rem; border-radius:16px; background:linear-gradient(135deg,rgba(37,99,235,.12),rgba(124,58,237,.08)); border:1px solid rgba(56,189,248,.12); margin-bottom:2rem; }
  .dash-welcome h2 { font-size:1.2rem; font-weight:700; color:#e2e8f0; margin-bottom:.4rem; }
  .dash-welcome p { font-size:.85rem; color:rgba(255,255,255,.45); }
`;

export default function AdminDashboard() {
  return (
    <AdminLayout pageTitle="Dashboard">
      <style>{DASH_CSS}</style>
      <div className="dash-welcome">
        <h2>👋 Welcome to Genelabs Admin Panel</h2>
        <p>Use the cards below or the sidebar to manage all content on <strong style={{ color: '#38bdf8' }}>dawillygene.com</strong>. All changes are saved directly to Firebase and reflect live on the website.</p>
      </div>

      <div className="dash-grid">
        {cards.map(card => (
          <Link key={card.href} href={card.href} className="dash-card">
            <div className="dash-card-icon">{card.icon}</div>
            <div className="dash-card-label" style={{ color: card.color }}>{card.label}</div>
            <div className="dash-card-desc">{card.desc}</div>
            <span className="dash-card-arrow">↗</span>
          </Link>
        ))}
      </div>
    </AdminLayout>
  );
}
