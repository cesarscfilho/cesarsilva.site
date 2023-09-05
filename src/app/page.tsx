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
    }
  ];

  return (
    <main className="max-w-6xl m-auto my-6 rounded-md flex flex-col md:flex-row">
     <Header />
      <section className="mt-10">
        <h2 className="text-2xl font-medium mb-5">Projects</h2>
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
