import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './_components/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://heggliaboligfelt.no'),
  keywords: ['hegglia', 'boligfelt', 'skaun', 'trondheim'],
  title:
    'Hegglia Boligfelt - Begynn din boligdrøm med nærhet til en fantastisk natur',
  description:
    'Hegglia Boligfelt er et boligfelt under oppføring i Skaun kommune med umiddelbar nærhet til flotte naturopplevelser. Med kort vei til Trondheim sentrum og flotte turmuligheter i nærområdet, er Hegglia Boligfelt et godt sted å starte boligdrømmen.',
  openGraph: {
    url: '/',
    title: 'Velkommen til Hegglia Boligfelt!',
    description:
      'Hegglia Boligfelt er et boligfelt under oppføring i Skaun kommune med umiddelbar nærhet til flotte naturopplevelser. På denne siden finner du informasjon om tomtene på boligfeltet.',
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

function addOrganizationJsonLd() {
  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "Organization",
      "legalName": "Hegglia Boligfelt AS",
      "url": "https://www.heggliaboligfelt.no",
      "logo": "https://www.heggliaboligfelt.no/flat-icon-512.webp",
      "name": "Hegglia Boligfelt",
      "description": "Hegglia Boligfelt AS er et boligfelt under oppføring i Skaun kommune med umiddelbar nærhet til flotte naturopplevelser.",
      "email": "kontakt@heggliaboligfelt.no",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Melbyvegen",
        "addressLocality": "Skaun",
        "addressCountry": "NO",
        "postalCode": "7357"
      }
    }
  `,
  };
}

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
        <SpeedInsights />
        <Analytics />
        <section>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={addOrganizationJsonLd()}
            key="product-jsonld"
          />
        </section>
      </body>
    </html>
  );
}
