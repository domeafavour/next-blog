import React from 'react';
import { HomeLink } from './HomeLink';
import { MenuLink } from './MenuLink';

interface Props {}

export type { Props as HeaderProps };

export const Header: React.FC<Props> = () => {
  return (
    <div className="container">
      <header className="py-2 mb-8">
        <h3>
          <HomeLink>Welcome</HomeLink>
          <div className="pt-2 block">
            <nav className="float-start">
              <MenuLink href="/posts">Posts</MenuLink>
              <MenuLink href="/notes">Notes</MenuLink>
            </nav>
          </div>
        </h3>
      </header>
    </div>
  );
};
