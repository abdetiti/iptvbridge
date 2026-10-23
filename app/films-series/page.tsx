import type { Metadata } from 'next';
import React from 'react';
import { ProductPage } from '../../components/ProductPage';
import { POSTERS, PLATFORMS, ILLUSTRATION_NOTE } from '../../data/media';

export const metadata: Metadata = {
  title: 'Films en series met iptv bridge, op aanvraag',
  description: 'Films en series op aanvraag met iptv bridge: 140.000+ titels bij Standard, 200.000+ bij Premium. Kijk wanneer je wilt, op tv, tablet of telefoon.',
  alternates: { canonical: '/films-series/' },
  openGraph: { url: '/films-series/', images: [{ url: '/images/fonds/bg-bioscoop.webp' }] },
};

const FAQ = [
  { question: 'Hoeveel films en series kan ik kiezen?', answer: 'Bij Standard 140.000+ films en series, bij Premium 200.000+.' },
  { question: 'Zijn de films in 4K?', answer: 'Een deel van de titels is er in 4K, andere in Full HD of HD. Voor 4K heb je ook een 4K-tv, een geschikt apparaat en genoeg internetsnelheid nodig.' },
  { question: 'Kunnen de kinderen in een andere kamer kijken?', answer: 'Ja. Met een pakket voor 2, 3 of 4 schermen kijkt iedereen op zijn eigen apparaat.' },
  { question: 'Krijg ik ook Netflix of Disney+?', answer: 'Nee. De logo’s van streamingdiensten op deze site zijn ter illustratie. Losse abonnementen op die diensten zitten er niet bij.' },
];

export default function Page() {
  return (
    <ProductPage
      path="/films-series/"
      crumb="Films en series"
      h1="Films en series met iptv bridge"
      intro="Een grote bibliotheek op aanvraag: 140.000+ films en series bij Standard, 200.000+ bij Premium. Kiezen, starten, pauzeren: jij bepaalt wanneer, op welk scherm je maar wilt."
      waText="Hoi, ik heb een vraag over films en series bij iptv bridge."
      faq={FAQ}
      posters={POSTERS}
      postersTitle="Vanavond op de bank"
      logos={PLATFORMS}
      logosTitle="Ter illustratie"
      logosWide
      note={ILLUSTRATION_NOTE}
      tiles={[
        { title: 'Films', text: 'Van klassiekers tot nieuwe titels, wanneer jij tijd hebt.', image: '/images/fonds/bg-bioscoop.webp', alt: 'Bioscoopzaal met groot doek' },
        { title: 'Series', text: 'Hele seizoenen achter elkaar, zonder te wachten op volgende week.', image: '/images/films/poster-outer-banks.webp', alt: 'Serieposter ter illustratie' },
        { title: 'Kids', text: 'Tekenfilms en series voor de kleintjes.', image: '/images/films/poster-paw-patrol.webp', alt: 'Kinderserie-poster ter illustratie' },
        { title: 'Filmavond', text: 'Met het hele gezin op de bank.', image: '/images/fonds/bg-familie.webp', alt: 'Gezin kijkt samen een film' },
      ]}
    />
  );
}
