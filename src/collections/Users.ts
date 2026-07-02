import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: { useAsTitle: 'email', group: 'Administracja' },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user)
  },
  fields: [
    { name: 'name', type: 'text', label: 'Imię i nazwisko' },
    { name: 'role', type: 'select', defaultValue: 'admin', options: [{ label: 'Administrator', value: 'admin' }, { label: 'Edytor', value: 'editor' }] }
  ]
}
