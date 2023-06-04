/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/next-blog',
  experimental: {
    mdxRs: true,
  },
};

const withMDX = require('@next/mdx')();

module.exports = withMDX(nextConfig);
