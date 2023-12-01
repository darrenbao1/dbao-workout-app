import { withAuth } from "next-auth/middleware";

export default withAuth({
	callbacks: {
		authorized: ({ req, token }) => {
			if (req.nextUrl.pathname.startsWith("/protected") && !token) {
				return false;
			}
			return true;
		},
	},
});
