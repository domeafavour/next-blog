import withMDX from '@next/mdx';
import remarkFrontMatter from 'remark-frontmatter';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['md', 'mdx', 'ts', 'tsx', 'js', 'jsx'],
  reactStrictMode: true,
  basePath: '/next-blog',
};

export default withMDX({
  options: {
    remarkPlugins: [remarkFrontMatter],
  },
})(nextConfig);
