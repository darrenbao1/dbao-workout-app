/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	redirects: async () => {
		return [
			{
				source: "/",
				destination: "/protected/dashboard", //changing the home page to public
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
			},
			{
				protocol: "https",
				hostname: "pbs.twimg.com",
			},
		],
	},
};

module.exports = nextConfig;
