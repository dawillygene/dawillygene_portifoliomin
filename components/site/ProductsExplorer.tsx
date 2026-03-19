'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { ProductRecord } from '@/lib/siteContent';

interface ProductsExplorerProps {
  products: ProductRecord[];
}

const sorters = {
  newest: (a: ProductRecord, b: ProductRecord) => b.year - a.year,
  featured: (a: ProductRecord, b: ProductRecord) => {
    const aScore = a.category === 'Featured Products' ? 1 : 0;
    const bScore = b.category === 'Featured Products' ? 1 : 0;
    return bScore - aScore || b.year - a.year;
  },
  complex: (a: ProductRecord, b: ProductRecord) => b.techStack.length - a.techStack.length,
  impactful: (a: ProductRecord, b: ProductRecord) => b.metrics.length - a.metrics.length,
};

export default function ProductsExplorer({ products }: ProductsExplorerProps) {
  const [category, setCategory] = useState('All');
  const [status, setStatus] = useState('All');
  const [technology, setTechnology] = useState('All');
  const [industry, setIndustry] = useState('All');
  const [year, setYear] = useState('All');
  const [sortBy, setSortBy] = useState<keyof typeof sorters>('featured');

  const filters = useMemo(
    () => ({
      categories: ['All', ...new Set(products.map((product) => product.category))],
      statuses: ['All', ...new Set(products.map((product) => product.status))],
      technologies: ['All', ...new Set(products.flatMap((product) => product.techStack))],
      industries: ['All', ...new Set(products.map((product) => product.industryDomain))],
      years: ['All', ...new Set(products.map((product) => String(product.year)))],
    }),
    [products],
  );

  const filteredProducts = useMemo(() => {
    return [...products]
      .filter((product) => (category === 'All' ? true : product.category === category))
      .filter((product) => (status === 'All' ? true : product.status === status))
      .filter((product) => (technology === 'All' ? true : product.techStack.includes(technology)))
      .filter((product) => (industry === 'All' ? true : product.industryDomain === industry))
      .filter((product) => (year === 'All' ? true : String(product.year) === year))
      .sort(sorters[sortBy]);
  }, [category, industry, products, sortBy, status, technology, year]);

  const groupedProducts = useMemo(() => {
    return {
      'Featured Products': filteredProducts.filter((product) => product.category === 'Featured Products'),
      'Product Archive': filteredProducts.filter((product) => product.category === 'Product Archive'),
      'Concept Products / R&D': filteredProducts.filter((product) => product.category === 'Concept Products / R&D'),
    };
  }, [filteredProducts]);

  const controls = [
    { label: 'Category', value: category, onChange: setCategory, options: filters.categories },
    { label: 'Status', value: status, onChange: setStatus, options: filters.statuses },
    { label: 'Technology', value: technology, onChange: setTechnology, options: filters.technologies },
    { label: 'Industry', value: industry, onChange: setIndustry, options: filters.industries },
    { label: 'Year', value: year, onChange: setYear, options: filters.years },
  ];

  return (
    <div className="container" style={{ paddingBottom: '5rem' }}>
      <section className="filters-panel glass-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          <div>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '0.35rem' }}>Product Explorer</h2>
            <p style={{ color: 'var(--text-tertiary)', maxWidth: 640 }}>
              Filter products by category, maturity, technology, or industry and sort them by the kind of signal you care about.
            </p>
          </div>
          <label className="field-label" style={{ minWidth: 220 }}>
            <span>Sort By</span>
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value as keyof typeof sorters)} className="site-select">
              <option value="newest">Newest</option>
              <option value="featured">Featured</option>
              <option value="complex">Most complex</option>
              <option value="impactful">Most impactful</option>
            </select>
          </label>
        </div>

        <div className="site-form-grid">
          {controls.map((control) => (
            <label key={control.label} className="field-label">
              <span>{control.label}</span>
              <select value={control.value} onChange={(event) => control.onChange(event.target.value)} className="site-select">
                {control.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </section>

      {Object.entries(groupedProducts).map(([groupName, groupProducts]) => (
        <section key={groupName} className="section" style={{ paddingBottom: 0 }}>
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            <div className="section-badge">{groupName}</div>
            <p style={{ marginLeft: 0 }}>
              {groupName === 'Featured Products'
                ? 'Flagship systems with stronger product positioning and direct paths into technical case studies.'
                : groupName === 'Product Archive'
                  ? 'Supporting systems and earlier operational work that still show delivery depth and engineering quality.'
                  : 'Experiments, reusable blueprints, and future-facing ideas under active exploration.'}
            </p>
          </div>

          {groupProducts.length === 0 ? (
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <p>No products match the current filters for this section.</p>
            </div>
          ) : (
            <div className="feature-grid">
              {groupProducts.map((product) => (
                <article key={product.slug} className="glass-card product-card">
                  <div className="card-meta-row">
                    <span className="tag">{product.type}</span>
                    <span className="status-pill">{product.status}</span>
                  </div>
                  <h3 style={{ marginBottom: '0.6rem' }}>{product.name}</h3>
                  <p style={{ marginBottom: '1rem' }}>{product.shortSummary}</p>
                  <div className="product-card-grid">
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
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
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
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: 'auto' }}>
                    <Link href={`/products/${product.slug}`} className="btn-primary">
                      View Case Study
                    </Link>
                    {product.liveDemoLink ? (
                      <a href={product.liveDemoLink} className="btn-secondary" target="_blank" rel="noreferrer">
                        Live Product
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
