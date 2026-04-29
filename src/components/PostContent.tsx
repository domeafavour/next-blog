import "highlight.js/styles/dark.min.css";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { Pre } from "./Pre";

interface Props {
  code: string;
}

export type { Props as PostContentProps };

export function PostContent({ code }: Props) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return <Component components={{ pre: Pre }} />;
}
