import { Icons } from "@/components/icons"

export type Project = {
  title: string
  description: string
  language: string
  links: {
    urlGithub: string
    url?: string
  }
}
