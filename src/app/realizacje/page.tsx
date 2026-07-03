import Link from 'next/link'
import { REALIZATIONS } from '@/data/realizations'

export const metadata = {
  title: 'Realizacje mycia elewacji i dachów | G Service',
  description:
    'Realizacje G Service pokazane projekt po projekcie: opis prac, zakres usługi oraz zdjęcia przed, w trakcie i po wykonaniu usługi.',
}

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow">Realizacje</span>
        <h1>Wykonane prace pokazane projekt po projekcie</h1>
        <p>
          W tej sekcji pojawiają się kolejne projekty. Każda karta prowadzi do
          pełnego opisu realizacji ze zdjęciami przed, w trakcie i po.
        </p>
      </section>

      <section className="projects-section">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
                style={{ width: '100%', height: '270px', objectFit: 'cover' }}
              />

              <div style={{ padding: '24px' }}>
                <span>{project.service}</span>
                <h2 style={{ fontSize: '2rem', marginTop: '12px' }}>
                  {project.shortTitle}
                </h2>
                <p style={{ marginTop: '12px' }}>{project.excerpt}</p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginTop: '18px',
                    marginBottom: '18px',
                  }}
                >
                  <span>{project.surface}</span>
                  <span>{project.method}</span>
                  <span>{project.duration}</span>
                </div>

                <Link
                  className="button button-inline"
                  href={`/realizacje/${project.slug}`}
                >
                  Zobacz projekt
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
