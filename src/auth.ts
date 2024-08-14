// auth.ts

import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { prisma } from "./lib/prisma"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      const allowedHosts = ["eckserv.de", "www.eckserv.de", "localhost"]

      // Wenn die URL ein externer Host ist, überprüfen wir, ob er vertrauenswürdig ist
      const hostname = new URL(url).hostname

      if (allowedHosts.includes(hostname)) {
        return url
      } else {
        console.error(`Untrusted host attempted to redirect: ${url}`)
        return baseUrl // Fallback zu baseUrl, wenn der Host nicht vertrauenswürdig ist
      }
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
})
