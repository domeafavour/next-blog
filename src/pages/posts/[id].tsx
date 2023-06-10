import { BasicLayout } from '@/components';
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
    paths: getPostFiles().map((filename) => `/posts/${filename}`),
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

  return (
    <BasicLayout subTitle={post.frontMatter.title}>
      <small>{post.frontMatter.date}</small>
      <MDXRemote {...post.mdxSource} />
    </BasicLayout>
  );
};

export default PostDetail;
