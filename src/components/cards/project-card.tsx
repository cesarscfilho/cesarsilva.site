// Modified from: https://github.com/shadcn-ui/ui/blob/main/apps/www/app/examples/cards/components/github-card.tsx

import Link from "next/link"

import { StarIcon } from "@radix-ui/react-icons"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="rounded-sm">
      <Link
        href={project.links.urlGithub}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col transition-colors hover:bg-muted/25"
      >
        <CardHeader className="flex-1">
          <div className="space-y-1">
            <CardTitle className="line-clamp-1">{project.title}</CardTitle>
            <CardDescription className="line-clamp-2">
              {project.description ?? "No description provided"}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Icons.circle
                className="mr-1 h-3 w-3 fill-current text-[#3178c6]"
                aria-hidden="true"
              />
              {project.language ?? "Unknown"}
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
