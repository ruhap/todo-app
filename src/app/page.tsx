import { db } from "@/lib/db";
import { todos } from "@/lib/db/schema";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { revalidatePath } from "next/cache";

const createSchema = z.object({
  title: z.string().trim().min(1),
});

export default async function Home() {
  const session = await auth();

  const id = session?.user?.id;

  if (!id) {
    redirect("/api/auth/signin");
  }

  const data = await db.query.todos.findMany({
    where: (todos, { eq }) => eq(todos.createdById, id),
  });

  return (
    <main className="flex min-h-screen flex-col p-24">
      {JSON.stringify(data)}
      <form
        action={async (formData: FormData) => {
          "use server";

          const parsed = createSchema.parse({
            title: formData.get("title"),
          });

          await db.insert(todos).values({
            title: parsed.title,
            createdById: id,
          });
          revalidatePath("/");
        }}
      >
        <Input type="text" name="title" />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
