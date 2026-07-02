# Railway krok po kroku

1. Utwórz projekt w Railway.
2. Dodaj bazę danych: **+ New → Database → PostgreSQL**.
3. Skopiuj zmienną `DATABASE_URL` z PostgreSQL.
4. W serwisie aplikacji dodaj zmienne:
   - `NEXT_PUBLIC_SITE_URL=https://myjeelewacje.pl`
   - `PAYLOAD_SECRET=<długi losowy sekret>`
   - `DATABASE_URI=<wartość DATABASE_URL z PostgreSQL>`
   - `LEADS_TO_EMAIL=kontakt@myjeelewacje.pl`
5. Podłącz repozytorium GitHub przez **Connect Repo**.
6. Kliknij Deploy.
7. Po wdrożeniu dodaj domenę `myjeelewacje.pl` w Railway i rekordy DNS w Cloudflare.
8. Wejdź na `https://myjeelewacje.pl/admin` i utwórz użytkownika administratora.
