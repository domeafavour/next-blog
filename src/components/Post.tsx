import { PostEntity } from '@/typings';
import Link from 'next/link';
import React from 'react';

interface Props {
  post: PostEntity;
}

export type { Props as PostProps };

export const Post: React.FC<Props> = ({ post }) => {
  return (
    <div className="post-container">
      <h1>
        <Link href={post.url}>{post.title}</Link>
      </h1>
      <div className="thumbnail-container">
        <a href={post.url}>
          <img
            src={post.image}
            alt={post.title}
            style={{ aspectRatio: '16/10', objectFit: 'cover' }}
          />
        </a>
      </div>
      <p>
        {post.content}
        <a href={post.url}>Read more</a>
        <span className="post-date">
          <i className="fa fa-calendar" aria-hidden="true"></i>
          {post.date}
          <i className="fa fa-clock-o" aria-hidden="true"></i>
        </span>
      </p>
    </div>
  );
};
