import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAllPosts,
  selectMetaLimit,
  selectMetaPage,
  selectMetaTotalPages,
} from '../../../store/post/post.selectors';
import { PostCardComponent } from '../post-card/post-card.component';
import { AsyncPipe } from '@angular/common';
import { PostComposerComponent } from '../post-composer/post-composer.component';
import { loadMyPosts } from '../../../store/post/post.actions';
import { skip } from 'rxjs';

@Component({
  selector: 'app-post-feed',
  imports: [PostCardComponent, AsyncPipe, PostComposerComponent],
  templateUrl: './post-feed.component.html',
  styleUrl: './post-feed.component.scss',
})
export class PostFeedComponent {
  private readonly store = inject(Store);

  readonly posts$ = this.store.select(selectAllPosts);
  readonly page$ = this.store.select(selectMetaPage);
  readonly totalPages$ = this.store.select(selectMetaTotalPages);
  readonly limit$ = this.store.select(selectMetaLimit);

  ngOnInit() {
    this.page$.pipe(skip(1)).subscribe(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  nextPage(page: number, totalPages: number, limit: number) {
    if (page < totalPages) {
      this.store.dispatch(
        loadMyPosts({
          page: page + 1,
          limit,
        }),
      );
    }
  }

  previousPage(page: number, limit: number) {
    if (page > 1) {
      this.store.dispatch(
        loadMyPosts({
          page: page - 1,
          limit,
        }),
      );
    }
  }
}
