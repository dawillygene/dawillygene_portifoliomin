import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import PageShell from '@/components/site/PageShell';
import { resumeSummary } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Recruiter-friendly experience summary, timeline, technologies, achievements, and CV download path.',
};

export default function ResumePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Resume"
        title="Recruiter-friendly experience summary with timeline, technologies, and selected achievements"
        description="This page restructures experience into a cleaner hiring-oriented format while keeping the site consistent with the broader company-style portfolio."
        primaryCta={{ label: 'Download CV', href: '/dawilly-gene-cv.pdf' }}
        secondaryCta={{ label: 'Contact', href: '/contact' }}
      />
      <div className="container" style={{ paddingBottom: '5rem' }}>
        <section className="feature-grid" style={{ marginBottom: '1.5rem' }}>
          <article className="glass-card product-card">
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Experience Summary</h2>
            <p>{resumeSummary.intro}</p>
          </article>
          <article className="glass-card product-card">
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Selected Achievements</h2>
            <ul className="clean-list">
              {resumeSummary.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="section" style={{ paddingTop: 0, paddingBottom: '2rem' }}>
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            <div className="section-badge">Career Timeline</div>
          </div>
          <div className="advanced-grid">
            {resumeSummary.timeline.map((item) => (
              <article key={`${item.period}-${item.role}`} className="glass-card product-card">
                <span className="tag" style={{ width: 'fit-content', marginBottom: '0.75rem' }}>
                  {item.period}
                </span>
                <h3 style={{ marginBottom: '0.4rem' }}>{item.role}</h3>
                <strong style={{ marginBottom: '0.75rem' }}>{item.organization}</strong>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-grid">
          <article className="glass-card product-card">
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Education</h2>
            <ul className="clean-list">
              {resumeSummary.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="glass-card product-card">
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Certifications</h2>
            <ul className="clean-list">
              {resumeSummary.certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            <div className="section-badge">Core Technologies</div>
          </div>
          <div className="advanced-grid">
            {Object.entries(resumeSummary.techGroups).map(([group, items]) => (
              <article key={group} className="glass-card product-card">
                <h3 style={{ marginBottom: '0.75rem' }}>{group}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}

