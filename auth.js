import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const {handlers:{GET,POST},auth,signIn,signOut} = NextAuth({providers:[
    GoogleProvider({
        clientID:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CIENT_SECRET,
    }),
],
})