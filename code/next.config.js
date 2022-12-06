/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
  // ... rest of the configuration.

  nextConfig: {
    reactStrictMode: true,
    swcMinify: true,
  },

  images: {
    domains: ['cloudflare-ipfs.com'],
  },

  experimental: {
    outputStandalone: true,
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')], 
    prependData: `@import "formul.scss";`
  }
}