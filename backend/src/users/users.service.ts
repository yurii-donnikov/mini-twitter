import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  private async findUserOrThrow(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findOrCreateGoogleUser(data: {
    email: string;
    googleId: string;
    username: string;
    avatar?: string;
  }) {
    let user = await this.userRepository.findOne({
      where: { email: data.email },
    });

    if (!user) {
      user = this.userRepository.create({
        email: data.email,
        googleId: data.googleId,
        username: data.username,
        avatar: data.avatar,
      });
      await this.userRepository.save(user);
    }
    return user;
  }

  async getAllUsers() {
    return this.userRepository.find();
  }

  async getUserById(id: number) {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  async deleteUser(id: number) {
    const user = await this.findUserOrThrow(id);
    await this.userRepository.remove(user);
    return { message: 'User deleted' };
  }

  async updateUser(id: number, dto: UpdateUserDto) {
    const user = await this.findUserOrThrow(id);
    Object.assign(user, dto);
    return this.userRepository.save(user);
  }
}
