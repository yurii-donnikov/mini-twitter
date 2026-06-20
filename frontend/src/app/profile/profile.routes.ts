import { Routes } from '@angular/router';
import { ProfileComponent } from './profile-page/profile.component';
import { accessGuard } from '../core/guards/access.guard';

export const profileRoutes: Routes = [
  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [accessGuard],
    data: {
      requiresAuth: true,
    },
  },
];
