import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout, selectIsAuthenticated, selectProfile } from '../../store/auth';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '../../shared/components/user-card/user-card.component';
import { PostFeedComponent } from '../../shared/components/post-feed/post-feed.component';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, UserCardComponent, PostFeedComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  private store = inject(Store);

  readonly isAuthenticated$ = this.store.select(selectIsAuthenticated);
  readonly user$ = this.store.select(selectProfile);
}
