/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", // You can specify the port if needed (usually empty for standard ports)
        pathname: "/**", // This allows all paths
      },
    ],
  },
};

export default nextConfig;
