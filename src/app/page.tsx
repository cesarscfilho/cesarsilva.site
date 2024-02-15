import { Balancer } from "react-wrap-balancer"
import { Project } from "@/components/project";
import { ModeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon, FileIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

import { Work } from "@/components/work";
import { AlertBar } from "@/components/alertbar";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Icons } from "@/components/icons";
import { badgeVariants } from "@/components/ui/badge";

export default async function Home() {
  return (
    <main className="grid items-center gap-8 pb-8 pt-6 md:py-8 container max-w-3xl py-3">
      <section className="flex flex-row justify-between prose prose-neutral dark:prose-invert">
        <div className="space-y-3"> 
        <div className="flex justify-between">
          <h1 className="text-xl font-extrabold mb-0">
            <Balancer>Hi,</Balancer>
          </h1>
          <div className="flex flex-row items-center gap-4 self-start">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link target="_blank" href={siteConfig.links.linkedin} className={cn(buttonVariants({variant: "outline", size:"icon" }))}>
                  <LinkedInLogoIcon className="h-4 w-4" />
                  <span className="sr-only">LinkedIn link</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                LinkedIn
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
              <Link target="_blank" href={siteConfig.links.github} className={cn(buttonVariants({variant: "outline", size:"icon" }))}>
                <GitHubLogoIcon className="h-4 w-4" />
                <span className="sr-only">Github link</span>
              </Link>
              </TooltipTrigger>
              <TooltipContent>
                Github
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link target="_blank" href={siteConfig.links.resumeDowload} className={cn(buttonVariants({variant: "outline", size:"icon" }))}>
                  <FileIcon className="h-4 w-4" />
                  <span className="sr-only">Resume dowload</span>
                </Link>
              </TooltipTrigger>
                <TooltipContent>
                  CV Dowload
                </TooltipContent>
              </Tooltip>
          </TooltipProvider>
          <ModeToggle />
        </div>
        </div>
          <p>  
            Sou <span className="font-bold">Cesar Silva</span>, desenvolvedor fullstack mas atualmente focado no front-end construindo aplicações para a web e dispositivos móveis.
          </p>
          <p>
            Atualmente estou construindo um projeto open-source chamado <Link target="_blank" href="https://menup-navy.vercel.app/" className={cn(badgeVariants({variant: "secondary"}), "p-1 no-underline")}>Menup</Link>, uma plataforma de cardapio online construída com os recursos mais recentes do NextJs.
          </p>
          <AlertBar />
        </div>

      </section>
      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-5 flex items-center">Projetos</h2>
        <ul className="flex flex-col space-y-7">
          {siteConfig.projects.map((project, i) => (
           <Project 
            key={i}
            title={project.title}
            description={project.description}
            links={project.links}/>
          ))}

          {siteConfig.projects.length === 0 && (
            <h1 className="text-gray-500">No projects...</h1>
          )}
        </ul>
        <Link
          href="https://github.com/cesarscfilho"
          target="_blank"
          className={cn(
            buttonVariants({
              variant: 'link',
              className: 'mx-auto flex w-fit mt-3',
            }),
          )}
        >
          Ver mais
          <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
          <span className="sr-only">Ver mais</span>
        </Link>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-5 flex items-center"><Icons.works className="h-7 w-7 mr-2" /> Experiências</h2>
        <ul className="flex flex-col space-y-7">
        {siteConfig.works.map((work, i) => (
            <Work key={work.title} title={work.title} description={work.description} time={work.time} />
        ))}
        </ul>
      </section>
    </main>
  );
}
