import React, { useEffect } from 'react';
import { useState } from 'react'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsScroll from './components/SkillsScroll';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeInObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeElements.forEach((el) => fadeInObserver.observe(el));

    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    const onScroll = () => {
      if (window.scrollY > 100) {
        navbar && navbar.classList.add('scrolled');
        if (backToTop) {
          backToTop.style.opacity = '1';
          backToTop.style.pointerEvents = 'auto';
        }
      } else {
        navbar && navbar.classList.remove('scrolled');
        if (backToTop) {
          backToTop.style.opacity = '0';
          backToTop.style.pointerEvents = 'none';
        }
      }
    };
    window.addEventListener('scroll', onScroll);

    const handleAnchorClick = (e) => {
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId && targetId.startsWith('#') && targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }
    };
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    fadeElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        element.classList.add('visible');
      }
    });

    const skillsScroll = document.querySelector('.skills-scroll');
    let skillsObserver;
    if (skillsScroll) {
      skillsObserver = new window.IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          } else {
            entry.target.style.animationPlayState = 'paused';
          }
        });
      });
      skillsObserver.observe(skillsScroll);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      fadeInObserver.disconnect();
      if (skillsObserver && skillsScroll) skillsObserver.unobserve(skillsScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <SkillsScroll />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
