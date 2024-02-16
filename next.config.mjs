/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverComponentsExternalPackages: ["mongoose"],
	},
	images: {
		remotePatterns: [
			{
				protocol: "https", // Specify the protocol
				hostname: "lh3.googleusercontent.com", // The domain name
				// Optionally, you can specify a port and pathname patterns
				// port: '',
				// pathname: '/path/to/images/*',
			},
		],
	},
	webpack(config) {
		config.experiments = {
			...config.experiments,
			topLevelAwait: true,
		};
		return config;
	},
};

export default nextConfig;
