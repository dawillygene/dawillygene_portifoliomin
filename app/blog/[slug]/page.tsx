import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/components/site/PageShell';
import { blogPosts, getBlogPostBySlug } from '@/lib/siteContent';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Article Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((candidate) => candidate.slug !== post.slug).slice(0, 2);

  return (
    <PageShell>
      <article className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <div className="section-badge">{post.category}</div>
          <h1 style={{ maxWidth: 760 }}>{post.title}</h1>
          <p className="page-hero-copy">{post.excerpt}</p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem', marginBottom: '2rem' }}>
            <span className="tag">{post.readingTime}</span>
            <span className="tag">{new Date(post.publishedAt).toLocaleDateString('en-US', { dateStyle: 'medium' })}</span>
            {post.tags.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            {post.body.map((section) => (
              <section key={section.heading} style={{ marginBottom: '1.75rem' }}>
                <h2 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>{section.heading}</h2>
                <div style={{ display: 'grid', gap: '0.9rem' }}>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="section" style={{ paddingBottom: 0 }}>
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              <div className="section-badge">Related Posts</div>
            </div>
            <div className="feature-grid">
              {relatedPosts.map((related) => (
                <article key={related.slug} className="glass-card product-card">
                  <h3 style={{ marginBottom: '0.65rem' }}>{related.title}</h3>
                  <p style={{ marginBottom: '1rem' }}>{related.excerpt}</p>
                  <Link href={`/blog/${related.slug}`} className="btn-secondary">
                    Read Article
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

