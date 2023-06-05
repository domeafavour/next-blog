import { StaticPost } from '@/typings';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

const BASE_DIR = './src/pages/posts';

export function getPostFiles() {
  return fs.readdirSync(BASE_DIR).filter((d) => d.endsWith('.mdx'));
}

export async function getStaticPost(id: string) {
  const markdownWithMeta = await fs.promises.readFile(
    path.join(BASE_DIR, `${id}.mdx`),
    'utf-8'
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  const post: StaticPost = {
    frontMatter: frontMatter,
    slug: id,
    mdxSource,
  };
  return post;
}
