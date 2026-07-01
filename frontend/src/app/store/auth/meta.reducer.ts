import { Action, ActionReducer } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export function clearStateReducer<T>(
  reducer: ActionReducer<T>,
): ActionReducer<T, Action> {
  return (state: T | undefined, action: Action) => {
    if (action.type === AuthActions.logout.type) {
      state = undefined;
    }

    return reducer(state, action);
  };
}
