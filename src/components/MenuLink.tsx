import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export function MenuLink({
  href,
  children,
}: React.PropsWithChildren<{ href: string }>) {
  const pathname = usePathname();
  const matched = !!pathname.match(href);

  return (
    <Link
      href={href}
      className={twMerge(
        'px-2 py-1',
        'hover:text-black',
        'hover:bg-gray-200',
        'text-lg no-underline',
        'rounded-md',
        matched && ['text-black', 'bg-gray-200'],
        !matched && ['text-gray-500']
      )}
    >
      {children}
    </Link>
  );
}
