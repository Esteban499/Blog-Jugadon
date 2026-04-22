import type { Block } from 'payload'

export const HighlightBlock: Block = {
  slug: 'highlight',
  interfaceName: 'HighlightBlock',
  labels: {
    singular: 'Destacado',
    plural: 'Destacados',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título (opcional)',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Contenido',
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'default',
      label: 'Estilo',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Primario', value: 'primary' },
        { label: 'Acento', value: 'accent' },
      ],
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Icono (emoji opcional)',
      admin: {
        description: 'Ej: ⭐ 🎯 🔥',
      },
    },
  ],
}
