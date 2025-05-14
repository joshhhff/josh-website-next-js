import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
        {
            source: '/sitemap.xml',
            destination: '/api/sitemap',
        },
        {
            source: '/robots.txt',
            destination: '/api/robots',
        },
    ]
  }
};

export default nextConfig;
