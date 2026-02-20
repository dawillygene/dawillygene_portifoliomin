import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dawillygene.com';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/experience`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/team`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/testimonials`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
  ];
}
