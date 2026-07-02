import Link from 'next/link'
import { LeadForm } from '@/components/LeadForm'
import { JsonLd } from '@/components/JsonLd'
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'
import { HeroSlider } from '@/components/HeroSlider'
import { COMPANY, SERVICES, PROCESS, FAQ, BEFORE_AFTER, GALLERY } from '@/data/site'
import { localBusinessSchema } from '@/lib/seo'

export default function HomePage() {
  return (
    <main>
      <JsonLd data={localBusinessSchema()} />
      <section className="hero hero-premium">
        <HeroSlider />
        <div className="hero-copy">
          <span className="eyebrow">Czystość, którą widać od razu</span>
          <h1>Profesjonalne mycie elewacji i dachów</h1>
          <p>Usuwamy zabrudzenia, glony, mech, porosty i osady. Obsługujemy domy prywatne, firmy i większe obiekty.</p>
          <div className="hero-buttons">
            <Link className="button button-inline" href="#realizacje">Zobacz realizacje</Link>
            <Link className="button-secondary" href="#wycena">Bezpłatna wycena</Link>
          </div>
          <div className="checks"><span>Bezpieczne metody</span><span>Szybka odpowiedź</span><span>Realne zdjęcia wykonanych prac</span></div>
        </div>
        <LeadForm />
        <div className="stats">
          <div className="stat"><strong>24h</strong><small>odpowiedź na zapytanie</small></div>
          <div className="stat"><strong>100%</strong><small>zdjęcia własnych realizacji</small></div>
          <div className="stat"><strong>{COMPANY.area}</strong><small>obszar działania</small></div>
          <div className="stat"><strong>SEO</strong><small>strona przygotowana lokalnie</small></div>
        </div>
      </section>

      <section id="uslugi">
        <div className="section-title centered"><span className="eyebrow">Nasze usługi</span><h2>Kompleksowe czyszczenie budynków</h2><p>Od domów jednorodzinnych po obiekty komercyjne. Każdą metodę dobieramy do materiału i stopnia zabrudzenia.</p></div>
        <div className="service-cards">
          {SERVICES.slice(0, 4).map((s) => (
            <article className="service-card" key={s.slug}>
              <img src={s.image} alt={s.title} />
              <div><h3>{s.title}</h3><p>{s.description}</p><Link href={`/uslugi/${s.slug}`}>Dowiedz się więcej →</Link></div>
            </article>
          ))}
        </div>
      </section>

      <section id="przed-po" className="before-section">
        <div className="section-title centered"><span className="eyebrow">Przed i po</span><h2>Zobacz efekt naszej pracy</h2><p>Interaktywne suwaki pokazują różnicę przed i po wykonanej usłudze.</p></div>
        <div className="ba-grid">
          {BEFORE_AFTER.slice(0, 4).map(item => (
            <article className="ba-card" key={item.title}>
              <BeforeAfterSlider before={item.before} after={item.after} title={item.title} alt={item.alt} />
              <div className="ba-caption"><span>{item.service}</span><h3>{item.title}</h3><p>{item.city}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="realizacje" className="projects-section">
        <div className="section-title"><div><span className="eyebrow">Realizacje</span><h2>Wykonane prace</h2></div><p>Galeria została przygotowana z Twoich zdjęć. W panelu administratora będzie można dodawać kolejne realizacje, opisy i zdjęcia.</p></div>
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

      <section className="split">
        <div className="panel-dark"><span className="eyebrow">Jak pracujemy</span><h2>Proces bez chaosu i bez zgadywania</h2><div className="process">{PROCESS.slice(0,3).map(p => <div className="process-item" key={p.step}><strong>{p.step}</strong><div><h3>{p.title}</h3><p>{p.text}</p></div></div>)}</div></div>
        <div className="content"><h2>Dlaczego dobór metody jest ważny?</h2><p>Mycie elewacji i dachów powinno być dopasowane do materiału. Innego podejścia wymaga tynk, innego klinkier, dachówka ceramiczna, cementowa lub blachodachówka. Dlatego formularz zbiera metraż, miejscowość, rodzaj budynku i zdjęcia.</p><Link className="button button-inline" href="/jak-pracujemy">Zobacz cały proces</Link></div>
      </section>

      <section>
        <div className="section-title centered"><span className="eyebrow">FAQ</span><h2>Najczęstsze pytania</h2><p>FAQ pomaga klientom i wzmacnia widoczność strony w Google.</p></div>
        <div className="faq">{FAQ.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
      </section>

      <section className="cta-strip">
        <div><span className="eyebrow">Darmowa wycena</span><h2>Potrzebujesz czystej elewacji lub dachu?</h2><p>Wyślij zapytanie i dołącz zdjęcia. Przygotujemy odpowiedź dopasowaną do Twojej nieruchomości.</p></div>
        <Link className="button button-inline" href="#wycena">Zapytaj o wycenę</Link>
      </section>
    </main>
  )
}
