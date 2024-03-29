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
      className={classNames('hover:text-black', 'text-lg hover:underline', {
        'text-black': matched,
        'text-gray-500': !matched,
        underline: matched,
        'no-underline': !matched,
      })}
    >
      {children}
    </Link>
  );
}
