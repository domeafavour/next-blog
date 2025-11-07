const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['md', 'mdx', 'ts', 'tsx', 'js', 'jsx'],
  reactStrictMode: true,
  basePath: '/next-blog',
  images: {
    unoptimized: true,
  },
};

module.exports = withMDX(nextConfig);
