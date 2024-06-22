import React from "react";
import { Badge } from "./ui/badge";

type Props = React.ComponentProps<"small">;

export type { Props as PostTagProps };

export const PostTag = React.forwardRef<
  React.ComponentRef<"small"> | null,
  Props
>(({ children, ...props }, forwardedRef) => {
  return (
    <Badge ref={forwardedRef} variant="outline" {...props}>
      {children}
    </Badge>
  );
});

PostTag.displayName = "PostTag";
