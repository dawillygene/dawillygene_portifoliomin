'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { ProductRecord } from '@/lib/siteContent';

interface ProductsExplorerProps {
  products: ProductRecord[];
}

const sorters = {
  featured: (a: ProductRecord, b: ProductRecord) => Number(b.featured) - Number(a.featured) || b.year - a.year,
  newest: (a: ProductRecord, b: ProductRecord) => b.year - a.year,
  platform: (a: ProductRecord, b: ProductRecord) => b.platforms.length - a.platforms.length || b.year - a.year,
  links: (a: ProductRecord, b: ProductRecord) => b.links.length - a.links.length || b.year - a.year,
};

export default function ProductsExplorer({ products }: ProductsExplorerProps) {
  const [category, setCategory] = useState('All');
  const [status, setStatus] = useState('All');
  const [domain, setDomain] = useState('All');
  const [platform, setPlatform] = useState('All');
  const [sortBy, setSortBy] = useState<keyof typeof sorters>('featured');

  const filters = useMemo(
    () => ({
      categories: ['All', ...new Set(products.map((product) => product.category))],
      statuses: ['All', ...new Set(products.map((product) => product.status))],
      domains: ['All', ...new Set(products.map((product) => product.industryDomain))],
      platforms: ['All', ...new Set(products.flatMap((product) => product.platforms))],
    }),
    [products],
  );

  const filteredProducts = useMemo(() => {
    return [...products]
      .filter((product) => (category === 'All' ? true : product.category === category))
      .filter((product) => (status === 'All' ? true : product.status === status))
      .filter((product) => (domain === 'All' ? true : product.industryDomain === domain))
      .filter((product) => (platform === 'All' ? true : product.platforms.includes(platform)))
      .sort(sorters[sortBy]);
  }, [category, domain, platform, products, sortBy, status]);

  const groupedProducts = useMemo(() => {
    return filters.categories
      .filter((item) => item !== 'All')
      .map((groupName) => ({
        groupName,
        items: filteredProducts.filter((product) => product.category === groupName),
      }))
      .filter((group) => group.items.length > 0);
  }, [filteredProducts, filters.categories]);

  const showcaseProducts = useMemo(() => products.slice(0, 6), [products]);

  return (
    <div className="container products-page-shell">
      <section className="products-showcase">
        <div className="products-showcase-copy">
          <div className="section-badge">Selected Work</div>
          <h2>Apps, websites, and operations systems tied to real organizations and local use cases</h2>
          <p>
            This page now focuses on the products themselves: what they solve, where they run, who they serve, and the public touchpoints people can verify.
          </p>
          <div className="products-kpi-grid">
            <article className="glass-card products-kpi-card">
              <strong>{products.length}</strong>
              <span>Products on this page</span>
            </article>
            <article className="glass-card products-kpi-card">
              <strong>{products.filter((product) => product.platforms.includes('Android') || product.platforms.includes('iPhone')).length}</strong>
              <span>Mobile-first products</span>
            </article>
            <article className="glass-card products-kpi-card">
              <strong>{new Set(products.flatMap((product) => product.platforms)).size}</strong>
              <span>Platform types covered</span>
            </article>
          </div>
        </div>

        <div className="products-showcase-wall">
          {showcaseProducts.map((product) => (
            <article key={product.slug} className="products-showcase-tile">
              <Image src={product.image} alt={product.imageAlt} width={720} height={720} className="products-showcase-image" />
              <div className="products-showcase-overlay">
                <span>{product.type}</span>
                <strong>{product.name}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-card products-filter-panel">
        <div className="products-filter-header">
          <div>
            <h3>Filter the portfolio</h3>
            <p>Switch between product groups, operating status, domain, and platform without losing the visual context.</p>
          </div>
          <label className="field-label products-sort-control">
            <span>Sort</span>
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value as keyof typeof sorters)} className="site-select">
              <option value="featured">Featured first</option>
              <option value="newest">Newest</option>
              <option value="platform">Most platforms</option>
              <option value="links">Most public links</option>
            </select>
          </label>
        </div>

        <div className="site-form-grid">
          <label className="field-label">
            <span>Category</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="site-select">
              {filters.categories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="field-label">
            <span>Status</span>
            <select value={status} onChange={(event) => setStatus(event.target.value)} className="site-select">
              {filters.statuses.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="field-label">
            <span>Domain</span>
            <select value={domain} onChange={(event) => setDomain(event.target.value)} className="site-select">
              {filters.domains.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="field-label">
            <span>Platform</span>
            <select value={platform} onChange={(event) => setPlatform(event.target.value)} className="site-select">
              {filters.platforms.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      {groupedProducts.length === 0 ? (
        <section className="section" style={{ paddingTop: '2rem' }}>
          <div className="glass-card product-card">
            <h3 style={{ marginBottom: '0.5rem' }}>No products match the current filters</h3>
            <p>Try a broader category, status, or platform selection.</p>
          </div>
        </section>
      ) : (
        groupedProducts.map((group) => (
          <section key={group.groupName} className="section products-group-section">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              <div className="section-badge">{group.groupName}</div>
              <p style={{ marginLeft: 0 }}>
                {group.groupName === 'Featured Products'
                  ? 'Core portfolio entries with the strongest public footprint and the clearest product-market story.'
                  : 'Supporting systems and organization platforms that still add operational and commercial credibility.'}
              </p>
            </div>

            <div className="products-portfolio-grid">
              {group.items.map((product) => (
                <article key={product.slug} className="glass-card products-portfolio-card">
                  <div className="products-portfolio-media">
                    <Image src={product.image} alt={product.imageAlt} width={720} height={720} className="products-portfolio-image" />
                    <div className="products-portfolio-badges">
                      <span className="tag">{product.type}</span>
                      <span className="status-pill">{product.status}</span>
                    </div>
                  </div>

                  <div className="products-portfolio-body">
                    <div className="products-portfolio-heading">
                      <div>
                        <h3>{product.name}</h3>
                        <p>{product.shortSummary}</p>
                      </div>
                      <div className="products-platform-row">
                        {product.platforms.map((item) => (
                          <span key={item} className="tag">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="products-detail-grid">
                      <div>
                        <strong>Domain</strong>
                        <span>{product.industryDomain}</span>
                      </div>
                      <div>
                        <strong>Year</strong>
                        <span>{product.year}</span>
                      </div>
                      <div>
                        <strong>Role</strong>
                        <span>{product.rolePlayed}</span>
                      </div>
                      <div>
                        <strong>Architecture</strong>
                        <span>{product.architectureStyle}</span>
                      </div>
                    </div>

                    <div className="products-tag-cluster">
                      {product.techStack.map((item) => (
                        <span key={item} className="tag">
                          {item}
                        </span>
                      ))}
                    </div>

                    <ul className="clean-list" style={{ marginBottom: '1rem' }}>
                      {product.metrics.map((metric) => (
                        <li key={metric}>{metric}</li>
                      ))}
                    </ul>

                    <div className="products-link-row">
                      <Link href={`/products/${product.slug}`} className="btn-primary">
                        View Case Study
                      </Link>
                      {product.links.slice(0, 2).map((link) => (
                        <a key={link.href} href={link.href} className="btn-secondary" target="_blank" rel="noreferrer">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
