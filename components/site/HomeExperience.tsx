import Link from 'next/link';
import {
  architectureDocs,
  codeCredibility,
  companyProfile,
  deliveryProcess,
  documentationAndHandover,
  domainsServed,
  executiveSummary,
  featuredTestimonials,
  performanceAndScale,
  productStrategy,
  products,
  repositories,
  securityAndReliability,
  services,
  trustSignals,
} from '@/lib/siteContent';

const featuredProducts = products.filter((product) => product.category === 'Featured Products').slice(0, 3);

export default function HomeExperience() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div>
            <div className="section-badge">Company-grade Product Engineering Portfolio</div>
            <h1 style={{ maxWidth: 760 }}>{companyProfile.headline}</h1>
            <p className="page-hero-copy" style={{ maxWidth: 700 }}>
              {companyProfile.subheadline}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginTop: '1.5rem' }}>
              <Link href={companyProfile.primaryCta.href} className="btn-primary">
                {companyProfile.primaryCta.label}
              </Link>
              <Link href={companyProfile.secondaryCta.href} className="btn-secondary">
                {companyProfile.secondaryCta.label}
              </Link>
            </div>

            <div className="trust-grid" style={{ marginTop: '2rem' }}>
              {trustSignals.map((item) => (
                <div key={item.label} className="glass-card trust-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card hero-preview">
            <div className="preview-header">
              <span className="tag">Product Preview</span>
              <span style={{ color: 'var(--text-quaternary)', fontSize: '0.82rem' }}>Studio Operating Model</span>
            </div>
            <div className="preview-stack">
              <div className="preview-panel">
                <strong>Product Strategy</strong>
                <p>Requirements turn into modules, permissions, reporting flows, and milestones before implementation starts.</p>
              </div>
              <div className="preview-panel">
                <strong>Engineering Quality</strong>
                <p>Security, testing, documentation, and maintainability are treated as delivery standards, not polish added later.</p>
              </div>
              <div className="preview-panel">
                <strong>Business Value</strong>
                <p>Each system is framed around reduced manual work, faster decisions, clearer reporting, and operational reliability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Executive Summary</div>
            <h2>Built like a serious software studio, not a generic portfolio</h2>
            <p>
              The site positions Dawilly Gene as a founder-style engineer who can shape product direction, architecture, and delivery for systems that need to work in production.
            </p>
          </div>

          <div className="feature-grid">
            {executiveSummary.map((item) => (
              <article key={item.title} className="glass-card product-card">
                <h3 style={{ marginBottom: '0.75rem' }}>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Featured Products</div>
            <h2>Flagship systems with technical depth and clear business framing</h2>
            <p>Each product is presented with problem context, value, architecture signals, and a direct path into case study detail.</p>
          </div>
          <div className="feature-grid">
            {featuredProducts.map((product) => (
              <article key={product.slug} className="glass-card product-card">
                <div className="card-meta-row">
                  <span className="tag">{product.industryDomain}</span>
                  <span className="status-pill">{product.status}</span>
                </div>
                <h3 style={{ marginBottom: '0.65rem' }}>{product.name}</h3>
                <p style={{ marginBottom: '1rem' }}>{product.shortSummary}</p>
                <ul className="clean-list" style={{ marginBottom: '1rem' }}>
                  <li>
                    <strong>Problem:</strong> {product.problemSolved}
                  </li>
                  <li>
                    <strong>Value:</strong> {product.businessValue}
                  </li>
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1rem' }}>
                  {product.techStack.slice(0, 4).map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
                <Link href={`/products/${product.slug}`} className="btn-secondary" style={{ marginTop: 'auto' }}>
                  View Case Study
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Capabilities Preview</div>
            <h2>Engineering capabilities focused on operational software</h2>
            <p>Capabilities are organized the way buyers, recruiters, and technical stakeholders evaluate delivery maturity.</p>
          </div>
          <div className="feature-grid">
            {services.slice(0, 6).map((service) => (
              <article key={service.title} className="glass-card product-card">
                <h3 style={{ marginBottom: '0.65rem' }}>{service.title}</h3>
                <p style={{ marginBottom: '1rem' }}>{service.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {service.capabilities.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Advanced Company Sections</div>
            <h2>Strategy, process, security, scale, and handover are visible throughout the site</h2>
            <p>These sections translate the requirement document into concrete company-style trust signals instead of generic marketing claims.</p>
          </div>

          <div className="advanced-grid">
            <article className="glass-card product-card">
              <h3>Product Strategy</h3>
              <ul className="clean-list">
                {productStrategy.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="glass-card product-card">
              <h3>Industries Served / Target Domains</h3>
              <ul className="clean-list">
                {domainsServed.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="glass-card product-card">
              <h3>Delivery Process</h3>
              <ol className="clean-list numbered">
                {deliveryProcess.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
            <article className="glass-card product-card">
              <h3>Security and Reliability</h3>
              <ul className="clean-list">
                {securityAndReliability.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="glass-card product-card">
              <h3>Performance and Scale</h3>
              <ul className="clean-list">
                {performanceAndScale.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="glass-card product-card">
              <h3>Documentation and Handover</h3>
              <ul className="clean-list">
                {documentationAndHandover.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Trust Signals</div>
            <h2>Credibility built from product framing, process clarity, and engineering posture</h2>
            <p>Recruiters, clients, and collaborators need evidence of quality. These signals provide that evidence in a concise format.</p>
          </div>
          <div className="feature-grid">
            {featuredTestimonials.map((testimonial) => (
              <article key={testimonial.author} className="glass-card product-card">
                <p style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>&quot;{testimonial.quote}&quot;</p>
                <strong style={{ color: 'var(--accent-text)' }}>{testimonial.author}</strong>
              </article>
            ))}
            <article className="glass-card product-card">
              <h3 style={{ marginBottom: '0.75rem' }}>Technology Stack Display</h3>
              <p style={{ marginBottom: '1rem' }}>
                Technologies are grouped by engineering role across the resume and standards pages rather than shown as an empty logo cloud.
              </p>
              <Link href="/resume" className="btn-secondary">
                Review Resume
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">GitHub and Code Credibility</div>
            <h2>Selected repositories, documentation artifacts, and reusable engineering patterns</h2>
            <p>{codeCredibility.intro}</p>
          </div>
          <div className="feature-grid" style={{ marginBottom: '1.5rem' }}>
            {repositories.map((repository) => (
              <article key={repository.name} className="glass-card product-card">
                <div className="card-meta-row">
                  <span className="tag">{repository.category}</span>
                </div>
                <h3 style={{ marginBottom: '0.65rem' }}>{repository.name}</h3>
                <p style={{ marginBottom: '1rem' }}>{repository.summary}</p>
                <ul className="clean-list" style={{ marginBottom: '1rem' }}>
                  {repository.qualitySignals.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1rem' }}>
                  {repository.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
                <a href={repository.href} className="btn-secondary" target="_blank" rel="noreferrer">
                  View Repository Profile
                </a>
              </article>
            ))}
          </div>

          <div className="feature-grid">
            <article className="glass-card product-card">
              <h3 style={{ marginBottom: '0.75rem' }}>Quality Rules</h3>
              <ul className="clean-list">
                {codeCredibility.qualityRules.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="glass-card product-card">
              <h3 style={{ marginBottom: '0.75rem' }}>Architecture Docs Preview</h3>
              <ul className="clean-list">
                {architectureDocs.slice(0, 4).map((item) => (
                  <li key={item.title}>{item.title}</li>
                ))}
              </ul>
              <Link href="/docs" className="btn-secondary" style={{ marginTop: '1rem' }}>
                Open Docs Library
              </Link>
            </article>
            <article className="glass-card product-card">
              <h3 style={{ marginBottom: '0.75rem' }}>Open Source / Labs</h3>
              <p style={{ marginBottom: '1rem' }}>
                Reusable patterns, blueprint work, and engineering R&amp;D are now separated from product case studies so the portfolio reads more like a studio site.
              </p>
              <Link href="/labs" className="btn-secondary">
                Explore Labs
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container">
          <div className="glass-card final-cta-card">
            <div>
              <div className="section-badge">Final CTA</div>
              <h2 style={{ marginBottom: '0.75rem' }}>Need a product builder who thinks in systems, not just screens?</h2>
              <p style={{ maxWidth: 720 }}>
                The site now positions Dawilly Gene for hiring conversations, client inquiries, product demos, and technical collaboration with a stronger conversion path.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
              <Link href="/contact" className="btn-primary">
                Start a Conversation
              </Link>
              <Link href="/services" className="btn-secondary">
                Review Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
