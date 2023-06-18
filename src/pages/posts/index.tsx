import { BasicLayout } from '@/components';
import { PostInfo } from '@/typings';
import { getPostInfos } from '@/utils/posts';
import Link from 'next/link';
import React from 'react';

interface Props {
  posts: PostInfo[];
}

export type { Props as PostsProps };

function parseDate(date?: string) {
  return Date.parse(date ?? Date.now().toString());
}

export async function getStaticProps() {
  const posts = await getPostInfos();
  const sorted = posts
    .slice()
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));

  return {
    props: {
      posts: sorted,
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
