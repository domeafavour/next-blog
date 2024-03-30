import { Flex } from '@/components/Flex';
import { PostButton } from '@/components/PostButton';
import { PostInfo } from '@/typings';
import { getPostPath } from '@/utils/client';
import Link from 'next/link';

interface Props {
  previous: PostInfo | null;
  next: PostInfo | null;
}

export type { Props as PostFooterProps };

export function PostFooter({ previous, next }: Props) {
  return (
    <Flex flexDirection="row" justifyContent="space-between">
      <div>
        {previous ? (
          <PostButton>
            <Link href={getPostPath(previous.id)} className="no-underline">
              <span className="me-1">{'<'}</span>
              {previous.title}
            </Link>
          </PostButton>
        ) : null}
      </div>
      <div>
        {next ? (
          <PostButton>
            <Link href={getPostPath(next.id)} className="no-underline">
              {next.title}
              <span className="ms-1">{'>'}</span>
            </Link>
          </PostButton>
        ) : null}
      </div>
    </Flex>
  );
}
