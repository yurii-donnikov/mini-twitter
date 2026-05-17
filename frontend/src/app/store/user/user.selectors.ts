import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.models';

export const selectUserState = createFeatureSelector<UserState>('user');

export const loadedUser = createSelector(
  selectUserState,
  (state) => state.profile,
);
