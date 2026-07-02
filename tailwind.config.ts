import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forest: '#132417',
        leaf: '#65c33a',
        mint: '#e9f6e3',
        cream: '#f7f5ef'
      },
      boxShadow: {
        premium: '0 24px 80px rgba(0,0,0,.22)'
      }
    }
  },
  plugins: []
}
export default config
