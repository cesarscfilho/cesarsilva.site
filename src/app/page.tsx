import { buttonVariants } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { CONFIG } from "@/config"

import { badgeVariants } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { ProjectCard } from "@/components/cards/project-card"
import { cn } from "@/lib/utils"
import { Shell } from "@/components/shells/shell"
import { Heading } from "@/components/heading"
import { WorkCard } from "@/components/cards/work-card"

export default async function Home() {
  return (
    <>
      <Header />
      <Shell>
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
          {/* <p>
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
          </p> */}
        </div>
      </Shell>

      <Shell className="space-y-4">
        <Heading as="h3" size="h3" label="Projetos" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {CONFIG.projects.map((project, i) => {
            return <ProjectCard key={i} project={project} />
          })}

          {CONFIG.projects.length === 0 && (
            <h1 className="text-gray-500">No projects...</h1>
          )}
        </div>
        <Link
          href="https://github.com/cesarscfilho"
          target="_blank"
          className={cn(
            buttonVariants({
              variant: "link",
              className: "ml-auto flex w-fit mt-3",
            })
          )}
        >
          Ver mais
          <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
          <span className="sr-only">Ver mais</span>
        </Link>
      </Shell>

      <Shell className="space-y-4 pb-16">
        <Heading as="h3" size="h3" label="Experiências" />
        <div className="flex flex-col space-y-7">
          {CONFIG.works.map((work, i) => (
            <WorkCard key={work.title} work={work} />
          ))}
        </div>
      </Shell>
    </>
  )
}
