import { BasicLayout } from "@/components";
import { PostListItem } from "@/components/PostListItem";
import { PostListWrapper } from "@/components/PostListWrapper";
import { PostInfo } from "@/typings";
import { getSortedPosts } from "@/utils/posts";
import React from "react";

interface Props {
  posts: PostInfo[];
}

export type { Props as PostsProps };

export async function getStaticProps() {
  const sorted = await getSortedPosts();

  return {
    props: {
      posts: sorted,
    },
  };
}

export const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <BasicLayout subTitle="Posts">
      <PostListWrapper>
        {posts.map((post) => (
          <PostListItem
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
          />
        ))}
      </PostListWrapper>
    </BasicLayout>
  );
};

export default Posts;
