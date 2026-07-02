import type { CollectionConfig } from 'payload'

export const LocalPages: CollectionConfig = {
  slug: 'local-pages',
  labels: { singular: 'Podstrona lokalna SEO', plural: 'Podstrony lokalne SEO' },
  admin: { useAsTitle: 'title', group: 'SEO lokalne' },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Tytuł strony' },
    { name: 'slug', type: 'text', required: true, unique: true, label: 'Slug, np. mycie-elewacji-lublin' },
    { name: 'city', type: 'text', required: true, label: 'Miasto / miejscowość' },
    { name: 'serviceType', type: 'select', required: true, label: 'Usługa', options: ['mycie elewacji', 'mycie dachów', 'mycie kostki'] },
    { name: 'h1', type: 'text', label: 'Nagłówek H1' },
    { name: 'intro', type: 'textarea', label: 'Wstęp' },
    { name: 'content', type: 'richText', label: 'Treść główna' },
    { name: 'faq', type: 'array', label: 'FAQ', fields: [{ name: 'question', type: 'text' }, { name: 'answer', type: 'textarea' }] },
    { name: 'seoTitle', type: 'text', label: 'SEO title' },
    { name: 'seoDescription', type: 'textarea', label: 'SEO description' },
    { name: 'published', type: 'checkbox', defaultValue: true, label: 'Opublikowane' }
  ]
}
