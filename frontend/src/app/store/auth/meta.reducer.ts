import { ActionReducer } from '@ngrx/store';

import * as AuthActions from './auth.actions';

export function clearStateReducer(
  reducer: ActionReducer<any>,
): ActionReducer<any> {
  return (state, action) => {
    if (action.type === AuthActions.logout.type) {
      state = undefined;
    }

    return reducer(state, action);
  };
}
