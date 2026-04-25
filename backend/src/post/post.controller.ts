import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { PostService } from './post.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createPost(
    @Body('content') content: string,
    @Body('userId') userId: number,
  ) {
    const user = await this.usersService.getUser(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.postService.createPost(content, user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  getPosts(@Param('id') id: string) {
    return this.postService.getPosts(Number(id));
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.postService.removePost(Number(id));
  }
}
