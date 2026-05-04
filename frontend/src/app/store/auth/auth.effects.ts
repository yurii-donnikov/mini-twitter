import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError, of } from 'rxjs';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}

  // loadUserFromToken$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.loadUserFromToken),
  //     switchMap(() =>
  //       this.http.get<any>('http://localhost:3000/auth/me').pipe(
  //         map((user) => AuthActions.setUser({ user })),
  //         catchError(() => of(AuthActions.logout())),
  //       ),
  //     ),
  //   ),
  // );

  loadUserFromToken$() {
    console.log(123);
  }
}
