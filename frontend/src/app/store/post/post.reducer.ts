import { createReducer, on } from '@ngrx/store';
import * as PostActions from './post.actions';
import { PostState } from './post.models';

const initialState: PostState = {
  posts: null,
};

export const postReducer = createReducer(
  initialState,
  on(PostActions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts: posts,
  })),
  on(PostActions.loadPostsFailure, (state, notification) => ({
    ...state,
  })),
);
