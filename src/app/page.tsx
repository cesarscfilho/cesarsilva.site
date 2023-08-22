import { Icons } from "@/components/Icons";
import { cn } from "@/libs/utils";
import { StarIcon } from "lucide-react";
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
            <Link
              className="text-gray-900 hover:text-gray-500"
              target="_blank"
              href="https://github.com/cesarsdcf"
            >
              <Icons.gitHub className="w-5 h-5" />
            </Link>

            <Link
              className="text-gray-900 hover:text-gray-500 "
              target="_blank"
              href="https://twitter.com/cesardotdev"
            >
              <Icons.twitter className="w-5 h-5 " />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative my-6">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-white"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white to-transparent"></div>
        <div className="border-t border-dashed border-gray-800"></div>
      </div>
      <div>
        <section>
          <h2 className="text-xl font-medium mb-1">Projects</h2>
          <ul className="md:grid md:grid-cols-2 gap-4 flex flex-col mt-3">
            <li className="rounded-md border bg-gray-50 border-gray-300 list-none hover:bg-gradient-to-r from-blue-300 to-blue-600 p-[2px]">
              <div className="p-6 hover:border-gray-400 bg-gray-50 rounded-sm h-full">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h4 className="text-lg font-medium">Lorem Ipsum</h4>
                    <p className="line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem ratione, ipsam odio dolores atque ducimus harum eos
                      qui tenetur delectus, aspernatur ab
                    </p>
                  </div>
                  <div className="flex-col sm:flex-row gap-2 mt-4 flex items-start sm:items-center justify-center sm:justify-between">
                    <div className="flex items-center justify-start gap-4">
                      <Icons.gitHub />
                    </div>
                    <div className="flex items-center justify-end gap-1">
                      <p className="mt-[1.5px]">1</p>
                      <StarIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="rounded-md border bg-gray-50 border-gray-300 list-none hover:bg-gradient-to-r from-blue-300 to-blue-600 p-[2px]">
              <div className="p-6 hover:border-gray-400 bg-gray-50 rounded-sm h-full">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h4 className="text-lg font-medium">Lorem Ipsum</h4>
                    <p className="line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem ratione, ipsam odio dolores atque ducimus harum eos
                      qui tenetur delectus, aspernatur ab
                    </p>
                  </div>
                  <div className="flex-col sm:flex-row gap-2 mt-4 flex items-start sm:items-center justify-center sm:justify-between">
                    <div className="flex items-center justify-start gap-4">
                      <Icons.gitHub />
                    </div>
                    <div className="flex items-center justify-end gap-1">
                      <p className="mt-[1.5px]">1</p>
                      <StarIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
