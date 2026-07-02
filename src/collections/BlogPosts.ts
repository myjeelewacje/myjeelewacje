import type { CollectionConfig } from 'payload'

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  labels: { singular: 'Wpis blogowy', plural: 'Blog' },
  admin: { useAsTitle: 'title', group: 'SEO lokalne' },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Tytuł' },
    { name: 'slug', type: 'text', required: true, unique: true, label: 'Adres URL' },
    { name: 'excerpt', type: 'textarea', label: 'Krótki opis' },
    { name: 'content', type: 'richText', label: 'Treść' },
    { name: 'coverImage', type: 'relationship', relationTo: 'media', label: 'Zdjęcie główne' },
    { name: 'seoTitle', type: 'text', label: 'SEO title' },
    { name: 'seoDescription', type: 'textarea', label: 'SEO description' },
    { name: 'publishedAt', type: 'date', label: 'Data publikacji' },
    { name: 'published', type: 'checkbox', defaultValue: true, label: 'Opublikowane' }
  ]
}
