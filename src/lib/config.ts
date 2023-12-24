import { Project } from "@/types/project";

export const siteConfig = {
    name: "cesarsilva",
    description: "",
    links: {
        linkedin: "https://www.linkedin.com/in/cesar-silva-950126232/",
        github: "https://github.com/cesarsdcf",
        resumeDowload: "https://drive.google.com/uc?export=download&id=1aEhUeQ0VBvu7ysSdCJS9SYYWvJ4qDOUE"
    },
   projects: [
        {
          title: "Trilhos Precisos Ltda.",
          description: "É uma empresa fictícia criada no ChatGPT para aprimorar e mostrar minhas habilidades em desenvolvimento de aplicativos Web com NextJs.",
          links: {
            url: "https://hs-site-fawn.vercel.app/",
            urlGithub: "https://github.com/cesarsdcf/trilhos-precisos"
          }
        },
        {
          title: "Form Mult Step",
          description: "Mult Step Form whith Shadcn/iu and React Hook Form",
          links: {
            url: "https://auth-mult-step-shadcn.vercel.app/",
            urlGithub: "https://github.com/cesarsdcf/auth-mult-step-shadcn"
          }
        },
        // {
        //   title: "TheStore",
        //   description: "This is an open source project for a store product manager build with everything new in Next.js 13.",
        //   links: {
        //     url: "https://thestore-tau.vercel.app/",
        //     urlGithub: "https://github.com/cesarsdcf/thestore"
        //   }
        // },
      ] satisfies Project[],
      works:[
        {
          title: "DRT Sistemas",
          description:  "Uma empresa de marketing digital onde eu era responsal por fazer manutenção e melhorias no site que era em PHP, Wordpress.",
          time: "6 meses"
        },
        {
          title: "Ancarp",
          description:  "Uma empresa de desenvolvimento de software, atuei com desenvolvedor front-end com ReactJs, React Native e TypeScript.",
          time: "7 meses"
        }
      ]
}

