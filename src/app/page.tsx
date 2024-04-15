import { ArrowRightIcon } from '@heroicons/react/20/solid';
import {
  ArrowRightEndOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ArrowTrendingUpIcon,
  ArrowUpOnSquareIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  HomeIcon,
  HomeModernIcon,
  MapIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { Merriweather } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import houses from './_data/houses';
import { StarIcon } from '@heroicons/react/24/outline';

const merriweather = Merriweather({ weight: '700', subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <div className="relative flex w-full flex-col items-center gap-10 bg-black/20">
        <div className="absolute -z-10 flex h-full w-full flex-grow bg-norway-flyover bg-cover bg-no-repeat shadow-lg blur-sm" />
        <div className="relative z-[1] flex select-none place-items-center   pb-12 pt-24 before:absolute before:h-[500px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-cont-400 before:to-white before:opacity-10 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[200px] after:w-full after:bg-gradient-radial after:from-cont-400 after:via-amber-800 after:to-amber-800  after:opacity-40 after:blur-2xl after:content-['']">
          <Image
            className="relative max-w-72 animate-fadeIn select-none sm:max-w-80"
            src="/hegglia-brand-icon-white.svg"
            alt="Hegglia Boligfelt Logo"
            width={350}
            height={350}
            priority
          />
        </div>
        <div className="flex min-w-72 flex-col items-center justify-center gap-8 text-center">
          <div className="flex flex-col items-center">
            <p className="flex font-medium opacity-60 sm:text-lg xl:hidden">
              Velkommen til
            </p>
            <h1 className="flex animate-fadeIn gap-5 text-6xl font-bold text-white sm:text-8xl">
              <span className="hidden text-center xl:flex">Velkommen til</span>
              Hegglia
            </h1>
          </div>
          <h3
            className={`${merriweather.className} text-pretty px-3 text-center text-lg sm:max-w-[500px]`}>
            Begynn din boligdrøm med nærhet til en fantastisk natur.
          </h3>
        </div>
        <div className="translate-y-[50%]">
          <Link
            href="/boligfelt"
            className="flex items-center gap-5 rounded-md  bg-teal-700 px-5 py-2 text-white transition-colors hover:bg-teal-600 focus:outline-teal-500 focus:ring-teal-600">
            <MapIcon className="h-6 w-6" />
            <span className=" flex items-center gap-3 text-xl font-bold">
              Utforsk boligfeltet <ArrowRightIcon className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </div>
      <section className="flex w-full items-center justify-center bg-teal-950 px-5 py-16">
        <div className="animate-enterFromRight grid max-w-lg items-center gap-y-10 sm:w-full sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8">
          <div className="flex w-full">
            <div className="flex w-full gap-5 sm:gap-3">
              <HomeModernIcon className="h-12 w-12 text-teal-100" />
              <div className="flex flex-col  sm:text-start ">
                <h3 className="text-xl font-bold">14 ledige tomter</h3>
                <p className="text-sm opacity-70">Tomter fra 520-1000m²</p>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex w-full gap-5 sm:gap-3">
              <svg
                className="h-12 w-12"
                width="24px"
                height="24px"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#ffffff">
                <path
                  d="M4 10L20 10"
                  stroke="#ffffff85"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
                <path
                  d="M7 14L8 14"
                  className="stroke-teal-400"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
                <path
                  d="M16 14L17 14"
                  className="stroke-teal-400"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
                <path
                  d="M3 18V11.4105C3 11.1397 3.05502 10.8716 3.16171 10.6227L5.4805 5.21216C5.79566 4.47679 6.51874 4 7.31879 4H16.6812C17.4813 4 18.2043 4.47679 18.5195 5.21216L20.8383 10.6227C20.945 10.8716 21 11.1397 21 11.4105V18M3 18V20.4C3 20.7314 3.26863 21 3.6 21H6.4C6.73137 21 7 20.7314 7 20.4V18M3 18H7M21 18V20.4C21 20.7314 20.7314 21 20.4 21H17.6C17.2686 21 17 20.7314 17 20.4V18M21 18H17M7 18H17"
                  stroke="currentColor"></path>
              </svg>
              <div className="flex flex-col  sm:text-start ">
                <h3 className="text-xl font-bold">20 min</h3>
                <p className="text-sm opacity-70">Til Trondheim Sentrum</p>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex w-full gap-5 sm:gap-3">
              <BuildingStorefrontIcon className="h-12 w-12" />
              <div className="flex flex-col ">
                <h3 className="text-xl font-bold">12 km</h3>
                <p className="text-sm opacity-70">Til Børsa Sentrum</p>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex w-full gap-5 sm:gap-3">
              <BuildingLibraryIcon className="h-12 w-12" />
              <div className="flex flex-col ">
                <h3 className="text-xl font-bold">6 km</h3>
                <p className="text-sm opacity-70">Til Venn barneskole</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-8 rounded-t-lg bg-teal-900 px-5 py-10 sm:rounded-t-none">
        <div className="flex w-full max-w-lg flex-col gap-5">
          <h2 className="col-span-2 text-start text-3xl font-bold text-white">
            Hvorfor Hegglia?
          </h2>
          <div className="flex w-full items-start gap-5 ">
            <div className="flex items-start rounded-md bg-white/10 p-3">
              <svg
                className="h-12 w-12"
                width="24px"
                height="24px"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#ffffff">
                <path
                  d="M18 10L15 11.5L11 8.5L10 14L13.5 17L14 21.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
                <path
                  d="M18 8.5V10V21.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
                <path
                  d="M10 17L8 21.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
                <path
                  d="M8.5 8.5C7 9.5 6 12 6 12L8 13"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
                <path
                  d="M12 6.5C13.1046 6.5 14 5.60457 14 4.5C14 3.39543 13.1046 2.5 12 2.5C10.8954 2.5 10 3.39543 10 4.5C10 5.60457 10.8954 6.5 12 6.5Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </svg>
            </div>
            <div className="flex flex-col ">
              <h3 className="text-xl font-bold">Naturnært og barnevennlig</h3>
              <p className="text-sm opacity-70">
                Få fordelene av å bo i et naturnært område, men likevel ha kort
                vei til nærmeste sentrum.
              </p>
            </div>
          </div>
          <div className="flex w-full items-start gap-5 ">
            <div className="flex items-start rounded-md bg-white/10 p-3">
              <ArrowTrendingUpIcon className="h-12 w-12 text-teal-200" />
            </div>
            <div className="flex flex-col ">
              <h3 className="text-xl font-bold">
                <span className="text-green-400">226%</span> befolkningsvekst
              </h3>
              <p className="text-sm opacity-70">
                Det har vært en befolkningsvekst i Skaun kommune på 226% de
                siste 3 årene. Dette gjør at det er stor etterspørsel etter nye
                boliger.
              </p>
            </div>
          </div>
          <div className="flex w-full items-start gap-5 ">
            <div className="flex items-start rounded-md bg-white/10 p-3">
              <BuildingOffice2Icon className="h-12 w-12 text-teal-200" />
            </div>
            <div className="flex flex-col ">
              <h3 className="text-xl font-bold">Ny infrastruktur</h3>
              <p className="text-sm opacity-70">
                Skaun kommune skal bygges ut til å støtte et stadig tilfang av
                innflyttere til kommunen.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col gap-5 bg-slate-50 px-5 py-10 text-slate-800">
        <div>
          <h2 className="flex items-center gap-1.5 text-3xl font-bold">
            Ditt nye hjem?
          </h2>
          <p className="text-sm opacity-70">
            Idéhus har flere husmodeller som kan tilpasses dine behov.
          </p>
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          {houses.map((house) => (
            <a
              title={`Se huset ${house.name} på idehus.no`}
              href={house.url}
              target="_blank"
              rel="noopener noreferrer"
              key={house.id}
              className="group flex flex-col rounded-md bg-white shadow-md transition-shadow hover:shadow-lg md:flex-row md:gap-5">
              <Image
                className="max-h-56 w-full rounded-t-md object-cover md:rounded-l-md md:rounded-t-none lg:h-full lg:max-w-72"
                src={house.image}
                alt={house.name}
                width={150}
                height={150}
              />
              <div className="flex flex-col p-3">
                <h3 className="flex items-center gap-1.5 font-bold underline-offset-2 group-hover:underline sm:text-xl">
                  {house.name}{' '}
                </h3>
                <div className="flex flex-col gap-3 text-xs sm:text-sm">
                  <div className="">
                    <p>{house.description}</p>
                  </div>
                  <div className="opacity-70">
                    <p>{house.bra}m² bruksareal</p>
                    <p>{house.bathrooms} bad</p>
                    <p>{house.bedrooms} soverom</p>
                    <p>
                      {house.floors} etasje{house.floors != 1 ? 'r' : ''}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <ArrowTopRightOnSquareIcon className="h-3 w-3 text-slate-400 sm:h-4 sm:w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-end gap-1.5 text-xs">
          <a href="https://idehus.no" target="_blank" rel="noopener noreferrer">
            <Image
              className="relative w-16 animate-fadeIn select-none"
              src="/idehus/idehus.png"
              alt="Idehus Logo"
              width={150}
              height={150}
            />
          </a>
          <p className="flex items-center gap-1">
            Få flere husidéer på{' '}
            <a
              href="https://idehus.no"
              className="font-medium underline underline-offset-2">
              https://idehus.no
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
