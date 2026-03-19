import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

interface PageShellProps {
  children: ReactNode;
  padded?: boolean;
}

export default function PageShell({ children, padded = true }: PageShellProps) {
  return (
    <>
      <Navbar />
      <main
        style={{
          background: 'var(--bg-primary)',
          minHeight: '100vh',
          paddingTop: padded ? '5rem' : '0',
        }}
      >
        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
