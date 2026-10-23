import type { Metadata } from 'next';
import { LegalPage } from '../../components/LegalPage';
import { DISCLAIMER } from '../../data/legal';

export const metadata: Metadata = {
  title: 'Disclaimer | iptv-bridge.com',
  description: 'Disclaimer van iptv-bridge.com: eigen, onafhankelijk merk, merknamen, afbeeldingen en de inhoud van deze website.',
  alternates: { canonical: '/disclaimer/' },
};

export default function Page() {
  return <LegalPage path="/disclaimer/" title="Disclaimer" body={DISCLAIMER} />;
}
