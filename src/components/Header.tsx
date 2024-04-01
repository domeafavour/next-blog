import React from 'react';
import { HomeLink } from './HomeLink';
import { MenuLink } from './MenuLink';

interface Props {}

export type { Props as HeaderProps };

export const Header: React.FC<Props> = () => {
  return (
    <div className="bg-gray-50">
      <header className="content py-2">
        <div className="flex flex-row items-center">
          <h1 className="m-0 font-serif">
            <HomeLink>Welcome</HomeLink>
          </h1>
          <nav className="flex flex-row gap-2 font-serif font-bold ms-auto">
            <MenuLink href="/posts">Posts</MenuLink>
            <MenuLink href="/notes">Notes</MenuLink>
          </nav>
        </div>
      </header>
    </div>
  );
};
