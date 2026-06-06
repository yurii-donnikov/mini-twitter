import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from '../../../store/post';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-card',
  imports: [DatePipe],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PostCardComponent {
  @Input() post!: Post;
}
