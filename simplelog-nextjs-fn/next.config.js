/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow To Download Images From Specific URL
  images: {
    domains: ["cdn.sanity.io"],
  },
  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
