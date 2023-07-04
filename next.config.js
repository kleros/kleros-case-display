/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: "/cases/:id",
        destination: "/case/:id",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
