import type { Metadata } from 'next'
import { PROCESS } from '@/data/site'

export const metadata: Metadata = { title: 'Jak pracujemy', description: 'Zobacz proces mycia elewacji i dachów w G Service: analiza, zabezpieczenie, dobór metody, mycie i kontrola efektu.' }

export default function Page() { return <main><section className="page-hero"><span className="eyebrow">Metoda pracy</span><h1>Jak wykonujemy mycie elewacji i dachów?</h1><p>Klient musi wiedzieć, że praca jest bezpieczna, przemyślana i wykonana zgodnie z materiałem.</p></section><section className="content"><div className="process">{PROCESS.map(p => <div className="process-item" key={p.step}><strong>{p.step}</strong><div><h2>{p.title}</h2><p>{p.text}</p></div></div>)}</div></section></main> }
