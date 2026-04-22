import type { Block } from 'payload'

export const CalloutBlock: Block = {
  slug: 'callout',
  interfaceName: 'CalloutBlock',
  labels: {
    singular: 'Callout',
    plural: 'Callouts',
  },
  fields: [
    {
      name: 'variant',
      type: 'select',
      required: true,
      defaultValue: 'info',
      label: 'Tipo',
      options: [
        { label: 'Info', value: 'info' },
        { label: 'Tip', value: 'tip' },
        { label: 'Warning', value: 'warning' },
        { label: 'Success', value: 'success' },
      ],
    },
    {
      name: 'title',
      type: 'text',
      label: 'Título (opcional)',
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      label: 'Contenido',
    },
  ],
}
