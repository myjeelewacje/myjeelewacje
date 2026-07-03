import Link from 'next/link'
import { LeadForm } from '@/components/LeadForm'
import { JsonLd } from '@/components/JsonLd'
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'
import { HeroSlider } from '@/components/HeroSlider'
import { COMPANY, SERVICES, PROCESS, FAQ } from '@/data/site'
import { REALIZATIONS } from '@/data/realizations'
import { localBusinessSchema } from '@/lib/seo'

const EXTRA_HOME_SLIDERS = [
  {
    slug: 'mycie-elewacji-budynek-uslugowy-belgia',
    shortTitle: 'Mycie elewacji budynku usługowego',
    location: 'Belgia – realizacja zagraniczna',
    service: 'Mycie elewacji',
    sliderBefore: '/images/portfolio/mycie-elewacji-budynek-uslugowy-belgia-przed.webp',
    sliderAfter: '/images/portfolio/mycie-elewacji-budynek-uslugowy-belgia-po.webp',
    sliderAlt:
      'Porównanie elewacji budynku usługowego przed i po myciu elewacji',
  },
]

export default function HomePage() {
  const homeSliders = [
    ...REALIZATIONS.map((project) => ({
      slug: project.slug,
      shortTitle: project.shortTitle,
      location: project.location,
      service: project.service,
      sliderBefore: project.sliderBefore,
      sliderAfter: project.sliderAfter,
      sliderAlt: project.sliderAlt,
      href: `/realizacje/${project.slug}`,
    })),
    ...EXTRA_HOME_SLIDERS,
  ]

  return (
    <main>
      <JsonLd data={localBusinessSchema()} />

      <section className="hero hero-premium">
        <HeroSlider />

        <div className="hero-copy">
          <span className="eyebrow">Czystość, którą widać od razu</span>
          <h1>Profesjonalne mycie elewacji i dachów</h1>
          <p>
            Usuwamy zabrudzenia, glony, mech, porosty i osady. Obsługujemy domy
            prywatne, firmy i większe obiekty, również w formule realizacji
            etapowych.
          </p>

          <div className="hero-buttons">
            <Link className="button button-inline" href="#realizacje">
              Zobacz realizacje
            </Link>
            <Link className="button-secondary" href="#wycena">
              Bezpłatna wycena
            </Link>
          </div>

          <div className="checks">
            <span>Bezpieczne metody</span>
            <span>Szybka odpowiedź</span>
            <span>Realne zdjęcia wykonanych prac</span>
          </div>
        </div>

        <LeadForm />

        <div className="stats">
          <div className="stat">
            <strong>24h</strong>
            <small>odpowiedź na zapytanie</small>
          </div>
          <div className="stat">
            <strong>100%</strong>
            <small>zdjęcia własnych realizacji</small>
          </div>
          <div className="stat">
            <strong>{COMPANY.area}</strong>
            <small>obszar działania</small>
          </div>
          <div className="stat">
            <strong>SEO</strong>
            <small>strona przygotowana lokalnie</small>
          </div>
        </div>
      </section>

      <section id="uslugi">
        <div className="section-title centered">
          <span className="eyebrow">Nasze usługi</span>
          <h2>Kompleksowe czyszczenie budynków</h2>
          <p>
            Od domów jednorodzinnych po obiekty komercyjne. Każdą metodę
            dobieramy do materiału i stopnia zabrudzenia.
          </p>
        </div>

        <div className="service-cards">
          {SERVICES.slice(0, 4).map((s) => (
            <article className="service-card" key={s.slug}>
              <img src={s.image} alt={s.title} />
              <div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <Link href={`/uslugi/${s.slug}`}>Dowiedz się więcej →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="przed-po" className="before-section">
        <div className="section-title centered">
          <span className="eyebrow">Przed i po</span>
          <h2>Zobacz efekt naszej pracy</h2>
          <p>
            Na stronie głównej pokazujemy najlepsze porównania przed i po z
            wybranych realizacji.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {homeSliders.map((project) => (
            <article
              key={project.slug}
              className="ba-card"
              style={{ maxWidth: '760px', margin: '0 auto', width: '100%' }}
            >
              <BeforeAfterSlider
                before={project.sliderBefore}
                after={project.sliderAfter}
                title={project.shortTitle}
                alt={project.sliderAlt}
              />

              <div className="ba-caption">
                <span>{project.service}</span>
                <h3>{project.shortTitle}</h3>
                <p>{project.location}</p>

                {'href' in project && project.href ? (
                  <div style={{ marginTop: '14px' }}>
                    <Link className="button button-inline" href={project.href}>
                      Zobacz realizację
                    </Link>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="realizacje" className="projects-section">
        <div className="section-title">
          <div>
            <span className="eyebrow">Realizacje</span>
            <h2>Wykonane prace pokazane projekt po projekcie</h2>
          </div>
          <p>
            Zamiast pojedynczych, przypadkowych zdjęć pokazujemy pełne
            realizacje: opis prac, zakres usługi oraz zdjęcia przed, w trakcie i
            po wykonaniu usługi.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
          }}
        >
          {REALIZATIONS.map((project) => (
            <article
              key={project.slug}
              className="gallery-card"
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <img
                src={project.cardImage}
                alt={project.cardAlt}
                loading="lazy"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
              />

              <div style={{ padding: '24px' }}>
                <span>{project.service}</span>
                <h3 style={{ marginTop: '12px' }}>{project.shortTitle}</h3>
                <p style={{ marginTop: '12px' }}>{project.excerpt}</p>

                <div style={{ marginTop: '18px' }}>
                  <Link
                    className="button button-inline"
                    href={`/realizacje/${project.slug}`}
                  >
                    Zobacz projekt
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split">
        <div className="panel-dark">
          <span className="eyebrow">Jak pracujemy</span>
          <h2>Proces bez chaosu i bez zgadywania</h2>

          <div className="process">
            {PROCESS.slice(0, 3).map((p) => (
              <div className="process-item" key={p.step}>
                <strong>{p.step}</strong>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content">
          <h2>Dlaczego dobór metody jest ważny?</h2>
          <p>
            Mycie elewacji i dachów powinno być dopasowane do materiału. Innego
            podejścia wymaga tynk, innego klinkier, dachówka ceramiczna,
            cementowa, blachodachówka czy gładki beton architektoniczny.
          </p>
          <Link className="button button-inline" href="/jak-pracujemy">
            Zobacz cały proces
          </Link>
        </div>
      </section>

      <section>
        <div className="section-title centered">
          <span className="eyebrow">FAQ</span>
          <h2>Najczęstsze pytania</h2>
          <p>FAQ pomaga klientom i wzmacnia widoczność strony w Google.</p>
        </div>

        <div className="faq">
          {FAQ.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <span className="eyebrow">Darmowa wycena</span>
          <h2>Potrzebujesz czystej elewacji lub dachu?</h2>
          <p>
            Wyślij zapytanie i dołącz zdjęcia. Przygotujemy odpowiedź dopasowaną
            do Twojej nieruchomości.
          </p>
        </div>

        <Link className="button button-inline" href="#wycena">
          Zapytaj o wycenę
        </Link>
      </section>
    </main>
  )
}
