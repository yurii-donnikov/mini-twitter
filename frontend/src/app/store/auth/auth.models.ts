import { User } from '../user/user.models';

export interface AuthState {
  isAutentificated: boolean;
  error: string | null;
  profile: User | null;
}
