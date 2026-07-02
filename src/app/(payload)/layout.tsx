import type { ReactNode } from 'react'
import config from '@payload-config'
import { RootLayout } from '@payloadcms/next/layouts'
import { importMap } from './admin/importMap.js'
import '../globals.css'

export default ({ children }: { children: ReactNode }) => (
  <RootLayout config={config} importMap={importMap}>{children}</RootLayout>
)
