import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import Provider from "@/app/context/client-provider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";
import NextThemeProvider from "@/app/context/theme-provider";
import StyledComponentsRegistry from "./lib/registry";

export const metadata: Metadata = {
	title: "dbao-workout-app",
	description: "Workout app for dbao",
};
const raleway = Raleway({
	subsets: ["latin"],
	weight: "400",
});

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions);
	return (
		<html className={raleway.className}>
			<body>
				<Provider session={session}>
					<StyledComponentsRegistry>
						<NextThemeProvider>{children}</NextThemeProvider>
					</StyledComponentsRegistry>
				</Provider>
			</body>
		</html>
	);
}
