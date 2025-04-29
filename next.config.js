/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  transpilePackages: ['@mui/material', '@mui/system', '@mui/icons-material'],
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  compiler: {
    emotion: true
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
  env: {
    NEXT_PUBLIC_API_URL: 'http://localhost:3001'
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/:path*'
      }
    ];
  }
};

module.exports = nextConfig; 