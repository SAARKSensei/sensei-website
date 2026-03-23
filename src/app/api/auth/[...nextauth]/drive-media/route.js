import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        console.log("User email:", user.email);

        const response = await fetch(`https://api.sensei.org.in/api/parent-users/email?email=${user.email}`);
        const data = await response.json();

        let parentId;

        if (data.message === "User not found") {
          const rawData = { email: user.email, name: user.name };

          const createUserResponse = await fetch("https://api.sensei.org.in/api/parent-users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(rawData),
          });

          const createdUser = await createUserResponse.json();
          console.log("User created:", createdUser);
          parentId = createdUser.parentId;
        } else {
          console.log("User found:", data);
          parentId = data.parentId;
        }

        user.parentId = parentId; // ✅ Attach parentId to user object
        return user;  // 🔥 FIXED: Return the user object, not `true`
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        token.parentId = user.parentId; // ✅ Store parentId in JWT token
      }
      return token;
    },

    async session({ session, token }) {
      session.user.parentId = token.parentId; // ✅ Store parentId in session
      return session;
    }
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login/",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
