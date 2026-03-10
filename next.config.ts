import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  // Bật khi deploy bằng Docker
  // output: 'standalone',
}

export default nextConfig
