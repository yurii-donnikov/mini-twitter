import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { Post } from '../../../store/post';
import { DatePipe, AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectProfile } from '../../../store/auth';

@Component({
  selector: 'app-post-card',
  imports: [DatePipe, AsyncPipe],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PostCardComponent {
  @Input() post!: Post;
  private store = inject(Store);

  readonly user$ = this.store.select(selectProfile);

  deletePost(id: number) {
    console.log('delete', id);

    // dispatch delete action
  }
}
