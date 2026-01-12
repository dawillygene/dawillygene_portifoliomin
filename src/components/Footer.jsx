import React from 'react';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold mb-6 md:mb-0">
          <span style={{ color: 'var(--accent1)' }}>Dawilly</span>
          <span style={{ color: 'var(--secondary)' }}>Gene</span>
        </div>
        <div className="text-center md:text-right">
          <p className="text-gray-400 mb-2">
            © {new Date().getFullYear()} Dawilly Gene. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Software Engineer &amp; Full Stack Developer
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;