import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { COMPANY } from '@/data/site'
import { absoluteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://myjeelewacje.pl'),
  title: {
    default: 'Mycie elewacji i dachów Lublin, Lubelskie | G Service',
    template: '%s | G Service'
  },
  description: 'G Service - profesjonalne mycie elewacji, mycie dachów i czyszczenie powierzchni w województwie lubelskim. Realizacje przed i po, darmowa wycena online.',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    siteName: COMPANY.name,
    url: absoluteUrl('/'),
    title: 'G Service - mycie elewacji i dachów w woj. lubelskim',
    description: 'Wyślij zapytanie, podaj metraż, lokalizację i zdjęcia. Przygotujemy wycenę.'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pl"><body><Header />{children}<Footer /></body></html>
}
