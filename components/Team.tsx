'use client';

import React, { useEffect, useState } from 'react';
import { getCollection, COLLECTIONS } from '@/lib/firestore';

const TEAM_CSS = `
  .team-section { position:relative; padding:7rem 0; background:#0a0a0f; overflow:hidden; }
  .team-section::before {
    content:''; position:absolute; top:-200px; left:50%; transform:translateX(-50%);
    width:700px; height:500px; border-radius:50%;
    background:radial-gradient(ellipse, rgba(56,189,248,.04) 0%, transparent 70%);
    pointer-events:none;
  }
  .team-header { text-align:center; margin-bottom:4rem; }
  .team-badge {
    display:inline-flex; align-items:center; gap:8px;
    padding:6px 18px; border-radius:9999px;
    background:rgba(56,189,248,.06); border:1px solid rgba(56,189,248,.12);
    font-size:.72rem; font-weight:600; letter-spacing:.1em;
    text-transform:uppercase; color:#38bdf8; margin-bottom:1.2rem;
  }
  .team-title { font-size:clamp(2rem,4vw,3rem); font-weight:800; letter-spacing:-.03em; color:#e2e8f0; margin-bottom:.8rem; }
  .team-subtitle { font-size:1rem; color:rgba(255,255,255,.35); max-width:520px; margin:0 auto; line-height:1.6; }
  .team-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:1.5rem; }
  @media(max-width:768px){ .team-grid{ grid-template-columns:1fr; } }

  .team-card {
    position:relative; padding:2rem; border-radius:20px;
    background:rgba(255,255,255,.02); border:1px solid rgba(255,255,255,.05);
    backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
    transition:all .45s cubic-bezier(.4,0,.2,1); overflow:hidden;
    text-align:center;
  }
  .team-card.founder { border-color:rgba(56,189,248,.2); background:rgba(56,189,248,.03); }
  .team-card:hover { transform:translateY(-6px); border-color:rgba(56,189,248,.15); box-shadow:0 12px 40px rgba(0,0,0,.4); }

  .team-avatar {
    width:80px; height:80px; border-radius:50%; margin:0 auto 1rem;
    display:flex; align-items:center; justify-content:center;
    font-size:1.8rem; font-weight:800; color:#fff;
    background:linear-gradient(135deg,#2563eb,#7c3aed);
    box-shadow:0 0 0 4px rgba(10,10,15,.8), 0 0 0 6px rgba(56,189,248,.2);
    position:relative;
  }
  .team-avatar img { width:100%; height:100%; border-radius:50%; object-fit:cover; }
  .team-founder-badge {
    position:absolute; bottom:-4px; right:-4px;
    background:linear-gradient(135deg,#38bdf8,#818cf8);
    border-radius:50%; width:24px; height:24px;
    display:flex; align-items:center; justify-content:center;
    font-size:.6rem; border:2px solid #0a0a0f;
  }
  .team-name { font-size:1.1rem; font-weight:700; color:#e2e8f0; margin-bottom:.3rem; }
  .team-role { font-size:.82rem; color:#38bdf8; font-weight:600; margin-bottom:.8rem; }
  .team-bio { font-size:.8rem; color:rgba(255,255,255,.4); line-height:1.65; margin-bottom:1rem; }
  .team-skills { display:flex; flex-wrap:wrap; gap:.35rem; justify-content:center; margin-bottom:1rem; }
  .team-skill { padding:3px 10px; border-radius:5px; font-size:.68rem; font-weight:600; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.06); color:rgba(255,255,255,.5); }
  .team-socials { display:flex; justify-content:center; gap:.5rem; }
  .team-social { width:36px; height:36px; border-radius:10px; display:flex; align-items:center; justify-content:center; background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.06); color:rgba(255,255,255,.4); font-size:.85rem; text-decoration:none; transition:all .3s; }
  .team-social:hover { background:rgba(56,189,248,.08); border-color:rgba(56,189,248,.2); color:#38bdf8; transform:translateY(-2px); }
`;

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
    email: 'contact@dawillygene.com',
    bio: 'Founder of Genelabs Software Tz. Full-stack developer and IoT specialist with 5+ years building production-grade systems in Tanzania.',
    skills: ['React', 'Next.js', 'Node.js', 'Java', 'Python', 'IoT', 'Laravel'],
    isFounder: true,
    order: 0,
    social: {
      github: 'https://github.com/dawillygene',
      linkedin: 'https://www.linkedin.com/in/elia-william-mariki/',
      instagram: '#',
    },
  },
];

export default function TeamSection() {
  const [team, setTeam] = useState<TeamMember[]>(defaultTeam);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCollection<TeamMember>(COLLECTIONS.TEAM)
      .then((data) => {
        if (data.length > 0) {
          setTeam(data.sort((a, b) => (a.order ?? 99) - (b.order ?? 99)));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const initials = (name: string) =>
    name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <>
      <style>{TEAM_CSS}</style>
      <section className="team-section" id="team">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <div className="team-header">
            <div className="team-badge">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
              Our Team
            </div>
            <h2 className="team-title">Meet the Team</h2>
            <p className="team-subtitle">
              The talented engineers and designers behind Genelabs Software Tz.
            </p>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', color: 'rgba(255,255,255,.3)', padding: '4rem' }}>Loading team…</div>
          ) : (
            <div className="team-grid">
              {team.map((member) => (
                <div
                  key={member.id}
                  className={`team-card fade-in ${member.isFounder ? 'founder' : ''}`}
                >
                  <div className="team-avatar">
                    {member.image ? (
                      <img src={member.image} alt={member.name} />
                    ) : (
                      initials(member.name)
                    )}
                    {member.isFounder && (
                      <div className="team-founder-badge">⭐</div>
                    )}
                  </div>
                  <div className="team-name">{member.name}</div>
                  {member.realName && (
                    <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.25)', marginBottom: '.3rem' }}>
                      {member.realName}
                    </div>
                  )}
                  <div className="team-role">{member.role}</div>
                  {member.bio && <p className="team-bio">{member.bio}</p>}
                  {member.skills && member.skills.length > 0 && (
                    <div className="team-skills">
                      {member.skills.slice(0, 5).map((s, i) => (
                        <span key={i} className="team-skill">{s}</span>
                      ))}
                    </div>
                  )}
                  {member.social && (
                    <div className="team-socials">
                      {member.social.github && (
                        <a href={member.social.github} className="team-social" target="_blank" rel="noreferrer" aria-label="GitHub">
                          <i className="fab fa-github" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="team-social" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      )}
                      {member.social.instagram && (
                        <a href={member.social.instagram} className="team-social" target="_blank" rel="noreferrer" aria-label="Instagram">
                          <i className="fab fa-instagram" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="team-social" target="_blank" rel="noreferrer" aria-label="Twitter">
                          <i className="fab fa-twitter" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
