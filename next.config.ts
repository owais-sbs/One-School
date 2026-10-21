import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin Turbopack root so it reliably finds the local `next` package
  // (avoids "Next.js package not found" / Failed to write app endpoint).
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
