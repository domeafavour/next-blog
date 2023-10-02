import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export const NavLink: React.FC<React.PropsWithChildren<LinkProps>> = ({
  children,
  href,
  ...props
}) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link href={href} className={active ? "active" : undefined} {...props}>
      {children}
    </Link>
  );
};
