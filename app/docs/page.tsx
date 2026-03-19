import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import PageShell from '@/components/site/PageShell';
import { architectureDocs, documentationAndHandover } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: 'Architecture Library and Docs',
  description: 'Architecture notes, system patterns, documentation artifacts, and handover thinking for product delivery.',
};

export default function DocsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Architecture Library / Docs"
        title="Documentation artifacts that show how systems are explained, handed over, and maintained"
        description="This page satisfies the architecture library and documentation requirement with patterns, process notes, and handover-focused artifacts that support delivery maturity."
        primaryCta={{ label: 'View Labs', href: '/labs' }}
        secondaryCta={{ label: 'Engineering Standards', href: '/standards' }}
      />

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <section className="advanced-grid" style={{ marginBottom: '2rem' }}>
          {architectureDocs.map((doc) => (
            <article key={doc.title} className="glass-card product-card">
              <div className="card-meta-row">
                <span className="tag">{doc.type}</span>
              </div>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '0.7rem' }}>{doc.title}</h2>
              <p style={{ marginBottom: '1rem' }}>{doc.summary}</p>
              <ul className="clean-list">
                {doc.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="feature-grid">
          <article className="glass-card product-card">
            <h3 style={{ marginBottom: '0.75rem' }}>Documentation and Handover Coverage</h3>
            <ul className="clean-list">
              {documentationAndHandover.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="glass-card product-card">
            <h3 style={{ marginBottom: '0.75rem' }}>How These Artifacts Help</h3>
            <ul className="clean-list">
              <li>They reduce dependency on informal handover.</li>
              <li>They make architecture decisions easier to review and maintain.</li>
              <li>They show buyers and teams that delivery maturity extends beyond writing code.</li>
            </ul>
          </article>
        </section>
      </div>
    </PageShell>
  );
}
