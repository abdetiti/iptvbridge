import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { Pricing } from '../../components/Pricing';
import { BarrierFaq } from '../../components/BarrierFaq';
import { Section, gutter } from '../../components/Section';
import { Table } from '../../components/Article';
import { JsonLd, faqSchema } from '../../components/JsonLd';
import { PRICE_FAQ } from '../../data/faq';
import { PRICES, PACKAGE_CONTENT, formatPrice, perMonth, DurationMonths } from '../../lib/pricing';
import { SITE } from '../../lib/site';

export const metadata: Metadata = {
  title: 'iptv bridge abonnement: alle prijzen | iptv-bridge.com',
  description: 'Alle prijzen van het iptv bridge abonnement: 3, 6 of 12 maanden, 1 tot 4 schermen, Standard of Premium. Bij 12 maanden nu 3 maanden gratis. Bestellen via WhatsApp.',
  alternates: { canonical: '/abonnement/' },
  openGraph: { url: '/abonnement/', title: 'iptv bridge abonnement: alle prijzen op een rij' },
};

export default function Page() {
  const offers = (['Standard', 'Premium'] as const).flatMap((t) =>
    ([1, 2, 3, 4] as const).flatMap((d) =>
      ([3, 6, 12] as const).map((m) => ({ '@type': 'Offer', name: `${t}, ${m} maanden, ${d} ${d === 1 ? 'apparaat' : 'apparaten'}`, price: PRICES[t][d][m].toFixed(2), priceCurrency: 'EUR', availability: 'https://schema.org/InStock', url: `${SITE}/abonnement/`, seller: { '@type': 'Organization', name: 'iptv-bridge.com' } }))
    )
  );

  return (
    <>
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'Product', name: 'iptv bridge abonnement', description: 'iptv bridge abonnement: Standard of Premium, 3, 6 of 12 maanden, 1 tot 4 apparaten.', brand: { '@type': 'Brand', name: 'iptv bridge' }, image: `${SITE}/og-image.jpg`, offers },
        faqSchema(PRICE_FAQ),
      ]} />
      <PageHero
        path="/abonnement/"
        crumb="Abonnement"
        title="iptv bridge abonnement"
        intro="Eén abonnement, gekoppeld aan 1 tot 4 schermen. Kies je looptijd, het aantal schermen en je pakket: wat je ziet is de totaalprijs voor de hele periode. Bij 12 maanden krijg je er nu 3 maanden gratis bij."
      />

      <section className="pt-10 pb-16" aria-label="Prijscalculator">
        <div className="max-w-6xl mx-auto" style={gutter}>
          <Pricing refPrefix="prijzen" />
        </div>
      </section>

      <Section plate="Wat kost IPTV?" title="Wat kost IPTV bij ons?" intro="De prijzen hieronder gelden voor 1 scherm. Kijk je op meer schermen tegelijk, dan krijg je korting: 10 % bij 2, 20 % bij 3 en 30 % bij 4 schermen.">
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
          {(['Premium', 'Standard'] as const).map((t) => (
            <div key={t} className={`rounded-[26px] overflow-hidden ${t === 'Premium' ? 'water text-foam' : 'bg-card border-2 border-ink'}`}>
              <h3 className={`px-6 pt-6 font-display text-[26px] font-bold tracking-[-0.03em] leading-none ${t === 'Premium' ? 'text-foam' : 'text-ink'}`}>{t}</h3>
              <ul className="p-3">
                {([3, 6, 12] as DurationMonths[]).map((m) => (
                  <li key={m} className={`flex items-center justify-between px-3 py-3.5 border-b last:border-0 ${t === 'Premium' ? 'border-foam/15' : 'border-line'}`}>
                    <span className="text-[16px] font-semibold">{m} maanden{m === 12 ? ' + 3 gratis' : ''}</span>
                    <span className="text-right">
                      <span className="block font-display text-[24px] font-bold tracking-[-0.03em] leading-none tnum">{formatPrice(PRICES[t][1][m])}</span>
                      <span className={`block text-sm tnum ${t === 'Premium' ? 'text-haze' : 'text-soft'}`}>{perMonth(PRICES[t][1][m], m)} per maand</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-[17px] text-soft">
          Wat kost IPTV per maand? Met 12 maanden Standard betaal je gemiddeld {perMonth(PRICES.Standard[1][12], 12)} per maand, met 12 maanden Premium {perMonth(PRICES.Premium[1][12], 12)}. Er komt niets bij van onze kant: geen contract, geen aansluitkosten, geen decoder die je moet huren. Sommige apps, zoals <Link href="/set-iptv/" className="link">SET IPTV</Link> of <Link href="/net-iptv/" className="link">NET IPTV</Link>, vragen wel een eenmalige vergoeding aan hun eigen maker.
        </p>
      </Section>

      <Section plate="Vergelijken" title="Standard of Premium?" intro="Beide pakketten koppel je aan dezelfde apparaten en beide geven beeld tot 4K. Het verschil zit in het aanbod en in de server.">
        <div className="max-w-4xl">
          <Table
            head={['', 'Premium', 'Standard']}
            rows={[
              ['Zenders', PACKAGE_CONTENT.Premium.zenders, PACKAGE_CONTENT.Standard.zenders],
              ['Films en series', PACKAGE_CONTENT.Premium.vod, PACKAGE_CONTENT.Standard.vod],
              ['Server', 'Krachtiger, voor drukke live-momenten', 'Standaard'],
              ['Beeld', 'SD, HD, Full HD en 4K', 'SD, HD, Full HD en 4K'],
              ['Programmagids (EPG)', 'Ja', 'Ja'],
              ['Schermen', '1 tot 4', '1 tot 4'],
              ['Hulp bij koppelen', '24/7 via WhatsApp, in het Nederlands', '24/7 via WhatsApp, in het Nederlands'],
              ['Activatie', 'Direct na je betaling', 'Direct na je betaling'],
            ]}
          />
          <p className="text-[16px] text-soft">Ons advies: kijk je vooral gewone tv, films en series, dan is Standard genoeg. Zit je elk weekend bij voetbal of Formule 1, neem dan Premium. Weet je nog niet op welk apparaat je kijkt? Lees eerst <Link href="/iptv-bridge-installeren/" className="link">iptv bridge installeren</Link>.</p>
        </div>
      </Section>

      <Section plate="Vragen" title="Vragen over de prijzen">
        <div className="max-w-3xl"><BarrierFaq items={PRICE_FAQ} /></div>
      </Section>
    </>
  );
}
