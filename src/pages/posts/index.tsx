import { BasicLayout } from '@/components';
import { PostListItem } from '@/components/PostListItem';
import { PostListWrapper } from '@/components/PostListWrapper';
import { PostInfo } from '@/typings';
import {
  groupByYearMonth,
  makeDayStringOrUnknown,
  makeYearMonthStringOrUnknown,
} from '@/utils/client';
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
            <h4 key={yearMonthId} className="font-serif mt-8 mb-2">
              {makeYearMonthStringOrUnknown(yearMonthId)}
            </h4>
            <ul className="ps-0 m-0 list-none">
              {yearMonthIdToPostIds[yearMonthId].map((postId) => (
                <PostListItem
                  key={postId}
                  id={postId}
                  title={entities[postId].title}
                  date={makeDayStringOrUnknown(entities[postId].date)}
                />
              ))}
            </ul>
          </React.Fragment>
        ))}
      </PostListWrapper>
    </BasicLayout>
  );
};

export default Posts;
