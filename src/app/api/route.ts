import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { normalizeSiteSettings } from '@/lib/siteSettings'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const payload = await getPayload({
      config: configPromise,
    })

    const settings = await payload.findGlobal({
      slug: 'site-settings',
    })

    return NextResponse.json(normalizeSiteSettings(settings), {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      },
    })
  } catch (error) {
    console.error('Failed to load site settings:', error)

    return NextResponse.json(normalizeSiteSettings(null), {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      },
    })
  }
}
