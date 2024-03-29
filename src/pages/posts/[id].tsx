import { BasicLayout } from '@/components';
import { Code } from '@/components/Code';
import { Flex } from '@/components/Flex';
import { PostButton } from '@/components/PostButton';
import { PostInfo, StaticPost } from '@/typings';
import { getPostFiles, getSortedPosts, getStaticPost } from '@/utils/posts';
import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';
import React from 'react';

interface Props {
  previous: PostInfo | null;
  next: PostInfo | null;
  post?: StaticPost;
}

export type { Props as PostDetailProps };

function getPostPath(id: string) {
  return `/posts/${id}`;
}

export const getStaticPaths = async () => {
  return {
    paths: getPostFiles().map(getPostPath),
    fallback: true,
  };
};

export const getStaticProps = async (props: { params: { id: string } }) => {
  const sortedPosts = await getSortedPosts();
  const postIndex = sortedPosts.findIndex(
    (post) => post.id === props.params.id
  );
  const previous = sortedPosts[postIndex - 1] ?? null;
  const next = sortedPosts[postIndex + 1] ?? null;
  return {
    props: {
      previous,
      next,
      post: await getStaticPost(props.params.id),
    },
  };
};

export const PostDetail: React.FC<Props> = ({ post, previous, next }) => {
  if (!post) {
    return null;
  }

  return (
    <BasicLayout subTitle={post.frontMatter.title}>
      <h2>{post.frontMatter.title}</h2>
      <small className="text-slate-400 underline">
        {post.frontMatter.date}
      </small>
      <MDXRemote
        {...post.mdxSource}
        components={{
          code: Code,
        }}
      />
      <hr />
      <Flex flexDirection="row" justifyContent="space-between">
        <div>
          {previous ? (
            <PostButton>
              <span>{'<<'}</span>
              <Link href={getPostPath(previous.id)}>{previous.title}</Link>
            </PostButton>
          ) : null}
        </div>
        <div>
          {next ? (
            <PostButton>
              <Link href={getPostPath(next.id)}>{next.title}</Link>
              <span>{'>>'}</span>
            </PostButton>
          ) : null}
        </div>
      </Flex>
    </BasicLayout>
  );
};

export default PostDetail;
