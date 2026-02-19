import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Contact | Genelabs Software Tz',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0a0a0f', minHeight: '100vh', paddingTop: '5rem' }}>
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
