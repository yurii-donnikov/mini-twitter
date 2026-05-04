import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadUserFromToken } from '../../store/auth';

@Component({
  selector: 'app-auth-callback',
  imports: [],
  templateUrl: './auth-callback.component.html',
})
export class AuthCallbackComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {}

  ngOnInit() {
    alert(1);
    this.route.queryParams.subscribe((params) => {
      const token = params['token'];

      if (token) {
        localStorage.setItem('token', token);
        this.store.dispatch(loadUserFromToken());
        this.router.navigate(['/profile']);
      }
    });
  }
}
