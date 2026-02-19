import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'About | Dawilly Gene & Genelabs Software Tz',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0a0a0f', minHeight: '100vh', paddingTop: '5rem' }}>
        <AboutContent />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

function AboutContent() {
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 18px', borderRadius: 9999, background: 'rgba(56,189,248,.06)', border: '1px solid rgba(56,189,248,.12)', fontSize: '.72rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#38bdf8', marginBottom: '1.2rem' }}>
          About
        </span>
        <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#e2e8f0', marginBottom: '.8rem', letterSpacing: '-.03em' }}>
          Dawilly Gene & Genelabs Software Tz
        </h1>
        <p style={{ color: 'rgba(255,255,255,.4)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
          Founder, engineer, educator — building technology that makes a difference in East Africa and beyond.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {[
          { icon: '🧑‍💻', title: 'Who is Dawilly Gene?', body: 'Dawilly Gene (Elia William Mariki) is a Tanzanian software engineer and IoT specialist with 5+ years of experience building production-grade systems. He is the Founder & Lead Engineer at Genelabs Software Tz, operating fully under dawillygene.com.' },
          { icon: '🏢', title: 'Genelabs Software Tz', body: 'Established in 2024, Genelabs Software Tz is a Tanzanian software firm delivering web, mobile, IoT, and cloud solutions. The company is built on a culture of quality, innovation, and impact — solving real problems for real people.' },
          { icon: '🌍', title: 'Mission & Vision', body: 'To democratize access to technology in East Africa by building accessible, scalable solutions and mentoring the next generation of African software engineers and developers.' },
        ].map((card, i) => (
          <div key={i} style={{ padding: '2rem', borderRadius: 20, background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.06)', backdropFilter: 'blur(12px)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{card.icon}</div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '.8rem' }}>{card.title}</h3>
            <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.7 }}>{card.body}</p>
          </div>
        ))}
      </div>

      <div style={{ padding: '2rem', borderRadius: 20, background: 'rgba(56,189,248,.04)', border: '1px solid rgba(56,189,248,.1)', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '1.5rem' }}>Quick Facts</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem' }}>
          {[
            { label: 'Full Name', value: 'Elia William Mariki' },
            { label: 'Brand Name', value: 'Dawilly Gene' },
            { label: 'Company', value: 'Genelabs Software Tz' },
            { label: 'Location', value: 'Dodoma, Tanzania' },
            { label: 'Email', value: 'contact@dawillygene.com' },
            { label: 'Phone', value: '+255 753 225 961' },
            { label: 'Availability', value: 'Freelance & Full-time' },
            { label: 'Est.', value: '2024' },
          ].map((fact, i) => (
            <div key={i}>
              <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.3)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 4 }}>{fact.label}</div>
              <div style={{ fontSize: '.9rem', color: '#e2e8f0', fontWeight: 600 }}>{fact.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
