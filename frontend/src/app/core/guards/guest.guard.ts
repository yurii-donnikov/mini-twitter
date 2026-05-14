import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guestGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  alert('guestGuard');
  // if (!token) {
  //   router.navigate(['/login']);
  //   return false;
  // }
  return true;
};
