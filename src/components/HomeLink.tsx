import Link from 'next/link';
import React from 'react';

export function HomeLink({ children }: React.PropsWithChildren) {
  return (
    <Link
      href="/"
      className="hover:text-black text-3xl text-slate-800 no-underline"
    >
      {children}
    </Link>
  );
}
