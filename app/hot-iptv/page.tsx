import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Article, Steps, Table, Tip } from '../../components/Article';

export const metadata: Metadata = {
  title: 'Hot IPTV (HotPlayer) koppelen: stap voor stap',
  description: 'Hot IPTV heet nu HotPlayer. Zo koppel je de hot iptv app aan je abonnement: MAC-adres, Upload List, Multi List en Lock MAC, in gewone taal uitgelegd.',
  alternates: { canonical: '/hot-iptv/' },
  openGraph: { url: '/hot-iptv/', images: [{ url: '/images/hero/hero-zenders.webp' }] },
};

const FAQ = [
  { question: 'Is Hot IPTV hetzelfde als HotPlayer?', answer: 'Ja. De app die vroeger Hot IPTV heette, gaat nu verder onder de naam HotPlayer. Het oude webadres hotiptv.app stuurt je door naar hotplayer.app.' },
  { question: 'Wat kost de hot iptv app?', answer: 'De maker geeft een proefperiode van 30 dagen. Daarna kies je bij de maker voor een jaar of voor altijd. De prijzen staan op de website van de maker en kunnen veranderen, daarom noemen we hier geen bedrag. Dit staat los van je iptv bridge abonnement.' },
  { question: 'Krijg ik de zenders via Hot IPTV?', answer: 'Nee, HotPlayer is alleen een speler. De zenders komen van je abonnement. Je koppelt je iptv bridge afspeellijst aan de app via het MAC-adres.' },
  { question: 'Wat is Lock MAC?', answer: 'Met Lock MAC zet je een slot op je koppeling, zodat niemand anders met jouw MAC-adres de afspeellijst kan wijzigen of wissen.' },
  { question: 'Kan ik meer dan één lijst toevoegen?', answer: 'Ja. Met Multi List zet je tot drie afspeellijsten in de app.' },
];

