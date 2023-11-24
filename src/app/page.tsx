import { Header } from "@/components/header";
import { Project } from "@/components/project";
import { Project as ProjectType } from "@/types/project";

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
    <main className="max-w-6xl m-auto my-6 rounded-md flex flex-col">
     <Header />
      <section className="mt-10">
        <h2 className="text-2xl font-medium mb-5 text-blue-800">Projects</h2>
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
    </main>
  );
}
