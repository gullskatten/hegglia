import Image from 'next/image';
import Link from 'next/link';

function Nav() {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center justify-between bg-teal-950 px-5 py-3">
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
    </header>
  );
}

export default Nav;
