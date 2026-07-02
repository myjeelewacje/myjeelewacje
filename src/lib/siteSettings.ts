export type PublicSiteSettings = {
  companyName: string
  tagline: string
  phone: string
  email: string
  serviceArea: string
  footerText: string
  heroTitle: string
  heroText: string
  googleMapsUrl?: string
  facebookUrl?: string
  seoTitle?: string
  seoDescription?: string
}

export const DEFAULT_SITE_SETTINGS: PublicSiteSettings = {
  companyName: 'G Service',
  tagline: 'Mycie elewacji i dachów',
  phone: '+48 000 000 000',
  email: 'kontakt@myjeelewacje.pl',
  serviceArea: 'Lublin i całe województwo lubelskie',
  footerText:
    'Profesjonalne mycie elewacji i dachów. Działamy głównie na terenie województwa lubelskiego i okolic.',
  heroTitle: 'Mycie elewacji i dachów w województwie lubelskim',
  heroText:
    'Wyślij zapytanie, podaj metraż, lokalizację i zdjęcia. Przygotujemy wycenę dopasowaną do zakresu prac.',
  googleMapsUrl: '',
  facebookUrl: '',
  seoTitle: 'Mycie elewacji i dachów Lublin, Lubelskie | G Service',
  seoDescription:
    'G Service - profesjonalne mycie elewacji, mycie dachów i czyszczenie powierzchni w województwie lubelskim.',
}

export function normalizeSiteSettings(data: Partial<PublicSiteSettings> | null | undefined) {
  return {
    companyName: data?.companyName || DEFAULT_SITE_SETTINGS.companyName,
    tagline: data?.tagline || DEFAULT_SITE_SETTINGS.tagline,
    phone: data?.phone || DEFAULT_SITE_SETTINGS.phone,
    email: data?.email || DEFAULT_SITE_SETTINGS.email,
    serviceArea: data?.serviceArea || DEFAULT_SITE_SETTINGS.serviceArea,
    footerText: data?.footerText || DEFAULT_SITE_SETTINGS.footerText,
    heroTitle: data?.heroTitle || DEFAULT_SITE_SETTINGS.heroTitle,
    heroText: data?.heroText || DEFAULT_SITE_SETTINGS.heroText,
    googleMapsUrl: data?.googleMapsUrl || '',
    facebookUrl: data?.facebookUrl || '',
    seoTitle: data?.seoTitle || DEFAULT_SITE_SETTINGS.seoTitle,
    seoDescription: data?.seoDescription || DEFAULT_SITE_SETTINGS.seoDescription,
  }
}

export function phoneHref(phone: string) {
  return `tel:${phone.replaceAll(' ', '').replaceAll('-', '')}`
}
