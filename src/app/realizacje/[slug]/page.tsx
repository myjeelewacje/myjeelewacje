import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { REALIZATIONS, getRealizationBySlug } from '@/data/realizations'

type PageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return REALIZATIONS.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getRealizationBySlug(params.slug)

  if (!project) {
    return {
      title: 'Realizacja | G Service',
    }
  }

  return {
    title: `${project.shortTitle} | G Service`,
    description: project.excerpt,
  }
}

export default function RealizationDetailPage({ params }: PageProps) {
  const project = getRealizationBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow">Realizacja</span>
        <h1>{project.title}</h1>
        <p>{project.excerpt}</p>
      </section>

      <section className="split">
        <div className="panel-dark">
          <span className="eyebrow">Dane projektu</span>
          <h2>Zakres realizacji</h2>

          <div className="process">
            <div className="process-item">
              <strong>01</strong>
              <div>
                <h3>Lokalizacja</h3>
                <p>{project.location}</p>
              </div>
            </div>

            <div className="process-item">
              <strong>02</strong>
              <div>
                <h3>Rodzaj obiektu</h3>
                <p>{project.objectType}</p>
              </div>
            </div>

            <div className="process-item">
              <strong>03</strong>
              <div>
                <h3>Powierzchnia</h3>
                <p>{project.surface}</p>
              </div>
            </div>

            <div className="process-item">
              <strong>04</strong>
              <div>
                <h3>Metoda</h3>
                <p>{project.method}</p>
              </div>
            </div>

            <div className="process-item">
              <strong>05</strong>
              <div>
                <h3>Organizacja prac</h3>
                <p>{project.duration}</p>
              </div>
            </div>

            <div className="process-item">
              <strong>06</strong>
              <div>
                <h3>Dodatkowe informacje</h3>
                <p>{project.extraWork}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <h2>Opis realizacji</h2>

          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <h3>Wykonane prace</h3>
          <ul>
            {project.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '22px' }}>
            <Link className="button button-inline" href="/#wycena">
              Zapytaj o podobną realizację
            </Link>
            <Link className="button-secondary" href="/realizacje">
              Wróć do realizacji
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="section-title">
          <div>
            <span className="eyebrow">Zdjęcia realizacji</span>
            <h2>Przed, w trakcie i po wykonaniu usługi</h2>
          </div>
          <p>
            Galeria pokazuje cały przebieg projektu. Zdjęcia są wyświetlane bez
            dodatkowych podpisów pod fotografiami.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {project.images.map((image) => (
            <article
              key={image.src}
              className="gallery-card"
              style={{ overflow: 'hidden' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '320px',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
