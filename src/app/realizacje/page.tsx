import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'
import { BEFORE_AFTER, GALLERY } from '@/data/site'

export const metadata = {
  title: 'Realizacje przed i po | G Service',
  description: 'Zobacz realizacje G Service: mycie elewacji, mycie dachów, obiekty komercyjne i kostka brukowa.'
}

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero"><span className="eyebrow">Realizacje</span><h1>Prace wykonane przez G Service</h1><p>Zdjęcia przed i po oraz galeria wykonanych usług.</p></section>
      <section id="przed-po" className="before-section">
        <div className="section-title centered"><span className="eyebrow">Przed i po</span><h2>Efekt widoczny na zdjęciach</h2><p>Przesuń suwak, aby porównać powierzchnię przed i po czyszczeniu.</p></div>
        <div className="ba-grid">
          {BEFORE_AFTER.map(item => (
            <article className="ba-card" key={item.title}>
              <BeforeAfterSlider before={item.before} after={item.after} title={item.title} alt={item.alt} />
              <div className="ba-caption"><span>{item.service}</span><h3>{item.title}</h3><p>{item.city}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section>
        <div className="section-title"><div><span className="eyebrow">Galeria</span><h2>Więcej wykonanych prac</h2></div><p>Po uruchomieniu panelu administratora możesz dodawać kolejne zdjęcia, miasta, opisy i kategorie realizacji.</p></div>
        <div className="gallery-grid">
          {GALLERY.map(item => (
            <article className="gallery-card" key={item.image}>
              <img src={item.image} alt={item.title} />
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.city}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
