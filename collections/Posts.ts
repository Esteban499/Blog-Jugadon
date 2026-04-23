import type { CollectionConfig } from 'payload'
import {
  lexicalEditor,
  BlocksFeature,
  EXPERIMENTAL_TableFeature,
} from '@payloadcms/richtext-lexical'
import { CalloutBlock } from '../blocks/CalloutBlock'
import { ImageBlock } from '../blocks/ImageBlock'
import { VideoEmbedBlock } from '../blocks/VideoEmbedBlock'
import { GameCardBlock } from '../blocks/GameCardBlock'
import { CTABlock } from '../blocks/CTABlock'
import { FAQBlock } from '../blocks/FAQBlock'
import { HighlightBlock } from '../blocks/HighlightBlock'
import { ColumnsBlock } from '../blocks/ColumnsBlock'
import { HtmlEmbedBlock } from '../blocks/HtmlEmbedBlock'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'author', 'publishedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
      admin: {
        description: 'URL del post. Ej: mi-primer-post',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Resumen',
      admin: {
        description: 'Breve descripción para listados y SEO',
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Contenido',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          EXPERIMENTAL_TableFeature(),
          BlocksFeature({
            blocks: [
              CalloutBlock,
              HighlightBlock,
              ColumnsBlock,
              HtmlEmbedBlock,
              ImageBlock,
              VideoEmbedBlock,
              GameCardBlock,
              CTABlock,
              FAQBlock,
            ],
          }),
        ],
      }),
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen destacada',
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      label: 'Categorías',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      label: 'Autor',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      label: 'Estado',
      options: [
        { label: 'Borrador', value: 'draft' },
        { label: 'Publicado', value: 'published' },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Fecha de publicación',
      admin: {
        condition: (data) => data.status === 'published',
      },
    },
    {
      name: 'readTime',
      type: 'text',
      label: 'Tiempo de lectura',
      admin: { description: 'Ej: 5 min' },
    },
  ],
  access: {
    read: ({ req }) => {
      if (req.user) return true
      return { status: { equals: 'published' } }
    },
    create: ({ req }) => !!req.user,
    update: ({ req, id }) => {
      if (req.user?.role === 'admin' || req.user?.role === 'editor') return true
      return { author: { equals: req.user?.id } }
    },
    delete: ({ req }) => ['admin', 'editor'].includes(req.user?.role),
  },
  hooks: {
    beforeChange: [
      ({ data, req, operation }) => {
        if (operation === 'create' && req.user) {
          data.author = req.user.id
        }
        if (data.status === 'published' && !data.publishedAt) {
          data.publishedAt = new Date().toISOString()
        }
        return data
      },
    ],
  },
}
