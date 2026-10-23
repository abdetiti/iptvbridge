import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Article, Steps, Table, Tip } from '../../components/Article';

export const metadata: Metadata = {
  title: 'Hoe werkt IPTV? Van kabel naar internet uitgelegd',
  description: 'Hoe werkt IPTV? De weg van zender naar scherm in vijf stappen, het verschil met kabel-tv, wat M3U, Xtream Codes, EPG en MAC betekenen en wat je nodig hebt.',
  alternates: { canonical: '/hoe-werkt-iptv/' },
  openGraph: { url: '/hoe-werkt-iptv/', images: [{ url: '/images/fonds/bg-zendermuur.webp' }] },
};

const FAQ = [
  { question: 'Hoe werkt IPTV in één zin?', answer: 'Tv-beelden worden in kleine stukjes via internet naar je toe gestuurd, en een app op je tv, kastje of telefoon zet ze weer achter elkaar als vloeiend beeld.' },
  { question: 'Heb ik nog een kabelaansluiting nodig?', answer: 'Nee. Voor IPTV heb je alleen een internetverbinding nodig, plus een apparaat met een IPTV-app.' },
  { question: 'Gebruikt IPTV veel internet?', answer: 'Het hangt af van de beeldkwaliteit. Als richtlijn heb je ongeveer 10 Mbit/s nodig voor HD en 25 Mbit/s voor 4K, per scherm dat tegelijk kijkt.' },
  { question: 'Waarom loopt live IPTV soms iets achter?', answer: 'De app bouwt een kleine buffer op, zodat korte haperingen in je verbinding niet meteen zichtbaar zijn. Daardoor zie je live beeld vaak een paar seconden later dan via een antenne.' },
  { question: 'Wat is het verschil tussen IPTV en een streamingdienst?', answer: 'Een streamingdienst heeft vooral films en series op aanvraag in zijn eigen app. IPTV brengt daarnaast live zenders met een programmagids, zoals je van de tv gewend bent, in een app naar keuze.' },
];

