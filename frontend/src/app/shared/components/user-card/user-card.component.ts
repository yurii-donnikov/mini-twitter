import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated, selectProfile } from '../../../store/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  private store = inject(Store);
  readonly user$ = this.store.select(selectProfile);
  constructor() {
    console.log(this.user$);
  }
}
