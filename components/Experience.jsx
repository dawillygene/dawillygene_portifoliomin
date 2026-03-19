'use client';

import React, { useState, useEffect } from 'react';
import { getCollection, COLLECTIONS } from '@/lib/firestore';

const DEFAULT_EXPERIENCES = [
  {
    period: '2024 — Present',
    title: 'Full Stack Developer',
    company: 'Dodoma University · Independent Projects',
    description: 'Architected and shipped full-stack web applications using modern frameworks. Built inventory systems, e-commerce platforms, and university management tools.',
    skills: ['Laravel', 'React', 'Node.js', 'MySQL', 'MongoDB'],
  },
  {
    period: '2023 — 2024',
    title: 'Mobile & Web App Developer',
    company: 'Independent',
    description: 'Built Android applications and full-stack web platforms using Vue, Express, and Spring Boot. Delivered task managers, blog platforms, and REST APIs.',
    skills: ['Java (Android)', 'Spring Boot', 'Vue.js', 'Express.js', 'Servlets'],
  },
  {
    period: '2022 — 2023',
    title: 'Software Engineer Intern',
    company: 'Dodoma University · Software Engineering',
    description: 'Integrated IoT devices with cloud-based dashboards. Developed APIs and real-time data visualization tools for sensor network monitoring.',
    skills: ['Node.js', 'React', 'MQTT', 'AWS IoT Core'],
  },
  {
    period: '2021 — 2022',
    title: 'Embedded Systems Developer',
    company: 'Arusha Technical College · Electronics & Telecom',
    description: 'Designed IoT prototypes including smart home automation systems and real-time sensor networks. Programmed microcontrollers and wireless communication protocols.',
    skills: ['Arduino', 'ESP32', 'C/C++', 'Bluetooth/Wi-Fi', 'IoT'],
  },
  {
    period: '2020 — 2021',
    title: 'Junior Electronics Developer',
    company: 'Arusha Technical College · Embedded Lab',
    description: 'Assisted in PCB design and embedded firmware development for low-power sensor devices. Conducted signal analysis and tested hardware components.',
    skills: ['PCB Design', 'Proteus', 'Keil uVision', 'UART', 'ADC'],
  },
  {
    period: '2019 — 2020',
    title: 'Electronics & IoT Hobbyist',
    company: 'Arusha Technical College · Electronics Lab 4',
    description: 'Built DIY electronics projects including weather stations, automated irrigation systems, and Bluetooth-controlled robots.',
    skills: ['Microcontrollers', 'Sensors', 'IoT', 'Python', 'Git'],
  },
];

const Experience = () => {
  const [experiences, setExperiences] = useState(DEFAULT_EXPERIENCES);

  useEffect(() => {
    getCollection(COLLECTIONS.EXPERIENCE)
      .then((data) => {
        const live = data.filter((e) => e.published !== false).sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
        if (live.length > 0) setExperiences(live);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="section" id="experience" aria-label="Experience" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Journey
          </div>
          <h2 className="fade-in">Experience & Growth</h2>
          <p className="fade-in">
            A timeline of continuous learning, building, and shipping real-world solutions.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto', paddingLeft: '2.5rem' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 11,
              top: 8,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(to bottom, var(--accent), rgba(139, 92, 246, 0.3), var(--border-secondary))',
              borderRadius: 1,
            }}
          />

          {experiences.map((exp, idx) => (
            <div key={idx} className="fade-in" style={{ position: 'relative', paddingBottom: idx === experiences.length - 1 ? 0 : '2rem' }}>
              {/* Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-2.5rem',
                  top: 6,
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  background: 'var(--bg-primary)',
                  border: '2px solid var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    boxShadow: '0 0 10px var(--accent)',
                  }}
                />
              </div>

              {/* Card */}
              <div className="glass-card" style={{ padding: '1.5rem 1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent-text)', marginBottom: '0.5rem' }}>
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {exp.period}
                </div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>{exp.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-quaternary)', marginBottom: '0.6rem' }}>{exp.company}</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', lineHeight: 1.65, marginBottom: '0.8rem' }}>
                  {exp.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {exp.skills.map((s, i) => (
                    <span key={i} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;