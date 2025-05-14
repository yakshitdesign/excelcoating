/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // For optimized build performance
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    // Remove deprecated options
  },
};

export default nextConfig;
