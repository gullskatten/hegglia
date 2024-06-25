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
import tomtSikt9 from '../../../public/byggefelt/tomt/c_1_25s.png';
import tomtC10 from '../../../public/byggefelt/tomt/high_tomt_10.webp';
import tomtH10 from '../../../public/byggefelt/tomt/close_tomt_10.webp';
import tomtSikt10 from '../../../public/byggefelt/tomt/c_2_25s.png';
import tomtC11 from '../../../public/byggefelt/tomt/high_tomt_11.webp';
import tomtH11 from '../../../public/byggefelt/tomt/close_tomt_11.webp';
import tomtSikt11 from '../../../public/byggefelt/tomt/c_3_25s.png';
import tomtC12 from '../../../public/byggefelt/tomt/high_tomt_12.webp';
import tomtH12 from '../../../public/byggefelt/tomt/close_tomt_12.webp';

import tomtOg1 from '../../../public/byggefelt/tomt/high_tomt_1_og.png';
import tomtTw1 from '../../../public/byggefelt/tomt/high_tomt_1_og_twitter.png';
import tomtOg2 from '../../../public/byggefelt/tomt/high_tomt_2_og.png';
import tomtTw2 from '../../../public/byggefelt/tomt/high_tomt_2_og_twitter.png';
import tomtOg3 from '../../../public/byggefelt/tomt/high_tomt_3_og.png';
import tomtTw3 from '../../../public/byggefelt/tomt/high_tomt_3_og_twitter.png';
import tomtOg4 from '../../../public/byggefelt/tomt/high_tomt_4_og.png';
import tomtTw4 from '../../../public/byggefelt/tomt/high_tomt_4_og_twitter.png';
import tomtOg5 from '../../../public/byggefelt/tomt/high_tomt_5_og.png';
import tomtTw5 from '../../../public/byggefelt/tomt/high_tomt_5_og_twitter.png';
import tomtOg6 from '../../../public/byggefelt/tomt/high_tomt_6_og.png';
import tomtTw6 from '../../../public/byggefelt/tomt/high_tomt_6_og_twitter.png';
import tomtOg9 from '../../../public/byggefelt/tomt/high_tomt_9_og.png';
import tomtTw9 from '../../../public/byggefelt/tomt/high_tomt_9_og_twitter.png';
import tomtOg10 from '../../../public/byggefelt/tomt/high_tomt_10_og.png';
import tomtTw10 from '../../../public/byggefelt/tomt/high_tomt_10_og_twitter.png';
import tomtOg11 from '../../../public/byggefelt/tomt/high_tomt_11_og.png';
import tomtTw11 from '../../../public/byggefelt/tomt/high_tomt_11_og_twitter.png';
import tomtOg12 from '../../../public/byggefelt/tomt/high_tomt_12_og.png';
import tomtTw12 from '../../../public/byggefelt/tomt/high_tomt_12_og_twitter.png';

import genericOg from '../../../public/opengraph-image.png';
import genericTw from '../../../public/opengraph-image.png';

interface DocumentsData {
  url: string;
  name: string;
  anchor: string;
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
  ogImage: StaticImageData;
  twitter: StaticImageData;
  tomtFeatures?: TomtFeature[];
  x?: string;
  y?: string;
}

type TomtFeature = {
  id: string;
  heading: string;
  description: string;
  href?: string;
};

const romslig = {
  id: '1',
  heading: 'Romslig areal',
  description:
    'Denne store tomten gir deg frihet til å designe og bygge en romslig bolig med en herlig hage hvor hele familien kan trives.',
};

const familievennlig = {
  id: '2',
  heading: 'Familievennlig beliggenhet',
  description:
    'Med Jåren-Råbygda barnehage like i nærheten, blir hverdagen enklere for småbarnsfamilier.',
};

const naturopplevelser = {
  id: '3',
  heading: 'Naturopplevelser rett utenfor døren',
  description:
    'Nyt nærhet til et vakkert skogsområde med flotte turmuligheter. Her kan du starte dagen med en forfriskende morgentur eller avslutte den med en rolig kveldstur i naturen.',
};

const sentralt = {
  id: '4',
  heading: 'Fredelig, men tilgjengelig',
  description:
    'Selv om tomten ligger i et rolig og fredelig boligfelt, er det kort vei til barnehage og skole. Kollektivtransport er også tilgjengelig i området.',
  href: 'https://www.skaun.kommune.no/visste-du-at-du-kan-bestille-buss-til-doera.6618258-158571.html',
};

