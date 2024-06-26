import { PostInfo, StaticPost } from "@/typings";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const BASE_DIR = "./src/pages/posts";

export function getPostFiles() {
  return fs.readdirSync(BASE_DIR).filter((d) => d.endsWith(".mdx"));
}

export async function getPostInfos(): Promise<PostInfo[]> {
  const postFiles = getPostFiles();
  return (await Promise.all(postFiles.map((file) => getStaticPost(file)))).map(
    (post) => {
      return post.frontMatter as PostInfo;
    },
  );
}

function parseDate(date?: number | null) {
  return date ?? 0;
}

export async function getSortedPosts() {
  const posts = await getPostInfos();
  return posts.slice().sort((a, b) => parseDate(b.date) - parseDate(a.date));
}

// 2023-06-08-hello-world.mdx
// { date: '2023-06-08', slug: 'hello-world' }
const dateFileNamePattern = /^(?<date>\d+-\d+-\d+)-?(?<slug>.+)\.mdx?$/;

// hello-world.md
// { slug: 'hello-world' }
const fileNamePattern = /^(?<slug>.+)\.mdx?$/;

type BasePostInfo = {
  date?: string;
  slug?: string;
};

function getPostInfoFromFileName(fileName: string): BasePostInfo | undefined {
  return (
    fileName.match(dateFileNamePattern)?.groups ??
    fileName.match(fileNamePattern)?.groups
  );
}

export async function getStaticPost(fileName: string) {
  const markdownWithMeta = await fs.promises.readFile(
    path.join(BASE_DIR, fileName),
    "utf-8",
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const baseInfo = getPostInfoFromFileName(fileName);
  const post: StaticPost = {
    frontMatter: {
      ...{
        /** set default layout: `post` */
        layout: "post",
        ...baseInfo,
        ...frontMatter,
        date: baseInfo?.date ? Date.parse(baseInfo.date) : null,
      },
      id: fileName,
    },
    slug: fileName,
    content,
  };
  return post;
}
