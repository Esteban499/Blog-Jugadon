import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nombre',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
      admin: {
        description: 'URL amigable. Ej: noticias-gaming',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'color',
      type: 'text',
      label: 'Color (hex)',
      admin: { description: 'Color del badge de categoría. Ej: #4A26BF' },
    },
  ],
  access: {
    read: () => true,
    create: ({ req }) => ['admin', 'editor'].includes(req.user?.role),
    update: ({ req }) => ['admin', 'editor'].includes(req.user?.role),
    delete: ({ req }) => req.user?.role === 'admin',
  },
}
