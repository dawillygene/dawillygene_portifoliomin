'use client';

import React, { useEffect, useState } from 'react';
import { getCollection, COLLECTIONS } from '@/lib/firestore';

interface TeamMember {
  id: string;
  name: string;
  realName?: string;
  role: string;
  email?: string;
  bio?: string;
  skills?: string[];
  isFounder?: boolean;
  image?: string;
  order?: number;
  social?: { github?: string; linkedin?: string; instagram?: string; twitter?: string };
}

const defaultTeam: TeamMember[] = [
  {
    id: 'founder',
    name: 'Dawilly Gene',
    realName: 'Elia William Mariki',
    role: 'Founder & Lead Software Engineer',
    email: 'dawillygene@gmail.com',
    bio: 'Founder of Genelabs Software Tz. Full-stack developer and IoT specialist with 5+ years building production-grade systems in Tanzania.',
    skills: ['React', 'Next.js', 'Node.js', 'Java', 'Python', 'IoT', 'Laravel'],
    isFounder: true,
    order: 0,
    social: {
      github: 'https://github.com/dawillygene',
      linkedin: 'https://www.linkedin.com/in/elia-william-mariki/',
      instagram: 'https://www.instagram.com/dawillygene',
    },
  },
];

export default function TeamSection() {
  const [team, setTeam] = useState<TeamMember[]>(defaultTeam);

  useEffect(() => {
    getCollection<TeamMember>(COLLECTIONS.TEAM)
      .then((data) => {
        if (data.length > 0) setTeam(data.sort((a, b) => (a.order ?? 99) - (b.order ?? 99)));
      })
      .catch(() => { });
  }, []);

  const initials = (name: string) =>
    name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <section className="section" id="team" aria-label="Team" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            Our Team
          </div>
          <h2 className="fade-in">Meet the Team</h2>
          <p className="fade-in">The talented engineers and designers behind Genelabs Software Tz.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {team.map((member) => (
            <div
              key={member.id}
              className="glass-card fade-in"
              style={{
                textAlign: 'center',
                padding: '2rem',
                borderColor: member.isFounder ? 'var(--border-focus)' : undefined,
                background: member.isFounder ? 'var(--accent-light)' : undefined,
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: '#fff',
                  background: 'var(--accent-gradient)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {member.image ? (
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                ) : (
                  initials(member.name)
                )}
                {member.isFounder && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      right: -2,
                      background: 'var(--accent-gradient)',
                      borderRadius: '50%',
                      width: 22,
                      height: 22,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '.7rem',
                      border: '2px solid var(--bg-primary)',
                      color: '#fff',
                    }}
                  >
                    <i className="fa-solid fa-star" />
                  </div>
                )}
              </div>

              <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '.25rem' }}>{member.name}</div>
              {member.realName && (
                <div style={{ fontSize: '.72rem', color: 'var(--text-quaternary)', marginBottom: '.25rem' }}>{member.realName}</div>
              )}
              <div style={{ fontSize: '.82rem', color: 'var(--accent-text)', fontWeight: 600, marginBottom: '.8rem' }}>{member.role}</div>
              {member.bio && (
                <p style={{ fontSize: '.8rem', color: 'var(--text-tertiary)', lineHeight: 1.65, marginBottom: '1rem' }}>{member.bio}</p>
              )}
              {member.skills && member.skills.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem', justifyContent: 'center', marginBottom: '1rem' }}>
                  {member.skills.slice(0, 5).map((s, i) => (
                    <span key={i} className="tag">{s}</span>
                  ))}
                </div>
              )}
              {member.social && (
                <div style={{ display: 'flex', justifyContent: 'center', gap: '.5rem' }}>
                  {member.social.github && (
                    <a href={member.social.github} target="_blank" rel="noreferrer" aria-label="GitHub"
                      style={{
                        width: 36, height: 36, borderRadius: 'var(--radius-md)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'var(--bg-glass)', border: '1px solid var(--border-primary)',
                        color: 'var(--text-tertiary)', fontSize: '.85rem', textDecoration: 'none',
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      <i className="fab fa-github" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
                      style={{
                        width: 36, height: 36, borderRadius: 'var(--radius-md)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'var(--bg-glass)', border: '1px solid var(--border-primary)',
                        color: 'var(--text-tertiary)', fontSize: '.85rem', textDecoration: 'none',
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a href={member.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
                      style={{
                        width: 36, height: 36, borderRadius: 'var(--radius-md)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'var(--bg-glass)', border: '1px solid var(--border-primary)',
                        color: 'var(--text-tertiary)', fontSize: '.85rem', textDecoration: 'none',
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"
                      style={{
                        width: 36, height: 36, borderRadius: 'var(--radius-md)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'var(--bg-glass)', border: '1px solid var(--border-primary)',
                        color: 'var(--text-tertiary)', fontSize: '.85rem', textDecoration: 'none',
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
