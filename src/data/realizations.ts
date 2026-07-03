export type RealizationImage = {
  src: string
  alt: string
}

export type Realization = {
  slug: string
  title: string
  shortTitle: string
  location: string
  service: string
  objectType: string
  surface: string
  method: string
  duration: string
  extraWork: string
  excerpt: string
  description: string[]
  scope: string[]
  cardImage: string
  cardAlt: string
  sliderBefore: string
  sliderAfter: string
  sliderAlt: string
  images: RealizationImage[]
}

export const REALIZATIONS: Realization[] = [
  {
    slug: 'mycie-chemiczne-elewacji-placowka-opiekuncza',
    title: 'Mycie chemiczne elewacji placówki opiekuńczej – realizacja zagraniczna',
    shortTitle: 'Mycie chemiczne elewacji placówki opiekuńczej',
    location: 'Realizacja zagraniczna',
    service: 'Mycie elewacji',
    objectType: 'Placówka opiekuńcza',
    surface: 'Tynk typu baranek',
    method: 'Mycie chemiczne bez wysokiego ciśnienia',
    duration: '3 dni pracy',
    extraWork: 'Dodatkowo wykonano mycie okien na życzenie klienta',
    excerpt:
      'Bezpieczne mycie chemiczne elewacji wykonanej z tynku typu baranek. Prace przeprowadzono bez użycia wysokiego ciśnienia, aby skutecznie usunąć zabrudzenia bez ryzyka uszkodzenia struktury tynku.',
    description: [
      'W tej realizacji wykonaliśmy mycie chemiczne elewacji placówki opiekuńczej w ramach zagranicznego zlecenia. Obiekt posiadał elewację wykończoną tynkiem typu baranek, dlatego kluczowe było dobranie bezpiecznej metody czyszczenia.',
      'Na ścianach widoczne były zabrudzenia atmosferyczne, zielonkawe naloty oraz wyraźne zacieki w miejscach szczególnie narażonych na wilgoć i spływanie wody.',
      'Zastosowaliśmy mycie chemiczne bez użycia wysokiego ciśnienia. Taka metoda pozwala skutecznie rozpuścić i usunąć zabrudzenia, a jednocześnie nie narusza delikatnej struktury tynku.',
      'Prace zostały rozłożone na 3 dni. Powierzchnię czyściliśmy etapami, ze szczególną uwagą na partie najmocniej zabrudzone, w tym okolice nad oknami i wyższe strefy elewacji.',
      'Efektem realizacji była odświeżona elewacja z zachowaniem struktury podłoża oraz spójny, estetyczny wygląd całego obiektu.',
    ],
    scope: [
      'mycie chemiczne elewacji',
      'usuwanie zabrudzeń atmosferycznych',
      'usuwanie zielonkawych nalotów i zacieków',
      'bezpieczne czyszczenie tynku typu baranek',
      'praca bez wysokiego ciśnienia',
      'etapowe czyszczenie powierzchni',
      'mycie okien na dodatkowe życzenie klienta',
    ],
    cardImage: '/images/portfolio/elewacja-placowki-opiekunczej-po-myciu-chemicznym.webp',
    cardAlt: 'Placówka opiekuńcza po myciu chemicznym elewacji',
    sliderBefore: '/images/portfolio/mycie-chemiczne-elewacji-placowka-opiekuncza-przed.webp',
    sliderAfter: '/images/portfolio/mycie-chemiczne-elewacji-placowka-opiekuncza-po.webp',
    sliderAlt: 'Porównanie elewacji placówki opiekuńczej przed i po myciu chemicznym',
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
        alt: 'Zabrudzona elewacja placówki opiekuńczej przed myciem',
      },
      {
        src: '/images/portfolio/mycie-elewacji-obiekt-opiekunczy-przed-pracami-2.webp',
        alt: 'Elewacja obiektu opiekuńczego przed rozpoczęciem prac',
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
        alt: 'Elewacja placówki opiekuńczej po myciu chemicznym',
      },
      {
        src: '/images/portfolio/elewacja-placowki-opiekunczej-po-myciu-chemicznym.webp',
        alt: 'Elewacja placówki opiekuńczej po wykonaniu usługi',
      },
      {
        src: '/images/portfolio/odswiezona-elewacja-obiekt-opiekunczy-po-czyszczeniu.webp',
        alt: 'Odświeżona elewacja obiektu opiekuńczego po czyszczeniu',
      },
    ],
  },
  {
    slug: 'mycie-chemiczne-betonu-gladkiego-budynek-firmowy-belgia',
    title: 'Mycie chemiczne gładkiej elewacji betonowej budynku firmowego – realizacja w Belgii',
    shortTitle: 'Mycie chemiczne gładkiego betonu budynku firmowego',
    location: 'Belgia – realizacja zagraniczna',
    service: 'Mycie elewacji betonowej',
    objectType: 'Budynek firmowy / biurowy',
    surface: 'Gładki beton architektoniczny',
    method: 'Kompleksowe mycie chemiczne w miejscu zaludnionym',
    duration: 'Prace etapowe – pierścień po pierścieniu',
    extraWork: 'Końcowy etap został wykonany w weekend, aby lepiej zabezpieczyć teren i ograniczyć wpływ na użytkowników obiektu',
    excerpt:
      'Kompleksowe mycie chemiczne gładkiej elewacji betonowej nowoczesnego budynku firmowego. Realizacja była prowadzona etapowo w terenie zurbanizowanym i użytkowanym na co dzień.',
    description: [
      'W tej realizacji wykonaliśmy mycie chemiczne gładkiej elewacji betonowej nowoczesnego budynku firmowego w Belgii. Obiekt znajduje się w miejscu zaludnionym, dlatego bardzo ważne było odpowiednie zaplanowanie prac oraz zabezpieczenie otoczenia.',
      'Na elewacji widoczne były zabrudzenia atmosferyczne, zacieki oraz nierównomierne osady, szczególnie na zaokrąglonych, eksponowanych pasach budynku. Przy gładkim betonie kluczowe jest uzyskanie równego efektu bez pozostawiania smug i różnic tonalnych.',
      'Zastosowaliśmy kompleksowe mycie chemiczne elewacji. Dzięki odpowiednio dobranym środkom czyszczącym mogliśmy skutecznie usunąć zabrudzenia, a jednocześnie zachować estetykę gładkiej powierzchni i bezpiecznie pracować przy obiekcie użytkowanym przez firmy.',
      'Całość realizacji została podzielona etapowo – pierścień po pierścieniu. Taki sposób pracy pozwolił na lepszą kontrolę efektu oraz ograniczenie utrudnień dla otoczenia budynku i jego użytkowników.',
      'Ostatnia faza prac została zaplanowana na weekend. Dzięki temu mogliśmy dodatkowo zabezpieczyć teren i zmniejszyć wpływ prowadzonych robót na ruch pieszy oraz codzienne funkcjonowanie obiektu.',
      'Po zakończeniu prac elewacja odzyskała jednolity, czysty wygląd, a bryła budynku ponownie prezentuje się estetycznie i profesjonalnie.',
    ],
    scope: [
      'mycie chemiczne gładkiej elewacji betonowej',
      'usuwanie zabrudzeń atmosferycznych i zacieków',
      'kompleksowe czyszczenie nowoczesnego budynku firmowego',
      'organizacja prac w miejscu zaludnionym',
      'etapowe mycie pierścień po pierścieniu',
      'zabezpieczenie terenu wokół budynku',
      'realizacja końcowego etapu w weekend',
    ],
    cardImage: '/images/portfolio/budynek-firmowy-elewacja-po-myciu-chemicznym.webp',
    cardAlt: 'Budynek firmowy po myciu chemicznym gładkiej elewacji betonowej',
    sliderBefore: '/images/portfolio/mycie-betonu-gladkiego-budynek-firmowy-przed.webp',
    sliderAfter: '/images/portfolio/mycie-betonu-gladkiego-budynek-firmowy-po.webp',
    sliderAlt: 'Porównanie gładkiej elewacji betonowej budynku firmowego przed i po myciu chemicznym',
    images: [
      {
        src: '/images/portfolio/mycie-betonu-gladkiego-budynek-firmowy-przed.webp',
        alt: 'Zabrudzona gładka elewacja betonowa budynku firmowego przed myciem chemicznym',
      },
      {
        src: '/images/portfolio/zabrudzenia-na-elewacji-betonowej-przed-myciem.webp',
        alt: 'Zabrudzenia i zacieki na elewacji betonowej przed myciem',
      },
      {
        src: '/images/portfolio/budynek-firmowy-przed-czyszczeniem-elewacji-front.webp',
        alt: 'Budynek firmowy przed czyszczeniem elewacji betonowej – widok frontowy',
      },
      {
        src: '/images/portfolio/budynek-biurowy-elewacja-betonowa-przed-myciem-bok.webp',
        alt: 'Budynek biurowy z zabrudzoną elewacją betonową przed myciem – widok boczny',
      },
      {
        src: '/images/portfolio/mycie-elewacji-betonowej-budynek-firmowy-etapowo.webp',
        alt: 'Etapowe mycie chemiczne elewacji betonowej budynku firmowego',
      },
      {
        src: '/images/portfolio/mycie-betonu-gladkiego-budynek-firmowy-po.webp',
        alt: 'Gładka elewacja betonowa budynku firmowego po myciu chemicznym',
      },
      {
        src: '/images/portfolio/elewacja-biurowca-po-myciu-chemicznym-front.webp',
        alt: 'Elewacja biurowca po myciu chemicznym – widok frontowy',
      },
      {
        src: '/images/portfolio/budynek-firmowy-elewacja-po-myciu-chemicznym.webp',
        alt: 'Budynek firmowy po myciu elewacji betonowej – widok ogólny',
      },
      {
        src: '/images/portfolio/odswiezona-elewacja-budynku-firmowego-po-czyszczeniu.webp',
        alt: 'Odświeżona elewacja budynku firmowego po czyszczeniu chemicznym',
      },
      {
        src: '/images/portfolio/mycie-betonu-gladkiego-biurowiec-belgia-ukos.webp',
        alt: 'Biurowiec w Belgii po myciu gładkiego betonu – ujęcie pod kątem',
      },
    ],
  },
  {
    slug: 'mycie-dachu-czyszczenie-malowanie-elewacji-dom-w-lesie',
    title: 'Mycie dachu, czyszczenie i malowanie elewacji domu w lesie – realizacja kompleksowa',
    shortTitle: 'Mycie dachu i malowanie elewacji domu w lesie',
    location: 'Dom prywatny w otoczeniu lasu',
    service: 'Mycie dachu i elewacji',
    objectType: 'Dom jednorodzinny po rozbudowie',
    surface: 'Dachówka, stara elewacja oraz nowa część po rozbudowie domu',
    method: 'Mycie dachu, mycie elewacji i malowanie farbą silikonową',
    duration: 'Prace wykonane etapami',
    extraWork: 'Realizacja kompleksowa zgodnie z życzeniem klienta – od przygotowania powierzchni po finalne malowanie elewacji',
    excerpt:
      'Kompleksowy projekt przy domu w lesie: mycie dachu, czyszczenie starej i nowej elewacji po rozbudowie oraz malowanie elewacji farbą silikonową dla trwałego efektu na lata.',
    description: [
      'W tej realizacji wykonaliśmy kompleksowe prace przy domu jednorodzinnym położonym w otoczeniu lasu. Klient chciał, aby cały zakres został przeprowadzony przez jedną ekipę: od mycia dachu, przez przygotowanie i czyszczenie elewacji, aż po końcowe malowanie.',
      'Zakres obejmował zarówno starszą część budynku, jak i nową elewację powstałą po rozbudowie domu. Dzięki temu mogliśmy przygotować całość w spójny sposób i uzyskać jednolity, estetyczny efekt końcowy.',
      'Prace rozpoczęliśmy od mycia dachu i usunięcia zabrudzeń z powierzchni dachówki. Następnie wykonaliśmy czyszczenie elewacji, aby przygotować podłoże pod dalsze prace. Ten etap jest bardzo ważny, ponieważ malowanie powinno być wykonane dopiero po odpowiednim oczyszczeniu powierzchni.',
      'Po przygotowaniu ścian wykonaliśmy malowanie elewacji farbą silikonową. Tego typu farba jest dobrym wyborem przy elewacjach narażonych na zmienne warunki atmosferyczne, wilgoć i zabrudzenia z otoczenia, ponieważ pomaga uzyskać trwały i estetyczny efekt na lata.',
      'Całość była prowadzona etapowo: mycie dachu, mycie elewacji, przygotowanie powierzchni i finalne malowanie. Takie podejście pozwoliło zachować kontrolę nad każdym etapem oraz dopracować przejścia między starą i nową częścią budynku.',
      'Efektem końcowym jest odświeżony dom w lesie z czystym dachem, uporządkowaną elewacją i spójnym kolorem ścian. Realizacja dobrze pokazuje, że G Service może przeprowadzić nie tylko samo mycie elewacji, ale również pełne przygotowanie i odnowienie zewnętrznych powierzchni budynku.',
    ],
    scope: [
      'mycie dachu',
      'czyszczenie elewacji starej części budynku',
      'czyszczenie nowej elewacji po rozbudowie domu',
      'przygotowanie powierzchni pod malowanie',
      'malowanie elewacji farbą silikonową',
      'prace prowadzone etapami',
      'kompleksowe odświeżenie domu jednorodzinnego',
    ],
    cardImage: '/images/portfolio/mycie-dachu-czyszczenie-malowanie-elewacji-dom-w-lesie-po.webp',
    cardAlt: 'Dom w lesie po myciu dachu, czyszczeniu i malowaniu elewacji',
    sliderBefore: '/images/portfolio/mycie-dachu-czyszczenie-elewacji-dom-w-lesie-przed.webp',
    sliderAfter: '/images/portfolio/mycie-dachu-czyszczenie-malowanie-elewacji-dom-w-lesie-po.webp',
    sliderAlt: 'Dom w lesie przed i po myciu dachu, czyszczeniu oraz malowaniu elewacji farbą silikonową',
    images: [
      {
        src: '/images/portfolio/mycie-dachu-czyszczenie-elewacji-dom-w-lesie-przed.webp',
        alt: 'Dom w lesie przed myciem dachu i czyszczeniem elewacji',
      },
      {
        src: '/images/portfolio/dom-w-lesie-przed-myciem-dachu-i-elewacji-bok.webp',
        alt: 'Boczna elewacja domu w lesie przed czyszczeniem i malowaniem',
      },
      {
        src: '/images/portfolio/prace-etapowe-mycie-dachu-elewacji-dom-w-lesie.webp',
        alt: 'Prace etapowe przy myciu dachu i przygotowaniu elewacji domu w lesie',
      },
      {
        src: '/images/portfolio/mycie-dachu-czyszczenie-malowanie-elewacji-dom-w-lesie-po.webp',
        alt: 'Dom w lesie po czyszczeniu i malowaniu elewacji farbą silikonową',
      },
      {
        src: '/images/portfolio/dom-w-lesie-po-malowaniu-elewacji-farba-silikonowa-bok.webp',
        alt: 'Boczna elewacja domu po malowaniu farbą silikonową',
      },
      {
        src: '/images/portfolio/dom-w-lesie-po-kompleksowej-renowacji-elewacji.webp',
        alt: 'Dom po kompleksowym myciu dachu i malowaniu elewacji',
      },
    ],
  },
]

export function getRealizationBySlug(slug: string) {
  return REALIZATIONS.find((item) => item.slug === slug)
}
