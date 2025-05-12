/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // For optimized build performance
  images: {
    domains: [], // Add any external image domains you use
  },
  experimental: {
    appDir: true, // Ensure this is enabled for App Router
  },
};

module.exports = nextConfig;
