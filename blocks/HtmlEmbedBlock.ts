import type { Block } from 'payload'

export const HtmlEmbedBlock: Block = {
  slug: 'htmlEmbed',
  interfaceName: 'HtmlEmbedBlock',
  labels: {
    singular: 'HTML/CSS embebido',
    plural: 'HTML/CSS embebidos',
  },
  fields: [
    {
      name: 'html',
      type: 'code',
      required: true,
      label: 'HTML',
      admin: {
        language: 'html',
        description: 'El HTML se renderiza tal cual en el frontend. Solo usalo si sabés lo que hacés.',
      },
    },
    {
      name: 'css',
      type: 'code',
      label: 'CSS',
      admin: {
        language: 'css',
        description: 'CSS scopeado a este bloque (opcional).',
      },
    },
  ],
}
