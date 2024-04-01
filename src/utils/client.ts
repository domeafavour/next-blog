import { PostInfo } from '@/typings';

type YearMonthId = 'UNKNOWN' | number;

function getTimeByYearAndMonth(year: number, month: number) {
  return new Date(year, month, 1).getTime();
}

export function groupByYearMonth(posts: PostInfo[]) {
  const state = {
    yearMonthIds: [] as YearMonthId[],
    yearMonthIdToPostIds: {} as Record<YearMonthId, string[]>,
    entities: {} as Record<string, PostInfo>,
    ids: [] as string[],
  };
  for (const post of posts) {
    const date = new Date(post.date!);
    const yearMonthId: YearMonthId = post.date
      ? getTimeByYearAndMonth(date.getFullYear(), date.getMonth())
      : 'UNKNOWN';
    if (!state.yearMonthIds.includes(yearMonthId)) {
      state.yearMonthIds.push(yearMonthId);
      state.yearMonthIdToPostIds[yearMonthId] = [];
    }
    state.yearMonthIdToPostIds[yearMonthId].push(post.id);
    state.entities[post.id] = post;
    state.ids.push(post.id);
  }
  state.yearMonthIds.sort((a, b) => {
    if (a === 'UNKNOWN') {
      return 1;
    }
    if (b === 'UNKNOWN') {
      return -1;
    }
    return b - a;
  });
  return state;
}

export function makeDateStringOrUnknown(date?: number | null | string) {
  return date
    ? Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(date))
    : 'UNKNOWN';
}

export function makeYearMonthStringOrUnknown(date?: YearMonthId | null) {
  return date === 'UNKNOWN' || !date
    ? 'UNKNOWN'
    : Intl.DateTimeFormat('en', { year: 'numeric', month: 'long' }).format(
        new Date(date)
      );
}

export function makeDayStringOrUnknown(date?: number | null) {
  return date
    ? Intl.DateTimeFormat('en', {
        day: 'numeric',
      }).format(new Date(date))
    : 'UNKNOWN';
}

export function getPostPath(id: string) {
  return `/posts/${id}`;
}
