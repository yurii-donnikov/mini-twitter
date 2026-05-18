import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.models';

export const selectAuth = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuth,
  (state) => state.isAutentificated,
);

export const selectProfile = createSelector(
  selectAuth,
  (state) => state.profile,
);
