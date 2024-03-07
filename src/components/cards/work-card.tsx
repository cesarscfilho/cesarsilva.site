import { Work } from "@/types/work"

interface WorkCardProps {
  work: Work
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="space-y-2">
      <div className="flex flex-row gap-2">
        <h2 className="font-semibold text-ml">{work.title}</h2>
        <span className="text-muted-foreground">{work.time}</span>
      </div>
      <p className="text-muted-foreground text-base">{work.description}</p>
    </div>
  )
}
