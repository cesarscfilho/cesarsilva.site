import { Icons } from "@/components/Icons";
import { StarIcon } from "lucide-react";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

export default function Home() {
  type Project = {
    title: string;
    description: string;
    urlGithub: string;
    url: string;
  };

  const projects: Project[] = [];

  return (
    <main className="max-w-6xl m-auto my-6 rounded-md flex flex-col md:flex-row">
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

      <section className="mt-10">
        <h2 className="text-2xl font-medium mb-5">Projects</h2>
        <ul className="md:grid lg:grid-cols-2 gap-4 flex flex-col mt-3">
          {projects.map((project) => (
            <li
              key={project.title}
              className="rounded-md border bg-white border-gray-300 list-none"
            >
              <div className="p-6 hover:border-gray-400 rounded-sm ">
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-medium">{project.title}</h4>
                    <p className="line-clamp-2">{project.description}</p>
                  </div>
                  <div className="flex-col sm:flex-row gap-2 mt-4 flex items-start sm:items-center justify-center sm:justify-between">
                    <div className="flex items-center justify-start gap-4">
                      <Link href={project.urlGithub}>
                        <Icons.github className="w-4 h-4 hover:scale-110" />
                      </Link>
                      <Link href={project.url}>
                        <Icons.externallink className="w-4 h-4 hover:scale-110" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}

          {projects.length === 0 && (
            <p className="text-gray-500 text-center">No projects...</p>
          )}
        </ul>
      </section>
    </main>
  );
}
