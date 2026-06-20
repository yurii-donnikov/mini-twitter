import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.models';

export const selectUserState = createFeatureSelector<UserState>('profile');

export const selectUser = createSelector(
  selectUserState,
  (state) => state.profile,
);
