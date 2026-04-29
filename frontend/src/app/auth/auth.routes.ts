import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { guestGuard } from '../core/guards/guest.guard';

export const authRoutes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [guestGuard] },
];
