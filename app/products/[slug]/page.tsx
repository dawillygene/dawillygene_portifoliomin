import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/site/PageHero';
import PageShell from '@/components/site/PageShell';
import { getProductBySlug, products } from '@/lib/siteContent';

interface ProductCaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductCaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${product.name} Case Study`,
    description: product.shortSummary,
  };
}

export default async function ProductCaseStudyPage({ params }: ProductCaseStudyPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <PageShell>
      <PageHero
        eyebrow="Product Case Study"
        title={product.name}
        description={product.shortSummary}
        primaryCta={{ label: 'View All Products', href: '/products' }}
        secondaryCta={{ label: 'Contact', href: '/contact' }}
        aside={
          <div className="preview-stack">
            <div className="preview-panel">
              <strong>Status</strong>
              <p>{product.status}</p>
            </div>
            <div className="preview-panel">
              <strong>Timeline</strong>
              <p>{product.timeline}</p>
            </div>
            <div className="preview-panel">
              <strong>Role</strong>
              <p>{product.rolePlayed}</p>
            </div>
          </div>
        }
      />

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <section className="feature-grid" style={{ marginBottom: '2rem' }}>
          <article className="glass-card product-card">
            <h2 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Project Overview</h2>
            <div className="product-card-grid">
              <div>
                <strong>Project name</strong>
                <span>{product.name}</span>
              </div>
              <div>
                <strong>Timeline</strong>
                <span>{product.timeline}</span>
              </div>
              <div>
                <strong>Role</strong>
                <span>{product.rolePlayed}</span>
              </div>
              <div>
                <strong>Client type</strong>
                <span>{product.clientType}</span>
              </div>
              <div>
                <strong>Status</strong>
                <span>{product.status}</span>
              </div>
              <div>
                <strong>Links</strong>
                <span>{product.liveDemoLink ? 'Live product available' : 'Private / internal'}</span>
              </div>
            </div>
          </article>

          <article className="glass-card product-card">
            <h2 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Requirements Snapshot</h2>
            <ul className="clean-list">
              <li>
                <strong>Problem solved:</strong> {product.problemSolved}
              </li>
              <li>
                <strong>Business value:</strong> {product.businessValue}
              </li>
              <li>
                <strong>Target users:</strong> {product.targetUsers.join(', ')}
              </li>
              <li>
                <strong>Architecture style:</strong> {product.architectureStyle}
              </li>
            </ul>
          </article>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            <div className="section-badge">Case Study Breakdown</div>
            <p style={{ marginLeft: 0 }}>
              Each section below maps to the structure requested in the specification: problem framing, architecture thinking, engineering challenges, impact, and roadmap.
            </p>
          </div>
          <div className="advanced-grid">
            {product.caseStudySections.map((section) => (
              <article key={section.title} className="glass-card product-card">
                <h3 style={{ marginBottom: '0.75rem' }}>{section.title}</h3>
                <p style={{ marginBottom: section.bullets ? '0.85rem' : 0 }}>{section.body}</p>
                {section.bullets ? (
                  <ul className="clean-list">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section" style={{ paddingTop: '2rem', paddingBottom: 0 }}>
          <div className="feature-grid">
            <article className="glass-card product-card">
              <h3 style={{ marginBottom: '0.75rem' }}>Tech Stack and Why</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {product.techStack.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </article>
            <article className="glass-card product-card">
              <h3 style={{ marginBottom: '0.75rem' }}>Screenshots / Gallery</h3>
              <ul className="clean-list">
                {product.screenshots.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="glass-card product-card">
              <h3 style={{ marginBottom: '0.75rem' }}>Results / Impact</h3>
              <ul className="clean-list">
                {product.metrics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="glass-card final-cta-card">
            <div>
              <div className="section-badge">Next Step</div>
              <h2 style={{ marginBottom: '0.75rem' }}>Need this level of thinking applied to your own product?</h2>
              <p>This case study format now creates a stronger path from portfolio browsing into hiring, consulting, or product delivery conversations.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <Link href="/contact" className="btn-primary">
                Start a Project Discussion
              </Link>
              <Link href="/products" className="btn-secondary">
                Back to Products
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

