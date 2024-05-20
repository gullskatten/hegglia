import { StaticImageData } from 'next/image';

import tomtC1 from '../../../public/byggefelt/tomt/high_tomt_1.webp';
import tomtH1 from '../../../public/byggefelt/tomt/close_tomt_1.webp';
import tomtC2 from '../../../public/byggefelt/tomt/high_tomt_2.webp';
import tomtH2 from '../../../public/byggefelt/tomt/close_tomt_2.webp';
import tomtC3 from '../../../public/byggefelt/tomt/high_tomt_3.webp';
import tomtH3 from '../../../public/byggefelt/tomt/close_tomt_3.webp';
import tomtC4 from '../../../public/byggefelt/tomt/high_tomt_4.webp';
import tomtH4 from '../../../public/byggefelt/tomt/close_tomt_4.webp';
import tomtC5 from '../../../public/byggefelt/tomt/high_tomt_5.webp';
import tomtH5 from '../../../public/byggefelt/tomt/close_tomt_5.webp';
import tomtC6 from '../../../public/byggefelt/tomt/high_tomt_6.webp';
import tomtH6 from '../../../public/byggefelt/tomt/close_tomt_6.webp';
import tomtC9 from '../../../public/byggefelt/tomt/high_tomt_9.webp';
import tomtH9 from '../../../public/byggefelt/tomt/close_tomt_9.webp';
import tomtC10 from '../../../public/byggefelt/tomt/high_tomt_10.webp';
import tomtH10 from '../../../public/byggefelt/tomt/close_tomt_10.webp';
import tomtC11 from '../../../public/byggefelt/tomt/high_tomt_11.webp';
import tomtH11 from '../../../public/byggefelt/tomt/close_tomt_11.webp';
import tomtC12 from '../../../public/byggefelt/tomt/high_tomt_12.webp';
import tomtH12 from '../../../public/byggefelt/tomt/close_tomt_12.webp';

interface DocumentsData {
  url: string;
  name: string;
  image: string;
  id: number;
  description: string;
}

export interface TomtData {
  id: string;
  path: string;
  name: string;
  description: string;
  kvm: number;
  price: number;
  available: boolean;
  type: 'polygon' | 'path';
  images: StaticImageData[];
  x?: string;
  y?: string;
}

export const boligfeltData: Array<TomtData> = [
  {
    images: [tomtC1, tomtH1],
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
    images: [tomtC2, tomtH2],
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
    images: [tomtC3, tomtH3],
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
    images: [tomtC4, tomtH4],
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
    images: [tomtC5, tomtH5],
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
    images: [tomtC6, tomtH6],
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
    images: [],
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
    images: [],
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
    images: [tomtC9, tomtH9],
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
    images: [tomtC10, tomtH10],
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
    images: [tomtC11, tomtH11],
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
    images: [tomtC12, tomtH12],
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

const documents: DocumentsData[] = [
  {
    id: 0,
    url: 'https://www.skaun.kommune.no/getfile.php/5243504.1720.ppjln7aiiib7as/Plankart+021120.pdf',
    name: 'Plantegning for Hegglia Boligfelt',
    image: '/byggefelt/plantegning.png',
    description:
      'Plankartet gir deg en oversikt over de ulike tomtegrensene og annet planlagt arbeid i forbindelse med byggingen av boligfeltet.',
  },
  {
    id: 1,
    url: 'https://www.skaun.kommune.no/getfile.php/5243503.1720.mtbtjnapltpbnq/Reguleringsbestemmelser+071123.pdf',
    name: 'Reguleringsbestemmelser',
    image: '/byggefelt/reguleringsbestemmelser.png',
    description:
      'Dokumentet gir en oversikt over hvilke formål området til boligfeltet er regulert for og i hvilken rekkefølge utbyggingsarbeidet skal følge.',
  },
  {
    id: 2,
    url: 'https://www.skaun.kommune.no/getfile.php/5243508.1720.ibzlajlzjlz7ib/Planbeskrivelse%5B3%5D.pdf',
    name: 'Reguleringsplan',
    image: '/byggefelt/reguleringsplan.png',
    description:
      'Dokumentet inneholder informasjon om forhold som kan påvirke boligfeltutbygging, slik som informasjon om grunnforhold og arealplanlegging for lek- og uteopphold. Utformet av On Arkitekter og Ingeniører AS.',
  },
  {
    id: 3,
    url: 'https://www.skaun.kommune.no/getfile.php/5243505.1720.wzpnkqqljibitn/201303+ROS-analyse+Hegglia+boligfelt.pdf',
    name: 'Risiko- og sårbarhetsanalyse',
    image: '/byggefelt/risiko-sarbarhetsanalyse.png',
    description:
      'Dokumentet gir en oversikt over hvilke risikoer og sårbarheter som er knyttet til utbyggingen av boligfeltet, og hvordan disse vil håndteres.',
  },
  {
    id: 4,
    url: 'https://www.skaun.kommune.no/kunngjoering-av-vedtatt-reguleringsplan-for-nytt-boligfelt-hegglia-gnrbnr-851.6635846-492713.html',
    name: 'Sak 65/2023 - Kunngjøring fra Skaun Kommune',
    image: '/byggefelt/artikkel-skaun-kommune.png',
    description:
      'Kunngjøring av vedtatt reguleringsplan for nytt boligfelt - Hegglia gnr/bnr 85/1 fra Skaun kommune sine nettsider.',
  },
] as const;

export default documents;
