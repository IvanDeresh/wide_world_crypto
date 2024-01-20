import type { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const response = await axios.get("http://localhost:3003/auth/users");
          const currentUser = response.data.find(
            (user: any) => user.email === credentials.email
          );
          if (currentUser && currentUser.password === credentials?.password) {
            const { password, ...userWithoutPass } = currentUser;
            return userWithoutPass as User;
          }
        } catch (error) {
          console.error("Error fetching users from API:", error);
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/pages/sign-in",
  },
};
