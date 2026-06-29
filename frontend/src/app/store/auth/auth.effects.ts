import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import * as AuthActions from './auth.actions';
import { AuthApi } from '../../core/api/auth.api';
import { loginFailure, loginSuccess } from './auth.actions';
import { loadMyPosts } from '../post/post.actions';

@Injectable()
export class AuthEffects {
  private authApi = inject(AuthApi);
  private actions$ = inject(Actions);

  loadUserFromToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loadUserFromToken),
      switchMap(() =>
        this.authApi.me().pipe(
          switchMap((user) => [
            loginSuccess({ user }),
            loadMyPosts({
              page: 1,
              limit: 10,
            }),
          ]),

          catchError((err) => of(loginFailure({ error: err }))),
        ),
      ),
    );
  });
}
