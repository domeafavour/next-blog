import React from 'react';

type Props = React.ComponentProps<'div'>;

export type { Props as PostListWrapperProps };

export const PostListWrapper = React.forwardRef<HTMLDivElement | null, Props>(
  ({ style, children, ...props }, ref) => {
    return (
      <div ref={ref} className="py-0 pe-0" style={style} {...props}>
        {children}
      </div>
    );
  }
);

PostListWrapper.displayName = 'PostListWrapper;';
