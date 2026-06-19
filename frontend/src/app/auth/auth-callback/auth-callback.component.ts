import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadUserFromToken, selectProfile } from '../../store/auth';

@Component({
  selector: 'app-auth-callback',
  imports: [],
  template: '',
})
export class AuthCallbackComponent {
  private store = inject(Store);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  readonly user$ = this.store.select(selectProfile);

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const token = params['token'];

      if (token) {
        localStorage.setItem('token', token);
        this.store.dispatch(loadUserFromToken());
        this.user$.pipe().subscribe((user) => {
          if (!user) return;
          this.router.navigate(['/profile', user.id]);
        });
      }
    });
  }
}
