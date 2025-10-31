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
};

export default withNextIntl(nextConfig);
