import type { Metadata } from 'next';
import { LegalPage } from '../../components/LegalPage';
import { RETOUR } from '../../data/legal';

export const metadata: Metadata = {
  title: 'Retourbeleid | iptv-bridge.com',
  description: 'Retourbeleid van iptv-bridge.com: annuleren en terugbetaling bij digitale diensten.',
  alternates: { canonical: '/retourbeleid/' },
};

export default function Page() {
  return <LegalPage path="/retourbeleid/" title="Retourbeleid" body={RETOUR} />;
}
