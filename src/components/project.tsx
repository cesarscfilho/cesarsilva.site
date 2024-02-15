
import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

interface ProjectProps {
  title: string;
  description: string;
  links: {
    urlGithub: string;
    url?: string;
  }
}

export const Project = ({ title, description, links }: ProjectProps) => {
  return (
    <li
      className="space-y-2"
    >
      <h2 className="font-semibold text-ml">{title}</h2>
      <p className="text-muted-foreground text-base">{description}</p>
      <Link target="_blank" href={links.urlGithub} className={cn(buttonVariants({ variant: "outline", size: "icon" }), "mr-2")}>
        <GitHubLogoIcon className="h-4 w-4" />
        <span className="sr-only">{title} repository link</span>
      </Link>
      {!links.url ?
        (null) : (
          <Link target="_blank" href={links.url} className={cn(buttonVariants({ variant: "outline", size: "icon" }))}>
            <Link1Icon className="h-4 w-4" />
            <span className="sr-only">{title} repository link</span>
          </Link>
        )}
    </li>
  )
}