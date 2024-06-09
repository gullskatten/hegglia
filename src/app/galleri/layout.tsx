import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '../_components/nav';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bildegalleri | Hegglia Boligfelt',
  description: 'Se bilder fra boligfeltet og det planlagte utbyggingsarbeidet.',
  openGraph: {
    url: '/galleri',
    title: 'Bildegalleri | Hegglia Boligfelt',
    description:
      'Se bilder fra boligfeltet og det planlagte utbyggingsarbeidet.',
    locale: 'no_NO',
    siteName: 'Hegglia Boligfelt',
    countryName: 'Norge',
    determiner: 'auto',
    emails: ['kontakt@heggliaboligfelt.no'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hegglia Boligfelt',
    description:
      'Velkommen til Hegglia Boligfelt, et boligfelt med nærhet til flotte naturopplevelser.',
  },
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
