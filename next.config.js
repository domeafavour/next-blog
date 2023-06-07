const withMDX = require('@next/mdx');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['md', 'mdx', 'ts', 'tsx', 'js', 'jsx'],
  reactStrictMode: true,
  basePath: '/next-blog',
};

module.exports = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
  },
})(nextConfig);
