import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Article, Steps, Table, Tip } from '../../components/Article';

export const metadata: Metadata = {
  title: 'NET IPTV koppelen: MAC-adres of APP-ID',
  description: 'NET IPTV op Samsung, LG, Android of Apple TV koppelen aan je abonnement: MAC-adres of APP-ID vinden, je lijst uploaden en wat je doet bij een verkeerd MAC-adres.',
  alternates: { canonical: '/net-iptv/' },
  openGraph: { url: '/net-iptv/', images: [{ url: '/images/fonds/bg-bioscoop.webp' }] },
};

const FAQ = [
  { question: 'Op welke tv’s werkt NET IPTV?', answer: 'Volgens de maker op Samsung-tv’s met Tizen (modellen 2016 tot en met 2020), LG-tv’s met webOS 1.0 tot en met 5.0, Android-apparaten, Apple TV en tv’s met VIDAA.' },
  { question: 'Wat is een APP-ID?', answer: 'Op LG-tv’s met webOS 3.0 of nieuwer laat NET IPTV soms een APP-ID zien in plaats van een MAC-adres. Je gebruikt die code op precies dezelfde manier om je lijst te koppelen.' },
  { question: 'Wat kost NET IPTV?', answer: 'Je betaalt de app één keer per MAC-adres bij de maker, op netiptv.eu. Dat staat los van je iptv bridge abonnement. De prijs zie je bij de maker.' },
  { question: 'Ik heb voor het verkeerde MAC-adres betaald. Kan dat nog goed komen?', answer: 'Volgens de maker kan een fout MAC-adres binnen 14 dagen worden hersteld. Neem daarvoor contact op met de maker van NET IPTV.' },
  { question: 'Kan ik NET IPTV op twee tv’s gebruiken?', answer: 'Ja, maar elke tv heeft zijn eigen MAC-adres, dus je koppelt en activeert de app per tv. Voor twee tv’s tegelijk heb je ook een iptv bridge pakket voor 2 schermen nodig.' },
];

export default function Page() {
  return (
    <Article
      path="/net-iptv/"
      crumb="NET IPTV"
      h1="NET IPTV koppelen aan je abonnement"
      lead="NET IPTV is een speler voor Smart TV’s, Android en Apple TV die je koppelt met een code van je tv: het MAC-adres, of op sommige LG-tv’s een APP-ID. Je uploadt je lijst op de website van de maker en de app op je tv haalt hem op. Hieronder lees je hoe."
      image={{ src: '/images/fonds/bg-bioscoop.webp', alt: 'Groot filmdoek in een donkere zaal: net iptv koppelen voor films op je Smart TV', w: 1000, h: 667, pos: '50% 50%' }}
      waText="Hoi, ik wil NET IPTV koppelen. Mijn MAC-adres of APP-ID: "
      howTo={{ name: 'NET IPTV koppelen', steps: ['Installeer NET IPTV uit de app-winkel van je tv.', 'Open de app en noteer het MAC-adres of de APP-ID.', 'Ga op je telefoon of computer naar netiptv.eu en open de uploadpagina.', 'Vul de code in en plak je afspeellijst-link.', 'Start de app op je tv opnieuw.'] }}
      faq={FAQ}
      related={[['/set-iptv/', 'SET IPTV koppelen'], ['/hot-iptv/', 'Hot IPTV koppelen'], ['/iptv-bridge-installeren/', 'Alle apparaten op een rij'], ['/', 'iptv bridge: het abonnement']]}
      sections={[
        {
          id: 'wat-is-net-iptv', title: 'Wat is NET IPTV?', body: (
            <>
              <p><strong>NET IPTV</strong> is een IPTV-player van netiptv.eu. Net als andere spelers brengt hij zelf geen zenders mee; hij speelt de lijst af die jij eraan koppelt. Die koppeling maak je niet op je tv, maar op de website van de maker, met een code die de app op je scherm laat zien.</p>
              <Table
                head={['Apparaat', 'Werkt volgens de maker', 'Code die je ziet']}
                rows={[
                  ['Samsung (Tizen)', 'Modellen 2016 tot en met 2020', 'MAC-adres'],
                  ['LG (webOS)', 'webOS 1.0 tot en met 5.0', 'MAC-adres, of APP-ID vanaf webOS 3.0'],
                  ['Android', 'Ja', 'MAC-adres'],
                  ['Apple TV', 'Ja', 'MAC-adres'],
                  ['VIDAA', 'Ja', 'MAC-adres'],
                ]}
              />
              <p>Heb je een nieuwere Samsung? Dan is <Link href="/set-iptv/">SET IPTV</Link> een goed alternatief.</p>
            </>
          ),
        },
        {
          id: 'koppelen', title: 'NET IPTV koppelen, stap voor stap', body: (
            <>
              <Steps items={[
                <>Installeer <strong>NET IPTV</strong> uit de app-winkel van je tv.</>,
                <>Open de app. Je ziet een <strong>MAC-adres</strong> of, op een LG, mogelijk een <strong>APP-ID</strong>. Maak er een foto van.</>,
                <>Ga op je telefoon of computer naar <strong>netiptv.eu</strong> en open de pagina om een lijst te uploaden.</>,
                <>Vul bij <strong>MAC / APP ID</strong> je code in en plak de <strong>afspeellijst-link</strong> uit WhatsApp. Bevestig.</>,
                <>Sluit de app op je tv af en open hem opnieuw. Je zenders verschijnen.</>,
              ]} />
              <Tip title="Let op bij het overnemen van de code">
                <p>Een MAC-adres bestaat uit cijfers 0 tot 9 en letters A tot F. Zie je een ‘O’? Dan is het een nul. Twijfel je, stuur ons de foto, dan lezen we hem mee.</p>
              </Tip>
            </>
          ),
        },
        {
          id: 'betalen-app', title: 'Wat je voor de app betaalt (en wat niet)', body: (
            <>
              <p>NET IPTV betaal je één keer per MAC-adres, bij de maker. Betaal je per ongeluk voor een verkeerd MAC-adres, dan kan dat volgens de maker binnen 14 dagen worden hersteld. Je <Link href="/abonnement/">iptv bridge abonnement</Link> betaal je apart bij ons: de app is de speler, het abonnement levert de zenders, films en series.</p>
            </>
          ),
        },
        {
          id: 'problemen', title: 'Als NET IPTV niet wil', body: (
            <>
              <ul>
                <li><strong>De app blijft leeg</strong>: controleer de code op de website, teken voor teken, en start de app opnieuw.</li>
                <li><strong>De app is er niet voor jouw tv</strong>: kijk in de tabel hierboven welke modellen werken, of kies een andere speler uit <Link href="/iptv-bridge-installeren/">iptv bridge installeren</Link>.</li>
                <li><strong>Beeld hapert of bevriest</strong>: lees <Link href="/iptv-bridge-storing/">iptv bridge storing</Link>.</li>
              </ul>
              <p>Wil je NET IPTV gebruiken maar heb je nog geen lijst om te koppelen? Bekijk <Link href="/">iptv bridge</Link>.</p>
            </>
          ),
        },
      ]}
    />
  );
}
