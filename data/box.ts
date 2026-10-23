import { waLink } from '../lib/site';

// ── Réglages de l'offre box (même objet BOX que sur les autres sites) ──
export const BOX = {
  price: 200,
  oldPrice: 280 as number | null,
  months: 12,
  deliveryDays: 3,
  rating: '4,8',
  customers: '1.200+',
};

const IMG = '/images/android-tv-box';
export const BOX_IMAGES = [
  { src: `${IMG}/box-en-afstandsbediening.webp`, thumb: `${IMG}/box-en-afstandsbediening-thumb.webp`, alt: 'Android 14 TV Box met afstandsbediening' },
  { src: `${IMG}/aansluitingen-achterkant.webp`, thumb: `${IMG}/aansluitingen-achterkant-thumb.webp`, alt: 'Aansluitingen van de Android 14 TV Box: HDMI, USB, ethernet en voeding' },
  { src: `${IMG}/zijkant.webp`, thumb: `${IMG}/zijkant-thumb.webp`, alt: 'Android 14 TV Box van de zijkant' },
  { src: `${IMG}/afstandsbediening.webp`, thumb: `${IMG}/afstandsbediening-thumb.webp`, alt: 'Afstandsbediening van de Android 14 TV Box' },
];

export const BOX_FAQ = [
  { question: 'Wat zit er in de prijs?', answer: `De Android 14 TV Box, de afstandsbediening en ${BOX.months} maanden iptv bridge Premium. Je betaalt één keer €${BOX.price}.` },
  { question: 'Haalt de box 4K-beeld?', answer: 'Ja. De box speelt beeld af in 4K Ultra HD met HDR10. Voor 4K heb je ook een 4K-tv nodig, een HDMI-kabel die 4K aankan en een stabiele internetverbinding.' },
  { question: 'Hoe bestel ik de box?', answer: 'Via WhatsApp. Stuur het bericht, dan regelen we de bestelling en de betaling met je in het gesprek.' },
  { question: 'Wanneer wordt de box geleverd?', answer: `Binnen ${BOX.deliveryDays} dagen na je bestelling is de box bij je thuis in Nederland.` },
];

export const BOX_LINK = waLink(`Hoi, ik wil graag de Android 14 TV Box met ${BOX.months} maanden abonnement bestellen (€${BOX.price}).`);
