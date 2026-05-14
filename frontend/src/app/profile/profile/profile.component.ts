import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout, selectIsAuthenticated } from '../../store/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  private store = inject(Store);
  private router = inject(Router);
  isAuthenticated$ = this.store.select(selectIsAuthenticated);
  logout() {
    // this.store.dispatch(logout());
    // localStorage.removeItem('token');
    // this.router.navigate(['/login']);
  }
}
