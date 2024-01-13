import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import dotenv from "dotenv";
import { User } from "@/types";
dotenv.config();
async function getUsersFromServer() {
  const response = await fetch("http://localhost:3003/auth/users");
  if (response.ok) {
    const users = await response.json();
    return users;
  } else {
    throw new Error(`Failed to fetch users: ${response.status}`);
  }
}
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
        const users = await getUsersFromServer();
        const currentUser = users.find(
          (user: any) => user.email === credentials.email
        );
        if (currentUser && currentUser.password === credentials?.password) {
          const { password, ...userWithoutPass } = currentUser;
          return userWithoutPass as User;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/pages/sign-in",
  },
};
