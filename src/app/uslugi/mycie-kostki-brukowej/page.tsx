import Link from 'next/link'
import { SERVICES } from '@/data/site'

export const metadata = {
  title: 'Mycie kostki brukowej | G Service',
  description: 'Mycie kostki brukowej, podjazdów i tarasów. Usuwanie nalotów, zabrudzeń i osadów.'
}

export default function PavingPage() {
  const service = SERVICES.find(s => s.slug === 'mycie-kostki-brukowej')!
  return <main><section className="page-hero"><span className="eyebrow">Usługa</span><h1>Mycie kostki brukowej, tarasów i podjazdów</h1><p>{service.description}</p></section><section className="split"><img src={service.image} alt="Mycie kostki brukowej" style={{borderRadius:24}} /><div className="content"><h2>Przywracamy estetyczny wygląd nawierzchni</h2><p>Czyszczenie kostki pomaga usunąć naloty, zabrudzenia, błoto i ciemne przebarwienia z podjazdów oraz tarasów.</p><ul>{service.bullets.map(item => <li key={item}>{item}</li>)}</ul><Link className="button button-inline" href="/#wycena">Zapytaj o wycenę</Link></div></section></main>
}
