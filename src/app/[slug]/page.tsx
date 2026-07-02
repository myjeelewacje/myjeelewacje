import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LOCAL_PAGES, FAQ } from '@/data/site'
import { JsonLd } from '@/components/JsonLd'
import { serviceSchema } from '@/lib/seo'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() { return LOCAL_PAGES.map((p) => ({ slug: p.slug })) }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = LOCAL_PAGES.find((p) => p.slug === slug)
  if (!page) return {}
  return { title: page.title, description: page.description }
}

export default async function LocalPage({ params }: Props) {
  const { slug } = await params
  const page = LOCAL_PAGES.find((p) => p.slug === slug)
  if (!page) notFound()
  const serviceName = page.service === 'elewacji' ? 'Mycie elewacji' : 'Mycie dachów'
  return <main><JsonLd data={serviceSchema(`${serviceName} ${page.city}`, page.city)} /><section className="page-hero"><span className="eyebrow">SEO lokalne</span><h1>{serviceName} {page.city}</h1><p>{page.description}</p></section><section className="content"><h2>Profesjonalne {serviceName.toLowerCase()} w miejscowości {page.city}</h2><p>G Service realizuje {serviceName.toLowerCase()} na terenie miejscowości {page.city} oraz w okolicach. Każdą wycenę przygotowujemy indywidualnie, ponieważ znaczenie ma metraż, wysokość budynku, rodzaj materiału, stopień zabrudzenia i dostęp do powierzchni.</p><h2>Jak wygląda wycena?</h2><p>Najprościej wysłać formularz i dodać zdjęcia. W zapytaniu podaj orientacyjny metraż, miejscowość oraz krótki opis zabrudzeń. Dzięki temu możemy szybciej ocenić zakres prac.</p><h2>Dlaczego warto działać lokalnie?</h2><p>Lokalne podstrony pomagają klientom znaleźć firmę działającą w ich okolicy. Ta strona jest przygotowana pod frazy związane z usługą oraz miastem: {serviceName.toLowerCase()} {page.city}.</p><Link className="button" href="/#wycena">Wyślij zapytanie o wycenę</Link><h2>FAQ</h2>{FAQ.slice(0,3).map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</section></main>
}