const skoleskyss = {
  id: '5',
  heading: 'Mulighet for Skoleskyss-ordning',
  description:
    'Skaun kommune tilbyr skoleskyss-ordning for elever som har lang vei til skolen. Les mer på Skaun kommune sine nettsider.',
  href: 'https://www.skaun.kommune.no/skoleskyss.597243.no.html',
};

const utsikt = {
  id: '6',
  heading: 'Flott utsikt',
  description:
    'Tomten ligger i et høydedrag med utsikt over dalen og skogsområdet. Her kan du nyte en flott utsikt fra din egen hage.',
};

export const boligfeltData: Array<TomtData> = [
  {
    images: [tomtC1, tomtH1],
    ogImage: tomtOg1,
    twitter: tomtTw1,
    id: '1',
    path: 'M249,298 C247.762584,299.425718 250.716279,299.531631 251,302 C224,312 239,333 259,385 C275,378.333333 301,367.666667 337,353 L297,249 C290.333333,269 274.333333,285.333333 249,298 Z',
    name: 'Tomt 1',
    description:
      'Denne tomten ligger nederst i boligfeltet og er blant de største tomtene i boligfeltet. Dette gir god plass til en stor bolig og hage.',
    kvm: 1300,
    price: 750000,
    type: 'path',
    available: true,
    x: '290',
    y: '340',
    tomtFeatures: [
      romslig,
      familievennlig,
      naturopplevelser,
      sentralt,
      skoleskyss,
    ],
  },
  {
    images: [tomtC2, tomtH2],
    ogImage: tomtOg2,
    twitter: tomtTw2,
    id: '2',
    path: 'M337,353 L366,424 L306,496 C291.333333,470.666667 289.666667,456 301,452 C300.772376,450.439153 300.10571,449.10582 299,448 L313,442 L307,428 C301.938777,431.066326 297.272111,432.732993 293,433 C291.408166,433.09949 293,431 291,429 C282.869742,430.161465 278.910903,429.413356 273,418 C268.73255,409.759985 261.934871,391.708276 259,385 C273,379 299,368.333333 337,353 Z',
    name: 'Tomt 2',
    description:
      'Denne tomten ligger nederst og innerst i boligfeltet. Sammen med tomt 1 er den blant de største tomtene i boligfeltet. Her er det gode muligheter for både stor hage og en større bolig!',
    kvm: 1300,
    price: 750000,
    type: 'path',
    available: true,
    x: '325',
    y: '425',
    tomtFeatures: [
      romslig,
      familievennlig,
      naturopplevelser,
      sentralt,
      skoleskyss,
    ],
  },
  {
    images: [tomtC3, tomtH3],
    ogImage: tomtOg3,
    twitter: tomtTw3,
    id: '3',
    path: 'M162,301 L172,374 L177,390 L238,372 C227.333333,342.666667 221,325.666667 219,321 C216,314 211,308 194,307 C184.666667,306.333333 174,304.333333 162,301 Z',
    name: 'Tomt 3',
    description:
      'Tomten ligger lett ankommelig i svingen inn mot den nederste delen av boligfeltet. Tomten skråner svakt oppover, noe som gir gode muligheter for en bolig med utsikt over dalen.',
    kvm: 800,
    price: 600000,
    type: 'path',
    available: true,
    x: '190',
    y: '350',
    tomtFeatures: [
      romslig,
      familievennlig,
      naturopplevelser,
      sentralt,
      skoleskyss,
      utsikt,
    ],
  },
  {
    images: [tomtC4, tomtH4],
    ogImage: tomtOg4,
    twitter: tomtTw4,
    id: '4',
    path: '238 372 177 390 204 468 268 444',
    name: 'Tomt 4',
    description:
      'Denne tomten er plassert i midten av boligfeltet. En stor tomt som skråner svakt oppover gir gode utsiktmuligheter og plass til en stor bolig.',
    kvm: 900,
    price: 650000,
    available: true,
    type: 'polygon',
    x: '215',
    y: '425',
    tomtFeatures: [
      utsikt,
      romslig,
      familievennlig,
      naturopplevelser,
      sentralt,
      skoleskyss,
    ],
  },
  {
    images: [tomtC5, tomtH5],
    ogImage: tomtOg5,
    twitter: tomtTw5,
    id: '5',
    path: '204 468 268 444 290 499 261 534 234 543',
    name: 'Tomt 5',
    description:
      'Denne flotte tomten har en fin beliggenhet innerst i veien. I likhet med tomt 3 og 4 skråner tomten svakt oppover som gir gode utsiktsforhold. En stor tomt med mange muligheter!',
    kvm: 900,
    price: 650000,
    type: 'polygon',
    available: true,
    x: '245',
    y: '495',
    tomtFeatures: [
      utsikt,
      romslig,
      familievennlig,
      naturopplevelser,
      sentralt,
      skoleskyss,
    ],
  },
  {
    images: [tomtC6, tomtH6],
    ogImage: tomtOg6,
    twitter: tomtTw6,
    id: '6',
    path: 'M162 301 C148 297 137 294 129 292 C90 285 101 360 104 381 C121 380 172 374 172 374 C172 374 168.666667 349.666667 162 301 Z',
    name: 'Tomt 6',
    description:
      'Denne tomten ligger praktisk til i svingen inn til den øverste delen av boligfeltet. Her er det gode muligheter for en stor bolig med utsikt over dalen.',
    kvm: 900,
    price: 600000,
    type: 'path',
    available: true,
    x: '130',
    y: '340',
    tomtFeatures: [
      romslig,
      utsikt,
      familievennlig,
      naturopplevelser,
      sentralt,
      skoleskyss,
    ],
  },
  {
    images: [tomtSikt9],
    ogImage: genericOg,
    twitter: genericTw,
    id: '7',
    path: '104 381 130 474 199 454 172 374',
    name: 'Tomt 7',
    description: 'Denne tomten er solgt.',
    kvm: 1100,
    price: 0,
    type: 'polygon',
    available: false,
    x: '145',
    y: '430',
  },
  {
    images: [tomtSikt11],
    ogImage: genericOg,
    twitter: genericTw,
    id: '8',
    path: '130 474 166 563 234 543 199 454',
    name: 'Tomt 8',
    description: 'Denne tomten er solgt.',
    kvm: 1200,
    price: 0,
    type: 'polygon',
    available: false,
    x: '175',
    y: '510',
  },
  {
    images: [tomtC9, tomtH9, tomtSikt9],
    ogImage: tomtOg9,
    twitter: tomtTw9,
    id: '9',
    x: '45',
    y: '315',
    path: 'M86 356 C76 355.333333 51 354.666667 11 354 L18 245 L78 274 C77.1969522 275.935427 76.8636189 277.602094 77 279 C105 290 81 308 86 356 Z',
    name: 'Tomt 9',
    description:
      'Dette er den ytterste av tomtente øverst i boligfeltet. Tomten har en flott beliggenhet med utsikt over dalen, og er en av de største tomtene i feltet.',
    kvm: 1200,
    price: 650000,
    available: true,
    type: 'path',
    tomtFeatures: [
      romslig,
      utsikt,
      familievennlig,
      naturopplevelser,
      sentralt,
      skoleskyss,
    ],
  },
  {
    images: [tomtC10, tomtH10, tomtSikt10],
    ogImage: tomtOg10,
    twitter: tomtTw10,
    id: '10',
    x: '45',
    y: '410',
    path: 'M11 354 C47 354.666667 72 355.333333 86 356 C87.3333333 374.666667 93.6666667 402.333333 105 439 L28 450 L11 354 Z',
    name: 'Tomt 10',
    description:
      'I likhet med tomt 9 er denne tomten blant de største i boligfeltet. Med god plass til en stor bolig og hage, er dette en flott tomt for deg som ønsker god plass kombinert med en flott utsikt.',
    kvm: 1200,
    price: 700000,
    available: true,
    type: 'path',
    tomtFeatures: [
      familievennlig,
      naturopplevelser,
      sentralt,
      skoleskyss,
      utsikt,
      romslig,
    ],
  },
  {
    images: [tomtC11, tomtH11, tomtSikt11],
    ogImage: tomtOg11,
    twitter: tomtTw11,
    id: '11',
    path: 'M49 532 L129 510 L115 477 L105 439 C53.6666667 446.333333 28 450 28 450 C28 450 35 477.333333 49 532 Z',
    name: 'Tomt 11',
    description:
      'Denne tomten ligger flott til øverst i boligfeltet. Her får du en stor tomt med mye plass kombinert med god utsikt utover dalen.',
    kvm: 1100,
    x: '65',
    y: '490',
    price: 700000,
    available: true,
    type: 'path',
    tomtFeatures: [
      romslig,
      utsikt,
      familievennlig,
      naturopplevelser,
      sentralt,
      skoleskyss,
    ],
  },
  {
    images: [tomtC12, tomtH12, tomtSikt11],
    ogImage: tomtOg12,
    twitter: tomtTw12,
    id: '12',
    path: 'M132 595 L126 578 C136.139543 573.776425 141.80621 570.776425 143 569 C143.962848 567.56723 143.135591 566.240865 142 565 C145.833465 559.350683 146.350208 555.063278 145 550 C140.333333 538.666667 135 525.333333 129 510 L49 532 L49 533 L83 616 L132 595 Z',
    name: 'Tomt 12',
    description:
      'Denne store tomten er plassert øverst og innerst i boligfeltet. Her er det gode muligheter for en stor bolig med flott utsikt over dalen.',
    kvm: 1100,
    x: '90',
    y: '560',
    price: 650000,
    available: true,
    type: 'path',
    tomtFeatures: [
      utsikt,
      romslig,
      familievennlig,
      naturopplevelser,
      sentralt,
      skoleskyss,
    ],
  },
];

