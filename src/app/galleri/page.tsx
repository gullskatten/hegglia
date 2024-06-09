import Image from 'next/image';

import { images } from '../utforsk/ImageCarousel';
import { ArrowsPointingOutIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Boligfelt() {
  const galleriJsonLd = {
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
    "name": "Bildegalleri",
    "item": "https://www.heggliaboligfelt.no/galleri"
  }]
}
  `,
  };

  return (
    <div className="relative w-full">
      <section className="sr-only">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={galleriJsonLd}
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
                Bildegalleri
              </Link>
            </li>
          </ol>
        </nav>
      </div>
      <div className="relative isolate flex w-full flex-col items-center gap-5 ">
        <div className="absolute z-0 h-full w-full bg-topology-pattern bg-repeat opacity-10" />
        <div className="flex min-w-72 flex-col items-center justify-center gap-3 text-center">
          <h1 className="z-10 my-5 flex animate-fadeIn gap-5 px-3 text-4xl font-bold text-white">
            Bildegalleri
          </h1>
        </div>
      </div>

      <section className="flex w-full flex-wrap items-center justify-center gap-5 bg-white px-5 py-10 text-slate-800">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative flex w-full max-w-[800px] flex-col gap-1.5">
            <Image
              placeholder="blur"
              sizes={`${img.src.src} 25w, ${img.srcFull} 50w`}
              src={img.src}
              alt={img.alt}
              width={700}
              title={img.alt}
              className="w-full flex-grow rounded-md bg-cover bg-center bg-no-repeat shadow-md"
            />
            <div className="flex gap-1.5 text-pretty p-0.5 text-xs text-slate-600">
              <span className="text-teal-600">
                ({`${idx + 1}/${images.length}`})
              </span>
              <span> {img.alt}.</span>
            </div>
            <a
              title={`Åpne bilde ${idx + 1} i full størrelse`}
              href={img.srcFull}
              className="absolute right-0 top-0 flex items-center gap-1.5 rounded-bl-md rounded-tr-md bg-teal-800 px-3 py-1 text-xs font-medium text-white">
              Vis i full størrelse <ArrowsPointingOutIcon className="h-3 w-3" />
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
