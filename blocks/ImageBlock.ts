import type { Block } from 'payload'

export const ImageBlock: Block = {
  slug: 'imageBlock',
  interfaceName: 'ImageBlock',
  labels: {
    singular: 'Imagen',
    plural: 'Imágenes',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Imagen',
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption (opcional)',
    },
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'center',
      label: 'Alineación',
      options: [
        { label: 'Izquierda', value: 'left' },
        { label: 'Centro', value: 'center' },
        { label: 'Ancho completo', value: 'full' },
      ],
    },
  ],
}
