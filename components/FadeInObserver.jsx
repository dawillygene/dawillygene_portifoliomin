'use client';

import { useEffect } from 'react';

/**
 * Global IntersectionObserver for `.fade-in` elements.
 * Mounted once in the root layout so every page gets reveal animations.
 */
export default function FadeInObserver() {
  useEffect(() => {
    const observe = () => {
      const elements = document.querySelectorAll('.fade-in:not(.visible)');
      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
      );

      elements.forEach((el) => {
        // Immediately reveal elements already in viewport
        if (el.getBoundingClientRect().top <= window.innerHeight) {
          el.classList.add('visible');
        } else {
          observer.observe(el);
        }
      });

      return observer;
    };

    // Initial observe
    let observer = observe();

    // Re-observe on route changes (MutationObserver catches new .fade-in elements)
    const mutation = new MutationObserver(() => {
      observer?.disconnect();
      observer = observe();
    });

    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutation.disconnect();
    };
  }, []);

  return null;
}
