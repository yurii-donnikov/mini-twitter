import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}
  async findOrCreate(data: {
    email: string;
    googleId: string;
    username: string;
    avatar?: string;
  }) {
    let user = await this.repo.findOne({
      where: { email: data.email },
    });

    if (!user) {
      user = this.repo.create({
        email: data.email,
        googleId: data.googleId,
        username: data.username,
        avatar: data.avatar,
      });
      await this.repo.save(user);
    }

    return user;
  }
}
