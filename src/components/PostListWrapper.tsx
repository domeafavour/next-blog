import React from 'react';

type Props = React.ComponentProps<'ul'>;

export type { Props as PostListWrapperProps };

export const PostListWrapper = React.forwardRef<HTMLUListElement | null, Props>(
  ({ style, children, ...props }, ref) => {
    return (
      <ul ref={ref} className="py-0 pe-0 ps-4" style={style} {...props}>
        {children}
      </ul>
    );
  }
);

PostListWrapper.displayName = 'PostListWrapper;';
