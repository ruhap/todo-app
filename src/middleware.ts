import { auth } from "@/lib/auth.config";

export const ROOT = "/";
export const PUBLIC_ROUTES = ["/"];
export const DEFAULT_REDIRECT = "/dashboard";

export default auth(({ nextUrl, auth }) => {
  const isAuthenticated = Boolean(auth);
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

  if (isPublicRoute && isAuthenticated)
    return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

  if (!isAuthenticated && !isPublicRoute)
    return Response.redirect(new URL(ROOT, nextUrl));
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
