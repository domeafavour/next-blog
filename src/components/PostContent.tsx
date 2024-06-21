import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/dark.min.css";

interface Props extends MDXRemoteProps {}

export type { Props as PostContentProps };

export function PostContent(props: Props) {
  useEffect(() => {
    hljs.highlightAll();
  });
  return <MDXRemote {...props} />;
}
