import { Icons } from "@/components/icons";

export type Project = {
    logo?: keyof typeof Icons
    title: string;
    description: string;
    links: {
      urlGithub: string;
      url?: string;
    }
  };