/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
