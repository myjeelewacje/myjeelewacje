import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Ustawienia strony',
  admin: { group: 'Treści strony' },
  fields: [
    { name: 'companyName', type: 'text', defaultValue: 'G Service', label: 'Nazwa firmy' },
    { name: 'phone', type: 'text', label: 'Telefon' },
    { name: 'email', type: 'email', label: 'E-mail' },
    { name: 'heroTitle', type: 'text', defaultValue: 'Mycie elewacji i dachów w województwie lubelskim', label: 'Nagłówek główny' },
    { name: 'heroText', type: 'textarea', label: 'Tekst w hero' },
    { name: 'serviceArea', type: 'text', defaultValue: 'Lublin i całe województwo lubelskie', label: 'Obszar działania' },
    { name: 'googleMapsUrl', type: 'text', label: 'Link do Google Maps / profilu firmy' },
    { name: 'facebookUrl', type: 'text', label: 'Facebook' },
    { name: 'seoTitle', type: 'text', label: 'Domyślny SEO title' },
    { name: 'seoDescription', type: 'textarea', label: 'Domyślny SEO description' }
  ]
}
