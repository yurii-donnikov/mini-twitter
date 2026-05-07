import { createAction, props } from '@ngrx/store';
import { User } from '../user/user.models';

export const loadUserFromToken = createAction('[Auth] Load User From Token');

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>(),
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>(),
);

export const logout = createAction('[Auth] Logout');
