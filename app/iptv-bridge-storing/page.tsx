import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Article, Steps, Table, Tip } from '../../components/Article';

export const metadata: Metadata = {
  title: 'iptv bridge storing: waar breekt je verbinding?',
  description: 'iptv bridge storing of iptv storing: beeld hapert, blijft zwart of laadt niet? Zo vind je in welke schakel het misgaat (zender, app, wifi of dienst) en wat je eraan doet.',
  alternates: { canonical: '/iptv-bridge-storing/' },
  openGraph: { url: '/iptv-bridge-storing/', images: [{ url: '/images/hero/hero-voetbal-thuis.webp' }] },
};

const FAQ = [
  { question: 'Is er nu een iptv bridge storing?', answer: 'Doe eerst de test van de vier schakels op deze pagina. Werkt het op geen enkel apparaat, terwijl je internet verder goed is? Stuur ons dan meteen een bericht in WhatsApp, dan kijken we of het aan de dienst ligt.' },
  { question: 'Waarom hapert het vooral bij voetbal?', answer: 'Tijdens grote wedstrijden kijkt iedereen tegelijk, ook in jouw huis en straat. Een netwerkkabel naar je tv en het stilzetten van andere streams helpen het meest. Premium draait op een krachtigere server voor zulke avonden.' },
  { question: 'Ik hoor geluid, maar het beeld blijft zwart.', answer: 'Kies in de instellingen van je app een andere decoder (hardware of software) of een andere speler. Helpt dat niet, herstart het apparaat.' },
  { question: 'Mijn app laat ineens geen zenders meer zien.', answer: 'Kijk of je abonnement nog loopt en of je gegevens nog kloppen. Bij apps die je via een MAC-adres koppelt, kan een app-update de koppeling wissen; koppel dan opnieuw.' },
  { question: 'Wat stuur ik mee als ik hulp vraag?', answer: 'Je apparaat, de app, een foto van het scherm en of het bij één zender gebeurt of bij alle zenders. Dan kunnen we je meestal in één bericht helpen.' },
];

