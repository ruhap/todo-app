import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

import type { NextAuthConfig } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/lib/db";
import { createTable } from "@/lib/db/schema";
import { env } from "@/lib/env.config";

export type Provider = "discord";

export const config = {
  session: {
    strategy: "jwt",
  },
  pages: {
    error: "/",
    signIn: "/",
    signOut: "/",
  },
  providers: [
    Discord({
      clientId: env.AUTH_DISCORD_CLIENT_ID,
      clientSecret: env.AUTH_DISCORD_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth }) {
      return Boolean(auth?.user);
    },
  },
  adapter: DrizzleAdapter(db, createTable),
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
