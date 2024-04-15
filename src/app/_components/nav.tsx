import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <header className="px-5 flex justify-between items-center w-full sticky top-5 z-10">
      <div className="flex items-center justify-start gap-5">
        <div>
          <Link
            href="/"
            className="flex items-center gap-5 text-slate-200 dark:text-slate-200 font-extrabold text-xl xl:text-2xl"
          >
            <Image
              width={32}
              height={32}
              className="w-8 h-8"
              src="/favicon.svg"
              alt="Logo"
            />
            <span className="sm:flex hidden">
              Hegglia
            </span>
          </Link>
        </div>
      </div>
      <nav className="space-x-5">
        <Link href="/" className="font-medium underline underline-offset-2">
          Login
        </Link>
        <Link
          href="/download"
          className="text-sm truncate w-10 font-bold px-3 text-white"
        >
          Om Hegglia
        </Link>
      </nav>
    </header>
  );
}

export default Nav;