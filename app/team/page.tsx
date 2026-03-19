import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import TeamSection from '@/components/Team';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Team | Genelabs Software Tz',
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '5rem' }}>
        <TeamSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
