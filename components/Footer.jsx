import Link from 'next/link';
import { companyProfile, primaryNavigation } from '@/lib/siteContent';

const Footer = () => (
  <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-primary)' }}>
    <div className="container footer-shell">
      <div>
        <div className="brand-wordmark" style={{ marginBottom: '0.4rem' }}>
          {companyProfile.brandName}
        </div>
        <div className="brand-subtitle" style={{ marginBottom: '0.75rem' }}>
          {companyProfile.studioName}
        </div>
        <p style={{ maxWidth: 420 }}>
          Secure, scalable product engineering for teams that care about business value, operational reliability, and long-term maintainability.
        </p>
      </div>

      <div>
        <strong className="footer-heading">Quick Links</strong>
        <div className="footer-link-list">
          {primaryNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/resume">Resume</Link>
          <Link href="/labs">Labs</Link>
          <Link href="/docs">Docs</Link>
        </div>
      </div>

      <div>
        <strong className="footer-heading">Social</strong>
        <div className="footer-link-list">
          {companyProfile.socialLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div>
        <strong className="footer-heading">Contact</strong>
        <div className="footer-link-list">
          <a href={`mailto:${companyProfile.email}`}>{companyProfile.email}</a>
          <a href={`tel:${companyProfile.phone.replace(/\s+/g, '')}`}>{companyProfile.phone}</a>
          <span>{companyProfile.location}</span>
          <span>{companyProfile.availability}</span>
        </div>
      </div>
    </div>

    <div className="container footer-bottom">
      <p>© {new Date().getFullYear()} {companyProfile.brandName}. All rights reserved.</p>
      <p>Structured for recruiters, clients, partners, and technical collaborators.</p>
    </div>
  </footer>
);

export default Footer;
