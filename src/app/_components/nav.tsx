import Image from 'next/image';
import Link from 'next/link';

function Nav() {
  return (
    <header className="sticky top-0 flex w-full items-center justify-between bg-teal-950 px-5 py-3">
      <div className="flex items-center justify-start gap-5">
        <div>
          <Link
            href="/"
            className="flex items-center gap-5 text-xl font-extrabold text-slate-200 xl:text-2xl dark:text-slate-200">
            <Image
              width={32}
              height={32}
              className="h-8 w-8"
              src="/favicon.svg"
              alt="Logo"
            />
            <span className="hidden sm:flex">Hegglia Boligfelt</span>
          </Link>
        </div>
      </div>
      <a
        href={`mailto:kontakt@heggliaboligfelt.no`}
        className={`rounded-sm border border-teal-800 px-3 py-1.5 text-xs font-normal text-white hover:bg-teal-700 focus:shadow-[0_0_0_2px] focus:shadow-teal-700 focus:outline-none`}>
        Kontakt oss
      </a>
    </header>
  );
}

export default Nav;
