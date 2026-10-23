import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Article, Steps, Table, Tip } from '../../components/Article';
import { BOX } from '../../data/box';

export const metadata: Metadata = {
  title: 'IPTV box: de brug naar een tv zonder apps',
  description: 'Een iptv box maakt van elke tv met HDMI een slimme tv. Wanneer heb je een iptv-box nodig, waar let je op (Android, 4K, netwerkpoort) en hoe sluit je hem aan?',
  alternates: { canonical: '/iptv-box/' },
  openGraph: { url: '/iptv-box/', images: [{ url: '/images/android-tv-box/aansluitingen-achterkant.webp' }] },
};

const FAQ = [
  { question: 'Wat is een iptv box?', answer: 'Een klein kastje dat je met HDMI op je tv aansluit. Er draait een besturingssysteem op, vaak Android, waarop je een IPTV-app installeert. Zo kijk je IPTV op een tv die zelf geen geschikte apps heeft.' },
  { question: 'Heb ik een iptv-box nodig als ik een Smart TV heb?', answer: 'Niet per se. Werkt een IPTV-app goed op je Smart TV, dan heb je alleen het abonnement nodig. Een box helpt wel als je tv traag is, de app er niet voor bestaat of als je een netwerkkabel wilt gebruiken waar je tv geen goede poort voor heeft.' },
  { question: 'Box of stick: wat is beter?', answer: 'Een stick is klein en makkelijk mee te nemen. Een box heeft vaak meer aansluitingen, zoals een netwerkpoort voor een kabel, wat voor stabiel beeld bij live sport een voordeel is.' },
  { question: 'Welke box verkopen jullie?', answer: `Een Android 14 TV Box met 4K Ultra HD en HDR10, met ${BOX.months} maanden Premium erbij, voor €${BOX.price}. Hij is binnen ${BOX.deliveryDays} dagen bij je thuis.` },
  { question: 'Kan ik mijn eigen box gebruiken?', answer: 'Ja. Op elke box waar je een IPTV-player op kunt zetten, koppel je je iptv bridge gegevens. Zeg ons welk model je hebt, dan sturen we de stappen.' },
];

export default function Page() {
  return (
    <Article
      path="/iptv-box/"
      crumb="IPTV box"
      h1="IPTV box: de brug naar je tv"
      lead="Een iptv box is het kleine kastje dat de brug slaat tussen internet en een tv die zelf geen goede apps heeft. Je sluit hem aan met HDMI, zet er een IPTV-app op en koppelt je abonnement. Hieronder lees je wanneer je er een nodig hebt, waar je op let en hoe je hem aansluit."
      image={{ src: '/images/android-tv-box/aansluitingen-achterkant.webp', alt: 'Achterkant van een iptv box met HDMI-, USB- en netwerkaansluiting', w: 1200, h: 1200, pos: '50% 50%' }}
      waText="Hoi, ik heb een vraag over een IPTV box."
      howTo={{ name: 'Een iptv box aansluiten', steps: ['Steek de HDMI-kabel in de box en in je tv.', 'Sluit de stroom aan en, als het kan, een netwerkkabel naar je router.', 'Kies op je tv de juiste HDMI-ingang.', 'Doorloop het startmenu van de box en maak verbinding met internet.', 'Installeer een IPTV-player en koppel je gegevens.'] }}
      faq={FAQ}
      related={[['/android-tv-box/', 'Onze Android TV Box + 12 maanden'], ['/hot-iptv/', 'Een app op je box: Hot IPTV'], ['/iptv-bridge-installeren/', 'Koppelen per apparaat'], ['/', 'iptv bridge: het abonnement']]}
      sections={[
        {
          id: 'wanneer', title: 'Wanneer heb je een iptv-box nodig?', body: (
            <>
              <p>Niet iedereen heeft een box nodig. Kijk welke situatie bij jou past:</p>
              <Table
                head={['Jouw tv', 'Wat je nodig hebt']}
                rows={[
                  ['Smart TV waarop een IPTV-app goed werkt', 'Alleen het abonnement'],
                  ['Smart TV die traag is of waar de app niet voor bestaat', 'Een stick of een iptv box'],
                  ['Tv zonder apps, wel met HDMI', 'Een iptv box of een stick'],
                  ['Tv ver van de router, wifi hapert', 'Een box met netwerkpoort, of een kabel naar de Smart TV'],
                ]}
              />
            </>
          ),
        },
        {
          id: 'waar-op-letten', title: 'Waar let je op bij een iptv box?', body: (
            <>
              <ul>
                <li><strong>Besturingssysteem</strong>: op Android draaien de meeste IPTV-players. Een recente versie krijgt langer updates.</li>
                <li><strong>4K en HDR</strong>: heb je een 4K-tv, kies dan een box die 4K en HDR afspeelt. Let op: het beeld wordt alleen 4K als de zender of film zelf in 4K is.</li>
                <li><strong>Netwerkpoort</strong>: een aansluiting voor een netwerkkabel geeft stabieler beeld dan wifi, vooral bij live sport.</li>
                <li><strong>Werkgeheugen en opslag</strong>: liever wat ruimer, dan blijven apps en de programmagids vlot.</li>
                <li><strong>Afstandsbediening</strong>: een fijne afstandsbediening maakt zappen en zoeken een stuk prettiger.</li>
              </ul>
              <Tip title="Box of stick?">
                <p>Een stick verdwijnt achter je tv en is makkelijk mee te nemen op vakantie. Een box heeft meestal meer aansluitingen, zoals die netwerkpoort. Kijk je veel live sport, dan is een box met kabel de stevigste brug.</p>
              </Tip>
            </>
          ),
        },
        {
          id: 'aansluiten', title: 'Een iptv-box aansluiten', body: (
            <Steps items={[
              <>Steek de <strong>HDMI-kabel</strong> in de box en in een vrije HDMI-poort van je tv.</>,
              <>Sluit de <strong>stroom</strong> aan. Kan het, leg dan ook een <strong>netwerkkabel</strong> naar je router.</>,
              <>Kies met de afstandsbediening van je tv de juiste <strong>HDMI-ingang</strong> (de knop ‘Source’ of ‘Input’).</>,
              <>Doorloop het startmenu van de box: taal, internet en eventueel je Google-account.</>,
              <>Installeer een IPTV-player en koppel je gegevens. Hoe, lees je in <Link href="/iptv-bridge-installeren/">iptv bridge installeren</Link>.</>,
            ]} />
          ),
        },
        {
          id: 'onze-box', title: 'Onze box: kant-en-klaar met een jaar Premium', body: (
            <>
              <p>Wil je niet zelf zoeken? Onze <Link href="/android-tv-box/">Android 14 TV Box</Link> speelt beeld af in 4K Ultra HD met HDR10, heeft aansluitingen voor HDMI, USB, een netwerkkabel en stroom, en komt met {BOX.months} maanden Premium erbij. Je betaalt één keer €{BOX.price} en de box is binnen {BOX.deliveryDays} dagen bij je thuis. Lukt het aansluiten niet? Dan helpen we je via WhatsApp.</p>
            </>
          ),
        },
        {
          id: 'eigen-box', title: 'Al een box in huis?', body: (
            <>
              <p>Op bijna elke Android-box koppel je je abonnement met een app zoals <Link href="/hot-iptv/">Hot IPTV</Link> of TiviMate. Heb je een ander soort box? Stuur ons het merk en type in WhatsApp, dan zeggen we wat werkt. Nog geen abonnement? Bekijk <Link href="/">iptv bridge</Link> en de <Link href="/abonnement/">prijzen</Link>.</p>
            </>
          ),
        },
      ]}
    />
  );
}
