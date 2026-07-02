import Link from 'next/link'
import { SERVICES, PROCESS } from '@/data/site'

export const metadata = {
  title: 'Mycie elewacji Lublin i woj. lubelskie | G Service',
  description: 'Profesjonalne mycie elewacji w Lublinie i województwie lubelskim. Usuwanie glonów, pleśni, osadów i zabrudzeń z tynku, klinkieru i betonu.'
}

export default function FacadePage() {
  const service = SERVICES.find(s => s.slug === 'mycie-elewacji')!
  return (
    <main>
      <section className="page-hero"><span className="eyebrow">Usługa</span><h1>Mycie elewacji w Lublinie i województwie lubelskim</h1><p>{service.description}</p></section>
      <section className="split"><div><img src={service.image} alt="Mycie elewacji" style={{borderRadius: 24}} /></div><div className="content"><h2>Jak czyścimy elewacje?</h2><p>Najpierw oceniamy rodzaj powierzchni i zabrudzenia. Inaczej pracujemy na tynku, inaczej na cegle, klinkierze lub betonie. Dobieramy ciśnienie, środek i technikę tak, aby usunąć nalot bez uszkodzenia powierzchni.</p><ul>{service.bullets.map(item => <li key={item}>{item}</li>)}</ul><Link className="button button-inline" href="/#wycena">Zapytaj o wycenę</Link></div></section>
      <section><div className="section-title centered"><span className="eyebrow">Proces</span><h2>Przebieg usługi</h2></div><div className="service-cards">{PROCESS.slice(0,4).map(p => <article className="service-card" key={p.step}><div><span className="eyebrow">{p.step}</span><h3>{p.title}</h3><p>{p.text}</p></div></article>)}</div></section>
    </main>
  )
}
