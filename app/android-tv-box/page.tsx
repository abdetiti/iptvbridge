import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Check, Truck } from 'lucide-react';
import { PageHero, WaButton } from '../../components/PageHero';
import { BoxGallery, DeliveryDate } from '../../components/BoxGallery';
import { BarrierFaq } from '../../components/BarrierFaq';
import { Section, gutter } from '../../components/Section';
import { JsonLd, faqSchema } from '../../components/JsonLd';
import { BOX, BOX_FAQ, BOX_IMAGES, BOX_LINK } from '../../data/box';
import { SITE } from '../../lib/site';

export const metadata: Metadata = {
  title: `Android 14 TV Box + ${BOX.months} maanden Premium | €${BOX.price}`,
  description: `Android 14 TV Box met 4K Ultra HD en HDR10, plus ${BOX.months} maanden iptv bridge Premium, voor €${BOX.price}. Klaar voor gebruik en binnen ${BOX.deliveryDays} dagen bij je thuis.`,
  alternates: { canonical: '/android-tv-box/' },
  openGraph: { url: '/android-tv-box/', images: [{ url: BOX_IMAGES[0].src, width: 1200, height: 1200 }] },
};

const POINTS = [
  `${BOX.months} maanden iptv bridge Premium inbegrepen`,
  'Beeld in 4K Ultra HD met HDR10',
  'Android 14',
  '80.000+ zenders en 200.000+ films en series',
  'Aansluiten met HDMI, internet via wifi of netwerkkabel',
  'Hulp bij het instellen via WhatsApp',
];

export default function Page() {
  return (
    <>
      <JsonLd data={[
        {
          '@context': 'https://schema.org', '@type': 'Product', name: `Android 14 TV Box + ${BOX.months} maanden iptv bridge Premium`,
          image: BOX_IMAGES.map((i) => `${SITE}${i.src}`), description: `Android 14 TV Box met beeld in 4K Ultra HD en HDR10, met ${BOX.months} maanden iptv bridge Premium.`,
          offers: { '@type': 'Offer', price: BOX.price.toFixed(2), priceCurrency: 'EUR', availability: 'https://schema.org/InStock', url: `${SITE}/android-tv-box/`, seller: { '@type': 'Organization', name: 'iptv-bridge.com' } },
        },
        faqSchema(BOX_FAQ),
      ]} />
      <PageHero path="/android-tv-box/" crumb="Android TV Box" title={<>Android TV Box + {BOX.months} maanden</>} intro="De kortste brug naar een tv zonder apps: een 4K-kastje dat klaar is voor gebruik, met een jaar Premium erbij. HDMI erin, internet erbij en kijken." />

      <section className="pt-10 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start" style={gutter}>
          <BoxGallery />
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-[64px] font-bold tracking-[-0.05em] leading-none text-ink">€{BOX.price}</span>
              {BOX.oldPrice && <s className="text-2xl text-soft">€{BOX.oldPrice}</s>}
            </div>
            <p className="text-[16px] text-soft">★ {BOX.rating} · {BOX.customers} tevreden klanten · Eén keer betalen</p>
            <ul className="space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex gap-3 text-[17px] text-ink">
                  <span className="w-6 h-6 rounded-md bg-signal text-ink border-2 border-ink flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5 stroke-[3]" /></span>
                  {p}
                </li>
              ))}
            </ul>
            <p className="flex items-start gap-3 p-4 rounded-2xl bg-card border-2 border-ink text-[16px] text-ink">
              <Truck className="w-6 h-6 shrink-0 text-ink" />
              <DeliveryDate />
            </p>
            <WaButton href={BOX_LINK} label="Bestel het kastje via WhatsApp" track="BOX-hero" className="w-full" />
            <p className="text-[15px] text-soft">Heb je al een Smart TV of een ander kastje? Dan is alleen een <Link href="/abonnement/" className="link">abonnement</Link> genoeg. Twijfel je? Lees welke <Link href="/iptv-box/" className="link">IPTV box</Link> bij jou past.</p>
          </div>
        </div>
      </section>

      <Section plate="In drie stappen" title="Zo werkt het">
        <ol className="grid md:grid-cols-3 gap-3">
          {['Stuur het bericht via WhatsApp en betaal via de betaallink.', `Het kastje is binnen ${BOX.deliveryDays} dagen bij je thuis.`, 'Aansluiten met HDMI, inloggen en kijken. Lukt het niet? Wij helpen je via WhatsApp.'].map((t, k) => (
            <li key={t} className="p-6 rounded-[24px] bg-card border-2 border-ink">
              <span className="inline-flex items-center h-9 px-3 rounded-lg bg-ink text-foam font-display text-[16px] font-bold">{k + 1}</span>
              <p className="mt-2 text-[17px] text-ink">{t}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section plate="Vragen" title="Vragen over het kastje">
        <div className="max-w-3xl space-y-8">
          <BarrierFaq items={BOX_FAQ} />
          <WaButton href={BOX_LINK} label="Bestel het kastje via WhatsApp" track="BOX-cta" className="w-full" />
        </div>
      </Section>
    </>
  );
}
