import { PostInfo } from "@/typings";

export function groupByYearMonth(posts: PostInfo[]) {
  const state = {
    yearMonthIds: [] as string[],
    yearMonthIdToPostIds: {} as Record<string, string[]>,
    entities: {} as Record<string, PostInfo>,
    ids: [] as string[],
  };
  for (const post of posts) {
    const date = new Date(post.date!);
    const yearMonthId = `${date.getFullYear()}-${date.getMonth() + 1}`;
    if (!state.yearMonthIds.includes(yearMonthId)) {
      state.yearMonthIds.push(yearMonthId);
      state.yearMonthIdToPostIds[yearMonthId] = [];
    }
    state.yearMonthIdToPostIds[yearMonthId].push(post.id);
    state.entities[post.id] = post;
    state.ids.push(post.id);
  }
  return state;
}

export function toLocaleDateString(date: number) {
  return new Date(date).toLocaleDateString();
}