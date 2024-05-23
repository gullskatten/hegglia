import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Nav from '../_components/nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bildegalleri | Hegglia Boligfelt',
  description: 'Se bilder fra boligfeltet og det planlagte utbyggingsarbeidet.',
  openGraph: {
    url: 'https://hegglia-test.netlify.app/bilder',
    title: 'Bildegalleri | Hegglia Boligfelt',
    description:
      'Se bilder fra boligfeltet og det planlagte utbyggingsarbeidet.',
    locale: 'no_NO',
    siteName: 'Hegglia Boligfelt',
    countryName: 'Norge',
    determiner: 'auto',
    emails: ['kontakt@eokbygg.com'],
    images: [
      {
        url: 'https://hegglia-test.netlify.app/og-1200-main.webp',
        alt: 'Hegglia Boligfelt',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  appleWebApp: {
    startupImage: {
      url: 'https://hegglia-test.netlify.app/og-1200-main.webp',
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
        url: 'https://hegglia-test.netlify.app/og-1200-twitter-min.webp',
        alt: 'Velkommen til Hegglia Boligfelt',
        width: 1200,
        height: 675,
      },
    ],
  },
  icons: [
    {
      url: 'https://hegglia-test.netlify.app/favicon.svg',
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
        <div className="sticky top-0 z-10">
          <Nav />
        </div>
        {children}
      </div>
    </div>
  );
}
