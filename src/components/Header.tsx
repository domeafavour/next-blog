import React from 'react';
import { HomeLink } from './HomeLink';
import { MenuLink } from './MenuLink';

interface Props {}

export type { Props as HeaderProps };

export const Header: React.FC<Props> = () => {
  return (
    <div className="bg-gray-50">
      <header className="py-2 mb-8 content">
        <h3 className='p-0 m-0'>
          <HomeLink>Welcome</HomeLink>
          <div className="pt-2 block">
            <nav className="flex flex-row gap-2">
              <MenuLink href="/posts">Posts</MenuLink>
              <MenuLink href="/notes">Notes</MenuLink>
            </nav>
          </div>
        </h3>
      </header>
    </div>
  );
};
