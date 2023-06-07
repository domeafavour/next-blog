/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['md', 'mdx', 'ts', 'tsx', 'js', 'jsx'],
  reactStrictMode: true,
  basePath: '/next-blog',
};

const withMDX = require('@next/mdx')();

module.exports = withMDX(nextConfig);
