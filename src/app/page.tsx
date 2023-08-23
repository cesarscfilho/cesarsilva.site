import { Icons } from "@/components/Icons";
import { StarIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-6xl m-auto my-6 rounded-md flex flex-col md:flex-row">
      <header className="flex w-[800px] flex-col self-start gap-8 pt-8">
        <div className="h-24 w-24 rounded bg-gradient-to-r from-purple-600 to-blue-600" />
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold mb-0">
            I&apos;m Cesar, a Front-end Developer.
          </h1>
          <p className="text-gray-500">
            I like to learn new technologies and create applications.
          </p>
        </div>
      </header>

      <section>
        <h2 className="text-xl font-medium mb-1">Projects</h2>
        <ul className="md:grid lg:grid-cols-2 gap-4 flex flex-col mt-3">
          <li className="rounded-md border bg-white border-gray-300 list-none">
            <div className="p-6 hover:border-gray-400  rounded-sm h-full">
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
                    <Link href={"/"}>
                      <Icons.gitHub className="w-4 h-4 hover:scale-110" />
                    </Link>
                    <Link href={"/"}>
                      <Icons.externallink className="w-4 h-4 hover:scale-110" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <p className="mt-[1.5px]">1</p>
                    <StarIcon className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="rounded-md border bg-white border-gray-300 list-none">
            <div className="p-6 hover:border-gray-400  rounded-sm h-full">
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
                    <Link href={"/"}>
                      <Icons.gitHub className="w-4 h-4 hover:scale-110" />
                    </Link>
                    <Link href={"/"}>
                      <Icons.externallink className="w-4 h-4 hover:scale-110" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <p className="mt-[1.5px]">1</p>
                    <StarIcon className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="rounded-md border bg-white border-gray-300 list-none">
            <div className="p-6 hover:border-gray-400  rounded-sm h-full">
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
                    <Link href={"/"}>
                      <Icons.gitHub className="w-4 h-4 hover:scale-110" />
                    </Link>
                    <Link href={"/"}>
                      <Icons.externallink className="w-4 h-4 hover:scale-110" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <p className="mt-[1.5px]">1</p>
                    <StarIcon className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="rounded-md border bg-white border-gray-300 list-none">
            <div className="p-6 hover:border-gray-400  rounded-sm h-full">
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
                    <Link href={"/"}>
                      <Icons.gitHub className="w-4 h-4 hover:scale-110" />
                    </Link>
                    <Link href={"/"}>
                      <Icons.externallink className="w-4 h-4 hover:scale-110" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <p className="mt-[1.5px]">1</p>
                    <StarIcon className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="rounded-md border bg-white border-gray-300 list-none">
            <div className="p-6 hover:border-gray-400  rounded-sm h-full">
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
                    <Link href={"/"}>
                      <Icons.gitHub className="w-4 h-4 hover:scale-110" />
                    </Link>
                    <Link href={"/"}>
                      <Icons.externallink className="w-4 h-4 hover:scale-110" />
                    </Link>
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
    </main>
  );
}
