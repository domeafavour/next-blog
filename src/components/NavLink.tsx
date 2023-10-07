import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

function ensureStringHref(href: LinkProps["href"]): string {
  return typeof href === "string" ? href : href.pathname!;
}

export const NavLink: React.FC<React.PropsWithChildren<LinkProps>> = ({
  children,
  href,
  ...props
}) => {
  const pathname = usePathname();
  const active = pathname.match(ensureStringHref(href));
  return (
    <Link href={href} className={active ? "active" : undefined} {...props}>
      {children}
    </Link>
  );
};
