import Link from 'next/link'

export const metadata = {
  title: 'Realizacje mycia elewacji i dachów | G Service',
  description:
    'Zobacz realizacje G Service: mycie chemiczne elewacji, czyszczenie tynku typu baranek oraz zdjęcia wykonanych prac przed, w trakcie i po realizacji.',
}

const REALIZATIONS = [
  {
    title: 'Mycie chemiczne elewacji placówki opiekuńczej – realizacja zagraniczna',
    slug: 'mycie-chemiczne-elewacji-placowka-opiekuncza',
    location: 'Realizacja zagraniczna',
    service: 'Mycie chemiczne elewacji',
    objectType: 'Placówka opiekuńcza',
    surface: 'Tynk typu baranek',
    duration: '3 dni',
    extraWork: 'Mycie okien na życzenie klienta',
    excerpt:
      'Bezpieczne mycie chemiczne elewacji wykonanej z tynku typu baranek. Prace przeprowadzono bez użycia wysokiego ciśnienia, aby skutecznie usunąć zabrudzenia bez ryzyka uszkodzenia struktury tynku.',
    description: [
      'W ramach tej realizacji wykonaliśmy mycie chemiczne elewacji placówki opiekuńczej w ramach zagranicznego zlecenia. Obiekt posiadał elewację wykończoną tynkiem typu baranek, dlatego kluczowe było dobranie metody czyszczenia, która pozwoli skutecznie usunąć zabrudzenia, ale jednocześnie nie naruszy struktury powierzchni.',
      'Na elewacji widoczne były zabrudzenia atmosferyczne, zielonkawe naloty oraz mocniejsze zacieki w miejscach szczególnie narażonych na wilgoć i spływanie wody. Największe zabrudzenia występowały między innymi nad oknami oraz na wyższych partiach ścian.',
      'Zamiast agresywnego mycia wysokim ciśnieniem zastosowaliśmy czyszczenie chemiczne. Taka metoda pozwala rozpuścić i usunąć zabrudzenia stopniowo, bez mechanicznego niszczenia tynku. Jest to szczególnie ważne przy delikatnych powierzchniach, takich jak tynk typu baranek, gdzie zbyt mocne ciśnienie mogłoby wypłukać strukturę lub zostawić ślady.',
      'Prace zostały rozłożone na 3 dni. Czyszczenie prowadziliśmy etapami, obserwując jak zabrudzenia schodzą z powierzchni. W miejscach mocniej zabrudzonych proces wymagał dokładniejszego podejścia i większej cierpliwości.',
      'Najważniejszym celem było uzyskanie czystej, odświeżonej elewacji bez ryzyka uszkodzenia powierzchni. Dzięki zastosowaniu mycia chemicznego bez wysokiego ciśnienia udało się poprawić wygląd całego obiektu, zachowując strukturę tynku typu baranek.',
      'Na dodatkowe życzenie klienta po zakończeniu prac przy elewacji wykonaliśmy również mycie okien. Dzięki temu obiekt zyskał spójny, czysty i zadbany wygląd.',
    ],
    scope: [
      'mycie chemiczne elewacji',
      'usuwanie zabrudzeń atmosferycznych',
      'usuwanie zielonkawych nalotów i zacieków',
      'bezpieczne czyszczenie tynku typu baranek',
      'praca bez wysokiego ciśnienia na tynku',
      'etapowe czyszczenie powierzchni przez 3 dni',
      'mycie okien na dodatkowe życzenie klienta',
    ],
    images: [
      {
        src: '/images/portfolio/mycie-chemiczne-elewacji-placowka-opiekuncza-przed.webp',
        alt: 'Elewacja placówki opiekuńczej przed myciem chemicznym',
      },
      {
        src: '/images/portfolio/zacieki-na-elewacji-przed-myciem-chemicznym.webp',
        alt: 'Zacieki i zabrudzenia na elewacji przed myciem chemicznym',
      },
      {
        src: '/images/portfolio/zabrudzona-elewacja-placowka-opiekuncza-przed-myciem-1.webp',
        alt: 'Zabrudzona elewacja placówki opiekuńczej przed myciem chemicznym',
      },
      {
        src: '/images/portfolio/mycie-elewacji-obiekt-opiekunczy-przed-pracami-2.webp',
        alt: 'Elewacja obiektu opiekuńczego przed rozpoczęciem prac czyszczenia',
      },
      {
        src: '/images/portfolio/mycie-chemiczne-elewacji-placowka-opiekuncza-w-trakcie.webp',
        alt: 'Mycie chemiczne elewacji placówki opiekuńczej w trakcie prac',
      },
      {
        src: '/images/portfolio/czyszczenie-elewacji-tynk-baranek-bez-cisnienia.webp',
        alt: 'Czyszczenie elewacji z tynku typu baranek bez użycia wysokiego ciśnienia',
      },
      {
        src: '/images/portfolio/mycie-chemiczne-elewacji-placowka-opiekuncza-po.webp',
        alt: 'Elewacja placówki opiekuńczej po myciu chemicznym bez wysokiego ciśnienia',
      },
      {
        src: '/images/portfolio/elewacja-placowki-opiekunczej-po-myciu-chemicznym.webp',
        alt: 'Elewacja placówki opiekuńczej po myciu chemicznym',
      },
      {
        src: '/images/portfolio/odswiezona-elewacja-obiekt-opiekunczy-po-czyszczeniu.webp',
        alt: 'Odświeżona elewacja obiektu opiekuńczego po czyszczeniu chemicznym',
      },
    ],
  },
]

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow">Realizacje</span>
        <h1>Prace wykonane przez G Service</h1>
        <p>
          Każda realizacja jest pokazana jako osobny projekt: opis prac, zakres
          usługi oraz galeria zdjęć z przebiegu wykonania.
        </p>
      </section>

      {REALIZATIONS.map((project) => (
        <section
          id={project.slug}
          className="projects-section"
          key={project.slug}
        >
          <div className="section-title">
            <div>
              <span className="eyebrow">{project.service}</span>
              <h2>{project.title}</h2>
            </div>
            <p>{project.excerpt}</p>
          </div>

          <div className="split">
            <div className="panel-dark">
              <span className="eyebrow">Dane projektu</span>
              <h2>Zakres realizacji</h2>

              <div className="process">
                <div className="process-item">
                  <strong>01</strong>
                  <div>
                    <h3>Rodzaj obiektu</h3>
                    <p>{project.objectType}</p>
                  </div>
                </div>

                <div className="process-item">
                  <strong>02</strong>
                  <div>
                    <h3>Powierzchnia</h3>
                    <p>{project.surface}</p>
                  </div>
                </div>

                <div className="process-item">
                  <strong>03</strong>
                  <div>
                    <h3>Czas realizacji</h3>
                    <p>{project.duration}</p>
                  </div>
                </div>

                <div className="process-item">
                  <strong>04</strong>
                  <div>
                    <h3>Dodatkowo</h3>
                    <p>{project.extraWork}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="content">
              <h2>Opis realizacji</h2>

              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <h3>Wykonane prace</h3>

              <ul>
                {project.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <Link className="button button-inline" href="/#wycena">
                Zapytaj o podobną realizację
              </Link>
            </div>
          </div>

          <div className="section-title">
            <div>
              <span className="eyebrow">Zdjęcia realizacji</span>
              <h2>Galeria zdjęć z projektu</h2>
            </div>
            <p>
              Poniżej znajduje się prosta galeria zdjęć z tej realizacji — bez
              dodatkowych podpisów pod zdjęciami.
            </p>
          </div>

          <div className="gallery-grid">
            {project.images.map((image) => (
              <article
                className="gallery-card"
                key={image.src}
                style={{ overflow: 'hidden' }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '320px',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
