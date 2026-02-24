/** @type {import('next').NextConfig} */
const nextConfig = {
	compress: true,
	experimental: {
		optimizePackageImports: ["lucide-react", "framer-motion"],
	},
	webpack: (config) => {
		config.output = {
			...config.output,
			hashFunction: "xxhash64",
		};

		return config;
	},
};

export default nextConfig;
