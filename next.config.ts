import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ---------------------------------------------------------
     Images Optimization
  --------------------------------------------------------- */
  async headers() {
    return [
      {
        source: "/(.*)",

        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },

          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },

          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],

    minimumCacheTTL: 31536000,
  },

  /* ---------------------------------------------------------
     Compression
  --------------------------------------------------------- */

  compress: true,

  /* ---------------------------------------------------------
     Production Optimizations
  --------------------------------------------------------- */

  poweredByHeader: false,

  reactStrictMode: true,
};

export default nextConfig;
