import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { accessGuard } from '../core/guards/access.guard';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

export const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [accessGuard],
    data: {
      requiresAuth: false,
    },
  },
  {
    path: 'auth/callback',
    component: AuthCallbackComponent,
  },
];
