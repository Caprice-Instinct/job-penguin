import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { prisma } from "./db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub, Google],
  callbacks: {
    async signIn({ user, account }) {
      if (!user.email || !account) return false; // Ensure user has an email and account exists

      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
        include: { accounts: true }, // Fetch linked accounts
      });

      if (existingUser) {
        const hasLinkedAccount = existingUser.accounts.some(
          (acc) => acc.provider === account.provider
        );

        if (!hasLinkedAccount) {
          // Link new provider to existing user
          await prisma.account.create({
            data: {
              userId: existingUser.id,
              provider: account.provider,
              providerAccountId: account.providerAccountId,
              type: account.type,
            },
          });
        }
      }
      return true;
    },
  },
});
