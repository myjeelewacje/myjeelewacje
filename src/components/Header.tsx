'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import {
  DEFAULT_SITE_SETTINGS,
  type PublicSiteSettings,
  phoneHref,
} from '@/lib/siteSettings'

export function Header() {
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
        // Jeżeli API chwilowo nie odpowie, strona pokaże dane domyślne.
      }
    }

    loadSettings()

    return () => {
      active = false
    }
  }, [])

  const nav = useMemo(
    () => [
      ['Strona główna', '/'],
      ['Usługi', '/uslugi/mycie-elewacji'],
      ['Przed i po', '/#przed-po'],
      ['Realizacje', '/realizacje'],
      ['Jak pracujemy', '/jak-pracujemy'],
      ['Kontakt', '/kontakt'],
    ],
    [],
  )

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label={`${settings.companyName} - strona główna`}>
        <span className="brand-mark">G</span>
        <span>
          <strong>{settings.companyName}</strong>
          <small>{settings.tagline}</small>
        </span>
      </Link>

      <nav>
        {nav.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <a className="header-phone" href={phoneHref(settings.phone)}>
          {settings.phone}
        </a>
        <Link href="/#wycena" className="header-cta">
          Darmowa wycena
        </Link>
      </div>
    </header>
  )
}
