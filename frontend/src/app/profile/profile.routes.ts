import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { accessGuard } from '../core/guards/access.guard';

export const profileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [accessGuard],
    data: {
      requiresAuth: true,
    },
  },
];
