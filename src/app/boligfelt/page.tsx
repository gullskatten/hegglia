import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import documents from '../_data/boligfelt';
import BoligfeltChart from './BoligfeltChart';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import BoligfeltTable from './BoligfeltTable';

export default function Boligfelt() {
  return (
    <div className="w-full">
      <div className="relative isolate flex w-full flex-col items-center gap-10 ">
        <div className="bg-topology-pattern absolute z-0 h-full w-full bg-repeat opacity-10" />

        <div className="flex min-w-72 flex-col items-center justify-center gap-3 text-center">
          <h1 className="flex animate-fadeIn gap-5 px-3 text-4xl font-bold text-white">
            Utforsk Boligfeltet
          </h1>
          <div className="flex w-full items-center justify-center rounded-sm bg-teal-900 py-0.5 text-sm">
            <p className="flex items-center gap-1.5 ">
              Klikk på tomtene for mer informasjon
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col items-center justify-center gap-1.5 text-center">
            <ArrowUpIcon className="h-5 w-5" />
            <span className="text-sm font-semibold">Retning Nordover</span>
          </div>
        </div>
        <div className="animate-float relative z-[1] flex place-items-center pb-12">
          <BoligfeltChart />
        </div>
      </div>
      <div className="flex w-full justify-end ">
        <a
          href="https://maps.app.goo.gl/nuC3QyZiLDQxjABbA"
          target="_blank"
          rel="noopener noreferrer">
          <span className="flex items-center gap-1.5 px-3 pb-1 text-xs text-slate-400 hover:underline">
            <ArrowTopRightOnSquareIcon className="h-3 w-3" />
            Åpne i Google Maps
          </span>
        </a>
      </div>
      <section className="flex w-full flex-col gap-5 rounded-t-md bg-teal-900 py-1 text-slate-800">
        <BoligfeltTable />
      </section>
      <section className="flex w-full flex-col gap-5 rounded-t-md bg-slate-50 px-5 py-10 text-slate-800">
        <div>
          <h2 className="flex items-center gap-1.5 text-3xl font-bold">
            Dokumenter
          </h2>
          <p className="text-sm ">
            Vi har samlet relevante dokumenter for utbyggingen av Hegglia
            Boligfelt.
          </p>
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          {documents.map((house) => (
            <a
              title={`Lenke til ${house.name} `}
              href={house.url}
              target="_blank"
              rel="noopener noreferrer"
              key={house.id}
              className="group flex flex-col rounded-md border border-slate-200 bg-white shadow-md transition-shadow hover:shadow-lg sm:flex-row sm:gap-5">
              <Image
                className="flex max-h-56 w-full rounded-t-md object-cover shadow-inner shadow-black brightness-75 sm:w-48 sm:rounded-l-md sm:rounded-t-none md:max-h-full lg:h-full lg:max-w-72"
                src={house.image}
                alt={house.name}
                width={150}
                height={150}
              />
              <div className="flex flex-grow flex-col gap-3 p-3">
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
                    Kilde:{' '}
                    <a
                      href="https://skaun.kommune.no"
                      target="_blank"
                      rel="noopener noreferrer">
                      skaun.kommune.no
                    </a>
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
