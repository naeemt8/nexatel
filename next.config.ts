import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  trailingSlash: true,
  basePath: "/nexatel",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
