import { format, subDays } from "date-fns"

import { env } from "@/env.mjs"

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDate(sub: number = 0) {
  const dateXDaysAgo = subDays(new Date(), sub)

  return format(dateXDaysAgo, "dd/MM/yyyy")
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}
