import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Ustawienia strony',
  admin: {
    group: 'Treści strony',
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      defaultValue: 'G Service',
      label: 'Nazwa firmy',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'Mycie elewacji i dachów',
      label: 'Krótki opis pod logo',
    },
    {
      name: 'phone',
      type: 'text',
      defaultValue: '+48 000 000 000',
      label: 'Telefon',
    },
    {
      name: 'email',
      type: 'email',
      defaultValue: 'kontakt@myjeelewacje.pl',
      label: 'E-mail',
    },
    {
      name: 'serviceArea',
      type: 'text',
      defaultValue: 'Lublin i całe województwo lubelskie',
      label: 'Obszar działania',
    },
    {
      name: 'footerText',
      type: 'textarea',
      defaultValue:
        'Profesjonalne mycie elewacji i dachów. Działamy głównie na terenie województwa lubelskiego i okolic.',
      label: 'Tekst w stopce',
    },
    {
      name: 'heroTitle',
      type: 'text',
      defaultValue: 'Mycie elewacji i dachów w województwie lubelskim',
      label: 'Nagłówek główny',
    },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Wyślij zapytanie, podaj metraż, lokalizację i zdjęcia. Przygotujemy wycenę dopasowaną do zakresu prac.',
      label: 'Tekst w hero',
    },
    {
      name: 'googleMapsUrl',
      type: 'text',
      label: 'Link do Google Maps / profilu firmy',
    },
    {
      name: 'facebookUrl',
      type: 'text',
      label: 'Facebook',
    },
    {
      name: 'seoTitle',
      type: 'text',
      label: 'Domyślny SEO title',
      defaultValue: 'Mycie elewacji i dachów Lublin, Lubelskie | G Service',
    },
    {
      name: 'seoDescription',
      type: 'textarea',
      label: 'Domyślny SEO description',
      defaultValue:
        'G Service - profesjonalne mycie elewacji, mycie dachów i czyszczenie powierzchni w województwie lubelskim.',
    },
  ],
}
