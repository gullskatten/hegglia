import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { boligfeltData } from '../_data/boligfelt';
import Link from 'next/link';

export default function Page() {
  const tomterJsonLd = {
    __html: `{
"@context": "https://schema.org",
"@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Forsiden",
    "item": "https://www.heggliaboligfelt.no"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Tomtene på boligfeltet",
    "item": "https://www.heggliaboligfelt.no/tomter"
  }]
}
  `,
  };

  return (
    <div className="relative isolate flex h-full w-full animate-fadeIn flex-col items-center justify-center gap-3">
      <section className="sr-only">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={tomterJsonLd}
          key="product-jsonld"
        />
      </section>
      <div className="absolute -z-10 h-full w-full bg-topology-pattern bg-repeat opacity-10" />
      <div className="sticky top-0 z-10 flex h-10 w-full items-center justify-between bg-teal-950">
        <nav className="flex w-full items-start">
          <ol className="flex items-center gap-1 rounded-r-full bg-teal-900/50  px-5 py-1 text-xs">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 font-medium underline">
                Forsiden <ChevronRightIcon className="h-3 w-3 text-white" />
              </Link>
            </li>
            <li className="truncate font-bold">
              <Link href={`/tomter`} className="truncate font-bold">
                Tomtene på boligfeltet
              </Link>
            </li>
          </ol>
        </nav>
      </div>
      <div className="relative isolate flex w-full flex-col items-center gap-5 ">
        <div className="flex min-w-72 flex-col items-center justify-center gap-3 text-center">
          <h1 className="z-10 my-5 flex animate-fadeIn gap-5 px-3 text-4xl font-bold text-white">
            Tomtene på boligfeltet
          </h1>
        </div>
      </div>
      <div className="max-w-xl bg-white sm:rounded-md sm:shadow-lg">
        <div className="flex flex-col gap-3 px-5 py-5 sm:rounded-b-md sm:py-10">
          <div className="flex flex-col">
            <p className="text-slate-600">
              Klikk inn på en av tomtene for å vise mer informasjon.
            </p>
          </div>
          <ul className="flex flex-col gap-8">
            {boligfeltData.map((tomt) => (
              <li className="flex flex-col gap-1" key={tomt.id}>
                <div className="flex w-full items-center gap-3">
                  <Link
                    href={`/tomter/${tomt.id}`}
                    className="text-lg font-bold text-black underline underline-offset-2">
                    {tomt.name}{' '}
                  </Link>
                  {tomt.available && (
                    <span className="rounded-md bg-teal-100 px-2 py-0.5 text-xs font-bold text-teal-600">
                      Til salgs
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-black">
                  <span>{tomt.kvm} m²</span>{' '}
                  {tomt.available ? (
                    <span className="text-teal-800">
                      {Intl.NumberFormat('nb', {
                        currency: 'NOK',
                        unitDisplay: 'long',
                        style: 'currency',
                        maximumFractionDigits: 0,
                      }).format(tomt.price)}
                    </span>
                  ) : (
                    <span className="text-teal-800">Solgt</span>
                  )}
                </div>
                <p className="max-w-xl text-pretty text-sm text-slate-500">
                  {tomt.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
