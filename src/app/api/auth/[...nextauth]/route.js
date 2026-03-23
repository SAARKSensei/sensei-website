import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {

    // ── signIn: NEVER return false unless you truly want to block the user ──
    async signIn({ user, account }) {
      try {
        console.log("✅ signIn triggered for:", user.email);

        // ── STEP 1: Exchange Google id_token → Backend JWT ─────────────────
        // Wrapped in its own try/catch so a failure here NEVER blocks login
        if (account?.id_token) {
          try {
            const authRes = await fetch(
              `https://api.sensei.org.in/api/auth/google?idToken=${encodeURIComponent(account.id_token)}`,
              { method: "POST" }
            );

            if (authRes.ok) {
              const authData = await authRes.json();
              const jwt =
                typeof authData === "string"
                  ? authData
                  : authData?.token ||
                    authData?.jwt   ||
                    authData?.accessToken ||
                    null;

              if (jwt) {
                user.backendJWT = jwt;
                console.log("✅ Backend JWT received");
              } else {
                console.warn("⚠️ Backend auth responded but no JWT found:", authData);
              }
            } else {
              console.warn("⚠️ Backend auth responded with status:", authRes.status);
            }
          } catch (jwtErr) {
            // ⚠️ JWT exchange failed — log it but DO NOT block login
            console.warn("⚠️ Backend JWT exchange failed (non-blocking):", jwtErr?.message);
          }
        } else {
          console.warn("⚠️ No id_token in account object — skipping JWT exchange");
        }

        // ── STEP 2: Check if parent user exists, create if not ─────────────
        // Also wrapped so a backend error never blocks login
        try {
          const response = await fetch(
            `https://api.sensei.org.in/api/parent-users/email?email=${encodeURIComponent(user.email)}`
          );
          const data = await response.json();

          if (data?.message === "User not found" || !data?.parentId) {
            // New user — create parent record
            const createRes = await fetch("https://api.sensei.org.in/api/parent-users", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: user.email, name: user.name }),
            });
            const createdUser = await createRes.json();
            console.log("✅ New parent user created:", createdUser);
            user.parentId = createdUser?.parentId || null;
          } else {
            console.log("✅ Existing parent user found, parentId:", data.parentId);
            user.parentId = data.parentId;
          }
        } catch (parentErr) {
          // ⚠️ Parent check failed — log it but DO NOT block login
          // Dashboard's initParent() will handle this on the frontend
          console.warn("⚠️ Parent user check failed (non-blocking):", parentErr?.message);
        }

        // ✅ Always return true — login is NEVER blocked by backend errors
        return true;

      } catch (error) {
        // Top-level catch — still allow login so user is never stuck
        console.error("❌ Unexpected error in signIn callback:", error);
        return true; // ← return true, not false, so user isn't locked out
      }
    },

    // ── jwt: store everything from user + account into the token ──────────
    async jwt({ token, user, account }) {
      if (account) {
        // Forward Google's raw id_token for manual fallback exchange
        token.id_token = account.id_token ?? null;
      }
      if (user) {
        token.parentId   = user.parentId   ?? null;
        token.backendJWT = user.backendJWT ?? null;
      }
      return token;
    },

    // ── session: expose token fields to the frontend ───────────────────────
    async session({ session, token }) {
      session.user.parentId = token.parentId   ?? null;
      session.id_token      = token.id_token   ?? null; // for manual fallback
      session.backendJWT    = token.backendJWT ?? null; // primary JWT source
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login/",
    // error page — shows "Access Denied" by default, redirect to login instead
    error:  "/login/",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };