'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';

const ADMIN_CSS = `
  .admin-layout { display:flex; min-height:100vh; background:#0a0a0f; color:#e2e8f0; font-family:var(--font-geist-sans,sans-serif); }
  .admin-sidebar {
    width:240px; flex-shrink:0;
    background:rgba(255,255,255,.02);
    border-right:1px solid rgba(255,255,255,.05);
    display:flex; flex-direction:column;
    padding:1.5rem 0; position:fixed; top:0; left:0; height:100vh; z-index:100;
    transition:transform .3s;
  }
  .admin-sidebar-logo {
    padding:0 1.5rem 1.5rem;
    border-bottom:1px solid rgba(255,255,255,.05);
    margin-bottom:1rem;
  }
  .admin-logo-text {
    font-size:1.1rem; font-weight:800; letter-spacing:-.02em;
    background:linear-gradient(135deg,#38bdf8,#818cf8);
    -webkit-background-clip:text; background-clip:text; color:transparent;
  }
  .admin-logo-sub { font-size:.65rem; color:rgba(255,255,255,.3); letter-spacing:.05em; text-transform:uppercase; }
  .admin-nav-group { padding:0 .75rem; margin-bottom:.5rem; }
  .admin-nav-label { font-size:.6rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:rgba(255,255,255,.25); padding:.5rem .75rem; }
  .admin-nav-link {
    display:flex; align-items:center; gap:.75rem;
    padding:.6rem .75rem; border-radius:10px;
    font-size:.82rem; font-weight:500; color:rgba(255,255,255,.5);
    text-decoration:none; transition:all .25s; margin-bottom:2px;
  }
  .admin-nav-link:hover { background:rgba(255,255,255,.04); color:rgba(255,255,255,.9); }
  .admin-nav-link.active { background:rgba(56,189,248,.08); color:#38bdf8; border:1px solid rgba(56,189,248,.1); }
  .admin-nav-link svg { flex-shrink:0; }
  .admin-sidebar-footer { margin-top:auto; padding:1rem 1.5rem; border-top:1px solid rgba(255,255,255,.04); }
  .admin-logout-btn {
    display:flex; align-items:center; gap:.6rem; width:100%;
    padding:.6rem .75rem; border-radius:10px;
    font-size:.82rem; font-weight:500; color:rgba(255,255,255,.4);
    background:none; border:none; cursor:pointer; transition:all .25s;
  }
  .admin-logout-btn:hover { background:rgba(244,63,94,.08); color:#f43f5e; }
  .admin-main { margin-left:240px; flex:1; padding:2rem; min-height:100vh; }
  .admin-topbar {
    display:flex; justify-content:space-between; align-items:center;
    margin-bottom:2rem; padding-bottom:1.5rem;
    border-bottom:1px solid rgba(255,255,255,.05);
  }
  .admin-page-title { font-size:1.5rem; font-weight:800; color:#e2e8f0; letter-spacing:-.02em; }
  .admin-user-chip {
    display:flex; align-items:center; gap:.5rem;
    padding:.4rem .8rem; border-radius:9999px;
    background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.06);
    font-size:.78rem; color:rgba(255,255,255,.5);
  }
  .admin-dot { width:7px; height:7px; border-radius:50%; background:#34d399; box-shadow:0 0 8px rgba(52,211,153,.5); }
  @media(max-width:768px){
    .admin-sidebar{ transform:translateX(-100%); }
    .admin-main{ margin-left:0; }
  }
`;

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, exact: true },
  { href: '/admin/hero', label: 'Hero / Banner', icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg> },
  { href: '/admin/services', label: 'Services', icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
  { href: '/admin/projects', label: 'Projects', icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg> },
  { href: '/admin/experience', label: 'Experience', icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> },
  { href: '/admin/team', label: 'Team Members', icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg> },
  { href: '/admin/testimonials', label: 'Testimonials', icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg> },
  { href: '/admin/contact', label: 'Contact Info', icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
  { href: '/admin/company', label: 'Company Info', icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0H5m14 0H3"/></svg> },
];

export default function AdminLayout({ children, pageTitle }: { children: React.ReactNode; pageTitle?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAdmin, loading, logout } = useAuth();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) router.push('/admin/login');
  }, [user, isAdmin, loading, router]);

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.4)' }}>
      Loading…
    </div>
  );

  if (!user || !isAdmin) return null;

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  const title = pageTitle ?? navItems.find(n => isActive(n.href, n.exact))?.label ?? 'Admin';

  return (
    <>
      <style>{ADMIN_CSS}</style>
      <div className="admin-layout">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <div className="admin-sidebar-logo">
            <div className="admin-logo-text">Genelabs Admin</div>
            <div className="admin-logo-sub">Content Manager</div>
          </div>

          <div className="admin-nav-group">
            <div className="admin-nav-label">Navigation</div>
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`admin-nav-link ${isActive(item.href, item.exact) ? 'active' : ''}`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>

          <div className="admin-nav-group" style={{ marginTop: '.5rem' }}>
            <div className="admin-nav-label">Quick Links</div>
            <Link href="/" className="admin-nav-link" target="_blank">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              View Website
            </Link>
          </div>

          <div className="admin-sidebar-footer">
            <button className="admin-logout-btn" onClick={logout}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="admin-main">
          <div className="admin-topbar">
            <div className="admin-page-title">{title}</div>
            <div className="admin-user-chip">
              <div className="admin-dot" />
              {user.email}
            </div>
          </div>
          {children}
        </main>
      </div>
    </>
  );
}
