import type { NextConfig } from "next";

// Build targets:
//   - GH Pages preview:  GITHUB_PAGES=true npm run build  (basePath = /maxima-pools)
//   - Hostinger / root:  npm run build                    (basePath = empty)
// `next dev` ignores the `output: "export"` setting, so leaving it on
// always is safe and removes one foot-gun for the Hostinger build.
const isGhPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
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
