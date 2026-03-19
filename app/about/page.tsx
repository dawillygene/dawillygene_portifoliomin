import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import PageShell from '@/components/site/PageShell';
import { companyProfile, deliveryProcess, domainsServed } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: 'About',
  description: 'Professional profile, engineering philosophy, domain interests, and mission statement for Dawilly Gene.',
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutContent />
    </PageShell>
  );
}

function AboutContent() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Founder-style profile with engineering philosophy, domain interests, and working style"
        description="Dawilly Gene is presented here as a serious product builder and software studio founder, with a profile centered on systems thinking, delivery discipline, and practical business value."
        aside={
          <div className="preview-stack">
            <div className="preview-panel">
              <strong>Location</strong>
              <p>{companyProfile.location}</p>
            </div>
            <div className="preview-panel">
              <strong>Availability</strong>
              <p>{companyProfile.availability}</p>
            </div>
            <div className="preview-panel">
              <strong>Studio</strong>
              <p>{companyProfile.studioName}</p>
            </div>
          </div>
        }
      />

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="advanced-grid">
          {[
            {
              title: 'Professional Introduction',
              body: 'A Tanzanian software engineer building products that combine technical clarity with business-aware execution. The focus is on systems teams can actually run, maintain, and trust.',
            },
            {
              title: 'Engineering Philosophy',
              body: 'Good software should reduce operational confusion, make important actions traceable, and remain understandable long after launch. Clean architecture only matters if it also improves delivery and maintenance.',
            },
            {
              title: 'Domain Interests',
              body: `Current interests include ${domainsServed.join(', ').toLowerCase()}, with special attention to systems where security, reporting, and role separation matter.`,
            },
            {
              title: 'Career Direction',
              body: 'The direction is toward deeper product engineering leadership: shaping architecture, driving implementation quality, and helping teams turn requirements into reliable systems.',
            },
            {
              title: 'Working Style',
              body: `Delivery typically moves through ${deliveryProcess.join(', ').toLowerCase()}, with emphasis on requirements clarity, execution discipline, and usable handover.`,
            },
            {
              title: 'Mission Statement',
              body: 'Build digital products that solve real operational problems while raising the quality bar for software engineering and product delivery in East Africa and beyond.',
            },
          ].map((section) => (
            <article key={section.title} className="glass-card product-card">
              <h2 style={{ fontSize: '1.25rem', marginBottom: '0.7rem' }}>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
