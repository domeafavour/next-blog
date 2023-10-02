import Link from "next/link";
import React from "react";
import { NavLink } from "./NavLink";

interface Props {}

export type { Props as HeaderProps };

export const Header: React.FC<Props> = () => {
  return (
    <div className="container">
      <header className="header">
        <h3 className="header-title">
          <Link href="/">Welcome</Link>
          <div className="menu">
            <nav className="menu-content">
              <NavLink href="/posts">Posts</NavLink>
              <NavLink href="/notes">Notes</NavLink>
            </nav>
          </div>
        </h3>
      </header>
    </div>
  );
};
