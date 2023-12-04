import { Balancer } from "react-wrap-balancer"
import { Project } from "@/components/project";
import { ModeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import { badgeVariants } from "@/components/ui/badge";
import { ContactButton } from "@/components/contact-button";

export default function Home() {

  return (
    <main className="grid items-center gap-8 pb-8 pt-6 md:py-8 container max-w-3xl py-3">
      <section className="flex flex-row justify-between prose prose-neutral dark:prose-invert">
        <div className="space-y-3"> 
          <h1 className="text-xl font-extrabold mb-0">
            <Balancer>Hi,</Balancer>
          </h1>
          <p >  
            Sou <span className="font-bold">Cesar Silva</span>, desenvolvedor fullstack mas atualmente focado no front-end construindo aplicações para a web e dispositivos móveis.
          </p>
          <p>
            Comecei a construir um projeto open-source chamado <Link target="_blank" href="https://bidshop.vercel.app/" className={cn(badgeVariants({variant: "secondary"}), "p-1 no-underline")} >Bidshop</Link>, uma plataforma de venda e compra online de produtos, onde é possível enviar ofertas para o vendedor e conversar com ele em tempo real através de um chat dentro do aplicativo.
          </p>
     
          <ContactButton/>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 self-start">
          <Link target="_blank" href={siteConfig.links.linkedin} className={cn(buttonVariants({variant: "outline", size:"icon" }))}>

            <LinkedInLogoIcon className="h-4 w-4" />
            <span className="sr-only">LinkedIn link</span>
          </Link>
          <Link target="_blank" href={siteConfig.links.github} className={cn(buttonVariants({variant: "outline", size:"icon" }))}>
            <GitHubLogoIcon className="h-4 w-4" />
            <span className="sr-only">Github link</span>
          </Link>
          <ModeToggle />
        </div>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-medium mb-5">Projetos</h2>
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
        {/* <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: 'outline',
                  className: 'mx-auto flex w-fit',
                }),
              )}
            >
              Ver mais
              <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
              <span className="sr-only">Ver mais</span>
        </Link> */}
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-medium mb-5">Works</h2>
      </section>
    </main>
  );
}
