'use client';

import React from 'react';

const BackToTop = () => (
  <>
    <style>{`
      .btt-btn {
        position: fixed; bottom: 2rem; right: 2rem;
        width: 46px; height: 46px;
        border-radius: var(--radius-lg);
        display: flex; align-items: center; justify-content: center;
        background: var(--bg-glass);
        border: 1px solid var(--border-primary);
        backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
        color: var(--text-tertiary);
        text-decoration: none;
        opacity: 0; pointer-events: none;
        transition: all .4s cubic-bezier(.4,0,.2,1);
        z-index: 100; cursor: pointer;
        box-shadow: var(--shadow-md);
      }
      .btt-btn:hover {
        background: var(--accent-light);
        border-color: var(--border-focus);
        color: var(--accent-text);
        transform: translateY(-3px);
        box-shadow: var(--shadow-lg);
      }
      .btt-btn svg { transition: transform .3s; }
      .btt-btn:hover svg { transform: translateY(-2px); }
    `}</style>
    <a href="#" className="btt-btn" id="backToTop" aria-label="Back to top">
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </a>
  </>
);

export default BackToTop;