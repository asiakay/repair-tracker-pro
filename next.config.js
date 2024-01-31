/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {
  experimental: {
    appDir: true,
=======

const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
>>>>>>> 18ef74f878b5400f344e8e8bc7e1a3063c886c2e
  },
}

module.exports = nextConfig
