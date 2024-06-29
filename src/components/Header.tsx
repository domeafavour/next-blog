import React from "react";
import { HomeLink } from "./HomeLink";
import { MenuLink } from "./MenuLink";
import { ToggleTheme } from "./ToggleTheme";

interface Props {}

export type { Props as HeaderProps };

export const Header: React.FC<Props> = () => {
  return (
    <div className="bg-primary-foreground">
      <header className="content py-2">
        <div className="flex flex-row items-center">
          <h1 className="m-0 font-serif">
            <HomeLink>Welcome</HomeLink>
          </h1>
          <div className="flex flex-row gap-2 items-center ms-auto">
            <nav className="flex flex-row gap-2 font-serif font-bold">
              <MenuLink href="/posts">Posts</MenuLink>
            </nav>
            <ToggleTheme />
          </div>
        </div>
      </header>
    </div>
  );
};
