import React from "react";

type Props = React.ComponentProps<"ul">;

export type { Props as PostListWrapperProps };

export const PostListWrapper = React.forwardRef<HTMLUListElement | null, Props>(
  ({ style, children, ...props }, ref) => {
    return (
      <ul ref={ref} style={{ padding: "0 0 0 1em", ...style }} {...props}>
        {children}
      </ul>
    );
  }
);

PostListWrapper.displayName = "PostListWrapper;";
