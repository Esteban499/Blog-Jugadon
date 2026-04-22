import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  folders: true,
  upload: {
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        height: 200,
        position: 'centre',
      },
    ],
  },
  admin: {
    useAsTitle: 'alt',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Texto alternativo',
      admin: {
        description: 'Descripción de la imagen para accesibilidad y SEO',
      },
    },
  ],
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => ['admin', 'editor'].includes(req.user?.role),
  },
}
