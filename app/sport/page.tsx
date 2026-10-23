import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { ProductPage } from '../../components/ProductPage';
import { COMPETITIONS, SPORT_POSTERS } from '../../data/media';
import { gutter } from '../../components/Section';

export const metadata: Metadata = {
  title: 'Sport kijken met iptv bridge: voetbal en F1 live',
  description: 'Live sport met iptv bridge: Eredivisie, Champions League, Premier League, Formule 1 en meer. Kies Premium voor de krachtigere server tijdens drukke wedstrijdavonden.',
  alternates: { canonical: '/sport/' },
  openGraph: { url: '/sport/', images: [{ url: '/images/hero/hero-stadion.webp' }] },
};

const FAQ = [
  { question: 'Welke competities kan ik volgen?', answer: 'Onder andere de Eredivisie, Champions League, Premier League, LaLiga, Serie A, Bundesliga en de Formule 1. Zoek je een andere sport? Vraag het ons in WhatsApp.' },
  { question: 'Standard of Premium voor sport?', answer: 'Premium. Dat pakket draait op een krachtigere server, gemaakt voor de momenten waarop heel veel mensen tegelijk kijken, zoals een topwedstrijd.' },
  { question: 'Het beeld hapert tijdens een wedstrijd. Wat nu?', answer: 'Leg een netwerkkabel van je router naar je tv of kastje en zet andere streams in huis even stil. Meer oplossingen staan in onze gids over iptv bridge storing.' },
  { question: 'Kan ik de wedstrijd ook op mijn telefoon volgen?', answer: 'Ja. Met een pakket voor 2 of meer schermen kijk je tegelijk op de tv en op je telefoon.' },
];

export default function Page() {
  return (
    <ProductPage
      path="/sport/"
      crumb="Sport"
      h1="Sport kijken met iptv bridge"
      intro="Voetbal, Formule 1 en meer, live op je tv, kastje of telefoon. Kijk je elk weekend? Neem dan Premium: die server is gebouwd voor drukke wedstrijdavonden."
      waText="Hoi, ik heb een vraag over sport kijken met iptv bridge."
      faq={FAQ}
      logos={COMPETITIONS}
      logosTitle="Competities"
      posters={SPORT_POSTERS}
      postersTitle="De grote momenten"
      tiles={[
        { title: 'Voetbal', text: 'Eredivisie en de Europese topcompetities, live.', image: '/images/sport-affiches/sport-champions-league-sterren.webp', alt: 'Voetbalsterren van de Champions League' },
        { title: 'Formule 1', text: 'Vrije trainingen, kwalificatie en de race: het hele weekend.', image: '/images/sport-affiches/sport-f1-coureurs.webp', alt: 'Formule 1-coureurs naast elkaar' },
        { title: 'Oranje', text: 'Interlands van het Nederlands elftal.', image: '/images/sport-affiches/sport-oranje.webp', alt: 'Spelers van het Nederlands elftal' },
        { title: 'Met vrienden', text: 'De wedstrijd samen op het grote scherm.', image: '/images/hero/hero-voetbal-thuis.webp', alt: 'Vrienden kijken thuis voetbal' },
        { title: 'Basketbal en meer', text: 'Ook andere sporten, live wanneer ze gespeeld worden.', image: '/images/sport-affiches/sport-nba.webp', alt: 'Basketbalspelers' },
      ]}
    >
      <section className="py-8">
        <div className="max-w-6xl mx-auto" style={gutter}>
          <p className="max-w-3xl text-[17px] text-soft">Ook de Champions League volg je live, van de eerste speelronde tot de finale. Kijk je op een tv zonder apps? Met een <Link href="/iptv-box/" className="link">IPTV box</Link> zit je zo bij de aftrap.</p>
        </div>
      </section>
    </ProductPage>
  );
}
