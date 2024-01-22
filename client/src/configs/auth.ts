import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "581393509996-3o28vutg79djv8jrdeilne0vf9drip02.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  pages: {
    signIn: "/pages/sign-in",
    signOut: "/",
  },
};
