import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img3.akspic.ru',
        port: '',
        pathname: '/previews/**',
        search: ''
      },
      {
        protocol: 'https',
        hostname: 'img2.akspic.ru',
        port: '',
        pathname: '/previews/**',
        search: ''
      },
    ],
  },
};

export default nextConfig;
