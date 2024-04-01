import Link from 'next/link';
import React from 'react';

interface Props {}

export type { Props as FooterProps };

export const Footer: React.FC<Props> = () => {
  return (
    <footer className="text-left my-8">
      <div className="block content">
        <Link
          href="/"
          className="no-underline text-gray-600 hover:text-gray-800 py-2"
        >
          welcome
        </Link>
      </div>
    </footer>
  );
};
