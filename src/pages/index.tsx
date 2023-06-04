import { BasicLayout } from '@/components';
import { Post } from '@/components/Post';
import { PostEntity } from '@/typings';

const posts: PostEntity[] = [
  {
    content:
      'care practical almost across of construction bite syllable shorter die alone between fair instrument standard door belt brown tower maybe account sometime truck wait',
    date: '2/28/2087',
    id: 'ce99b841-f8bb-590b-93db-e56ed62ca7c8',
    image:
      'https://p1.pxfuel.com/preview/363/130/411/cat-mackerel-photograph-wildlife-photography.jpg',
    title: 'Bernard Barker',
    url: '/posts/ce99b841-f8bb-590b-93db-e56ed62ca7c8',
  },
  {
    content:
      'tried that outside torn worth hurried she just pupil dust rose poor doubt middle uncle full guide comfortable quickly corn require practical card closely',
    date: '7/25/2070',
    id: '12',
    image:
      'https://i.pinimg.com/originals/b5/b0/4b/b5b04b1a059ffd24dc5543f829961de8.jpg',
    title: 'Laura Day',
    url: '/posts/12',
  },
];

export default function Home() {
  return (
    <BasicLayout>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </BasicLayout>
  );
}
