import React from 'react';

const Navbar = () => (
  <nav className="py-4" id="navbar">
    <div className="container flex justify-between items-center">
      <div className="text-2xl font-bold">
        <span style={{ color: 'var(--accent1)' }}>Dawilly</span>
        <span style={{ color: 'var(--secondary)' }}>Gene</span>
      </div>
      <div className="hidden md:flex space-x-6">
        <a href="#about" className="text-white hover:text-accent1 transition duration-300">About</a>
        <a href="#services" className="text-white hover:text-accent1 transition duration-300">Services</a>
        <a href="#skills" className="text-white hover:text-accent1 transition duration-300">Skills</a>
        <a href="#projects" className="text-white hover:text-accent1 transition duration-300">Projects</a>
        <a href="#experience" className="text-white hover:text-accent1 transition duration-300">Experience</a>
        <a href="#contact" className="text-white hover:text-accent1 transition duration-300">Contact</a>
      </div>
      <div className="md:hidden">
        <button className="mobile-menu-btn">
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;