import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';

export const accessGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const requiresAuth = route.data['requiresAuth'];

  if (requiresAuth && !token) {
    return router.createUrlTree(['/login']);
  }

  if (!requiresAuth && token) {
    return router.createUrlTree(['/profile']);
  }

  return true;
};
