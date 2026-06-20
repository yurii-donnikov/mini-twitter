import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PostFeedComponent } from '../../shared/components/post-feed/post-feed.component';
import { UserCardComponent } from '../../shared/components/user-card/user-card.component';
import { loadUser } from '../../store/user';
import { selectUser } from '../../store/user';
import { selectProfile } from '../../store/auth';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, UserCardComponent, PostFeedComponent, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  readonly user$ = this.store.select(selectUser);
  readonly userId$ = this.route.paramMap.pipe(
    map((params) => Number(params.get('id'))),
  );
  readonly loggedUser$ = this.store.select(selectProfile);
  readonly showMyProfileButton$ = combineLatest([
    this.user$,
    this.loggedUser$,
  ]).pipe(
    map(([currentUser, profile]) => {
      if (!currentUser || !profile) {
        return false;
      }

      return currentUser.id !== profile.id;
    }),
  );

  ngOnInit(): void {
    this.userId$.subscribe((id) => {
      if (!id) return;

      this.store.dispatch(loadUser({ id: String(id) }));
    });
  }
}
