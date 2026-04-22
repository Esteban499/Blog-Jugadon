import type { Block } from 'payload'

export const ColumnsBlock: Block = {
  slug: 'columns',
  interfaceName: 'ColumnsBlock',
  labels: {
    singular: 'Columnas',
    plural: 'Columnas',
  },
  fields: [
    {
      name: 'count',
      type: 'select',
      required: true,
      defaultValue: '2',
      label: 'Cantidad de columnas',
      options: [
        { label: '2 columnas', value: '2' },
        { label: '3 columnas', value: '3' },
        { label: '4 columnas', value: '4' },
      ],
    },
    {
      name: 'columns',
      type: 'array',
      required: true,
      label: 'Columnas',
      minRows: 2,
      maxRows: 4,
      admin: {
        description: 'Agregá tantas columnas como indicaste arriba. Cada una tiene su contenido.',
      },
      fields: [
        {
          name: 'content',
          type: 'richText',
          required: true,
          label: 'Contenido',
        },
      ],
    },
  ],
}
