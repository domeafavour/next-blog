import classNames from 'classnames';
import React from 'react';

type Props = React.ComponentProps<'div'>;

export const PostTagsWrapper = React.forwardRef<
  React.ComponentRef<'div'> | null,
  Props
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <div
      ref={forwardedRef}
      className={classNames(
        'flex flex-row flex-wrap w-fit gap-1 mt-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

PostTagsWrapper.displayName = 'PostTagsWrapper';
