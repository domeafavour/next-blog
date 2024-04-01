import { BasicLayout } from '@/components';
import { Code } from '@/components/Code';
import { PostInfo, StaticPost } from '@/typings';
import { getPostPath, makeDateStringOrUnknown } from '@/utils/client';
import { getPostFiles, getSortedPosts, getStaticPost } from '@/utils/posts';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';
import { PostFooter } from '../../components/PostFooter';

interface Props {
  previous: PostInfo | null;
  next: PostInfo | null;
  post?: StaticPost;
}

export type { Props as PostDetailProps };

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
      <article className="min-h-72">
        <h2>{post.frontMatter.title}</h2>
        <small className="text-slate-400">
          {makeDateStringOrUnknown(post.frontMatter.date!)}
        </small>
        <MDXRemote
          {...post.mdxSource}
          components={{
            code: Code,
          }}
        />
      </article>
      <hr />
      <PostFooter previous={previous} next={next} />
    </BasicLayout>
  );
};

export default PostDetail;
