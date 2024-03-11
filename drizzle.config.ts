import { type Config } from "drizzle-kit";

import { env } from "@/server/env";

export default {
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: env.POSTGRES_URL,
  },
  tablesFilter: ["todo-app_*"],
} satisfies Config;
