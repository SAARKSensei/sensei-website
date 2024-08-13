import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

//console.log(process.env.Google_ID);
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        phone: { label: "Phone", type: "text", placeholder: "Phone" },
        otp: { label: "OTP", type: "text", placeholder: "OTP" },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const { name, phone, otp, orderId } = credentials;
        //console.log("credentials", credentials);
        try {
          const otpRes = await axios.post(
            "https://sensei-app-c8da1e59e645.herokuapp.com/sensei/api/v1/authenticate",
            {
              userName: name,
              phone: phone,
              otp: otp,
              orderId: orderId,
            },
          );
          const otpData = { ...otpRes?.data, name, status: otpRes.status };
          //console.log("otpData", JSON.stringify(otpData));
          return otpData;
        } catch (error) {
          ////console.error(error);
        }
        // if (!otp.match(/^[0-9]{6}$/)) return null;
        // if (!phone.match(/^[0-9]{10}$/)) return null;
        return null;
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    // async signIn({ user, account }) {
    //   // console.log("signIn: " + JSON.stringify(user));
    //   //console.log("user", user, "account", account);
    //   return !!user ? user : null;
    // },
    async jwt({ token, user, session, trigger }) {
      // console.log(
      //   "user: " + JSON.stringify(user),
      //   "session: " + JSON.stringify(session),
      // );
      // let phone = user?.phone;
      // let parentId = null;
      // if (trigger === "update") {
      //   phone = session?.phone;
      //   parentId = session?.id;
      // }
      // //console.log("cred: " + JSON.stringify(user));
      // if (phone)
      //   try {
      //     const resP = await getParentsDataAPI(phone);
      //     //console.log("resP: " + resP?.data);
      //     token = {
      //       ...token,
      //       parentDetails: resP?.data,
      //     };
      //     parentId = resP?.data?.id;

      //   } catch (err) {
      //     console.log("err: " + err);
      //   }
      // if (parentId)
      //   try {
      //     const resC = await getChildrenDataAPI(parentId);
      //     //console.log("resC: " + resC?.data);
      //     token = {
      //       ...token,
      //       childrenDetails: resC?.data,
      //     };
      //   } catch (err) {
      //     console.log("err: " + err);
      //   }else{
      if (!!user)
        token = {
          ...token,
          userName: user?.userName,
          phone: user?.phone,
        };

      // console.log("token: " + JSON.stringify(token));
      return token;
    },
    async session({ session, token, user }) {
      if (token?.userName) {
        session = {
          ...session,
          user: {
            ...session.user,
            phone: token?.phone,
            userName: token?.userName,
          },
        };
      }
      // if (token?.parentDetails)
      //   session = {
      //     ...session,
      //     user: {
      //       ...session.user,
      //       parentDetails: token.parentDetails,
      //     },
      //   };
      // if (token?.childrenDetails) {
      //   session = {
      //     ...session,
      //     user: {
      //       ...session.user,
      //       childrenDetails: token.childrenDetails,
      //     },
      //   };
      // }
      //console.log("session" + JSON.stringify(session));
      return session;
    },
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