export default function Page() {
  return (
    <Article
      path="/iptv-bridge-storing/"
      crumb="Storing"
      h1="iptv bridge storing: zo vind je waar het misgaat"
      lead="Een iptv bridge storing voelt alsof de hele brug dicht is, maar meestal breekt maar één schakel: de zender, je apparaat of app, je wifi of, soms, de dienst zelf. Met de test hieronder weet je in een paar minuten welke schakel het is, en per probleem lees je wat je doet. Kom je er niet uit, dan helpen we je via WhatsApp."
      image={{ src: '/images/hero/hero-voetbal-thuis.webp', alt: 'Vrienden kijken thuis voetbal: iptv bridge storing tijdens de wedstrijd oplossen', w: 2000, h: 1601, pos: '50% 40%' }}
      waText="Hoi, ik heb een iptv bridge storing. Mijn apparaat en app: "
      howTo={{ name: 'iptv bridge storing oplossen', steps: ['Kijk of een andere zender wel werkt.', 'Probeer hetzelfde op een ander apparaat of in een andere app.', 'Test of de rest van je internet normaal werkt.', 'Zet router en apparaat een minuut uit en weer aan.', 'Gebruik een netwerkkabel of zet je apparaat dichter bij de router.', 'Werk de app bij of koppel opnieuw.', 'Stuur ons apparaat, app en een foto van het scherm via WhatsApp.'] }}
      faq={FAQ}
      related={[['/iptv-bridge-installeren/', 'Opnieuw koppelen, stap voor stap'], ['/hot-iptv/', 'Hot IPTV opnieuw instellen'], ['/iptv-box/', 'Stabieler kijken met een box'], ['/', 'iptv bridge: het abonnement']]}
      sections={[
        {
          id: 'vier-schakels', title: 'De test van de vier schakels', body: (
            <>
              <p>Tussen de zender en jouw scherm liggen vier schakels. Loop ze één voor één af, dan weet je waar je moet zijn.</p>
              <Steps items={[
                <><strong>De zender.</strong> Werkt een andere zender wel? Dan ligt het aan die ene zender. Wacht even of kies een andere versie van dezelfde zender in de lijst.</>,
                <><strong>Het apparaat en de app.</strong> Werkt het op je telefoon wel, met dezelfde gegevens? Dan zit het probleem in je tv, kastje of app.</>,
                <><strong>Je thuisnetwerk.</strong> Laadt YouTube ook traag of springt een videogesprek? Dan zit het in je wifi of internetverbinding.</>,
                <><strong>De dienst.</strong> Werkt het op geen enkel apparaat en is je internet verder prima? Stuur ons meteen een bericht, dan zoeken we het uit.</>,
              ]} />
            </>
          ),
        },
        {
          id: 'herstart', title: 'De herstart die echt een herstart is', body: (
            <>
              <p>Haal de stekker van je kastje of stick eruit, of zet je tv echt uit in plaats van op stand-by. Doe hetzelfde met je router. Wacht een minuut. Zet eerst de router aan en wacht tot de lampjes rustig branden; zet daarna pas je tv of kastje aan.</p>
              <Tip title="Onze tip">
                <p>Veel Smart TV’s gaan bij ‘uit’ in een diepe slaapstand, waardoor de app niet echt opnieuw start. Houd de aan-knop een paar seconden ingedrukt tot de tv herstart, of trek kort de stekker eruit.</p>
              </Tip>
            </>
          ),
        },
        {
          id: 'per-probleem', title: 'Wat je ziet en wat je doet', body: (
            <Table
              head={['Wat je ziet', 'Welke schakel', 'Wat je doet']}
              rows={[
                ['Beeld laadt steeds opnieuw', 'Thuisnetwerk', 'Netwerkkabel, of 5 GHz-wifi dichter bij de router'],
                ['Beeld bevriest bij een topwedstrijd', 'Thuisnetwerk of drukte', 'Andere streams stilzetten, kabel gebruiken, Premium kiezen'],
                ['Zwart beeld met geluid', 'App', 'Andere decoder kiezen, apparaat herstarten'],
                ['‘Ongeldige gegevens’', 'App', 'Gegevens opnieuw kopiëren en plakken'],
                ['Lege lijst na koppelen via MAC', 'App', 'App opnieuw starten of opnieuw koppelen op de website van de app'],
                ['Geen programmagids', 'App', '‘EPG bijwerken’ in de app en even wachten'],
                ['Eén zender werkt niet', 'Zender', 'Andere versie van de zender kiezen of later opnieuw proberen'],
              ]}
            />
          ),
        },
        {
          id: 'wifi', title: 'Wifi: de zwakste plank van de brug', body: (
            <>
              <p>Wifi deelt de lucht met alles in huis: telefoons, laptops, de buren. Muren, vloeren en zelfs een grote spiegel dempen het signaal. Daarom kan een snel internetabonnement toch haperen op de tv.</p>
              <ul>
                <li><strong>Netwerkkabel</strong>: van router naar tv of kastje. De stevigste verbinding die er is.</li>
                <li><strong>5 GHz</strong>: kies het 5 GHz-netwerk als je tv dicht bij de router staat.</li>
                <li><strong>Mesh of powerline</strong>: staat de tv ver weg, dan brengt een mesh-systeem of een powerline-adapter het internet dichterbij.</li>
                <li><strong>Even rust</strong>: grote downloads of updates op andere apparaten zorgen tijdens een wedstrijd voor haperingen.</li>
              </ul>
              <p>Als richtlijn heb je ongeveer 10 Mbit/s nodig voor HD en 25 Mbit/s voor 4K, per scherm dat tegelijk kijkt.</p>
            </>
          ),
        },
        {
          id: 'app', title: 'De app: bijwerken, cache, decoder, opnieuw koppelen', body: (
            <>
              <p>Kijk in de app-winkel of er een nieuwe versie van je player is. Op Android TV en kastjes kun je ook de cache wissen: Instellingen › Apps › je IPTV-app › Opslag › Cache wissen. Je gegevens blijven gewoon staan.</p>
              <p>Veel players laten je kiezen tussen een <strong>hardware-</strong> en een <strong>software-decoder</strong>. Blijft het beeld zwart of hapert het met de ene, probeer dan de andere. Gebruik je een app die je via het MAC-adres koppelt, zoals <Link href="/set-iptv/">SET IPTV</Link> of <Link href="/net-iptv/">NET IPTV</Link>? Dan kan een update van de app of de tv de koppeling wissen. Koppel dan opnieuw op de website van de app.</p>
            </>
          ),
        },
        {
          id: 'iptv-storing', title: 'iptv storing in het algemeen', body: (
            <>
              <p>Bij elke iptv storing, bij welke dienst ook, werkt dezelfde vuistregel. Gebeurt het bij <strong>één zender</strong>, dan ligt het meestal aan de bron van die zender. Gebeurt het op <strong>één apparaat</strong>, dan zit het in dat apparaat of de app. Gebeurt het <strong>overal tegelijk</strong> terwijl je internet verder werkt, dan kan het aan de dienst liggen. Bij iptv bridge stuur je ons dan een bericht, zodat we het meteen nagaan.</p>
            </>
          ),
        },
        {
          id: 'hulp', title: 'Hulp vragen: dit helpt ons het snelst', body: (
            <>
              <ul>
                <li>Welk apparaat je gebruikt (merk en type tv, kastje of stick).</li>
                <li>Welke app je gebruikt.</li>
                <li>Een foto van het scherm met de foutmelding.</li>
                <li>Of het bij één zender gebeurt of bij alle zenders.</li>
              </ul>
              <p>Met die vier dingen helpen we je meestal in één bericht verder. Nog geen abonnement? Bekijk de <Link href="/abonnement/">prijzen</Link> of lees meer over <Link href="/">iptv bridge</Link>.</p>
            </>
          ),
        },
      ]}
    />
  );
}
