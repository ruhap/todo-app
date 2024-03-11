import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { auth, signIn, signOut } from "@/server/auth";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();

  const data = await db.select().from(users);
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1>Hello World</h1>
      {JSON.stringify(data, null, 2)}
      {JSON.stringify(session, null, 2)}

      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <Button>Sign In</Button>
      </form>

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button>Sign Out</Button>
      </form>
    </main>
  );
}
