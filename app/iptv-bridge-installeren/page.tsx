import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Article, Steps, Table, Tip } from '../../components/Article';

export const metadata: Metadata = {
  title: 'iptv bridge installeren en koppelen per apparaat',
  description: 'iptv bridge installeren op Samsung, LG, Android TV, Fire TV Stick, iPhone en pc. Welke app je koppelt, waar je je gegevens invult en welke iptv app voor Samsung TV.',
  alternates: { canonical: '/iptv-bridge-installeren/' },
  openGraph: { url: '/iptv-bridge-installeren/', images: [{ url: '/images/fonds/bg-apparaten.webp' }] },
};

const FAQ = [
  { question: 'Bestaat er een aparte iptv bridge app?', answer: 'Nee. Je gebruikt een IPTV-player die bij je apparaat past, en daarin koppel je je iptv bridge gegevens. Zo kies je zelf de app die op jouw tv het fijnst werkt.' },
  { question: 'Welke gegevens krijg ik na mijn bestelling?', answer: 'Je krijgt in WhatsApp de gegevens die je app nodig heeft: meestal een server-URL, een gebruikersnaam en een wachtwoord (Xtream Codes), of een afspeellijst-link (M3U).' },
  { question: 'Welke iptv app voor Samsung TV?', answer: 'Op een Samsung Smart TV zoek je in de app-winkel van de tv naar een IPTV-player, zoals SET IPTV, NET IPTV of SmartOne IPTV. Je koppelt die via het MAC-adres dat de app op je scherm laat zien.' },
  { question: 'Kan ik op meerdere apparaten kijken?', answer: 'Ja, als je een pakket voor 2, 3 of 4 schermen hebt. Op elk apparaat koppel je dezelfde gegevens in een app.' },
  { question: 'Ik kom er niet uit. Helpen jullie?', answer: 'Ja. Stuur in WhatsApp welk apparaat je hebt en een foto van wat je ziet, dan zeggen we welke stap je moet zetten.' },
];

