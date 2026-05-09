/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/events',
        destination: 'https://www.zeffy.com/en-CA/ticketing/the-trevor-claydon-fundraiser',
        permanent: false,
      },
      {
        source: '/event',
        destination: 'https://www.zeffy.com/en-CA/ticketing/the-trevor-claydon-fundraiser',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
