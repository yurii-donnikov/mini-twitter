import { Controller, Get, Req, UseGuards, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { JwtUser, RequestWithUser } from 'src/interface.type';
import { AuthService } from './auth.service';
import type { Response } from 'express';

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
  getMe(@Req() req: JwtUser) {
    return this.authService.getMe(req.user.id);
  }
}
