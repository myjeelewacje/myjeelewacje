import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
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
    if (process.env.SMTP_HOST && process.env.LEADS_TO_EMAIL) {
      const smtpOptions = {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: Number(process.env.SMTP_PORT) === 465,

        // Wymuszamy IPv4, żeby Railway nie próbował łączyć się z Gmail przez IPv6
        family: 4,

        connectionTimeout: 30000,
        greetingTimeout: 30000,
        socketTimeout: 30000,

        auth: process.env.SMTP_USER
          ? {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            }
          : undefined,
      } as Record<string, unknown>

      const transporter = nodemailer.createTransport(smtpOptions)

      await transporter.sendMail({
        from: `"G Service - formularz" <${process.env.SMTP_USER || process.env.LEADS_TO_EMAIL}>`,
        replyTo: lead.email || undefined,
        to: process.env.LEADS_TO_EMAIL,
        subject: `Nowe zapytanie: ${lead.service} - ${lead.city}`,
        text: [
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
        ].join('\n'),
      })
    }
  } catch (err) {
    console.error('Nie udało się wysłać e-maila:', err)
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://myjeelewacje.pl'

  return NextResponse.redirect(`${siteUrl}/kontakt?wyslano=1`, {
    status: 303,
  })
}