import Link from "next/link";
import React from "react";

type Props = {
  id: string;
  title?: string;
  date?: string;
};

export type { Props as PostListItemProps };

export const PostListItem = React.forwardRef<HTMLLIElement | null, Props>(
  ({ id, title, date }, ref) => {
    return (
      <li ref={ref}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px dashed #ddd",
          }}
        >
          <Link href={`/posts/${id}`} style={{ textDecoration: "none" }}>
            {title ?? id}
          </Link>
          <small style={{ color: "#666" }}>{date}</small>
        </div>
      </li>
    );
  }
);

PostListItem.displayName = "PostListItem";
