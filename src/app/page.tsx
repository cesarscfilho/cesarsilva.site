import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl m-auto my-6 rounded-md">
      <div className="flex flex-col md:grid md:grid-cols-6 items-start md:items-center justify-center gap-8">
        <div className="h-24 w-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
        <div className="col-span-5 space-y-3">
          <h1 className="text-4xl font-extrabold mb-0">
            I&apos;m Cesar, a Front-end Developer.
          </h1>
          <p>I like to learn new technologies and create applications.</p>
          <div className="flex gap-4">
            <Link target="_blank" href="https://github.com/cesarsdcf">
              <Github className="w-5 h-5" />
            </Link>
            <Link target="_blank" href="https://twitter.com/cesardotdev">
              <Twitter className="w-5 h-5 " />
            </Link>
          </div>
        </div>
      </div>
      <div className="my-6 bg-gray-300 h-[1px]" />
      <div>
        <h2 className="text-xl font-medium mb-1">Projects</h2>
      </div>
    </main>
  );
}
