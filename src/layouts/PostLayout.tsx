import { BasicLayout } from '@/components';
import React from 'react';

interface Props extends React.PropsWithChildren<{}> {}

export type { Props as PostLayoutProps };

export const PostLayout: React.FC<Props> = ({ children }) => {
  return <BasicLayout subTitle="post">{children}</BasicLayout>;
};
