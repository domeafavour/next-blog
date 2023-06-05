import layouts from '@/layout';
import { StaticPost } from '@/typings';
import { getPostFiles, getStaticPost } from '@/utils/posts';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';

interface Props {
  post?: StaticPost;
}

export type { Props as PostDetailProps };

export const getStaticPaths = async () => {
  return {
    paths: getPostFiles().map((filename) => `/posts/${filename.split('.')[0]}`),
    fallback: true,
  };
};

export const getStaticProps = async (props: { params: { id: string } }) => {
  return {
    props: {
      post: await getStaticPost(props.params.id),
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
      <small>{post.frontMatter.dateTime}</small>
      <MDXRemote {...post.mdxSource} />
    </Layout>
  );
};

export default PostDetail;
