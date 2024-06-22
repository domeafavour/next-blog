import Link from "next/link";
import React from "react";

export function HomeLink({ children }: React.PropsWithChildren) {
  return (
    <Link
      href="/"
      className="hover:text-primary/90 text-3xl text-primary no-underline"
    >
      {children}
    </Link>
  );
}
