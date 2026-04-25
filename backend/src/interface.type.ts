import { Request } from 'express';

export interface GoogleUser {
  email: string;
  name: string;
  googleId: string;
  avatar?: string;
}

export interface RequestWithUser extends Request {
  user: GoogleUser;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string | null;
  googleId: string;
  avatar: string;
}

export interface JwtPayload {
  sub: number;
  email: string;
}
