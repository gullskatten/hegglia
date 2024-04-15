import Link from "next/link";

function Footer() {
  return (
    <div className="flex justify-center items-center gap-5 p-5">
      <Link
        href="/"
        className="font-medium underline underline-offset-2 text-xs sm:text-sm"
      >
        Personvernerklæring
      </Link>
    </div>
  );
}

export default Footer;