import { Pool } from "pg"
import { drizzle } from "drizzle-orm/node-postgres"

const globalForDb = globalThis as unknown as { blogPool?: Pool }

export const pool =
  globalForDb.blogPool ??
  new Pool({ connectionString: process.env.NEXT_DATABASE_URL })
if (process.env.NODE_ENV !== "production") globalForDb.blogPool = pool

export const db = drizzle(pool)
