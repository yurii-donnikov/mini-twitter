import { createAction, props } from '@ngrx/store';

export const loadUserFromToken = createAction('[Auth] Load User From Token');

export const setUser = createAction('[Auth] Set User', props<{ user: any }>());

export const logout = createAction('[Auth] Logout');
