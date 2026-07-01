import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { PostApi } from '../../core/api/post.api';
import * as PostActions from './post.actions';
import { concatLatestFrom } from '@ngrx/operators';
import { Store } from '@ngrx/store';
import { selectMetaLimit, selectMetaPage } from './post.selectors';

@Injectable()
export class PostEffects {
  private postApi = inject(PostApi);
  private actions$ = inject(Actions);
  private store = inject(Store);

  loadPostsFromToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.loadMyPosts),
      switchMap(({ page, limit }) =>
        this.postApi.getAllPosts(page, limit).pipe(
          map((response) =>
            PostActions.loadPostsSuccess({
              posts: response.data,
              meta: response.meta,
            }),
          ),
          catchError((err) => of(PostActions.loadPostsFailure({ error: err }))),
        ),
      ),
    );
  });

  createPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.createPost),

      concatLatestFrom(() => [
        this.store.select(selectMetaPage),
        this.store.select(selectMetaLimit),
      ]),

      switchMap(([{ post }, page, limit]) =>
        this.postApi.createPost(post).pipe(
          map(() =>
            PostActions.loadMyPosts({
              page,
              limit,
            }),
          ),

          catchError((err) => of(PostActions.loadPostsFailure({ error: err }))),
        ),
      ),
    );
  });

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.deletePost),

      concatLatestFrom(() => [
        this.store.select(selectMetaPage),
        this.store.select(selectMetaLimit),
      ]),

      switchMap(([{ id }, page, limit]) =>
        this.postApi.deletePost(id).pipe(
          map(() =>
            PostActions.loadMyPosts({
              page,
              limit,
            }),
          ),
          catchError((err) => of(PostActions.loadPostsFailure({ error: err }))),
        ),
      ),
    );
  });
}
