import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { PageHero, WaButton } from '../../components/PageHero';
import { Section, gutter } from '../../components/Section';
import { JsonLd } from '../../components/JsonLd';
import { orderLink } from '../../lib/pricing';
import { PAYMENT_LOGOS } from '../../data/media';
import { SITE } from '../../lib/site';

export const metadata: Metadata = {
  title: 'iptv bridge bestellen in 4 stappen via WhatsApp',
  description: 'Zo bestel je iptv bridge: pakket kiezen, WhatsApp-bericht sturen, betalen via de betaallink en je apparaat koppelen. Met iDEAL, PayPal of kaart.',
  alternates: { canonical: '/bestellen/' },
  openGraph: { url: '/bestellen/' },
};

const STEPS = [
  { title: 'Kies je pakket', text: 'Kies hoe lang (3, 6 of 12 maanden), op hoeveel schermen (1 tot 4) en Standard of Premium. Twijfel je? Stel je vraag eerst in WhatsApp, dan denken we mee.' },
  { title: 'Tik op de groene knop', text: 'WhatsApp opent met een bericht waarin je keuze al staat. Je hoeft alleen nog op verzenden te tikken.' },
  { title: 'Betaal via de betaallink', text: 'In het gesprek krijg je een beveiligde betaallink. Je betaalt met iDEAL, PayPal, Visa, Mastercard of Apple Pay, één keer voor de hele looptijd.' },
  { title: 'Ontvang je gegevens en koppel', text: 'Direct na je betaling staan je inloggegevens in hetzelfde gesprek. Zeg welk apparaat je hebt; we sturen de app en de stappen om de verbinding te leggen.' },
];

export default function Page() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'HowTo', name: 'iptv bridge bestellen via WhatsApp', inLanguage: 'nl-NL',
        step: STEPS.map((s, k) => ({ '@type': 'HowToStep', position: k + 1, name: s.title, text: s.text, url: `${SITE}/bestellen/` })),
      }} />
      <PageHero path="/bestellen/" crumb="Bestellen" title="iptv bridge bestellen" intro="Bestellen gaat via WhatsApp, met een mens aan de andere kant. Je weet precies wat je krijgt voordat je betaalt, en je gegevens komen direct daarna." />

      <section className="pt-10 pb-16">
        <div className="max-w-6xl mx-auto" style={gutter}>
          <ol className="relative max-w-3xl">
            <span aria-hidden="true" className="absolute left-[23px] top-8 bottom-8 w-[5px] rounded-full" style={{ backgroundImage: 'repeating-linear-gradient(180deg, #0c2230 0 10px, #f7c51e 10px 16px)' }} />
            {STEPS.map((s, k) => (
              <li key={s.title} className="relative pl-[72px] py-3">
                <span className={`absolute left-0 top-5 w-12 h-12 rounded-xl border-2 border-ink flex items-center justify-center font-display text-[18px] font-bold ${k === STEPS.length - 1 ? 'bg-signal text-ink' : 'bg-ink text-foam'}`}>{k + 1}</span>
                <div className="p-5 sm:p-6 rounded-[22px] bg-card border border-line">
                  <h2 className="font-display text-[22px] font-bold tracking-[-0.03em] leading-tight text-ink">{s.title}</h2>
                  <p className="mt-2 text-[17px] text-soft">{s.text}</p>
                  {k === 0 && <Link href="/abonnement/" className="inline-block mt-2 link">Naar de prijzen</Link>}
                  {k === 3 && <Link href="/iptv-bridge-installeren/" className="inline-block mt-2 link">Bekijk de koppelgids</Link>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Section plate="Betalen" title="Veilig betalen" intro="Je betaalt pas als je bestelling in WhatsApp is bevestigd, via een beveiligde betaallink. Wij zien en bewaren je volledige kaartgegevens niet.">
        <div className="flex flex-wrap gap-3">
          {PAYMENT_LOGOS.map((p) => (
            <span key={p.name} className="h-14 px-4 rounded-2xl bg-white border border-line flex items-center"><img src={p.src} alt={p.name} className="h-7 w-auto" /></span>
          ))}
        </div>
        <div className="mt-10 max-w-md grid gap-3">
          <WaButton href={orderLink('Premium', 12, 1)} label="Bestel via WhatsApp" track="bestellen" />
        </div>
      </Section>
    </>
  );
}
