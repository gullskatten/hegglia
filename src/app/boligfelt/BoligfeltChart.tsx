'use client';

import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import Image from 'next/image';

export interface TomtData {
  id: string;
  path: string;
  name: string;
  description: string;
  kvm: number;
  price: number;
  available: boolean;
  type: 'polygon' | 'path';
  image: string;
  x?: string;
  y?: string;
}

export const boligfeltData: Array<TomtData> = [
  {
    image: '/byggefelt/img.webp',
    id: 'tomt1',
    path: 'M249,298 C247.762584,299.425718 250.716279,299.531631 251,302 C224,312 239,333 259,385 C275,378.333333 301,367.666667 337,353 L297,249 C290.333333,269 274.333333,285.333333 249,298 Z',
    name: 'Tomt 1',
    description: 'Tomt 1 er en stor tomt med utsikt over dalen.',
    kvm: 1300,
    price: 205000,
    type: 'path',
    available: true,
    x: '290',
    y: '340',
  },
  {
    image: '/byggefelt/img.webp',
    id: 'tomt2',
    path: 'M337,353 L366,424 L306,496 C291.333333,470.666667 289.666667,456 301,452 C300.772376,450.439153 300.10571,449.10582 299,448 L313,442 L307,428 C301.938777,431.066326 297.272111,432.732993 293,433 C291.408166,433.09949 293,431 291,429 C282.869742,430.161465 278.910903,429.413356 273,418 C268.73255,409.759985 261.934871,391.708276 259,385 C273,379 299,368.333333 337,353 Z',
    name: 'Tomt 2',
    description:
      'Tomt 2 ligger nederst i boligfeltet og har utsikt til Laugen. Tomten er den største på boligfeltet og passer perfekt for en større bolig.',
    kvm: 1300,
    price: 220000,
    type: 'path',
    available: true,
    x: '325',
    y: '425',
  },
  {
    image: '/byggefelt/img.webp',
    id: 'tomt3',
    path: 'M162,301 L172,374 L177,390 L238,372 C227.333333,342.666667 221,325.666667 219,321 C216,314 211,308 194,307 C184.666667,306.333333 174,304.333333 162,301 Z',
    name: 'Tomt 3',
    description: 'Tomt 3 er en stor tomt med utsikt over dalen.',
    kvm: 800,
    price: 120000,
    type: 'path',
    available: true,
    x: '190',
    y: '350',
  },
  {
    image: '/byggefelt/img.webp',
    id: 'tomt4',
    path: '238 372 177 390 204 468 268 444',
    name: 'Tomt 4',
    description: 'Tomt 4 er en stor tomt med utsikt over dalen.',
    kvm: 900,
    price: 150000,
    available: true,
    type: 'polygon',
    x: '215',
    y: '425',
  },
  {
    image: '/byggefelt/img.webp',
    id: 'tomt5',
    path: '204 468 268 444 290 499 261 534 234 543',
    name: 'Tomt 5',
    description: 'Tomt 5 er en stor tomt med utsikt over dalen.',
    kvm: 900,
    price: 165000,
    type: 'polygon',
    available: true,
    x: '245',
    y: '495',
  },
  {
    image: '/byggefelt/img.webp',
    id: 'tomt6',
    path: 'M162 301 C148 297 137 294 129 292 C90 285 101 360 104 381 C121 380 172 374 172 374 C172 374 168.666667 349.666667 162 301 Z',
    name: 'Tomt 6',
    description:
      'Tomt 6 ligger praktisk til i svingen inn til den øverste delen av boligfeltet.',
    kvm: 900,
    price: 130000,
    type: 'path',
    available: true,
    x: '130',
    y: '340',
  },
  {
    image: '/byggefelt/img.webp',
    id: 'tomt7',
    path: '104 381 130 474 199 454 172 374',
    name: 'Tomt 7',
    description: 'Denne tomten er ikke lenger tilgjengelig.',
    kvm: 1100,
    price: 0,
    type: 'polygon',
    available: false,
    x: '145',
    y: '430',
  },
  {
    image: '/byggefelt/img.webp',
    id: 'tomt8',
    path: '130 474 166 563 234 543 199 454',
    name: 'Tomt 8',
    description: 'Denne tomten er ikke lenger tilgjengelig.',
    kvm: 1200,
    price: 0,
    type: 'polygon',
    available: false,
    x: '175',
    y: '510',
  },
  {
    image: '/byggefelt/img.webp',
    id: 'tomt9',
    x: '45',
    y: '315',
    path: 'M86 356 C76 355.333333 51 354.666667 11 354 L18 245 L78 274 C77.1969522 275.935427 76.8636189 277.602094 77 279 C105 290 81 308 86 356 Z',
    name: 'Tomt 9',
    description: 'Tomt 9 er en stor tomt med utsikt over dalen.',
    kvm: 1200,
    price: 170000,
    available: true,
    type: 'path',
  },
  {
    image: '/byggefelt/img.webp',
    id: 'tomt10',
    x: '45',
    y: '410',
    path: 'M11 354 C47 354.666667 72 355.333333 86 356 C87.3333333 374.666667 93.6666667 402.333333 105 439 L28 450 L11 354 Z',
    name: 'Tomt 10',
    description: 'Tomt 10 er en stor tomt plassert øverst i boligfeltet.',
    kvm: 1200,
    price: 195000,
    available: true,
    type: 'path',
  },
  {
    image: '/byggefelt/img.webp',
    id: 'tomt11',
    path: 'M49 532 L129 510 L115 477 L105 439 C53.6666667 446.333333 28 450 28 450 C28 450 35 477.333333 49 532 Z',
    name: 'Tomt 11',
    description: 'Tomt 11 er en stor tomt plassert øverst i boligfeltet.',
    kvm: 1100,
    x: '65',
    y: '490',
    price: 180000,
    available: true,
    type: 'path',
  },
  {
    image: '/byggefelt/img.webp',
    id: 'tomt12',
    path: 'M132 595 L126 578 C136.139543 573.776425 141.80621 570.776425 143 569 C143.962848 567.56723 143.135591 566.240865 142 565 C145.833465 559.350683 146.350208 555.063278 145 550 C140.333333 538.666667 135 525.333333 129 510 L49 532 L49 533 L83 616 L132 595 Z',
    name: 'Tomt 12',
    description:
      'Tomt 12 er en stor tomt plassert øverst og innerst i boligfeltet.',
    kvm: 1100,
    x: '90',
    y: '560',
    price: 195000,
    available: true,
    type: 'path',
  },
];

