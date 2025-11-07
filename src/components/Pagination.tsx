import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  baseUrl = '/posts',
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const getPageUrl = (page: number) => {
    return page === 1 ? baseUrl : `${baseUrl}?page=${page}`;
  };

  const renderPageNumbers = () => {
    const pages: React.ReactNode[] = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pages.push(
        <Link key={1} href={getPageUrl(1)} passHref legacyBehavior>
          <Button variant="outline" size="sm" asChild>
            <a>1</a>
          </Button>
        </Link>
      );
      if (startPage > 2) {
        pages.push(
          <span key="start-ellipsis" className="px-2">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Link key={i} href={getPageUrl(i)} passHref legacyBehavior>
          <Button
            variant={i === currentPage ? 'default' : 'outline'}
            size="sm"
            asChild
          >
            <a>{i}</a>
          </Button>
        </Link>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="end-ellipsis" className="px-2">
            ...
          </span>
        );
      }
      pages.push(
        <Link key={totalPages} href={getPageUrl(totalPages)} passHref legacyBehavior>
          <Button variant="outline" size="sm" asChild>
            <a>{totalPages}</a>
          </Button>
        </Link>
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8 mb-8">
      {currentPage === 1 ? (
        <Button variant="outline" size="sm" disabled>
          Previous
        </Button>
      ) : (
        <Link
          href={getPageUrl(Math.max(1, currentPage - 1))}
          passHref
          legacyBehavior
        >
          <Button variant="outline" size="sm" asChild>
            <a>Previous</a>
          </Button>
        </Link>
      )}
      {renderPageNumbers()}
      {currentPage === totalPages ? (
        <Button variant="outline" size="sm" disabled>
          Next
        </Button>
      ) : (
        <Link
          href={getPageUrl(Math.min(totalPages, currentPage + 1))}
          passHref
          legacyBehavior
        >
          <Button variant="outline" size="sm" asChild>
            <a>Next</a>
          </Button>
        </Link>
      )}
    </div>
  );
};
