import { buttonVariants } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { siteConfig } from "@/lib/config"

import { Work } from "@/components/work"

import { Icons } from "@/components/icons"
import { badgeVariants } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { ProjectCard } from "@/components/cards/project-card"
import { cn } from "@/lib/utils"

export default async function Home() {
  return (
    <>
      <Header />
      <section className="my-6">
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            Sou <span className="font-bold">Cesar Silva</span>, desenvolvedor
            fullstack mas atualmente focado no front-end construindo aplicações
            para a web e dispositivos móveis.
          </p>
          <p>
            Minhas principais techs incluem ReactJS, React Native/Expo, NextJs,
            Prisma/Drizzle, TypeScript, TailwindCss e Styled Components.
          </p>
          <p>
            Atualmente estou construindo um projeto open-source chamado{" "}
            <Link
              target="_blank"
              href="https://menup-navy.vercel.app/"
              className={cn(
                badgeVariants({ variant: "secondary" }),
                "p-1 no-underline"
              )}
            >
              Menup
            </Link>
            , uma plataforma de cardapio online construída com os recursos mais
            recentes do NextJs.
          </p>
        </div>
      </section>
      {/* <AlertBar /> */}
      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-5 flex items-center">Projetos</h2>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {siteConfig.projects.map((project, i) => {
            const logo = project.logo ?? "logoempty"
            return <ProjectCard key={i} project={project} />
          })}

          {siteConfig.projects.length === 0 && (
            <h1 className="text-gray-500">No projects...</h1>
          )}
        </ul>
        <Link
          href="https://github.com/cesarscfilho"
          target="_blank"
          className={cn(
            buttonVariants({
              variant: "link",
              className: "mx-auto flex w-fit mt-3",
            })
          )}
        >
          Ver mais
          <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
          <span className="sr-only">Ver mais</span>
        </Link>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-5 flex items-center">
          <Icons.works className="h-7 w-7 mr-2" /> Experiências
        </h2>
        <ul className="flex flex-col space-y-7">
          {siteConfig.works.map((work, i) => (
            <Work
              key={work.title}
              title={work.title}
              description={work.description}
              time={work.time}
            />
          ))}
        </ul>
      </section>
    </>
  )
}
