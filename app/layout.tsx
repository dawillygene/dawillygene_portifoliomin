import type { Metadata, Viewport } from 'next';
import { Geist_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/lib/AuthContext';
import { ThemeProvider } from '@/components/ThemeProvider';
import FadeInObserver from '@/components/FadeInObserver';

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f7f4' },
    { media: '(prefers-color-scheme: dark)', color: '#111315' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://dawillygene.com'),
  title: {
    default: 'Dawilly Gene | Product Engineering Portfolio',
    template: '%s | Dawilly Gene',
  },
  description:
    'Software engineer building secure, scalable digital products for real business operations. Founder of GeneLabs Software Tz in Dodoma, Tanzania.',
  keywords: [
    'Elia William Mariki',
    'Elia Mariki',
    'elia-william-mariki',
    'dawillygene',
    'Dawilly Gene',
    'software engineer',
    'product engineering',
    'engineering standards',
    'admin dashboard systems',
    'backend API engineering',
    'business management platforms',
    'Tanzania',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: 'Elia William Mariki (Dawilly Gene)', url: 'https://dawillygene.com' }],
  creator: 'Elia William Mariki (Dawilly Gene)',
  alternates: {
    canonical: 'https://dawillygene.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dawillygene.com',
    siteName: 'Dawilly Gene',
    title: 'Dawilly Gene (Elia William Mariki) | Product Engineering Portfolio',
    description:
      'Company-style software engineering portfolio featuring products, case studies, standards, services, writing, and recruiter-friendly experience by Elia William Mariki.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dawilly Gene (Elia William Mariki) | Product Engineering Portfolio',
    description:
      'Secure, scalable software systems for real business operations.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
        {/* Prevent FOUC - apply theme before render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme-preference');var d=document.documentElement;if(t==='light'||t==='dark'){d.setAttribute('data-theme',t)}else if(window.matchMedia('(prefers-color-scheme:dark)').matches){d.setAttribute('data-theme','dark')}else{d.setAttribute('data-theme','light')}}catch(e){}})()`,
          }}
        />
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: "Dawilly Gene",
              alternateName: 'Elia William Mariki',
              url: 'https://dawillygene.com',
              jobTitle: 'Software Engineer',
              worksFor: {
                '@type': 'Organization',
                name: 'GeneLabs Software Tz',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dodoma',
                addressCountry: 'TZ',
              },
              sameAs: [
                'https://github.com/dawillygene',
                'https://www.linkedin.com/in/elia-william-mariki/',
                'https://www.instagram.com/dawillygene/',
                'https://www.tiktok.com/@dawilly_gene',
              ],
            }),
          }}
        />
      </head>
      <body className={`${playfairDisplay.variable} ${geistMono.variable} antialiased`}>
        {/* Invisible SEO/Accessibility Signature Block */}
        <span style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: '0',
        }}>
          Website developed and maintained by Elia William Mariki (dawillygene), a systems software engineer based in Dodoma, Tanzania.
        </span>
        <ThemeProvider>
          <FadeInObserver />
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
