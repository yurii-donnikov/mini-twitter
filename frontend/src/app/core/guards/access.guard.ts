import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';

export const accessGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const requiresAuth = route.data['requiresAuth'];
  const userId = localStorage.getItem('userId');

  if (requiresAuth && !token) {
    return router.createUrlTree(['/login']);
  }

  if (!requiresAuth && token) {
    return router.createUrlTree(['/profile', userId]);
  }

  return true;
};
