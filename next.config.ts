import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/kjsbusinessai',
  images: { unoptimized: true },
};

export default nextConfig;
