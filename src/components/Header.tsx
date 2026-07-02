import Link from 'next/link'
import { COMPANY } from '@/data/site'

export function Header() {
  const nav = [
    ['Strona główna', '/'],
    ['Usługi', '/uslugi/mycie-elewacji'],
    ['Przed i po', '/#przed-po'],
    ['Realizacje', '/realizacje'],
    ['Jak pracujemy', '/jak-pracujemy'],
    ['Kontakt', '/kontakt']
  ]
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="G Service - strona główna">
        <span className="brand-mark">G</span>
        <span><strong>{COMPANY.name}</strong><small>{COMPANY.tagline}</small></span>
      </Link>
      <nav>
        {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <a className="header-phone" href={`tel:${COMPANY.phone.replaceAll(' ', '')}`}>{COMPANY.phone}</a>
        <Link href="/#wycena" className="header-cta">Darmowa wycena</Link>
      </div>
    </header>
  )
}
