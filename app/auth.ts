import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHub from "next-auth/providers/github"

export const {handlers,auth,signIn,signOut} = NextAuth({providers:[
    GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
        clientId:process.env.GITHUB_CLIENT_ID,
        clientSecret:process.env.GITHUB_CLIENT_SECRET,
    }),
],
secret: process.env.AUTH_SECRET,
})
