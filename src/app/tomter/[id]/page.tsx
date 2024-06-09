import { InformationCircleIcon } from '@heroicons/react/20/solid';
import { boligfeltData } from '../../_data/boligfelt';
import Carousel from './Carousel';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import type { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const matchingTomt = boligfeltData.find((item) => item.id === id);

  if (matchingTomt == null) {
    return {
      title: 'Tomtene på boligfeltet | Hegglia Boligfelt',
      description:
        'På denne siden finner du en oversikt over tomtene på boligfeltet.',
      keywords: ['hegglia', 'boligfelt', 'tomt', 'skaun', 'trondheim'],
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

  return {
    title: `${matchingTomt?.name} - ${matchingTomt?.kvm} m² (${matchingTomt?.available ? 'Til salgs' : 'Solgt!'}) | Hegglia Boligfelt`,
    description: matchingTomt?.description,
    openGraph: {
      url: `/tomter/${id}`,
      title: `${matchingTomt?.name} - ${matchingTomt?.kvm} m² (${matchingTomt?.available ? 'Til salgs' : 'Solgt!'}) | Hegglia Boligfelt`,
      description: matchingTomt.description,
      locale: 'no_NO',
      siteName: 'Hegglia Boligfelt',
      countryName: 'Norge',
      determiner: 'auto',
      emails: ['kontakt@heggliaboligfelt.no'],
      images: [
        {
          url: matchingTomt.ogImage.src,
          width: matchingTomt.ogImage.width,
          height: matchingTomt.ogImage.height,
          alt: `${matchingTomt.name}, en av tomtene under oppføring på Hegglia Boligfelt.`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hegglia Boligfelt',
      images: [
        {
          url: matchingTomt.twitter.src,
          width: matchingTomt.twitter.width,
          height: matchingTomt.twitter.height,
          alt: `${matchingTomt.name}, en av tomtene under oppføring på Hegglia Boligfelt.`,
        },
      ],
      description: matchingTomt.description,
    },
  };
}

export default function Page({ params: { id } }: { params: { id: string } }) {
  const tomt = boligfeltData.find((item) => item.id === id);

  if (tomt == null) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 pt-10">
        <h1 className="text-4xl font-bold">Ojsann!</h1>
        <div className="text-center">
          <p>Denne tomten fant vi ikke.</p>
          <p>
            Kanskje du vil prøve{' '}
            <Link
              href="/tomter/1"
              className="font-medium underline underline-offset-2">
              Tomt 1
            </Link>
            ?
          </p>
        </div>
      </div>
    );
  }

  const tomtId = parseInt(id, 10);
  const nextTomt = boligfeltData.find((item) => item.id === `${tomtId + 1}`);
  const prevTomt = boligfeltData.find((item) => item.id === `${tomtId - 1}`);

  const tomtJsonLd = {
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
    "name": "Tomtene på boligfeltet",
    "item": "https://heggliaboligfelt.no/tomter"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": ${tomt.name},
    "item": "https://heggliaboligfelt.no/tomter/${tomt.id}"
  }]
}
  `,
  };

  return (
    <div className=" isolate flex h-full w-full animate-fadeIn flex-col items-center justify-center gap-3">
      <section className="sr-only">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={tomtJsonLd}
          key="product-jsonld"
        />
      </section>
      <div className="sticky top-0 z-10 flex w-full flex-col bg-teal-950">
        <nav>
          <ol className="flex items-center gap-1  bg-teal-900/50  px-5 py-1 text-xs">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 font-medium underline">
                Forsiden <ChevronRightIcon className="h-3 w-3 text-white" />
              </Link>
            </li>
            <li>
              <Link
                href="/tomter"
                className="flex items-center gap-1 truncate font-medium underline">
                Tomtene på boligfeltet
                <ChevronRightIcon className="h-3 w-3 text-white" />
              </Link>
            </li>
            <li className="truncate font-bold">
              <Link href={`/tomter/${tomt.id}`} className="truncate font-bold">
                {tomt.name}
              </Link>
            </li>
          </ol>
        </nav>
        <div className="flex w-full items-center justify-between px-3 pt-1">
          {prevTomt != null ? (
            <Link
              title={`Gå til ${prevTomt?.name}`}
              href={`/tomter/${prevTomt.id}`}
              className="flex items-center gap-1.5 p-1 font-bold text-white focus:shadow-[0_0_0_2px] focus:shadow-teal-400 focus:outline-none">
              <ChevronLeftIcon className="h-4 w-4 text-white" />
              Forrige
            </Link>
          ) : (
            <Link
              title={`Gå til ${boligfeltData[boligfeltData.length - 1]?.name}`}
              href={`/tomter/${boligfeltData[boligfeltData.length - 1]?.id}`}
              className="flex items-center gap-1.5 p-1 font-bold text-white focus:shadow-[0_0_0_2px] focus:shadow-teal-400 focus:outline-none">
              <ChevronLeftIcon className="h-4 w-4 text-white" />
              Forrige
            </Link>
          )}

          {nextTomt != null ? (
            <Link
              title={`Gå til ${nextTomt?.name}`}
              href={`/tomter/${nextTomt.id}`}
              className="flex items-center gap-1.5 p-1 font-bold text-white focus:shadow-[0_0_0_2px] focus:shadow-teal-400 focus:outline-none">
              Neste
              <ChevronRightIcon className="h-4 w-4 text-white" />
            </Link>
          ) : (
            <Link
              title={`Gå til ${boligfeltData[0]?.name}`}
              href={`/tomter/${boligfeltData[0]?.id}`}
              className="flex items-center gap-1.5 p-1 font-bold text-white focus:shadow-[0_0_0_2px] focus:shadow-teal-400 focus:outline-none">
              Neste
              <ChevronRightIcon className="h-4 w-4 text-white" />
            </Link>
          )}
        </div>
      </div>
      <article className="w-full max-w-xl sm:rounded-md sm:shadow-xl">
        {tomt.images.length > 0 && (
          <div className="flex flex-col bg-teal-900 sm:rounded-t-md">
            <Carousel images={tomt.images} tomtId={tomt.id} />
            {tomt.available && (
              <span className="flex justify-end p-1.5 text-xs text-white">
                <span className="flex items-center gap-1.5">
                  <InformationCircleIcon className="h-3 w-3" /> Illustrasjonene
                  er ikke nøyaktige mål på tomten.
                </span>
              </span>
            )}
          </div>
        )}
        <section className="flex flex-col gap-3 bg-white p-5 sm:rounded-b-md">
          <div className="flex flex-col gap-1">
            <div className="flex w-full items-center justify-between gap-1.5">
              <h1 className="text-3xl font-bold text-black">{tomt.name}</h1>
              {tomt.available && (
                <a
                  href={`mailto:kontakt@heggliaboligfelt.no?subject=Interesse%20for%20${tomt.name}&body=Hei!%0A%0AJeg%20er%20interessert%20i%20%C3%A5%20h%C3%B8re%20mer%20om%20${tomt.name}.%20%0A%0AMvh%2C%0A`}
                  className={`rounded-sm bg-teal-800 px-3 py-1.5 text-sm font-normal text-white shadow-md shadow-teal-600 hover:bg-teal-700 focus:shadow-[0_0_0_2px] focus:shadow-teal-700 focus:outline-none`}>
                  Meld interesse
                </a>
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
          </div>
          <p className="max-w-xl text-pretty text-sm text-black">
            {tomt.description}
          </p>
          {tomt.available && (
            <p className="max-w-xl text-pretty text-xs font-medium text-amber-700">
              Tomtene selges med vann/avløp, strømtilførsel og fiber inkludert.
            </p>
          )}

          {tomt.available &&
            tomt.tomtFeatures != null &&
            tomt.tomtFeatures.length > 0 && (
              <div className="flex flex-col items-start gap-1">
                <h2 className="mt-5 text-xl font-bold text-black">
                  Hvorfor velge denne tomten?
                </h2>
                <ul className="flex flex-wrap gap-1.5 text-sm text-black">
                  {tomt.tomtFeatures.map((feature) => (
                    <li
                      key={feature.id}
                      className="flex flex-col gap-1 text-pretty rounded-md p-3">
                      <h4 className="font-bold text-teal-800">
                        {feature.heading}
                      </h4>
                      <p>{feature.description}</p>
                      {feature.href != null && (
                        <a
                          href={feature.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 underline underline-offset-2">
                          Les mer (ekstern side)
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {tomt.available && (
            <footer className="text-slate-500">
              <section>
                <h4
                  className={`text-pretty pb-3 text-center text-xs sm:text-sm`}>
                  Boligtomtene har ingen byggeklausul utover{' '}
                  <Link
                    href={'/utforsk#reguleringsbestemmelser'}
                    className="underline underline-offset-2">
                    reguleringsbestemmelsen
                  </Link>
                  .
                </h4>
              </section>
            </footer>
          )}
        </section>
      </article>
    </div>
  );
}
