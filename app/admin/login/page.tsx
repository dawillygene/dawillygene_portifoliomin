'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';

const LOGIN_CSS = `
  .login-page { min-height:100vh; background:#0a0a0f; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; }
  .login-page::before { content:''; position:absolute; width:600px; height:600px; top:-10%; left:50%; transform:translateX(-50%); border-radius:50%; background:radial-gradient(circle, rgba(56,189,248,.06) 0%, transparent 70%); pointer-events:none; }
  .login-card {
    width:100%; max-width:420px; padding:2.5rem;
    border-radius:24px;
    background:rgba(255,255,255,.02);
    border:1px solid rgba(255,255,255,.06);
    backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px);
    position:relative; z-index:1;
  }
  .login-logo { text-align:center; margin-bottom:2rem; }
  .login-logo-text { font-size:1.8rem; font-weight:800; letter-spacing:-.03em; background:linear-gradient(135deg,#38bdf8,#818cf8); -webkit-background-clip:text; background-clip:text; color:transparent; }
  .login-logo-sub { font-size:.72rem; color:rgba(255,255,255,.3); letter-spacing:.1em; text-transform:uppercase; margin-top:.3rem; }
  .login-title { font-size:1.3rem; font-weight:700; color:#e2e8f0; margin-bottom:.5rem; }
  .login-sub { font-size:.85rem; color:rgba(255,255,255,.35); margin-bottom:2rem; }
  .login-label { display:block; font-size:.75rem; font-weight:600; color:rgba(255,255,255,.5); letter-spacing:.04em; text-transform:uppercase; margin-bottom:.5rem; }
  .login-input {
    width:100%; padding:.85rem 1.2rem; border-radius:12px;
    background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.06);
    color:#e2e8f0; font-size:.9rem; font-family:inherit;
    outline:none; transition:all .3s; margin-bottom:1.2rem;
    box-sizing:border-box;
  }
  .login-input::placeholder { color:rgba(255,255,255,.2); }
  .login-input:focus { border-color:rgba(56,189,248,.3); background:rgba(255,255,255,.05); box-shadow:0 0 0 3px rgba(56,189,248,.06); }
  .login-btn {
    width:100%; padding:.9rem; border-radius:12px; border:none;
    font-weight:700; font-size:.9rem; color:#fff;
    background:linear-gradient(135deg,#2563eb,#7c3aed);
    cursor:pointer; transition:all .35s;
  }
  .login-btn:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 8px 30px rgba(37,99,235,.4); }
  .login-btn:disabled { opacity:.5; cursor:not-allowed; }
  .login-error { background:rgba(244,63,94,.08); border:1px solid rgba(244,63,94,.2); border-radius:10px; padding:.75rem 1rem; font-size:.82rem; color:#f43f5e; margin-bottom:1.2rem; }
`;

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      router.push('/admin');
    } catch {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{LOGIN_CSS}</style>
      <div className="login-page">
        <div className="login-card">
          <div className="login-logo">
            <div className="login-logo-text">Genelabs</div>
            <div className="login-logo-sub">Software Tz — Admin Panel</div>
          </div>
          <h1 className="login-title">Welcome back</h1>
          <p className="login-sub">Sign in to manage your website content.</p>

          {error && <div className="login-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <label className="login-label">Email</label>
            <input
              type="email"
              className="login-input"
              placeholder="admin@dawillygene.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <label className="login-label">Password</label>
            <input
              type="password"
              className="login-input"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
