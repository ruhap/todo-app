import { auth as middleware } from "@/lib/auth.config";
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT } from "@/routes";

export default middleware((req) => {
  const { nextUrl } = req;

  const isAuthenticated = Boolean(req.auth);
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

  if (isPublicRoute && isAuthenticated) {
    return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
  }
  if (!isAuthenticated && !isPublicRoute) {
    return Response.redirect(new URL(ROOT, nextUrl));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