const documents: DocumentsData[] = [
  {
    id: 0,
    anchor: 'plantegning',
    url: 'https://www.skaun.kommune.no/getfile.php/5243504.1720.ppjln7aiiib7as/Plankart+021120.pdf',
    name: 'Plantegning for Hegglia Boligfelt',
    image: '/byggefelt/plantegning.png',
    description:
      'Plankartet gir deg en oversikt over de ulike tomtegrensene og annet planlagt arbeid i forbindelse med byggingen av boligfeltet.',
  },
  {
    id: 1,
    anchor: 'reguleringsbestemmelser',
    url: 'https://www.skaun.kommune.no/getfile.php/5243503.1720.mtbtjnapltpbnq/Reguleringsbestemmelser+071123.pdf',
    name: 'Reguleringsbestemmelser',
    image: '/byggefelt/reguleringsbestemmelser.png',
    description:
      'Dokumentet gir en oversikt over hvilke formål området til boligfeltet er regulert for og i hvilken rekkefølge utbyggingsarbeidet skal følge.',
  },
  {
    id: 2,
    anchor: 'reguleringsplan',
    url: 'https://www.skaun.kommune.no/getfile.php/5243508.1720.ibzlajlzjlz7ib/Planbeskrivelse%5B3%5D.pdf',
    name: 'Reguleringsplan',
    image: '/byggefelt/reguleringsplan.png',
    description:
      'Dokumentet inneholder informasjon om forhold som kan påvirke boligfeltutbygging, slik som informasjon om grunnforhold og arealplanlegging for lek- og uteopphold. Utformet av On Arkitekter og Ingeniører AS.',
  },
  {
    id: 3,
    anchor: 'ros-analyse',
    url: 'https://www.skaun.kommune.no/getfile.php/5243505.1720.wzpnkqqljibitn/201303+ROS-analyse+Hegglia+boligfelt.pdf',
    name: 'Risiko- og sårbarhetsanalyse',
    image: '/byggefelt/risiko-sarbarhetsanalyse.png',
    description:
      'Dokumentet gir en oversikt over hvilke risikoer og sårbarheter som er knyttet til utbyggingen av boligfeltet, og hvordan disse vil håndteres.',
  },
  {
    id: 4,
    anchor: 'kunngjoring',
    url: 'https://www.skaun.kommune.no/kunngjoering-av-vedtatt-reguleringsplan-for-nytt-boligfelt-hegglia-gnrbnr-851.6635846-492713.html',
    name: 'Sak 65/2023 - Kunngjøring fra Skaun Kommune',
    image: '/byggefelt/artikkel-skaun-kommune.png',
    description:
      'Kunngjøring av vedtatt reguleringsplan for nytt boligfelt - Hegglia gnr/bnr 85/1 fra Skaun kommune sine nettsider.',
  },
] as const;

export default documents;
