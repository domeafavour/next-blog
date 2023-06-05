import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface PostEntity {
  id: string;
  url: string;
  title: string;
  content: string;
  image: string;
  date: string;
}

export type PostFrontMatter = {
  title?: string;
  layout?: string;
};

export type StaticPost = {
  frontMatter: PostFrontMatter;
  slug: string;
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};
