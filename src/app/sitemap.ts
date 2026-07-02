import type { MetadataRoute } from 'next'
import { LOCAL_PAGES, BLOG_POSTS } from '@/data/site'
import { siteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes = ['/', '/uslugi/mycie-elewacji', '/uslugi/mycie-dachow', '/uslugi/obiekty-komercyjne', '/uslugi/mycie-kostki-brukowej', '/jak-pracujemy', '/realizacje', '/kontakt']
  return [
    ...staticRoutes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: now, changeFrequency: 'monthly' as const, priority: route === '/' ? 1 : 0.8 })),
    ...LOCAL_PAGES.map((p) => ({ url: `${siteUrl}/${p.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.75 })),
    ...BLOG_POSTS.map((p) => ({ url: `${siteUrl}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: 'yearly' as const, priority: 0.55 }))
  ]
}
