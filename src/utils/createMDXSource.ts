import bash from "highlight.js/lib/languages/bash";
import dockerfile from "highlight.js/lib/languages/dockerfile";
import { common } from "lowlight";
import { bundleMDX } from "mdx-bundler";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export async function createMDXSource(content: string, cwd: string) {
  return await bundleMDX({
    source: content,
    cwd,
    mdxOptions(options) {
      const remarkPlugins = options.remarkPlugins ?? [];
      const rehypePlugins = options.rehypePlugins ?? [];

      options.remarkPlugins = [...remarkPlugins, remarkGfm as any];
      options.rehypePlugins = [
        ...rehypePlugins,
        [
          // @ts-ignore this is ok.
          rehypeHighlight,
          {
            detect: true,
            languages: { ...common, dockerfile, bash },
          },
        ],
      ];
      return options;
    },
  });
}
