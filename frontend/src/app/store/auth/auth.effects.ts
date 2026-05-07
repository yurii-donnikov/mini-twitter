import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError, of } from 'rxjs';

import * as AuthActions from './auth.actions';
import { AuthApi } from '../../core/api/auth.api';
import { loginFailure, loginSuccess } from './auth.actions';

@Injectable()
export class AuthEffects {
  private authApi = inject(AuthApi);
  private actions$ = inject(Actions);

  loadUserFromToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loadUserFromToken),
      switchMap(() =>
        this.authApi.me().pipe(
          map((user) => {
            console.log(user);
            return loginSuccess(user);
          }),

          catchError((err) => of(loginFailure({ error: err }))),
        ),
      ),
    );
  });
}
