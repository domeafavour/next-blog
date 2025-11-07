import { BasicLayout, Pagination } from '@/components';
import { PostListItem } from '@/components/PostListItem';
import { PostListWrapper } from '@/components/PostListWrapper';
import { PostInfo } from '@/typings';
import {
  groupByYearMonth,
  makeDayStringOrUnknown,
  makeYearMonthStringOrUnknown,
} from '@/utils/client';
import { getSortedPosts } from '@/utils/posts';
import React, { useMemo } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

interface Props {
  allPosts: PostInfo[];
}

export type { Props as PostsProps };

const POSTS_PER_PAGE = 20;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const sorted = await getSortedPosts();

  return {
    props: {
      allPosts: sorted,
    },
  };
}

export const Posts: React.FC<Props> = ({ allPosts }) => {
  const router = useRouter();
  const currentPage = parseInt((router.query.page as string) || '1', 10);
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  
  const posts = useMemo(() => {
    // Validate page is a valid number and within bounds
    let page = currentPage;
    if (isNaN(page) || page < 1) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }
    
    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return allPosts.slice(startIndex, endIndex);
  }, [allPosts, currentPage, totalPages]);

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
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </BasicLayout>
  );
};

export default Posts;
