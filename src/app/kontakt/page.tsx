import type { Metadata } from 'next'
import { LeadForm } from '@/components/LeadForm'
import { COMPANY } from '@/data/site'

export const metadata: Metadata = { title: 'Kontakt i wycena', description: 'Skontaktuj się z G Service. Wyślij zapytanie o mycie elewacji lub dachu w województwie lubelskim.' }

export default function Page() { return <main><section className="page-hero"><span className="eyebrow">Kontakt</span><h1>Poproś o bezpłatną wycenę</h1><p>Podaj miejscowość, metraż i zdjęcia. Przygotujemy odpowiedź.</p></section><section className="split"><div className="content"><h2>G Service</h2><p>Telefon: {COMPANY.phone}</p><p>E-mail: {COMPANY.email}</p><p>Obszar działania: {COMPANY.area}</p></div><LeadForm /></section></main> }
