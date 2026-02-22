import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/web-yeke",
  images: { unoptimized: true },
  transpilePackages: ["three"],
};

export default nextConfig;
