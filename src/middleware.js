// Ref: https://next-auth.js.org/configuration/nextjs#advanced-usage
import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(request) {
    const Path = request?.nextUrl?.pathname;
    const Token = request?.nextauth?.token;
    //console.log("path= " + Path);
    if (!Token) return;

    if (
      Path === "/login" ||
      Path.startsWith("/otpverification") ||
      (!Token?.parentDetails &&
        !Path.startsWith("/dashboard") &&
        !Path.startsWith("/parentdetails"))
    )
      return NextResponse.redirect(new URL(`/dashboard`, request.url));
    if (Token?.parentDetails?.id && Path.startsWith("/parentdetails"))
      return NextResponse.redirect(new URL(`/familypage`, request.url));

    // console.log(request.nextUrl.pathname);
    // console.log(request.nextauth.token?.childrenDetails);
    // if (
    //   !request.nextauth.token?.childrenDetails ||
    //   request.nextauth.token?.childrenDetails.length === 0
    // ) {
    //   if (request.nextUrl.pathname.startsWith("/childdetails")) return;
    //   return NextResponse.redirect(new URL(`/childdetails`, request.url));
    // }
    // if (
    //   request.nextUrl.pathname.startsWith("/childdetails") ||
    //   request.nextUrl.pathname.startsWith("/parentdetails") ||
    //   request.nextUrl.pathname.startsWith("/otpverification") ||
    //   request.nextUrl.pathname === "/"
    //   // ||
    //   // (request.nextUrl.pathname.startsWith("/parent/") &&
    //   //   `/parent/${request.nextauth.token.parentDetails?.name.replace(
    //   //     /\s/g,
    //   //     "_"
    //   //   )}` !== request.nextUrl.pathname)
    // )
    //   return NextResponse.redirect(
    //     new URL(
    //       // `/parent/${request.nextauth.token.parentDetails?.name.replace(
    //       //   /\s/g,
    //       //   "_"
    //       // )}`,
    //       "/familypage",
    //       request.url
    //     )
    //   );
    // new URL(
    //   `/child/dashboard/${request.nextauth.token.childrenDetails[0]?.name}`,
    //   request.url
    // )
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
  // matcher: ["/hjbhj"],
  matcher: [
    "/login",
    "/parent",
    "/child/dashboard",
    "/parentdetails",
    "/childdetails",
    "/otpverification",
    "/dashboard",
    "/parent/:path*",
    "/familypage/:path*",
  ],
};
