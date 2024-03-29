import Link from 'next/link';
import React from 'react';

export function MenuLink({
  href,
  children,
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <Link
      href={href}
      className="hover:text-black text-gray-500 text-lg pe-2 no-underline hover:underline"
    >
      {children}
    </Link>
  );
}
