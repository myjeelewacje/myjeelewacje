import Link from 'next/link'
import { COMPANY, CITIES } from '@/data/site'

function citySlug(city: string) {
  return city
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replaceAll('ł', 'l')
    .replaceAll(' ', '-')
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">G</span>
            <span>
              <strong>{COMPANY.shortName || COMPANY.name}</strong>
              <small>{COMPANY.tagline}</small>
            </span>
          </div>

          <p>
            Profesjonalne mycie elewacji i dachów. Działamy na terenie całej Polski,
            głównie w województwie lubelskim i okolicach.
          </p>

          <p>{COMPANY.name}</p>
        </div>

        <div>
          <h4>Usługi</h4>
          <Link href="/uslugi/mycie-elewacji">Mycie elewacji</Link>
          <Link href="/uslugi/mycie-dachow">Mycie dachów</Link>
          <Link href="/realizacje">Realizacje</Link>
        </div>

        <div>
          <h4>Lokalizacje SEO</h4>
          {CITIES.slice(0, 6).map((city) => (
            <Link key={city} href={`/mycie-elewacji-${citySlug(city)}`}>
              Mycie elewacji {city}
            </Link>
          ))}
        </div>

        <div>
          <h4>Kontakt</h4>

          <p>
            <a href={`tel:${COMPANY.phone.replaceAll(' ', '')}`}>{COMPANY.phone}</a>
          </p>

          <p>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </p>

          <Link href="/kontakt">Formularz kontaktowy</Link>
          <Link href="/admin">Panel administratora</Link>
        </div>
      </div>
    </footer>
  )
}
