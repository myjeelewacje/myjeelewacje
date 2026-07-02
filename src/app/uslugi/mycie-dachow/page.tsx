import Link from 'next/link'
import { SERVICES, PROCESS } from '@/data/site'

export const metadata = {
  title: 'Mycie dachów Lublin i woj. lubelskie | G Service',
  description: 'Profesjonalne mycie dachów w Lublinie i województwie lubelskim. Usuwanie mchu, porostów i osadów z dachówki i blachodachówki.'
}

export default function RoofPage() {
  const service = SERVICES.find(s => s.slug === 'mycie-dachow')!
  return (
    <main>
      <section className="page-hero"><span className="eyebrow">Usługa</span><h1>Mycie dachów w Lublinie i województwie lubelskim</h1><p>{service.description}</p></section>
      <section className="split"><div><img src={service.image} alt="Mycie dachów" style={{borderRadius: 24}} /></div><div className="content"><h2>Jak czyścimy dachy?</h2><p>Przed pracą oceniamy rodzaj pokrycia, zabrudzenia, dostęp i bezpieczeństwo wejścia. Czyścimy dachy z mchu, porostów, brudu i osadów, stosując technikę dopasowaną do materiału.</p><ul>{service.bullets.map(item => <li key={item}>{item}</li>)}</ul><Link className="button button-inline" href="/#wycena">Zapytaj o wycenę</Link></div></section>
      <section><div className="section-title centered"><span className="eyebrow">Proces</span><h2>Przebieg usługi</h2></div><div className="service-cards">{PROCESS.slice(0,4).map(p => <article className="service-card" key={p.step}><div><span className="eyebrow">{p.step}</span><h3>{p.title}</h3><p>{p.text}</p></div></article>)}</div></section>
    </main>
  )
}
