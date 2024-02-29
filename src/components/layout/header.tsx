import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { ModeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { buttonVariants } from "../ui/button"

import { FileIcon } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Shell } from "../shells/shell"
import { CONFIG } from "@/config"
import React from "react"

export const Header = () => {
  return (
    <Shell
      as="header"
      className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 w-full max-w-3xl"
    >
      <div className="flex flex-row items-center space-x-3">
        <React.Suspense
          fallback={<div className="rounded-full h-[48px] w-[48px] bg-muted" />}
        >
          <Image
            src={CONFIG.image}
            alt="Github profile image"
            width={100}
            height={100}
            className="rounded-full h-[48px] w-[48px]"
          />
        </React.Suspense>
        <div className="flex flex-col">
          <span className="font-semibold">{CONFIG.name}</span>
          <span className="text-muted-foreground">{CONFIG.title}</span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 self-start">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                href={CONFIG.links.linkedin}
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
                href={CONFIG.links.github}
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
                href={CONFIG.links.resumeDowload}
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
    </Shell>
  )
}
