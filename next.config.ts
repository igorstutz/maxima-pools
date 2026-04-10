import type { NextConfig } from "next";

const isGhPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGhPages ? "export" : undefined,
  basePath: isGhPages ? "/maxima-pools" : "",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGhPages ? "/maxima-pools" : "",
  },
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
