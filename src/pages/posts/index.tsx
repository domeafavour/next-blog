import { BasicLayout } from "@/components";
import { PostInfo } from "@/typings";
import { getPostInfos } from "@/utils/posts";
import Link from "next/link";
import React from "react";

interface Props {
  posts: PostInfo[];
}

export type { Props as PostsProps };

function parseDate(date?: string) {
  return Date.parse(date ?? Date.now().toString());
}

export async function getStaticProps() {
  const posts = await getPostInfos();
  const sorted = posts
    .slice()
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));

  return {
    props: {
      posts: sorted,
    },
  };
}

export const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <BasicLayout subTitle="Posts">
      <ul style={{ padding: "0 0 0 1em" }}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px dashed #ddd",
                }}
              >
                <Link
                  href={`/posts/${post.id}`}
                  style={{ textDecoration: "none" }}
                >
                  {post.title ?? post.id}
                </Link>
                <small style={{ color: "#666" }}>{post.date}</small>
              </div>
            </li>
          );
        })}
      </ul>
    </BasicLayout>
  );
};

export default Posts;
