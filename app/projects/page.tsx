import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Projects | Genelabs Software Tz',
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0a0a0f', minHeight: '100vh', paddingTop: '5rem' }}>
        <Projects />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
