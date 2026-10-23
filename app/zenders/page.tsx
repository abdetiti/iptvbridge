import type { Metadata } from 'next';
import React from 'react';
import { ProductPage } from '../../components/ProductPage';

export const metadata: Metadata = {
  title: 'Zenders van iptv bridge: NL en internationaal',
  description: 'Welke zenders kijk je met iptv bridge? Nederlandse en internationale zenders, sport, films, kids en nieuws, met programmagids. 50.000+ bij Standard, 80.000+ bij Premium.',
  alternates: { canonical: '/zenders/' },
  openGraph: { url: '/zenders/', images: [{ url: '/images/hero/hero-zenders.webp' }] },
};

const FAQ = [
  { question: 'Hoeveel zenders krijg ik?', answer: 'Bij Standard 50.000+ zenders, bij Premium 80.000+. Daar zitten Nederlandse zenders, internationale tv, sport, films, kinderzenders en nieuws bij.' },
  { question: 'Zit mijn favoriete zender erin?', answer: 'Stuur de naam van de zender in WhatsApp, dan kijken we het voor je na voordat je bestelt.' },
  { question: 'Krijg ik elke zender in 4K?', answer: 'Nee. Je krijgt het beeld in de kwaliteit waarin de zender zelf uitzendt: SD, HD, Full HD of 4K. De meeste zenders zenden uit in HD of Full HD.' },
  { question: 'Is er een programmagids?', answer: 'Ja, er is een programmagids (EPG). Hoe die eruitziet, hangt af van de app die je aan je abonnement koppelt.' },
  { question: 'Kan ik in twee kamers tegelijk kijken?', answer: 'Ja, met een pakket voor 2 of meer schermen. Je kiest 1 tot 4 schermen, met korting vanaf 2.' },
];

export default function Page() {
  return (
    <ProductPage
      path="/zenders/"
      crumb="Zenders"
      h1="Zenders van iptv bridge"
      intro="Nederlandse zenders en tv uit het buitenland, samen in één app met een programmagids. Standard heeft 50.000+ zenders, Premium 80.000+, in SD, HD, Full HD en 4K."
      waText="Hoi, zit deze zender in iptv bridge: "
      faq={FAQ}
      tiles={[
        { title: 'Nederlandse tv', text: 'De zenders die je kent, zonder kabelaansluiting.', image: '/images/fonds/bg-zendermuur.webp', alt: 'Kijkers voor een wand vol tv-zenders' },
        { title: 'Tv uit het buitenland', text: 'Zenders uit veel landen: een brug naar familie en roots elders.', image: '/images/hero/hero-zenders.webp', alt: 'Logo’s van internationale tv-zenders' },
        { title: 'Sportzenders', text: 'Voetbal, Formule 1 en meer, live wanneer het gebeurt.', image: '/images/hero/hero-stadion.webp', alt: 'Voetbalstadion vol supporters' },
        { title: 'Filmzenders', text: 'Filmzenders, plus een grote bibliotheek op aanvraag.', image: '/images/fonds/bg-bioscoop.webp', alt: 'Bioscoopzaal met groot doek' },
        { title: 'Kids en familie', text: 'Tekenfilms en kinderseries voor de jongste kijkers.', image: '/images/fonds/bg-familie.webp', alt: 'Gezin samen op de bank voor de tv' },
        { title: 'Op elk scherm', text: 'Tv in de woonkamer, telefoon in bed: 1 tot 4 schermen tegelijk.', image: '/images/hero/hero-voetbal-thuis.webp', alt: 'Vrienden kijken samen thuis naar de tv' },
      ]}
    />
  );
}
