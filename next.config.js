/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow large HTML files
  experimental: {
    largePageDataBytes: 128 * 1024 * 1024, // 128MB
  },
  // Allow external images from Wix CDN
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.wixstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.filesusr.com',
        pathname: '/**',
      },
    ],
    unoptimized: true, // Disable Next.js image optimization for external images
  },
  // Optimize CSS loading order
  optimizeFonts: true, // Keep font optimization but fonts will load after HTML
}

module.exports = nextConfig

