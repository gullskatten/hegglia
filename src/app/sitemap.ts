import { Metadata, MetadataRoute } from 'next';
import { boligfeltData } from './_data/boligfelt';

function generateData(): MetadataRoute.Sitemap {
  return boligfeltData.map((tomt) => ({
    url: `https://www.heggliaboligfelt.no/tomter/${tomt.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.heggliaboligfelt.no',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.heggliaboligfelt.no/utforsk',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `https://www.heggliaboligfelt.no/tomter`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://www.heggliaboligfelt.no/galleri',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...generateData(),
  ];
}
