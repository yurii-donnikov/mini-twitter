import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.models';

export const selectPost = createFeatureSelector<PostState>('post');

export const selectAllPosts = createSelector(
  selectPost,
  (state) => state.posts,
);

export const selectMetaPage = createSelector(
  selectPost,
  (state) => state.meta?.page,
);

export const selectMetaLimit = createSelector(
  selectPost,
  (state) => state.meta?.limit,
);

export const selectMetaTotalPages = createSelector(
  selectPost,
  (state) => state.meta?.totalPages,
);
