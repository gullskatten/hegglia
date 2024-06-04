import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hegglia Boligfelt',
    short_name: 'Hegglia',
    description:
      'Hegglia Boligfelt er et boligfelt under oppføring i Skaun kommune med umiddelbar nærhet til flotte naturopplevelser.',
    start_url: '/',
    display: 'standalone',
    background_color: '#042f2e',
    theme_color: '#134e4a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
