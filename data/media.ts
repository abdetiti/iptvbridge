// Tous les médias du site, avec leur place et leur texte alt.

export interface HeroSlide {
  id: string;
  label: string;
  tag: string;
  image: string;
  alt: string;
  /** Cadrage de l'image (object-position) */
  pos?: string;
}

// L'écran de l'autre côté du pont (hero). Les puces et le glissement changent d'image.
export const HERO_SLIDES: HeroSlide[] = [
  { id: 'voetbal', label: 'Voetbal', tag: 'Live', image: '/images/hero/hero-stadion.webp', alt: 'Vol voetbalstadion op tv, live te kijken met iptv bridge', pos: '50% 80%' },
  { id: 'formule-1', label: 'Formule 1', tag: 'Live', image: '/images/sport-affiches/sport-f1-paysage.webp', alt: 'Formule 1-coureurs, het raceweekend live met iptv bridge', pos: '50% 30%' },
  { id: 'thuis', label: 'Thuis', tag: 'Samen', image: '/images/hero/hero-voetbal-thuis.webp', alt: 'Vrienden kijken thuis samen voetbal op een grote tv', pos: '50% 40%' },
  { id: 'zenders', label: 'Zenders', tag: 'Tv', image: '/images/hero/hero-zenders.webp', alt: 'Wand met logo’s van tv-zenders', pos: '50% 50%' },
  { id: 'gezin', label: 'Films', tag: 'Op aanvraag', image: '/images/fonds/bg-familie.webp', alt: 'Gezin kijkt samen een film op de tv in de woonkamer', pos: '50% 30%' },
];

export interface ShowcaseItem {
  id: string;
  title: string;
  kicker: string;
  image: string;
  alt: string;
  text: string;
  href: string;
}

// Carrousel « klapbrug » de l'accueil : la carte du milieu se pose à plat.
export const SHOWCASE: ShowcaseItem[] = [
  { id: 'zenders', title: 'Nederlandse zenders', kicker: 'Live tv', image: '/images/fonds/bg-zendermuur.webp', alt: 'Kijker voor een muur vol tv-zenders', text: 'De bekende Nederlandse zenders en internationale tv, met programmagids.', href: '/zenders/' },
  { id: 'voetbal', title: 'Live voetbal', kicker: 'Sport', image: '/images/sport-affiches/sport-champions-league-sterren.webp', alt: 'Voetbalsterren van de Champions League', text: 'Eredivisie, Europese competities en interlands, live op je eigen tv.', href: '/sport/' },
  { id: 'f1', title: 'Formule 1', kicker: 'Sport', image: '/images/sport-affiches/sport-f1-coureurs.webp', alt: 'Formule 1-coureurs naast elkaar', text: 'Trainingen, kwalificatie en de race: het hele weekend.', href: '/sport/' },
  { id: 'films', title: 'Films', kicker: 'Op aanvraag', image: '/images/films/poster-the-odyssey.webp', alt: 'Filmposter ter illustratie', text: 'Een grote filmbibliotheek, kijken wanneer jij wilt.', href: '/films-series/' },
  { id: 'series', title: 'Series', kicker: 'Op aanvraag', image: '/images/films/poster-outer-banks.webp', alt: 'Serieposter ter illustratie', text: 'Hele seizoenen achter elkaar, op tv, tablet of telefoon.', href: '/films-series/' },
  { id: 'kids', title: 'Kids', kicker: 'Familie', image: '/images/films/poster-paw-patrol.webp', alt: 'Kinderserie-poster ter illustratie', text: 'Tekenfilms en kinderseries voor de kleintjes.', href: '/films-series/' },
];

export const POSTERS = [
  { src: '/images/films/poster-loki.webp', alt: 'Loki, poster ter illustratie' },
  { src: '/images/films/poster-the-odyssey.webp', alt: 'The Odyssey, poster ter illustratie' },
  { src: '/images/films/poster-venom-the-last-dance.webp', alt: 'Venom: The Last Dance, poster ter illustratie' },
  { src: '/images/films/poster-the-mentalist.webp', alt: 'The Mentalist, poster ter illustratie' },
  { src: '/images/films/poster-outer-banks.webp', alt: 'Outer Banks, poster ter illustratie' },
  { src: '/images/films/poster-spider-man-brand-new-day.webp', alt: 'Spider-Man, poster ter illustratie' },
  { src: '/images/films/poster-paw-patrol.webp', alt: 'Paw Patrol, poster ter illustratie' },
];

export const SPORT_POSTERS = [
  { src: '/images/films/poster-champions-league.webp', alt: 'Champions League, poster ter illustratie' },
  { src: '/images/films/poster-formule-1.webp', alt: 'Formule 1, poster ter illustratie' },
  { src: '/images/sport-affiches/sport-oranje.webp', alt: 'Nederlands elftal, poster ter illustratie' },
  { src: '/images/sport-affiches/sport-f1-poster.webp', alt: 'Formule 1-poster ter illustratie' },
  { src: '/images/sport-affiches/sport-nba.webp', alt: 'Basketbal, ter illustratie' },
  { src: '/images/films/poster-uefa-euro.webp', alt: 'UEFA EURO, poster ter illustratie' },
];

export const PLATFORMS = [
  { src: '/images/plateformes/hbo-max.webp', alt: 'HBO Max' },
  { src: '/images/plateformes/disney-plus.webp', alt: 'Disney+' },
  { src: '/images/plateformes/prime-video.webp', alt: 'Prime Video' },
  { src: '/images/plateformes/apple-tv-plus.webp', alt: 'Apple TV+' },
  { src: '/images/plateformes/paramount-plus.webp', alt: 'Paramount+' },
  { src: '/images/plateformes/peacock.webp', alt: 'Peacock' },
];

export const COMPETITIONS = [
  { src: '/images/sport-competitions/comp-eredivisie.webp', alt: 'Eredivisie' },
  { src: '/images/sport-competitions/comp-champions-league.webp', alt: 'UEFA Champions League' },
  { src: '/images/sport-competitions/comp-premier-league.webp', alt: 'Premier League' },
  { src: '/images/sport-competitions/comp-la-liga.webp', alt: 'LaLiga' },
  { src: '/images/sport-competitions/comp-serie-a.webp', alt: 'Serie A' },
  { src: '/images/sport-competitions/comp-bundesliga.webp', alt: 'Bundesliga' },
  { src: '/images/sport-competitions/comp-ligue-1.webp', alt: 'Ligue 1' },
  { src: '/images/sport-competitions/comp-conference-league.webp', alt: 'UEFA Conference League' },
  { src: '/images/sport-competitions/comp-formule-1.webp', alt: 'Formule 1' },
];

export const PAYMENT_LOGOS = [
  { name: 'iDEAL', src: '/images/logos/paiement/ideal.svg' },
  { name: 'PayPal', src: '/images/logos/paiement/paypal.svg' },
  { name: 'Visa', src: '/images/logos/paiement/visa.svg' },
  { name: 'Mastercard', src: '/images/logos/paiement/mastercard.svg' },
  { name: 'Apple Pay', src: '/images/logos/paiement/apple-pay.svg' },
];

export const ILLUSTRATION_NOTE =
  'Afbeeldingen zijn ter illustratie; losse abonnementen op de getoonde streamingdiensten zijn niet inbegrepen.';
