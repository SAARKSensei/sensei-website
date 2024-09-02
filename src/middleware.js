// Ref: https://next-auth.js.org/configuration/nextjs#advanced-usage
import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(request) {
    const Path = request?.nextUrl?.pathname;
    const Token = request?.nextauth?.token;
    // console.log("path= " + Path + JSON.stringify(Token));
    if (!Token) return;

    if (
      Path === "/login" ||
      Path.startsWith("/otpverification") ||
      (!Token &&
        !Path.startsWith("/dashboard") &&
        !Path.startsWith("/parentdetails"))
    )
      return NextResponse.redirect(new URL(`/dashboard`, request.url));
    if (Token?.parentDetails?.id && Path.startsWith("/parentdetails"))
      return NextResponse.redirect(new URL(`/familypage`, request.url));
  },

  {
    callbacks: {
      authorized: ({ token, req }) => {
        // console.log("auth= " + req.nextUrl.pathname);
        if (
          !token &&
          (req.nextUrl.pathname === "/login" ||
            req.nextUrl.pathname.startsWith("/otpverification"))
        )
          return true;
        return !!token;
      },
    },
  },
);

export const config = {
  matcher: [
    "/dsfsdfsd",
    "/login",
    "/parent",
    "/parentdetails",
    "/childdetails",
    "/otpverification",
    "/dashboard",
    "/child-details",
    // "/parentingsolutions",
    // "/parent/:path*",
    // "/familypage/:path*",
  ],
};
