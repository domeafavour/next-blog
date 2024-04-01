import { BasicLayout } from '@/components';
import { Code } from '@/components/Code';
import { PostTag } from '@/components/PostTag';
import { PostTagsWrapper } from '@/components/PostTagsWrapper';
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

  const { title, date, tags } = post.frontMatter;

  const hasTags = tags?.length;

  return (
    <BasicLayout subTitle={title}>
      <article className="min-h-72">
        <h2>{title}</h2>
        <span className="text-slate-400 text-sm">
          {makeDateStringOrUnknown(date)}
        </span>
        {hasTags && (
          <PostTagsWrapper>
            {tags.map((tag) => (
              <PostTag key={tag}>{tag}</PostTag>
            ))}
          </PostTagsWrapper>
        )}

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
