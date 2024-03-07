import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import React from "react"

const shellVariants = cva("", {
  variants: {
    variant: {
      default: "",
      main: "mx-auto w-full max-w-3xl px-4 lg:px-20 pt-4 md:pt-10 space-y-6",
    },
    defaultVariants: {
      variant: "default",
    },
  },
})

interface ShellProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof shellVariants> {
  as?: React.ElementType
}

export function Shell({
  className,
  as: Comp = "section",
  variant,
  ...props
}: ShellProps) {
  return (
    <Comp className={cn(shellVariants({ variant }), className)} {...props} />
  )
}
