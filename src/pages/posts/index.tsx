import { BasicLayout } from '@/components';
import React from 'react';

interface Props {}

export type { Props as PostsProps };

export const Posts: React.FC<Props> = () => {
  return (
    <BasicLayout>
      <h1>Posts</h1>
    </BasicLayout>
  );
};

export default Posts;
