import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllPosts } from '../../../store/post/post.selectors';
import { PostCardComponent } from '../post-card/post-card.component';
import { AsyncPipe } from '@angular/common';
import { PostComposerComponent } from '../post-composer/post-composer.component';

@Component({
  selector: 'app-post-feed',
  imports: [PostCardComponent, AsyncPipe, PostComposerComponent],
  templateUrl: './post-feed.component.html',
  styleUrl: './post-feed.component.scss',
})
export class PostFeedComponent {
  private store = inject(Store);
  readonly posts$ = this.store.select(selectAllPosts);
}
