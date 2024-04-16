import Link from 'next/link';
import Nav from './_components/nav';

export default function Custom404() {
  return (
    <div>
      <Nav />
      <div className="flex h-screen flex-col items-center justify-center gap-5 p-3">
        <h2 className="text-4xl font-bold text-teal-100">404</h2>
        <h1 className="text-balance text-center text-sm sm:text-lg">
          Denne siden eksisterer ikke, eller er under arbeid. 🫣
        </h1>
        <Link href="/">
          <span className="text-teal-200 underline underline-offset-2">
            Gå tilbake til forsiden
          </span>
        </Link>
      </div>
    </div>
  );
}
