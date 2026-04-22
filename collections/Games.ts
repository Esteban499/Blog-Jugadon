import type { CollectionConfig } from 'payload'

export const Games: CollectionConfig = {
  slug: 'games',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'provider', 'badge', 'featured', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nombre del juego',
    },
    {
      name: 'provider',
      type: 'text',
      required: true,
      label: 'Proveedor',
    },
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      admin: { description: 'Ej: HOT, POPULAR, NUEVO, EN VIVO' },
    },
    {
      name: 'badgeColor',
      type: 'text',
      label: 'Color del badge (hex)',
      admin: { description: 'Ej: #FF4444' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen del juego',
    },
    {
      name: 'rtp',
      type: 'text',
      label: 'RTP',
      admin: { description: 'Ej: 96.5%' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Destacado en home',
      defaultValue: false,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Orden',
      defaultValue: 0,
      admin: { description: 'Orden de aparición (menor = primero)' },
    },
  ],
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => ['admin', 'editor'].includes(req.user?.role),
  },
}
