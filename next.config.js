/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.ctfassets.net'],
    formats: [
      'image/avif',
      'image/webp'
    ]
  },
  compiler: {
    styledComponents: true,
  },
  webpack(config, { isServer }) {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  }
}

module.exports = nextConfig;
