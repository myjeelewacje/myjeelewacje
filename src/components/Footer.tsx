'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CITIES } from '@/data/site'
import {
  DEFAULT_SITE_SETTINGS,
  type PublicSiteSettings,
  phoneHref,
} from '@/lib/siteSettings'

function citySlug(city: string) {
  return city
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replaceAll('ł', 'l')
    .replaceAll(' ', '-')
}

export function Footer() {
  const [settings, setSettings] = useState<PublicSiteSettings>(DEFAULT_SITE_SETTINGS)

  useEffect(() => {
    let active = true

    async function loadSettings() {
      try {
        const response = await fetch('/api/site-settings', {
          cache: 'no-store',
        })

        if (!response.ok) return

        const data = await response.json()

        if (active) {
          setSettings(data)
        }
      } catch {
        // Jeżeli API chwilowo nie odpowie, stopka pokaże dane domyślne.
      }
    }

    loadSettings()

    return () => {
      active = false
    }
  }, [])

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">G</span>
            <span>
              <strong>{settings.companyName}</strong>
              <small>{settings.tagline}</small>
            </span>
          </div>

          <p>{settings.footerText}</p>

          {settings.serviceArea ? <p>{settings.serviceArea}</p> : null}
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
            <a href={phoneHref(settings.phone)}>{settings.phone}</a>
          </p>

          <p>
            <a href={`mailto:${settings.email}`}>{settings.email}</a>
          </p>

          <Link href="/kontakt">Formularz kontaktowy</Link>

          {settings.googleMapsUrl ? (
            <a href={settings.googleMapsUrl} target="_blank" rel="noreferrer">
              Google Maps
            </a>
          ) : null}

          {settings.facebookUrl ? (
            <a href={settings.facebookUrl} target="_blank" rel="noreferrer">
              Facebook
            </a>
          ) : null}

          <Link href="/admin">Panel administratora</Link>
        </div>
      </div>
    </footer>
  )
}
