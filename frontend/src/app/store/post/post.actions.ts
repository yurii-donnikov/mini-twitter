import { createAction, props } from '@ngrx/store';
import { Post } from './post.models';

export const loadMyPosts = createAction('[Post] Load Posts From Token');

export const loadPostsSuccess = createAction(
  '[Post] Loading Success',
  props<{ posts: [Post] }>(),
);

export const loadPostsFailure = createAction(
  '[Post] Loading Failure',
  props<{ error: string }>(),
);

export const loadFollowerPosts = createAction(
  '[Post] Load Posts From Followers',
);

export const loadFollowerSuccess = createAction(
  '[Post] Loading  Followers Posts Success',
);
