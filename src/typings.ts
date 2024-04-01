import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type PostInfo = {
  id: string;
  title?: string;
  date?: number | null;
  layout?: string;
  image?: string;
  tags?: string[];
};

export type StaticPost = {
  frontMatter: PostInfo;
  slug: string;
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};
