import Link from "next/link"
import { Balancer } from "react-wrap-balancer"
import { Icons } from "@/components/icons"

export const Header = () => {
    return (
        <header className="flex flex-col self-start gap-8 md:w-[850px]">
        <div className="h-24 w-24 rounded bg-gradient-to-r from-blue-600 to-green-600" />
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold mb-0">
            <Balancer>I&apos;m Cesar, a Front-end Developer.</Balancer>
          </h1>
          <p className="text-gray-600">
            I am aI like to learn new technologies and create applications.
          </p>
          <div className="flex gap-4">
            <Link target="_blank" href="https://twitter.com/cesardotdev">
              <Icons.twitter className="w-5 h-5 text-gray-600 hover:text-gray-900" />
            </Link>
            <Link target="_blank" href="https://github.com/cesarsdcf">
              <Icons.github className="w-5 h-5 text-gray-600 hover:text-gray-900" />
            </Link>
          </div>
        </div>
      </header>
    )
}