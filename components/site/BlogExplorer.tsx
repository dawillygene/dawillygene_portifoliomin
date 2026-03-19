'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { BlogPostRecord } from '@/lib/siteContent';

interface BlogExplorerProps {
  posts: BlogPostRecord[];
}

export default function BlogExplorer({ posts }: BlogExplorerProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [tag, setTag] = useState('All');

  const categories = useMemo(() => ['All', ...new Set(posts.map((post) => post.category))], [posts]);
  const tags = useMemo(() => ['All', ...new Set(posts.flatMap((post) => post.tags))], [posts]);

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesQuery =
        normalized.length === 0 ||
        post.title.toLowerCase().includes(normalized) ||
        post.excerpt.toLowerCase().includes(normalized) ||
        post.tags.some((item) => item.toLowerCase().includes(normalized));
      const matchesCategory = category === 'All' || post.category === category;
      const matchesTag = tag === 'All' || post.tags.includes(tag);
      return matchesQuery && matchesCategory && matchesTag;
    });
  }, [category, posts, query, tag]);

  return (
    <div className="container" style={{ paddingBottom: '5rem' }}>
      <section className="filters-panel glass-card">
        <div className="site-form-grid blog-grid-controls">
          <label className="field-label blog-search-field">
            <span>Search</span>
            <input
              className="site-input"
              type="search"
              placeholder="Search by title, excerpt, or tag"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <label className="field-label">
            <span>Category</span>
            <select className="site-select" value={category} onChange={(event) => setCategory(event.target.value)}>
              {categories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="field-label">
            <span>Tag</span>
            <select className="site-select" value={tag} onChange={(event) => setTag(event.target.value)}>
              {tags.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="feature-grid">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="glass-card product-card">
              <div className="card-meta-row">
                <span className="tag">{post.category}</span>
                <span style={{ color: 'var(--text-quaternary)', fontSize: '0.82rem' }}>{post.readingTime}</span>
              </div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '0.6rem' }}>{post.title}</h2>
              <p style={{ marginBottom: '1rem' }}>{post.excerpt}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1rem' }}>
                {post.tags.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
              <p style={{ color: 'var(--text-quaternary)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                Published {new Date(post.publishedAt).toLocaleDateString('en-US', { dateStyle: 'medium' })}
              </p>
              <Link href={`/blog/${post.slug}`} className="btn-secondary" style={{ marginTop: 'auto' }}>
                Read Article
              </Link>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="glass-card" style={{ padding: '1.5rem', marginTop: '1.5rem' }}>
            <p>No articles match the current search or filters.</p>
          </div>
        ) : null}
      </section>
    </div>
  );
}
