/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  redirects: async () => [
    {
      source: "/cases/:id",
      destination: "/case/:id",
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
