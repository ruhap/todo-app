import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { auth, signIn, signOut } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();

  const data = await db.select().from(users);
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1>Data from database (users)</h1>
      {JSON.stringify(data)}
      <h1>Data from session (user)</h1>
      {JSON.stringify(session)}
    </main>
  );
}
