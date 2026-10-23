import Link from 'next/link';
import React from 'react';
import { PageHero, WaButton } from './PageHero';
import { BarrierFaq } from './BarrierFaq';
import { Section, LogoGrid, gutter } from './Section';
import { LeafRail } from './LeafRail';
import { JsonLd, faqSchema } from './JsonLd';
import { Faq } from '../data/faq';
import { waLink } from '../lib/site';

export interface Tile { title: string; text: string; image: string; alt: string }

/** Pages produit (zenders, sport, films-series) : beaucoup de médias, peu de texte. */
export function ProductPage({ path, crumb, h1, intro, tiles, logos, logosTitle, logosWide, posters, postersTitle, note, faq, waText, children }: {
  path: string; crumb: string; h1: string; intro: string; tiles: Tile[];
  logos?: { src: string; alt: string }[]; logosTitle?: string; logosWide?: boolean;
  posters?: { src: string; alt: string }[]; postersTitle?: string;
  note?: string; faq: Faq[]; waText: string; children?: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={faqSchema(faq)} />
      <PageHero path={path} crumb={crumb} title={h1} intro={intro}>
        <div className="mt-7 flex flex-wrap gap-3">
          <WaButton href={waLink(waText)} label="Vraag het via WhatsApp" track={`product-${crumb.toLowerCase().replace(/\W+/g, '-')}`} />
          <Link href="/abonnement/" className="inline-flex items-center h-14 px-6 rounded-2xl btn-line text-lg font-bold">Bekijk de prijzen</Link>
        </div>
      </PageHero>

      <section className="pt-10 pb-4" aria-label={`${crumb}: overzicht`}>
        <LeafRail label={`${crumb}: kaarten`} className="lg:max-w-6xl lg:mx-auto">
          {tiles.map((t, k) => (
            <li key={t.title} className="leaf-item snap-center shrink-0 w-[82%] sm:w-[46%] lg:w-[32%]">
              <div className="relative rounded-[26px] overflow-hidden bg-canal h-[380px] border-2 border-ink">
                <img src={t.image} alt={t.alt} className="absolute inset-0 w-full h-full object-cover" loading={k < 2 ? 'eager' : 'lazy'} draggable={false} />
                <span className="absolute inset-0 bg-gradient-to-t from-canal via-canal/30 to-transparent" />
                <span className="absolute left-4 top-4 plate h-7 px-2 rounded-md bg-signal text-ink">{String(k + 1).padStart(2, '0')}</span>
                <div className="absolute left-5 right-5 bottom-5">
                  <h2 className="font-display text-[26px] font-bold tracking-[-0.03em] leading-tight text-white">{t.title}</h2>
                  <p className="mt-2 text-[16px] text-white/90">{t.text}</p>
                </div>
              </div>
            </li>
          ))}
        </LeafRail>
      </section>

      {logos && (
        <section className="py-12" aria-label={logosTitle || 'Logo’s'}>
          <div className="max-w-6xl mx-auto space-y-5" style={gutter}>
            {logosTitle && <h2 className="display text-[clamp(30px,8vw,48px)] text-ink">{logosTitle}</h2>}
            <LogoGrid logos={logos} wide={logosWide} />
          </div>
        </section>
      )}

      {posters && (
        <section className="py-10" aria-label={postersTitle || 'Posters'}>
          {postersTitle && <h2 className="max-w-6xl mx-auto mb-5 display text-[clamp(30px,8vw,48px)] text-ink" style={gutter}>{postersTitle}</h2>}
          <LeafRail label={postersTitle || 'Posters'} className="lg:max-w-6xl lg:mx-auto">
            {posters.map((p) => (
              <li key={p.src} className="leaf-item snap-center shrink-0 w-[58%] sm:w-[34%] lg:w-[18%]">
                <img src={p.src} alt={p.alt} className="w-full aspect-[2/3] object-cover rounded-3xl border-2 border-ink shadow-[0_18px_30px_-18px_rgba(13,47,61,.7)]" loading="lazy" draggable={false} />
              </li>
            ))}
          </LeafRail>
        </section>
      )}

      {note && <p className="max-w-6xl mx-auto text-sm text-soft" style={gutter}>{note}</p>}

      {children}

      <Section plate="Vragen" title="Veelgestelde vragen">
        <div className="max-w-3xl"><BarrierFaq items={faq} /></div>
      </Section>
    </>
  );
}
