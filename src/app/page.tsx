import { Balancer } from "react-wrap-balancer"
import { Project } from "@/components/project";
import { Project as ProjectType } from "@/types/project";
import { ModeToggle } from "@/components/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

export default function Home() {
  const projects: ProjectType[] = [
    {
      title: "Form Mult Step",
      description: "Mult Step Form whith Shadcn/iu and React Hook Form",
      links: {
        url: "https://auth-mult-step-shadcn.vercel.app/",
        urlGithub: "https://github.com/cesarsdcf/auth-mult-step-shadcn"
      }
    },
    {
      title: "TheStore",
      description: "This is an open source project for a store product manager build with everything new in Next.js 13.",
      links: {
        url: "https://thestore-tau.vercel.app/",
        urlGithub: "https://github.com/cesarsdcf/thestore"
      }
    },
    {
      title: "Trilhos Precisos Ltda.",
      description: "É uma empresa fictícia criada no ChatGPT para aprimorar e mostrar minhas habilidades em desenvolvimento de aplicativos Web com NextJs.",
      links: {
        url: "https://hs-site-fawn.vercel.app/",
        urlGithub: "https://github.com/cesarsdcf/trilhos-precisos"
      }
    }
  ];

  return (
    <main className="grid items-center gap-8 pb-8 pt-6 md:py-8 container max-w-3xl py-3">
      <section className="flex flex-row justify-between">
        <div className="space-y-3"> 
          <h1 className="text-xl font-extrabold mb-0">
            <Balancer>I&apos;m Cesar</Balancer>
          </h1>
          <p>
            I am aI like to learn new technologies and create applications.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link href={siteConfig.links.linkedin} className={cn(buttonVariants({variant: "outline", size:"icon" }))}>

            <LinkedInLogoIcon className="h-4 w-4" />
            <span className="sr-only">LinkedIn link</span>
          </Link>
          <Link href={siteConfig.links.github} className={cn(buttonVariants({variant: "outline", size:"icon" }))}>
            <GitHubLogoIcon className="h-4 w-4" />
            <span className="sr-only">Github link</span>
          </Link>
          <ModeToggle />
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-md font-medium mb-5">Projects</h2>
        <ul className="md:grid lg:grid-cols-2 gap-4 flex flex-col mt-3">
          {projects.map((project, i) => (
           <Project 
            key={i}
            title={project.title}
            description={project.description}
            links={project.links}/>
          ))}

          {projects.length === 0 && (
            <h1 className="text-gray-500">No projects...</h1>
          )}
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="text-md font-medium mb-5">Works</h2>
        
      </section>
    </main>
  );
}
