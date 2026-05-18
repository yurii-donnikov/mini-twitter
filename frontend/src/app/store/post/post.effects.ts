import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { PostApi } from '../../core/api/post.api';
import { loadMyPosts } from './post.actions';
import * as PostActions from './post.actions';

@Injectable()
export class PostEffects {
  private postApi = inject(PostApi);
  private actions$ = inject(Actions);

  loadPostsFromToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.loadMyPosts),
      switchMap(() =>
        this.postApi.myPosts().pipe(
          map((posts) => {
            return PostActions.loadPostsSuccess({ posts });
          }),

          catchError((err) => of(PostActions.loadPostsFailure({ error: err }))),
        ),
      ),
    );
  });
}
