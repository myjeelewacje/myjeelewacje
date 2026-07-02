import { COMPANY } from '@/data/site'

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://myjeelewacje.pl'

export function absoluteUrl(path = '') {
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY.name,
    description: 'Mycie elewacji, mycie dachów i czyszczenie powierzchni w województwie lubelskim.',
    areaServed: ['Lublin', 'województwo lubelskie'],
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'lubelskie',
      addressCountry: 'PL'
    },
    url: siteUrl
  }
}

export function serviceSchema(name: string, city?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    provider: { '@type': 'LocalBusiness', name: COMPANY.name },
    areaServed: city || 'województwo lubelskie',
    serviceType: name
  }
}
