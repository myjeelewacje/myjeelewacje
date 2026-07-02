import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Services } from './collections/Services'
import { Projects } from './collections/Projects'
import { LocalPages } from './collections/LocalPages'
import { BlogPosts } from './collections/BlogPosts'
import { Leads } from './collections/Leads'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    meta: {
      title: 'G Service CMS',
      description: 'Panel administracyjny strony G Service',
      robots: 'noindex,nofollow',
    },
    importMap: {
      baseDir: path.resolve(dirname),
      importMapFile: path.resolve(dirname, 'app/(payload)/admin/importMap.js'),
    },
  },
  routes: {
    admin: '/admin',
    api: '/api/payload',
    graphQL: '/api/graphql',
  },
  editor: lexicalEditor({}),
  collections: [Users, Media, Services, Projects, LocalPages, BlogPosts, Leads],
  globals: [SiteSettings],
  secret: process.env.PAYLOAD_SECRET || 'CHANGE_ME_IN_ENV_FILE_MINIMUM_32_CHARS',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
    push: true,
  }),
})
