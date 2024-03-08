import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import React from "react"

const headingStyles = cva("scroll-m-20 font-semibold tracking-tigh", {
  variants: {
    size: {
      h1: "text-4xl font-extrabold lg:text-5xl",
      h2: "text-3xl font-bold transition-colors first:mt-0",
      h3: "text-2xl font-bold",
      h4: "text-xl font-semibold",
    },
    defaultSizes: {
      size: "h1",
    },
  },
})

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingStyles> {
  as?: React.ElementType
  label: string
}

export function Heading({
  className,
  size,
  label,
  as: Header = "h1",
  children,
  ...props
}: HeadingProps) {
  return (
    <Header className={cn(headingStyles({ size }), className)} {...props}>
      {label}
    </Header>
  )
}
