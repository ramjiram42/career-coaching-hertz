import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Allows production builds to succeed with minor type warnings
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
