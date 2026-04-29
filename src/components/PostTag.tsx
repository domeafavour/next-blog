import React from "react";
import { Badge } from "./ui/badge";

type Props = React.ComponentPropsWithoutRef<typeof Badge>;

export type { Props as PostTagProps };

export const PostTag = React.forwardRef<
  React.ComponentRef<typeof Badge>,
  Props
>(({ children, ...props }, forwardedRef) => {
  return (
    <Badge ref={forwardedRef} variant="outline" {...props}>
      {children}
    </Badge>
  );
});

PostTag.displayName = "PostTag";
