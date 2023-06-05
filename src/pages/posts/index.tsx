import { BasicLayout } from '@/components';
import { getPostFiles } from '@/utils/posts';
import Link from 'next/link';
import React from 'react';

interface Props {
  posts: string[];
}

export type { Props as PostsProps };

export async function getStaticProps() {
  return {
    props: {
      posts: getPostFiles(),
    },
  };
}

export const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <BasicLayout subTitle="Posts">
      <ul>
        {posts.map((post) => {
          const id = post.split('.')[0];
          return (
            <li key={post}>
              <Link key={post} href={`/posts/${id}`}>
                {id}
              </Link>
            </li>
          );
        })}
      </ul>
    </BasicLayout>
  );
};

export default Posts;
