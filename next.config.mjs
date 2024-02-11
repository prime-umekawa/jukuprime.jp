/** @type {import('next').NextConfig} */

const withInterceptStdout = require("next-intercept-stdout");

module.exports = withInterceptStdout(
  {
    async redirects() {
      return [
        {
          source: "/blog/shopify-app-bundler", // リダイレクト元のURL
          destination: "/blog/shopify-app-bundle-ranking", // リダイレクト先のURL
          permanent: true, // 永続的なリダイレクトかのフラグ
        },
        {
          source: "/blog/shopify-app-wishlist", // リダイレクト元のURL
          destination: "/blog/shopify-app-favorite-app-ranking", // リダイレクト先のURL
          permanent: true, // 永続的なリダイレクトかのフラグ
        },
      ];
    },
    reactStrictMode: true,
    images: {
      formats: ["image/webp"], // 最適化対象の画像
      unoptimized: true, // 自動最適化されない画像（アニメーション画像）の場合、最適化前の画像を表示
      // domains: process.env.NEXT_PUBLIC_IMAGE_CONFIG.split(','),
    },
    compiler: {
      styledComponents: true,
    },
    experimental: {
      scrollRestoration: true,
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.node/,
        use: "raw-loader",
      });
      return config;
    },
  },
  (text) => (text.includes("Duplicate atom key") ? "" : text),
);
