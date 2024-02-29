import { Redis } from "@upstash/redis"

export const redis = new Redis({
  url: "https://stirred-liger-42177.upstash.io",
  token: process.env.REDIS_KEY!,
})
