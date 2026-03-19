import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import PageShell from '@/components/site/PageShell';
import { services } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Backend API engineering, system architecture, admin dashboards, reporting, auth, and production delivery services.',
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Engineering services for secure, scalable systems with real operational use"
        description="Services are framed around the kinds of systems businesses and teams actually need: APIs, dashboard platforms, workflow software, permissions, reporting, and release discipline."
      />
      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="feature-grid">
          {services.map((service) => (
            <article key={service.title} className="glass-card product-card">
              <h2 style={{ fontSize: '1.25rem', marginBottom: '0.7rem' }}>{service.title}</h2>
              <p style={{ marginBottom: '1rem' }}>{service.description}</p>
              <ul className="clean-list">
                {service.capabilities.map((item) => (
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
