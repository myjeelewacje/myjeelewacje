import { withPayload } from '@payloadcms/next/withPayload'
import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' }
    ]
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@payload-config': path.resolve(process.cwd(), 'src/payload.config.ts'),
      '@': path.resolve(process.cwd(), 'src')
    }
    return config
  }
}

export default withPayload(nextConfig)
