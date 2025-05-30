import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    allowedDevOrigins: ["https://*.replit.dev", "https://*.pike.replit.dev"],
  },
};

export default nextConfig;
