import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
  Delete,
  Req,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { PostService } from './post.service';
import { AuthGuard } from '@nestjs/passport';
import type { JwtUser } from 'src/interface.type';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/my')
  getMe(@Req() req: JwtUser) {
    return this.postService.getMyPosts(req.user.id);
  }

  @Get('/posts')
  getAllPosts() {
    return this.postService.getAllPosts();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createPost(@Body('content') content: string, @Req() req: JwtUser) {
    const user = await this.usersService.getUser(req.user.id);
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
    return this.postService.deletePost(Number(id));
  }
}
