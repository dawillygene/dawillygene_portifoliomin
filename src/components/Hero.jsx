import React from 'react';

const Hero = () => (
  <section className="hero" id="about">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center">
        <div className="hero-content w-full md:w-7/12 fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="title-highlight">Dawilly Gene</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8">
            Software Engineer + Full Stack Developer
          </h2>
          <p className="text-lg mb-8 text-gray-300 max-w-xl">
            I break down complex technical problems to create integrity-focused solutions that connect technologies and people.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">Get In Touch</a>
            <a href="#projects" className="btn-outline">View My Work</a>
          </div>
        </div>
        <div
          className="w-full md:w-5/12 flex justify-center mt-12 md:mt-0 fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="relative">
            <div className="float">
              <svg width="300" height="300" viewBox="0 0 300 300">
                <circle
                  cx="150"
                  cy="150"
                  r="100"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="10 5"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: 'var(--secondary)' }} />
                    <stop offset="100%" style={{ stopColor: 'var(--accent1)' }} />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-5xl font-bold mb-4 gradient-text">DG</div>
                <div className="text-sm text-gray-300">Full Stack Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="scroll-indicator">
      <div className="scroll-indicator-dot"></div>
      <span className="text-xs">Scroll Down</span>
    </div>
  </section>
);

export default Hero;