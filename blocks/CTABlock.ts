import type { Block } from 'payload'

export const CTABlock: Block = {
  slug: 'cta',
  interfaceName: 'CTABlock',
  labels: {
    singular: 'CTA',
    plural: 'CTAs',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
      label: 'Texto del botón',
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      label: 'URL destino',
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'primary',
      label: 'Estilo',
      options: [
        { label: 'Primario', value: 'primary' },
        { label: 'Secundario', value: 'secondary' },
        { label: 'Ghost', value: 'ghost' },
      ],
    },
    {
      name: 'newTab',
      type: 'checkbox',
      label: 'Abrir en nueva pestaña',
      defaultValue: false,
    },
  ],
}
