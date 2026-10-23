import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Article, Steps, Table, Tip } from '../../components/Article';

export const metadata: Metadata = {
  title: 'SET IPTV koppelen via het MAC-adres van je tv',
  description: 'Zo koppel je SET IPTV aan je abonnement: app installeren, MAC-adres noteren en op de website van SET IPTV je afspeellijst of Xtream Codes invullen. Met de proefweek uitgelegd.',
  alternates: { canonical: '/set-iptv/' },
  openGraph: { url: '/set-iptv/', images: [{ url: '/images/hero/hero-stadion.webp' }] },
};

const FAQ = [
  { question: 'Op welke apparaten werkt SET IPTV?', answer: 'Volgens de maker op Smart TV’s, op Android TV en Android-kastjes en op Android-tablets. Zoek de app in de app-winkel van je apparaat.' },
  { question: 'Wat kost SET IPTV?', answer: 'De maker geeft 7 dagen proef, zonder dat je een betaalkaart nodig hebt. Daarna activeer je de app eenmalig per MAC-adres, voor altijd. De prijs staat op de website van de maker; die betaal je daar, los van je iptv bridge abonnement.' },
  { question: 'Waar vind ik het MAC-adres?', answer: 'Op het startscherm van de SET IPTV-app, zodra je hem opent. Het is een code van zes paren tekens, gescheiden door dubbele punten.' },
  { question: 'Afspeellijst of Xtream Codes: wat kies ik?', answer: 'Allebei werkt. Wij sturen je de gegevens in WhatsApp en zeggen erbij welke manier je het makkelijkst invult.' },
  { question: 'Moet ik opnieuw koppelen na een nieuwe tv?', answer: 'Ja. Het MAC-adres hoort bij je apparaat. Op een nieuwe tv heb je een nieuw MAC-adres, dus koppel je opnieuw en activeer je de app daar.' },
];

export default function Page() {
  return (
    <Article
      path="/set-iptv/"
      crumb="SET IPTV"
      h1="SET IPTV koppelen in vijf minuten"
      lead="SET IPTV is een speler voor Smart TV’s en Android-apparaten die je koppelt via het MAC-adres van je tv. Je hoeft op de tv zelf bijna niets te typen: de verbinding leg je op je telefoon of computer, op de website van SET IPTV. Zo werkt het."
      image={{ src: '/images/hero/hero-stadion.webp', alt: 'Vol voetbalstadion op tv: set iptv koppelen en live sport kijken', w: 1100, h: 733, pos: '50% 80%' }}
      waText="Hoi, ik wil SET IPTV koppelen. Mijn MAC-adres: "
      howTo={{ name: 'SET IPTV koppelen', steps: ['Installeer SET IPTV uit de app-winkel van je tv.', 'Open de app en noteer het MAC-adres op het startscherm.', 'Open de website van SET IPTV op je telefoon of computer en ga naar de pagina Set up.', 'Vul het MAC-adres in, met je afspeellijst-link (M3U) of je Xtream Codes.', 'Start de app opnieuw op je tv.'] }}
      faq={FAQ}
      related={[['/net-iptv/', 'NET IPTV koppelen'], ['/hot-iptv/', 'Hot IPTV koppelen'], ['/iptv-bridge-installeren/', 'Welke app voor Samsung TV?'], ['/', 'iptv bridge: het abonnement']]}
      sections={[
        {
          id: 'wat-is-set-iptv', title: 'Wat is SET IPTV?', body: (
            <>
              <p><strong>SET IPTV</strong> is een IPTV-player van de maker achter setsysteme.com. De app heeft zelf geen zenders: je koppelt er je eigen abonnement aan. Het bijzondere is dat je dat niet met de afstandsbediening hoeft te doen. De app toont een <strong>MAC-adres</strong>, en op de website van SET IPTV vul je bij dat adres je gegevens in. Daarna haalt de app alles zelf op.</p>
              <p>Volgens de maker werkt SET IPTV op Smart TV’s, op Android TV en Android-kastjes en op Android-tablets.</p>
            </>
          ),
        },
        {
          id: 'koppelen', title: 'Zo koppel je SET IPTV', body: (
            <>
              <Steps items={[
                <>Open de app-winkel van je tv, zoek <strong>SET IPTV</strong> en installeer de app.</>,
                <>Open de app. Op het startscherm staat het <strong>MAC-adres</strong>. Maak er een foto van met je telefoon.</>,
                <>Open op je telefoon of computer de website van SET IPTV en ga naar de pagina <strong>Set up</strong>.</>,
                <>Vul het MAC-adres in. Kies dan voor een <strong>afspeellijst (M3U)</strong> en plak de link uit WhatsApp, of kies <strong>Xtream</strong> en vul server, gebruikersnaam en wachtwoord in. Bevestig.</>,
                <>Sluit de app op je tv helemaal af en open hem opnieuw. Je zenders laden.</>,
              ]} />
              <Tip title="Snelste route">
                <p>Stuur de foto met je MAC-adres naar ons in WhatsApp. Dan zeggen we precies welke regel je waar invult.</p>
              </Tip>
            </>
          ),
        },
        {
          id: 'm3u-of-xtream', title: 'Afspeellijst of Xtream: het verschil', body: (
            <Table
              head={['', 'Afspeellijst (M3U)', 'Xtream Codes']}
              rows={[
                ['Wat je invult', 'Eén lange link', 'Server, gebruikersnaam en wachtwoord'],
                ['Handig als', 'Je de link kunt kopiëren en plakken', 'Je liever korte gegevens overtypt'],
                ['Programmagids', 'Soms een aparte gidslink nodig', 'Meestal automatisch'],
              ]}
            />
          ),
        },
        {
          id: 'proefweek', title: 'De proefweek en de activatie van de app', body: (
            <>
              <p>De maker van SET IPTV geeft je 7 dagen om de app te proberen, zonder betaalkaart. Wil je hem daarna blijven gebruiken, dan activeer je de app eenmalig voor jouw MAC-adres, voor altijd. De prijs staat bij de maker en wordt daar betaald. Dat staat helemaal los van je <Link href="/abonnement/">iptv bridge abonnement</Link>: de app is de speler, het abonnement levert de zenders.</p>
            </>
          ),
        },
        {
          id: 'problemen', title: 'Problemen met SET IPTV', body: (
            <>
              <ul>
                <li><strong>Geen zenders na koppelen</strong>: controleer of het MAC-adres op de website precies klopt en start de app opnieuw.</li>
                <li><strong>Zenders wel, gids niet</strong>: vraag ons de gidslink, of koppel met Xtream Codes in plaats van een afspeellijst.</li>
                <li><strong>De app is na een update leeg</strong>: koppel opnieuw op de pagina Set up.</li>
                <li><strong>Beeld hapert</strong>: lees <Link href="/iptv-bridge-storing/">iptv bridge storing</Link>.</li>
              </ul>
              <p>Op een Samsung of LG zijn er ook andere spelers die zo werken. Een overzicht staat in <Link href="/iptv-bridge-installeren/">iptv bridge installeren</Link>. Nog geen abonnement? Bekijk <Link href="/">iptv bridge</Link>.</p>
            </>
          ),
        },
      ]}
    />
  );
}
