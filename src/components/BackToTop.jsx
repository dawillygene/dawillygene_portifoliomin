import React from 'react';

const BTT_CSS = `
  .btt-btn {
    position: fixed; bottom: 2rem; right: 2rem;
    width: 48px; height: 48px;
    border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,.04);
    border: 1px solid rgba(255,255,255,.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    color: rgba(255,255,255,.6);
    text-decoration: none;
    opacity: 0;
    pointer-events: none;
    transition: all .4s cubic-bezier(.4,0,.2,1);
    z-index: 100;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(0,0,0,.3);
  }
  .btt-btn:hover {
    background: rgba(56,189,248,.1);
    border-color: rgba(56,189,248,.25);
    color: #38bdf8;
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(56,189,248,.15), 0 4px 20px rgba(0,0,0,.3);
  }
  .btt-btn svg {
    transition: transform .3s;
  }
  .btt-btn:hover svg {
    transform: translateY(-2px);
  }
`;

const BackToTop = () => (
  <>
    <style>{BTT_CSS}</style>
    <a href="#" className="btt-btn" id="backToTop" aria-label="Back to top">
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </a>
  </>
);

export default BackToTop;