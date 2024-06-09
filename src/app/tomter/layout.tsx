import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '../_components/nav';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Tomtene på boligfeltet | Hegglia Boligfelt',
    description:
      'På denne siden finner du en oversikt over tomtene på boligfeltet.',
    openGraph: {
      url: '/tomter',
      title: 'Tomtene på boligfeltet | Hegglia Boligfelt',
      description:
        'På denne siden finner du en oversikt over tomtene på boligfeltet.',
      locale: 'no_NO',
      siteName: 'Hegglia Boligfelt',
      countryName: 'Norge',
      determiner: 'auto',
      emails: ['kontakt@heggliaboligfelt.no'],
      type: 'website',
      images: [
        {
          url: 'https://heggliaboligfelt.no/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: 'Hegglia Boligfelt',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Tomtene på boligfeltet | Hegglia Boligfelt',
      description:
        'På denne siden finner du en oversikt over tomtene på boligfeltet.',
      images: [
        {
          url: 'https://heggliaboligfelt.no/twitter-image.png',
          width: 1200,
          height: 600,
          alt: 'Hegglia Boligfelt',
        },
      ],
    },
  };
}

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
