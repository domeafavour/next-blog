import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = React.ComponentProps<'div'>;

export const PostTagsWrapper = React.forwardRef<
  React.ComponentRef<'div'> | null,
  Props
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <div
      ref={forwardedRef}
      className={twMerge('flex flex-row flex-wrap w-fit gap-1 mt-2', className)}
      {...props}
    >
      {children}
    </div>
  );
});

PostTagsWrapper.displayName = 'PostTagsWrapper';
