import { getPayload } from 'payload'
import config from './payload.config'
import { SERVICES, LOCAL_PAGES, BLOG_POSTS } from './data/site'

async function run() {
  const payload = await getPayload({ config })
  console.log('Seed: G Service')
  for (const s of SERVICES) {
    try { await payload.create({ collection: 'services', data: { title: s.title, slug: s.slug, shortDescription: s.description, bullets: s.bullets.map(item => ({ item })) } }) } catch {}
  }
  for (const p of LOCAL_PAGES) {
    try { await payload.create({ collection: 'local-pages', data: { title: p.title, slug: p.slug, city: p.city, serviceType: p.service === 'elewacji' ? 'mycie elewacji' : 'mycie dachów', intro: p.description, seoTitle: p.title, seoDescription: p.description, published: true } }) } catch {}
  }
  for (const b of BLOG_POSTS) {
    try { await payload.create({ collection: 'blog-posts', data: { title: b.title, slug: b.slug, excerpt: b.excerpt, publishedAt: b.date, published: true } }) } catch {}
  }
  console.log('Gotowe. Wejdź na /admin i utwórz administratora.')
}
run().catch((err) => { console.error(err); process.exit(1) })
