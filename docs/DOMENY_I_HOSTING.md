# Domeny i hosting — rekomendacja dla G Service

## Najlepszy kierunek domeny

Dla firmy usługowej najlepiej mieć domenę krótką, profesjonalną i łatwą do powiedzenia przez telefon. Domeny z samą frazą typu `mycie-elewacji-lublin.pl` są dobre pod SEO, ale często wyglądają mniej markowo i bywają już zajęte.

Rekomendowany kierunek:

1. domena markowa: nazwa firmy + usługa,
2. domena lokalna: nazwa firmy + Lublin / Lubelskie,
3. domena SEO jako dodatkowa, jeśli jest wolna.

## Kandydaty do sprawdzenia u rejestratora

Najlepsze markowe:

- `gservicemycie.pl`
- `gservice-mycie.pl`
- `gserviceczyszczenie.pl`
- `gservice-elewacje.pl`
- `gservice-dachy.pl`
- `gservice-lubelskie.pl`
- `gservicelublin.pl`

SEO + lokalne:

- `mycieelewacjilubelskie.pl`
- `mycie-elewacji-lubelskie.pl`
- `czyszczenieelewacjilubelskie.pl`
- `czyszczenie-elewacji-lubelskie.pl`
- `myciedachowlubelskie.pl`
- `mycie-dachow-lubelskie.pl`

SEO szerzej:

- `mycieelewacjidachow.pl`
- `mycie-elewacji-dachow.pl`
- `czyste-elewacje.pl`
- `czystydach.pl`
- `czystydom-lubelskie.pl`

## Domeny, których raczej nie wybierać

- Zbyt długie i trudne do zapamiętania.
- Z polskimi znakami w domenie jako główna domena.
- Z cyframi, jeśli nie są częścią marki.
- Z nazwą miasta, jeśli chcesz później działać szerzej.

## Moja rekomendacja domeny

Najlepszy kompromis: `gservicemycie.pl`.

Dlaczego:

- łączy markę G Service z usługą,
- jest łatwa do powiedzenia,
- nie ogranicza tylko do Lublina,
- nadaje się pod SEO i reklamy,
- wygląda profesjonalniej niż długa domena z myślnikami.

Drugi wybór: `gservice-lubelskie.pl`.

## Hosting

### Rekomendacja premium i najprostsza

- Vercel Pro dla Next.js
- Neon dla PostgreSQL
- Vercel Blob albo Cloudflare R2 dla zdjęć
- domena kupiona u polskiego rejestratora, DNS można przenieść do Cloudflare

To jest wygodne i bardzo dobre pod SEO, ale płatne.

### Rekomendacja oszczędniejsza

- Railway dla aplikacji Next.js + Payload
- PostgreSQL na Railway albo Neon
- Cloudflare R2 dla zdjęć

Dobre, jeśli chcesz mieć aplikację i CMS w jednym miejscu.

### Opcja techniczna, najtańsza długofalowo

- VPS, np. Hetzner / OVH / cyber_Folks VPS
- Docker
- PostgreSQL na tym samym serwerze albo Neon

Najtańsze przy dużej kontroli, ale wymaga osoby technicznej do aktualizacji i bezpieczeństwa.

## Co wybrałbym praktycznie

Dla G Service wybrałbym:

- domena: `gservicemycie.pl` albo `gservice-lubelskie.pl`, jeśli wolna,
- DNS: Cloudflare,
- hosting: Vercel Pro,
- baza: Neon,
- zdjęcia: Cloudflare R2 albo Vercel Blob,
- e-mail firmowy: Google Workspace albo skrzynka u rejestratora domeny.
