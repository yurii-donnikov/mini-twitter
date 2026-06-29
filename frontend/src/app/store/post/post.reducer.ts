import { createReducer, on } from '@ngrx/store';
import * as PostActions from './post.actions';
import { PostState } from './post.models';

const initialState: PostState = {
  posts: null,
  meta: {
    page: 1,
    limit: 10,
  },
};

export const postReducer = createReducer(
  initialState,

  on(PostActions.loadPostsSuccess, (state, { posts, meta }) => ({
    ...state,
    posts,
    meta,
    loading: false,
  })),
  on(PostActions.loadPostsFailure, (state, notification) => ({
    ...state,
  })),
);
