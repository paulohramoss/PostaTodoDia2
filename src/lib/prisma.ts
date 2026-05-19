/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client'
import path from 'path'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient(): PrismaClient {
  const BetterSqlite3 = require('better-sqlite3')
  const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3')
  const dbUrl = process.env.DATABASE_URL ?? 'file:./prisma/dev.db'
  // Handle both absolute and relative paths
  let dbPath = dbUrl.replace(/^file:/, '')
  if (!path.isAbsolute(dbPath)) {
    dbPath = path.join(process.cwd(), dbPath)
  }
  const db = new BetterSqlite3(dbPath)
  const adapter = new PrismaBetterSqlite3(db)
  return new PrismaClient({ adapter } as any)
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
