import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated, logout } from '../../../store/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private store = inject(Store);
  private router = inject(Router);
  readonly isAuthenticated$ = this.store.select(selectIsAuthenticated);

  logout() {
    this.store.dispatch(logout());
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getJwt() {
    console.log(localStorage.getItem('token'));
  }
}
