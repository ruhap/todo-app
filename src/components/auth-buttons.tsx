import { Button } from "@/components/ui/button";
import { Provider } from "@/lib/auth.config";
import { signIn, signOut } from "next-auth/react";

export const SignIn = ({
  provider,
  ...props
}: { provider?: Provider } & React.ComponentPropsWithRef<typeof Button>) => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <Button {...props}>Sign In</Button>
    </form>
  );
};

export const SignOut = (props: React.ComponentPropsWithRef<typeof Button>) => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button {...props}>Sign Out</Button>
    </form>
  );
};
