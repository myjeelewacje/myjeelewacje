import Link from 'next/link'
import { SERVICES } from '@/data/site'

export const metadata = {
  title: 'Mycie obiektów komercyjnych | G Service',
  description: 'Czyszczenie elewacji obiektów firmowych, lokali usługowych i budynków komercyjnych.'
}

export default function CommercialPage() {
  const service = SERVICES.find(s => s.slug === 'obiekty-komercyjne')!
  return <main><section className="page-hero"><span className="eyebrow">Dla firm</span><h1>Mycie elewacji i powierzchni obiektów komercyjnych</h1><p>{service.description}</p></section><section className="split"><img src={service.image} alt="Obiekt komercyjny po czyszczeniu" style={{borderRadius:24}} /><div className="content"><h2>Prace dla firm i większych obiektów</h2><p>Przy większych realizacjach liczy się dobra organizacja, bezpieczeństwo i dokumentacja efektów. Możemy zaplanować prace etapowo i dopasować termin do funkcjonowania obiektu.</p><ul>{service.bullets.map(item => <li key={item}>{item}</li>)}</ul><Link className="button button-inline" href="/#wycena">Zapytaj o wycenę</Link></div></section></main>
}
