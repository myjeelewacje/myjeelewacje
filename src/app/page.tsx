import Link from 'next/link'
import { LeadForm } from '@/components/LeadForm'
import { JsonLd } from '@/components/JsonLd'
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'
import { HeroSlider } from '@/components/HeroSlider'
import { COMPANY, SERVICES, PROCESS, FAQ } from '@/data/site'
import { localBusinessSchema } from '@/lib/seo'

const FEATURED_PROJECT = {
  title: 'Mycie chemiczne elewacji placówki opiekuńczej',
  location: 'realizacja zagraniczna',
  service: 'Mycie elewacji',
  before: '/images/portfolio/mycie-chemiczne-elewacji-placowka-opiekuncza-przed.webp',
  after: '/images/portfolio/mycie-chemiczne-elewacji-placowka-opiekuncza-po.webp',
  cover: '/images/portfolio/mycie-chemiczne-elewacji-placowka-opiekuncza-po.webp',
  alt: 'Elewacja placówki opiekuńczej przed i po myciu chemicznym bez użycia wysokiego ciśnienia',
  excerpt:
    'Bezpieczne mycie chemiczne elewacji wykonanej z tynku typu baranek. Prace przeprowadzono bez użycia wysokiego ciśnienia, aby skutecznie usunąć zabrudzenia bez ryzyka uszkodzenia struktury tynku.',
}

const PROJECTS = [
  {
    title: FEATURED_PROJECT.title,
    slug: 'mycie-chemiczne-elewacji-placowka-opiekuncza',
    location: FEATURED_PROJECT.location,
    service: FEATURED_PROJECT.service,
    image: FEATURED_PROJECT.cover,
    excerpt: FEATURED_PROJECT.excerpt,
    details: ['tynk typu baranek', 'mycie chemiczne', 'bez wysokiego ciśnienia', '3 dni pracy'],
  },
]

export default function HomePage() {
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
            prywatne, firmy i większe obiekty.
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
          <h2>Mycie chemiczne elewacji bez uszkadzania tynku</h2>
          <p>
            Przesuń suwak i zobacz efekt czyszczenia elewacji z tynku typu
            baranek. Praca wykonana metodą chemiczną, bez wysokiego ciśnienia
            na tynku.
          </p>
        </div>

        <div
          className="ba-grid"
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
          }}
        >
          <article
            className="ba-card"
            style={{
              width: '100%',
              maxWidth: '1180px',
              margin: '0 auto',
            }}
          >
            <BeforeAfterSlider
              before={FEATURED_PROJECT.before}
              after={FEATURED_PROJECT.after}
              title={FEATURED_PROJECT.title}
              alt={FEATURED_PROJECT.alt}
            />

            <div className="ba-caption">
              <span>{FEATURED_PROJECT.service}</span>
              <h3>{FEATURED_PROJECT.title}</h3>
              <p>{FEATURED_PROJECT.location}</p>
            </div>
          </article>
        </div>
      </section>

      <section id="realizacje" className="projects-section">
        <div className="section-title">
          <div>
            <span className="eyebrow">Realizacje</span>
            <h2>Wykonane prace pokazane projekt po projekcie</h2>
          </div>
          <p>
            W tej sekcji będą pojawiać się kolejne projekty. Każda karta prowadzi
            do pełnego opisu realizacji ze zdjęciami przed, w trakcie i po.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 420px))',
            gap: '28px',
            alignItems: 'stretch',
          }}
        >
          {PROJECTS.map((project) => (
            <article
              key={project.slug}
              className="gallery-card"
              style={{
                maxWidth: '420px',
                overflow: 'hidden',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '260px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              <div style={{ padding: '22px' }}>
                <span>{project.service}</span>
                <h3>{project.title}</h3>
                <p>{project.excerpt}</p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    margin: '16px 0 20px',
                  }}
                >
                  {project.details.map((detail) => (
                    <small
                      key={detail}
                      style={{
                        border: '1px solid rgba(64, 169, 50, 0.25)',
                        borderRadius: '999px',
                        padding: '6px 10px',
                        background: 'rgba(64, 169, 50, 0.08)',
                        fontWeight: 700,
                      }}
                    >
                      {detail}
                    </small>
                  ))}
                </div>

                <Link
                  className="button button-inline"
                  href={`/realizacje#${project.slug}`}
                >
                  Zobacz projekt
                </Link>
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
            cementowa lub blachodachówka. Dlatego formularz zbiera metraż,
            miejscowość, rodzaj budynku i zdjęcia.
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
            Wyślij zapytanie i dołącz zdjęcia. Przygotujemy odpowiedź
            dopasowaną do Twojej nieruchomości.
          </p>
        </div>

        <Link className="button button-inline" href="#wycena">
          Zapytaj o wycenę
        </Link>
      </section>
    </main>
  )
}
