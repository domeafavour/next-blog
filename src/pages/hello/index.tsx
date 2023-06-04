import React from 'react';
import Hello from './hello.mdx';
import { BasicLayout } from '@/components';

interface Props {}

export type { Props as HelloWorldProps };

function HelloWorld(props: Props) {
  return (
    <BasicLayout subTitle="Posts">
      <Hello />
    </BasicLayout>
  );
}

export default HelloWorld;
