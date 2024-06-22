import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function MenuLink({
  href,
  children,
}: React.PropsWithChildren<{ href: string }>) {
  const pathname = usePathname();
  const matched = !!pathname.match(href);

  return (
    <Link
      href={href}
      className={cn(
        "px-2 py-1",
        "hover:text-primary",
        "hover:bg-primary/10",
        "text-lg no-underline",
        "rounded-md",
        matched && ["text-primary", "bg-primary/10"],
        !matched && ["text-primary/60"]
      )}
    >
      {children}
    </Link>
  );
}
