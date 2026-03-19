import type { ReactNode } from 'react';
import Link from 'next/link';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  aside?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  aside,
}: PageHeroProps) {
  return (
    <section className="section page-hero">
      <div className="container page-hero-grid">
        <div>
          <div className="section-badge">{eyebrow}</div>
          <h1 style={{ maxWidth: 760 }}>{title}</h1>
          <p className="page-hero-copy">{description}</p>
          {(primaryCta || secondaryCta) && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginTop: '1.5rem' }}>
              {primaryCta ? (
                <Link className="btn-primary" href={primaryCta.href}>
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link className="btn-secondary" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          )}
        </div>

        {aside ? <div className="page-hero-aside glass-card">{aside}</div> : null}
      </div>
    </section>
  );
}
