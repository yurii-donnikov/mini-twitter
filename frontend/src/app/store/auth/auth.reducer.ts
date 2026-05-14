import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  isAutentificated: boolean;
}

const initialState: AuthState = {
  isAutentificated: false,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state) => ({
    ...state,
    isAutentificated: true,
  })),
  on(AuthActions.logout, () => initialState),
);
