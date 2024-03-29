import { BasicLayout } from '@/components';
import { PostListItem } from '@/components/PostListItem';
import { PostListWrapper } from '@/components/PostListWrapper';
import { PostInfo } from '@/typings';
import { groupByYearMonth, toLocaleDateString } from '@/utils/client';
import { getSortedPosts } from '@/utils/posts';
import React from 'react';

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
  const { yearMonthIds, yearMonthIdToPostIds, entities } =
    groupByYearMonth(posts);
  return (
    <BasicLayout subTitle="Posts">
      <PostListWrapper>
        {yearMonthIds.map((yearMonthId) => (
          <React.Fragment key={yearMonthId}>
            <h4 key={yearMonthId} className="font-serif">
              {yearMonthId}
            </h4>
            {yearMonthIdToPostIds[yearMonthId].map((postId) => (
              <PostListItem
                key={postId}
                id={postId}
                title={entities[postId].title}
                date={toLocaleDateString(entities[postId].date!)}
              />
            ))}
          </React.Fragment>
        ))}
      </PostListWrapper>
    </BasicLayout>
  );
};

export default Posts;
