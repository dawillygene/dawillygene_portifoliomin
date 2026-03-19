import type { MetadataRoute } from 'next';
import { blogPosts, products } from '@/lib/siteContent';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dawillygene.com';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/standards`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/resume`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/labs`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/docs`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/experience`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/team`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/testimonials`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    ...products.map((product) => ({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ];
}
