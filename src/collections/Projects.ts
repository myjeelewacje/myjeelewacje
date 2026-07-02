import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: { singular: 'Realizacja', plural: 'Realizacje' },
  admin: { useAsTitle: 'title', group: 'Treści strony' },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Tytuł realizacji' },
    { name: 'slug', type: 'text', required: true, unique: true, label: 'Adres URL' },
    { name: 'city', type: 'text', required: true, label: 'Miejscowość' },
    { name: 'voivodeship', type: 'text', defaultValue: 'lubelskie', label: 'Województwo' },
    { name: 'serviceType', type: 'select', required: true, label: 'Typ usługi', options: ['mycie elewacji', 'mycie dachów', 'mycie kostki', 'inne'] },
    { name: 'areaM2', type: 'number', label: 'Powierzchnia m²' },
    { name: 'description', type: 'textarea', label: 'Opis realizacji' },
    { name: 'beforeImage', type: 'relationship', relationTo: 'media', label: 'Zdjęcie przed' },
    { name: 'afterImage', type: 'relationship', relationTo: 'media', label: 'Zdjęcie po' },
    { name: 'published', type: 'checkbox', defaultValue: true, label: 'Opublikowane' }
  ]
}