export default function Page() {
  return (
    <Article
      path="/hoe-werkt-iptv/"
      crumb="Hoe werkt IPTV?"
      h1="Hoe werkt IPTV? De brug van zender naar scherm"
      lead="Hoe werkt IPTV? Kort gezegd: in plaats van via een kabel of een schotel komt je tv binnen via internet. Een app op je tv, kastje of telefoon zet het weer om in beeld. Hieronder lees je de weg van zender naar scherm, het verschil met kabel-tv en de woorden die je onderweg tegenkomt."
      image={{ src: '/images/fonds/bg-zendermuur.webp', alt: 'Kijkers voor een wand vol tv-zenders: hoe werkt iptv', w: 736, h: 483, pos: '50% 50%' }}
      waText="Hoi, ik heb een vraag over hoe IPTV werkt."
      faq={FAQ}
      related={[['/iptv-bridge-installeren/', 'Zelf koppelen, per apparaat'], ['/iptv-box/', 'Een box voor een oudere tv'], ['/abonnement/', 'Wat kost IPTV?'], ['/', 'iptv bridge: het abonnement']]}
      sections={[
        {
          id: 'vijf-stappen', title: 'Van zender naar scherm in vijf stappen', body: (
            <Steps items={[
              <><strong>De zender</strong> zendt uit, net als altijd.</>,
              <><strong>De server</strong> van de dienst zet het signaal om in een stroom van kleine videostukjes.</>,
              <><strong>Internet</strong> brengt die stukjes naar je huis, via dezelfde verbinding als je mail en je video’s.</>,
              <><strong>Je router</strong> stuurt ze door naar je tv, kastje of telefoon, met wifi of een kabel.</>,
              <><strong>De app</strong> zet de stukjes weer achter elkaar en laat vloeiend beeld zien, met een programmagids erbij.</>,
            ]} />
          ),
        },
        {
          id: 'kabel-of-iptv', title: 'Kabel-tv of IPTV: wat verandert er?', body: (
            <>
              <Table
                head={['', 'Kabel-tv', 'IPTV']}
                rows={[
                  ['Hoe het binnenkomt', 'Via de kabelaansluiting in de muur', 'Via je internetverbinding'],
                  ['Waar je kijkt', 'Meestal op de tv met een decoder', 'Op tv, kastje, stick, telefoon of pc'],
                  ['Wat je in huis nodig hebt', 'Een kabelaansluiting', 'Internet en een apparaat met een app'],
                  ['Meerdere schermen', 'Hangt af van je abonnement', 'Hangt af van je pakket; bij ons 1 tot 4'],
                ]}
              />
              <p>Het grootste verschil: met IPTV zit je tv niet meer vast aan het stopcontact van de kabel. Waar internet is, kun je kijken.</p>
            </>
          ),
        },
        {
          id: 'woorden', title: 'De woorden die je onderweg tegenkomt', body: (
            <>
              <ul>
                <li><strong>IPTV-player</strong>: de app die het beeld laat zien, zoals SET IPTV, NET IPTV of Hot IPTV. De app heeft zelf geen zenders.</li>
                <li><strong>M3U</strong>: een afspeellijst in de vorm van één lange link, met alle zenders erin.</li>
                <li><strong>Xtream Codes</strong>: een andere manier om in te loggen, met een server-URL, een gebruikersnaam en een wachtwoord.</li>
                <li><strong>EPG</strong>: de programmagids, die laat zien wat er nu en straks op elke zender is.</li>
                <li><strong>MAC-adres</strong>: een unieke code van je apparaat. Sommige apps gebruiken die om je lijst te koppelen.</li>
                <li><strong>Buffer</strong>: een paar seconden beeld die de app vooruit laadt, zodat een korte hapering niet opvalt.</li>
              </ul>
              <Tip title="Onthoud dit">
                <p>De app is de speler, het abonnement levert wat er te zien is. Werkt het beeld niet, dan zit het probleem in een van beide, of in de verbinding ertussen. Daar gaat onze gids over <Link href="/iptv-bridge-storing/">iptv bridge storing</Link> over.</p>
              </Tip>
            </>
          ),
        },
        {
          id: 'wat-nodig', title: 'Wat heb je nodig?', body: (
            <>
              <ul>
                <li><strong>Internet</strong>: als richtlijn ongeveer 10 Mbit/s voor HD en 25 Mbit/s voor 4K, per scherm dat tegelijk kijkt.</li>
                <li><strong>Een apparaat</strong>: een Smart TV, een <Link href="/iptv-box/">iptv box</Link>, een stick, een telefoon of een computer.</li>
                <li><strong>Een IPTV-player</strong>: welke past bij je apparaat, lees je in <Link href="/iptv-bridge-installeren/">iptv bridge installeren</Link>.</li>
                <li><strong>Een abonnement</strong>: bij ons kies je 3, 6 of 12 maanden en 1 tot 4 schermen.</li>
              </ul>
            </>
          ),
        },
        {
          id: 'live-en-op-aanvraag', title: 'Live tv en op aanvraag', body: (
            <>
              <p>Met IPTV kijk je twee soorten tv door elkaar. <strong>Live</strong>: de zender zoals hij nu uitzendt, met de programmagids erbij, handig voor nieuws en sport. <strong>Op aanvraag</strong>: films en series die je start wanneer jij wilt, en die je kunt pauzeren. Bij iptv bridge krijg je beide in dezelfde app: zie <Link href="/zenders/">zenders</Link> en <Link href="/films-series/">films en series</Link>.</p>
              <p>Klaar om over te stappen? Lees meer over <Link href="/">iptv bridge</Link> of kies direct je <Link href="/abonnement/">pakket</Link>.</p>
            </>
          ),
        },
      ]}
    />
  );
}
