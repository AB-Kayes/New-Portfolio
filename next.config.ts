import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/nexus-agent",
        destination: "/autopings",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
