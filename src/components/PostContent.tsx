import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import React from "react";
import "highlight.js/styles/dark.min.css";

interface Props extends MDXRemoteProps {}

export type { Props as PostContentProps };

export function PostContent(props: Props) {
  return <MDXRemote {...props} />;
}
