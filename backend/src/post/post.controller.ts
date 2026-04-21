import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly usersService: UsersService,
  ) {}
  @Post()
  async createPost(
    @Body('content') content: string,
    @Body('userId') userId: number,
  ) {
    const user = await this.usersService.getUser(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.postService.create(content, user);
  }
}
