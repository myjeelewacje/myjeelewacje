# Wdrożenie krok po kroku

## 1. Kup domenę

Sprawdź kandydatów z pliku `DOMENY_I_HOSTING.md`. Najpierw spróbuj:

- `gservicemycie.pl`
- `gservice-lubelskie.pl`
- `gserviceczyszczenie.pl`

## 2. Utwórz konto hostingowe

Rekomendowany wariant:

- Vercel Pro — aplikacja Next.js
- Neon — baza PostgreSQL
- Cloudflare R2 albo Vercel Blob — zdjęcia

## 3. Utwórz bazę danych

W Neon utwórz projekt PostgreSQL i skopiuj connection string do `DATABASE_URI`.

## 4. Zmienna środowiskowa

W hostingu dodaj zmienne z `.env.example`.

Najważniejsze:

- `NEXT_PUBLIC_SITE_URL`
- `DATABASE_URI`
- `PAYLOAD_SECRET`
- `SMTP_HOST`
- `SMTP_USER`
- `SMTP_PASS`
- `LEADS_TO_EMAIL`

## 5. Publikacja

Po podpięciu repozytorium do hostingu wykonaj build. Następnie wejdź na:

- `/admin`

Utwórz konto administratora.

## 6. Seed treści

Uruchom:

```bash
npm run seed
```

## 7. Po publikacji SEO

- Dodaj stronę do Google Search Console.
- Wyślij sitemapę: `/sitemap.xml`.
- Załóż profil Google Business Profile.
- Dodaj pierwsze zdjęcia realizacji.
- Poproś klientów o opinie.
- Dodaj politykę prywatności i RODO.
