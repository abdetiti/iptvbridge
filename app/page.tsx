import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Laptop, MonitorSmartphone, Router, Smartphone, Tv, Usb } from 'lucide-react';
import { BridgeHero } from '../components/home/BridgeHero';
import { Pricing } from '../components/Pricing';
import { BarrierFaq } from '../components/BarrierFaq';
import { LeafRail } from '../components/LeafRail';
import { WaButton } from '../components/PageHero';
import { Section, LogoGrid, Plate, Quay, gutter } from '../components/Section';
import { JsonLd, faqSchema } from '../components/JsonLd';
import { COMPETITIONS, PLATFORMS, POSTERS, SPORT_POSTERS, SHOWCASE, ILLUSTRATION_NOTE } from '../data/media';
import { HOME_FAQ } from '../data/faq';
import { BOX, BOX_IMAGES } from '../data/box';
import { GUIDES } from '../lib/nav';
import { PRICES, orderLink, perMonth } from '../lib/pricing';
import { SITE, INDEPENDENT_NOTE } from '../lib/site';

export const metadata: Metadata = {
  title: 'iptv bridge: de brug naar je tv | bridge iptv',
  description: 'iptv bridge (bridge iptv) in Nederland: live tv, sport, films en series op je Smart TV, kastje, stick, telefoon of pc. Bestellen via WhatsApp, direct actief, hulp bij koppelen.',
  alternates: { canonical: '/' },
  openGraph: { url: '/', title: 'iptv bridge: de brug naar je tv', description: 'Live tv, sport, films en series op elk scherm. Bestellen via WhatsApp, direct actief na je betaling, hulp bij het koppelen.' },
};

const FROM = perMonth(PRICES.Standard[1][12], 12);

const FACTS = [
  { k: 'Direct', v: 'Actief na je betaling' },
  { k: '1–4', v: 'Schermen tegelijk, met korting' },
  { k: '24/7', v: 'Hulp in het Nederlands via WhatsApp' },
  { k: '4K', v: 'Beeld in SD, HD, Full HD en 4K' },
];

const DEVICES = [
  { icon: Tv, title: 'Smart TV', text: 'Samsung, LG en andere Smart TV’s: je koppelt een app uit de winkel van de tv, bijvoorbeeld SET IPTV of NET IPTV.', href: '/set-iptv/', link: 'Koppelen met SET IPTV' },
  { icon: Router, title: 'Android TV en kastjes', text: 'Op Android TV, Google TV en Android-kastjes kies je uit veel apps, zoals TiviMate of HotPlayer.', href: '/hot-iptv/', link: 'Koppelen met Hot IPTV' },
  { icon: Usb, title: 'Fire TV Stick', text: 'Een stick in de HDMI-poort maakt van een gewone tv een slimme tv. Daarna koppel je een IPTV-app.', href: '/iptv-bridge-installeren/', link: 'Stappen voor de stick' },
  { icon: Smartphone, title: 'Telefoon en tablet', text: 'Op iPhone, iPad en Android kijk je onderweg of in een andere kamer, als extra scherm.', href: '/iptv-bridge-installeren/', link: 'Stappen voor je telefoon' },
  { icon: Laptop, title: 'Windows en Mac', text: 'Op je computer werkt het met een IPTV-player, met VLC of met Kodi.', href: '/iptv-windows/', link: 'IPTV op Windows' },
  { icon: MonitorSmartphone, title: 'Oude tv zonder apps', text: 'Geen apps op je tv? Dan slaat een kastje de brug: HDMI erin, internet erbij, klaar.', href: '/iptv-box/', link: 'Welke IPTV box?' },
];

const NEEDS = [
  { t: 'Internet', d: 'Als richtlijn 10 Mbit/s voor HD en 25 Mbit/s voor 4K, per scherm dat tegelijk kijkt. Een netwerkkabel is het stabielst.' },
  { t: 'Een apparaat met een app', d: 'Je Smart TV, een kastje, een Fire TV Stick, je telefoon of je computer. Een schotel of kabelaansluiting heb je niet nodig.' },
  { t: 'Een abonnement', d: 'Standard of Premium, 3 tot 12 maanden, 1 tot 4 schermen. Je gegevens komen direct na je betaling in WhatsApp.' },
];