export default function BoligfeltChart() {
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
        fill-rule="evenodd">
        <path
          d="M297,0 L332,0 L346,91 L349,104 L352,115 L395,232 L424,304 L444,347 L489,438 L450,457 L382,408 L366,424 L306,496 L295.938036,509.168586 L194,629 L185,637 C173,605 162.333333,589 153,589 C143.666667,589 120.333333,598 83,616 L49,533 L28,450 L11,354 L19,229 L53,247 C73.6666667,258.333333 84.3333333,262.666667 85,260 C85.6666667,257.333333 92.6666667,224.666667 106,162 C111.972585,166 117.305918,168 122,168 C126.694082,168 131.360749,166 136,162 C158,141.333333 174,129.333333 184,126 C194,122.666667 201.333333,121.666667 206,123 L233,120 L250,115 L261,112 C250.926992,86.5158541 248.926992,66.1825208 255,51 C261.073008,35.8174792 275.073008,26.1508126 297,22 C299,16.6666667 300,12.6666667 300,10 C300,7.33333333 299,4 297,0 Z"
          id="bg"
          stroke="#000000"
          className="fill-teal-700"></path>

        {boligfeltData.map((tomt, i) => (
          <Popover.Root key={tomt.id}>
            <Popover.Trigger asChild>
              {tomt.type === 'polygon' ? (
                <g>
                  <polygon
                    key={tomt.id}
                    id={tomt.id}
                    stroke="#000000"
                    className={`cursor-pointer  transition-colors hover:fill-teal-600 ${
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
                    className={`cursor-pointer fill-white transition-colors hover:fill-teal-600 ${
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
                className="flex flex-col gap-1.5 rounded-md bg-white shadow-lg focus:shadow-[0_0_0_2px] focus:shadow-teal-700 focus:outline-none">
                {tomt.available && (
                  <Image
                    src={tomt.image}
                    alt={tomt.name}
                    width={300}
                    height={100}
                    className="h-52 w-full rounded-t-md border-b-4 border-teal-800 object-cover shadow-md"
                  />
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
                      {tomt.available && (
                        <>
                          <span>{tomt.kvm} m²</span>{' '}
                          <span className="text-teal-800">
                            {Intl.NumberFormat('nb', {
                              currency: 'NOK',
                              unitDisplay: 'long',
                              style: 'currency',
                              maximumFractionDigits: 0,
                            }).format(tomt.price)}
                          </span>
                        </>
                      )}
                    </dd>
                  </div>
                  <dd className=" max-w-[330px] text-pretty text-sm text-black">
                    {tomt.description}
                  </dd>
                </dl>
                <Popover.Arrow className="h-3 w-3 fill-teal-700" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        ))}
        <polygon
          id="lekeplass"
          stroke="#000000"
          fill-opacity="0.252649694"
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
            dominant-baseline="central"
            transform="rotate(75, 150, 50)"
            className="fill-white text-xs"
            text-anchor="middle">
            Melbyvegen, 7357 Skaun
          </text>
        </g>
      </g>
    </svg>
  );
}
