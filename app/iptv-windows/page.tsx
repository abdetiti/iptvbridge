import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Article, Steps, Table, Tip } from '../../components/Article';

export const metadata: Metadata = {
  title: 'IPTV op Windows: player, VLC of Kodi op je pc',
  description: 'IPTV kijken op Windows: welke iptv player voor Windows je kiest, hoe je je afspeellijst in VLC opent en hoe iptv en Kodi samenwerken via PVR IPTV Simple Client.',
  alternates: { canonical: '/iptv-windows/' },
  openGraph: { url: '/iptv-windows/', images: [{ url: '/images/fonds/bg-formule-1.webp' }] },
};

const FAQ = [
  { question: 'Wat is de makkelijkste iptv player voor Windows?', answer: 'Om snel te testen: VLC. Die heb je misschien al, en je opent je afspeellijst met één link. Voor dagelijks kijken met een programmagids is Kodi met PVR IPTV Simple Client fijner.' },
  { question: 'Werkt het ook op een Mac?', answer: 'Ja. VLC en Kodi bestaan ook voor macOS en werken daar op dezelfde manier.' },
  { question: 'Kan ik op mijn laptop kijken terwijl iemand anders op de tv kijkt?', answer: 'Ja, als je een pakket voor 2 of meer schermen hebt. Elk scherm dat tegelijk kijkt, telt als één apparaat.' },
  { question: 'Waarom heb ik geen programmagids in VLC?', answer: 'VLC speelt zenders af, maar laat geen uitgebreide gids zien. Wil je een gids, gebruik dan Kodi of een IPTV-player die EPG ondersteunt.' },
  { question: 'Kan ik mijn pc op de tv aansluiten?', answer: 'Ja, met een HDMI-kabel. Voor de bank is een kastje of stick meestal handiger, omdat je dan met een afstandsbediening zapt.' },
];

export default function Page() {
  return (
    <Article
      path="/iptv-windows/"
      crumb="IPTV op Windows"
      h1="IPTV op Windows: zo kijk je op je pc"
      lead="Op een Windows-pc of laptop slaat de player de brug tussen je abonnement en je scherm. Je hebt drie routes: VLC om snel te kijken, Kodi voor een echte tv-ervaring met gids, of een losse iptv player. Hieronder per route wat je doet, met de gegevens die je van ons krijgt."
      image={{ src: '/images/fonds/bg-formule-1.webp', alt: 'Formule 1-race op het scherm: iptv kijken op een Windows-pc', w: 736, h: 1308, pos: '50% 40%' }}
      waText="Hoi, ik wil iptv bridge op mijn Windows-pc kijken."
      howTo={{ name: 'IPTV op Windows kijken met VLC', steps: ['Installeer VLC van videolan.org.', 'Open VLC en kies Media › Netwerkstroom openen.', 'Plak je afspeellijst-link (M3U) en klik op Afspelen.', 'Open de afspeellijst (Ctrl + L) om van zender te wisselen.'] }}
      faq={FAQ}
      related={[['/iptv-bridge-installeren/', 'Koppelen op tv en telefoon'], ['/iptv-box/', 'Liever op de tv? Een box'], ['/iptv-bridge-storing/', 'Hapert het beeld?'], ['/', 'iptv bridge: het abonnement']]}
      sections={[
        {
          id: 'drie-routes', title: 'Drie routes: welke iptv player voor Windows?', body: (
            <Table
              head={['Route', 'Goed voor', 'Programmagids']}
              rows={[
                ['VLC', 'Snel kijken, zonder gedoe', 'Nee, alleen de zenderlijst'],
                ['Kodi + PVR IPTV Simple Client', 'Dagelijks kijken, als een tv-menu', 'Ja'],
                ['Losse IPTV-player', 'Inloggen met Xtream Codes', 'Meestal wel, hangt af van de app'],
              ]}
            />
          ),
        },
        {
          id: 'vlc', title: 'IPTV player Windows nummer één: VLC', body: (
            <>
              <p>VLC is gratis, betrouwbaar en staat op veel pc’s al geïnstalleerd. Download hem anders alleen van de officiële website, videolan.org.</p>
              <Steps items={[
                <>Open VLC en kies in het menu <strong>Media › Netwerkstroom openen</strong> (of druk op Ctrl + N).</>,
                <>Plak de <strong>afspeellijst-link (M3U)</strong> die je van ons in WhatsApp kreeg.</>,
                <>Klik op <strong>Afspelen</strong>. De eerste zender start.</>,
                <>Druk op <strong>Ctrl + L</strong> om de afspeellijst te openen en kies een andere zender.</>,
              ]} />
              <Tip title="Onze tip">
                <p>Een lange lijst laadt in VLC soms even. Wacht een halve minuut voordat je opnieuw klikt.</p>
              </Tip>
            </>
          ),
        },
        {
          id: 'iptv-en-kodi', title: 'iptv en Kodi: een echt tv-menu op je pc', body: (
            <>
              <p>Kodi is een gratis mediacenter voor Windows, Mac en meer (kodi.tv). Met de add-on <strong>PVR IPTV Simple Client</strong> maak je er een tv-menu van, met zenders en een programmagids. De add-on zit in de officiële Kodi-bibliotheek.</p>
              <Steps items={[
                <>Installeer Kodi van kodi.tv en open het.</>,
                <>Ga naar <strong>Add-ons</strong> › <strong>Installeren vanuit repository</strong> › <strong>PVR clients</strong> en kies <strong>PVR IPTV Simple Client</strong>. Klik op Installeren.</>,
                <>Open de add-on en kies <strong>Configureren</strong>. Zet de locatie op een internetadres (remote path) en plak je <strong>afspeellijst-link (M3U)</strong>.</>,
                <>Heb je van ons een gidslink (EPG) gekregen? Vul die in bij het onderdeel voor de programmagids.</>,
                <>Sluit af met OK en open in het hoofdmenu <strong>TV</strong>. Je zenders verschijnen, na even laden ook de gids.</>,
              ]} />
              <p>De namen van menu’s verschillen soms een beetje per Kodi-versie en taal. Kom je ergens niet verder, stuur ons dan een foto van je scherm.</p>
            </>
          ),
        },
        {
          id: 'losse-player', title: 'Een losse IPTV-player met Xtream Codes', body: (
            <>
              <p>Er zijn ook IPTV-players voor Windows waarin je inlogt met <strong>Xtream Codes</strong>: server-URL, gebruikersnaam en wachtwoord. Kies er een uit de <strong>Microsoft Store</strong> of van de officiële website van de maker, en nooit een download van een onbekende site. Vraag ons gerust welke app we nu aanraden.</p>
            </>
          ),
        },
        {
          id: 'beter-beeld', title: 'Soepel beeld op je laptop', body: (
            <>
              <ul>
                <li>Sluit je laptop met een <strong>netwerkkabel</strong> aan als het kan, zeker bij live sport.</li>
                <li>Zet grote downloads en cloud-synchronisatie even op pauze.</li>
                <li>Als richtlijn: ongeveer 10 Mbit/s voor HD en 25 Mbit/s voor 4K, per scherm dat tegelijk kijkt.</li>
              </ul>
              <p>Liever op de grote tv in de woonkamer? Dan is een <Link href="/iptv-box/">IPTV box</Link> of een stick handiger dan een pc. En hapert het beeld, lees dan <Link href="/iptv-bridge-storing/">iptv bridge storing</Link>. Nog geen abonnement? Bekijk <Link href="/">iptv bridge</Link>.</p>
            </>
          ),
        },
      ]}
    />
  );
}
