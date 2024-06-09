import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import documents from '../_data/boligfelt';
import BoligfeltChart from './BoligfeltChart';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import BoligfeltTable from './BoligfeltTable';
import cover from '../../../public/byggefelt/tomt/flyover_cover_1_50s.png';
import Link from 'next/link';
import {
  ArrowRightIcon,
  ChevronRightIcon,
  ListBulletIcon,
} from '@heroicons/react/24/outline';

export default function Boligfelt() {
  const utforskJsonLd = {
    __html: `{
"@context": "https://schema.org",
"@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Forsiden",
    "item": "https://heggliaboligfelt.no"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Utforsk boligfeltet",
    "item": "https://heggliaboligfelt.no/utforsk"
  }]
}
  `,
  };

  return (
    <div className="relative isolate w-full">
      <section className="sr-only">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={utforskJsonLd}
          key="product-jsonld"
        />
      </section>
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
              <Link href={`/utforsk`} className="truncate font-bold">
                Utforsk boligfeltet
              </Link>
            </li>
          </ol>
        </nav>
      </div>

      <div className="relative isolate flex w-full flex-col items-center gap-5 ">
        <div className="absolute z-0 h-full w-full bg-topology-pattern bg-repeat opacity-10" />

        <div className="flex min-w-72 flex-col items-center justify-center gap-3 text-center">
          <h1 className="z-10 mt-5 flex animate-fadeIn gap-5 px-3 text-4xl font-bold text-white">
            Utforsk Boligfeltet
          </h1>
        </div>
        <div className="w-full">
          <div className="flex flex-col items-center justify-center gap-1.5 text-center text-white">
            <ArrowUpIcon className="h-5 w-5" />
            <span className="text-sm font-semibold">Retning Nordover</span>
          </div>
        </div>
        <div className="relative z-[1] flex animate-float place-items-center pb-5">
          <BoligfeltChart />
        </div>

        <div className="z-10 flex w-full justify-end">
          <a
            href="https://maps.app.goo.gl/ZjPcx9e3bLakYwgbA?g_st=ic"
            target="_blank"
            rel="noopener noreferrer">
            <span className="flex items-center gap-1.5 px-3 pb-1 text-xs text-slate-400 hover:underline">
              <ArrowTopRightOnSquareIcon className="h-3 w-3" />
              Vis i Google Street View
            </span>
          </a>
        </div>
      </div>

      <section className="flex w-full flex-col gap-1.5 bg-teal-900 px-5 py-10">
        <div className="flex w-full items-center justify-center">
          <h2 className="flex items-center gap-1.5 text-3xl font-bold">
            Prisoversikt
          </h2>
        </div>
        <BoligfeltTable />
        <div className="mt-3 flex w-full items-center justify-center">
          <Link
            href="/tomter"
            className="flex items-center gap-5 rounded-md  bg-teal-700 px-5 py-2 text-white transition-colors hover:bg-teal-600 focus:outline-teal-500 focus:ring-teal-600">
            <ListBulletIcon className="h-5 w-5" />
            <span className=" flex items-center gap-3  font-bold">
              Informasjon om tomtene <ArrowRightIcon className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>
      <Image
        placeholder="blur"
        priority
        src={cover}
        alt="Hegglia Boligfelt Dronebilde"
        className="flex max-h-72 w-full flex-grow bg-cover bg-no-repeat object-cover"
      />
      <section className="flex w-full flex-col gap-5  bg-slate-50 px-5 py-10 text-slate-800">
        <div>
          <h2 className="flex items-center gap-1.5 text-3xl font-bold text-slate-800">
            Dokumenter
          </h2>
          <p className="text-sm text-slate-800">
            Vi har samlet relevante dokumenter for utbyggingen av Hegglia
            Boligfelt.
          </p>
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          {documents.map((house) => (
            <a
              id={house.anchor}
              title={`Lenke til ${house.name} `}
              href={house.url}
              target="_blank"
              rel="noopener noreferrer"
              key={house.id}
              className="group flex flex-col rounded-md border border-slate-300 bg-white shadow-md transition-shadow hover:shadow-lg focus:shadow-[0_0_0_2px] focus:shadow-teal-400 focus:outline-none sm:flex-row sm:gap-5">
              <Image
                className="flex max-h-56 w-full rounded-t-md object-cover shadow-inner shadow-slate-700 brightness-75 sm:w-48 sm:rounded-l-md sm:rounded-t-none md:max-h-full lg:h-full lg:max-w-72"
                src={house.image}
                alt={house.name}
                width={150}
                height={150}
              />
              <div className="flex flex-grow flex-col gap-3 px-3 py-5">
                <h3 className="flex items-center gap-1.5 font-bold underline-offset-2 group-hover:underline sm:text-xl">
                  {house.name}{' '}
                </h3>
                <div className="flex flex-col gap-3 text-xs sm:text-sm">
                  <div>
                    <p className="text-balance">{house.description}</p>
                  </div>
                </div>
                <div className="flex flex-grow items-end justify-end ">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    Kilde: <span>skaun.kommune.no</span>
                    <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
