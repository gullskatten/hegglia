import Link from "next/link"
import Nav from "./_components/nav"

export default function Custom404() {
  return (
  <div>
    <Nav />
    <div className="flex justify-center items-center h-screen gap-5 p-3 flex-col">
      <h2 className="text-4xl font-bold text-teal-100">404</h2>
      <h1 className="sm:text-2xl text-xl text-center">Denne siden eksisterer ikke. 😢</h1>
      <Link href="/">
        <span className="text-teal-200 underline underline-offset-2">Gå tilbake til forsiden</span>
      </Link>
      </div>
  </div>
  )
}