const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  // put other next-pwa options here
});

const nextConfig = withPWA({
  reactStrictMode: true,
  // put other next js options here
});

module.exports = nextConfig;
