/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image6.coupangcdn.com',
      },
    ],
  },
}

module.exports = nextConfig 