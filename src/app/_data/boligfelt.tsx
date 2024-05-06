interface DocumentsData {
  url: string;
  name: string;
  image: string;
  id: number;
  description: string;
}

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
    name: 'Reguleringsbestemmelser for Hegglia Boligfelt',
    image: '/byggefelt/reguleringsbestemmelser.png',
    description:
      'Dokumentet gir en oversikt over hvilke formål området til boligfeltet er regulert for og i hvilken rekkefølge utbyggingsarbeidet skal følge.',
  },
  {
    id: 2,
    url: 'https://www.skaun.kommune.no/getfile.php/5243508.1720.ibzlajlzjlz7ib/Planbeskrivelse%5B3%5D.pdf',
    name: 'Reguleringsplan for Hegglia Boligfelt',
    image: '/byggefelt/reguleringsplan.png',
    description:
      'Dokumentet inneholder informasjon om forhold som kan påvirke boligfeltutbygging, slik som informasjon om grunnforhold og arealplanlegging for lek- og uteopphold. Utformet av On Arkitekter og Ingeniører AS.',
  },
  {
    id: 3,
    url: 'https://www.skaun.kommune.no/getfile.php/5243505.1720.wzpnkqqljibitn/201303+ROS-analyse+Hegglia+boligfelt.pdf',
    name: 'Risiko- og sårbarhetsanalyse for Hegglia Boligfelt',
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
      'Kunngjøring av vedtatt reguleringsplan for nytt boligfelt - Hegglia gnr/bnr 85/1 på Skaun kommune sine nettsider.',
  },
] as const;

export default documents;
