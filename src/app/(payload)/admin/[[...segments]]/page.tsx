import type { Metadata } from 'next'
import config from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap.js'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[] | undefined
  }>
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> => {
  return generatePageMetadata({
    config,
    params,
    searchParams,
  })
}

export default function Page({ params, searchParams }: Args) {
  return RootPage({
    config,
    params,
    searchParams,
    importMap,
  })
}