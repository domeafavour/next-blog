import { BasicLayout } from '@/components';
import { PostInfo } from '@/typings';
import { getPostFiles, getPostInfos } from '@/utils/posts';
import Link from 'next/link';
import React from 'react';

interface Props {
  posts: PostInfo[];
}

export type { Props as PostsProps };

export async function getStaticProps() {
  return {
    props: {
      posts: await getPostInfos(),
    },
  };
}

export const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <BasicLayout subTitle="Posts">
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title ?? post.id}</Link>
            </li>
          );
        })}
      </ul>
    </BasicLayout>
  );
};

export default Posts;
