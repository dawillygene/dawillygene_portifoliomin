import React from 'react';

const BackToTop = () => (
  <a
    href="#"
    className="back-to-top"
    id="backToTop"
    style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      width: '3rem',
      height: '3rem',
      backgroundColor: 'var(--secondary)',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      opacity: 0,
      transition: 'all 0.3s ease',
      pointerEvents: 'none',
      zIndex: 1000,
    }}
  >
    <i className="fas fa-arrow-up"></i>
  </a>
);

export default BackToTop;