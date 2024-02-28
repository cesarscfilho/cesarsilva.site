interface WorkProps {
  title: string
  description: string
  time: string
}

export function Work({ title, description, time }: WorkProps) {
  return (
    <div className="space-y-2">
      <div className="flex flex-row gap-2">
        <h2 className="font-semibold text-ml">{title}</h2>
        <span className="text-muted-foreground">{time}</span>
      </div>
      <p className="text-muted-foreground text-base">{description}</p>
    </div>
  )
}
