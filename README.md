# G Service / myjeelewacje.pl

Projekt strony firmowej w technologii **Next.js + Payload CMS**.

## Co zawiera

- strona główna z animowanym sliderem zdjęć,
- formularz zapytania o wycenę,
- usługi: mycie elewacji, mycie dachów, obiekty komercyjne, mycie kostki,
- sekcja „przed i po” z interaktywnym suwakiem,
- galeria realizacji z prawdziwymi zdjęciami,
- lokalne SEO pod woj. lubelskie,
- panel administratora Payload CMS pod `/admin`,
- formularz zapisujący zgłoszenia do CMS i opcjonalnie wysyłający e-mail.

## Start lokalny

```bash
npm install
cp .env.example .env.local
npm run dev
```

Strona: http://localhost:3000  
Panel: http://localhost:3000/admin

## Railway

W Railway ustaw zmienne środowiskowe:

```env
NEXT_PUBLIC_SITE_URL=https://myjeelewacje.pl
PAYLOAD_SECRET=TU_WSTAW_DLUGI_LOSOWY_SEKRET
DATABASE_URI=TU_WSTAW_DATABASE_URL_Z_RAILWAY_POSTGRES
LEADS_TO_EMAIL=kontakt@myjeelewacje.pl
```

Po wdrożeniu wejdź na `/admin` i utwórz pierwszego administratora.

## GitHub

Projekt wrzuć do repozytorium, np. `myjeelewacje`. Railway podłączamy przez **Connect Repo**.

## Ważne przed publikacją

- uzupełnić prawdziwy numer telefonu,
- dodać politykę prywatności/RODO,
- sprawdzić, czy masz zgodę na publikację zdjęć realizacji,
- rozważyć zamazanie tablic rejestracyjnych i danych klientów na zdjęciach.
