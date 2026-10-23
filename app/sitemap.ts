import type { MetadataRoute } from 'next';
import { SITE } from '../lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly' | 'yearly' = 'monthly') => ({ url: `${SITE}${path}`, lastModified: now, changeFrequency, priority });
  return [
    page('/', 1, 'weekly'),
    page('/abonnement/', 0.9, 'weekly'),
    page('/iptv-bridge-installeren/', 0.8),
    page('/hot-iptv/', 0.8),
    page('/set-iptv/', 0.8),
    page('/net-iptv/', 0.8),
    page('/iptv-box/', 0.8),
    page('/iptv-windows/', 0.7),
    page('/iptv-bridge-storing/', 0.7),
    page('/hoe-werkt-iptv/', 0.7),
    page('/zenders/', 0.7),
    page('/sport/', 0.7),
    page('/films-series/', 0.7),
    page('/android-tv-box/', 0.8),
    page('/bestellen/', 0.7),
    page('/faq/', 0.6),
    page('/over-ons/', 0.4),
    page('/contact/', 0.4),
    page('/disclaimer/', 0.2, 'yearly'),
    page('/algemene-voorwaarden/', 0.1, 'yearly'),
    page('/privacybeleid/', 0.1, 'yearly'),
    page('/cookiebeleid/', 0.1, 'yearly'),
    page('/retourbeleid/', 0.1, 'yearly'),
  ];
}
