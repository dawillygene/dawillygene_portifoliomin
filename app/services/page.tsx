import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Services | Genelabs Software Tz',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0a0a0f', minHeight: '100vh', paddingTop: '5rem' }}>
        <Services />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
