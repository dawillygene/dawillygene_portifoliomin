import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import PageShell from '@/components/site/PageShell';
import BlogExplorer from '@/components/site/BlogExplorer';
import { blogPosts } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical writing on secure APIs, RBAC, backend choices, operational software, and product delivery.',
};

export default function BlogPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Blog"
        title="Technical writing that supports thought leadership, SEO, and engineering credibility"
        description="The blog section now includes article listing, search, category filters, tag filters, reading time, and direct article pages built from structured content metadata."
      />
      <BlogExplorer posts={blogPosts} />
    </PageShell>
  );
}

