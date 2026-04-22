import type { CollectionConfig } from 'payload'

export const Courses: CollectionConfig = {
  slug: 'courses',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'level', 'duration', 'order'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título del curso',
    },
    {
      name: 'level',
      type: 'select',
      required: true,
      label: 'Nivel',
      options: [
        { label: 'Principiante', value: 'Principiante' },
        { label: 'Intermedio', value: 'Intermedio' },
        { label: 'Avanzado', value: 'Avanzado' },
      ],
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
      label: 'Duración',
      admin: { description: 'Ej: 15 min' },
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
