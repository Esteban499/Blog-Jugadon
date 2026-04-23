import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { es } from '@payloadcms/translations/languages/es'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users.ts'
import { Posts } from './collections/Posts.ts'
import { Categories } from './collections/Categories.ts'
import { Media } from './collections/Media.ts'
import { Games } from './collections/Games.ts'
import { Courses } from './collections/Courses.ts'
import { Providers } from './collections/Providers.ts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const isProduction = process.env.NODE_ENV === 'production'

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— Jugadon Blog',
    },
  },
  folders: {
    browseByFolder: true,
    collectionSpecific: true,
  },
  i18n: {
    supportedLanguages: { es },
    fallbackLanguage: 'es',
  },
  collections: [Users, Posts, Categories, Media, Games, Courses, Providers],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || (() => { throw new Error('PAYLOAD_SECRET env var is required') })(),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  plugins: [
    ...(isProduction && process.env.BLOB_READ_WRITE_TOKEN
      ? [
          vercelBlobStorage({
            collections: {
              media: true,
            },
            token: process.env.BLOB_READ_WRITE_TOKEN,
          }),
        ]
      : []),
  ],
  upload: {
    limits: {
      fileSize: 5_000_000,
    },
  },
})
