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
    // const payload = {
    //   email: email,
    // };
    const user = await this.repo.findOne({
      where: { email: email },
    });

    const payload = {
      id: user?.id,
      email: user?.email,
    };

    console.log(5555, user, 111, payload);

    const access_token = this.jwtService.sign(payload);

    return { user, token: access_token };
  }

  login2() {
    console.log(123);
  }
}
