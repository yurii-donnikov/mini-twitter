import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthState } from './auth.models';

const initialState: AuthState = {
  isAutentificated: false,
  error: null,
  profile: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    isAutentificated: true,
    profile: user,
  })),
  on(AuthActions.loginFailure, (state, notification) => ({
    ...state,
    isAutentificated: false,
    error: notification.error,
  })),
);
