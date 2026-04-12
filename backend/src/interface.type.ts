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
