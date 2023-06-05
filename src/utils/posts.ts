import { PostInfo, StaticPost } from '@/typings';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

const BASE_DIR = './src/pages/posts';

export function getPostFiles() {
  return fs.readdirSync(BASE_DIR).filter((d) => d.endsWith('.mdx'));
}

export async function getPostInfos(): Promise<PostInfo[]> {
  const postFiles = getPostFiles();
  return (await Promise.all(postFiles.map((file) => getStaticPost(file)))).map(
    (post) => post.frontMatter as PostInfo
  );
}

export async function getStaticPost(id: string) {
  const markdownWithMeta = await fs.promises.readFile(
    path.join(BASE_DIR, id),
    'utf-8'
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  const post: StaticPost = {
    frontMatter: {
      ...{ /** set default layout: `post` */ layout: 'post', ...frontMatter },
      id,
    },
    slug: id,
    mdxSource,
  };
  return post;
}