export default function Page() {
  return (
    <Article
      path="/hot-iptv/"
      crumb="Hot IPTV"
      h1="Hot IPTV koppelen aan je abonnement"
      lead="Hot IPTV is een populaire speler die nu verdergaat als HotPlayer. De app maakt de brug tussen je tv en je abonnement: hij toont een MAC-adres, en via de website van de maker koppel je daar je afspeellijst aan. Zo doe je dat, in vijf stappen."
      image={{ src: '/images/hero/hero-zenders.webp', alt: 'Wand met tv-zenders: hot iptv koppelen en alle zenders in één app', w: 2000, h: 1116, pos: '50% 50%' }}
      waText="Hoi, ik wil Hot IPTV (HotPlayer) koppelen. Mijn MAC-adres: "
      howTo={{ name: 'Hot IPTV (HotPlayer) koppelen', steps: ['Installeer HotPlayer uit de app-winkel van je tv of kastje.', 'Open de app en noteer het MAC-adres op het scherm.', 'Ga op je telefoon of computer naar de website van HotPlayer en kies Upload List.', 'Vul het MAC-adres en je afspeellijst-link (M3U) in.', 'Start de app opnieuw; je zenders laden.'] }}
      faq={FAQ}
      related={[['/set-iptv/', 'SET IPTV koppelen'], ['/net-iptv/', 'NET IPTV koppelen'], ['/iptv-bridge-installeren/', 'Alle apparaten op een rij'], ['/', 'iptv bridge: het abonnement']]}
      sections={[
        {
          id: 'wat-is-hot-iptv', title: 'Wat is Hot IPTV (en waarom heet het nu HotPlayer)?', body: (
            <>
              <p><strong>Hot IPTV</strong> is een IPTV-player: een app die zelf geen zenders heeft, maar een afspeellijst afspeelt die jij eraan koppelt. De maker heeft de app hernoemd tot <strong>HotPlayer</strong>; het oude adres hotiptv.app stuurt door naar hotplayer.app. Wie zoekt op ‘hot iptv’ of ‘iptv hot’, bedoelt dus meestal deze app.</p>
              <p>Of HotPlayer op jouw apparaat werkt, zie je in de app-winkel van je tv of kastje en op de website van de maker. Staat hij er niet in? Dan zijn <Link href="/set-iptv/">SET IPTV</Link> en <Link href="/net-iptv/">NET IPTV</Link> goede alternatieven die op dezelfde manier werken.</p>
            </>
          ),
        },
        {
          id: 'koppelen', title: 'Hot IPTV koppelen in vijf stappen', body: (
            <>
              <Steps items={[
                <>Installeer <strong>HotPlayer</strong> uit de app-winkel van je tv of kastje.</>,
                <>Open de app. Op het scherm staat het <strong>MAC-adres</strong> van je apparaat, een code als 1A:2B:3C:4D:5E:6F. Maak er een foto van.</>,
                <>Ga op je telefoon of computer naar de website van HotPlayer en kies <strong>Upload List</strong>.</>,
                <>Vul het MAC-adres in en plak de <strong>afspeellijst-link (M3U)</strong> die je van ons in WhatsApp kreeg. Bevestig.</>,
                <>Start HotPlayer helemaal opnieuw. Je zenders, films en series verschijnen in de app.</>,
              ]} />
              <Tip title="Liever dat wij het doen?">
                <p>Stuur ons in WhatsApp de foto met het MAC-adres. Dan zeggen we precies wat je waar invult, of we lopen het samen met je door.</p>
              </Tip>
            </>
          ),
        },
        {
          id: 'multi-list-lock-mac', title: 'Multi List en Lock MAC', body: (
            <>
              <p>Op de website van HotPlayer vind je twee handige extra’s:</p>
              <ul>
                <li><strong>Multi List</strong>: zet tot drie afspeellijsten in dezelfde app. Handig als je bijvoorbeeld een aparte lijst wilt voor een tweede abonnement.</li>
                <li><strong>Lock MAC</strong>: zet een slot op je koppeling. Dan kan niemand anders met jouw MAC-adres je lijst wijzigen of wissen.</li>
              </ul>
            </>
          ),
        },
        {
          id: 'hot-iptv-app-kosten', title: 'Hot iptv app: proefperiode en activatie', body: (
            <>
              <p>De maker van HotPlayer geeft je eerst een proefperiode van 30 dagen. Daarna activeer je de app bij de maker voor een jaar of voor altijd. De bedragen staan op de website van de maker en verschillen soms per pagina, daarom noemen we hier geen prijs. Belangrijk om te weten:</p>
              <Table
                head={['', 'HotPlayer (de app)', 'iptv bridge (je abonnement)']}
                rows={[
                  ['Wat het is', 'De speler op je tv', 'De zenders, films en series'],
                  ['Waar je betaalt', 'Bij de maker van de app', 'Bij ons, via WhatsApp'],
                  ['Proef of looptijd', '30 dagen proef, daarna 1 jaar of altijd', '3, 6 of 12 maanden'],
                  ['Hulp', 'Website van de maker', 'Wij, via WhatsApp'],
                ]}
              />
            </>
          ),
        },
        {
          id: 'problemen', title: 'Problemen met Hot IPTV', body: (
            <>
              <ul>
                <li><strong>De lijst blijft leeg</strong>: controleer of het MAC-adres op de website precies hetzelfde is als op je tv (let op 0 en O, 1 en I) en start de app opnieuw.</li>
                <li><strong>Een foutmelding over de afspeellijst</strong>: plak de afspeellijst-link opnieuw, zonder spatie aan het begin of eind.</li>
                <li><strong>Beeld hapert</strong>: dat zit meestal in de verbinding. Lees <Link href="/iptv-bridge-storing/">iptv bridge storing</Link>.</li>
              </ul>
              <p>Nog geen abonnement om aan Hot IPTV te koppelen? Bekijk de <Link href="/abonnement/">prijzen</Link> of lees meer over <Link href="/">iptv bridge</Link>.</p>
            </>
          ),
        },
      ]}
    />
  );
}
