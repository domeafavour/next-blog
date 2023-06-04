import Link from 'next/link';
import React from 'react';

interface Props {}

export type { Props as FooterProps };

export const Footer: React.FC<Props> = () => {
  return (
    <footer className="footer">
      <div className="footer-description">
        <Link href="/">welcome</Link>
      </div>
    </footer>
  );
};
