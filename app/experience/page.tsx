import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Experience | Dawilly Gene',
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '5rem' }}>
        <Experience />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
