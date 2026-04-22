import type { Block } from 'payload'

export const GameCardBlock: Block = {
  slug: 'gameCardBlock',
  interfaceName: 'GameCardBlock',
  labels: {
    singular: 'Ficha de juego',
    plural: 'Fichas de juego',
  },
  fields: [
    {
      name: 'game',
      type: 'relationship',
      relationTo: 'games',
      required: true,
      label: 'Juego',
    },
  ],
}
