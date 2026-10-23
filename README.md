# www.iptv-bridge.com

Site SEO de niche du réseau (mots-clés « iptv bridge » et « bridge iptv »), en néerlandais. « iptv bridge » est notre propre marque (indépendante de tout autre « Bridge ») : vente uniquement via WhatsApp.

- Next.js 16 (pages statiques, `trailingSlash`), Tailwind 4, TypeScript.
- Design « De Ophaalbrug » : pont-levis hollandais, brume claire + bleu canal, un seul accent jaune (feux du pont). Polices Unbounded + Instrument Sans.
- Réglages : `lib/site.ts` (adresse, numéro WhatsApp, emoji 🌉, mention d'indépendance), `lib/pricing.ts` (prix), `data/box.ts` (offre box).
- Variables Vercel : `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_ADS_ID`, `NEXT_PUBLIC_GSC_VERIFICATION`.

```
npm install
npm run dev
```
