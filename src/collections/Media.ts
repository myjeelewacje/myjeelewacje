import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Zdjęcie / plik', plural: 'Zdjęcia / pliki' },
  admin: { useAsTitle: 'alt', group: 'Media' },
  upload: {
    staticDir: 'media',
    imageSizes: [
      { name: 'thumb', width: 480, height: 320, position: 'centre' },
      { name: 'card', width: 960, height: 640, position: 'centre' },
      { name: 'hero', width: 1920, height: 1080, position: 'centre' }
    ],
    mimeTypes: ['image/*']
  },
  fields: [
    { name: 'alt', type: 'text', required: true, label: 'Opis zdjęcia ALT pod SEO' },
    { name: 'city', type: 'text', label: 'Miejscowość' },
    { name: 'serviceType', type: 'select', label: 'Typ usługi', options: ['mycie elewacji', 'mycie dachów', 'mycie kostki', 'inne'] }
  ]
}
