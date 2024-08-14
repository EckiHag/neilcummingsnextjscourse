// prisma.ts

import "@/envConfig" // Läd die Umgebungsvariablen mit @next/env
import { PrismaClient } from "@prisma/client"

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient({ log: ["query"] })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
