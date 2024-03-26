import { z } from "zod";

const config = z.object({
  NODE_ENV: z.enum(["production", "development"]).default("development"),
  POSTGRES_URL: z.string(),
  AUTH_SECRET: z.string(),
  AUTH_DISCORD_CLIENT_ID: z.string(),
  AUTH_DISCORD_CLIENT_SECRET: z.string(),
});

export const env = config.parse({
  NODE_ENV: process.env.NODE_ENV,
  POSTGRES_URL: process.env.POSTGRES_URL,
  AUTH_SECRET: process.env.AUTH_SECRET,
  AUTH_DISCORD_CLIENT_ID: process.env.AUTH_DISCORD_CLIENT_ID,
  AUTH_DISCORD_CLIENT_SECRET: process.env.AUTH_DISCORD_CLIENT_SECRET,
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof config> {}
  }
}
