/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "75.119.130.218",
        port: "8055",
        pathname: "/assets/**",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*", // Proxy API requests starting with /api
        destination: "https://admin.djerbatrips.com/:path*", // Forward to your Directus instance
      },
    ];
  },
};

export default nextConfig;
