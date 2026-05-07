export interface User {
  id: number;
  username: string;
  email: string;
  password: string | null;
  googleId: string;
  avatar: string;
}

export interface UserState {
  profile: User | null;
}
