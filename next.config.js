/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // PULGX true to prod
  swcMinify: true,
  images: {
    domains: ['loremflickr.com', 'picsum.photos', 'placekitten.com', 'source.unsplash.com', 'unsplash.com'],
  },
};

module.exports = nextConfig;
