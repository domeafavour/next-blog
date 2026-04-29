const path = require("path");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["md", "mdx", "ts", "tsx", "js", "jsx"],
  reactStrictMode: true,
  basePath: "/next-blog",
  outputFileTracingRoot: path.join(__dirname),
  images: {
    unoptimized: true,
  },
};

module.exports = withMDX(nextConfig);
