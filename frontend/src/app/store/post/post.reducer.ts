import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../auth/auth.actions';

export interface PostState {
  posts: number;
}

const initialState: PostState = {
  posts: 1,
};

export const postReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, user) => ({
    ...state,
    posts: 232,
  })),
);
