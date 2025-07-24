/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Remove basePath and assetPrefix for now to avoid routing issues
  // basePath: process.env.NODE_ENV === 'production' ? '/testc' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/testc/' : '',
}

export default nextConfig
