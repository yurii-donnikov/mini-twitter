import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: any | null;
}

const initialState: AuthState = {
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.setUser, (state, { user }) => ({
    ...state,
    user,
  })),
  on(AuthActions.logout, () => initialState),
);
