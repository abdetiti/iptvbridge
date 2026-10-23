import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import '@fontsource-variable/instrument-sans';
import '@fontsource-variable/unbounded';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppBar } from '../components/WhatsAppBar';
import { WhatsAppTracking, CookieBanner } from '../components/SiteScripts';
import { SITE } from '../lib/site';

// GA4 / Google Ads / Search Console : à renseigner dans Vercel (variables d'environnement).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';
const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID || '';
const GSC = process.env.NEXT_PUBLIC_GSC_VERIFICATION || '';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: 'iptv bridge: de brug naar je tv | bridge iptv', template: '%s' },
  description: 'iptv bridge in Nederland: live tv, sport, films en series op elk scherm. Bestellen via WhatsApp, direct actief na je betaling, hulp bij het koppelen.',
  applicationName: 'iptv bridge',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: 'iptv-bridge.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'iptv bridge: de brug naar je tv' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  ...(GSC ? { verification: { google: GSC } } : {}),
};

export const viewport: Viewport = { themeColor: '#edf1f2', width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body>
        <Script id="consent-default" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied', wait_for_update: 500 });
          try { if (localStorage.getItem('iptvbridge_cookie_consent') === 'accepted') { gtag('consent', 'update', { ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted' }); } } catch (e) {}
        `}</Script>
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">{`gtag('js', new Date()); gtag('config', '${GA_ID}');${ADS_ID ? ` gtag('config', '${ADS_ID}');` : ''}`}</Script>
          </>
        )}
        <a href="#inhoud" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-signal focus:text-ink focus:rounded-lg">Naar de inhoud</a>
        <Header />
        <main id="inhoud">{children}</main>
        <Footer />
        <WhatsAppBar />
        <WhatsAppTracking />
        <CookieBanner />
      </body>
    </html>
  );
}
