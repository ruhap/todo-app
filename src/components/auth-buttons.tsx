import { signIn, signOut } from "@/actions/auth.actions";
import { Button } from "@/components/ui/button";
import { Provider } from "@/lib/auth.config";

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
      <Button variant="ghost" {...props}>
        Sign Out
      </Button>
    </form>
  );
};
