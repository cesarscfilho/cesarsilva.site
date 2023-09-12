import Link from "next/link"
import { Balancer } from "react-wrap-balancer"

export const Header = () => {
    return (
        <header className="flex flex-col self-start gap-8 md:w-[850px]">
        <div className="h-24 w-24 rounded bg-gradient-to-r from-blue-600 to-green-600" />
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold mb-0 text-blue-800">
            <Balancer>I&apos;m Cesar, a Front-end Developer.</Balancer>
          </h1>
          <p className="text-gray-600">
            I am aI like to learn new technologies and create applications.
          </p>
          <div className="flex gap-4">
            <Link className="text-primary underline-offset-4 hover:underline" target="_blank" href="https://twitter.com/cesardotdev">
              Twitter
            </Link>
            <Link className="text-primary underline-offset-4 hover:underline" target="_blank" href="https://github.com/cesarsdcf">
              GitHub
            </Link>
          </div>
        </div>
      </header>
    )
}