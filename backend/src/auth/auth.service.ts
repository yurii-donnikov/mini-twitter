import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  async login(email: string) {
    const payload = {
      email: email,
    };
    const user = await this.repo.findOne({
      where: { email: email },
    });

    const access_token = this.jwtService.sign(payload);

    return { user, token: access_token };
  }
}
