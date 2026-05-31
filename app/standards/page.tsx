import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import PageShell from '@/components/site/PageShell';
import { standards } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: 'Engineering Standards',
  description: 'API, database, security, testing, deployment, and documentation standards for production-grade software delivery.',
};

export default function StandardsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Engineering Standards"
        title="How software quality, security, testing, and delivery discipline are approached"
        description="This page makes the engineering standards explicit so recruiters, clients, and collaborators can see the quality bar behind the products."
      />
      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="advanced-grid">
          {standards.map((section) => (
            <article key={section.title} className="glass-card product-card" style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Standard diagram image if available */}
              {section.image && (
                <div style={{
                  marginBottom: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-primary)',
                }}>
                  <img
                    src={section.image}
                    alt={`${section.title} diagram`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                </div>
              )}
              <h2 style={{ fontSize: '1.25rem', marginBottom: '0.85rem' }}>{section.title}</h2>
              <ul className="clean-list">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
