import Image, { StaticImageData } from 'next/image';
import img2 from '../../../public/byggefelt/tomt/flyover_2_25s.png';
import img2Full from '../../../public/byggefelt/tomt/flyover_2_50s.png';
import img3 from '../../../public/byggefelt/tomt/flyover_3_25s.png';
import img3Full from '../../../public/byggefelt/tomt/flyover_3_50s.png';
import img4 from '../../../public/byggefelt/tomt/flyover_4_25s.png';
import img4Full from '../../../public/byggefelt/tomt/flyover_4_50s.png';
import img5 from '../../../public/byggefelt/tomt/flyover_5_25s.png';
import img5Full from '../../../public/byggefelt/tomt/flyover_5_50s.png';
import img6 from '../../../public/byggefelt/tomt/flyover_6_25s.png';
import img6Full from '../../../public/byggefelt/tomt/flyover_6_50s.png';
import img7 from '../../../public/byggefelt/tomt/flyover_cover_3_50s.png';
import img7Full from '../../../public/byggefelt/tomt/flyover_cover_3_50s.png';
import img8 from '../../../public/byggefelt/tomt/flyover_8_25s.png';
import img8Full from '../../../public/byggefelt/tomt/flyover_8_50s.png';
import img9 from '../../../public/byggefelt/tomt/flyover_9_25s.png';
import img9Full from '../../../public/byggefelt/tomt/flyover_9_50s.png';
import img10 from '../../../public/byggefelt/tomt/flyover_10_25s.png';
import img10Full from '../../../public/byggefelt/tomt/flyover_10_50s.png';
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline';

type ImageDescription = {
  src: StaticImageData;
  alt: string;
  srcFull?: StaticImageData['src'];
};

const images: ImageDescription[] = [
  {
    src: img8,
    srcFull: img8Full.src,
    alt: 'Boligfeltet retning nordover',
  },
  { src: img2, alt: 'Boligfeltet retning vestover', srcFull: img2Full.src },
  { src: img3, alt: 'Boligfeltet retning sør-vest', srcFull: img3Full.src },
  {
    src: img9,
    alt: 'Boligfeltet retning sørover',
    srcFull: img9Full.src,
  },
  {
    src: img10,
    alt: 'Boligfeltet retning østover innover dalen mot Laugen',
    srcFull: img10Full.src,
  },
  {
    src: img4,
    alt: 'Dronebilde av boligfeltet sett ovenfra. Viser tomtene 6-12, retning vestover',
    srcFull: img4Full.src,
  },
  {
    src: img5,
    alt: 'Dronebilde av hele boligfeltet sett ovenfra. Bildet er tatt i retning vestover',
    srcFull: img5Full.src,
  },
  {
    src: img6,
    alt: 'Dronebilde av boligfeltet sett ovenfra. Viser tomtene 1-5. Bildet er tatt i retning vestover',
    srcFull: img6Full.src,
  },
  {
    src: img7,
    alt: 'Postkortbilde av hele boligfeltet med utsikt innover mot stenbruddet og Litlslemsjøen',
    srcFull: img7Full.src,
  },
];

function ImageCarousel() {
  return (
    <div className="w-full">
      <div className="flex w-full flex-row gap-5 overflow-y-auto bg-white pb-5">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative flex min-w-80 flex-col gap-1.5 sm:min-w-[500px] lg:min-w-[700px]">
            <Image
              placeholder="blur"
              sizes={`${img.src.src} 25w, ${img.srcFull} 50w`}
              src={img.src}
              alt={img.alt}
              width={700}
              title={img.alt}
              className="rounded-md bg-cover bg-center bg-no-repeat shadow-md"
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
      </div>
    </div>
  );
}

export default ImageCarousel;