export default function Page() {
  return (
    <Article
      path="/iptv-bridge-installeren/"
      crumb="Installeren"
      h1="iptv bridge installeren: zo leg je de verbinding"
      lead="iptv bridge installeren is eigenlijk koppelen: je zet een IPTV-player op je apparaat en verbindt die met de gegevens die je van ons krijgt. Hieronder per apparaat welke app je kiest en waar je wat invult. Na je bestelling sturen we je de stappen voor jouw apparaat ook in WhatsApp."
      image={{ src: '/images/fonds/bg-apparaten.webp', alt: 'Verschillende schermen met tv-beeld: iptv bridge installeren op elk apparaat', w: 735, h: 588, pos: '50% 45%' }}
      waText="Hoi, ik wil iptv bridge installeren op mijn: "
      howTo={{ name: 'iptv bridge installeren en koppelen', steps: ['Kies een IPTV-player die bij je apparaat past.', 'Installeer de app uit de app-winkel van je apparaat.', 'Kies inloggen met Xtream Codes of met een afspeellijst (M3U).', 'Vul de gegevens uit WhatsApp in, of koppel ze via het MAC-adres op de website van de app.', 'Laad de zenders en de programmagids en begin met kijken.'] }}
      faq={FAQ}
      related={[['/set-iptv/', 'SET IPTV koppelen via MAC'], ['/net-iptv/', 'NET IPTV koppelen'], ['/hot-iptv/', 'Hot IPTV (HotPlayer) koppelen'], ['/', 'iptv bridge: het abonnement']]}
      sections={[
        {
          id: 'twee-manieren', title: 'Twee manieren om te koppelen', body: (
            <>
              <p>Elke IPTV-player heeft gegevens nodig om te weten waar je zenders vandaan komen. Je legt die verbinding op een van twee manieren:</p>
              <ul>
                <li><strong>Inloggen in de app</strong> met <strong>Xtream Codes</strong>: server-URL, gebruikersnaam en wachtwoord. Zo werkt het bij de meeste apps op Android TV, Fire TV Stick, telefoon en tablet.</li>
                <li><strong>Koppelen via het MAC-adres</strong>: de app toont op je tv een code (het MAC-adres, of bij sommige LG-tv’s een APP-ID). Op de website van de app vul je die code in, samen met je gegevens of afspeellijst-link. Zo werkt het bij veel apps op Samsung en LG.</li>
              </ul>
              <Tip title="Onze tip">
                <p>Kopieer je gegevens uit WhatsApp en plak ze, in plaats van ze over te typen. Eén verkeerde letter of een vergeten slash in de server-URL is de meest voorkomende reden dat koppelen mislukt.</p>
              </Tip>
            </>
          ),
        },
        {
          id: 'iptv-bridge-app', title: 'iptv bridge app: welke kies je?', body: (
            <>
              <p>Er is geen aparte iptv bridge app die je moet downloaden. Je kiest een speler die goed werkt op jouw apparaat, en wij sturen je de gegevens die daarin passen. Een overzicht:</p>
              <Table
                head={['Apparaat', 'Apps die je kunt gebruiken', 'Koppelen via']}
                rows={[
                  ['Samsung Smart TV', 'SET IPTV, NET IPTV, SmartOne IPTV', 'MAC-adres op de website van de app'],
                  ['LG Smart TV', 'SET IPTV, NET IPTV, SmartOne IPTV', 'MAC-adres of APP-ID'],
                  ['Android TV / Google TV', 'TiviMate, HotPlayer en meer', 'Xtream Codes of afspeellijst'],
                  ['Android-kastje', 'TiviMate, HotPlayer en meer', 'Xtream Codes of afspeellijst'],
                  ['Fire TV Stick', 'Apps uit de Amazon Appstore', 'Xtream Codes of afspeellijst'],
                  ['iPhone en iPad', 'Smarters Player Lite', 'Xtream Codes'],
                  ['Windows en Mac', 'VLC, Kodi of een IPTV-player', 'Afspeellijst of Xtream Codes'],
                ]}
              />
              <p>Sommige apps zijn gratis, andere vragen een eenmalige vergoeding aan hun eigen maker, vaak na een proefperiode van de app zelf. Dat staat los van je abonnement. Per app lees je meer in onze gidsen over <Link href="/set-iptv/">SET IPTV</Link>, <Link href="/net-iptv/">NET IPTV</Link> en <Link href="/hot-iptv/">Hot IPTV</Link>.</p>
            </>
          ),
        },
        {
          id: 'samsung-tv', title: 'Welke iptv app voor Samsung TV?', body: (
            <>
              <p>Op een Samsung Smart TV installeer je apps uit de app-winkel van de tv. Daar vind je IPTV-players zoals <strong>SET IPTV</strong>, <strong>NET IPTV</strong> en <strong>SmartOne IPTV</strong>. Ze werken alle drie met het MAC-adres van je tv.</p>
              <Steps items={[
                <>Druk op de Home-knop van je afstandsbediening en open de <strong>Apps</strong>-winkel.</>,
                <>Zoek de app op naam, bijvoorbeeld <strong>SET IPTV</strong>, en installeer hem.</>,
                <>Open de app. Op het scherm staat het <strong>MAC-adres</strong>: een code van zes paren tekens, zoals 1A:2B:3C:4D:5E:6F. Maak er een foto van.</>,
                <>Stuur die foto naar ons in WhatsApp, of vul de code zelf in op de website van de app, samen met je gegevens.</>,
                <>Start de app opnieuw. Je zenders en de programmagids laden vanzelf.</>,
              ]} />
              <p>Let op: NET IPTV werkt volgens de maker op Samsung-tv’s met Tizen uit 2016 tot en met 2020. Heb je een andere Samsung, kies dan SET IPTV of SmartOne IPTV, of vraag het ons.</p>
            </>
          ),
        },
        {
          id: 'lg', title: 'LG Smart TV', body: (
            <>
              <p>Op LG werkt het bijna hetzelfde als op Samsung. Open de <strong>LG Content Store</strong>, installeer een IPTV-player en noteer de code die de app laat zien. Bij NET IPTV toont een LG met webOS 3.0 of nieuwer soms een <strong>APP-ID</strong> in plaats van een MAC-adres; die gebruik je dan op dezelfde manier.</p>
            </>
          ),
        },
        {
          id: 'android-tv', title: 'Android TV, Google TV en Android-kastjes', body: (
            <>
              <p>Op Android heb je de meeste keus. Zo leg je de verbinding met inloggen:</p>
              <Steps items={[
                <>Open de <strong>Google Play Store</strong> op je tv of kastje en installeer een IPTV-player, bijvoorbeeld TiviMate.</>,
                <>Kies bij het eerste openen voor <strong>Xtream Codes</strong> (soms heet het ‘Xtream Codes API’ of ‘Login’).</>,
                <>Vul de <strong>server-URL</strong>, je <strong>gebruikersnaam</strong> en je <strong>wachtwoord</strong> uit WhatsApp in.</>,
                <>Wacht tot de zenders en de programmagids geladen zijn. Klaar.</>,
              ]} />
              <p>Een Android-kastje is ook de manier om een oudere tv zonder apps aan te sluiten. Lees daarover meer in <Link href="/iptv-box/">IPTV box</Link>.</p>
            </>
          ),
        },
        {
          id: 'fire-tv', title: 'Amazon Fire TV Stick', body: (
            <>
              <p>De Fire TV Stick steek je in een HDMI-poort van je tv. Zoek daarna in de <strong>Amazon Appstore</strong> naar een IPTV-player en log in met je Xtream Codes, net als op Android. Staat de app die je wilt niet in de Appstore? Vraag ons eerst welke route veilig is, en installeer nooit een app van een onbekende website.</p>
            </>
          ),
        },
        {
          id: 'telefoon', title: 'iPhone, iPad en Android-telefoon', body: (
            <>
              <p>Op <strong>iPhone en iPad</strong> vind je in de App Store bijvoorbeeld <strong>Smarters Player Lite</strong> van WHMCS Smarters. Die is gratis te downloaden; een premiumversie kost bij de maker € 1,99. Kies ‘Login with Xtream Codes API’ en vul je gegevens in. Op een <strong>Android-telefoon</strong> installeer je een IPTV-player uit de Play Store en log je op dezelfde manier in.</p>
              <p>Kijk je op je telefoon naast de tv? Dan heb je een pakket voor minimaal 2 schermen nodig. Dat kies je op de <Link href="/abonnement/">prijzenpagina</Link>.</p>
            </>
          ),
        },
        {
          id: 'pc', title: 'Windows en Mac', body: (
            <>
              <p>Op een computer kun je kijken met VLC, met Kodi of met een losse IPTV-player. Hoe je de afspeellijst daarin zet, staat stap voor stap in <Link href="/iptv-windows/">IPTV op Windows</Link>.</p>
            </>
          ),
        },
        {
          id: 'lukt-niet', title: 'Lukt het koppelen niet?', body: (
            <>
              <ul>
                <li><strong>‘Ongeldige gegevens’</strong>: kopieer en plak je gebruikersnaam, wachtwoord en server-URL opnieuw.</li>
                <li><strong>De app blijft leeg na koppelen via MAC</strong>: start de app helemaal opnieuw, of zet de tv even uit met de stekker.</li>
                <li><strong>Wel zenders, geen gids</strong>: zoek in de app naar ‘EPG bijwerken’ en wacht een paar minuten.</li>
              </ul>
              <p>Werkt het daarna nog niet, lees dan <Link href="/iptv-bridge-storing/">iptv bridge storing</Link> of stuur ons een bericht. Nog geen abonnement? Bekijk <Link href="/">iptv bridge</Link>.</p>
            </>
          ),
        },
      ]}
    />
  );
}
