import { env } from "@/env.mjs"
import { Redis } from "@upstash/redis"

export const redis = new Redis({
  url: "https://stirred-liger-42177.upstash.io",
  token: env.REDIS_KEY,
})
