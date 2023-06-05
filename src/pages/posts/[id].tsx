import layouts from '@/layout';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import React from 'react';

export type PostFrontMatter = {
  title?: string;
  layout?: string;
};

export type StaticPost = {
  frontMatter: PostFrontMatter;
  slug: string;
  mdxSource: any;
};

interface Props {
  post?: StaticPost;
}

export type { Props as PostDetailProps };

const BASE_DIR = './src/pages/posts';

const postFiles = fs.readdirSync(BASE_DIR).filter((d) => d.endsWith('.mdx'));

export const getStaticPaths = async () => {
  return {
    paths: postFiles.map((filename) => `/posts/${filename.split('.')[0]}`),
    fallback: true,
  };
};

export const getStaticProps = async (props: { params: { id: string } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join(BASE_DIR, `${props.params.id}.mdx`),
    'utf-8'
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  const post: StaticPost = {
    frontMatter: frontMatter,
    slug: props.params.id,
    mdxSource,
  };

  return {
    props: {
      post,
    },
  };
};

export const PostDetail: React.FC<Props> = ({ post }) => {
  if (!post) {
    return null;
  }
  const Layout = post.frontMatter.layout
    ? layouts[post.frontMatter.layout as keyof typeof layouts]
    : 'div';

  return (
    <Layout>
      <MDXRemote {...post.mdxSource} />
    </Layout>
  );
};

export default PostDetail;
