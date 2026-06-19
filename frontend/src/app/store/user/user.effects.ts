import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { updateUserSuccess, updateUserFailure, loadUser } from './user.actions';
import { AuthApi } from '../../core/api/auth.api';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private authApi = inject(AuthApi);

  getUserById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUser),
      switchMap(({ id }) =>
        this.authApi.userById(id).pipe(
          map((user) => {
            return updateUserSuccess({ user });
          }),
          catchError((err) => of(updateUserFailure({ error: err.message }))),
        ),
      ),
    );
  });
}
