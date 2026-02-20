'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SkillsScroll from '@/components/SkillsScroll';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function HomeClient() {
  useEffect(() => {
    /* ── Scroll handler: navbar & BackToTop ── */
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    const onScroll = () => {
      const scrolled = window.scrollY > 80;
      navbar?.classList.toggle('scrolled', scrolled);
      if (backToTop) {
        backToTop.style.opacity = scrolled ? '1' : '0';
        backToTop.style.pointerEvents = scrolled ? 'auto' : 'none';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ── Smooth anchor scrolling ── */
    const handleAnchor = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('#') && href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
      }
    };
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((a) => a.addEventListener('click', handleAnchor));

    /* ── Cleanup ── */
    return () => {
      window.removeEventListener('scroll', onScroll);
      anchors.forEach((a) => a.removeEventListener('click', handleAnchor));
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
  );
}
