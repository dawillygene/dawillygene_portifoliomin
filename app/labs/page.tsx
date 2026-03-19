import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import PageShell from '@/components/site/PageShell';
import { labsProjects, repositories } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: 'Open Source and Labs',
  description: 'Reusable patterns, engineering R&D, selected repositories, and product experiments from Dawilly Gene.',
};

export default function LabsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Open Source / Labs"
        title="Experiments, reusable building blocks, and architecture-led engineering exploration"
        description="This page completes the optional labs requirement by separating exploratory work, reusable patterns, and code credibility from the commercial-facing product portfolio."
        primaryCta={{ label: 'View Docs Library', href: '/docs' }}
        secondaryCta={{ label: 'View Products', href: '/products' }}
      />

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            <div className="section-badge">Labs Projects</div>
            <p style={{ marginLeft: 0 }}>
              Labs work shows experimentation, reusable thinking, and the ability to turn recurring engineering concerns into cleaner foundations.
            </p>
          </div>
          <div className="feature-grid">
            {labsProjects.map((lab) => (
              <article key={lab.slug} className="glass-card product-card">
                <div className="card-meta-row">
                  <span className="tag">{lab.focus}</span>
                  <span className="status-pill">{lab.status}</span>
                </div>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '0.65rem' }}>{lab.title}</h2>
                <p style={{ marginBottom: '1rem' }}>{lab.summary}</p>
                <ul className="clean-list">
                  {lab.outputs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            <div className="section-badge">Selected Repositories</div>
            <p style={{ marginLeft: 0 }}>
              The code-credibility requirement is represented here through repository themes, quality signals, and the kinds of reusable foundations being developed.
            </p>
          </div>
          <div className="feature-grid">
            {repositories.map((repository) => (
              <article key={repository.name} className="glass-card product-card">
                <h3 style={{ marginBottom: '0.65rem' }}>{repository.name}</h3>
                <p style={{ marginBottom: '1rem' }}>{repository.summary}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1rem' }}>
                  {repository.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
                <a href={repository.href} target="_blank" rel="noreferrer" className="btn-secondary">
                  Open GitHub
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
