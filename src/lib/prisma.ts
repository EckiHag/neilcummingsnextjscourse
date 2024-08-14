// prisma.ts
// const fs = require("fs")
import "@/envConfig" // Läd die Umgebungsvariablen mit @next/env
import { PrismaClient } from "@prisma/client"

console.log("DATABASE_URL:", process.env.DATABASE_URL)

export const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
})

// const logStream = fs.createWriteStream("@/to/your/prisma.log", { flags: "a" })

// console.log = (msg) => logStream.write(msg + "\n")
// console.error = (msg) => logStream.write(msg + "\n")

// const globalForPrisma = global as unknown as { prisma: PrismaClient }

// export const prisma = globalForPrisma.prisma || new PrismaClient({ log: ["query"] })

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
