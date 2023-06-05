import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type PostInfo = {
  id: string;
  title?: string;
  dateTime?: string;
  layout?: string;
  image?: string;
};

export type StaticPost = {
  frontMatter: PostInfo;
  slug: string;
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};
