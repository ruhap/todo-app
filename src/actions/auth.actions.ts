"use server";
import { Provider } from "@/lib/auth.config";
import {
  signIn as nextAuthSignin,
  signOut as nextAuthSignOut,
} from "next-auth/react";

export const signIn = async (provider?: Provider) => {
  await nextAuthSignin(provider);
};
export const signOut = async () => {
  await nextAuthSignOut();
};
