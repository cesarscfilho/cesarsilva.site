import { Project } from "@/types/project";

export const siteConfig = {
  name: "cesarsilva",
  description: "Site pessoal de Cesar Silva, construído com Next.js.",
  links: {
    linkedin: "https://www.linkedin.com/in/cesar-silva-950126232/",
    github: "https://github.com/cesarscfilho",
    resumeDowload: "https://drive.google.com/uc?export=download&id=1aEhUeQ0VBvu7ysSdCJS9SYYWvJ4qDOUE"
  },
  ogImage: "https://www.cesarsilva.site/opengraph-image.png",
  url: "https://www.cesarsilva.site",
  projects: [
    {
      logo: "menuplogo",
      title: "Menup",
      description: "Entrega de comida on-line sem esforço ao seu alcance.",
      links: {
        urlGithub: "https://github.com/cesarscfilho/menup-v1",
        url: "https://menup-navy.vercel.app/"
      }
    },
    {
      title: "Easybee - React Native",
      description: "A proposta inicial deste projeto em React Native/Expo era aprimorar o front-end de um aplicativo já existente em produção, de uma empresa em que trabalhava.",
      links: {
        urlGithub: "https://github.com/cesarscfilho/easybee"
      }
    },
    {
      title: "Sneakers",
      description: "É uma empresa fictícia criada no ChatGPT para aprimorar e mostrar minhas habilidades em desenvolvimento de aplicativos Web com NextJs.",
      links: {
        url: "https://sneakers-chi-orpin.vercel.app/",
        urlGithub: "https://github.com/cesarscfilho/sneakers"
      }
    },
    {
      title: "Form Mult Step",
      description: "Mult Step Form with Shadcn/iu and React Hook Form",
      links: {
        url: "https://mult-step-shadcn.vercel.app/",
        urlGithub: "https://github.com/cesarscfilho/auth-mult-step-shadcn"
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
  works: [
    {
      title: "Ancarp",
      description: "Uma empresa de desenvolvimento de software, atuei como desenvolvedor front-end com ReactJs, React Native e TypeScript.",
      time: "2023 - 8 meses",
    },
    {
      title: "DRT Sistemas",
      description: "Uma empresa de marketing digital onde eu era responsavél por fazer manutenção e melhorias no site em PHP, Wordpress.",
      time: "2022 - 6 meses",
    },
  ]
}

