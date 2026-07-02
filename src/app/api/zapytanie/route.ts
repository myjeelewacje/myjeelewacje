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
    sourceUrl: req.headers.get('referer') || ''
  }

  try {
    if (process.env.DATABASE_URI) {
      const payload = await getPayloadClient()
      await payload.create({ collection: 'leads', data: lead })
    }
  } catch (err) {
    console.error('Nie udało się zapisać zapytania w CMS:', err)
  }

  try {
    if (process.env.SMTP_HOST && process.env.LEADS_TO_EMAIL) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined
      })
      await transporter.sendMail({
        from: process.env.SMTP_USER || process.env.LEADS_TO_EMAIL,
        to: process.env.LEADS_TO_EMAIL,
        subject: `Nowe zapytanie: ${lead.service} - ${lead.city}`,
        text: Object.entries(lead).map(([k,v]) => `${k}: ${v}`).join('\n')
      })
    }
  } catch (err) {
    console.error('Nie udało się wysłać e-maila:', err)
  }

  return NextResponse.redirect(new URL('/kontakt?wyslano=1', req.url), { status: 303 })
}
