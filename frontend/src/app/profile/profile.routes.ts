import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { guestGuard } from '../core/guards/guest.guard';

export const profileRoutes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [guestGuard] },
];
