'use client';

import React from 'react';
import Link from 'next/link';
import type { ProductRecord } from '@/lib/siteContent';

interface FeaturedProductCardProps {
  product: ProductRecord;
  index: number;
}

export default function FeaturedProductCard({ product, index }: FeaturedProductCardProps) {
  return (
    <article
      className="glass-card fp-showcase-card"
      style={{
        padding: 0,
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '1fr',
      }}
    >
      {/* Product Info Side */}
      <div style={{ padding: '2rem 2rem 1.5rem', display: 'flex', flexDirection: 'column' }} className={index % 2 === 0 ? 'fp-info' : 'fp-info fp-info-alt'}>
        <div className="card-meta-row">
          <span className="tag">{product.industryDomain}</span>
          <span className="status-pill" style={{
            background: product.status === 'Production' ? 'var(--success-light)' : 'var(--bg-tertiary)',
            color: product.status === 'Production' ? 'var(--success)' : 'var(--text-secondary)',
          }}>
            {product.status === 'Production' && (
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--success)', marginRight: 6, display: 'inline-block' }} />
            )}
            {product.status}
          </span>
        </div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{product.name}</h3>
        <p style={{ fontSize: '0.88rem', marginBottom: '1rem', color: 'var(--text-tertiary)' }}>{product.shortSummary}</p>

        <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.82rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <i className="fa-solid fa-triangle-exclamation" style={{ color: 'var(--warning)', fontSize: '0.75rem', marginTop: 3, flexShrink: 0 }} />
            <span style={{ color: 'var(--text-secondary)' }}><strong>Problem:</strong> {product.problemSolved}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <i className="fa-solid fa-circle-check" style={{ color: 'var(--success)', fontSize: '0.75rem', marginTop: 3, flexShrink: 0 }} />
            <span style={{ color: 'var(--text-secondary)' }}><strong>Value:</strong> {product.businessValue}</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
          {product.techStack.slice(0, 5).map((item) => (
            <span key={item} className="tag">{item}</span>
          ))}
        </div>

        {/* Platform badges */}
        {product.links && product.links.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
            {product.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="tag"
                style={{
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '5px 12px',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '';
                  e.currentTarget.style.color = '';
                }}
              >
                <i className={
                  link.label === 'Google Play' ? 'fa-brands fa-google-play' :
                  link.label === 'App Store' ? 'fa-brands fa-apple' :
                  link.label === 'Website' ? 'fa-solid fa-globe' :
                  'fa-solid fa-arrow-up-right-from-square'
                } style={{ fontSize: '0.68rem' }} />
                {link.label}
              </a>
            ))}
          </div>
        )}

        <Link href={`/products/${product.slug}`} className="btn-primary" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
          View Full Case Study
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ marginLeft: 4 }}>
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* Product Mockup Image Side */}
      <div
        className="fp-mockup"
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1.5rem',
          minHeight: 320,
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow behind the image */}
        <div style={{
          position: 'absolute',
          width: '70%',
          height: '70%',
          borderRadius: '50%',
          background: index === 0
            ? 'radial-gradient(circle, rgba(34,139,34,0.12) 0%, transparent 70%)'
            : index === 1
              ? 'radial-gradient(circle, rgba(218,165,32,0.12) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          top: '15%',
          left: '15%',
        }} />

        {/* Grid pattern background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, var(--border-primary) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.3,
          pointerEvents: 'none',
        }} />

        {/* The floating product image */}
        <div className="fp-float-wrapper" style={{ position: 'relative', zIndex: 2 }}>
          <img
            src={product.image}
            alt={product.imageAlt}
            loading="lazy"
            style={{
              maxWidth: product.slug === 'gene-pharmacy-pos' ? 340 : 260,
              width: '100%',
              height: 'auto',
              borderRadius: product.slug === 'gene-pharmacy-pos' ? 'var(--radius-xl)' : 'var(--radius-2xl)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.08)',
              border: '1px solid var(--border-primary)',
              transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </div>
      </div>
    </article>
  );
}
