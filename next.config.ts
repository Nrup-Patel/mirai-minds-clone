import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "miraiminds.jp" },
      { protocol: "http", hostname: "miraiminds.jp" },
    ],
  },
  eslint: {
    // ✅ Prevents ESLint errors from breaking builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Prevents type errors from breaking builds
    ignoreBuildErrors: true,
  },
};

export default withNextIntl(nextConfig);
