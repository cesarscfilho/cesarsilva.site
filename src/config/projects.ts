import { Project } from "@/types/project"

export const projects = [
  // {
  //   title: "Menup",
  //   description: "Entrega de comida on-line sem esforço ao seu alcance.",
  //   links: {
  //     urlGithub: "https://github.com/cesarscfilho/menup-v1",
  //     url: "https://menup-navy.vercel.app/",
  //   },
  //   language: "TypeScript",
  // },
  {
    title: "Sneakers",
    description:
      "É uma empresa fictícia criada no ChatGPT para aprimorar e mostrar minhas habilidades em desenvolvimento de aplicativos Web com NextJs.",
    links: {
      url: "https://sneakers-chi-orpin.vercel.app/",
      urlGithub: "https://github.com/cesarscfilho/sneakers",
    },
    language: "TypeScript",
  },
  {
    title: "Form Mult Step",
    description: "Mult Step Form with Shadcn/iu and React Hook Form",
    links: {
      url: "https://mult-step-shadcn.vercel.app/",
      urlGithub: "https://github.com/cesarscfilho/mult-step-shadcn",
    },
    language: "TypeScript",
  },
] satisfies Project[]
