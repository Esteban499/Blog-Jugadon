import type { Block } from 'payload'

export const FAQBlock: Block = {
  slug: 'faq',
  interfaceName: 'FAQBlock',
  labels: {
    singular: 'FAQ',
    plural: 'FAQs',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título de la sección (opcional)',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      label: 'Preguntas',
      labels: {
        singular: 'Pregunta',
        plural: 'Preguntas',
      },
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
          label: 'Pregunta',
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
          label: 'Respuesta',
        },
      ],
    },
  ],
}
