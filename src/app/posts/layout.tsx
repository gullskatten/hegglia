import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../_components/footer";
import Nav from "../_components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hegglia Boligfelt",
  description: "Velkommen til Hegglia Boligfelt, et boligfelt med nærhet til flotte naturopplevelser.",
  openGraph: {
    url: "https://hegglia.no",
    title: "Hegglia Boligfelt",
    description: "Velkommen til Hegglia Boligfelt, et boligfelt med nærhet til flotte naturopplevelser.",
    locale: "no_NO",
    siteName: "Hegglia Boligfelt",
    emails: ["kontakt@hegglia.no"],
    images: [{
      url: "https://hegglia.no/hegglia-og-1200.png",
      width: 1200,
      height: 630,
      alt: "Hegglia Boligfelt",
    }],
    type: "website",
  },
  appleWebApp: {
    startupImage: {
      url: "https://hegglia.no/hegglia-og-1200.png",
      media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
    },
    statusBarStyle: "default",
    capable: true,
  },
  twitter: {
    site: "@hegglia",
    card: "summary_large_image",
    title: "Hegglia Boligfelt",
    description: "Velkommen til Hegglia Boligfelt, et boligfelt med nærhet til flotte naturopplevelser.",
    images: [{
      url: "https://hegglia.no/hegglia-og-1200.png",
      alt: "Hegglia Boligfelt",
      width: 1200,
      height: 630,
    }],
  },
  icons: [
    {
      url: "localhost:3000/fav.svg",
      sizes: "32x32",
      type: "image/svg+xml",
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${inter.className} antialiased bg-teal-950 min-h-screen flex flex-col`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