const STEPS = [
  { t: 'Kies je pakket', d: 'Looptijd, aantal schermen, Standard of Premium. Twijfel je? Vraag het gewoon in WhatsApp.' },
  { t: 'Stuur het WhatsApp-bericht', d: 'Je keuze staat er al in. Je krijgt een veilige betaallink terug.' },
  { t: 'Betaal en ontvang je gegevens', d: 'Direct na je betaling staan je inloggegevens in hetzelfde gesprek.' },
  { t: 'Koppel en kijk', d: 'Zeg welk apparaat je hebt; we sturen de app en de stappen die erbij horen.' },
];

export default function Home() {
  const offers = (['Standard', 'Premium'] as const).flatMap((t) =>
    ([3, 6, 12] as const).map((m) => ({ '@type': 'Offer', name: `${t} ${m} maanden, 1 apparaat`, price: PRICES[t][1][m].toFixed(2), priceCurrency: 'EUR', availability: 'https://schema.org/InStock', url: `${SITE}/abonnement/`, seller: { '@type': 'Organization', name: 'iptv-bridge.com' } }))
  );

  return (
    <>
      <JsonLd
        data={[
          { '@context': 'https://schema.org', '@type': 'WebSite', name: 'iptv-bridge.com', alternateName: 'iptv bridge', url: `${SITE}/`, inLanguage: 'nl-NL' },
          { '@context': 'https://schema.org', '@type': 'Organization', name: 'iptv-bridge.com', url: `${SITE}/`, logo: `${SITE}/icon-512.png` },
          { '@context': 'https://schema.org', '@type': 'Product', name: 'iptv bridge abonnement', description: 'IPTV-abonnement met live tv, sport, films en series op 1 tot 4 apparaten, bestellen via WhatsApp.', brand: { '@type': 'Brand', name: 'iptv bridge' }, image: `${SITE}/og-image.jpg`, offers },
          faqSchema(HOME_FAQ),
        ]}
      />

      {/* Hero : le pont-levis */}
      <section className="relative fog overflow-hidden">
        <div className="max-w-6xl mx-auto pt-7 sm:pt-12 pb-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-x-12 gap-y-6 items-center" style={gutter}>
          <div className="space-y-4 min-w-0 lg:col-start-1 lg:row-start-1 lg:self-end">
            <Plate label="IPTV · Nederland · via WhatsApp" />
            <h1 className="display text-[clamp(46px,13vw,96px)] text-ink">
              <span className="join"><span>iptv</span>{' '}<span>bridge</span></span>
              <span className="block mt-2 text-[0.4em] leading-[1.15] tracking-[-0.02em] text-soft font-semibold">de brug naar je tv</span>
            </h1>
          </div>
          <div className="min-w-0 lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <BridgeHero />
          </div>
          <div className="space-y-5 min-w-0 lg:col-start-1 lg:row-start-2 lg:self-start">
            <p className="text-[18px] sm:text-xl text-soft max-w-xl">
              Met bridge iptv kijk je live tv, sport, films en series via internet, op elk scherm in huis: je Smart TV, een kastje, je telefoon of je pc. Je bestelt via WhatsApp, kijkt direct na je betaling en wij helpen je met het koppelen.
            </p>
            <div className="grid sm:flex flex-wrap gap-3">
              <WaButton href={orderLink('Premium', 12, 1)} label="Bestel via WhatsApp" track="hero" />
              <Link href="/abonnement/" className="inline-flex items-center justify-center h-14 px-6 rounded-2xl btn-line text-lg font-bold">Vanaf {FROM} per maand</Link>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="h-[8px] hazard" />
      </section>

      {/* Les faits */}
      <section aria-label="In het kort">
        <ul className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2.5 pt-5" style={gutter}>
          {FACTS.map((f) => (
            <li key={f.k} className="p-4 sm:p-5 rounded-3xl bg-card border border-line">
              <p className="font-display text-[34px] font-bold tracking-[-0.04em] leading-none text-ink tnum">{f.k}</p>
              <p className="mt-2 text-[15px] text-soft leading-snug">{f.v}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Aanbod : carrousel klapbrug */}
      <section className="pt-16 sm:pt-24 pb-6" aria-labelledby="aanbod-title">
        <div className="max-w-6xl mx-auto mb-6 space-y-4" style={gutter}>
          <Plate n={1} label="Het aanbod" />
          <h2 id="aanbod-title" className="display text-[clamp(32px,8.6vw,56px)] text-ink max-w-2xl">Wat je kijkt met iptv bridge</h2>
          <p className="text-[18px] text-soft max-w-2xl">Swipe door het aanbod: de kaart in het midden ligt plat, als een brug die dicht is.</p>
        </div>
        <LeafRail label="Het aanbod van iptv bridge" className="lg:max-w-6xl lg:mx-auto">
          {SHOWCASE.map((s, k) => (
            <li key={s.id} className="leaf-item snap-center shrink-0 w-[80%] sm:w-[44%] lg:w-[31%]">
              <Link href={s.href} className="relative block rounded-[26px] overflow-hidden bg-canal h-[430px] group border-2 border-ink">
                <img src={s.image} alt={s.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading={k < 2 ? 'eager' : 'lazy'} draggable={false} />
                <span className="absolute inset-0 bg-gradient-to-t from-canal via-canal/25 to-transparent" />
                <span className="absolute left-4 top-4 plate h-7 px-2 rounded-md bg-signal text-ink">{s.kicker}</span>
                <span className="absolute left-5 right-5 bottom-5">
                  <span className="block font-display text-[28px] font-bold tracking-[-0.03em] leading-tight text-white">{s.title}</span>
                  <span className="block mt-2 text-[16px] text-white/90">{s.text}</span>
                  <span className="inline-block mt-3 text-[15px] font-bold text-signal">Bekijk {s.title.toLowerCase()} →</span>
                </span>
              </Link>
            </li>
          ))}
        </LeafRail>
      </section>

      {/* Elk scherm : l'angle du site */}
      <section className="relative mt-8" aria-labelledby="schermen-title">
        <Quay />
        <div className="water text-foam pt-10 pb-16 sm:pb-24">
          <div className="max-w-6xl mx-auto" style={gutter}>
            <div className="mb-9 space-y-4 max-w-2xl">
              <Plate n={2} label="Elk scherm" dark />
              <h2 id="schermen-title" className="display text-[clamp(32px,8.6vw,56px)] text-foam">Eén abonnement, een brug naar elk scherm</h2>
              <p className="text-[18px] text-haze">Je abonnement staat niet vast aan één kastje. Je koppelt het aan het apparaat dat je al hebt, en met 2 tot 4 schermen kijkt iedereen in huis op zijn eigen plek.</p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {DEVICES.map((d) => (
                <li key={d.title} className="p-5 rounded-[24px] bg-canal2 border border-foam/10 flex flex-col">
                  <span className="w-12 h-12 rounded-xl bg-signal text-ink flex items-center justify-center"><d.icon className="w-6 h-6" /></span>
                  <h3 className="mt-4 font-display text-[22px] font-bold tracking-[-0.03em] leading-tight">{d.title}</h3>
                  <p className="mt-2 text-[16px] text-haze flex-1">{d.text}</p>
                  <Link href={d.href} className="mt-3 link-foam">{d.link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Quay fill="#edf1f2" className="-mt-[1px] bg-canal" />
      </section>

      {/* Overstappen */}
      <Section id="overstappen" plate="Overstappen" n={3} title="Bridge tv iptv: van kabel naar internet" intro="Bij iptv bridge komt je tv binnen via internet, niet via de kabel of een schotel. Dit is alles wat je nodig hebt om over te stappen.">
        <ol className="grid md:grid-cols-3 gap-3">
          {NEEDS.map((n, k) => (
            <li key={n.t} className="relative p-6 rounded-[24px] bg-card border-2 border-ink overflow-hidden">
              <span className="inline-flex items-center h-8 px-2.5 rounded-lg bg-ink text-foam font-display font-bold text-[13px] tnum">{String(k + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-display text-[22px] font-bold tracking-[-0.03em] leading-tight text-ink">{n.t}</h3>
              <p className="mt-2 text-[16px] text-soft">{n.d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-3xl text-[17px] text-soft">Wil je eerst snappen wat er achter de schermen gebeurt? Lees <Link href="/hoe-werkt-iptv/" className="link">hoe werkt IPTV</Link>, in gewone taal.</p>
      </Section>

      {/* Sport */}
      <section className="pb-16 sm:pb-24" aria-labelledby="sport-title">
        <div className="max-w-6xl mx-auto mb-6 space-y-4" style={gutter}>
          <Plate n={4} label="Live sport" />
          <h2 id="sport-title" className="display text-[clamp(32px,8.6vw,56px)] text-ink max-w-2xl">Elke wedstrijd, elke race</h2>
          <p className="text-[18px] text-soft max-w-2xl">Van de Eredivisie tot de Champions League en de Formule 1. Kijk je vaak live sport? Neem Premium: die server is gemaakt voor drukke wedstrijdavonden.</p>
        </div>
        <LeafRail label="Sport bij iptv bridge" className="lg:max-w-6xl lg:mx-auto">
          {SPORT_POSTERS.map((p) => (
            <li key={p.src} className="leaf-item snap-center shrink-0 w-[58%] sm:w-[34%] lg:w-[18%]">
              <img src={p.src} alt={p.alt} className="w-full aspect-[2/3] object-cover rounded-3xl border-2 border-ink shadow-[0_18px_30px_-18px_rgba(13,47,61,.7)]" loading="lazy" draggable={false} />
            </li>
          ))}
        </LeafRail>
        <div className="max-w-6xl mx-auto mt-4 space-y-5" style={gutter}>
          <LogoGrid logos={COMPETITIONS} />
          <p><Link href="/sport/" className="link">Alles over sport bij iptv bridge</Link></p>
        </div>
      </section>

      {/* Films (canal) */}
      <section className="relative" aria-labelledby="films-title">
        <Quay />
        <div className="water text-foam pt-10 pb-16 sm:pb-24">
          <div className="max-w-6xl mx-auto mb-6 space-y-4" style={gutter}>
            <Plate n={5} label="Op aanvraag" dark />
            <h2 id="films-title" className="display text-[clamp(32px,8.6vw,56px)] text-foam max-w-2xl">Films en series voor elke avond</h2>
            <p className="text-[18px] text-haze max-w-2xl">140.000+ films en series bij Standard, 200.000+ bij Premium. Op de tv, de tablet of je telefoon.</p>
          </div>
          <LeafRail label="Film- en serieposters" className="lg:max-w-6xl lg:mx-auto">
            {POSTERS.map((p) => (
              <li key={p.src} className="leaf-item snap-center shrink-0 w-[56%] sm:w-[32%] lg:w-[16%]">
                <img src={p.src} alt={p.alt} className="w-full aspect-[2/3] object-cover rounded-3xl border-2 border-foam/20 shadow-[0_20px_34px_-16px_rgba(0,0,0,.8)]" loading="lazy" draggable={false} />
              </li>
            ))}
          </LeafRail>
          <div className="max-w-6xl mx-auto mt-4 space-y-4" style={gutter}>
            <LogoGrid logos={PLATFORMS} wide />
            <p className="text-sm text-haze">{ILLUSTRATION_NOTE}</p>
          </div>
        </div>
        <Quay fill="#edf1f2" className="-mt-[1px] bg-canal" />
      </section>

      {/* Zo werkt het */}
      <Section id="zo-werkt-het" plate="Bestellen" n={6} title="In vier stappen naar de overkant" intro="Geen account, geen formulieren. Alles gaat via WhatsApp, met een mens aan de andere kant.">
        <ol className="relative max-w-2xl">
          <span aria-hidden="true" className="absolute left-[23px] top-6 bottom-6 w-[5px] rounded-full" style={{ backgroundImage: 'repeating-linear-gradient(180deg, #0c2230 0 10px, #f7c51e 10px 16px)' }} />
          {STEPS.map((s, k) => (
            <li key={s.t} className="relative pl-[72px] py-4">
              <span className={`absolute left-0 top-3 w-12 h-12 rounded-xl border-2 border-ink flex items-center justify-center font-display text-[18px] font-bold ${k === STEPS.length - 1 ? 'bg-signal text-ink' : 'bg-ink text-foam'}`}>{k + 1}</span>
              <h3 className="font-display text-[22px] font-bold tracking-[-0.03em] leading-tight text-ink">{s.t}</h3>
              <p className="mt-1.5 text-[17px] text-soft">{s.d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4"><Link href="/bestellen/" className="link">Hoe bestellen werkt, stap voor stap</Link></p>
      </Section>

      {/* Prix */}
      <Section id="prijzen" plate="Prijzen" n={7} title="Kies je pakket" intro="Kies de looptijd en het aantal schermen. Hoe langer je kiest, hoe lager de prijs per maand.">
        <Pricing refPrefix="home" />
      </Section>

      {/* La box */}
      <section className="pb-16 sm:pb-24" aria-labelledby="box-title">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" style={gutter}>
          <div className="space-y-4">
            <Plate n={8} label="Kant-en-klaar" />
            <h2 id="box-title" className="display text-[clamp(32px,8.6vw,56px)] text-ink">Een 4K-kastje met een jaar Premium erbij</h2>
            <p className="text-[18px] text-soft">Onze Android 14 TV Box is de kortste brug naar een tv zonder apps. Hij speelt beeld af in 4K Ultra HD met HDR10 en je krijgt {BOX.months} maanden Premium erbij. Binnen {BOX.deliveryDays} dagen bij je thuis.</p>
            <p className="text-[15px] text-soft">Heb je al een Smart TV of een stick? Dan heb je alleen het abonnement nodig.</p>
          </div>
          <div className="rounded-[30px] bg-card border-2 border-ink p-4 sm:p-5">
            <div className="rounded-3xl overflow-hidden bg-white">
              <img src={BOX_IMAGES[0].src} alt={BOX_IMAGES[0].alt} className="w-full aspect-square object-cover" loading="lazy" draggable={false} />
            </div>
            <div className="pt-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xl font-bold text-ink">Android TV Box + {BOX.months} maanden</p>
                <p className="text-[15px] text-soft">★ {BOX.rating} · {BOX.customers} tevreden klanten</p>
              </div>
              <p className="flex items-baseline gap-2">
                <span className="font-display text-[48px] font-bold tracking-[-0.04em] leading-none text-ink">€{BOX.price}</span>
                {BOX.oldPrice && <s className="text-lg text-soft">€{BOX.oldPrice}</s>}
              </p>
            </div>
            <Link href="/android-tv-box/" className="mt-5 h-14 rounded-2xl btn-signal text-lg font-bold flex items-center justify-center">Bekijk het kastje</Link>
          </div>
        </div>
      </section>

      {/* Gidsen */}
      <Section id="gidsen" plate="Gidsen" n={9} title="Koppelen, kiezen, oplossen" intro="Korte gidsen in gewone taal: per app, per apparaat en voor als er iets hapert.">
        <ol className="rounded-[26px] bg-card border-2 border-ink divide-y divide-line overflow-hidden">
          {GUIDES.map(([href, t, d], k) => (
            <li key={href}>
              <Link href={href} className="group flex items-center gap-4 p-4 sm:p-5 hover:bg-fog">
                <span className="shrink-0 inline-flex items-center justify-center w-11 h-8 rounded-lg bg-ink text-foam font-display text-[13px] font-bold tnum group-hover:bg-signal group-hover:text-ink transition-colors">{String(k + 1).padStart(2, '0')}</span>
                <span className="flex-1 min-w-0"><span className="block text-[18px] font-bold text-ink">{t}</span><span className="block text-[15px] text-soft">{d}</span></span>
                <span aria-hidden="true" className="shrink-0 text-xl text-ink transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section id="vragen" plate="Vragen" n={10} title="Veelgestelde vragen" className="pt-0 sm:pt-0">
        <div className="max-w-3xl">
          <BarrierFaq items={HOME_FAQ} />
          <p className="mt-6 text-[15px] text-soft">{INDEPENDENT_NOTE}</p>
          <p className="mt-4 text-[16px] text-soft">
            Meer vragen? <Link href="/faq/" className="link">Alle vragen en antwoorden</Link>
          </p>
        </div>
      </Section>
    </>
  );
}
