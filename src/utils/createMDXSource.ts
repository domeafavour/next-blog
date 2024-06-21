import bash from "highlight.js/lib/languages/bash";
import dockerfile from "highlight.js/lib/languages/dockerfile";
import { common } from "lowlight";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export async function createMDXSource(content: string) {
  return await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          // @ts-ignore this is ok.
          rehypeHighlight,
          {
            languages: { ...common, dockerfile, bash },
          },
        ],
      ],
    },
  });
}
