'use client';

import { StaticImageData } from 'next/image';
import React from 'react';
import {
  ArrowsPointingOutIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Carousel({
  images,
  tomtId,
}: {
  images: StaticImageData[];
  tomtId: string;
}) {
  const [currentImageIdx, setCurrentImageIdx] = React.useState(0);

  return (
    <div className="overflow-y-scroll sm:rounded-t-md">
      <div className="relative isolate flex w-full rounded-t-md">
        {images.length > 1 && (
          <div className="absolute bottom-1 z-10 flex w-full items-center justify-center  text-white">
            <div className="flex items-center justify-center rounded-full bg-black/40 p-1 ">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIdx(idx)}
                  className={`mx-1 h-1.5 w-1.5 rounded-full border transition-colors focus:outline-none ${
                    idx === currentImageIdx
                      ? 'border-teal-500 bg-teal-500'
                      : ' border-white bg-white'
                  }`}></button>
              ))}
            </div>
          </div>
        )}
        <button
          onClick={() => setCurrentImageIdx((prev) => prev - 1)}
          disabled={currentImageIdx === 0}
          className="absolute h-full p-3 text-xs text-white focus:text-teal-300 focus:outline-none disabled:pointer-events-none disabled:opacity-35">
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <Image
          placeholder="blur"
          alt={`Bilde av tomt nummer ${tomtId} (bilde ${currentImageIdx + 1} av ${images.length})`}
          src={images[currentImageIdx]}
          width={500}
          height={600}
          className="max-h-[350px] min-h-[350px] w-full bg-cover bg-center bg-no-repeat object-cover sm:rounded-t-md"
        />
        <button
          disabled={currentImageIdx === images.length - 1}
          onClick={() => {
            setCurrentImageIdx(currentImageIdx + 1);
          }}
          className="absolute right-0 h-full p-3 text-xs text-white focus:text-teal-300 focus:outline-none disabled:pointer-events-none disabled:opacity-35">
          <ChevronRightIcon className="h-6 w-6" />
        </button>
        <a
          title={`Åpne bilde ${currentImageIdx + 1} i full størrelse`}
          href={images[currentImageIdx]?.src ?? '#'}
          target="_blank"
          className="absolute bottom-0 right-0 bg-teal-800 p-1 focus:shadow-[0_0_0_2px] focus:shadow-teal-400 focus:outline-none">
          <ArrowsPointingOutIcon className="h-4 w-4 text-white" />
        </a>
      </div>
    </div>
  );
}
