import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Footer from '../_components/footer';
import Nav from '../_components/nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Om Boligfeltet | Hegglia Boligfelt',
  description:
    'Velkommen til Hegglia Boligfelt! Få mer informasjon om tomtene på boligfeltet og det planlagte utbyggingsarbeidet. Informasjon om priser finner du også her.',
  openGraph: {
    url: 'https://heggliaboligfelt.no/boligfelt',
    title: 'Utforsk Boligfeltet | Hegglia Boligfelt',
    description:
      'Velkommen til Hegglia Boligfelt! Få mer informasjon om tomtene på boligfeltet ved å bruke vår boligfeltutforsker. Informasjon om priser finner du også her.',
    locale: 'no_NO',
    siteName: 'Hegglia Boligfelt',
    emails: ['kontakt@heggliaboligfelt.no'],
    images: [
      {
        url: 'https://heggliaboligfelt.no/hegglia-og-1200.png',
        width: 1200,
        height: 630,
        alt: 'Hegglia Boligfelt',
      },
    ],
    type: 'website',
  },
  appleWebApp: {
    startupImage: {
      url: 'https://heggliaboligfelt.no/hegglia-og-1200.png',
      media:
        '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
    },
    statusBarStyle: 'default',
    capable: true,
  },
  twitter: {
    site: '@hegglia',
    card: 'summary_large_image',
    title: 'Hegglia Boligfelt',
    description:
      'Velkommen til Hegglia Boligfelt, et boligfelt med nærhet til flotte naturopplevelser.',
    images: [
      {
        url: 'https://heggliaboligfelt.no/hegglia-og-1200.png',
        alt: 'Hegglia Boligfelt',
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: [
    {
      url: 'localhost:3000/fav.svg',
      sizes: '32x32',
      type: 'image/svg+xml',
    },
  ],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div
        className={`${inter.className} flex min-h-screen flex-col bg-teal-950 antialiased`}>
        <Nav />
        {children}
      </div>
    </div>
  );
}
