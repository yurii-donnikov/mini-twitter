import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.models';

export const selectPost = createFeatureSelector<PostState>('post');

export const selectAllPosts = createSelector(
  selectPost,
  (state) => state.posts,
);
