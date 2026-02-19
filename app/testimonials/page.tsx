import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Testimonials | Genelabs Software Tz',
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0a0a0f', minHeight: '100vh', paddingTop: '5rem' }}>
        <Testimonials />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
