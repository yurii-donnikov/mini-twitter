import { AuthState } from './auth';
import { UserState } from './user';

export interface Store {
  auth: AuthState;
  user: UserState;
}
