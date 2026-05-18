import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import PageShell from '@/components/site/PageShell';
import ProductsExplorer from '@/components/site/ProductsExplorer';
import { products } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: 'Products',
  description: 'A visual portfolio of real products across commerce, mobility, logistics, membership services, and internal operations systems.',
};

export default function ProductsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Products"
        title="Products built across mobile commerce, local services, logistics, and organization platforms"
        description="A redesigned product portfolio focused on Soko Mtaani, LeoTap, ZANEMA, Salum Transports, RAKIASA, and the supporting operations systems behind them."
        primaryCta={{ label: 'Explore Soko Mtaani', href: '/products/soko-mtaani' }}
        secondaryCta={{ label: 'Contact', href: '/contact' }}
        aside={
          <div className="preview-stack">
            <div className="preview-panel">
              <strong>Real Product Mix</strong>
              <p>Consumer apps, business websites, and internal operations portals presented in one portfolio.</p>
            </div>
            <div className="preview-panel">
              <strong>Store and Web Links</strong>
              <p>Products now surface direct website and app-store references where public links exist.</p>
            </div>
            <div className="preview-panel">
              <strong>Visual Portfolio</strong>
              <p>The page uses product imagery throughout so visitors can scan the work faster.</p>
            </div>
          </div>
        }
      />
      <ProductsExplorer products={products} />
    </PageShell>
  );
}
