import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/cms'

export async function POST(req: Request) {
  const form = await req.formData()
  const data = Object.fromEntries(form.entries()) as Record<string, string>

  const lead = {
    service: data.service || 'Mycie elewacji',
    areaM2: data.areaM2 ? Number(data.areaM2) : undefined,
    city: data.city || '',
    voivodeship: data.voivodeship || 'lubelskie',
    buildingType: data.buildingType || '',
    material: data.material || '',
    timeframe: data.timeframe || '',
    details: data.details || '',
    name: data.name || '',
    phone: data.phone || '',
    email: data.email || '',
    sourceUrl: req.headers.get('referer') || '',
  }

  try {
    if (process.env.DATABASE_URI) {
      const payload = await getPayloadClient()

      await payload.create({
        collection: 'leads',
        data: lead,
      })
    }
  } catch (err) {
    console.error('Nie udało się zapisać zapytania w CMS:', err)
  }

  try {
    if (process.env.RESEND_API_KEY && process.env.LEADS_TO_EMAIL) {
      const text = [
        `Usługa: ${lead.service}`,
        `Metraż: ${lead.areaM2 || ''}`,
        `Miasto: ${lead.city}`,
        `Województwo: ${lead.voivodeship}`,
        `Typ budynku: ${lead.buildingType}`,
        `Materiał: ${lead.material}`,
        `Termin: ${lead.timeframe}`,
        `Imię i nazwisko: ${lead.name}`,
        `Telefon: ${lead.phone}`,
        `E-mail: ${lead.email}`,
        '',
        'Szczegóły:',
        lead.details,
        '',
        `Źródło: ${lead.sourceUrl}`,
      ].join('\n')

      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'G Service <formularz@myjeelewacje.pl>',
          to: [process.env.LEADS_TO_EMAIL],
          reply_to: lead.email || undefined,
          subject: `Nowe zapytanie: ${lead.service} - ${lead.city || 'strona www'}`,
          text,
        }),
      })

      if (!resendResponse.ok) {
        const errorText = await resendResponse.text()
        console.error('Nie udało się wysłać e-maila przez Resend:', errorText)
      }
    } else {
      console.warn('Brak RESEND_API_KEY lub LEADS_TO_EMAIL w Railway Variables')
    }
  } catch (err) {
    console.error('Nie udało się wysłać e-maila przez Resend:', err)
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://myjeelewacje.pl'

  return NextResponse.redirect(`${siteUrl}/kontakt?wyslano=1`, {
    status: 303,
  })
}