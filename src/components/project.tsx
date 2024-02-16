
import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

interface ProjectProps {
  logo: keyof typeof Icons
  title: string;
  description: string;
  links: {
    urlGithub: string;
    url?: string;
  }
}

export const Project = ({ title, description, links, logo }: ProjectProps) => {

  const Logo = Icons[logo] 
  
  return (
    <li
      className="flex flex-col justify-between space-y-2 p-4 border rounded-lg transition-colors hover:bg-muted/50"
    >
      <div className="flex flex-row items-center gap-2">
        {logo !== "logoempty" && <Logo className="size-12" />}
        <h2 className="font-semibold text-ml">{title}</h2>
      </div>
      <p className="text-muted-foreground text-base">{description}</p>
      <div>
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
      </div>
    </li>
  )
}