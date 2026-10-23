import type { Metadata } from 'next';
import React from 'react';
import { PageHero, WaButton } from '../../components/PageHero';
import { BarrierFaq } from '../../components/BarrierFaq';
import { Section } from '../../components/Section';
import { JsonLd, faqSchema } from '../../components/JsonLd';
import { FAQ_GROUPS } from '../../data/faq';
import { WA_HELLO } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Veelgestelde vragen over iptv bridge',
  description: 'Antwoorden over iptv bridge: wie wij zijn, bestellen en betalen, apps koppelen op je tv of telefoon, internetsnelheid en wat je doet als het beeld hapert.',
  alternates: { canonical: '/faq/' },
  openGraph: { url: '/faq/' },
};

export default function Page() {
  const all = FAQ_GROUPS.flatMap((g) => g.items);
  return (
    <>
      <JsonLd data={faqSchema(all)} />
      <PageHero path="/faq/" crumb="FAQ" title="Veelgestelde vragen" intro="Alles over iptv bridge: bestellen, betalen, apps koppelen en storingen. Staat je vraag er niet bij? Stuur ons een bericht." />
      {FAQ_GROUPS.map((g, k) => (
        <Section key={g.title} plate={`Deel ${k + 1}`} title={g.title} className="!py-10">
          <div className="max-w-3xl"><BarrierFaq items={g.items} /></div>
        </Section>
      ))}
      <div className="max-w-md mx-auto px-4 pb-20"><WaButton href={WA_HELLO} label="Stel je vraag via WhatsApp" track="faq" className="w-full" /></div>
    </>
  );
}
