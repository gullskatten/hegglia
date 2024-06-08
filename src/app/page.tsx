import { ArrowRightIcon } from '@heroicons/react/20/solid';
import {
  ArrowTopRightOnSquareIcon,
  ArrowTrendingUpIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  CameraIcon,
  FaceSmileIcon,
  HomeModernIcon,
  MapIcon,
  MapPinIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import { Merriweather } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import houses from './_data/houses';
import cover from '../../public/byggefelt/tomt/flyover_cover_3_50s.png';
import cover2 from '../../public/byggefelt/tomt/flyover_cover_5_50s.png';
import cover3 from '../../public/byggefelt/tomt/flyover_2_50s.png';
import tiny1 from '../../public/byggefelt/tomt/c_4_25s.png';
import tiny2 from '../../public/byggefelt/tomt/c_1_25s.png';
import tiny3 from '../../public/byggefelt/tomt/flyover_3_25s.png';
import tiny4 from '../../public/byggefelt/tomt/flyover_5_25s.png';
import tiny5 from '../../public/byggefelt/tomt/flyover_8_25s.png';
import eokBrand from '../../public/byggefelt/eok.jpg';
import eokWorkers from '../../public/byggefelt/eok-workers.jpg';

const merriweather = Merriweather({ weight: '700', subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <div className="relative flex w-full flex-col items-center gap-10 bg-black/20">
        <Image
          placeholder="blur"
          priority
          src={cover}
          alt="Hegglia Boligfelt"
          className="absolute -z-10 flex h-full w-full flex-grow bg-cover bg-no-repeat object-cover shadow-lg brightness-90"
        />

        <div className="relative z-[1] flex select-none place-items-center pb-12 pt-24 before:absolute before:h-[500px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-cont-400 before:to-white before:opacity-10 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[200px] after:w-full after:bg-gradient-radial after:from-cont-400 after:via-amber-800 after:to-amber-800  after:opacity-40 after:blur-2xl after:content-['']">
          <Image
            className="relative max-w-64 animate-fadeIn select-none sm:max-w-80"
            src="/hegglia-brand-icon-white.svg"
            alt="Hegglia Boligfelt Logo"
            width={350}
            height={350}
            priority
          />
        </div>
        <div className="flex min-w-72 flex-col items-center justify-center gap-8 text-center">
          <div className="flex flex-col items-center md:gap-3">
            <p className="flex font-medium opacity-60 sm:text-lg md:text-4xl">
              Velkommen til
            </p>
            <h1 className="flex animate-fadeIn gap-5 px-3 text-6xl font-bold text-white md:text-8xl">
              Hegglia Boligfelt
            </h1>
            <p className="mt-3 flex items-center gap-1.5 rounded-md bg-black/40 px-3 py-1 opacity-95">
              <MapPinIcon className="h-4 w-4 text-red-400" /> Kråksetdalen 20,
              7357 Skaun
            </p>
          </div>
          <h3
            className={`${merriweather.className} text-pretty px-3 text-center text-lg sm:max-w-[500px]`}>
            Begynn din boligdrøm med nærhet til en fantastisk natur.
          </h3>
        </div>
        <div className="translate-y-[50%]">
          <Link
            href="/utforsk"
            className="flex items-center gap-5 rounded-md  bg-teal-700 px-5 py-2 text-white transition-colors hover:bg-teal-600 focus:outline-teal-500 focus:ring-teal-600">
            <MapIcon className="h-6 w-6" />
            <span className=" flex items-center gap-3 text-xl font-bold">
              Utforsk boligfeltet <ArrowRightIcon className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </div>
      <section className="flex w-full items-center justify-center bg-teal-950 px-5 py-16">
        <div className="grid max-w-lg animate-enterFromRight items-center gap-y-10 sm:w-full sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8">
          <div className="flex w-full">
            <div className="flex w-full gap-5 sm:gap-3">
              <HomeModernIcon className="h-12 w-12 text-teal-100" />
              <div className="flex flex-col  sm:text-start ">
                <h3 className="text-xl font-bold">
                  10 ledige tomter<span className="text-teal-500">*</span>
                </h3>
                <p className="text-sm opacity-70">Tomter fra 800-1300 m²</p>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex w-full gap-5 sm:gap-3">
              <svg
                className="h-12 w-12"
                width="24px"
                height="24px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#ffffff">
                <path
                  d="M4 10L20 10"
                  stroke="#ffffff85"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M7 14L8 14"
                  className="stroke-teal-400"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M16 14L17 14"
                  className="stroke-teal-400"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M3 18V11.4105C3 11.1397 3.05502 10.8716 3.16171 10.6227L5.4805 5.21216C5.79566 4.47679 6.51874 4 7.31879 4H16.6812C17.4813 4 18.2043 4.47679 18.5195 5.21216L20.8383 10.6227C20.945 10.8716 21 11.1397 21 11.4105V18M3 18V20.4C3 20.7314 3.26863 21 3.6 21H6.4C6.73137 21 7 20.7314 7 20.4V18M3 18H7M21 18V20.4C21 20.7314 20.7314 21 20.4 21H17.6C17.2686 21 17 20.7314 17 20.4V18M21 18H17M7 18H17"
                  stroke="currentColor"></path>
              </svg>
              <div className="flex flex-col  sm:text-start ">
                <h3 className="text-xl font-bold">ca. 30 min</h3>
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
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
                className="h-12 w-12"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <title>abc-icon</title>
                <g
                  id="abc-icon"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd">
                  <g
                    id="A"
                    transform="translate(2.2386, 9.7273)"
                    className="text-teal-300"
                    fill="currentColor"
                    fillRule="nonzero">
                    <path
                      d="M1.64767179,7.27272727 L0,7.27272727 L2.50854492,0 L4.49141069,0 L6.99995561,7.27272727 L5.35228382,7.27272727 L3.5283869,1.66193182 L3.47156871,1.66193182 L1.64767179,7.27272727 Z M1.54541016,4.41478382 L5.43745561,4.41478382 L5.43745561,5.61362527 L1.54541016,5.61362527 L1.54541016,4.41478382 Z"
                      id="Shape"></path>
                  </g>
                  <g
                    id="B"
                    transform="translate(9.6335, 2.7273)"
                    className="text-red-300"
                    fill="currentColor"
                    fillRule="nonzero">
                    <path
                      d="M0,7.27272727 L0,0 L2.90904652,0 C3.4440844,0 3.89070453,0.0795491536 4.24890692,0.238647461 C4.6071093,0.397745768 4.87628359,0.617444587 5.05642978,0.897743919 C5.23657596,1.17804325 5.32664906,1.5 5.32664906,1.86362527 C5.32664906,2.14915882 5.26947946,2.39869089 5.15514027,2.61222146 C5.04080108,2.82575203 4.8846713,3.00058076 4.68675093,3.13670765 C4.48883057,3.27283455 4.26369407,3.36930708 4.01134144,3.42612527 L4.01134144,3.49714799 C4.2878492,3.50994688 4.54778498,3.58843254 4.79114879,3.73260498 C5.03451261,3.87677742 5.23195209,4.07823967 5.38346724,4.33699174 C5.53498239,4.59574382 5.61073997,4.90482215 5.61073997,5.26422674 C5.61073997,5.64867424 5.51545114,5.99218195 5.32487349,6.29474987 C5.13429584,6.59731778 4.85316421,6.835956 4.4814786,7.01066451 C4.109793,7.18537302 3.65099358,7.27272727 3.10508034,7.27272727 L0,7.27272727 Z M1.53692072,6.01423784 L2.78975053,6.01423784 C3.2187352,6.01423784 3.53147565,5.93220104 3.72797186,5.76812744 C3.92446807,5.60405384 4.02271618,5.38494688 4.02271618,5.11080655 C4.02271618,4.91005637 3.97418398,4.73225911 3.87711958,4.57741477 C3.78005519,4.42257043 3.64215273,4.30135091 3.4634122,4.21375621 C3.28467167,4.12616152 3.07147402,4.08236417 2.82381925,4.08236417 L1.53692072,4.08236417 L1.53692072,6.01423784 Z M1.53692072,3.04260254 L2.67611417,3.04260254 C2.88589015,3.04260254 3.07339755,3.00543583 3.23863636,2.93110241 C3.40387518,2.85676898 3.53420373,2.75082675 3.62962203,2.6132757 C3.72504032,2.47572465 3.77274947,2.31106845 3.77274947,2.11930708 C3.77274947,1.85652299 3.67993904,1.6445183 3.49431818,1.48329301 C3.30869732,1.32206772 3.04543235,1.24145508 2.70452326,1.24145508 L1.53692072,1.24145508 L1.53692072,3.04260254 Z"
                      id="Shape"></path>
                  </g>
                  <g
                    id="C"
                    transform="translate(13.5028, 11.6278)"
                    className="text-sky-300"
                    fill="currentColor"
                    fillRule="nonzero">
                    <path
                      d="M6.54546564,2.64487527 L4.99151056,2.64487527 C4.96213971,2.44412509 4.90354596,2.26491292 4.81572931,2.10723877 C4.72791267,1.94956462 4.61570046,1.81497285 4.47909268,1.70346347 C4.34248491,1.59195409 4.18493097,1.50695801 4.00643089,1.44847523 C3.8279308,1.38999245 3.63355232,1.36075107 3.42329545,1.36075107 C3.04831765,1.36075107 2.7210305,1.45356149 2.44143399,1.63918235 C2.16183749,1.82480321 1.94497773,2.09445838 1.79085471,2.44814786 C1.6367317,2.80183734 1.55967019,3.23105321 1.55967019,3.73579545 C1.55967019,4.25474225 1.63743453,4.69070897 1.7929632,5.04369562 C1.94849188,5.39668228 2.16570305,5.66278631 2.44459672,5.84200772 C2.7234904,6.02122914 3.0468935,6.11083984 3.41480602,6.11083984 C3.62077193,6.11083984 3.81158077,6.08372544 3.98723256,6.02949663 C4.16288434,5.97526781 4.31937478,5.89559844 4.45670388,5.7904885 C4.59403298,5.68537857 4.70874208,5.5569458 4.80083119,5.40519021 C4.89292029,5.25343461 4.95648008,5.08049242 4.99151056,4.88636364 L6.54546564,4.89490856 C6.50473855,5.22823449 6.40459465,5.54913145 6.24503396,5.85759943 C6.08547326,6.16606741 5.87158203,6.44187234 5.60336026,6.6850142 C5.33513849,6.92815607 5.01565644,7.12003766 4.64491411,7.26065896 C4.27417177,7.40128026 3.85560932,7.47159091 3.38922674,7.47159091 C2.7405525,7.47159091 2.16088497,7.32505105 1.65022417,7.03197132 C1.13956336,6.7388916 0.736860795,6.31369851 0.442116477,5.75639205 C0.147372159,5.19908558 0,4.52555339 0,3.73579545 C0,2.94318922 0.149147727,2.26859353 0.447443182,1.71200839 C0.745738636,1.15542325 1.15056818,0.730942235 1.66193182,0.438565341 C2.17329545,0.146188447 2.74906043,0 3.38922674,0 C3.81155303,0 4.2031213,0.0589451645 4.56393155,0.176835494 C4.9247418,0.294725823 5.24458452,0.466715495 5.52345969,0.69280451 C5.80233487,0.918893525 6.03007923,1.19553075 6.20669278,1.52271618 C6.38330633,1.8499016 6.49623062,2.22395463 6.54546564,2.64487527 Z"
                      id="Path"></path>
                  </g>
                </g>
              </svg>
              <div className="flex flex-col ">
                <h3 className="text-xl font-bold">700 meter</h3>
                <p className="text-sm opacity-70">Til nærmeste barnehage</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h4
          className={`${merriweather.className} text-pretty pb-3 text-center text-xs opacity-70 sm:text-sm`}>
          <span className="text-teal-500">*</span> Boligtomtene har ingen
          byggeklausul utover{' '}
          <Link
            href={'/utforsk#reguleringsbestemmelser'}
            className="underline underline-offset-2">
            reguleringsbestemmelsen
          </Link>
          .
        </h4>
      </section>

      <section className="flex w-full flex-col items-center gap-8 rounded-t-lg bg-teal-900 px-5 py-10 sm:rounded-t-none">
        <div className="flex w-full max-w-7xl flex-col gap-8 sm:w-full sm:items-center">
          <h2 className="text-start text-3xl font-bold text-white">
            Hvorfor Hegglia?
          </h2>
          <div className="flex w-full flex-col gap-5 md:flex-row">
            <div className="flex w-full basis-1/3 items-start gap-5">
              <div className="flex items-start rounded-md bg-white/10 p-3">
                <svg
                  className="h-12 w-12"
                  width="24px"
                  height="24px"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#ffffff">
                  <path
                    d="M18 10L15 11.5L11 8.5L10 14L13.5 17L14 21.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                  <path
                    d="M18 8.5V10V21.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                  <path
                    d="M10 17L8 21.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                  <path
                    d="M8.5 8.5C7 9.5 6 12 6 12L8 13"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                  <path
                    d="M12 6.5C13.1046 6.5 14 5.60457 14 4.5C14 3.39543 13.1046 2.5 12 2.5C10.8954 2.5 10 3.39543 10 4.5C10 5.60457 10.8954 6.5 12 6.5Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">Naturnært</h3>
                <p className="text-balance text-sm opacity-70">
                  Få fordelene av å bo i et naturnært område, men likevel ha
                  kort vei til nærmeste sentrum.
                </p>
              </div>
            </div>
            <div className="flex w-full basis-1/3 items-start gap-5">
              <div className="flex items-start rounded-md bg-white/10 p-3">
                <SunIcon className="h-12 w-12 text-amber-200" />
              </div>
              <div className="flex flex-col ">
                <h3 className="text-xl font-bold ">Flott utsikt</h3>
                <p className="text-balance text-sm opacity-70">
                  Boligområdet skråner slakt oppover, noe som vil gi boligene
                  flotte sol- og utsiktsforhold.
                </p>
              </div>
            </div>
            <div className="flex w-full basis-1/3 items-start gap-5">
              <div className="flex items-start rounded-md bg-white/10 p-3">
                <FaceSmileIcon className="h-12 w-12 text-green-200" />
              </div>
              <div className="flex flex-col ">
                <h3 className="text-xl font-bold">Familievennlig</h3>
                <p className="text-balance text-sm opacity-70">
                  Jåren-Råbygda barnehage ligger i gangavstand fra boligfeltet,
                  og det samme gjør et mylder av turstier. Det er også gode
                  bademuligheter i Litlslemsjøen.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid max-w-7xl grid-flow-dense grid-rows-3 gap-2">
          <Image
            placeholder="blur"
            priority
            src={tiny1}
            alt="Hegglia Boligfelt Dronebilde"
            className="col-span-1 col-start-1 row-span-1 row-start-1 h-full rounded-md bg-cover bg-no-repeat object-cover shadow-lg"
          />
          <Image
            placeholder="blur"
            priority
            src={tiny2}
            alt="Hegglia Boligfelt Dronebilde"
            className="col-span-1 col-start-2 row-span-1 row-start-1 h-full rounded-md  bg-cover bg-no-repeat object-cover shadow-lg"
          />
          <Image
            placeholder="blur"
            priority
            src={tiny3}
            alt="Hegglia Boligfelt Dronebilde"
            className="col-span-1 col-start-3 row-span-1 row-start-1 h-full rounded-md  bg-cover bg-no-repeat object-cover shadow-lg"
          />
          <Image
            placeholder="blur"
            priority
            src={tiny4}
            alt="Hegglia Boligfelt Dronebilde"
            className="col-span-1 col-start-1 row-span-1 row-start-2 h-full rounded-md bg-cover bg-no-repeat object-cover shadow-lg"
          />
          <Image
            placeholder="blur"
            priority
            src={cover3}
            alt="Hegglia Boligfelt Dronebilde"
            className="col-span-2 col-start-2 row-span-2 row-start-2 h-full rounded-md bg-cover bg-no-repeat object-cover shadow-lg"
          />
          <Image
            placeholder="blur"
            priority
            src={tiny5}
            alt="Hegglia Boligfelt Dronebilde"
            className="col-span-1 col-start-1 row-span-1 row-start-3 h-full rounded-md bg-cover bg-no-repeat object-cover shadow-lg"
          />
        </div>
        <div className="flex w-full max-w-7xl items-center justify-center lg:justify-end">
          <Link
            href="/galleri"
            className="flex items-center gap-5 rounded-md  bg-teal-700 px-5 py-2 text-white transition-colors hover:bg-teal-600 focus:outline-teal-500 focus:ring-teal-600">
            <CameraIcon className="h-6 w-6" />
            <span className=" flex items-center gap-3 text-xl font-bold">
              Gå til bildegalleriet <ArrowRightIcon className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </section>

      <section className="flex w-full flex-col gap-5 bg-slate-50 px-5 py-10 text-slate-800">
        <div>
          <h2 className="flex items-center gap-1.5 text-3xl font-bold">
            Trenger du inspirasjon?
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
              className="group flex flex-col rounded-md bg-white shadow-md transition-shadow hover:shadow-lg focus:shadow-[0_0_0_2px] focus:shadow-teal-600 focus:outline-none sm:flex-row sm:gap-5">
              <Image
                className="flex max-h-56 w-full rounded-t-md object-cover sm:w-48 sm:rounded-l-md sm:rounded-tr-none md:max-h-full lg:h-full lg:max-w-72"
                src={house.image}
                alt={house.name}
                width={150}
                height={150}
              />
              <div className="flex flex-grow flex-col p-3">
                <h3 className="flex items-center gap-1.5 font-bold underline-offset-2 group-hover:underline sm:text-xl">
                  {house.name}{' '}
                </h3>
                <div className="flex flex-col gap-3 text-xs sm:text-sm">
                  <div>
                    <p className="text-balance">{house.description}</p>
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
                <div className="flex flex-grow items-end justify-end ">
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    Vis på idéhus sine sider{' '}
                    <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                  </span>
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
      <section className="grid w-full grid-flow-col-dense items-center gap-0 bg-white ">
        <div className="hidden h-96 bg-white sm:flex sm:w-60 md:w-80">
          <Image
            className="flex h-full w-full object-cover object-top"
            src={eokWorkers}
            height={345}
            width={600}
            alt="EOK Bygg står klare til å hjelpe deg med alt fra planlegging til selve byggeprosessen"
          />
        </div>

        <div className="flex flex-col gap-10 bg-white px-5 py-10 text-slate-800">
          <div className="flex flex-col items-center gap-10">
            <div className="flex items-center text-center">
              <h3 className="flex max-w-[950px] items-center gap-1.5 text-pretty text-2xl font-bold">
                <span>
                  Ønsker du hjelp med alt fra{' '}
                  <span className="text-teal-600">planlegging</span>,{' '}
                  <span className="text-teal-600">byggesak</span> eller selve
                  byggeprosessen?{' '}
                  <span className="text-red-600">EOK Bygg AS</span> kan bistå
                  med dette.
                </span>
              </h3>
            </div>

            <a
              href={`mailto:post@eokbygg.com`}
              className={`text-medium rounded-md border-2 border-teal-800 bg-white px-3 py-1.5 font-bold text-teal-800  shadow-slate-100 transition-colors hover:border-teal-500 hover:text-teal-700 focus:shadow-[0_0_0_2px] focus:shadow-teal-500 focus:outline-none`}>
              Kontakt oss på post@eokbygg.com
            </a>
          </div>
          <div className="flex w-full justify-end">
            <Image src={eokBrand} alt="EOK Bygg AS Logo" className="w-24" />
          </div>
        </div>
      </section>
      <Image
        placeholder="blur"
        priority
        src={cover2}
        alt="Hegglia Boligfelt Dronebilde"
        className="flex max-h-72 w-full flex-grow bg-cover bg-no-repeat object-cover shadow-lg"
      />
      <section className="flex w-full flex-col items-center gap-8 rounded-t-lg bg-teal-900 px-5 py-10 sm:rounded-t-none">
        <div className="flex w-full max-w-lg flex-col gap-8">
          <h2 className="col-span-2 text-start text-3xl font-bold text-white">
            Hvorfor bosette seg i Skaun kommune?
          </h2>
          <div className="flex w-full items-start gap-5 ">
            <div className="flex items-start rounded-md bg-white/10 p-3">
              <ArrowTrendingUpIcon className="h-12 w-12 text-teal-200" />
            </div>
            <div className="flex flex-col ">
              <h3 className="text-xl font-bold">
                <span className="text-green-400">Høy</span> befolkningsvekst
              </h3>
              <p className="text-balance text-sm opacity-70">
                Skaun kommune er nevnt som en av kommunene i Trøndelag med
                høyest ventet befolkningsvekst frem mot år 2050 (
                <a
                  href="https://www.ssb.no/befolkning/befolkningsframskrivinger/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline">
                  SSB - befolkningsframskrivinger
                </a>
                ). Dette betyr at det vil bli stor etterspørsel etter nye
                boliger i årene som kommer.
              </p>
            </div>
          </div>
          <div className="flex w-full items-start gap-5 ">
            <div className="flex items-start rounded-md bg-white/10 p-3">
              <BuildingOffice2Icon className="h-12 w-12 text-teal-200" />
            </div>
            <div className="flex flex-col ">
              <h3 className="text-xl font-bold">Utviklingsplaner</h3>
              <p className="text-balance text-sm opacity-70 ">
                Skaun kommune har flere planlagte og pågående
                utviklingsprosjekter. Blant annet nytt barne- og oppvekstsenter
                på Venn. Du kan lese mer om utviklingsplanene på Skaun kommune{' '}
                <a
                  href="https://www.skaun.kommune.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline">
                  sine sider
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
