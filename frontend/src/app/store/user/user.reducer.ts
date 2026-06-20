import { createReducer, on } from '@ngrx/store';
import { UserState } from './user.models';
import { updateUserSuccess } from './user.actions';

export const initialState: UserState = {
  profile: null,
};

export const userReducer = createReducer(
  initialState,
  on(updateUserSuccess, (state, { user }) => ({
    ...state,
    profile: user,
  })),
);
