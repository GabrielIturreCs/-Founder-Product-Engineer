import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/content/site';

export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1, alternates: { languages: { es: `${SITE_URL}/`, en: `${SITE_URL}/en` } } },
    { url: `${SITE_URL}/en`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: { es: `${SITE_URL}/`, en: `${SITE_URL}/en` } } },
    { url: `${SITE_URL}/cv`, lastModified: now, changeFrequency: 'monthly', priority: 0.7, alternates: { languages: { es: `${SITE_URL}/cv`, en: `${SITE_URL}/en/cv` } } },
    { url: `${SITE_URL}/en/cv`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: { languages: { es: `${SITE_URL}/cv`, en: `${SITE_URL}/en/cv` } } },
  ];
}
