import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Nav from '../_components/nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Utforsk Boligfeltet | Hegglia Boligfelt',
  description:
    'Få mer informasjon om tomtene på boligfeltet og det planlagte utbyggingsarbeidet.',
  openGraph: {
    url: 'https://hegglia-test.netlify.app/boligfelt',
    title: 'Utforsk Boligfeltet | Hegglia Boligfelt',
    description:
      'Få mer informasjon om tomtene på boligfeltet ved å bruke vår boligfeltutforsker.',
    locale: 'no_NO',
    siteName: 'Hegglia Boligfelt',
    countryName: 'Norge',
    determiner: 'auto',
    emails: ['kontakt@heggliaboligfelt.no'],
    type: 'website',
  },

  twitter: {
    site: '@hegglia',
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
