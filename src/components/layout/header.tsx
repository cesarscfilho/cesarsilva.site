import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { ModeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { siteConfig } from "@/lib/config"
import { buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"
import { FileIcon } from "lucide-react"
import Image from "next/image"

export const Header = () => {
  return (
    <header className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 w-full max-w-3xl">
      <div className="flex flex-row items-center space-x-3">
        <Image
          src={siteConfig.image}
          alt="Github profile image"
          width={100}
          height={100}
          className="rounded-full h-[48px] w-[48px]"
        />
        <div className="flex flex-col">
          <span className="font-semibold">Cesar Silva</span>
          <span className="text-muted-foreground">Desenvolvedor</span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 self-start">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                href={siteConfig.links.linkedin}
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" })
                )}
              >
                <LinkedInLogoIcon className="h-4 w-4" />
                <span className="sr-only">LinkedIn link</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>LinkedIn</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                href={siteConfig.links.github}
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" })
                )}
              >
                <GitHubLogoIcon className="h-4 w-4" />
                <span className="sr-only">Github link</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>Github</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                href={siteConfig.links.resumeDowload}
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" })
                )}
              >
                <FileIcon className="h-4 w-4" />
                <span className="sr-only">Resume dowload</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>CV Dowload</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <ModeToggle />
      </div>
    </header>
  )
}
