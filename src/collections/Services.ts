import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: { singular: 'Usługa', plural: 'Usługi' },
  admin: { useAsTitle: 'title', group: 'Treści strony' },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Nazwa usługi' },
    { name: 'slug', type: 'text', required: true, unique: true, label: 'Adres URL' },
    { name: 'shortDescription', type: 'textarea', label: 'Krótki opis' },
    { name: 'content', type: 'richText', label: 'Pełna treść' },
    { name: 'bullets', type: 'array', label: 'Punkty / korzyści', fields: [{ name: 'item', type: 'text' }] },
    { name: 'order', type: 'number', defaultValue: 10, label: 'Kolejność' },
    { name: 'seoTitle', type: 'text', label: 'SEO title' },
    { name: 'seoDescription', type: 'textarea', label: 'SEO description' }
  ]
}
