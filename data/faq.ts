import { INDEPENDENT_NOTE } from '../lib/site';

export interface Faq { question: string; answer: string }

// FAQ de l'accueil (textes propres à iptv-bridge.com, jamais copiés d'un autre site du réseau).
export const HOME_FAQ: Faq[] = [
  {
    question: 'Wat is iptv bridge?',
    answer:
      'iptv bridge is een IPTV-abonnement: live tv, sport, films en series komen via je internetverbinding binnen in plaats van via de kabel of een schotel. Je kijkt op je Smart TV, een kastje, een Fire TV Stick, je telefoon of je computer, op 1 tot 4 schermen tegelijk.',
  },
  {
    question: 'Is iptv bridge hetzelfde als andere diensten met ‘Bridge’ in de naam?',
    answer: `Nee. ${INDEPENDENT_NOTE}`,
  },
  {
    question: 'Ik heb nu kabel-tv. Kan ik gewoon overstappen?',
    answer:
      'Ja. Je hebt alleen internet nodig, en een apparaat waar een IPTV-app op kan: een Smart TV, een kastje of een stick. Je kabelabonnement opzeggen doe je zelf bij je provider; dat staat los van iptv bridge.',
  },
  {
    question: 'Hoe snel kan ik kijken?',
    answer:
      'Direct na je betaling. Je inloggegevens komen in hetzelfde WhatsApp-gesprek binnen, samen met de stappen om ze aan jouw apparaat te koppelen.',
  },
  {
    question: 'Op welke apparaten werkt iptv bridge?',
    answer:
      'Op Smart TV’s van onder andere Samsung en LG, op Android TV en Google TV, Android-kastjes, Amazon Fire TV Stick, iPhone en iPad, Android-telefoons en op Windows en Mac. Een oude tv zonder apps? Dan slaat een kastje de brug.',
  },
  {
    question: 'Hoe betaal ik?',
    answer:
      'Je krijgt in WhatsApp een veilige betaallink. Je kunt onder andere betalen met iDEAL, PayPal, Visa, Mastercard en Apple Pay, één keer voor de hele looptijd. Geen account, geen formulieren.',
  },
];

// FAQ de la page prix
export const PRICE_FAQ: Faq[] = [
  {
    question: 'Wat kost iptv bridge?',
    answer:
      'Je betaalt één keer voor de hele looptijd: 3, 6 of 12 maanden. Hoe langer je kiest, hoe minder je per maand betaalt. Bij 12 maanden krijg je er nu 3 maanden gratis bij. De precieze prijs zie je hierboven zodra je looptijd en aantal schermen kiest.',
  },
  {
    question: 'Wat is het verschil tussen Standard en Premium?',
    answer:
      'Premium heeft meer zenders (80.000+ tegenover 50.000+) en meer films en series (200.000+ tegenover 140.000+). Het draait bovendien op een krachtigere server, bedoeld voor drukke live-momenten zoals een topwedstrijd. Kijk je vaak live sport, neem dan Premium.',
  },
  {
    question: 'Hoe werkt de korting voor meer schermen?',
    answer:
      'Kijkt het gezin op meerdere tv’s, of wil je ook op je telefoon kijken? Met 2 schermen krijg je 10 % korting, met 3 schermen 20 % en met 4 schermen 30 %, vergeleken met losse abonnementen.',
  },
  {
    question: 'Zijn er extra kosten?',
    answer:
      'Niet van ons: de prijs die je ziet is de totaalprijs voor de gekozen looptijd. Sommige apps, zoals SET IPTV of NET IPTV, vragen een eenmalige vergoeding aan hun eigen maker. Welke app je nodig hebt, zeggen we je vooraf.',
  },
  {
    question: 'Hoe bestel ik?',
    answer:
      'Kies je pakket en tik op de groene knop. WhatsApp opent met je keuze al in het bericht. Je krijgt een betaallink terug, en direct na je betaling je gegevens.',
  },
];

// Toutes les questions (page /faq/), par thème
export const FAQ_GROUPS: { title: string; items: Faq[] }[] = [
  {
    title: 'Over iptv bridge',
    items: [
      HOME_FAQ[0],
      HOME_FAQ[1],
      HOME_FAQ[2],
      { question: 'Waarom bestellen via WhatsApp?', answer: 'Omdat koppelen soms even uitzoeken is. In WhatsApp stuur je een foto van je tv-scherm of de MAC-code van je app, en we zeggen precies welke stap je moet zetten.' },
    ],
  },
  {
    title: 'Bestellen en betalen',
    items: [
      HOME_FAQ[3],
      HOME_FAQ[5],
      PRICE_FAQ[1],
      PRICE_FAQ[2],
      { question: 'Krijg ik de gratis maanden altijd?', answer: 'De 3 gratis maanden horen bij de actie die nu loopt op het pakket van 12 maanden. Zolang die actie loopt, staat het bij de prijzen.' },
    ],
  },
  {
    title: 'Koppelen en kijken',
    items: [
      HOME_FAQ[4],
      { question: 'Wat betekent ‘koppelen’?', answer: 'Je inloggegevens (of een afspeellijst) in een IPTV-app zetten, zodat de app weet waar hij je zenders vandaan haalt. Bij sommige apps doe je dat op de tv zelf, bij andere op een website met het MAC-adres van je tv.' },
      { question: 'Welke app heb ik nodig?', answer: 'Dat hangt af van je apparaat. Op Samsung en LG kies je een app uit de winkel van de tv, zoals SET IPTV of NET IPTV; op Android TV en kastjes kan bijvoorbeeld HotPlayer of TiviMate. Per apparaat staat het in onze installatiegids.' },
      { question: 'Hoeveel internetsnelheid heb ik nodig?', answer: 'Als richtlijn: ongeveer 10 Mbit/s voor HD en 25 Mbit/s voor 4K, per scherm dat tegelijk kijkt. Een netwerkkabel naar je tv of kastje geeft het meest stabiele beeld.' },
    ],
  },
  {
    title: 'Problemen',
    items: [
      { question: 'Het beeld hapert. Wat nu?', answer: 'Zoek eerst uit waar de verbinding breekt: bij één zender, op één apparaat of overal. Herstart daarna router en apparaat, en gebruik waar het kan een netwerkkabel. Alles staat stap voor stap in onze gids over iptv bridge storing.' },
      { question: 'De app zegt dat mijn gegevens niet kloppen.', answer: 'Meestal zit er een typfout in de gebruikersnaam, het wachtwoord of de server-URL. Kopieer en plak de gegevens uit WhatsApp in plaats van ze over te typen, en let op hoofdletters en de slash aan het eind van de URL.' },
    ],
  },
];
