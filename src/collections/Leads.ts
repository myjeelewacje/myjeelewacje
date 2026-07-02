import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  labels: { singular: 'Zapytanie klienta', plural: 'Zapytania klientów' },
  admin: { useAsTitle: 'name', group: 'Sprzedaż' },
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user)
  },
  fields: [
    { name: 'status', type: 'select', defaultValue: 'new', label: 'Status', options: [{ label: 'Nowe', value: 'new' }, { label: 'Wycena wysłana', value: 'quoted' }, { label: 'Umówione', value: 'scheduled' }, { label: 'Zamknięte', value: 'closed' }] },
    { name: 'service', type: 'select', required: true, label: 'Rodzaj usługi', options: ['Mycie elewacji', 'Mycie dachu', 'Mycie kostki brukowej', 'Inne'] },
    { name: 'areaM2', type: 'number', label: 'Powierzchnia m²' },
    { name: 'city', type: 'text', required: true, label: 'Miejscowość' },
    { name: 'voivodeship', type: 'text', label: 'Województwo' },
    { name: 'buildingType', type: 'text', label: 'Rodzaj budynku' },
    { name: 'material', type: 'text', label: 'Materiał' },
    { name: 'timeframe', type: 'text', label: 'Termin' },
    { name: 'details', type: 'textarea', label: 'Dodatkowe informacje' },
    { name: 'name', type: 'text', required: true, label: 'Imię i nazwisko' },
    { name: 'phone', type: 'text', required: true, label: 'Telefon' },
    { name: 'email', type: 'email', label: 'E-mail' },
    { name: 'sourceUrl', type: 'text', label: 'Strona źródłowa' }
  ]
}
