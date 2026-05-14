import { Store } from '@ngrx/store';
import { AuthApi } from '../api/auth.api';
import { loadUserFromToken, logout } from '../../store/auth/auth.actions';
import { of } from 'rxjs';

export function initAuthFactory(store: Store, authApi: AuthApi) {
  return () => {
    const token = localStorage.getItem('token');
    alert('initAuthFactory');
    console.log('tok ', token);
    if (!token) {
      store.dispatch(logout());
      return of(true);
    }
    return store.dispatch(loadUserFromToken());
  };
}
