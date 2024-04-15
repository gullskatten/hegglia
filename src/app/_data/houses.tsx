interface IdeHouseData {
  url: string;
  name: string;
  image: string;
  floors: number;
  bedrooms: number;
  bathrooms: number;
  bra: number;
  id: number;
  description: string;
}

const houses: IdeHouseData[] = [
  {
    id: 1,
    url: 'https://www.idehus.no/hus/336/bjornegga',
    name: 'Bjørnegga',
    image: '/idehus/bjornegga.jpg',
    floors: 1,
    bedrooms: 2,
    bathrooms: 1,
    bra: 103.5,
    description:
      'Bjørnegga er en av våre mindre boliger med alle funksjoner samlet på ett plan. Passer ypperlig for de som vil bygge seg en liten og effektiv bolig.',
  },
  {
    id: 0,
    url: 'https://www.idehus.no/hus/321/grytkollen',
    name: 'Grytkollen',
    image: '/idehus/grytkollen.jpg',
    floors: 2,
    bedrooms: 3,
    bathrooms: 2,
    bra: 129.9,
    description:
      'Grytkollen er en kompakt bolig med et klassisk fasadeuttrykk og effektiv planløsning.',
  },

  {
    id: 2,
    url: 'https://www.idehus.no/hus/1528/blatind',
    name: 'Blåtind',
    image: '/idehus/blatind.jpg',
    floors: 2,
    bedrooms: 4,
    bathrooms: 2,
    bra: 128.1,
    description:
      'Blåtind er en tidløs, praktisk bolig med en spennende planløsning. Boligen har en stor og åpen stue- og kjøkkenløsning i 2. etasje.',
  },
  {
    id: 3,
    url: 'https://www.idehus.no/hus/1520/hinnstein',
    name: 'Hinnstein',
    image: '/idehus/hinnstein.jpg',
    floors: 3,
    bathrooms: 4,
    bedrooms: 4,
    bra: 308.8,
    description:
      'Hinnstein er en stor og klassisk bolig over 3 plan. Boligen har mulighet for utleie i sokkel på nesten 60m².',
  },
] as const;

export default houses;
