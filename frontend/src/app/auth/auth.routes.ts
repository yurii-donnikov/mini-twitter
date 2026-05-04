import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { guestGuard } from '../core/guards/guest.guard';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

export const authRoutes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [guestGuard] },
  { path: 'auth/callback', component: AuthCallbackComponent },
];
