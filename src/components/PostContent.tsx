import "highlight.js/styles/dark.min.css";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { Pre } from "./Pre";

interface Props extends MDXRemoteProps {}

export type { Props as PostContentProps };

export function PostContent(props: Props) {
  return <MDXRemote {...props} components={{ pre: Pre }} />;
}
