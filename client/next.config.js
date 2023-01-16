/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  basePath: process.env.NODE_ENV == "production" ? "/daily-quote" : "",
});

module.exports = nextConfig;
