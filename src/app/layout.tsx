import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './_components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Hegglia Boligfelt - Begynn din boligdrøm med nærhet til en fantastisk natur',
  description:
    'Hegglia Boligfelt er et boligfelt under oppføring i Skaun kommune med umiddelbar nærhet til flotte naturopplevelser. Med kort vei til Trondheim sentrum og flotte turmuligheter i nærområdet, er Hegglia Boligfelt et godt sted å starte boligdrømmen.',
  openGraph: {
    url: 'https://hegglia-test.netlify.app',
    title: 'Velkommen til Hegglia Boligfelt!',
    description:
      'Hegglia Boligfelt er et boligfelt under oppføring i Skaun kommune med umiddelbar nærhet til flotte naturopplevelser. På denne siden finner du informasjon om tomtene på boligfeltet.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-teal-950 antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
