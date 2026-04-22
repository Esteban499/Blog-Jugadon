import type { CollectionConfig } from 'payload'

export const Providers: CollectionConfig = {
  slug: 'providers',
  folders: true,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nombre del proveedor',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Logo',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Orden',
      defaultValue: 0,
      admin: { description: 'Orden en el carrusel (menor = primero)' },
    },
  ],
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => ['admin', 'editor'].includes(req.user?.role),
  },
}
