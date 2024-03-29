import Link from 'next/link';
import React from 'react';

interface Props {}

export type { Props as FooterProps };

export const Footer: React.FC<Props> = () => {
  return (
    <footer className="text-left m-8">
      <div className="block">
        <Link
          href="/"
          className="no-underline text-gray-600 hover:text-gray-800 p-2"
        >
          welcome
        </Link>
      </div>
    </footer>
  );
};
