import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { PageHero, WaButton } from '../../components/PageHero';
import { Section } from '../../components/Section';
import { WA_HELLO, INDEPENDENT_NOTE } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Over ons | iptv-bridge.com',
  description: 'Wie zit er achter iptv-bridge.com? iptv bridge is een eigen, onafhankelijk merk: bestellen via WhatsApp en hulp bij het koppelen van al je schermen.',
  alternates: { canonical: '/over-ons/' },
  openGraph: { url: '/over-ons/' },
};

const VALUES = [
  { title: 'Eerlijk vertellen', text: 'We schrijven alleen op wat klopt. Geen verzonnen aantallen, geen sterren die we niet hebben verdiend, geen beloftes die we niet waarmaken.' },
  { title: 'Verbinden tot het werkt', text: 'Lukt het koppelen niet? Stuur een foto van je scherm of de MAC-code van je app, dan kijken we mee tot je beeld hebt.' },
  { title: 'Kort en duidelijk', text: 'Gewone taal, korte antwoorden, en alleen de stappen die bij jouw apparaat horen.' },
];

export default function Page() {
  return (
    <>
      <PageHero path="/over-ons/" crumb="Over ons" title="Over iptv-bridge.com" intro="Wij zijn de brug tussen je abonnement en je schermen: we regelen iptv bridge via WhatsApp, in het Nederlands, en helpen je tot je kijkt." />
      <Section plate="Wie we zijn" title="Een eigen merk">
        <div className="max-w-3xl space-y-4 text-[17px] text-soft">
          <p>{INDEPENDENT_NOTE} Wat je op deze site leest, schreven we zelf. We nemen geen teksten, aantallen of logo’s van andere diensten over.</p>
          <p>Zo werken we: jij stuurt een bericht, wij zetten je abonnement klaar, sturen een veilige betaallink en daarna je gegevens. Daarna helpen we je de app op jouw tv, kastje, telefoon of computer te koppelen.</p>
          <p>Heb je later een vraag of hapert er iets? Stuur een bericht in hetzelfde gesprek. Je praat met een mens, niet met een formulier.</p>
        </div>
      </Section>
      <Section plate="Hoe we werken" title="Waar we op letten">
        <ul className="grid md:grid-cols-3 gap-3">
          {VALUES.map((v, k) => (
            <li key={v.title} className="p-6 rounded-[24px] bg-card border-2 border-ink">
              <span className="inline-flex items-center h-8 px-2.5 rounded-lg bg-signal text-ink font-display font-bold text-[13px]">{String(k + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 font-display text-[22px] font-bold tracking-[-0.03em] leading-tight text-ink">{v.title}</h3>
              <p className="mt-2 text-[16px] text-soft">{v.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[17px] text-soft">Benieuwd naar het abonnement zelf? Bekijk <Link href="/" className="link">iptv bridge</Link> of lees hoe je het <Link href="/iptv-bridge-installeren/" className="link">installeert en koppelt</Link>.</p>
        <div className="mt-8 max-w-md"><WaButton href={WA_HELLO} label="Stel een vraag via WhatsApp" track="over-ons" className="w-full" /></div>
      </Section>
    </>
  );
}
