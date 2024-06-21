import { BasicLayout } from "@/components";
import { PostContent } from "@/components/PostContent";
import { PostTag } from "@/components/PostTag";
import { PostTagsWrapper } from "@/components/PostTagsWrapper";
import { MDXSource, PostInfo, StaticPost } from "@/typings";
import { getPostPath, makeDateStringOrUnknown } from "@/utils/client";
import { createMDXSource } from "@/utils/createMDXSource";
import { getPostFiles, getSortedPosts, getStaticPost } from "@/utils/posts";
import React from "react";
import { PostFooter } from "../../components/PostFooter";

interface Props {
  previous: PostInfo | null;
  next: PostInfo | null;
  post?: StaticPost;
  mdxSource: MDXSource | null;
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
    (post) => post.id === props.params.id,
  );
  const previous = sortedPosts[postIndex - 1] ?? null;
  const next = sortedPosts[postIndex + 1] ?? null;
  const post = await getStaticPost(props.params.id);
  return {
    props: {
      previous,
      next,
      post,
      mdxSource: post ? await createMDXSource(post.content) : null,
    },
  };
};

export const PostDetail: React.FC<Props> = ({
  post,
  previous,
  next,
  mdxSource,
}) => {
  if (!post || !mdxSource) {
    return null;
  }

  const { title, date, tags } = post.frontMatter;

  const hasTags = !!tags?.length;

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

        <PostContent {...mdxSource} />
      </article>
      <hr />
      <PostFooter previous={previous} next={next} />
    </BasicLayout>
  );
};

export default PostDetail;
