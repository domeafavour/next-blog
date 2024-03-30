import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export function MenuLink({
  href,
  children,
}: React.PropsWithChildren<{ href: string }>) {
  const pathname = usePathname();
  const matched = !!pathname.match(href);

  return (
    <Link
      href={href}
      className={classNames(
        'px-2 py-1',
        'hover:text-black',
        'hover:bg-gray-200',
        'text-lg no-underline',
        'rounded-md',
        {
          'text-black': matched,
          'text-gray-500': !matched,
          'bg-gray-200': matched,
        }
      )}
    >
      {children}
    </Link>
  );
}
