import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../auth/auth.actions';
import { UserState } from './user.models';

export const initialState: UserState = {
  profile: null,
};

export const userReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    profile: user,
  })),
  on(AuthActions.logout, () => initialState),
);
