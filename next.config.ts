import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img3.akspic.ru',
        pathname: '/previews/**',
      },
      {
        protocol: 'https',
        hostname: 'img2.akspic.ru',
        pathname: '/previews/**',
      },
    ],
  },
};

export default nextConfig;
