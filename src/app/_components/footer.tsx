import { FaceSmileIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function Footer() {
  return (
    <div>
      <section className="flex w-full flex-col items-center gap-8 rounded-t-lg bg-teal-950 px-5 py-10 sm:rounded-t-none">
        <div className="flex flex-col items-center justify-center gap-1.5">
          <p className="opacity-60">Interessert eller spørsmål?</p>
          <h3 className="flex items-center gap-1.5 text-3xl font-bold text-white">
            Kontakt oss! <FaceSmileIcon className="h-8 w-8 text-amber-100" />
          </h3>
        </div>

        <div className="flex flex-col gap-5">
          <a
            href="mailto:kontakt@heggliaboligfelt.no"
            className="flex items-center justify-center">
            <span className="text-amber-100">kontakt@heggliaboligfelt.no</span>
          </a>
          <a href="tel:90959595" className="flex items-center justify-center">
            <span className="text-amber-100">Tlf. 90 95 95 95</span>
          </a>
          <p className="text-center text-white">
            Hegglia Boligfelt AS (Org.nr, 929604954)
            <br />
            Melbyvegen, 7357 Skaun
          </p>
        </div>
      </section>
      <div className="flex items-center justify-center gap-5 p-5">
        <Link
          href="/"
          className="text-xs font-medium underline underline-offset-2 sm:text-sm">
          Personvernerklæring
        </Link>
      </div>
    </div>
  );
}

export default Footer;
