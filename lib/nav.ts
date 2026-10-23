// Menu et liste des gidsen (partagés par l'en-tête, le pied de page et l'accueil).
export const NAV: { href: string; label: string; badge?: string }[] = [
  { href: '/abonnement/', label: 'Prijzen' },
  { href: '/zenders/', label: 'Zenders' },
  { href: '/sport/', label: 'Sport' },
  { href: '/films-series/', label: 'Films & series' },
  { href: '/android-tv-box/', label: 'TV Box', badge: 'Nieuw' },
  { href: '/faq/', label: 'FAQ' },
];

// [url, titre, sous-titre]
export const GUIDES: [string, string, string][] = [
  ['/iptv-bridge-installeren/', 'iptv bridge installeren', 'Koppelen op Smart TV, stick, telefoon en pc'],
  ['/hot-iptv/', 'Hot IPTV', 'HotPlayer koppelen aan je abonnement'],
  ['/set-iptv/', 'SET IPTV', 'Koppelen via het MAC-adres van je tv'],
  ['/net-iptv/', 'NET IPTV', 'MAC of APP-ID: zo leg je de verbinding'],
  ['/iptv-windows/', 'IPTV op Windows', 'Player, VLC of Kodi op je pc'],
  ['/iptv-box/', 'IPTV box', 'De brug naar een oudere tv'],
  ['/iptv-bridge-storing/', 'iptv bridge storing', 'Waar de verbinding breekt en hoe je hem herstelt'],
  ['/hoe-werkt-iptv/', 'Hoe werkt IPTV?', 'Van kabel naar internet, simpel uitgelegd'],
];
