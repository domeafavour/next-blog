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
        <div className="flex flex-row justify-between items-center border-t-0 border-l-0 border-r-0 border-b border-dashed">
          <Link href={`/posts/${id}`} className="no-underline">
            {title ?? id}
          </Link>
          <small className="text-foreground">{date}</small>
        </div>
      </li>
    );
  }
);

PostListItem.displayName = "PostListItem";
