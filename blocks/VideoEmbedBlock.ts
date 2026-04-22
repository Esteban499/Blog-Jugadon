import type { Block } from 'payload'

export const VideoEmbedBlock: Block = {
  slug: 'videoEmbed',
  interfaceName: 'VideoEmbedBlock',
  labels: {
    singular: 'Video embed',
    plural: 'Video embeds',
  },
  fields: [
    {
      name: 'url',
      type: 'text',
      required: true,
      label: 'URL del video',
      admin: {
        description: 'URL de YouTube o Vimeo (ej: https://youtu.be/abc123)',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Título (opcional, para accesibilidad)',
    },
  ],
}
