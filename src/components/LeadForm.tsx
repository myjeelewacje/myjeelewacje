export function LeadForm() {
  return (
    <form id="wycena" className="lead-form" action="/api/zapytanie" method="post" encType="multipart/form-data">
      <div className="form-heading">
        <p>Bezpłatna wycena</p>
        <h2>Zapytaj o termin i cenę</h2>
        <span>Podaj podstawowe informacje. Odpowiemy po analizie zakresu i zdjęć.</span>
      </div>
      <div className="segmented">
        <label><input type="radio" name="service" value="Mycie elewacji" defaultChecked /> Mycie elewacji</label>
        <label><input type="radio" name="service" value="Mycie dachu" /> Mycie dachu</label>
      </div>
      <div className="grid-2">
        <label>Powierzchnia m²<input name="areaM2" type="number" placeholder="np. 150" min="1" /></label>
        <label>Miejscowość<input name="city" required placeholder="np. Lublin" /></label>
        <label>Województwo<select name="voivodeship" defaultValue="lubelskie"><option>lubelskie</option><option>podkarpackie</option><option>mazowieckie</option><option>świętokrzyskie</option></select></label>
        <label>Rodzaj budynku<select name="buildingType"><option>Dom jednorodzinny</option><option>Budynek firmowy</option><option>Blok / wspólnota</option><option>Inny</option></select></label>
      </div>
      <label>Dodatkowe informacje<textarea name="details" placeholder="Opisz zabrudzenia, wysokość budynku, dostęp do wody, szczegóły..." /></label>
      <label>Zdjęcia opcjonalnie<input name="photos" type="file" multiple accept="image/*" /></label>
      <div className="grid-2">
        <label>Imię i nazwisko<input name="name" required placeholder="Jan Kowalski" /></label>
        <label>Telefon<input name="phone" required placeholder="600 123 456" /></label>
      </div>
      <label>E-mail<input name="email" type="email" placeholder="jan@example.com" /></label>
      <button type="submit">Wyślij zapytanie →</button>
      <small>Twoje dane trafią wyłącznie do obsługi zapytania. Przed publikacją dodaj finalną politykę prywatności.</small>
    </form>
  )
}
