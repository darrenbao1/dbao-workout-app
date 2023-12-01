import { NextAuthOptions } from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import GoogleProvider from "next-auth/providers/google";
import { SupabaseAdapter } from "@auth/supabase-adapter";
export const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET as string,
	adapter: SupabaseAdapter({
		url: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
		secret: process.env.SUPABASE_SERVICE_ROLE_KEY as string,
	}),
	providers: [
		TwitterProvider({
			clientId: process.env.TWITTER_CLIENT_ID?.toString() as string,
			clientSecret: process.env.TWITTER_CLIENT_SECRET?.toString() as string,
			version: "2.0",
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID?.toString() as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET?.toString() as string,
		}),
	],
	session: { strategy: "jwt" },
};
