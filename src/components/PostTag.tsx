import classNames from 'classnames';
import React from 'react';

type Props = React.ComponentProps<'small'>;

export type { Props as PostTagProps };

export const PostTag = React.forwardRef<
  React.ComponentRef<'small'> | null,
  Props
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <small
      ref={forwardedRef}
      className={classNames(
        'text-xs rounded-sm border border-solid border-gray-200 bg-gray-100 font-mono px-2',
        className
      )}
      {...props}
    >
      {children}
    </small>
  );
});

PostTag.displayName = 'PostTag';
