import Image from 'next/image';

import ImageCarousel, { images } from '../boligfelt/ImageCarousel';
import { ArrowsPointingOutIcon } from '@heroicons/react/20/solid';

export default function Boligfelt() {
  return (
    <div className="relative w-full">
      <div className="relative isolate flex w-full flex-col items-center gap-5 ">
        <div className="bg-topology-pattern absolute z-0 h-full w-full bg-repeat opacity-10" />
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
              className="absolute right-0 top-0 rounded-tr-md bg-teal-800 p-1">
              <ArrowsPointingOutIcon className="h-4 w-4 text-white" />
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
