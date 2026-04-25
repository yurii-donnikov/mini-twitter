import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

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

  async getUsers() {
    const users = await this.repo.find();
    return users;
  }

  async getUser(id: number) {
    return await this.repo.findOne({
      where: { id: id },
    });
  }

  async removeUser(id: number) {
    const user = await this.repo.findOneBy({ id });
    if (!user) {
      throw new Error('User not found');
    }
    await this.repo.remove(user);
    return { message: 'User deleted' };
  }

  async updateUser(id: number, dto: UpdateUserDto) {
    const user = await this.repo.findOneBy({ id });
    if (!user) {
      throw new Error('User not found');
    }
    Object.assign(user, dto);
    return this.repo.save(user);
  }
}
