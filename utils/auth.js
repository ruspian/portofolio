import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Facebook from "next-auth/providers/facebook";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/utils/prisma";

const authoptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Facebook({
      clientId: process.env.AUTH_FACEBOOK_ID,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (user) {
        session.user.id = user.id;
        session.user.email = user.email;
        session.user.name = user.name;
      }
      return session;
    },
  },
};

// Ini adalah objek konfigurasi Auth.js
export const { handlers, auth, signIn, signOut } = NextAuth(authoptions);
