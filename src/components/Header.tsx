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
          <h3 className="p-0 m-0 font-serif">
            <HomeLink>Welcome</HomeLink>
          </h3>
          <div className="block ms-auto">
            <nav className="flex flex-row gap-2 font-serif font-bold">
              <MenuLink href="/posts">Posts</MenuLink>
              <MenuLink href="/notes">Notes</MenuLink>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};
