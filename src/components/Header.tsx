import Link from 'next/link';
import React from 'react';

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
              <Link href="/posts">Posts</Link>
              <Link href="/notes">Notes</Link>
            </nav>
          </div>
        </h3>
      </header>
    </div>
  );
};
