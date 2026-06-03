import { Store } from '@ngrx/store';
import { loadUserFromToken, logout } from '../../store/auth/auth.actions';
import { of } from 'rxjs';

export function initAuthFactory(store: Store) {
  return () => {
    const token = localStorage.getItem('token');
    if (!token) {
      store.dispatch(logout());
      return of(true);
    }
    return store.dispatch(loadUserFromToken());
  };
}
