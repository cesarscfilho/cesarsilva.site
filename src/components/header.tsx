import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Balancer } from "react-wrap-balancer"

import { ModeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { siteConfig } from "@/lib/config"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { FileIcon } from "lucide-react"

export const Header = () => {
  return (
    <header className="space-y-3">
      <div className="flex justify-between">
        <h1 className="text-xl font-extrabold mb-0">
          <Balancer>Hi,</Balancer>
        </h1>
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
      </div>
    </header>
  )
}
