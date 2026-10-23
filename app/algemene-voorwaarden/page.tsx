import type { Metadata } from 'next';
import { LegalPage } from '../../components/LegalPage';
import { VOORWAARDEN } from '../../data/legal';

export const metadata: Metadata = {
  title: 'Algemene voorwaarden | iptv-bridge.com',
  description: 'Algemene voorwaarden van iptv-bridge.com voor bestellingen, betalingen en digitale diensten.',
  alternates: { canonical: '/algemene-voorwaarden/' },
};

export default function Page() {
  return <LegalPage path="/algemene-voorwaarden/" title="Algemene voorwaarden" body={VOORWAARDEN} />;
}
