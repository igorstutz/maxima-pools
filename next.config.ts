import type { NextConfig } from "next";

const isGhPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGhPages ? "export" : undefined,
  basePath: isGhPages ? "/maxima-pools" : "",
  assetPrefix: isGhPages ? "/maxima-pools/" : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maximapools.com",
      },
    ],
  },
};

export default nextConfig;
