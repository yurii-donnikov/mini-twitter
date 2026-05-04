import { Controller, Get, Req, UseGuards, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { RequestWithUser } from 'src/interface.type';
import { AuthService } from './auth.service';
import type { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: RequestWithUser, @Res() res: Response) {
    const { token } = await this.authService.login(req.user.email);

    return res.redirect(`http://localhost:4200/auth/callback?token=${token}`);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/me')
  getUser(@Req() req: RequestWithUser) {
    console.log(123456, req.user);
    //return req.user;
    return this.authService.login2();
  }
  // getMe(@Req() req) {
  // return req.user;
  //}
}
