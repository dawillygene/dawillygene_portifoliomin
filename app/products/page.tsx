import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import PageShell from '@/components/site/PageShell';
import ProductsExplorer from '@/components/site/ProductsExplorer';
import { products } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Featured products, supporting systems, and R&D concepts presented with business value, architecture signals, and direct case study access.',
};

export default function ProductsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Products"
        title="A categorized product portfolio with case studies, filters, and delivery signals"
        description="This page turns the old project listing into a product-led portfolio with featured systems, archive work, and R&D concepts organized the way serious stakeholders evaluate engineering depth."
        primaryCta={{ label: 'Explore Case Studies', href: '/products/sheria-kiganjani' }}
        secondaryCta={{ label: 'Contact', href: '/contact' }}
        aside={
          <div className="preview-stack">
            <div className="preview-panel">
              <strong>Featured Products</strong>
              <p>Higher-value systems with the clearest mix of technical depth and business framing.</p>
            </div>
            <div className="preview-panel">
              <strong>Product Archive</strong>
              <p>Supporting and earlier work with useful operational credibility.</p>
            </div>
            <div className="preview-panel">
              <strong>R&amp;D Concepts</strong>
              <p>Labs, blueprints, and reusable engineering ideas under exploration.</p>
            </div>
          </div>
        }
      />
      <ProductsExplorer products={products} />
    </PageShell>
  );
}

