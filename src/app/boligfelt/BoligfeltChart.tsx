'use client';

import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { boligfeltData } from '../_data/boligfelt';
import {
  ArrowsPointingOutIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CursorArrowRaysIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { InformationCircleIcon } from '@heroicons/react/16/solid';

export default function BoligfeltChart() {
  const [showPopoverHint, setShowPopoverHint] = React.useState(false);
  const [currentImageIdx, setCurrentImageIdx] = React.useState(0);

  React.useEffect(() => {
    const t = setTimeout(() => {
      setShowPopoverHint(true);
    }, 2050);

    return () => clearTimeout(t);
  }, []);

  return (
    <svg
      className="w-screen max-w-xl"
      viewBox="0 0 493 645"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <g
        id="tomter"
        className="fill-teal-600"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd">
        <path
          d="M297,0 L332,0 L346,91 L349,104 L352,115 L395,232 L424,304 L444,347 L489,438 L450,457 L382,408 L366,424 L306,496 L295.938036,509.168586 L194,629 L185,637 C173,605 162.333333,589 153,589 C143.666667,589 120.333333,598 83,616 L49,533 L28,450 L11,354 L19,229 L53,247 C73.6666667,258.333333 84.3333333,262.666667 85,260 C85.6666667,257.333333 92.6666667,224.666667 106,162 C111.972585,166 117.305918,168 122,168 C126.694082,168 131.360749,166 136,162 C158,141.333333 174,129.333333 184,126 C194,122.666667 201.333333,121.666667 206,123 L233,120 L250,115 L261,112 C250.926992,86.5158541 248.926992,66.1825208 255,51 C261.073008,35.8174792 275.073008,26.1508126 297,22 C299,16.6666667 300,12.6666667 300,10 C300,7.33333333 299,4 297,0 Z"
          id="bg"
          stroke="#000000"
          className="fill-teal-700"></path>

        {boligfeltData.map((tomt, i) => (
          <Popover.Root
            key={tomt.id + `-${showPopoverHint}`}
            defaultOpen={i === 0 && showPopoverHint}
            onOpenChange={() => {
              setShowPopoverHint(false);
              setCurrentImageIdx(0);
            }}>
            <Popover.Trigger asChild>
              {tomt.type === 'polygon' ? (
                <g>
                  <polygon
                    key={tomt.id}
                    id={tomt.id}
                    stroke="#000000"
                    className={`cursor-pointer  transition-colors hover:fill-teal-600 focus:fill-teal-600 ${
                      !tomt.available ? 'fill-slate-300' : 'fill-white'
                    }`}
                    points={tomt.path}></polygon>
                  <text x={tomt.x} y={tomt.y} className="fill-black text-xs">
                    {i + 1}
                  </text>
                </g>
              ) : (
                <g>
                  <path
                    key={tomt.id}
                    d={tomt.path}
                    id={tomt.id}
                    stroke="#000000"
                    className={`cursor-pointer transition-colors hover:fill-teal-600 ${
                      !tomt.available ? 'fill-slate-600' : 'fill-white'
                    }`}></path>
                  <text x={tomt.x} y={tomt.y} className="fill-black text-xs">
                    {i + 1}
                  </text>
                </g>
              )}
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                align="center"
                side="top"
                sideOffset={-50}
                className={`"animate-slightEnterFromTop flex overflow-hidden ${showPopoverHint ? '' : 'w-[100vw] max-w-[400px]'} flex-col gap-1.5 rounded-md bg-white shadow-lg focus:outline-none`}>
                {showPopoverHint ? (
                  <div>
                    <div className="flex w-full items-center justify-center gap-1.5 p-3 text-sm font-medium text-teal-950">
                      <CursorArrowRaysIcon className="h-5 w-5 animate-pulse text-teal-700" />{' '}
                      <p>Klikk på tomtene for mer informasjon</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {tomt.available && tomt.images.length > 0 && (
                      <div className="overflow-y-scroll rounded-t-md border-b-4 border-teal-800 bg-teal-950">
                        <div className="relative flex w-full rounded-t-md">
                          {tomt.images.length > 1 && (
                            <div className="absolute bottom-1 z-10 flex w-full items-center justify-center  text-white">
                              <div className="flex items-center justify-center rounded-full bg-black/40 p-1 ">
                                {tomt.images.map((_, idx) => (
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
                            onClick={() =>
                              setCurrentImageIdx((prev) => prev - 1)
                            }
                            disabled={currentImageIdx === 0}
                            className="absolute h-full p-3 text-xs text-white focus:text-teal-300 focus:outline-none disabled:pointer-events-none disabled:opacity-35">
                            <ChevronLeftIcon className="h-6 w-6" />
                          </button>
                          <Image
                            placeholder="blur"
                            alt={`Dronebilde av tomt nummer ${tomt.id} (bilde ${currentImageIdx + 1} av ${tomt.images.length})`}
                            src={tomt.images[currentImageIdx]}
                            width={500}
                            height={600}
                            className="max-h-[250px] min-h-[250px] w-full rounded-t-md bg-cover bg-center bg-no-repeat object-cover"
                          />

                          <button
                            disabled={
                              currentImageIdx === tomt.images.length - 1
                            }
                            onClick={() => {
                              setCurrentImageIdx(currentImageIdx + 1);
                            }}
                            className="absolute right-0 h-full p-3 text-xs text-white focus:text-teal-300 focus:outline-none disabled:pointer-events-none disabled:opacity-35">
                            <ChevronRightIcon className="h-6 w-6" />
                          </button>
                          <a
                            title={`Åpne bilde ${currentImageIdx + 1} i full størrelse`}
                            href={tomt.images[currentImageIdx]?.src ?? '#'}
                            target="_blank"
                            className="absolute bottom-0 right-0 bg-teal-800 p-1 focus:shadow-[0_0_0_2px] focus:shadow-teal-400 focus:outline-none">
                            <ArrowsPointingOutIcon className="h-4 w-4 text-white" />
                          </a>
                        </div>
                      </div>
                    )}
                    <dl className="flex flex-col gap-3 p-3">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex w-full items-center justify-between gap-1.5">
                          <dt className="text-xl font-bold text-black">
                            {tomt.name}
                          </dt>
                          {tomt.available && (
                            <a
                              href={`mailto:kontakt@eokbygg.com?subject=Interesse%20for%20${tomt.name}&body=Hei!%0A%0AJeg%20er%20interessert%20i%20%C3%A5%20h%C3%B8re%20mer%20om%20${tomt.name}.%20%0A%0AMvh%2C%0A`}
                              className={`rounded-sm bg-teal-800 px-3 py-1.5 text-xs font-normal text-white hover:bg-teal-700 focus:shadow-[0_0_0_2px] focus:shadow-teal-700 focus:outline-none`}>
                              Meld interesse
                            </a>
                          )}
                        </div>
                        <dd className="flex items-center gap-3 text-sm font-semibold text-black">
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
                        </dd>
                      </div>
                      <dd className="max-w-[330px] text-pretty text-sm text-black">
                        {tomt.description}
                      </dd>
                      {tomt.available && (
                        <span className="p-1 text-xs text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <InformationCircleIcon className="h-3 w-3" />{' '}
                            Illustrasjonene er ikke nøyaktige mål på tomten.
                          </span>
                        </span>
                      )}
                    </dl>
                  </>
                )}

                <Popover.Arrow className="h-3 w-3 fill-white" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        ))}
        <polygon
          id="lekeplass"
          stroke="#000000"
          fillOpacity="0.252649694"
          className="cursor-pointer fill-teal-200 transition-colors hover:fill-teal-600"
          points="166 563 261 534 290 499 296 509 194 629"></polygon>
        <path
          d="M459,453 C437,405.666667 421.333333,371.333333 412,350 C407.263603,339.17395 404,326 399,314 C389.4113,290.987119 383,265 377,249 C372,234 365.577741,217.973894 359,201 C346.997678,170.027947 334.751743,133.131099 327,106 C315,64 316,59 316,59 C316,59 306,47 292,51 C282.666667,53.6666667 278.666667,60.3333333 280,71 C296.666667,129.666667 303.333333,183 300,231 C300.666667,255.666667 284,278 250,298 C241.333333,301.333333 235.666667,306 233,312 C230.333333,318 232,328.333333 238,343 C251.333333,379.666667 261.666667,405.333333 269,420 C276.333333,434.666667 289,437.333333 307,428 L313,441 L299,448 C289,454 287.333333,464.333333 294,479 C300.666667,493.666667 303.333333,500.333333 302,499 L296,509 C265.333333,437.666667 239.666667,375 219,321 C215,311.666667 206.666667,307 194,307 C165.333333,302.333333 143.666667,297.333333 129,292 C112,289 110,298 104,307 C95,329 99,357 107,390 C115,423 123,453 129,474 C135.666667,488.666667 157.333333,540.333333 194,629 L185,637 C178.333333,619 172.333333,605.333333 167,596 C161.666667,586.666667 150,585.666667 132,593 L126,578 C144,572.666667 151.666667,563.333333 149,550 C147.464549,542.322744 142.398023,530.971114 136,516 C132.857583,508.646872 127.190916,495.646872 119,477 L93,378 C88.3333333,351.333333 89,325.666667 95,301 C97,289 91.6666667,280 79,274 L18,245 L19,229 C41.6666667,243 63.6666667,254 85,262 C106.333333,270 125.333333,276.333333 142,281 C175.333333,293 204,296 228,290 C264,281 277,259 282,249 C287,241 286,200 286,193 C284.666667,157.666667 279,123.333333 269,90 C263.666667,71.3333333 264.333333,57.6666667 271,49 C281,36 287,39 300,34 C308.666667,30.6666667 312.666667,22.3333333 312,9 L312,0 L324,0 C324.666667,10 325.666667,20.3333333 327,31 C328.333333,41.6666667 331,57.6666667 335,79 C335.666667,86.3333333 339,99.3333333 345,118 C354,146 355.44214,150.179041 364,173 C369.70524,188.213973 378.371906,209.880639 390,238 L408,298 L425,344 L472,446 L459,453 Z"
          id="vei"
          stroke="#000000"
          className="fill-slate-200"></path>
        <g>
          <text
            x="250"
            y="-155"
            dominantBaseline="central"
            transform="rotate(75, 150, 50)"
            className="fill-white text-xs"
            textAnchor="middle">
            Melbyvegen, 7357 Skaun
          </text>
        </g>
      </g>
    </svg>
  );
}
